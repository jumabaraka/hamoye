# syntax=docker/dockerfile:1

##
## Deploy
##
FROM gcr.io/distroless/base-debian11

WORKDIR /

COPY  dist/apps/api/flights /flights

ENV GIN_MODE=release
EXPOSE 8080

CMD ["/flights"]
