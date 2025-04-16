FROM node:18-slim

# Set working directory
WORKDIR /app

# Copy package files first to optimize build cache
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy remaining app files
COPY . .

# Expose the application's port
EXPOSE 3001

# Start the application
CMD ["node", "app.js"]