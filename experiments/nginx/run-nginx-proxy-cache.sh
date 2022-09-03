docker run -it --rm \
  --name nginx-proxy-cache \
  --network=host \
  -e NGINX_PORT=8080 \
  -v $(pwd)/nginx.conf:/etc/nginx/nginx.conf:ro \
  -v $(pwd)/nginx-cache:/var/nginx-cache \
  -v $(pwd)/nginx-logs:/var/nginx-logs \
  nginx nginx-debug -g 'daemon off;'
