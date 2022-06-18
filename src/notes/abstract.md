# Abstract

## Problèmes constatés / Pourquoi ce talk ?

* Le cache est HTTP est un sujet connu, mais souvent mal maitrisé car complexe
  * Cela implique des mauvais choix de stratégie et d'implémentations : outil de build, CDN, serveur...
* On dit encore trop souvent "ça ne marche pas ? essaye en vidant ton cache !"
* Il y a beaucoup de couches concernées : navigateur (cache HTTP, SW, bfcache, preload), CDN/proxy, serveur
* On oublie souvent le problème des SPA qui durent longtemps

## Conclusion

Que ce soit pour soulager la charge d'un serveur (et vos factures) et/ou pour améliorer les temps de chargement du point de vue utilisateur, il est très important de choisir les bonnes stratégies de cache et les implémenter correctement.

Pour cela, il est nécessaire de connaitre et comprendre comment fonctionne chaque couche du système et ainsi prendre les bonnes décisions à chaque étape de la vie d'un projet Web : conception, développement, build, déploiement et run.

## Take away

Une personne qui a suivi la présentation repart avec :

* Une meilleure connaissance des différents headers HTTP : client, proxy et serveur
* Une meilleure compréhension des couches impliquées : cache HTTP du navigateur, API de cache du service worker, le back/forward cache, les proxys-cache et autres CDN, le serveur
* Des idées de stratégie de cache en fonction des usages et contexte
* La certitude que ça n'est pas qu'une question de réglage serveur au run, ça impacte aussi la conception, le dev, le build et le déploiement.

## Déroulé simplifié / Brouillon de plan

* Navigateurs: Cache HTTP
  * Headers: cache-control, max-age, expire, etag, vary, if-none-match...
  * Reload, force reload, navigation
  * Il n'y a plus de cache tiers partagé dans les navigateurs modernes
  * cache de la version compilée du JS
  * memory vs disk
* Navigateurs: Cache Service Worker
  * RIP appcache
* Navigateurs: Back/forward cache
* Proxy/CDN: cache intermédiaire
* Problème des déploiements sans arrêt (0 downtime) et des SPA à longue vie
* Détails
  * Cache 301, HSTS, CORS pre-flight
  * HTTP/2 push
  * preload, modulepreload

## Abstract

...

## Message pour le comité

...

## Idées de titre

* #RetourAuxSources : Le cache HTTP
* Partie de cache-cache en milieu HTTP
* Le cache HTTP, comment trouver le juste milieu entre les problèmes de perf et d'invalidation ?
