# Stage 1: Development
FROM node:17 AS development

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

RUN chown -R node:node /usr/src/app

USER node

# Enable CHOKIDAR polling for Docker-based environments
ENV CHOKIDAR_USEPOLLING=true

# Expose the port for the React development server
EXPOSE 3001

# Default command for development
CMD ["npm", "start"]

# Stage 2: Production
FROM node:17 AS production

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install --production

COPY . .

RUN npm run build

RUN npm install -g serve

# Expose the port for the HTTP server
EXPOSE 3001

# Command to serve the production build
CMD ["serve", "-s", "build"]
