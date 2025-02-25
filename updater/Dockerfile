FROM alpine:latest

RUN apk add --no-cache git bash docker-cli dos2unix

WORKDIR /repo

COPY update.sh /update.sh
COPY update_script.sh /update_script.sh

RUN dos2unix /update.sh /update_script.sh

RUN chmod +x /update.sh
RUN chmod +x /update_script.sh

CMD ["/bin/sh", "/update.sh"]