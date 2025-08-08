# Multi-stage Dockerfile for both development and production

# Base stage with common dependencies
FROM node:20-alpine as base
WORKDIR /app
COPY package*.json ./

# Development stage
FROM base as development
RUN npm install
COPY . .
EXPOSE 3000
CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0"]

# Production build stage
FROM base as build
RUN npm ci && npm cache clean --force
COPY . .
RUN npm run build

# Production runtime stage
FROM node:20-alpine as production
WORKDIR /app
COPY --from=build /app/.output ./.output
EXPOSE 3000
CMD ["node", ".output/server/index.mjs"]