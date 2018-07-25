FROM node:9.5

ARG NPM_TOKEN
ARG BUILD_ENV=production

WORKDIR /app

COPY lerna.json package.json .npmrc ./
COPY ./client/package.json ./client/
COPY ./server/package.json ./server/

RUN npm install --global lerna

COPY . /app

RUN lerna bootstrap

RUN lerna run postinstall
