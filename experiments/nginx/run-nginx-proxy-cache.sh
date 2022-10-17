docker run -it --rm \
  --name nginx-proxy-cache \
  --network=host \
  -e NGINX_PORT=8888 \
  -v $(pwd)/nginx.conf:/etc/nginx/nginx.conf:ro \
  nginx
#  -v $(pwd)/nginx-cache:/var/nginx-cache \
#  -v $(pwd)/nginx-logs:/var/nginx-logs \
#  nginx nginx-debug -g 'daemon off;'
