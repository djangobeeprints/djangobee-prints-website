# Social Media Agent

Automatically generates social media content when you commit new blog posts!

## How It Works

1. You write a new blog post in `content/tech-guides/` or `content/thoughts/`
2. You commit it: `git add content/... && git commit -m "Add new post"`
3. **The agent automatically runs** and generates:
   - 3 Twitter/X post options
   - 2 Bluesky post options
   - 1 Thread option (if applicable)
4. Output appears in your terminal + saved to `.claude/social-media-drafts/`
5. Copy-paste to your social platforms!

## Setup

### 1. Install Python Package

```bash
pip install anthropic
```

### 2. Set Your API Key

Get your API key from: https://console.anthropic.com/

Then set it in your environment:

```bash
# Add to ~/.bashrc or ~/.zshrc
export ANTHROPIC_API_KEY='your-api-key-here'
```

Or set it just for this session:
```bash
export ANTHROPIC_API_KEY='your-api-key-here'
```

### 3. Done!

The git hook is already installed at `.git/hooks/post-commit`

## Usage

Just commit new posts as normal:

```bash
# Create a new post
vim content/tech-guides/my-new-post.md

# Commit it
git add content/tech-guides/my-new-post.md
git commit -m "Add new post about 3D printing"

# 🤖 Agent automatically runs and generates social content!
```

## Manual Triggering

You can also run the agent manually on any post:

```bash
python3 .claude/scripts/social_media_agent.py content/tech-guides/my-post.md
```

## Output Location

Generated content is saved to:
```
.claude/social-media-drafts/post-name-social.txt
```

You can review these drafts anytime!

## Cost

Uses Claude API (Sonnet 4.5):
- ~$0.01-0.03 per post
- Very affordable for occasional blog posts

## Customization

Edit `.claude/scripts/social_media_agent.py` to:
- Change the tone or style
- Add more platforms (Instagram, LinkedIn, etc.)
- Adjust hashtags
- Change output format

## Troubleshooting

**"anthropic package not installed"**
```bash
pip install anthropic
```

**"ANTHROPIC_API_KEY not set"**
```bash
export ANTHROPIC_API_KEY='your-key'
```

**Agent doesn't run on commit**
- Make sure the hook is executable: `chmod +x .git/hooks/post-commit`
- Check you're committing files in `content/tech-guides/` or `content/thoughts/`
- Try running manually to test: `python3 .claude/scripts/social_media_agent.py content/tech-guides/your-post.md`

## Disabling

To temporarily disable:
```bash
mv .git/hooks/post-commit .git/hooks/post-commit.disabled
```

To re-enable:
```bash
mv .git/hooks/post-commit.disabled .git/hooks/post-commit
```
