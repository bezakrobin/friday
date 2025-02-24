# Use a Node.js image for the updater
FROM node:18-alpine

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json separately to leverage Docker caching
COPY package.json package-lock.json ./

# Install dependencies (e.g., 'node-fetch' to interact with GitHub API)
RUN npm install

# Copy the updater code into the container
COPY . .

# Run the updater script when the container starts
CMD ["node", "update.js"]