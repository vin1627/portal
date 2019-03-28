FROM ubuntu:18.04

RUN apt-get update -y

RUN apt-get install -y \
	supervisor \
	nginx \
	curl \
	make \
	gnupg

RUN curl -sL https://deb.nodesource.com/setup_8.x | bash
RUN apt-get install -y nodejs
RUN npm install -g yarn pm2

RUN ln -sf /dev/stdout /var/log/nginx/access.log && \
	ln -sf /dev/stdout /var/log/nginx/error.log

COPY ./docker/nginx.conf /etc/nginx/sites-enabled/default
COPY ./docker/supervisord.conf /etc/supervisor/conf.d/supervisord.conf

WORKDIR /code
COPY ./package.json /code

COPY . /code

CMD ["/usr/bin/supervisord"]
