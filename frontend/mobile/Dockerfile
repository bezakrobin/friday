# Use Node.js Alpine for a lightweight image
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json separately to leverage Docker caching
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Copy the rest of the app files
COPY . .

# Expose the port Expo runs on
EXPOSE 8081

# Start the Expo app with clear cache (optional for reliability)
CMD ["npx", "expo", "start", "--clear"]