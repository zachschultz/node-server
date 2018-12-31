FROM node:8

WORKDIR /usr/src/app

copy package*.json ./

RUN npm install

# Bundle app source
COPY . .

EXPOSE 3090

CMD ["npm", "start"]

