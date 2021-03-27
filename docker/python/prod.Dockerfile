FROM python:3.9.2-buster

WORKDIR /python

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

# install code
COPY ./python/src /python/src
COPY ./python/requirements.txt /python/requirements.txt
RUN [ "python3", "-m", "pip", "install", "-r", "requirements.txt" ]

ENTRYPOINT [ "gosu", "python:python", "tini", "--" ]

CMD [ "python3", "src/app.py" ]

# flask port
EXPOSE 5000
