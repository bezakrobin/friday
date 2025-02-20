# Use Expo's recommended Node.js image
FROM node:20

# Set working directory
WORKDIR /app

# Copy package.json and install dependencies
COPY package.json package-lock.json ./
RUN npm install

# Copy project files
COPY . .

# Start Expo
CMD ["npx", "expo", "start", "--web"]
