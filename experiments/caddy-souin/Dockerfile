FROM caddy:builder AS builder

RUN xcaddy build \
    --with github.com/darkweak/souin/plugins/caddy

FROM caddy

COPY --from=builder /usr/bin/caddy /usr/bin/caddy
