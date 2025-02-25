#!/bin/bash

cd /repo

# Set Git Remote
git remote set-url origin https://github.com/bezakrobin/friday.git

# Fetch latest changes
git fetch origin main
LOCAL=$(git rev-parse HEAD)
REMOTE=$(git rev-parse origin/main)

if [ "$LOCAL" != "$REMOTE" ]; then
  echo "New update detected. Pulling latest changes..."
  git stash
  git pull origin main

  echo "Rebuilding and restarting all services..."
  docker-compose up --build -d
else
  echo "No updates available."
fi