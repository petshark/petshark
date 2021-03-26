FROM node:14.16.0-buster as build

# create /petshark folder with correct permissions
RUN mkdir /petshark && chown node:node /petshark
WORKDIR /petshark

# change to non-root
USER node

COPY ./frontend /petshark
COPY ./.env /petshark/.env

RUN [ "npm", "install" ]
RUN [ "npm", "run", "build" ]

FROM httpd:2.4.46-alpine as serve

COPY docker/frontend/httpd.conf /usr/local/apache2/conf/httpd.conf

# host static files with apache
COPY --from=build /petshark/build /usr/local/apache2/htdocs/
