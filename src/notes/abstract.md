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

Dans le cadre de nos projets Web, on finit tous tôt au tard par optimiser les deux points suivants : réduire les temps de chargement de nos utilisateurs et soulager la charge de nos serveurs.
Dans les deux cas, on fait appel à ce bon vieux cache HTTP.
Au départ, ça parait simple, il suffit "juste" de l'active.
Au milieu, on se perd un peu dans en-têtes et les multiples couches qui entre en jeu.
Et à la fin, ça se termine bien trop souvent par un "Ça ne marche pas ? Essaye en vidant ton cache !".

Choisir et implémenter une stratégie de cache ne se fait pas à la fin du projet.
Il faut y penser durant toutes les étapes : conception, développement, build, déploiement et run.
Pour choisir la meilleure stratégie, il est important de bien comprendre comment tout cela fonctionne.

Au menu de cette session, je vous propose de (re)découvrir le cache HTTP par l'exemple et la pratique.
Nous reviendrons sur les différents en-têtes HTTP gérés par les navigateurs, CDN, proxys-cache et autres serveurs.
Nous parlerons des différents caches présents au sein des navigateurs (HTTP, Service Worker, back/forward...).
Enfin, nous aborderons différents contextes et cas de figures en proposant des stratégies adaptées.



Dans le cadre de nos projets Web, on a tous envie d'améliorer les temps de chargement de nos utilisateurs et de soulager la charge de nos serveurs.
On finira tôt ou tard par se tourner vers ce bon vieux cache HTTP.
Au début ça parait simple.
Au milieu, on se perd dans les couches et les en-têtes.
Et à la fin, ça se termine bien trop souvent par un "Ah, ça ne marche pas ? Essaye en vidant ton cache !".

Parfois ça passe. On n'a pas forcément bien compris ce qu'on a fait, mais les perfs sont plutôt bonnes. Parfois ça casse. Le serveur prend tout le traffic et on corrige des tickets à coup de "Ah, ça ne marche pas ? Essaye en vidant ton cache !".

Que ce soit pour soulager nos serveurs, pour améliorer les temps de chargement de nos utilisateurs ou bien les deux, un projet Web moderne finira tôt ou tard par se reposer sur le cache HTTP. Au début ça parait simple, mais à la fin, ça se termine bien trop souvent par un "Ah, ça ne marche pas ? Essaye en vidant ton cache !".

Que ce soit pour soulager nos serveurs, pour améliorer les temps de chargement de nos utilisateurs ou bien les deux, un projet Web moderne finira tôt ou tard par se reposer sur le cache HTTP. Au début ça parait simple, mais à la fin, ça se termine bien trop souvent par un "Ah, ça ne marche pas ? Essaye en vidant ton cache !".

Cette complexité relative est liée à la variété d'en-têtes HTTP qui entre en jeu. Certains sont envoyés par le client d'autres par le serveur. 

Elle est aussi liée au nombre de couches

En effet, choisir et implémenter une bonne stratégie de cache, c'est complexe. On ne sait pas toujours quelle couche a caché une réponse, ni pourquoi. On mélange les en-têtes client vs. serveur. Il faut bien comprendre ce qu'il se passe au cours de la vie d'une requête HTTP.

Ces petits trous dans le gigantesque éventail de connaissances du développeur moderne ont parfois des impacts non négligeables sur la sécurité de nos applications et sur la préservation de notre vie privée en tant qu’utilisateur du Web.

Au menu de cette session, je vous propose de (re)découvrir le cache HTTP par l'exemple et la pratique. Nous reviendrons sur les différents en-têtes HTTP gérés par les navigateurs, CDN, proxys-cache et autres serveurs. Nous parlerons des différents caches présents au sein des navigateurs (cache HTTP, cache Service Worker, cache back/forward...). Enfin, nous aborderons différents contextes et cas de figures en proposant des stratégies adaptées.

## Message pour le comité

...

## Idées de titre

* #RetourAuxSources : Le cache HTTP
* Partie de cache-cache en milieu HTTP
* Le cache HTTP, comment trouver le juste milieu entre les problèmes de perf et d'invalidation ?
