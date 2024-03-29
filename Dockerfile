# pull official base image
FROM node:13.12.0-alpine

# exposing our app port in docker internal network
EXPOSE 3006 

# set working directory
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# install app dependencies
COPY package.json ./
COPY package-lock.json ./
RUN npm install --silent
RUN npm install react-scripts@3.4.1 -g --silent

# add app
COPY . ./

COPY src/Assets/styles.css node_modules/react-chat-widget/lib

# start app
CMD ["npm", "start"]
