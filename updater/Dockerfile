FROM alpine:latest

RUN apk add --no-cache git bash docker-cli

WORKDIR /repo

COPY update.sh /update.sh
RUN chmod +x /update.sh

CMD ["/update.sh"]