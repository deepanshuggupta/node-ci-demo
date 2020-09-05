FROM node:12

# create app directory
WORKDIR /user/src/app

# Install all dependencies 
COPY package*.json ./

RUN npm install

# Copy app source
COPY . .
EXPOSE 8080

CMD ["npm", "start"]

