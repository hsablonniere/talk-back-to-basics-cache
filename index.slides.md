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

## text netflix
🍿 C'est *quoi* qu'on va <br> regarder sur Netflix *?*
> #Voix de pub#
> Le "C'est quoi qu'on va <br> regarder sur Netflix ?"
> Activité qui dure souvent... un peu trop longtemps.
> Surtout si vous êtes plusieurs à choisir et que vous cumulez les abonements à d'autres services.
> Au final, après 20min de négo, vous choisissez un film trop long et il est trop tard pour le lancer.

## text fade-from
👀 Netflixfilmauswahldurchsuchung
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
<img src="src/img/tim-berners-lee.jpg">

## media
<img src="src/img/roy-fielding.png">

## media
<img src="src/img/w3c-profile-frystyk.png" screenshot-url="https://www.w3.org/People/Frystyk/">

## media
<img src="src/img/rfc-1945.png" screenshot-url="https://www.rfc-editor.org/rfc/rfc1945">
> ...RFC 1945 : HTTP 1.0
> Paye ta spec à la base de tout ce qu'on utilise aujourd'hui.
> On retrouve déjà dans cette version, le principe de base du cache.

## subway stop=10

## subway stop=10 pop
6. Cache
avec le petit train

## subway stop=6 pop
6. Cache
avec le petit train

## text
🤔 À quoi ça sert ?

## list current=0
Réduire le chargement côté client
Réduire la charge côté serveur
Meilleures perfs pour tout le monde

## list current=1
Réduire le chargement côté client
Réduire la charge côté serveur
Meilleures perfs pour tout le monde

## list current=2
Réduire le chargement côté client
Réduire la charge côté serveur
Meilleures perfs pour tout le monde

## list current=3
Réduire le chargement côté client
Réduire la charge côté serveur
Meilleures perfs pour tout le monde

## text
🤯 C'est compliqué
> le problème c'est que c'est pas simple à gérer
> et on se retrouve parfois dans la situation de
> "vide ton cache" pour résoudre un bug

## todo
n'oublie pas de vider ton cache, tu risques d'afficher un contenu trop vieux

## text
🤔 Comment ça marche ?

## text
💆‍♀️ Une histoire d'*en-tête*

## code
```http
cache-control: max-age=?
cache-control: no-store
cache-control: no-cache
cache-control: must-revalidate
cache-control: immutable
cache-control: stale-while-revalidate=?
cache-control: stale-if-error=?
cache-control: private
cache-control: public
cache-control: s-maxage=?
cache-control: proxy-revalidate
cache-control: no-transform
```

## code
```http
etag: W/"183d1fe5a48-87c"
if-none-match: W/"183d1fe5a48-87c"
```
```http
last-modified: Fri, 21 Oct 2022 11:20:10 GMT
if-modified-since: Fri, 21 Oct 2022 11:20:10 GMT
```
```http
vary: Accept-Encoding
```

## text
🔗 *Sources :* HTML, CSS, JS...
> mais aussi de comment sont écrits les sources HTML, CSS, JS...

## text
🤝
Frontend *&* backend
> c'est donc à la fois une affaire de front et de back

<!-- 
## text
🫶 <br> *Tout le monde* a besoin de cache
 -->

## blank

## code
```http label="Réponse HTTP"
cache-control: 
```
> l'en-tête le plus important, c'est cache-control

## code
```http label="Réponse HTTP"
cache-control: directive-foo
```
> il peut être utilisé dans une requête ou dans une réponse
> on va surtout parler de son usage dans une réponse

## code
```http label="Réponse HTTP"
cache-control: directive-foo, directive-bar
```
> en valeur de cache-control, on va pouvoir mettre une ou plusieurs directive séparées par des virgules

## blank

## code
```http label="Réponse HTTP"
cache-control: max-age=[secondes]
```
> la directive la plus utile, c'est max-age=[secondes]

## text
🫵 <br>~C'est *pas* impératif~
> on ne peut pas vraiment dire à un navigateur cache moi ça
> encore moins cache moi ça pendant X secondes
> c'est pas impératif

## text
⏱️ ~*Cache ça* pendant X secondes~
> C'est pas impératif
> Ça ne veut pas dire "cache ça pendant X secondes"

## text
🙏 C'est *déclaratif*
> c'est déclaratif
> on peut lui dire "tu as le droit" et "tu n'as pas le droit"
> un cache peut décider à n'importe quel moment de virer une ressource (fréquence des demandes, tailles du disque...)

## text
💾 Tu as le *droit* de cacher ça

## text
👍️ *Frais* +pendant+ X secondes
> ça veut dire "tu as le droit de cacher ça", "considère que c'est frais pendant X secondes" et "considère que c'est périmé > après X secondes"
> les x secondes sont calculées par rapport à l'en tête date

## text
🤙️ *Périmé* +après+ X secondes

## demo

## demo
_
terminal Serveur HTTP

## demo
firefox Firefox 105
terminal Serveur HTTP

## code
```http label="Réponse HTTP"
cache-control: no-store
```
> à l'inverse si on ne veut pas que le navigateur cache qqchose
> on utilise cache-control: no-store
> avec ça, on lui dit "tu n'as pas le droit de cacher ça"

## demo
firefox Firefox 105
terminal Serveur HTTP

## text
🤔 On fait quoi quand c'est *périmé* ?
> il se passe quoi quand un élément qui est dans le cache est périmé ?

## demo
firefox Firefox 105
terminal Serveur HTTP
> le navigateur ne le supprime pas instantanément
> il peut décider de le garder en cache 
> montrer about:cache
> il a ses propre règles pour savoir quand virer des trucs et pourquoi

## text
🤙 *Validation* avec le serveur
> quand c'est périmé, il doit faire une requête de validation pour savoir si ce qu'il a en cache peut-être utilisé

## code
```http label="Réponse HTTP"
etag: W/"183d1fe5a48-87c"
```
```http label="Requête HTTP" hide
if-none-match: W/"183d1fe5a48-87c"
```

## code
```http label="Réponse HTTP"
etag: W/"183d1fe5a48-87c"
```
```http label="Requête HTTP"
if-none-match: W/"183d1fe5a48-87c"
```

## demo
firefox Firefox 105
terminal Serveur HTTP

## code
```http label="Réponse HTTP"
last-modified: Fri, 21 Oct 2022 11:20:10 GMT
```
```http label="Requête HTTP" hide
if-modified-since: Fri, 21 Oct 2022 11:20:10 GMT
```

## code
```http label="Réponse HTTP"
last-modified: Fri, 21 Oct 2022 11:20:10 GMT
```
```http label="Requête HTTP"
if-modified-since: Fri, 21 Oct 2022 11:20:10 GMT
```

## demo
firefox Firefox 105
terminal Serveur HTTP

## text
<!-- 😬 Cache *heuristique* -->
🙈 Cache *heuristique*
> si tu n'as que des last-modified
> et pas de cache control
> un cache peut rentrer en mode "heuristique"
> et considérer la réponse fraiche pendant pas plus que 10% de maintenant - last modified

## demo
firefox Firefox 105
terminal Serveur HTTP

<!-- https://stackoverflow.com/questions/1046966/whats-the-difference-between-cache-control-max-age-0-and-no-cache -->
<!-- Semantically; not much. It's shorter, though. – Mark Nottingham Apr 20, 2013 at 7:08 -->
<!-- https://web.archive.org/web/20140811162719/http://palizine.plynt.com/issues/2008Jul/cache-control-attributes/ -->
## code
```http label="Réponse HTTP"
cache-control: no-cache
```
> si vous voulez éviter ce comportement
> et forcer une validation
> vous pouvez utilise max-age=0 (mais il parait que chrome fait comme si c'était 10)
> à la place, vous pouvez utiliser no-cache
> no-cache

## demo
firefox Firefox 105
terminal Serveur HTTP

## code
```http label="Réponse HTTP"
cache-control: must-revalidate
```
> TODO, il me faut une demo avec nginx

## demo
firefox Firefox 105
terminal Serveur HTTP

## code
```http label="Requête HTTP"
cache-control: no-cache
```

## code
```http label="Requête HTTP"
cache-control: max-age=0
```

## demo
firefox Firefox 105
terminal Serveur HTTP

## demo
chromium Chromium 106
terminal Serveur HTTP

## demo
webkit WebKitGTK (Safari 15)
terminal Serveur HTTP

## code
```http label="Réponse HTTP"
cache-control: immutable
```

## code
```http label="Réponse HTTP"
cache-control: max-age=31536000, immutable
```
> mentionner la RFC

## demo
firefox Firefox 105
terminal Serveur HTTP

## demo
chromium Chromium 106
terminal Serveur HTTP

## demo
webkit WebKitGTK (Safari 15)
terminal Serveur HTTP

<!-- > https://www.rfc-editor.org/rfc/rfc8246
> à priori, la différence, c'est quand tu F5 une page
> avec immutable, ça 304 pas les sous requêtes
> sans immutable, ça 304 les sous requêtes
> sauf chrome qui a déjà un système pour ça ? (WTF)
> https://www.keycdn.com/blog/cache-control-immutable
> https://bugs.chromium.org/p/chromium/issues/detail?id=611416#c12
> Chrome 53/54
> https://blog.chromium.org/2017/01/reload-reloaded-faster-and-leaner-page_26.html -->

## code
```http label="Réponse HTTP"
cache-control: stale-while-revalidate=[secondes]
```
> RFC

## code
```http label="Réponse HTTP"
cache-control: max-age=604800, stale-while-revalidate=86400
```

## demo
firefox Firefox 105
terminal Serveur HTTP

## code
```http label="Réponse HTTP"
cache-control: stale-if-error=[secondes]
```

## code
```http label="Réponse HTTP"
cache-control: max-age=604800, stale-if-error=86400
```

## demo
firefox Firefox 105
terminal Serveur HTTP

## todo
en-tête obsoletes
pragma
expire

## code
```http label="Réponse HTTP"
cache-control: public
```
```http label="Réponse HTTP"
cache-control: private
```
> TODO transition
> public / privé
> age

## section
Reverse proxy

## subway stop=10
6. Cache navigateur

## subway stop=10 pop
6. Cache navigateur
9. Reverse proxy cache

## subway
6. Cache navigateur
9. Reverse proxy cache

## subway stop=6
6. Cache navigateur
9. Reverse proxy cache

<!-- TODO schéma avec autre client -->
## subway stop=9
6. Cache navigateur
9. Reverse proxy cache

## section
CDN

## section
Content Delivery <br> +Network+

## subway stop=10
6. Cache navigateur
9. Reverse proxy cache

## subway stop=10 pop
6. Cache navigateur
8. CDN
9. Reverse proxy cache

## subway
6. Cache navigateur
8. CDN
9. Reverse proxy cache

## subway stop=6
6. Cache navigateur
8. CDN
9. Reverse proxy cache

<!-- TODO schéma avec autre client -->
## subway stop=8
6. Cache navigateur
8. CDN
9. Reverse proxy cache

<!-- TODO pourquoi pas en conclusion -->
## text
⚡ *Premières* visites rapides
> autre détails, ça n'est pas qu'une question de 2e visite

## code
```http label="Réponse HTTP"
cache-control: s-maxage=[secondes]
```

## code
```http label="Réponse HTTP"
cdn-cache-control: 
```

## code
```http label="Réponse HTTP"
surrogate-control: 
```

## code
```http label="Réponse HTTP"
vary: [en-tête]
```

## code
```http label="Réponse HTTP"
vary: accept-encoding
```

## code
```http label="Réponse HTTP"
cache-control: no-transform
```

## section
Disk cache

## subway stop=10
6. Cache navigateur
8. CDN
9. Reverse proxy cache

## subway stop=10 pop
6. Disk cache
8. CDN
9. Reverse proxy cache

## section
Memory cache

## subway stop=10
6. Disk cache
8. CDN
9. Reverse proxy cache

## subway stop=10 pop
2. Memory cache
6. Disk cache
8. CDN
9. Reverse proxy cache

## section
Module map

## subway stop=10
2. Memory cache
6. Disk cache
8. CDN
9. Reverse proxy cache

## subway stop=10 pop
2. Memory cache
3. Module map
6. Disk cache
8. CDN
9. Reverse proxy cache

## todo
cache partitionning

## section
HTTP/2 push cache

## subway stop=10
2. Memory cache
3. Module map
6. Disk cache
8. CDN
9. Reverse proxy cache

## subway stop=10 pop
2. Memory cache
3. Module map
6. Disk cache
7. HTTP/2 push cache
8. CDN
9. Reverse proxy cache

## subway stop=10
2. Memory cache
3. Module map
6. Disk cache
7. ~HTTP/2 push cache~
8. CDN
9. Reverse proxy cache

## section
Appcache

## subway stop=10
2. Memory cache
3. Module map
6. Disk cache
7. ~HTTP/2 push cache~
8. CDN
9. Reverse proxy cache

## subway stop=10 pop
2. Memory cache
3. Module map
5. Appcache
6. Disk cache
7. ~HTTP/2 push cache~
8. CDN
9. Reverse proxy cache

## subway stop=10
2. Memory cache
3. Module map
5. ~Appcache~
6. Disk cache
7. ~HTTP/2 push cache~
8. CDN
9. Reverse proxy cache

## section
Service Worker cache

## subway stop=0
2. Memory cache
3. Module map
4. Service worker cache
5.X Appcache
6. Disk cache
7. ~HTTP/2 push cache~
8. CDN
9. Reverse proxy cache

## subway stop=2
2. Memory cache
3. Module map
4. Service worker cache
5.X Appcache
6. Disk cache
7. ~HTTP/2 push cache~
8. CDN
9. Reverse proxy cache

## subway stop=3
2. Memory cache
3. Module map
4. Service worker cache
5.X Appcache
6. Disk cache
7. ~HTTP/2 push cache~
8. CDN
9. Reverse proxy cache

## subway stop=4
2. Memory cache
3. Module map
4. Service worker cache
5.X Appcache
6. Disk cache
7. ~HTTP/2 push cache~
8. CDN
9. Reverse proxy cache

## subway stop=6
2. Memory cache
3. Module map
4. Service worker cache
5.X Appcache
6. Disk cache
7. ~HTTP/2 push cache~
8. CDN
9. Reverse proxy cache

## subway stop=10 pop
2. Memory cache
3. Module map
4. Service worker cache
5.X Appcache
6. Disk cache
7. ~HTTP/2 push cache~
8. CDN
9. Reverse proxy cache

## section
Back/Forward cache

## subway stop=0
1. BF cache
2. Memory cache
3. Module map
4. Service worker cache
5. ~Appcache~
6. Disk cache
7. ~HTTP/2 push cache~
8. CDN
9. Reverse proxy cache

## subway stop=10 title="Navigations normales"
1.X BF cache
2. Memory cache
3. Module map
4. Service worker cache
5. ~Appcache~
6. Disk cache
7. ~HTTP/2 push cache~
8. CDN
9. Reverse proxy cache

## subway stop=1 title="Historique via précédent/suivant"
1. BF cache
2. Memory cache
3. Module map
4. Service worker cache
5. ~Appcache~
6. Disk cache
7. ~HTTP/2 push cache~
8. CDN
9. Reverse proxy cache

<!-- Lapin RTP -->
<!-- à trop vouloir cacher, on se retrouve souvent dans le cas où il faut vider son cache pour réparer un bug -->
<!-- ça c'est parce que oui le cache HTTP, c'est pas simple -->
<!-- et on est là pour essayer de mieux comprendre ce qu'il se passe -->

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
