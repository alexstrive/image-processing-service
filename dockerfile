FROM node:17.8.0-alpine3.15

COPY static /static
COPY ["package.json", "package-lock.json*", "index.js", "./"]
RUN npm install --production
ENV NODE_ENV=production
CMD [ "node", "index.js" ]
