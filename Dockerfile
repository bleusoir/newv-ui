FROM node:alpine

WORKDIR /usr/src/app
COPY . .

RUN npm i --no-fund
RUN npm run build
CMD [ "npm", "start" ]

EXPOSE 3000