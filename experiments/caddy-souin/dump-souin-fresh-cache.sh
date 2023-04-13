curl -s http://localhost:8888/souin-api/souin | jq '.[] | select(startswith("GET"))'
