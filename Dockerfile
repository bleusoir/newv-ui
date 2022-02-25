FROM node:alpine

WORKDIR /usr/src/app
COPY . .

RUN npm i
RUN npm run build
CMD [ "npm", "start" ]

EXPOSE 3000