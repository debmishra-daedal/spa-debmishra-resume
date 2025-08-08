# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a personal portfolio website built with Nuxt.js 3 and Vue.js 3. The project transitioned from a Next.js/React implementation to a Vue.js/Nuxt.js Single Page Application (SPA) focused on showcasing Deb Mishra's professional profile.

## Architecture

**Framework**: Nuxt.js 3 with Vue.js 3 using Composition API
**Styling**: CSS3 with scoped styles, glassmorphism effects, and responsive design
**Structure**: Simple SPA with file-based routing

Key files:
- `app.vue`: Root component that renders `<NuxtPage />`
- `pages/index.vue`: Main landing page with hero section and interactive features
- `nuxt.config.ts`: Nuxt configuration with global CSS and head meta tags
- `assets/css/main.css`: Global CSS reset and base styles

## Development Commands

**Start development server:**
```bash
npm run dev
```
Runs on http://localhost:3000 with hot reloading

**Build for production:**
```bash
npm run build
```

**Generate static site:**
```bash
npm run generate
```

**Preview production build:**
```bash
npm run preview
```

**Install dependencies:**
```bash
npm install
```

## Docker Development

**Development environment with hot reloading:**
```bash
docker-compose --profile dev up --build
```
Access at http://localhost:3001

**Production environment:**
```bash
docker-compose --profile prod up --build
```
Access at http://localhost:3000

**Run both environments:**
```bash
docker-compose --profile dev --profile prod up --build
```

## Project Structure

```
spa-debmishra-resume/
├── app.vue              # Root component with <NuxtPage />
├── nuxt.config.ts       # Nuxt configuration
├── pages/
│   └── index.vue        # Home page with hero section
├── assets/
│   └── css/
│       └── main.css     # Global CSS reset and base styles
├── docker-compose.yml   # Multi-environment Docker setup
├── Dockerfile           # Production Docker image
└── Dockerfile.dev       # Development Docker image with hot reload
```

## Vue.js/Nuxt.js Patterns

- Uses Vue 3 Composition API with `<script setup>`
- Scoped CSS styling within single-file components
- Reactive data with `ref()` for component state
- File-based routing through `pages/` directory
- Global styles configured in `nuxt.config.ts` with `css: ['~/assets/css/main.css']`

## Styling Approach

- Mobile-first responsive design with CSS Grid and Flexbox
- Modern CSS features: backdrop-filter, gradients, animations
- Glassmorphism UI effects with transparency and blur
- CSS custom properties and transitions for interactive elements
- Accessibility-focused with proper focus styles