# experiments

## nginx

* nginx stores one file per response
* the name of the file is based on a md5 sum of the request URL including query params
* if the vary header is used, the md5 sum is based on something + the list of headers used in vary + their values
  * the something seems to be related to a checksum of the request URL + some other params

* https://github.com/nginx/nginx/commit/1332e76b20a6a1e871904525d42b17dcaed81eec
* https://github.com/nginx/nginx/commit/6255935e0fc6732dd06323085a22209103322c6a
* https://github.com/nginx/nginx/commit/5f625b7df05ab02232c6e5dff94bc2961be3a554
* https://www.reddit.com/r/nginx/comments/gah5d1/how_does_nginx_name_cache_file_when_response/

## Apache

* https://github.com/apache/httpd/blob/trunk/modules/cache/mod_cache_disk.c

## Chrome

* It doesn't support storing multiple values/responses for the same URL
  * https://github.com/chromium/chromium/tree/85f0925c634931c6cf4698477293dc2496d78d09/content/browser/cache_storage#layout-of-the-disk_cachebackend
  * https://bugs.chromium.org/p/chromium/issues/detail?id=720918&q=cachestorage%20vary&can=2
  * https://bugs.chromium.org/p/chromium/issues/detail?id=756796&q=cachestorage%20vary&can=2
  * https://bugs.chromium.org/p/chromium/issues/detail?id=886861&q=cachestorage%20vary&can=2

## ultrafecth

* https://github.com/natemoo-re/ultrafetch
* https://github.com/kornelski/http-cache-semantics
* https://github.com/zaaack/keyv-file
* https://github.com/isaacs/node-lru-cache
* https://wpt.live/service-workers/cache-storage/script-tests/

## bfcache

* seems like Chromium only saves the previous page
* seems like Webkit saves the 2 previous pages
* seems like Firefox saves the 3 previous pages

## memory cache

* a page with 3 script tags (non ESM) in the initial HTML + 4th script injected after
  * Chromium and Webkit => 2 requests
  * Firefox 4 requests => 2 requests
* index.js 4 times in the initial HTML
  * SCRIPT, MODULE, SCRIPT, MODULE
    * => 3 requests in chromium
    * => 3 requests in firefox
  * SCRIPT, SCRIPT, MODULE, MODULE
    * => 2 requests in chromium
