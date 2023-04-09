docker run \
	-v $(pwd)/default.vcl:/etc/varnish/default.vcl:ro \
	--tmpfs /var/lib/varnish/varnishd:exec \
	-p 8888:80 \
	varnish
