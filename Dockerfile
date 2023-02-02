FROM node:alpine

WORKDIR /app

COPY . .

RUN npm install && npm install typescript -g

RUN npm run build

CMD ["npm","run","start"]