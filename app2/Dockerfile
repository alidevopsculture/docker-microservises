FROM node:18 AS Builder
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .

# stage 2

FROM node:18-slim
WORKDIR /app
COPY --form=builder /app
RUN npm prune --production
EXPOSE 3002
CMD ["node","app.js"]