#!/bin/bash

# Ensure we have a clean package-lock.json
rm -f package-lock.json
npm install

# Build the project
npm run build

# Deploy to Railway (assumes Railway CLI is installed)
# Install Railway CLI: npm i -g @railway/cli
# Login: railway login
echo "Attempting to deploy to Railway..."
railway up 