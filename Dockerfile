FROM node:18-alpine AS builder

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

RUN npm start

EXPOSE 80
