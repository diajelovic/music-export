FROM node:current-alpine AS builder

WORKDIR /home/node/app
COPY package.json yarn.lock ./
RUN yarn
COPY . .
RUN yarn build:client

FROM nginx:alpine

COPY --from=builder /home/node/app/dist/client /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf

