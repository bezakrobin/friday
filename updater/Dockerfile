FROM alpine:latest

RUN apk add --no-cache \
    git \
    bash \
    docker-cli \
    dos2unix \
    curl \
    && curl -L "https://github.com/docker/compose/releases/download/1.29.2/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose \
    && chmod +x /usr/local/bin/docker-compose

WORKDIR /repo

COPY update.sh /update.sh
COPY update_script.sh /update_script.sh

RUN dos2unix /update.sh /update_script.sh

RUN chmod +x /update.sh
RUN chmod +x /update_script.sh

CMD ["/bin/sh", "/update.sh"]