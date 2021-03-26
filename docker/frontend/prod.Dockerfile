FROM node:14.16.0-buster as build

# change to non-root
USER node

WORKDIR /petshark

COPY ./frontend /petshark

RUN [ "npm", "install" ]
RUN [ "npm", "run", "build" ]

FROM httpd:2.4.46-alpine as serve

# host static files with apache
COPY --from=build /petshark/build /usr/local/apache2/htdocs/
