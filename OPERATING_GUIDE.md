# Operating Guide for ZhuZhu's Hugo Site

This guide will help you understand how to operate and maintain this Hugo site repository.

## 🔧 Basic Operations

### 1. Run the Site Locally
```bash
hugo server
```
- Server will start at `http://localhost:1313/zzf-hugo/`
- Changes to content and layouts are automatically reloaded

### 2. Build for Production
```bash
hugo
```
- Generated files in `public/` directory
- Ready for deployment to any static hosting service

### 3. Update the Theme
```bash
cd themes/ananke
git pull
cd ../..
git add themes/ananke
git commit -m "Update Ananke theme"
```

## 📝 Creating New Content

### Celebration Event
```bash
hugo new celebration/new-event/_index.md
```

### Travel Story
```bash
hugo new travel/new-destination/_index.md
```

### Content Front Matter
All content files use YAML front matter. Example:
```yaml
---
title: "My Birthday Celebration"
description: "A wonderful birthday celebration with friends and family"
featured_image: "/images/heroes/birthday.webp"
date: 2025-01-01
---
```

## 🎨 Customizing the Site

### Update Site Configuration
Edit `hugo.yml` to change:
- Site title and description
- Base URL
- Favicon and site logo
- Custom CSS/JS files
- Fonts and colors

### Add Custom CSS
Create/Edit files in `assets/css/` directory. The main files are:
- `live-photo.css` - Live photo effects
- `custom-class.scss` - Custom styles
- `font.scss` - Font configurations
- `scroll-trigger.css` - ScrollTrigger animations

### Add Custom JavaScript
Create/Edit files in `assets/js/` directory. The main files are:
- `img.js` - Image-related scripts
- `video.js` - Video handling
- `style.js` - Style-related scripts
- `scroll-trigger.js` - Scroll animations

## 📦 Managing Static Files

### Images
- Store hero images in `static/images/heroes/`
- Store other images in `static/images/`
- Original images in `static/original_images/`

### Videos
- Store videos in `static/videos/`

### JavaScript Libraries
- Local copies are stored in `static/js/`
- Avoid CDN links for better stability (as configured in `hugo.yml`)

## 🔍 Troubleshooting

### Theme Not Loading
```bash
git submodule update --init --recursive
```

### Hugo Version Issues
```bash
hugo version
# Should be 0.136.5+ extended
```

### Build Errors
```bash
hugo --cleanDestinationDir
# Cleans and rebuilds the site
```

## 🚀 Deployment

1. Build the site: `hugo`
2. Upload the `public/` directory to any static hosting service:
   - GitHub Pages
   - Netlify
   - Vercel
   - Any web server

---

**Need more help?** Check the [Hugo documentation](https://gohugo.io/) or the [Ananke theme documentation](https://github.com/theNewDynamic/gohugo-theme-ananke).
