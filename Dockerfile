FROM node:20.0.0-alpine AS builder
WORKDIR /app
COPY package.json package-lock.json ./
ARG OCTAVIAN_IP_ADDRESS
ENV NEXT_PUBLIC_CLIENT_BACKEND_URL=http://${OCTAVIAN_IP_ADDRESS}:8080
RUN echo "The value of NEXT_PUBLIC_CLIENT_BACKEND_URL is: ${NEXT_PUBLIC_CLIENT_BACKEND_URL}"
RUN echo "The value of OCTAVIAN_IP_ADDRESS is: ${OCTAVIAN_IP_ADDRESS}"

RUN npm install
COPY . .
RUN npm run build
FROM node:20.0.0-alpine
# COPY --from=builder /app/package.json /app/package-lock.json /app/.next /app/public /app/node_modules ./
COPY . .
EXPOSE 3000
ENV HOST=0.0.0.0
CMD ["npm", "start"]
