FROM node:12-alpine as builder
WORKDIR /pokemon_viewer
ENV PATH="./node_modules/.bin:$PATH"
COPY . .
RUN npm run build
CMD ["npm", "start"]