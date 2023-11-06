FROM alpine:3.8
FROM node:10-alpine


COPY ["package.json","package-lock.json", "/usr/src/"]

WORKDIR /usr/src

RUN npm install

COPY [".", "/usr/src/"]

EXPOSE 3000

CMD ["node", "index.ts"]
