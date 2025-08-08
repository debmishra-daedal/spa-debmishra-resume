# SPA Debmishra Resume - Nuxt.js Vue.js Website

A beautiful and modern Vue.js website built with the Nuxt.js framework.

## 🚀 Features

- **Modern UI/UX**: Beautiful gradient design with glassmorphism effects
- **Responsive Design**: Mobile-first approach that works on all devices
- **Interactive Elements**: Clickable button with animated feedback
- **Vue.js 3**: Latest Vue.js with Composition API
- **Nuxt.js 3**: Full-stack Vue.js framework

## 🛠️ Tech Stack

- **Frontend**: Vue.js 3 + Nuxt.js 3
- **Styling**: CSS3 with modern features (Grid, Flexbox, Animations)
- **Build Tool**: Nuxt.js built-in bundler
- **Package Manager**: npm

## 📦 Installation

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start development server:**
   ```bash
   npm run dev
   ```

3. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🎯 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run generate` - Generate static site
- `npm run preview` - Preview production build

## 🏗️ Project Structure

```
spa-debmishra-resume/
├── app.vue              # Root component
├── nuxt.config.ts       # Nuxt.js configuration
├── package.json         # Dependencies and scripts
├── pages/               # Page components
│   └── index.vue        # Home page
├── assets/              # Static assets
│   └── css/
│       └── main.css     # Global styles
└── README.md            # This file
```

## 🎨 Customization

### Colors
The main color scheme uses a beautiful gradient from blue to purple. You can modify the colors in `pages/index.vue`:

```css
background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
```

### Content
Edit the content in `pages/index.vue` to customize:
- Page title and subtitle
- Feature descriptions
- Button text and behavior

### Styling
Global styles are in `assets/css/main.css`, and component-specific styles are in each Vue component.

## 📱 Responsive Design

The website is fully responsive and includes:
- Mobile-first CSS approach
- CSS Grid and Flexbox for layouts
- Media queries for different screen sizes
- Touch-friendly interactive elements

## 🚀 Deployment

### Static Site Generation
```bash
npm run generate
```

### Production Build
```bash
npm run build
npm run preview
```

## 🐳 Docker Support

### Development Environment
```bash
# Start development server with hot reloading
docker-compose --profile dev up --build

# Access at: http://localhost:3001
```

### Production Environment (with Nginx Reverse Proxy)
```bash
# Start production server with nginx proxy
docker-compose --profile prod up --build

# Access at: http://localhost (port 80)
```

**Production Setup Features:**
- ✅ Nginx reverse proxy for better security and performance
- ✅ Security headers (XSS protection, content type options, frame options)
- ✅ Gzip compression for faster loading
- ✅ Static asset caching with proper cache headers
- ✅ Hidden server information for security

### Both Environments
```bash
# Run both development and production
docker-compose --profile dev --profile prod up --build

# Development: http://localhost:3001 (direct access)
# Production: http://localhost (nginx proxy)
```

### Docker Commands
```bash
# Build images
docker-compose build

# Stop services
docker-compose down

# View logs
docker-compose logs -f

# Rebuild and restart
docker-compose up --build --force-recreate

# View specific service logs
docker-compose logs -f nginx
docker-compose logs -f nuxt-prod
docker-compose logs -f nuxt-dev
```

### Docker Architecture

**Development Container:**
- Direct Node.js server access
- Hot reloading enabled
- Volume mounting for live code changes
- Port 3001 mapped to container port 3000

**Production Setup:**
- Nginx reverse proxy container
- Nuxt.js production build container
- Internal container networking
- Nginx serves on port 80 with security optimizations

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📄 License

This project is open source and available under the [Apache License 2.0](LICENSE).

## 🆘 Support

If you have any questions or need help, please open an issue in the repository.

---

**Happy coding! 🎉** 