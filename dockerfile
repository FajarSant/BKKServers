# Dockerfile

# 1. Gunakan image resmi Node.js
FROM node:18-alpine

# 2. Set working directory
WORKDIR /app

# 3. Copy package files dan install dependency
COPY package*.json ./
RUN npm install --production

# 4. Copy source code dan build
COPY . .
RUN npm run build

# 5. Jalankan app
CMD ["node", "dist/main"]
