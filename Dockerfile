# Use a lightweight, official Node base image
FROM node:22-alpine

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy dependency manifests first to leverage Docker caching
COPY package*.json ./

# Install only production dependencies
RUN npm ci --omit=dev

# Copy the remaining application source code
COPY . .

# Expose the internal port your app listens on
EXPOSE 3000

# Set the application execution command
CMD ["npm", "run" , "dev"]
