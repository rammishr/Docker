FROM node:14-alpine

WORKDIR /app

COPY index.js .

RUN npm install express
RUN npm install pg

EXPOSE 3000

CMD [ "node", "index.js" ]
