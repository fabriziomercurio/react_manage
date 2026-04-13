FROM node:24.8.0

WORKDIR /var/www/html 

COPY package*.json . 

RUN npm install 

COPY . . 

EXPOSE 5000 

CMD ["npm","run","dev","--", "--host"] 