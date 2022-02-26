FROM node:alpine

#WORKDIR /usr/src/app
#COPY . .
#
#RUN yarn install
#RUN yarn next build
#CMD [ "yarn", "start" ]
#
#EXPOSE 3000

WORKDIR /app
COPY . /app
RUN yarn install
RUN yarn build
CMD [ "yarn", "start" ]
EXPOSE 3000