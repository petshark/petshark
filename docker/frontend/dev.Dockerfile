FROM node:14.16.0-buster

# install gosu (tool to change the user in a docker container)
RUN set -eux; \
	apt-get update; \
	apt-get install -y gosu; \
	rm -rf /var/lib/apt/lists/*; \
    # verify that the binary works
	gosu nobody true

# install tini (tool to reap zombie processes)
ENV TINI_VERSION v0.19.0
ADD https://github.com/krallin/tini/releases/download/${TINI_VERSION}/tini /usr/local/bin/tini
RUN chmod +x /usr/local/bin/tini

# create maven cache for non-root user
RUN mkdir /home/node/.npm && chown node:node /home/node/.npm

# create /petshark folder (bind-mount location)
RUN mkdir /petshark && chown node:node /petshark
WORKDIR /petshark

# run script on container start
COPY docker/frontend/dev.entrypoint.sh /usr/local/bin/frontend-entrypoint.sh
RUN chmod u+x /usr/local/bin/frontend-entrypoint.sh
ENTRYPOINT ["/usr/local/bin/frontend-entrypoint.sh"]

# by default, start the react dev server
CMD ["bash", "-c", "npm install && npm run dev"]

# run dev server at port 5000
EXPOSE 5000
