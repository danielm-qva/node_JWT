FROM node:alpine

WORKDIR /app

COPY . .

RUN npm install && npm install typescript

RUN npm run build

CMD ["npm","run","start"]