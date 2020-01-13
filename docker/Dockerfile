FROM node:current-alpine

WORKDIR /home/node/app

COPY package.json yarn.lock ./

RUN yarn

COPY . .

RUN yarn build

EXPOSE 5000

ENTRYPOINT [ "yarn", "serve", "dist" ]
