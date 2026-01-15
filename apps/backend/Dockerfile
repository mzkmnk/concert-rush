FROM node:20-bullseye-sli AS builder
WORKDIR /app
COPY package*.jon ./
RUN npm ci
COPY . .
RUN npm run build

FROM gcr.io/distroless/nodejs20-debian12
WORKDIR /app
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/node_modules ./node_modules
CMD [ "dist/main.js" ]