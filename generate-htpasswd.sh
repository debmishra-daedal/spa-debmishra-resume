#!/bin/bash

# Load environment variables from .env file
if [ -f .env ]; then
    export $(grep -v '^#' .env | xargs)
fi

# Check if required variables are set
if [ -z "$TRAEFIK_USER" ] || [ -z "$TRAEFIK_PASSWORD" ]; then
    echo "Error: TRAEFIK_USER and TRAEFIK_PASSWORD must be set in .env file"
    exit 1
fi

# Generate htpasswd file
echo "Generating .htpasswd file for user: $TRAEFIK_USER"
htpasswd -cb .htpasswd "$TRAEFIK_USER" "$TRAEFIK_PASSWORD"

echo "✅ .htpasswd file generated successfully"
echo "🚀 Starting Traefik with: docker-compose up -d"
docker-compose up -d