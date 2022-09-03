docker run -it --rm \
  --name arch-nginx \
  --network=host \
  -v $(pwd)/nginx-config:/home/nginx-config \
  arch-nginx

#  -v $(pwd)/nginx-logs:/var/nginx-logs \
#  -v $(pwd)/nginx-cache:/var/nginx-cache \
# objs/nginx -t -c /home/nginx-config/nginx.conf
