FROM node:lts-alpine3.19

WORKDIR /usr/src/app

COPY . .

RUN npm install

RUN npm install -g @angular/cli

EXPOSE 8081

CMD ["ng","serve","--port", "8081"]