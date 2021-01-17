FROM node:latest
WORKDIR /app
COPY /testapp/package*.json ./
RUN npm install
COPY /KubernetesAssignment/ ./
EXPOSE 8080
CMD [ "npm", "start" ]