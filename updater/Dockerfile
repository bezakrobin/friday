# Use a Node.js image for the updater
FROM node:18-alpine

# Install Git
RUN apk update && apk add git

# Set the working directory
WORKDIR /app

# Copy the updater code into the container
COPY . .

# Install dependencies (e.g., 'node-fetch' to interact with GitHub API)
RUN npm install

# Run the updater script when the container starts
CMD ["node", "update.js"]