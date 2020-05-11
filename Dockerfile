# build environment
FROM node:alpine as builder

RUN apk update && apk upgrade
RUN apk add nodejs

# Create app directory
RUN mkdir /app
RUN mkdir /app/front
WORKDIR /app/front

# Install app dependencies
COPY package*.json ./

ENV PATH /app/front/node_modules/.bin:$PATH

RUN npm install --silent
RUN npm install react-scripts@3.4.1 -g --silent

# Bundle app source
COPY . .

EXPOSE 3000

CMD ["npm", "start"]
