FROM  node:lts-alpine3.19

WORKDIR /usr/src/app

COPY . .

RUN npm install

EXPOSE 8080

CMD ["node", "server.js"]

