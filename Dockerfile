FROM node:10.19.0
ENV NODE_ENV=production

WORKDIR /app

COPY ["files/package.json", "files/package-lock.json", "./"]

RUN npm install --production

COPY . .

CMD [ "node", "files/generate.js", "-s" ]
