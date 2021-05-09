FROM node:12-alpine

WORKDIR /opt/app

ENV NODE_ENV production

COPY package.json yarn.lock ./

RUN yarn install --frozen-lockfile

COPY . /opt/app

RUN yarn build

CMD [ "yarn", "start" ]