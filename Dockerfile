FROM node:20.11.1

WORKDIR /app

COPY ./package.json .
COPY ./package-lock.json .

RUN npm install && npm cache clean --force

COPY . . 


EXPOSE 3000

CMD {"npm", "start"}