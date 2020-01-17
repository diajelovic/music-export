FROM node:current-alpine

WORKDIR /home/node/app

COPY package.json yarn.lock ./

RUN yarn

COPY . .

RUN yarn build:server

EXPOSE 3000

ENTRYPOINT [ "yarn", "node", "dist/server/main.js" ]
