FROM node:16

WORKDIR /var/www/

COPY . /var/www/

RUN npm install

ENTRYPOINT ["npm"]
