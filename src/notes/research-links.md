# Research links

## Tweets

* https://twitter.com/malwaredllc/status/1525920922439278592
* https://twitter.com/ericbureltech/status/1536711135063334913
* https://twitter.com/geekprocess/status/1536915794226843648
* https://twitter.com/anniesullie/status/1491399685961293828?s=20&t=BkT2G-jFw-q8-o-91HBjOA

## Articles, talks, podcasts...

* https://blog.yoav.ws/tale-of-four-caches/
  * the memory cache
    * Life time of the page
    * URL + content type and other things
    * doesn't care about max-age 0 or no-cache
    * care about no-store
    * doesn't show up in devtools
    * linked to preload
  * Service worker cache
    * Does what the developper decided
  * HTTP Cache (disk cache)
    * Does what the HTTP semantics say 
    * "On the one hand, it is persistent, allowing resources to be reused between sessions and even across sites."
      * I don't think this is true anymore
    * stores prefetch requests
  * Push Cache (HTTP/2)
    * “unclaimed push streams container”
    * but it does not apply strict HTTP semantics
    * "The push cache is also not well-defined in specs and implementations may vary between browsers, operating systems and other HTTP/2 clients."
  * going back, each layer keeps a copy or a reference
* https://almanac.httparchive.org/en/2021/caching#fig-3
* https://ourtechroom.com/tech/chrome-memory-cache-vs-disk-cache/
* https://jakearchibald.com/2020/multiple-versions-same-time/
* https://jakearchibald.com/2016/caching-best-practices/
* https://jakearchibald.com/2014/browser-cache-vary-broken/
* https://jakearchibald.com/2014/offline-cookbook/
* https://web.dev/http-cache/
* https://symfony.com/doc/current/http_cache.html
* https://pca.st/s00z81hk (HTTP 203 podcast episode about back/forward)
* https://www.youtube.com/watch?v=HiBDZgTNpXY
* https://www.mnot.net/cache_docs/
* https://developer.mozilla.org/en-US/docs/Web/HTTP/Caching
* https://developer.mozilla.org/en-US/docs/Web/API/Cache
* https://developer.mozilla.org/en-US/docs/Web/API/CacheStorage
* https://web.dev/service-worker-caching-and-http-caching/
* https://developer.mozilla.org/en-US/docs/Web/API/Window/applicationCache
* https://web.dev/bfcache/
  * https://developer.mozilla.org/en-US/docs/Mozilla/Firefox/Releases/1.5/Using_Firefox_1.5_caching
  * https://webkit.org/blog/427/webkit-page-cache-i-the-basics/
  * https://docs.google.com/document/d/1JtDCN9A_1UBlDuwkjn1HWxdhQ1H2un9K4kyPLgBqJUc/edit
  * https://back-forward-cache-tester.glitch.me/?persistent_logs=1
* https://engineering.fb.com/2015/04/13/web/web-performance-cache-efficiency-exercise/
* https://www.youtube.com/watch?v=tprJYFkv4LU
* https://www.youtube.com/watch?v=aN8wMQVaNvs
* https://www.youtube.com/watch?v=HD3Qqc8FxXM
* https://www.youtube.com/watch?v=cznVISavm-k
* https://www.youtube.com/watch?v=6q75MVFLlok
* https://www.youtube.com/watch?v=81tsfhuE5w8
* https://www.youtube.com/watch?v=BC6NvHssquI
* https://www.youtube.com/watch?v=QHpdk-o68JE
* https://devcenter.heroku.com/articles/increasing-application-performance-with-http-cache-headers
* https://www.smashingmagazine.com/2022/05/performance-game-changer-back-forward-cache/
* https://www.smashingmagazine.com/2017/11/understanding-vary-header/
* https://css-tricks.com/strategies-for-cache-busting-css/
* https://simonhearne.com/2020/network-faster-than-cache/
* https://www.smashingmagazine.com/2016/05/modern-wordpress-server-stack/
* https://www.smashingmagazine.com/2016/05/five-simple-steps-test-varnish-cache-deployment-varnishtest/
* https://www.smashingmagazine.com/2014/03/wordpress-performance-improvements-that-can-go-wrong/
* https://www.smashingmagazine.com/2013/12/speed-up-your-mobile-website-with-varnish/
* https://css-tricks.com/netlify-does-cache-invalidation-for-you/
* https://css-tricks.com/strategies-for-cache-busting-css/
* https://css-tricks.com/cache-aware-server-push/
* https://spinupwp.com/wordpress-caching-all-you-need-to-know/
* https://www.fastly.com/blog/best-practices-using-vary-header
  * https://developer.fastly.com/reference/vcl/
* https://groups.google.com/a/chromium.org/g/bfcache-dev/c/zat_po-KKxI
* https://webkit.org/blog/9609/release-notes-for-safari-technology-preview-94/#:~:text=from%20working%20correctly-,back%2Dforward%20Cache,-Allowed%20pages%20served
* https://www.chromium.org/developers/design-documents/network-stack/disk-cache/
* https://www.chromium.org/developers/design-documents/network-stack/http-cache/
* https://www.chromium.org/chromium-os/chromiumos-design-docs/protecting-cached-user-data/
* https://dexecure.com/blog/http2-push-vs-http-preload/
* https://developer.chrome.com/blog/modulepreload/
* https://developer.chrome.com/blog/http-cache-partitioning/
* https://arstechnica.com/gadgets/2020/12/firefox-v85-will-improve-its-cache-partitioning-for-stronger-privacy/
* https://paulcalvano.com/2018-03-14-http-heuristic-caching-missing-cache-control-and-expires-headers-explained/

### Devtools

* Firefox about:cache
* chrome://discards/
* chrome://appcache-internals/
* chrome://serviceworker-internals/

### RFC

* https://www.rfc-editor.org/rfc/rfc2616.html
* https://httpwg.org/specs/rfc7234.html
* https://httpwg.org/specs/rfc9111.html
* https://html.spec.whatwg.org/multipage/links.html#link-type-modulepreload
* https://html.spec.whatwg.org/multipage/dom.html#concept-document-module-map
* https://html.spec.whatwg.org/multipage/webappapis.html#module-map

### Tools

* https://en.wikipedia.org/wiki/Nginx
* https://en.wikipedia.org/wiki/Squid_(software)
* https://en.wikipedia.org/wiki/Varnish_(software)
* https://en.wikipedia.org/wiki/Apache_Traffic_Server
* https://en.wikipedia.org/wiki/Apache_HTTP_Server
* https://caddyserver.com/docs/quick-starts/reverse-proxy#reverse-proxy-quick-start
  * proxy but no cache
* https://doc.traefik.io/traefik-enterprise/middlewares/http-cache/
* https://docs.haproxy.org/2.6/configuration.html#6

### Random

* https://github.com/jimmywarting/cache-polyfill/blob/master/src/cache.js
* https://developers.cloudflare.com/cache/get-started/
* https://developer.fastly.com/reference/http/http-headers/Vary/
* https://www.fastly.com/blog/best-practices-using-vary-header
* https://www.fastly.com/blog/best-practices-using-vary-header
* https://www.smashingmagazine.com/2017/11/understanding-vary-header/
* https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Vary
* https://www.nginx.com/blog/nginx-high-performance-caching/#WhatdoesNGINXcache
* https://medium.com/programming-articles/caching-post-responses-with-nginx-1c0c064bb6b0
* https://www.thedotproduct.org/posts/nginx-vary-header-handling.html
* https://github.com/nginx/nginx/blob/master/src/http/ngx_http_file_cache.c
* https://nginx.org/en/docs/http/ngx_http_proxy_module.html#proxy_cache_valid
