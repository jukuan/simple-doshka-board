#
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
RUN npm install -g react-scripts --silent


# Bundle app source
COPY . .

CMD ["npm", "start"]
