# build stage
FROM maven:3.6.3-jdk-11 as build

WORKDIR /petshark

COPY ./backend/src /petshark/src
COPY ./backend/pom.xml /petshark/pom.xml

RUN mvn package

# deploy stage
FROM openjdk:11-jre

WORKDIR /petshark

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

# copy app from build stage
ARG JAR_NAME='app'
ENV JAR_NAME=${JAR_NAME}
COPY --from=build /petshark/target/${JAR_NAME} /petshark

# start app
ENTRYPOINT [ "gosu", "backend:backend", "tini", "--" ]
CMD java -jar /petshark/$JAR_NAME

# use port 5005 for remote debugging (set JAVA_OPTS in pom.xml)
EXPOSE 5005

# tomcat/spring boot will run on port 8080 inside the container
EXPOSE 8080
