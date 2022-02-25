FROM node:alpine

WORKDIR /usr/src/app
COPY . .

RUN yarn install
RUN yarn next build
CMD [ "npm", "start" ]

EXPOSE 3000