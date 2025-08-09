# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This repository contains multiple static portfolio websites managed through Docker and Traefik. The main project has evolved from a Nuxt.js/Vue.js implementation to static HTML sites. The current setup includes:

1. **Deb Mishra Portfolio** - Personal portfolio website
2. **Lone Cypress Holdings** - Company website  
3. **Nionjord Investments** - Investment company website

## Architecture

**Current Setup**: Static HTML/CSS/JS websites served via Nginx containers
**Reverse Proxy**: Traefik v3.0 for routing and load balancing
**Deployment**: Docker Compose with multiple services
**Styling**: Tailwind CSS with custom styles

## Current Project Structure

```
spa-debmishra-resume/
├── CLAUDE.md                    # This file - project guidance
├── README.md                    # Project documentation
├── LICENSE                      # Apache License 2.0
├── docker-compose.yml           # Traefik + multiple static sites
├── Deb Mishra Portfolio.pdf     # Portfolio document
├── spa-debmishra-resume.code-workspace # VS Code workspace
├── static-site-dmishra-spa/     # Deb Mishra Portfolio
│   └── html/
│       ├── index.html           # Main portfolio page
│       ├── privacy.html         # Privacy policy
│       ├── cookies.html         # Cookie policy
│       ├── css/
│       │   └── tailwind.min.css # Tailwind CSS framework
│       ├── js/
│       │   └── main.js          # JavaScript functionality
│       ├── images/              # Profile and company logos
│       │   ├── Profile Image.png
│       │   ├── *.png           # Company/university logos
│       └── public/
│           └── mycv.pdf         # CV document
├── static-site-lsh-spa/         # Lone Cypress Holdings
│   └── html/
│       ├── index.html
│       └── images/
├── static-site-ni-spa/          # Nionjord Investments
│   └── html/
│       └── index.html
└── static-site-d-spa/           # Additional portfolio variant
    └── html/
        ├── index.html
        ├── privacy.html
        ├── cookies.html
        ├── terms.html
        ├── css/
        │   └── tailwind.min.css
        └── js/
            └── main.js
```

## Docker Services Architecture

The docker-compose.yml defines a Traefik-based reverse proxy setup:

**Traefik (daedal-traefik-dashboard)**
- Reverse proxy and load balancer
- Dashboard at http://traefik.localhost:8080
- Handles routing to multiple websites

**Website Services:**
- `debmishra-spa`: http://debmishra.localhost (main portfolio)
- `lsh-spa`: http://lonecypress.localhost (Lone Cypress Holdings)
- `ni-spa`: http://nionjord.localhost (Nionjord Investments)

## Development Commands

**Start all services:**
```bash
docker-compose up --build
```

**Access websites:**
- Portfolio: http://debmishra.localhost
- Lone Cypress: http://lonecypress.localhost  
- Nionjord: http://nionjord.localhost
- Traefik Dashboard: http://traefik.localhost:8080

**Stop services:**
```bash
docker-compose down
```

**View logs:**
```bash
docker-compose logs -f [service-name]
```

## Key Features

**Deb Mishra Portfolio (main site):**
- Professional portfolio with company/university logos
- Responsive design with Tailwind CSS
- Profile image and CV download
- Privacy and cookie policy pages
- Company timeline with major organizations (Shell, NN, UBS, Goldman Sachs, etc.)

**Technical Stack:**
- Static HTML/CSS/JS for performance
- Tailwind CSS for responsive design
- Nginx Alpine containers for lightweight serving
- Traefik for advanced routing and SSL termination
- Docker networking for service isolation

## Content Management

**Adding new sites:**
1. Create new `static-site-[name]-spa/html/` directory
2. Add HTML, CSS, JS, and assets
3. Add new service to docker-compose.yml
4. Configure Traefik labels for routing

**Updating existing sites:**
- Edit files in respective `html/` directories
- Restart specific service: `docker-compose restart [service-name]`

## File Organization

- Each site maintains its own complete file structure
- Shared assets should be duplicated across sites for independence
- Images are stored in each site's `images/` directory
- Tailwind CSS is included as minified file in each site