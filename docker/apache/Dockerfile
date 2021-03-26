FROM httpd:2.4.46-alpine

COPY docker/apache/httpd.conf /usr/local/apache2/conf/httpd.conf

COPY docker/apache/public_html /usr/local/apache2/htdocs

# http port
EXPOSE 80

# https port
EXPOSE 443
