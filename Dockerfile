FROM node:20.0.0-alpine AS builder
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install --production
COPY . .
RUN npm run build
FROM node:20.0.0-alpine
COPY --from=builder /app/package.json /app/package-lock.json /app/.next /app/public /app/node_modules ./
EXPOSE 3000
CMD ["npm", "start"]
