FROM node:18-alpine AS build
WORKDIR /app

COPY . .
RUN npm install
RUN npm audit fix --force
RUN npm run build

# Serve Application using Nginx Server
FROM nginx:alpine
COPY --from=build /app/dist/project-name/ /usr/share/nginx/html
EXPOSE 4200
CMD ["nginx", "-g", "daemon off;"]