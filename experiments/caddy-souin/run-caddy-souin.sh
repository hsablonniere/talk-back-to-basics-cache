docker run -it --rm \
  --network=host \
  -v $(pwd)/Caddyfile:/etc/caddy/Caddyfile \
  caddy-souin
#  -p 8080:80 \
#  -e GOPATH=/app \
