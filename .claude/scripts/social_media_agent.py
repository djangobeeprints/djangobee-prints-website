#!/usr/bin/env python3
"""
Social Media Agent for Djangobee Prints
Automatically generates social media content for new blog posts
"""

import os
import sys
from pathlib import Path

try:
    import anthropic
except ImportError:
    print("❌ Error: anthropic package not installed")
    print("Install it with: pip install anthropic")
    sys.exit(1)


def read_post(post_path):
    """Read the blog post content"""
    try:
        with open(post_path, 'r', encoding='utf-8') as f:
            return f.read()
    except Exception as e:
        print(f"❌ Error reading post: {e}")
        sys.exit(1)


def generate_social_content(post_content, post_title):
    """Use Claude API to generate social media content"""

    # Get API key from environment
    api_key = os.environ.get('ANTHROPIC_API_KEY')
    if not api_key:
        print("❌ Error: ANTHROPIC_API_KEY environment variable not set")
        print("Set it with: export ANTHROPIC_API_KEY='your-key-here'")
        print("Or add it to your ~/.bashrc or ~/.zshrc")
        sys.exit(1)

    client = anthropic.Anthropic(api_key=api_key)

    system_prompt = """You are an expert social media manager specializing in educational technology content for elementary educators.

Your audience: Elementary school teachers, music educators, tech coordinators
Topics: Technology integration, 3D printing in education, digital literacy, hands-on learning
Tone: Practical, friendly, helpful, approachable (not overly academic)
Brand Voice: Experienced educator sharing real classroom solutions

Your task: Generate engaging, platform-specific social media posts for a blog post."""

    user_prompt = f"""I just published a new blog post. Please generate social media content for it.

BLOG POST CONTENT:
{post_content}

Please generate:
1. THREE Twitter/X posts (max 280 characters each):
   - Option A: Question/engagement format
   - Option B: Tip/value format
   - Option C: Personal/story format

2. TWO Bluesky posts (max 300 characters each, more conversational)

3. ONE thread option (3-5 tweets if the content warrants it)

For each post:
- Include relevant hashtags: #EdTech #ElemEd #TeachersOfTwitter (2-3 max for Twitter, 1-2 for Bluesky)
- Make them engaging and valuable on their own
- Include placeholder [BLOG_LINK] where the blog URL should go
- Show character count for each option

Format your response clearly with sections for each platform and option."""

    print("⏳ Generating social media content with Claude...")
    print()

    try:
        message = client.messages.create(
            model="claude-sonnet-4-5-20250929",
            max_tokens=2000,
            system=system_prompt,
            messages=[{
                "role": "user",
                "content": user_prompt
            }]
        )

        return message.content[0].text
    except Exception as e:
        print(f"❌ Error calling Claude API: {e}")
        sys.exit(1)


def main():
    if len(sys.argv) < 2:
        print("Usage: social_media_agent.py <post-path>")
        sys.exit(1)

    post_path = sys.argv[1]
    post_name = Path(post_path).stem

    print("=" * 60)
    print("🤖 SOCIAL MEDIA AGENT")
    print("=" * 60)
    print(f"📄 Post: {post_name}")
    print()

    # Read the post
    post_content = read_post(post_path)

    # Generate social media content
    social_content = generate_social_content(post_content, post_name)

    # Output the results
    print(social_content)
    print()
    print("=" * 60)
    print("✅ Social media content generated!")
    print("📋 Copy and paste the options above to your social platforms")
    print("=" * 60)

    # Optionally save to file
    output_dir = Path(".claude/social-media-drafts")
    output_dir.mkdir(parents=True, exist_ok=True)
    output_file = output_dir / f"{post_name}-social.txt"

    with open(output_file, 'w', encoding='utf-8') as f:
        f.write(social_content)

    print(f"💾 Also saved to: {output_file}")
    print()


if __name__ == "__main__":
    main()
