FROM node:18-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

EXPOSE 8000

CMD ["npx", "gatsby", "develop", "-H", "0.0.0.0"]
