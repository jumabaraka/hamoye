FROM node:18-alpine AS Build

WORKDIR /app

COPY dist/apps/flight-react ./
COPY libs/flight-react ./libs/flight-react
COPY .npmrc .npmrc

RUN npm i


FROM nginx:latest AS Frontend
COPY apps/flight-react/nginx.conf /etc/nginx/conf.d/default.conf

FROM gcr.io/distroless/nodejs18-debian11
WORKDIR /app

ENV NODE_ENV production

COPY --from=Build /app ./

EXPOSE 8080

CMD ["node_modules/.bin/react", "start"]
