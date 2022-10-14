FROM ubuntu:latest

RUN apt-get update

RUN apt-get install -y xauth wget firefox libxt6
RUN touch ~/.Xauthority
RUN xauth add hal/unix:0  MIT-MAGIC-COOKIE-1  2e4154b68da27c29606a775074eeeffe

RUN mkdir /root/firefox-48
WORKDIR /root/firefox-48
RUN cd /root/firefox-48
RUN wget https://ftp.mozilla.org/pub/firefox/releases/48.0/linux-x86_64/fr/firefox-48.0.tar.bz2
RUN tar -v -xf firefox-48.0.tar.bz2
RUN pwd
RUN mkdir /root/firefox-48/firefox/distribution
RUN echo '{"policies":{"DisableAppUpdate": true}}' > /root/firefox-48/firefox/distribution/policies.json

RUN mkdir /root/firefox-60
WORKDIR /root/firefox-60
RUN cd /root/firefox-60
RUN wget https://ftp.mozilla.org/pub/firefox/releases/60.0/linux-x86_64/fr/firefox-60.0.tar.bz2
RUN tar -v -xf firefox-60.0.tar.bz2
RUN pwd
RUN mkdir /root/firefox-60/firefox/distribution
RUN echo '{"policies":{"DisableAppUpdate": true}}' > /root/firefox-60/firefox/distribution/policies.json

RUN mkdir /root/firefox-80
WORKDIR /root/firefox-80
RUN cd /root/firefox-80
RUN wget https://ftp.mozilla.org/pub/firefox/releases/80.0/linux-x86_64/fr/firefox-80.0.tar.bz2
RUN tar -v -xf firefox-80.0.tar.bz2
RUN pwd
RUN mkdir /root/firefox-80/firefox/distribution
RUN echo '{"policies":{"DisableAppUpdate": true}}' > /root/firefox-80/firefox/distribution/policies.json

CMD ["/root/firefox-48/firefox/firefox"]
