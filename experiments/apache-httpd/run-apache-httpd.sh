docker run -it --rm \
  --name apache-httpd \
  --network=host \
  -v $(pwd)/my-httpd.conf:/usr/local/apache2/conf/httpd.conf \
  httpd


#  -v $(pwd)/apache-cache:/var/cache/apache \
