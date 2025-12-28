# New Post Creation Workflow

This document outlines the step-by-step process for creating new posts when provided with text/transcription and media files.

## Workflow Overview
When the user provides:
- Starting text or transcription
- Photos or other artifacts
- Post topic/idea

Claude should follow this structured process to create a polished, publish-ready post.

---

## Step 1: Understand the Content Type

**Ask the user (if not clear):**
- Is this a **Technology Guide** or an **Educational Thought**?
- What's the intended audience/grade level (if applicable)?
- Any specific learning objectives or key points to emphasize?

**Technology Guide indicators:**
- How-to instructions
- Tool/software reviews
- Classroom setup procedures
- Step-by-step activities

**Educational Thought indicators:**
- Personal reflections
- Teaching philosophy
- Classroom experiences
- Professional insights

---

## Step 2: Analyze Provided Materials

### Review Text/Transcription
- Read through all provided text
- Identify key themes and main points
- Note any unclear sections that need clarification
- Check for educational terminology or jargon that needs explanation

### Review Images/Artifacts
- Catalog all provided images
- Determine which images are:
  - Featured image candidates
  - Supporting screenshots/photos
  - Supplementary materials
- Note any image quality issues or needed edits

---

## Step 3: Structure the Post

### Create Post Outline
Based on content type:

**For Technology Guides:**
```markdown
1. Introduction & Overview
2. Required Materials/Software
3. Age/Grade Recommendations
4. Learning Objectives
5. Step-by-Step Instructions (with images)
6. Tips & Troubleshooting
7. Extension Activities (optional)
8. Conclusion
```

**For Educational Thoughts:**
```markdown
1. Hook/Opening Reflection
2. Context/Background
3. Main Discussion Points
4. Real Classroom Examples
5. Research/Theory Connection (if applicable)
6. Practical Takeaways
7. Reflection Questions/Discussion Prompts
8. Conclusion
```

---

## Step 4: Process Images

### Image Organization
1. Create post-specific asset folder: `/assets/posts/YYYY-MM-DD-post-slug/`
2. Rename images descriptively:
   - `featured.jpg` - Main post image
   - `step-01.jpg`, `step-02.jpg` - Tutorial steps
   - `example-01.jpg` - Supporting examples
   - `screenshot-tool-name.jpg` - Software screenshots

### Image Optimization
- Resize images appropriately (max width: 1200px for featured, 800px for inline)
- Compress images for web (balance quality vs. file size)
- Add alt text descriptions for accessibility
- Note: Ask user if image optimization is needed or handle automatically

---

## Step 5: Write the Post

### Frontmatter Metadata
Every post should include:
```yaml
---
title: "Clear, Descriptive Title"
date: YYYY-MM-DD
lastmod: YYYY-MM-DD
author: "Djangobee Prints"
category: "Technology Guide" or "Educational Thought"
tags: ["tag1", "tag2", "tag3"]
featured_image: "/assets/posts/YYYY-MM-DD-post-slug/featured.jpg"
featured_image_alt: "Descriptive alt text for featured image"
excerpt: "Brief 1-2 sentence summary for preview cards and SEO"
draft: false
---
```

### Content Writing Guidelines
- **Tone**: Professional yet warm and approachable
- **Voice**: First person is fine for Educational Thoughts; second person ("you") for guides
- **Clarity**: Use clear, jargon-free language; define technical terms
- **Structure**: Use headers, bullet points, and numbered lists for scanability
- **Length**:
  - Technology Guides: 800-1500 words depending on complexity
  - Educational Thoughts: 600-1200 words
- **Links**: Include relevant external resources when helpful
- **Images**: Reference images with descriptive captions

### Formatting Standards
- Use `##` for main sections (H2)
- Use `###` for subsections (H3)
- Use code blocks for technical commands or code snippets
- Use blockquotes for emphasis or notable quotes
- Include image markdown: `![Alt text](/path/to/image.jpg)`
- Add captions below images: `*Caption text here*`

---

## Step 6: Create the Post File

### File Naming Convention
- Format: `YYYY-MM-DD-post-slug.md`
- Example: `2024-12-24-integrating-ipads-kindergarten.md`
- Slug: lowercase, hyphens, descriptive, SEO-friendly

### File Location
Save to appropriate directory:
- Technology Guides: `/content/tech-guides/YYYY-MM-DD-post-slug.md`
- Educational Thoughts: `/content/thoughts/YYYY-MM-DD-post-slug.md`

---

## Step 7: Quality Check

### Content Review Checklist
- [ ] Frontmatter metadata is complete and accurate
- [ ] Title is clear and engaging
- [ ] Excerpt is compelling and informative
- [ ] Content flows logically with clear structure
- [ ] All images are properly referenced and have alt text
- [ ] Links are working and relevant
- [ ] Grammar and spelling are correct
- [ ] Tone matches intended audience (elementary educators)
- [ ] Post provides actionable value

### Technical Review Checklist
- [ ] File is saved in correct directory
- [ ] Images are in `/assets/posts/[post-slug]/` folder
- [ ] Image paths are correct
- [ ] Markdown formatting is valid
- [ ] Frontmatter YAML is properly formatted
- [ ] No broken links or references

---

## Step 8: Present to User

### Provide Summary
Show the user:
1. **Post title and excerpt**
2. **File location**
3. **Image count and locations**
4. **Word count**
5. **Any clarifications needed** (if there were ambiguities in source material)

### Offer Options
Ask the user:
- "Would you like me to make any adjustments?"
- "Should I revise any sections?"
- "Are there additional points to emphasize?"
- "Is the tone appropriate?"

---

## Step 9: Finalize

Once user approves:
- Ensure all files are saved
- Confirm image assets are organized
- Set `draft: false` in frontmatter (or leave as `draft: true` if user wants to review on site first)
- Provide next steps (e.g., "Ready to commit to git" or "Ready for site build")

---

## Special Cases

### Transcription Cleanup
If working from audio transcription:
- Remove filler words (um, uh, like)
- Fix grammar and sentence structure
- Organize rambling thoughts into coherent paragraphs
- Preserve authentic voice while improving readability

### Multiple Posts from One Session
If user provides material for multiple posts:
- Create outline for each post first
- Confirm scope and focus of each
- Process one at a time
- Ensure no content duplication

### Incomplete Information
If critical information is missing:
- Flag it immediately
- Ask specific questions
- Suggest reasonable defaults
- Don't publish with placeholders

---

## Quick Reference Template

When starting a new post, use this checklist:

```
[ ] Identify content type (Tech Guide / Educational Thought)
[ ] Review all provided text and images
[ ] Create post outline
[ ] Set up asset folder: /assets/posts/YYYY-MM-DD-slug/
[ ] Process and rename images
[ ] Write complete post with frontmatter
[ ] Save to: /content/[category]/YYYY-MM-DD-slug.md
[ ] Quality check (content + technical)
[ ] Present summary to user
[ ] Make requested revisions
[ ] Finalize and confirm
```

---

## Notes for Claude

- **Always read this workflow** before creating content
- **Ask questions** when user intent is unclear
- **Maintain consistency** across all posts
- **Prioritize accessibility** (alt text, semantic HTML when applicable)
- **Keep it educational** - this is for teachers helping teachers
- **Preserve authenticity** - maintain the user's voice and passion for meaningful tech integration
