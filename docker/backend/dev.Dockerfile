FROM maven:3.6.3-jdk-11

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
RUN groupadd -r backend && useradd --shell /bin/bash -r --create-home -g backend backend

# create maven cache for non-root user
RUN mkdir /home/backend/.m2 && chown backend:backend /home/backend/.m2

# create /petshark folder (bind-mount location)
RUN mkdir /petshark && chown backend:backend /petshark
WORKDIR /petshark

# run script on container start
COPY docker/backend/dev.entrypoint.sh /usr/local/bin/backend-entrypoint.sh
RUN chmod u+x /usr/local/bin/backend-entrypoint.sh
ENTRYPOINT ["/usr/local/bin/backend-entrypoint.sh"]

# by default, start spring boot when the container starts
CMD ["mvn", "spring-boot:run", "-Dspring-boot.run.arguments=--server.port=8080"]

# use port 5005 for remote debugging (set JAVA_OPTS in pom.xml)
EXPOSE 5005

# tomcat/spring boot will run on port 8080 inside the container
EXPOSE 8080

# spring boot live reload port
EXPOSE 35729
