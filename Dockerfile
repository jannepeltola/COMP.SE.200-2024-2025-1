FROM node:22-alpine AS build-base

RUN mkdir /code
COPY --chmod=755 ./test.sh /
WORKDIR /code
VOLUME /code
ENTRYPOINT ["/test.sh"]