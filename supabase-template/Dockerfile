# Use the official Node.js image as the base image
FROM node:18

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json into the container
COPY package*.json ./

# Install dependencies

RUN npm install
RUN npm install @supabase/supabase-js
RUN npm install --save-dev @types/node


# Copy the rest of the application code into the container
COPY . .

# Expose the application port
EXPOSE 3000

# Define the command to run the application
CMD ["npm", "start"]
