FROM node:20.0.0-alpine AS builder
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install
COPY . .
RUN npm run build
FROM node:20.0.0-alpine
COPY --from=builder /app/package.json /app/package-lock.json /app/.next /app/public /app/node_modules ./
EXPOSE 3000
ENV HOST=0.0.0.0
CMD ["npm", "start"]
