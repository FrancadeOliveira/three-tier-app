FROM node:lts-alpine3.19

WORKDIR /usr/src/app

COPY . .

RUN npm install

RUN npm install -g @angular/cli

#RUN npm run build --prod

EXPOSE 8081

#CMD npm start -- --port 8081

CMD ng serve --port 8081 --host=0.0.0.0