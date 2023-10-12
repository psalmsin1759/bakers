# Use an official Node.js runtime as the base image
FROM node:14 as builder

# Set the working directory in the container
WORKDIR /app

# Copy the package.json and package-lock.json files to the container
COPY package*.json ./

# Install project dependencies
RUN npm install

# Copy the rest of your Next.js application to the container
COPY . .

# Build the Next.js application
RUN npm run build

# Use a lightweight, official Nginx runtime as the final image
FROM nginx:alpine

# Copy the built Next.js application from the previous stage to the Nginx web root directory
COPY --from=builder /app/.next /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
