# Use Node.js Alpine for a lightweight image
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json separately to leverage Docker caching
COPY package.json package-lock.json ./

# Install Babel Plugin React Compiler
RUN npm install babel-plugin-react-compiler@0.0.0-experimental-734b737-20241003

# Install expo explicitly and other dependencies
RUN npm install expo@52.0.37 --save && npm install --force

# Copy the rest of the app files
COPY . .

# Expose the port Expo runs on
EXPOSE 8081

# Start the Expo app with clear cache (optional for reliability)
CMD ["npx", "expo", "start", "--clear"]
