# Djangobee Prints Website

A modern, responsive Hugo-powered website for showcasing technology integration in elementary education.

## Project Structure

```
djangobee_prints_website/
├── hugo.toml                    # Hugo configuration
├── content/                     # Markdown content files
│   ├── about.md                 # About page
│   ├── tech-guides/             # Technology Guides posts
│   │   ├── getting-started-classroom-recorders.md
│   │   ├── diy-xylophone-mounting.md
│   │   └── digital-literacy-grade-1.md
│   └── thoughts/                # Educational Thoughts posts
│       ├── technology-integration-matters.md
│       ├── balance-tech-hands-on.md
│       └── classroom-ipad-station.md
├── layouts/                     # HTML templates
│   ├── _default/                # Default layouts
│   │   ├── baseof.html          # Base template
│   │   └── single.html          # Individual post template
│   ├── partials/                # Reusable components
│   │   ├── header.html          # Navigation and hero
│   │   └── footer.html          # Footer
│   ├── index.html               # Homepage
│   ├── tech-guides/             # Tech guides section
│   │   └── list.html
│   └── thoughts/                # Thoughts section
│       └── list.html
├── static/                      # Static files (CSS, images)
│   ├── styles.css
│   └── assets/
│       ├── recorder_clip_1.jpg
│       └── xylophone_mount_1.jpg
├── public/                      # Generated site (after build)
└── old_html_site/               # Backup of original HTML files
```

## Features

### Current Features
- **Responsive Design**: Works on desktop, tablet, and mobile devices
- **Feed-based Layout**: Card-based post display with filtering
- **Multiple Pages**: Home, About, Tech Guides, Educational Thoughts
- **Category Filtering**: Automatically filters posts by category on each page
- **Mobile Navigation**: Hamburger menu for smaller screens

### Post Feed
The home page displays a mixed feed of:
- Technology Guides (green badge)
- Educational Thoughts (red badge)

Each post card shows:
- Category badge
- Title
- Publication date
- Excerpt
- Featured image (if available)
- "Read More" link

## How to Use

### Development Server (Live Preview)
```bash
hugo server -D
```
This starts a local server at `http://localhost:1313` with live reload. Any changes to content or layouts will automatically refresh the browser.

### Building the Site
```bash
hugo
```
This generates the static site in the `public/` directory, ready for deployment.

### Adding New Posts

Creating a new post is simple - just create a markdown file!

#### For a Technology Guide:
1. Create a new file in `content/tech-guides/your-post-slug.md`
2. Add frontmatter and content:

```markdown
---
title: "Your Post Title"
date: 2025-01-20
type: "tech"
image: "/assets/your-image.jpg"  # Optional
---

Your post summary goes here (will be used as excerpt).

## First Heading

Your content here...
```

#### For an Educational Thought:
1. Create a new file in `content/thoughts/your-post-slug.md`
2. Add frontmatter and content:

```markdown
---
title: "Your Post Title"
date: 2025-01-20
type: "thought"
image: "/assets/your-image.jpg"  # Optional
---

Your post summary goes here.

## Your Content

Write your thoughts...
```

### Adding Images
1. Place image files in the `static/assets/` folder
2. Reference them in posts as `/assets/filename.jpg`
3. Recommended image size: 800x400px for post cards, larger for featured images

### Quick Commands

```bash
# Start development server
hugo server -D

# Build for production
hugo

# Create new post (alternative method)
hugo new content/tech-guides/my-new-post.md

# Check Hugo version
hugo version
```

## Customization

### Colors
Edit color variables in `styles.css` under the `:root` section:
```css
:root {
    --primary-color: #2563eb;      /* Main brand color */
    --secondary-color: #7c3aed;    /* Accent color */
    --tech-guide-color: #059669;   /* Tech guides badge */
    --thought-color: #dc2626;      /* Thoughts badge */
}
```

### Content
- **About Page**: Edit `content/about.md`
- **Site Title & Description**: Edit `hugo.toml`
- **Navigation**: Edit the `[menu.main]` section in `hugo.toml`
- **Hero Section**: Edit `layouts/partials/header.html`
- **Footer**: Edit `layouts/partials/footer.html`

### Templates
All layout files are in the `layouts/` directory:
- `layouts/_default/baseof.html` - Base template structure
- `layouts/index.html` - Homepage feed
- `layouts/_default/single.html` - Individual post layout
- `layouts/partials/` - Reusable components

## Next Steps

### Recommended Enhancements
1. **Add Search**: Implement Hugo's built-in search or Lunr.js
2. **Comments**: Add Disqus, utterances, or giscus for discussions
3. **Newsletter**: Integrate Mailchimp, ConvertKit, or Buttondown
4. **RSS Feed**: Hugo generates this automatically at `/index.xml`
5. **Analytics**: Add Google Analytics, Plausible, or Fathom
6. **Contact Form**: Use Netlify Forms, Formspree, or similar
7. **Social Sharing**: Add share buttons to posts
8. **Tags/Categories**: Implement taxonomy pages

## Browser Compatibility
- Chrome/Edge: ✓
- Firefox: ✓
- Safari: ✓
- Mobile browsers: ✓

## Deployment Options

### Netlify (Recommended)
1. Push your site to GitHub
2. Connect Netlify to your repository
3. Build command: `hugo`
4. Publish directory: `public`
5. Deploy!

### GitHub Pages
1. Build the site: `hugo`
2. Push the `public/` directory to `gh-pages` branch
3. Enable GitHub Pages in repository settings

### Vercel
1. Push to GitHub
2. Import project in Vercel
3. Framework preset: Hugo
4. Deploy!

### Traditional Hosting
1. Build: `hugo`
2. Upload contents of `public/` directory to your web host
3. Point domain to the uploaded files

## Why Hugo?

Hugo advantages for this site:
- **Fast**: Builds your site in milliseconds
- **Simple**: Write posts in markdown, not HTML
- **Flexible**: Easy to customize layouts and styling
- **No Database**: Static files are fast and secure
- **Free Hosting**: Many free hosting options available
- **Version Control**: All content is in Git-friendly text files

## Working with Markdown

Posts are written in markdown with frontmatter. Example:

```markdown
---
title: "My Post Title"
date: 2025-01-20
type: "tech"
image: "/assets/my-image.jpg"
---

This first paragraph becomes the excerpt/summary.

## Section Heading

- Bullet points
- Are easy

### Subsection

**Bold text** and *italic text* work as expected.

[Links work too](https://example.com)
```

## Backup

Your original HTML site is preserved in `old_html_site/` for reference.

## Support
- Hugo Documentation: https://gohugo.io/documentation/
- Markdown Guide: https://www.markdownguide.org/
- Project Plan: See `plan.md` for the original vision
