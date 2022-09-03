FROM archlinux

RUN pacman -Sy

RUN pacman -S --noconfirm \
    make \
    mercurial \
    base-devel \
    vim

RUN mkdir /home/nginx
RUN mkdir /var/nginx-logs
RUN mkdir /var/nginx-cache

COPY ./nginx /home/nginx

WORKDIR /home/nginx

RUN auto/configure --with-debug
RUN make
RUN make install

COPY ./entrypoint.sh /

#ENTRYPOINT /entrypoint.sh

# /home/nginx/objs/nginx -c /home/nginx-config/nginx.conf
# tail -f /var/nginx-logs/log
