# Portfolio Websites - Docker & Traefik Setup

A multi-site portfolio hosting platform using Docker containers and Traefik reverse proxy to serve multiple static HTML websites.

## 🌐 Hosted Websites

- **Deb Mishra Portfolio** - Professional portfolio at `debmishra.localhost`
- **Lone Cypress Holdings** - Company website at `lonecypress.localhost`
- **Nionjord Investments** - Investment company at `nionjord.localhost`

## 🏗️ Architecture

**Infrastructure**: Docker Compose + Traefik v3.0 reverse proxy  
**Web Servers**: Nginx Alpine containers  
**Frontend**: Static HTML/CSS/JavaScript with Tailwind CSS  
**Network**: Bridge networking with Traefik service discovery  

## 📦 Quick Start

### Prerequisites
- Docker and Docker Compose installed
- Hosts file configured for local domains (optional)

### Start All Services
```bash
# Start all websites and Traefik dashboard
docker-compose up --build

# Start in background
docker-compose up -d --build
```

### Access Services
- **Deb Mishra Portfolio**: http://debmishra.localhost
- **Lone Cypress Holdings**: http://lonecypress.localhost  
- **Nionjord Investments**: http://nionjord.localhost
- **Traefik Dashboard**: http://traefik.localhost:8080

## 🎯 Service Management

### Individual Service Control
```bash
# Start specific service
docker-compose up debmishra-spa

# Restart after content changes
docker-compose restart debmishra-spa

# View service logs
docker-compose logs -f debmishra-spa
```

### Complete Management
```bash
# Stop all services
docker-compose down

# Rebuild and restart
docker-compose up --build --force-recreate

# View all logs
docker-compose logs -f
```

## 🏗️ Project Structure

```
spa-debmishra-resume/
├── docker-compose.yml           # Traefik + website services
├── README.md                    # This documentation
├── CLAUDE.md                    # Development guidance
├── LICENSE                      # Apache License 2.0
├── Deb Mishra Portfolio.pdf     # Portfolio document
├── spa-debmishra-resume.code-workspace # VS Code settings
│
├── static-site-dmishra-spa/     # 🎯 Main Portfolio Website
│   └── html/
│       ├── index.html           # Homepage with career timeline
│       ├── privacy.html         # Privacy policy
│       ├── cookies.html         # Cookie policy  
│       ├── css/
│       │   └── tailwind.min.css # Tailwind CSS framework
│       ├── js/
│       │   └── main.js          # Interactive functionality
│       ├── images/              # Assets and company logos
│       │   ├── Profile Image.png
│       │   ├── shell.png, nn.png, ubs.png
│       │   ├── gs.png, gsam.png, apg.png
│       │   └── [15+ company/university logos]
│       └── public/
│           └── mycv.pdf         # Downloadable CV
│
├── static-site-lsh-spa/         # 🏢 Lone Cypress Holdings
│   └── html/
│       ├── index.html
│       └── images/
│
├── static-site-ni-spa/          # 💼 Nionjord Investments  
│   └── html/
│       └── index.html
│
└── static-site-d-spa/           # 📄 Additional Portfolio Variant
    └── html/
        ├── index.html
        ├── privacy.html, cookies.html, terms.html
        ├── css/tailwind.min.css
        └── js/main.js
```

## 🐳 Docker Services

### Traefik (Reverse Proxy)
- **Container**: `daedal-traefik-dashboard`
- **Ports**: 80 (HTTP), 443 (HTTPS), 8080 (Dashboard)
- **Features**: Auto-discovery, load balancing, SSL termination
- **Dashboard**: http://traefik.localhost:8080

### Website Services
| Service | Container | URL | Content |
|---------|-----------|-----|---------|
| `debmishra-spa` | `daedal-debmishra-spa` | debmishra.localhost | Professional portfolio |
| `lsh-spa` | `daedal-lsh-spa` | lonecypress.localhost | Company website |
| `ni-spa` | `daedal-ni-spa` | nionjord.localhost | Investment company |

## ✨ Key Features

### Deb Mishra Portfolio
- **Professional Timeline**: Career progression with major companies
- **Company Logos**: Shell, NN Group, UBS, Goldman Sachs, etc.
- **Educational Background**: Cambridge, GARP, NISM, KIIT
- **Interactive Design**: Tailwind CSS responsive layout
- **Document Access**: Downloadable CV and portfolio PDF

### Technical Highlights
- **Performance**: Static files served by Nginx Alpine (minimal footprint)
- **Scalability**: Easy to add new sites via docker-compose
- **Security**: Traefik handles SSL and security headers
- **Development**: Hot-reload friendly for content updates

## 🔧 Development Workflow

### Adding New Websites
1. **Create Directory Structure**:
   ```bash
   mkdir -p static-site-[name]-spa/html
   ```

2. **Add Content**:
   ```bash
   # Add index.html, CSS, JS, images
   cp template/* static-site-[name]-spa/html/
   ```

3. **Configure Docker Service**:
   ```yaml
   # Add to docker-compose.yml
   [name]-spa:
     image: nginx:alpine
     container_name: daedal-[name]-spa
     volumes:
       - ./static-site-[name]-spa/html:/usr/share/nginx/html:ro
     labels:
       - "traefik.http.routers.[name].rule=Host(`[name].localhost`)"
   ```

4. **Deploy**:
   ```bash
   docker-compose up [name]-spa
   ```

### Content Updates
- **Direct Editing**: Modify files in `static-site-*/html/` directories
- **Live Reload**: Restart specific service to see changes
- **Asset Management**: Add images to respective `images/` folders

## 🌐 Local Domain Setup (Optional)

Add to `/etc/hosts` (Linux/macOS) or `C:\Windows\System32\drivers\etc\hosts` (Windows):
```
127.0.0.1 debmishra.localhost
127.0.0.1 lonecypress.localhost
127.0.0.1 nionjord.localhost
127.0.0.1 traefik.localhost
```

## 📊 Monitoring & Logs

### Service Status
```bash
# Check all services
docker-compose ps

# Check specific service
docker-compose ps debmishra-spa
```

### Logs & Debugging
```bash
# All services logs
docker-compose logs -f

# Specific service
docker-compose logs -f debmishra-spa

# Traefik routing logs
docker-compose logs -f traefik
```

### Traefik Dashboard
- **URL**: http://traefik.localhost:8080
- **Features**: Service discovery, health checks, metrics
- **Real-time**: Active routes and backend status

## 🔒 Security Features

- **Reverse Proxy**: Traefik handles external traffic
- **Container Isolation**: Each service in separate container
- **Read-only Volumes**: Static content mounted as read-only
- **Network Segmentation**: Services communicate via Docker network

## 📄 License

This project is open source and available under the [Apache License 2.0](LICENSE).

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test with `docker-compose up --build`
5. Submit a pull request

---

**Built with ❤️ using Docker, Traefik, and modern web technologies** 