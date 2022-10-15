---
author: Hubert Sablonnière
author-twitter: @hsablonniere
author-company: Clever Cloud
event: DevFest Nantes
date: 21 octobre 2022
---

# Le cache HTTP

## poster fade-from
> @00:00:00@

## blank black
> L'autre jour,
> j'étais dans mon canap',
> j'allume la télé et j'me lance dans une activité qu'on connait tous très bien :
> #Bruit de Netflix#

## text
C'est *quoi* qu'on va <br> regarder sur Netflix *?*
> #Voix de pub#
> Le "C'est quoi qu'on va <br> regarder sur Netflix ?"
> Activité qui dure souvent... un peu trop longtemps.
> Surtout si vous êtes plusieurs à choisir et que vous cumulez les abonements à d'autres services.
> Au final, après 20min de négo, vous choisissez un film trop long et il est trop tard pour le lancer.

## text fade-from
Netflixfilmauswahldurchsuchung
<!-- chercher à travers le choix de films de Netflix -->

## blank black
> Quand j'étais plus jeune, dans les années 90,
> j'avais pas ce problème.

<!-- https://unsplash.com/photos/6Nbo9Pn0yJA -->
## media
<img src="src/img/videostore.jpg">
> On allait au vidéoclub et malgré les conseils d'un être humain bien plus valables que ceux d'un algo,
> une fois sur deux j'revenais avec la VHS de...

<!-- https://www.themoviedb.org/t/p/original/wFbgPZA44apfPt5wWPinQvV2Pbs.png -->
## media logo black
<img src="src/img/back-to-the-future.png">
> "Retour vers le Futur II".
> Simple, efficace.

## subway videostore stop=0

## subway videostore stop=3

## subway videostore stop=4

## subway videostore stop=7

## subway videostore stop=9

## subway videostore stop=10
> Sauf qu'il fallait se taper l'aller/retour jusqu'au vidéo au club.
> Et le vidéoclub, il était loin...

## subway videostore stop=10
1. Étagère

## subway videostore stop=0
1. Étagère

## subway videostore stop=1 fade-from
1. Étagère
> Non ça aurait été vachement mieux si en revenant du vidéoclub, j'avais pu faire une copie locale de la cassette.
> Comme ça prochaine fois que je veux le voir, plus besoin de faire un aller retour complet.
> Mais bon, vous êtes pas venus ici pour savoir si oui on non j'ai fini par brancher ensemble les deux magnétoscopes de la maison.

## blank black

## poster
> @00:01:30@
> Bonjour à *toutes* et à tous !
> J'm'appelle Hubert Sablonnière,
> J'suis développeur Web chez *Clever Cloud* et aujourd'hui, j'ai envie de vous parler du cache HTTP.
> On va s'faire un petit retour aux sources avec des rappels pour certains et je l'espère quelques découvertes pour tout le monde.
> #Pause#

## text
🗓️ Mai *1996*
> En mai 96,
> Pendant que j'faisais mumuse avec mon cache à base de cassettes vierges,
> Tim Berners Lee, Roy Fielding et Henrik Frystyk Nielsen publiaient la...

## media
<img src="src/img/rfc-1945.png" screenshot-url="https://www.rfc-editor.org/rfc/rfc1945">
> ...RFC 1945 : HTTP 1.0
> Paye ta spec à la base de tout ce qu'on utilise aujourd'hui.
> On retrouve déjà dans cette version, une partie du cache HTTP qu'on connait aujourd'hui.

<!-- ## media -->
<!-- <img src="src/img/w3c-profile-frystyk.png" screenshot-url="https://www.w3.org/People/Frystyk/"> -->

## subway stop=10

## subway stop=10
5. Cache

## subway stop=10
4. Cache
5. Cache
6. Cache

## subway stop=10
3. Cache
4. Cache
5. Cache
6. Cache
7. Cache

## subway stop=10
2. Cache
3. Cache
4. Cache
5. Cache
6. Cache
7. Cache
8. Cache

## subway stop=10
1. Cache
2. Cache
3. Cache
4. Cache
5. Cache
6. Cache
7. Cache
8. Cache
9. Cache

## subway stop=10
1. Cache privé
2. Cache privé
3. Cache privé
4. Cache privé
5. Cache privé
6. Cache privé
7. Cache privé
8. Cache
9. Cache

## subway stop=10
1. Cache privé
2. Cache privé
3. Cache privé
4. Cache privé
5. Cache privé
6. Cache privé
7. Cache privé
8. Cache partagé
9. Cache partagé

## todo
accolade sur les caches privés à gauche
accolade sur les caches public (partagés) à droite
schéma : client => cache => cache => cache  => cache  =======> serveur

## list current=1
Réduction des temps de chargement
Réduction de la charge serveur

## list current=2
Réduction des temps de chargement
Réduction de la charge serveur

<!-- Lapin RTP -->
<!-- à trop vouloir cacher, on se retrouve souvent dans le cas où il faut vider son cache pour réparer un bug -->
<!-- ça c'est parce que oui le cache HTTP, c'est pas simple -->
<!-- et on est là pour essayer de mieux comprendre ce qu'il se passe -->

<!-- YOU ARE HERE -->

<!-- ## text -->
<!-- 📄 RFC 1945 - *HTTP/1.0* -->
<!-- <br> (mai 1996) -->

<!-- ## text -->
<!-- 📄 RFC 2068 - *HTTP/1.1* -->
<!-- <br> (janvier 1997) -->

<!-- ## media -->
<!-- <img src="src/img/rfc-2068.png" screenshot-url="https://www.rfc-editor.org/rfc/rfc2068"> -->

<!-- ## text -->
<!-- 📄 RFC 2616 - *HTTP/1.1* -->
<!-- <br> (juin 1999) -->

<!-- ## media -->
<!-- <img src="src/img/rfc-2616.png" screenshot-url="https://www.rfc-editor.org/rfc/rfc2616"> -->

<!-- ## text -->
<!-- 📄 RFC 2616 - Juin 1999 -->
<!-- <br> *HTTP/1.1* -->

<!-- Les screenshot de RFC, ça marche pas trop -->

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

  "transition loueur de cassettes => cache HTTP et spec RFC des années 90"
 -->

## text
un slide avant démo

## demo

## demo
_
terminal Serveur HTTP

## demo
chromium Chromium 106
firefox Firefox 105
terminal Serveur HTTP

## demo
chromium Chromium 106
_
_

## demo
chromium Chromium 106
firefox Firefox 105
_

## demo
chromium Chromium 106
firefox Firefox 105
webkit WebKitGTK (Safari 15)

## demo
chromium Chromium 106
terminal Serveur HTTP

## demo
chromium Chromium 106

## text
un slide entre 2 démos

## demo chromium

## text
super démo !

## todo
RFC 1945 HTTP/1.0 (1996)
RFC 2068 HTTP/1.1 (1997)
RFC 2616 HTTP/1.1 (1999)
RFC 5861 HTTP Cache-Control Extensions for Stale Content (2010)
RFC 7232 HTTP/1.1: Conditional Requests (2014)
RFC 7234 HTTP/1.1: Caching (2014)
RFC 7540 HTTP/2 (2015)
RFC 8246 HTTP Immutable Responses (2017)
RFC 9114 HTTP/3 (2022)
RFC 9211 The Cache-Status HTTP Response Header Field (2022)
RFC 9213 Targeted HTTP Cache Control (2022)
RFC 9110 HTTP Semantics (2022)
RFC 9111 HTTP Caching (2022)

## list current=0
Réduire les temps de chargement
Soulager la charge serveur

## list current=1
Réduire les temps de chargement
Soulager la charge serveur

## list current=2
Réduire les temps de chargement
Soulager la charge serveur

## text
⏱️ Cache ça pendant X secondes
> Avant de rentrer dans le "comment dire au cache de cacher",
> on va déjà voir comment lui dire de ne pas cacher.

## code todo
```http
cache-control: max-age=10
```
> L'en-tête cache-control et la directive no-store
> Valeur numérique en seconde
> Expliquer la notion de frais et périmé
> Le cache peut très bien supprimer un truc pendant qu'une réponse est fraiche pour faire de la place

## text
👍️ *Frais* +pendant+ X secondes

## text
🤙️ *Périmé* +après+ X secondes

## text
⏱️ Expiration

## text
🤔 Pas de cache-control ?

## text
🤞 Cache heuristique

## todo
RFC Cache heuristique
> Responses with status codes that are defined as heuristically cacheable (e.g., 200, 203, 204, 206, 300, 301, 308, 404, 405, 410, 414, and 501 in this specification) 
> https://www.rfc-editor.org/rfc/rfc9110#section-15.1

## code todo
```http
last-modified:
```
> exemple/demo du last-modified qui trigger un cache heuristique

## todo
ARTICLES Cache heuristique

## text
🧐 Validation
> Quand un cache a une réponse périmée, il ne la supprime pas forcément
> Il va essayer de valider auprès du serveur si la version qu'il a est tjs fraiche
> avec une requête conditionnelle

## code todo
```http
last-modified:
```
```http
if-modified-since:
```
> expliquer que le last-modified va trigger des requete conditionnelles if-modified-since

## code todo
```http
304 Not Modified
```
> C'est là que le serveur va renvoyer une 304 sans le body

## code todo
```http
etag: 29842948
```
```http
if-none-match: 29842948
```
> les heuristiques se font à priori uniquement sur ces en-têtes de date
> par contre même système de validation avec etag et if-none-match
> s'il y a les deux, c'est le etag qui prend la main
> de base un cache va directement répondre ce qui est frais sans faire appel au serveur

## text
🙅‍♂️ *Pas* de cache
> Avant de rentrer dans le "comment dire au cache de cacher",
> on va déjà voir comment lui dire de ne pas cacher.

## code todo
```http
cache-control: no-store
```
> L'en-tête cache-control et la directive no-store
> Expliquer le piège avec no-cache
> Pourquoi pas démo avec curl et nginx

## code todo
```http
cache-control: must-revalidate
```
> https://www.rfc-editor.org/rfc/rfc9111#section-5.2.2.2

<!-- 
clé de stockage (URL (+ vary))
méthodes cachables
response status cacheables
 -->

## code todo
```http
cache-control: no-cache
```

## todo
recap no-store, no-cache, must-revalidate

## code todo
```http
cache-control: immutable
```
> https://www.rfc-editor.org/rfc/rfc8246
> à priori, la différence, c'est quand tu F5 une page
> avec immutable, ça 304 pas les sous requêtes
> sans immutable, ça 304 les sous requêtes
> sauf chrome qui a déjà un système pour ça ? (WTF)
> https://www.keycdn.com/blog/cache-control-immutable
> https://bugs.chromium.org/p/chromium/issues/detail?id=611416#c12
> Chrome 53/54
> https://blog.chromium.org/2017/01/reload-reloaded-faster-and-leaner-page_26.html

## code todo
```http
cache-control: no-transform
```
> anecdote de test sans compression

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

## subway stop=10 title="Beaucoup de couches de cache"
1. BF cache
2. Memory cache
3. Module map
4. Service worker cache
5. Appcache
6. Disk cache
7. HTTP/2 push cache
8. CDN
9. Reverse proxy cache

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
