FROM alpine:latest

RUN apk add --no-cache git bash docker-cli

WORKDIR /repo

COPY update.sh /repo/update.sh
RUN chmod +x /update.sh

COPY update_script.sh /repo/update_script.sh
RUN chmod +x /update_script.sh

CMD ["/bin/sh", "/update.sh"]