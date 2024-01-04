# Build stage
FROM node:14 AS build

# Accept build-time arguments
ARG VITE_API_BASE_URL

# Set the environment variable so that Vite can access it during build
ENV VITE_API_BASE_URL=$VITE_API_BASE_URL

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

# Production stage
FROM nginx:stable-alpine

# Copy built assets from build stage to NGINX's serve directory
COPY --from=build /usr/src/app/dist /usr/share/nginx/html

# NGINX's default port is 80
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]