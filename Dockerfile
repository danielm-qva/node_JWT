FROM node:12.22.10-alpine3.11

WORKDIR /app

COPY . .

RUN npm install && npm install typescript -g

RUN npm run build

CMD ["npm","run","start"]