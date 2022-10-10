---
author: Hubert Sablonnière
author-twitter: @hsablonniere
author-company: Clever Cloud
hashtags: #cache #http #webperf
event: DevFest Nantes
date: 21 octobre 2022
---

# Le cache HTTP

## poster fade-from

## blank black

<!-- 
* intro
  * quand j'étais petit, j'allais chez le loueur de cassettes près de chez moi
  * ah les cassettes vidéos
  * les TV cathodiques
  * les aller retour en voiture pour faire à peine 2km
  * bref, les années 90
  * je prenais tout le temps retour vers le futur
  * à chaque fois je devais faire un aller/retour
  * je me suis dit, tiens mais c'est quand même dommage de faire l'aller retour à chaque fois alors que le film n'a pas changé
  * ça serait quand même plus pratique si j'avais une version en local, ça m'éviterai de faire l'aller retour à chaque fois
  * ça éviterai d'encombrer les files d'attentes inutilement chez le loueur de cassettes
  * ça éviterai à tous ces pauvres enfants qui voulaient aussi voir le film de ne pas leur en empếcher un énième weekend
  * l'histoire ne dit pas si j'ai branché ensemble les deux magnétoscopes de la maison et profité d'une cassette vierge qui trainait
  * non, l'histoire ne le dit pas
  * par contre, j'avais déjà un peu cotoyer à ma manière, une technique, un protocole qui était en pleine création
 -->

## text
> @00:00:00@
🗓️ some text
> NOTES

## code
```js
// some code
```
> NOTES

## poster
> @00:02:00@
> Bonjour à *toutes* et à tous !
> J'm'appelle Hubert Sablonnière,
> J'suis développeur Web chez *Clever Cloud* et aujourd'hui, j'ai envie de vous parler de...
> #Pause#

## blank

<!-- 
* contexte
  * le cache c'est puissant
  * le cache c'est utile pour soulager la charge du serveur
  * le cache c'est utile pour soulager la conso réseau du client
  * c'est en conséquence un outil très puissant pour améliorer les performances d'un site Web
  * entre le serveur et le client, il n'y a pas qu'un seul cache, il y en a bcp
  * c'est compliqué et rarement maitrisé
  * "vide ton cache"
  historique
  RFC
 -->

## todo
schéma : client HTTP => serveur HTTP

<!--
curl en localhost, pas de surprise
-->

## todo
schéma : client HTTP => cache HTTP => serveur HTTP

<!--
TODO : choisir si on parle de validation avant ou après cache control
-->

## todo
Validation

## code todo
```http
last-modified: 
```

## code todo
```http
etag: 29842948
```

## code todo
```http
304 Not Modified
```

## todo
heuristic cache

## todo
Expiration

<!-- 
clé de stockage (URL (+ vary))
méthodes cachables
response status cacheables
 -->

## code todo
```http
cache-control: no-cache
```

## code todo
```http
cache-control: no-store
```

## code todo
```http
cache-control: must-revalidate
```

## code todo
```http
cache-control: max-age
```

## code todo
```http
cache-control: immutable
```

## code todo
```http
cache-control: no-transform
```

## todo
request cache-control

## todo
obsolete headers

## todo
schéma : client => cache privé => cache partagé/public => serveur

<!-- 
* montrer 2 entrées, 2 navigateurs, 2 utilisateurs, avec un seul cache partagé
 -->

## todo
public/private

## todo
schéma : onglet => cache navigateur => CDN => cache reverse proxy => serveur

<!-- 
* montrer plusieurs entrées/navigateurs/utilisateurs, avec plusieurs points de CDN vers un seul serveur
* nginx, varnish, apache...
* CDN (c'est un réseau de couches de cache aussi)
* s-maxage
* proxy-revalidate
* header vary
 -->

## section
Reverse proxy

## section
CDN

## section
Content Delivery <br> Network

## todo
cache-control: s-maxage

## todo
vary

<!-- 
article sur vary du w3c
article sur vary de jake
le système est cassé
 -->

## todo
schéma : onglet => cache navigateur => CDN => cache reverse proxy => serveur

## todo
pratique

<!--
temps des démos et des cas pratiques
-->

## todo
schéma : onglet => les caches du navigateur => CDN => cache reverse proxy => serveur

<!--
les caches du navigateur
memory cache
disk cache
-->

## section
Disk cache

## section
Memory cache

## todo
schéma : onglet => les caches du navigateur => CDN => cache reverse proxy => serveur

<!--
module map
-->

## section
Module map

## todo
schéma : onglet => les caches du navigateur => CDN => cache reverse proxy => serveur

<!--
http2 push cache
-->

## section
HTTP/2 push cache

## todo
schéma : onglet => les caches du navigateur => CDN => cache reverse proxy => serveur

<!--
bfcache
-->

## section
Back/Forward cache

## todo
schéma : onglet => les caches du navigateur => CDN => cache reverse proxy => serveur

<!--
SW et appcache
-->

## section
Appcache

## section
Service Worker cache

## blank
> TODO

## poster
Merci beaucoup !

## credits

Liens :

* Source des composants : https://github.com/CleverCloud/clever-components
* Smart CDN source : https://github.com/CleverCloud/clever-components-cdn
* UI pour sélectionner : https://components.clever-cloud.com/

Références :

* Panneaux code de la route : https://fr.wikibooks.org/wiki/Code_de_la_route/Liste_des_panneaux

Images :

* Brique métro : https://fr.depositphotos.com/15705561/stock-photo-white-tiled-parisian-metro.html
* https://www.dreamstime.com/stock-image-white-tiled-parisian-metro-image27856761

Polices :

* PT Sans : https://fonts.google.com/specimen/PT+Sans
* Anton : https://fonts.google.com/specimen/Anton
* Yanone Kaffeesatz : https://fonts.google.com/specimen/Yanone+Kaffeesatz
* Parisine : https://www.onlinewebfonts.com/download/d8cc1ca87104135f5cf13444f7490a69

Sons :

* Marimba note : https://www.youtube.com/watch?v=8FJMTJmuoU8
