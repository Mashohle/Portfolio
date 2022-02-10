FROM node:16.13-alpine
# Working directory and dependencies installation
WORKDIR /app
COPY package.json .
RUN npm install --only=prod
# Copy app files
COPY . .
# Expose port
EXPOSE 3000
# Start service
CMD ["npm", "start"]