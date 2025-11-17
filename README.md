# ZhuZhu's Hugo Site

A personal Hugo static site repository, featuring celebration events and travel stories.

## 📁 Repository Structure

```
├── archetypes/          # Content templates
├── assets/              # CSS, JS, and other assets
├── content/             # Site content
│   ├── celebration/     # Celebration events (birthdays, anniversaries)
│   ├── travel/          # Travel stories and photos
│   └── _index.md        # Homepage content
├── layouts/            # Custom layouts
├── public/             # Generated static site (Git ignored)
├── resources/          # Hugo-generated resources (Git ignored)
├── static/             # Static files (images, videos, JS libraries)
├── themes/             # Hugo theme (Ananke)
├── .gitignore         # Git ignore rules
├── .gitmodules        # Git submodules (theme)
├── CLAUDE.md          # Claude interaction notes
├── hugo.yml           # Main configuration file
└── README.md          # This file
```

## 🎨 Theme

This site uses the **Ananke** theme for Hugo, which is included as a Git submodule. Ananke is a responsive, feature-rich theme with a clean design.

## 🚀 Getting Started

### Prerequisites

- Hugo 0.136.5+ extended version (with SCSS support)

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/yourusername/zzf-hugo.git
   cd zzf-hugo
   ```

2. **Initialize submodules**:
   ```bash
   git submodule update --init --recursive
   ```

### Running the Site Locally

```bash
hugo server
```

The site will be available at: `http://localhost:1313/zzf-hugo/`

### Building the Site for Production

```bash
hugo
```

The static files will be generated in the `public/` directory.

## 📝 Content Structure

### Homepage (`content/_index.md`)
- Main site landing page with featured image and introduction

### Celebration (`content/celebration/`)
- Birthday events and other celebrations
- Example: `2024-zmm-birthday/`

### Travel (`content/travel/`)
- Travel stories with photos and descriptions

## 🛠️ Customizations

### Configuration
- Main settings: `hugo.yml`
- Custom CSS: `assets/css/`
- Custom JavaScript: `assets/js/`

### Static Files
- Images: `static/images/`
- Videos: `static/videos/`
- JavaScript libraries: `static/js/` (including ScrollTrigger, canvas-confetti, scrolly-video)

## 📦 Included Libraries

- **ScrollTrigger**: For scroll animations
- **canvas-confetti**: For confetti effects
- **scrolly-video**: For scroll-triggered video animations

All libraries are hosted locally for better stability.

## 🎯 Key Features

- Responsive design
- Scroll animations
- Video background support
- Customizable color scheme
- Photo galleries
- Piggy-themed icons and images

## 📄 License

MIT License (assuming - modify as needed)

## 🤝 Contributing

Feel free to submit issues or pull requests.

---

**Happy Hugo-ing! 🐷🐷**
