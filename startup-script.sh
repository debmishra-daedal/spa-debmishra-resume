#!/bin/bash

# Store command line TRAEFIK_ENV if provided
TRAEFIK_ENV_OVERRIDE="$TRAEFIK_ENV"

# Load environment variables from .env file
if [ -f .env ]; then
    export $(grep -v '^#' .env | xargs)
fi

# Override with command line value if provided
if [ -n "$TRAEFIK_ENV_OVERRIDE" ]; then
    TRAEFIK_ENV="$TRAEFIK_ENV_OVERRIDE"
fi

# Check if TRAEFIK_ENV is set
if [ -z "$TRAEFIK_ENV" ]; then
    echo "Error: TRAEFIK_ENV must be set (dev or prod)"
    echo "Usage: TRAEFIK_ENV=dev ./generate-htpasswd.sh"
    echo "   or: TRAEFIK_ENV=prod ./generate-htpasswd.sh"
    exit 1
fi

# Validate TRAEFIK_ENV value
if [ "$TRAEFIK_ENV" != "dev" ] && [ "$TRAEFIK_ENV" != "prod" ]; then
    echo "Error: TRAEFIK_ENV must be either 'dev' or 'prod', got: $TRAEFIK_ENV"
    exit 1
fi

echo "🌍 Environment: $TRAEFIK_ENV"

# For production, check if required auth variables are set
if [ "$TRAEFIK_ENV" = "prod" ]; then
    if [ -z "$TRAEFIK_USER" ] || [ -z "$TRAEFIK_PASSWORD" ]; then
        echo "Error: TRAEFIK_USER and TRAEFIK_PASSWORD must be set in .env file for production"
        exit 1
    fi
fi

# Generate htpasswd file (only for production)
if [ "$TRAEFIK_ENV" = "prod" ]; then
    echo "🔐 Generating .htpasswd file for user: $TRAEFIK_USER"
    htpasswd -cb .htpasswd "$TRAEFIK_USER" "$TRAEFIK_PASSWORD"
    echo "✅ .htpasswd file generated successfully"
else
    echo "🔓 Development mode: Skipping .htpasswd generation (dashboard will be open)"
fi

echo "🚀 Starting Traefik with: TRAEFIK_ENV=$TRAEFIK_ENV docker-compose up --build --force-recreate -d"
TRAEFIK_ENV=$TRAEFIK_ENV docker-compose up --build --force-recreate -d