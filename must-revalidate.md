# Looking for a reason to use must-revalidate

## nginx

### source code

Looking for `no-store`,

```
rg 'no-store' -g '!*.{html,xml,sgml}*'
```

you can find some stuffs:

```
# src/http/ngx_http_upstream.c
if (ngx_strlcasestrn(start, last, (u_char *) "no-cache", 8 - 1) != NULL
        || ngx_strlcasestrn(start, last, (u_char *) "no-store", 8 - 1) != NULL
        || ngx_strlcasestrn(start, last, (u_char *) "private", 7 - 1) != NULL)
```

```
# src/http/ngx_http_core_module.c
static ngx_conf_bitmask_t  ngx_http_gzip_proxied_mask[] = {
    { ngx_string("off"), NGX_HTTP_GZIP_PROXIED_OFF },
    { ngx_string("expired"), NGX_HTTP_GZIP_PROXIED_EXPIRED },
    { ngx_string("no-cache"), NGX_HTTP_GZIP_PROXIED_NO_CACHE },
    { ngx_string("no-store"), NGX_HTTP_GZIP_PROXIED_NO_STORE },
    { ngx_string("private"), NGX_HTTP_GZIP_PROXIED_PRIVATE },
    { ngx_string("no_last_modified"), NGX_HTTP_GZIP_PROXIED_NO_LM },
    { ngx_string("no_etag"), NGX_HTTP_GZIP_PROXIED_NO_ETAG },
    { ngx_string("auth"), NGX_HTTP_GZIP_PROXIED_AUTH },
    { ngx_string("any"), NGX_HTTP_GZIP_PROXIED_ANY },
    { ngx_null_string, 0 }
};

static ngx_str_t  ngx_http_gzip_no_cache = ngx_string("no-cache");
static ngx_str_t  ngx_http_gzip_no_store = ngx_string("no-store");
static ngx_str_t  ngx_http_gzip_private = ngx_string("private");
```

Looking for `must-revalidate`,

```
rg 'must-revalidate' -g '!*.{html,xml,sgml}*'
```

you get nothing.

### tests

* When using proxy_cache_use_stale error http_503
  * I was able to get nginx to serve stale contents if the upstream closes or returns a 503
  * But a must-revalidate didn't prevent it

* etag, cc:ma=10 && etag, cc:ma=10,mr
  * t=0
    * full request 
    * 200 with etag
  * t>10 200 with etag
    * conditional if-none-match request to proxy 
      * full request to server 
      * 200 with etag
    * 304 with etag

## apache

### source code

Looking for `must-revalidate`,

```
rg 'must-revalidate' -g '!*.{html,xml,sgml}*'
```

you can find some stuffs:

```
# modules/cache/cache_util.c
else if (!ap_cstr_casecmp(token, "must-revalidate")) {
    cc->must_revalidate = 1;
}
```

And then, looking for `must_revalidate`, you find details about:

* auth header
* stale contents

### tests

* I was not able to get apache to serve stale contents if the upstream closes or returns a 503
  * even with `CacheStaleOnError`

* etag, cc:ma=10 && etag, cc:ma=10,mr
  * t=0
    * full request
    * 200 with etag
  * t>10 200 with etag
    * conditional if-none-match request to proxy
      * full request to server
      * 200 with etag
    * 304 with etag

## varnish

### source code

Looking for `no-store`,

```
rg 'no-store' -g '!*.{html,xml,sgml}*'
```

you can find some stuffs:

Looking for `must-revalidate`,

you get nothing.

### tests

* I was able to get varnish to serve stale contents if the upstream closes or returns a 503
* But a must-revalidate didn't change anything

* etag, cc:ma=10 && etag, cc:ma=10,mr
  * t=0
    * full request
    * 200 with etag
  * t>10 200 with etag
    * conditional if-none-match request to proxy
      * conditional if-none-match request to server
      * 304 with etag
    * 304 with etag


## caddy+souin

### tests

* etag, cc:ma=10
  * t=0
    * full request
    * 200 with etag
  * t>10 200 with etag
    * conditional if-none-match request to proxy
      * conditional if-none-match request to server
      * 304 with etag
    * 304 with etag

etag, cc:ma=10,mr
  * t=0
    * full request
    * 200 with etag
  * t>10 200 with etag
    * conditional if-none-match request to proxy
      * conditional if-none-match request to server
      * 304 with etag
    * 200 with same etag

I have some errors:

```
2023/04/10 22:27:59.840	ERROR	http.handlers.cache	Impossible to set value into Badger, Value with size 1278227 exceeded 1048576 limit. Value:
```
