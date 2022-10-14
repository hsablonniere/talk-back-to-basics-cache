docker run -it --rm \
  --name apache-httpd \
  --network=host \
  -v $(pwd)/my-httpd.conf:/usr/local/apache2/conf/httpd.conf \
  -v $(pwd)/public:/var/www/html \
  httpd
