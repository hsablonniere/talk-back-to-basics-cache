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

* Une meilleure connaissance des différents headers HTTP : client, proxy/CDN et serveur
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

Dans le cadre de nos projets Web, on finit tous tôt au tard par faire appel à ce bon vieux cache HTTP.
Évidemment, on cherche à réduire les temps de chargement de nos utilisateurs et à soulager la charge de nos serveurs.
Au départ, ça parait simple, il suffit "juste" de l'activer.
Au milieu, on se perd un peu dans les en-têtes et les multiples couches qui entrent en jeu.
Et à la fin, ça se termine bien trop souvent par un « Ça ne marche pas ? Essaye en vidant ton cache ! ».

Choisir et implémenter une stratégie de cache, c'est complexe et ça ne se fait pas à la fin du projet.
Chaque étape est concernée : conception, développement, build, déploiement et run.
Pour faire les bons choix, il est important de bien comprendre comment tout cela fonctionne.

Au menu de cette session, je vous propose de (re)découvrir le cache HTTP par l'exemple et la pratique.
Nous reviendrons sur les différents en-têtes HTTP gérés par les navigateurs, CDN, proxys-cache et autres serveurs.
Nous parlerons des différents caches présents au sein des navigateurs (HTTP, Service Worker, back/forward...).
Enfin, nous aborderons différents contextes et cas de figures en proposant des stratégies adaptées (site statique, SPA, API REST...).

## Message pour le comité

Il s'agit d'une proposition toute neuve qui n'a jamais été présentée.
C'est un sujet que j'ai pas mal creusé durant ma carrière et qui m'intéresse beaucoup.
J'aimerais faire une présentation dans le même esprit que ce que j'ai pu faire avec les cookies HTTP : https://www.youtube.com/watch?v=KL9MR721c4w.
Revenir aux bases, expliquer les fondamentaux et donner des recettes pratiques pour des cas concrets : un site statique, une SPA dans un onglet ouvert longtemps, une API REST, que faire pendant un redéploiement sans downtime ? ...

Une personne qui a suivi la présentation repart avec :

* Une meilleure connaissance des différents headers HTTP : client, proxy/CDN et serveur
* Une meilleure compréhension des couches impliquées : cache HTTP du navigateur, API de cache du service worker, le back/forward cache, les proxys-cache et autres CDN, le serveur
* Des idées de stratégie de cache en fonction des usages et contexte
* La certitude que ça n'est pas qu'une question de réglage serveur au run, ça impacte aussi la conception, le dev, le build et le déploiement.

Cette présentation s'adresse donc à des devs frontends, backend, novice pour de la découverte ou expert pour certains rappels.

## Idées de titre

* #RetourAuxSources : Le cache HTTP
* Partie de cache-cache en milieu HTTP
* Le cache HTTP, comment trouver le juste milieu entre les problèmes de perf et d'invalidation ?
