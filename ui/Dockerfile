FROM node:12.13.0-alpine
WORKDIR /app
COPY ./package.json ./yarn.lock /app/
RUN yarn install --pure-lockfile 
ADD . /app