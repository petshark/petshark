FROM python:3.9.2-buster

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

# create non-root user
RUN groupadd -r python && useradd --shell /bin/bash -r --create-home -g python python

# create pip cache for non-root user
RUN mkdir -p /home/python/.cache/pip && chown python:python /home/python/.cache/pip

# create /python folder (bind-mount location)
RUN mkdir /python && chown python:python /python
WORKDIR /python

# run script on container start
COPY docker/python/dev.entrypoint.sh /usr/local/bin/python-entrypoint.sh
RUN chmod u+x /usr/local/bin/python-entrypoint.sh
ENTRYPOINT ["/usr/local/bin/python-entrypoint.sh"]

CMD python3 -m pip install -r requirements.txt && python3 src/app.py

# flask port
EXPOSE 5000
