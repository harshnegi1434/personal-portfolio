# Use an official Node.js runtime as the base image
FROM node:14-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json (if available)
COPY package*.json ./

# Install project dependencies
RUN npm install

# Copy the entire project to the container
COPY . .

# Build the React app for production
RUN npm run build

# Expose a port (optional)
EXPOSE 3000

# Specify the command to run your app using Node.js
CMD ["npm", "start"]
