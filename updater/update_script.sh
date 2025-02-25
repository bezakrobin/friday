#!/bin/bash

cd /repo


# Fetch latest changes
git fetch origin main
LOCAL=$(git rev-parse HEAD)
REMOTE=$(git rev-parse origin/main)

if [ "$LOCAL" != "$REMOTE" ]; then
  echo "New update detected. Pulling latest changes..."
  git pull origin main

  echo "Rebuilding and restarting all services..."
  docker compose up -d -build
else
  echo "No updates available."
fi