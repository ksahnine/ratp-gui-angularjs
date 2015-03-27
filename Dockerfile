# Build:
#   docker build -t ksahnine/trafic-ratp-angularjs .
#
# Run:
#   docker run -d ksahnine/trafic-ratp-angularjs
#
# DOCKER_VERSION 1.5

FROM nginx:1.7.9
MAINTAINER Kadda SAHNINE <kadda.sahnine@inovia-conseil.fr>

RUN rm /etc/nginx/conf.d/default.conf
COPY conf/nginx-docker.conf /etc/nginx/nginx.conf
COPY dist /usr/share/nginx/html
