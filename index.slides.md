---
author: Hubert Sablonnière
author-twitter: @hsablonniere
author-company: Clever Cloud
event: MiXiT
date: 14 avril 2023
---

# Le cache HTTP

## poster fade-from
> @00:00:00@

## blank black
> L'autre jour,
> j'étais dans mon canap',
> installé tranquille devant la télé et j'me lance dans une activité qu'on connait tous très bien :

## text netflix
> #Bruit de Netflix#
🍿 C'est *quoi* qu'on va <br> regarder sur Netflix *?*
> #Voix de pub#
> Le "C'est quoi qu'on va regarder sur Netflix ?"

## text fade-from
👀 Netflixfilmauswahldurchsuchung
<!-- chercher à travers le choix de films de Netflix -->
> Activité qui a bien entendu son propre mot en allemand...
> mais ... qui dure souvent ... un peu trop longtemps.
> Surtout si vous êtes plusieurs à choisir, ça négocie, en plus vous êtes abonné à what-mille services.
> Bref, après 20min de négo,
> vous choisissez un film trop long...

## blank black
> ...et il est trop tard pour le lancer.

## media white contain
<img src="src/img/wordart.png">
> #Voix pédante#
> Oui euh, dans les années 90, on n'avait pas ce problème hann.

<!-- https://unsplash.com/photos/6Nbo9Pn0yJA -->
## media
<img src="src/img/videostore.jpg">
> Ouais, on allait au vidéoclub,
> on était conseillé par un vrai être humain au lieu d'un algo,
> mais bon,
> quand t'as 10 ans,

<!-- https://www.themoviedb.org/t/p/original/wFbgPZA44apfPt5wWPinQvV2Pbs.png -->
## media logo black
<img src="src/img/back-to-the-future.png">
> tu loues un peu tout le temps le même film,
> et pour récupérer la même VHS,

## subway videostore stop=0
> fallait s'taper l'aller/retour à chaque fois,
> et le vidéoclub il était,

## subway videostore stop=3
> très...

## subway videostore stop=4
> très...

## subway videostore stop=7
> très...

## subway videostore stop=9
> très...

## subway videostore stop=10
> loin !
> Non ça aurait été vachement mieux si sur la route du retour vers mon canapé,
> j'avais pu garder une copie de la cassette...

## subway videostore stop=10
1. Étagère
> ... sur l'étagère par exemple.
> Comme ça,

## subway videostore stop=0
1. Étagère
> quand je veux revoir le film,

## subway videostore stop=1 fade-from
1. Étagère
> paf, pas besoin de faire l'aller/retour complet.
> Mais bon,

## blank black
> vous êtes pas venus ici pour savoir si oui où non j'ai fini par brancher ensemble les deux magnétoscopes de la maison.

## poster
> @00:01:20@
> Bonjour à *toutes* et à tous !
> J'm'appelle Hubert Sablonnière,
> J'suis développeur Web chez *Clever Cloud* et aujourd'hui, j'ai envie de vous parler du cache HTTP.
> #Pause#
> On va s'faire un p'tit "retour aux sources" avec de la théorie, des démos et des conseils,
> il y aura :
> * des rappels pour les plus expérimentés,
> * et quelques découvertes pour tout le monde.

## text
🗓️ Mai *1996*
> En mai 96,
> Pendant que j'faisais "peut-être" mumuse avec mon cache à base de cassettes vierges,

## media
<img src="src/img/tim-berners-lee.jpg">
> Tim Berners Lee, le papa du Web,

## media
<img src="src/img/roy-fielding.png">
> Roy Fielding, le papa de REST

## media
<img src="src/img/w3c-profile-frystyk.png" screenshot-url="https://www.w3.org/People/Frystyk/">
> et Henrik Frystyk Nielsen, le papa du...
> #hésitation#
> jaune et du Comic Sans ?
> publiaient la...

## media
<img src="src/img/rfc-1945.png" screenshot-url="https://www.rfc-editor.org/rfc/rfc1945">
> ...RFC 1945 : HTTP 1.0
> Et ça, t'as beau être nul en CSS, ça pète la classe !
> Dans cette version, on retrouve déjà certains principes de base du cache HTTP.

<!-- ## media -->
<!-- <img src="src/img/rfc-2068.png" screenshot-url="https://www.rfc-editor.org/rfc/rfc2068"> -->
<!-- > Le reste sera complété par HTTP/1.1 par 2 RFC, en 1997, -->

<!-- ## media -->
<!-- <img src="src/img/rfc-2616.png" screenshot-url="https://www.rfc-editor.org/rfc/rfc2616"> -->
<!-- > puis en 1999. -->

## subway
> Un client, un serveur

## subway pop
6. Cache
> #pop#
> et un intermédiaire

## subway
0. 🚃
6. Cache
> Le client envoie une requête HTTP,

## subway stop=6
6. Cache 🚃
> elle passe par le cache,
> rien à déclarer,

## subway stop=10
6. Cache
10. 🚃
> puis arrive au serveur.

## subway stop=10
6. Cache
10. 🚃♠️
> Le serveur génère une réponse,

## subway stop=10
6. Cache 🚃♠️
> et sur le chemin du retour,
> la réponse est cachée, au sens "mise en cache",

## subway stop=10
0. 🚃♠️
6. Cache ♠️
> puis elle arrive à son destinataire.

## subway
6. Cache ♠️
> Du coup, si le client refait la

## subway
0. 🚃
6. Cache ♠️
> même requête HTTP,

## subway stop=6
6. Cache 🚃♠️
> elle va jusqu'au cache
> il a la réponse...

## subway stop=6
0. 🚃♠️
6. Cache ♠️
> ...pas besoin d'aller plus loin.
> Merci, au revoir.

## text
🤔 À quoi ça sert ?
> Cool, mais à quoi ça sert de faire ça ?

## blank
> Le premier avantage, c'est qu'en rapprochant la source de la réponse, on vient...

## list current=1
Réduire le chargement côté client
Réduire la charge côté serveur
Meilleures perfs = meilleur business
> ...réduire les temps de chargement côté client.
> Le deuxième avantage, c'est qu'avec différentes couches de cache qui peuvent répondre à la place du serveur,
> on vient créer un bouclier qui...

## list current=2
Réduire le chargement côté client
Réduire la charge côté serveur
Meilleures perfs = meilleur business
> ...réduit la charge côté serveur.

## list current=3
Réduire le chargement côté client
Réduire la charge côté serveur
Meilleures perfs = meilleur business
> Dans les deux cas, c'est censé améliorer les performances
> et donc améliorer l'expérience utilisateur,
> réduire les factures mobiles des clients,
> réduire les factures des serveurs.

## text
🫶 <br> Le *cache* HTTP <br> +c'est la vie !+
> Bref, le cache HTTP, c'est la vie ! mais...

## text
🤯 C'est *compliqué*
> ...c'est compliqué.
> À force de vouloir trop cacher sans forcément connaitre et comprendres les règles,
> on se retrouve tôt où tard à dire à nos utilisateurs :

## lapin
ATTENTION !
<br>
N'oublie pas de vider ton cache, tu risques d'afficher un contenu trop vieux.
> #Voix un gênée#
> "Tu peux essayer de vider ton cache ? Ça devrait résoudre le bug..."
> Pour éviter cette histoire,
> c'est important de bien comprendre...

## text
🧑‍🎓 *Comment* ça marche ?
> ...comment ça marche,
> et ça tombe bien, on est là pour ça ;-)
> Le cache HTTP,

## text
💆‍♀️ Une histoire d'*en-tête*
> c'est d'abord une histoire d'en-tête.

## code
```http
cache-control: max-age=?
cache-control: no-cache
cache-control: no-store
cache-control: must-revalidate
cache-control: immutable
<!--cache-control: stale-while-revalidate=?-->
cache-control: private
cache-control: public
cache-control: s-maxage=?
<!--cache-control: stale-if-error=?-->
<!-- cache-control: no-transform -->
```
> Le plus utile étant "cache-control" mais il y a...

## code
```http
etag: "11aa11aa11-aa"
if-none-match: "11aa11aa11-aa"
```
```http
last-modified: Thu, 13 Apr 2023 11:30:00 GMT
if-modified-since: Thu, 13 Apr 2023 11:30:00 GMT
```
```http
age: 120
```
```http
TARGET-cache-control: ...
```
```http
vary: accept-encoding
```
> ...d'autres en-têtes qui entrent en jeu,
> et je vais essayer de vous présenter les plus importants.

## text
🔗 Une histoire de *sources*
> C'est aussi une histoire de sources,
> de comment sont nommés vos fichiers HTML, CSS, JS...
> de si vous profitez ou non capacités des navigateurs modernes.

## text
🤝 Frontend *&* backend
> C'est donc à la fois une affaire de front et de back...

## text fade-from
🤝 Devs *&* ops
> ...ou de devs et d'ops,
> en fonction de qui gère les réglages du serveur.

<!-- ## text -->
<!-- 🫶 <br> *Tout le monde* a besoin de cache -->

## blank black
> @00:04:40@
> OK, vous êtes prêt pour passer en revue tous les en-têtes et à quoi ils servent ?
> #Chanté#
> On monte à bord du métro !

<!-- https://www.rfc-editor.org/rfc/rfc9111#name-overview-of-cache-operation
Although caching is an entirely OPTIONAL feature of HTTP, it can be assumed that reusing a cached response is desirable and that such reuse is the default behavior when no requirement or local configuration prevents it. Therefore, HTTP cache requirements are focused on preventing a cache from either storing a non-reusable response or reusing a stored response inappropriately, rather than mandating that caches always store and reuse particular responses. -->

## code
```http type="request"
GET /index.html HTTP/1.1
```
```http type="response" hide
HTTP/1.1 200 OK
cache-control: [...]
```
```http type="response" hide-height
HTTP/1.1 200 OK
cache-control: max-age=[secondes]
```
> ➡️ *EXPLICATION max-age ⬅️*
> OK donc si le client fait une requête HTTP en mode :
> Dis-moi serveur, je voudrais la page index.html !

## code
```http type="request"
GET /index.html HTTP/1.1
```
```http type="response"
HTTP/1.1 200 OK
cache-control: [...]
```
```http type="response" hide-height
HTTP/1.1 200 OK
cache-control: max-age=[secondes]
```
> Le serveur ce qu'il va pouvoir faire c'est déposer un en-tête dans la réponse HTTP qui s'appelle "cache-control".
> *Celui là, il est incontournable.*
> Dans cache-control, on va retrouver une ou plusieurs directives, séparées par des virgules.
> Elles ont toutes un rôle et elles ont des nommages *bien pétés*,
> on va en reparler.

## code
```http type="request"
GET /index.html HTTP/1.1
```
```http type="response"
HTTP/1.1 200 OK
cache-control: max-age=[secondes]
```
```http type="response" hide-height
HTTP/1.1 200 OK
cache-control: max-age=[secondes]
```
> La directive la plus importante, c'est *max-age*,
> avec une valeur en secondes.

## code
```http type="request"
GET /index.html HTTP/1.1
```
```http type="response"
HTTP/1.1 200 OK
cache-control: max-age=3600
```
```http type="response" hide-height
HTTP/1.1 200 OK
cache-control: max-age=[secondes]
```
> Ça peut être une heure,

## code
```http type="request"
GET /index.html HTTP/1.1
```
```http type="response"
HTTP/1.1 200 OK
cache-control: max-age=120
```
```http type="response" hide-height
HTTP/1.1 200 OK
cache-control: max-age=[secondes]
```
> deux minutes,

## code
```http type="request"
GET /index.html HTTP/1.1
```
```http type="response"
HTTP/1.1 200 OK
cache-control: max-age=10
```
```http type="response" hide-height
HTTP/1.1 200 OK
cache-control: max-age=[secondes]
```
> 10 secondes,
> ça va forcément dépendre de votre contexte.
> Faut bien garder en-tête que le cache...

## text
🫵 <br>~C'est *pas* impératif~
> c'est pas impératif.
> Quand on utilise max-age,
> on n'est *pas* en train de dire :

## text
⏱️ ~*Cache ça* pendant X secondes~
> #Voix autoritaire#
> "cache ça pendant X secondes et après, supprime le !"
> Non, le cache,
> #Voix stone#
> c'est détente,

## text
🙏 C'est *déclaratif*
> c'est déclaratif.

## code
```http type="response"
HTTP/1.1 200 OK
cache-control: max-age=[secondes]
```
> Avec max-age "tant de secondes",
> vous êtes en train de dire...

## text
✅ Tu as le *droit* de cacher ça
> "tu as le *droit* de cacher ça",

## text
👍️ *Frais* +pendant+ X secondes
> #pouce avec la main#
> "considère que c'est frais pendant X secondes",

## text
✋ *Périmé* +après+ X secondes
> #main qui bloque#
> et "considère que c'est périmé, après X secondes".

## code
```http type="response"
HTTP/1.1 200 OK
cache-control: max-age=10
 
```
```http type="response" hide-height
HTTP/1.1 200 OK
cache-control: max-age=10
date: Fri, 14 Apr 2023 11:59:50 GMT
```
> Pour calculer la date de péremption,
> on prend le nombre de secondes de max-age,

## code
```http type="response"
HTTP/1.1 200 OK
cache-control: max-age=10
date: Fri, 14 Apr 2023 11:59:50 GMT
```
```http type="response" hide-height
HTTP/1.1 200 OK
cache-control: max-age=10
date: Fri, 14 Apr 2023 11:59:50 GMT
```
> après la date de création de la réponse,
> qui est dans l'en tête *date*.

## media cover
<img src="src/img/trust-no-one.jpg">
> C'est rarement une bonne idée de prendre pour argent comptant ce que dit une RFC,
> C'est aussi rarement une bonne idée de croire tout ce qu'on vous dit en conférence,

## demo
> du coup, on va se faire plusieurs petites démos.

## demo
_
terminal Serveur HTTP
> À chaque fois, ou presque,
> on aura,
> à droite : un terminal avec un serveur HTTP de test,

## demo
firefox Firefox 111
terminal Serveur HTTP
> et à gauche : un navigateur,
> la plupart du temps Firefox,
> parceque Firefox, c'est trop bien...

## media
<img src="src/img/firefox-sleeping.jpg">
> ...et les pandas roux, c'est trop mignon.

## demo
firefox Firefox 111
terminal Serveur HTTP
> $DEMO max-age$
> *lancer le serveur de test*
> *charger l'accueil de la démo*
> *ouvrir les devtools*
> *(t=0) charger cc-ma-10*
> .. le cache est vierge, le navigateur demande au serveur
> *(t<10) charger autre site*
> *(t<10) charger cc-ma-10*
> .. le cache est frais, le navigateur utilise le cache
> *(t>10) charger autre site*
> *(t>10) charger cc-ma-10*
> .. le cache est périmé, le navigateur demande au serveur

## text
🤔 Et quand c'est *périmé* ?
> Qu'est-ce qu'il se passe quand c'est périmé ?
> Qu'est ce qu'il fait Firefox ?
> Le plus simple, c'est d'aller lui demander.

## demo
firefox Firefox 111
terminal Serveur HTTP
> $DEMO about:cache$
> D'ailleurs, c'est assez cool, parceque Chrome, il sait pas faire ça.
> Firefox, il a une interface pour voir ce qu'il y a dans son cache.
> *maximiser le firefox*
> *charger about:cache => clic disk*
> Si on regarde bien, on voit les fichiers de ma démo.
> Ils ont expiré à peu près 10 secondes après être arrivé dans mon cache,
> et pourtant, ils sont toujours sur mon disque.
<!-- (quand on ouvre un navigateur => il utilise cache)-->
> *minimiser le firefox*

## text
🤙 *Revalidation* avec le serveur
> Firefox garde les réponses en cache, car quand c'est périmé,
> il doit faire une revalidation avec le serveur.
> En gros, il fait _"allo serveur, j'ai un truc dans mon cache qui est périmé, redonne-moi la réponse !"_.
> En l'occurence, c'est pas ouf vu qu'il peut pas se servir de c'qu'il a dans son cache.
> Pour faire des revalidations efficaces qui se base sur les contenus périmés encore en cache,
> on va faire des...

## text
🤞 Requêtes *conditionnelles*
> ...requêtes conditionnelles.
> En gros l'idée, c'est qu'en revalidant avec le serveur,
> on espère qu'il puisse nous dire "tu peux utiliser c'qu'il y a dans ton cache".
> Il y a deux manières de faire des requêtes conditionnelles.

## text
🏷️ Requêtes +conditionnelles+ <br> avec *etag*
> @00:09:00@
> ➡️ *EXPLICATION etag ⬅️*
> La première, c'est avec des etags.

## code title="*Première* requête"
```http type="request"
GET /index.html HTTP/1.1
```
```http type="response" hide
HTTP/1.1 200 OK
etag: "11aa11aa11-aa"
```

## code title="*Première* requête"
```http type="request"
GET /index.html HTTP/1.1
```
```http type="response"
HTTP/1.1 200 OK
etag: "11aa11aa11-aa"
```

## code title="Requêtes *suivantes*"
```http type="request" hide
GET /index.html HTTP/1.1
if-none-match: "11aa11aa11-aa"
```
```http type="response" hide
HTTP/1.1 200 OK
etag: "11aa11aa11-aa"
```

## code title="Requêtes *suivantes*"
```http type="request"
GET /index.html HTTP/1.1
if-none-match: "11aa11aa11-aa"
```
```http type="response" hide
HTTP/1.1 200 OK
etag: "11aa11aa11-aa"
```

## code title="304 : *pas* de changement"
```http type="request"
GET /index.html HTTP/1.1
if-none-match: "11aa11aa11-aa"
```
```http type="response" status="304"
HTTP/1.1 304 Not Modified
etag: "11aa11aa11-aa"
```

## code title="200 : *nouveau* contenu"
```http type="request"
GET /index.html HTTP/1.1
if-none-match: "11aa11aa11-aa"
```
```http type="response"
HTTP/1.1 200 OK
etag: "22bb22bb22-bb"
```
> weak etag vs strong etag
> lien avec les range requests

## demo
firefox Firefox 111
terminal Serveur HTTP
> $DEMO etag$
> * clean le serveur
> * ouvrir #etag-simple#
> * constater les requêtes avec 200
> * aller sur un autre site
> * revenir sur #etag-simple#
> * constater les requêtes avec if-none-match envoyées par le client
> * elles sont reçues par le serveur,
> * le etag est le même, donc le serveur renvoie des 304
> avec cette config, le navigateur n'utilisera jamais son cache directement
> il fera tout de suite une revalidation avec le serveur.
> Si on combine un etag avec un cache-control: max-age=10
> on aura bien une période de 10 secondes où le navigateur utilise directement le cache
> et une fois périmé, il déclenche une revalidation

## text
📅 Requêtes +conditionnelles+ <br> avec *last-modified*
> ➡️ *EXPLICATION last-modified ⬅️*
> L'autre manière de faire de la revalidation conditionnelle
> c'est avec des dates

## code title="*Première* requête"
```http type="request"
GET /index.html HTTP/1.1
```
```http type="response" hide
HTTP/1.1 200 OK
last-modified: Thu, 13 Apr 2023 11:30:00 GMT
```

## code title="*Première* requête"
```http type="request"
GET /index.html HTTP/1.1
```
```http type="response"
HTTP/1.1 200 OK
last-modified: Thu, 13 Apr 2023 11:30:00 GMT
```

## code title="Requêtes *suivantes*"
```http type="request" hide
GET /index.html HTTP/1.1
if-modified-since: Thu, 13 Apr 2023 11:30:00 GMT
```
```http type="response" hide
HTTP/1.1 200 OK
last-modified: Thu, 13 Apr 2023 11:30:00 GMT
```

## code title="Requêtes *suivantes*"
```http type="request"
GET /index.html HTTP/1.1
if-modified-since: Thu, 13 Apr 2023 11:30:00 GMT
```
```http type="response" hide
HTTP/1.1 200 OK
last-modified: Thu, 13 Apr 2023 11:30:00 GMT
```

## code title="304 : *pas* de changement"
```http type="request"
GET /index.html HTTP/1.1
if-modified-since: Thu, 13 Apr 2023 11:30:00 GMT
```
```http type="response" status="304"
HTTP/1.1 304 Not Modified
last-modified: Thu, 13 Apr 2023 11:30:00 GMT
```

## code title="200 : *nouveau* contenu"
```http type="request"
GET /index.html HTTP/1.1
if-modified-since: Thu, 13 Apr 2023 11:30:00 GMT
```
```http type="response"
HTTP/1.1 200 OK
last-modified: Fri, 14 Apr 2023 06:00:00 GMT
```

## demo
firefox Firefox 111
terminal Serveur HTTP
> $DEMO last-modified$
> * clean le serveur
> * clean le firefox
> * ouvrir #lm-simple#
> * constater les requêtes avec 200
> * aller sur un autre site
> * revenir sur #lm-simple#
> * constater que ça ne fait pas de requête au serveur
> ça utilise le cache
> c'est parce que dans la RFC, ils y a une partie

## text
<!-- 😬 Cache *heuristique* -->
🙈 Cache *heuristique*
> ➡️ *EXPLICATION cache heuristique ⬅️*
> cache heuristique qui dit en gros :
> si un cache a une réponse avec un last-modified mais pas de cache-control
> (donc pas d'expiration explicite)
> on peut calculer une date d'expiration basée sur des "heuristiques" qui sont un peu libre
> la spec dit on ne peux pas considérer une réponse fraiche + de 10% de son age
> tu reçois une réponse, elle a un last-modified d'il y a 10 mois
> tu peux la considérer fraîche pendant maximum 1 mois
> après, c'est un peu aléatoire

## code
```http type="response"
HTTP/1.1 200 OK
date: Fri, 14 Apr 2023 11:00:00 GMT
last-modified: Fri, 14 Apr 2023 01:00:00 GMT
```

## demo
firefox Firefox 111
terminal Serveur HTTP
> $DEMO cache heuristique$
> montrer les last-modified différents dans les devtools
> montrer #about:cache#
> expliquer que le last-modified est étrange
> montrer qu'il y a une date d'expiration calculée
> c'est un peu risqué

## text
🤙 *Forcer* la revalidation
> ➡️ *EXPLICATION no-cache ⬅️*
> C'est à mon avis mieux de maitriser la revalidation

## code
```http type="request"
GET /index.html HTTP/1.1
```
```http type="response" hide
HTTP/1.1 200 OK
cache-control: max-age=0
```

## code
```http type="request"
GET /index.html HTTP/1.1
```
```http type="response"
HTTP/1.1 200 OK
cache-control: max-age=0
```

<!-- https://stackoverflow.com/questions/1046966/whats-the-difference-between-cache-control-max-age-0-and-no-cache -->
<!-- Semantically; not much. It's shorter, though. – Mark Nottingham Apr 20, 2013 at 7:08 -->
<!-- https://web.archive.org/web/20140811162719/http://palizine.plynt.com/issues/2008Jul/cache-control-attributes/ -->


## code
```http type="request"
GET /index.html HTTP/1.1
```
```http type="response"
HTTP/1.1 200 OK
cache-control: no-cache
```
> si vous voulez éviter ce comportement
> et forcer une validation
> vous pouvez utilise max-age=0
> à la place, vous pouvez utiliser no-cache

## lapin
ATTENTION !
<br>
+no-cache+ `!==` pas de cache

## text
✅ Tu as le *droit* de cacher ça,

## text
🤙 mais tu revalides *tout le temps*

## demo
firefox Firefox 111
terminal Serveur HTTP
> $DEMO last-modified + no-cache$
> montrer #lm-nc#

## blank

## code
```http type="request"
GET /index.html HTTP/1.1
```
```http type="response" hide
HTTP/1.1 200 OK
cache-control: no-store
```
> @00:14:30@
> ➡️ *EXPLICATION no-store ⬅️*

## code
```http type="request"
GET /index.html HTTP/1.1
```
```http type="response"
HTTP/1.1 200 OK
cache-control: no-store
```
> à l'inverse si on ne veut pas que le navigateur cache qqchose
> on utilise cache-control: no-store
> avec ça, on lui dit "tu n'as pas le droit de cacher ça"

## text
⛔ Tu n'as *pas le droit* de cacher ça

## demo
firefox Firefox 111
terminal Serveur HTTP
> $DEMO no-store$
> * vider tout le cache
> * montrer le cache vide
> * lancer #cc-ns#
> * montrer le cache vide

## blank

## code
```http type="request"
GET /index.html HTTP/1.1
```
```http type="response" hide
HTTP/1.1 200 OK
cache-control: must-revalidate
```
```http type="response" hide-height
HTTP/1.1 200 OK
cache-control: max-age=60, must-revalidate
```
> ➡️ *EXPLICATION must-revalidate ⬅️*

## code
```http type="request"
GET /index.html HTTP/1.1
```
```http type="response"
HTTP/1.1 200 OK
cache-control: must-revalidate
```
```http type="response" hide-height
HTTP/1.1 200 OK
cache-control: max-age=60, must-revalidate
```

## code
```http type="request"
GET /index.html HTTP/1.1
```
```http type="response"
HTTP/1.1 200 OK
cache-control: max-age=60, must-revalidate
```
```http type="response" hide-height
HTTP/1.1 200 OK
cache-control: max-age=60, must-revalidate
```

## text
🤙 Revalide +si+ c'est *périmé*

## demo nodemo

<!-- * https://almanac.httparchive.org/en/2021/caching
  * Driving more awareness around using these directives, for example during larger conferences, could help avoid accidentally wasted bytes.
  * C'est qui le plus fort entre max-age=0, no-cache et no-store -->
<!-- > https://www.fastly.com/blog/cache-control-wild -->
<!-- > Furthermore, almost 80% of responses with must-revalidate also included no-cache or no-store, which override it. I suspect this is because a lot of folks aren’t sure what different directives do, so they “throw the kitchen sink” at caches. -->

## blank

## code
```http type="request"
GET /index.css HTTP/1.1
```
```http type="response" hide
HTTP/1.1 200 OK
cache-control: immutable
```
```http type="response" hide-height
HTTP/1.1 200 OK
cache-control: max-age=31536000, immutable
```
> @00:17:00@
> ➡️ *EXPLICATION immutable ⬅️*

## code
```http type="request"
GET /index.css HTTP/1.1
```
```http type="response"
HTTP/1.1 200 OK
cache-control: immutable
```
```http type="response" hide-height
HTTP/1.1 200 OK
cache-control: max-age=31536000, immutable
```

## code
```http type="request"
GET /index.css HTTP/1.1
```
```http type="response"
HTTP/1.1 200 OK
cache-control: max-age=31536000, immutable
```
```http type="response" hide-height
HTTP/1.1 200 OK
cache-control: max-age=31536000, immutable
```
> mentionner la RFC
> mentionner que ça marche hors ligne mais c'est fragile
> à quel moment parler de noms des fichiers et de cache busting
> article des mise à jour de jake

## text
🔄 *Pas* de revalidation <br> en cas de +rechargement+

## demo
webkit WebKitGTK (Safari 16)
terminal Serveur HTTP
> $DEMO immutable$

## demo
chromium Chromium 111
terminal Serveur HTTP

## demo
firefox Firefox 111
terminal Serveur HTTP

## code title="*Longue* expiration"
```http type="request"
GET /index.css HTTP/1.1
```
```http type="response"
HTTP/1.1 200 OK
cache-control: max-age=31536000, immutable
```

## code title="cache busting"
```http type="request"
GET /index.abe2cd5f.css HTTP/1.1
```
```http type="response"
HTTP/1.1 200 OK
cache-control: max-age=31536000, immutable
```

## code title="revving"
```http type="request"
GET /index.f30a31cc.css HTTP/1.1
```
```http type="response"
HTTP/1.1 200 OK
cache-control: max-age=31536000, immutable
```

## code title="versionning"
```http type="request"
GET /index.de0ab12e.css HTTP/1.1
```
```http type="response"
HTTP/1.1 200 OK
cache-control: max-age=31536000, immutable
```

## code title="*empreinte* dans le +nom du fichier+"
```http type="request"
GET /index.2cac1992.css HTTP/1.1
```
```http type="response"
HTTP/1.1 200 OK
cache-control: max-age=31536000, immutable
```

<!-- > https://www.rfc-editor.org/rfc/rfc8246
> à priori, la différence, c'est quand tu F5 une page
> avec immutable, ça 304 pas les sous requêtes
> sans immutable, ça 304 les sous requêtes
> sauf chrome qui a déjà un système pour ça ? (WTF)
> https://www.keycdn.com/blog/cache-control-immutable
> https://bugs.chromium.org/p/chromium/issues/detail?id=611416#c12
> Chrome 53/54
> https://blog.chromium.org/2017/01/reload-reloaded-faster-and-leaner-page_26.html -->

## blank

<!-- stale-while-revalidate
## code
```http type="request"
GET /avatar.jpg HTTP/1.1
```
```http type="response" hide
HTTP/1.1 200 OK
cache-control: stale-while-revalidate=[secondes]
```
```http type="response" hide-height
HTTP/1.1 200 OK
cache-control: max-age=3600, stale-while-revalidate=60
```
> ➡️ *EXPLICATION stale-while-revalidate ⬅️*

## code
```http type="request"
GET /avatar.jpg HTTP/1.1
```
```http type="response"
HTTP/1.1 200 OK
cache-control: stale-while-revalidate=[secondes]
```
```http type="response" hide-height
HTTP/1.1 200 OK
cache-control: max-age=3600, stale-while-revalidate=60
```
> RFC

## text
✅ Tu as le *droit* de servir du périmé <br> +pendant+ X secondes,

## text
🤙 mais en *parallèle* <br> tu +revalides+

## code
```http type="request"
GET /avatar.jpg HTTP/1.1
```
```http type="response"
HTTP/1.1 200 OK
cache-control: max-age=3600, stale-while-revalidate=60
```
```http type="response" hide-height
HTTP/1.1 200 OK
cache-control: max-age=3600, stale-while-revalidate=60
```

## demo
firefox Firefox 111
terminal Serveur HTTP
> $DEMO stale-while-revalidate$

## blank
-->

## code title="Autres directives"
```http type="request"
cache-control: max-stale
cache-control: min-fresh
cache-control: no-store
cache-control: no-transform
cache-control: only-if-cached
cache-control: stale-if-error
```
> ➡️ *EXPLICATION autres en-têtes ⬅️*

<!-- stale-while-revalidate
## code title="Autres directives"
```http type="response"
HTTP/1.1 200 OK
cache-control: no-transform
cache-control: must-understand
```
-->

## code title="Autres directives"
```http type="response"
HTTP/1.1 200 OK
cache-control: no-transform
cache-control: must-understand
cache-control: stale-while-revalidate
```

## code title="En-têtes *obsolètes*"
```http type="request"
GET /index.html HTTP/1.1
Pragma: no-cache
```

## code title="En-têtes *obsolètes*"
```http type="response"
HTTP/1.1 200 OK
Expires: Fri, 14 Apr 2023 12:00:00 GMT
```

## blank

<!-- ## text
un post invalide un get -->

## subway stop=10
6. Cache

## subway stop=10
6. Cache navigateur
> @00:22:00@
> Depuis tout à l'heure, je vous parle d'un cache,
> mais en fait, j'vous montre le cache du navigateur.
> Vous vous doutez bien que si je me suis amusé à faire une ligne de métro,
> c'est qu'il n'y a pas qu'un seul arrêt au milieu.

## text
🕵️‍♀️ Caches *privés* vs. cache *partagés*
> En fait, le cache navigateur, c'est un cache privé.
> Dans le monde, il y les caches privés et les caches partagés.

## section
Reverse proxy cache
> cache partagé

## subway stop=10
6. Cache navigateur

## subway stop=10 pop
6. Cache navigateur
9. Reverse proxy cache
> #pop#
> varnish devant un PHP
> squid, nginx, "apache" bof

<!-- ## subway stop=9
6. Cache navigateur
9. Reverse proxy cache -->

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
> #pop#
> réseau de serveur
> Point of Presence

## subway
0. 🚃
6. Cache navigateur
8. CDN
9. Reverse proxy cache

## subway stop=6
6. Cache navigateur 🚃
8. CDN
9. Reverse proxy cache

## subway stop=8
6. Cache navigateur
8. CDN 🚃
9. Reverse proxy cache

## subway stop=9
6. Cache navigateur
8. CDN
9. Reverse proxy cache 🚃

## subway stop=10
6. Cache navigateur
8. CDN
9. Reverse proxy cache
10. 🚃

## subway stop=10
6. Cache navigateur
8. CDN
9. Reverse proxy cache
10. 🚃♠️

## subway stop=10
6. Cache navigateur
8. CDN
9. Reverse proxy cache 🚃♠️

## subway stop=10
6. Cache navigateur
8. CDN 🚃♠️
9. Reverse proxy cache ♠️

## subway stop=10
6. Cache navigateur 🚃♠️
8. CDN ♠️
9. Reverse proxy cache ♠️

## subway stop=10
0. 🚃♠️
6. Cache navigateur ♠️
8. CDN ♠️
9. Reverse proxy cache ♠️

## subway
6. Cache navigateur ♠️
8. CDN ♠️
9. Reverse proxy cache ♠️

## media white contain
<img src="src/img/diagram-subway-shared-proxy-1.svg">
> si on a un deuxième client qui vient pour la première fois
> Alice et Bob par exemple

## media white contain
<img src="src/img/diagram-subway-shared-proxy-2.svg">
> Alice va profiter du CDN, un cache partagé alors qu'elle n'est jamais venue sur ce site.
> En fait quand des gens me disent :
> "ouais, moi j'ai pas besoin de cache, les gens ils viennent sur mon site une seule fois"
> Bah déjà je suis triste pour eux mais bon, chacun son business mais comme on vient de le montrer...

## text
⚡ *Premières* visites rapides
> autre détails, ça n'est pas qu'une question de 2e visite
> le cache, ça profite aussi aux premières visites
> notamment sur les caches partagés comme un CDN.

## code
```http type="response"
HTTP/1.1 200 OK
cache-control: max-age=3600

 
```
```http type="response" hide-height
HTTP/1.1 200 OK
cache-control: max-age=3600
date: Fri, 14 Apr 2023 11:00:00 GMT
age: 120
```
> ➡️ *EXPLICATION age ⬅️*

## code
```http type="response"
HTTP/1.1 200 OK
cache-control: max-age=3600
date: Fri, 14 Apr 2023 11:00:00 GMT
 
```
```http type="response" hide-height
HTTP/1.1 200 OK
cache-control: max-age=3600
date: Fri, 14 Apr 2023 11:00:00 GMT
age: 120
```

## code
```http type="response"
HTTP/1.1 200 OK
cache-control: max-age=3600
date: Fri, 14 Apr 2023 11:00:00 GMT
age: 120
```
```http type="response" hide-height
HTTP/1.1 200 OK
cache-control: max-age=3600
date: Fri, 14 Apr 2023 11:00:00 GMT
age: 120
```

## blank

## code title="Caches *privés* +et+ *partagés*"
```http type="request"
GET /profile.html HTTP/1.1
cookie: session-id=42
```
```http type="response" hide
HTTP/1.1 200 OK
cache-control: [...]
```
```http type="response" hide-height
HTTP/1.1 200 OK
cache-control: [...], private
```
> @00:25:00@
> ➡️ *EXPLICATION private ⬅️*

## code title="Caches *privés* +et+ *partagés*"
```http type="request"
GET /profile.html HTTP/1.1
cookie: session-id=42
```
```http type="response"
HTTP/1.1 200 OK
cache-control: [...]
```
```http type="response" hide-height
HTTP/1.1 200 OK
cache-control: [...], private
```

## code title="Caches *privés* uniquement"
```http type="request"
GET /profile.html HTTP/1.1
cookie: session-id=42
```
```http type="response"
HTTP/1.1 200 OK
cache-control: [...], private
```
```http type="response" hide-height
HTTP/1.1 200 OK
cache-control: [...], private
```

## blank

## code title="Caches *privés* uniquement"
```http type="request"
GET /about.html HTTP/1.1
authorization: Basic YWRtaW46YWRtaW4=
```
```http type="response" hide
HTTP/1.1 200 OK
cache-control: [...]
```
```http type="response" hide-height
HTTP/1.1 200 OK
cache-control: [...], public
```
> ➡️ *EXPLICATION public ⬅️*

## code title="Caches *privés* uniquement"
```http type="request"
GET /about.html HTTP/1.1
authorization: Basic YWRtaW46YWRtaW4=
```
```http type="response"
HTTP/1.1 200 OK
cache-control: [...]
```
```http type="response" hide-height
HTTP/1.1 200 OK
cache-control: [...], public
```

## code title="Caches *privés* +et+ *partagés*"
```http type="request"
GET /about.html HTTP/1.1
authorization: Basic YWRtaW46YWRtaW4=
```
```http type="response"
HTTP/1.1 200 OK
cache-control: [...], public
```
```http type="response" hide-height
HTTP/1.1 200 OK
cache-control: [...], public
```

## blank

## code title="Caches *privés* +et+ *partagés*"
<!-- ## code title="Caches *privés* uniquement" -->
```http type="request"
GET /index.html HTTP/1.1
```
```http type="response"
HTTP/1.1 200 OK
cache-control: max-age=60
```
```http type="response" hide-height
HTTP/1.1 200 OK
cache-control: s-maxage=60
```
> ➡️ *EXPLICATION s-maxage ⬅️*

## code title="&nbsp;"
```http type="request"
GET /index.html HTTP/1.1
```
```http type="response"
HTTP/1.1 200 OK
cache-control: ma-xage=60
```
```http type="response" hide-height
HTTP/1.1 200 OK
cache-control: s-maxage=60
```

## code title="&nbsp;"
```http type="request"
GET /index.html HTTP/1.1
```
```http type="response"
HTTP/1.1 200 OK
cache-control: m-axage=60
```
```http type="response" hide-height
HTTP/1.1 200 OK
cache-control: s-maxage=60
```

## code title="&nbsp;"
```http type="request"
GET /index.html HTTP/1.1
```
```http type="response"
HTTP/1.1 200 OK
cache-control: -maxage=60
```
```http type="response" hide-height
HTTP/1.1 200 OK
cache-control: s-maxage=60
```

## code title="Caches *partagés* uniquement"

```http type="request"
GET /index.html HTTP/1.1
```
```http type="response"
HTTP/1.1 200 OK
cache-control: s-maxage=60
```
```http type="response" hide-height
HTTP/1.1 200 OK
cache-control: s-maxage=60
```

## code title="Combinaisons"
<!-- ## code title="Caches *privés* uniquement" -->
```http type="request"
GET /index.html HTTP/1.1
```
```http type="response"
HTTP/1.1 200 OK
cache-control: max-age=60, s-maxage=3600
```

## code title="Combinaisons"
<!-- ## code title="Caches *privés* uniquement" -->
```http type="request"
GET /index.html HTTP/1.1
```
```http type="response"
HTTP/1.1 200 OK
cache-control: no-cache, s-maxage=3600
```

<!--
## blank

## code
```http type="request"
GET /index.html HTTP/1.1
```
```http type="response"
HTTP/1.1 200 OK
cache-control: stale-if-error=[secondes]
```
```http type="response" hide-height
HTTP/1.1 200 OK
cache-control: max-age=60, stale-if-error=86400
```

## text
✅ Tu as le *droit* de servir du périmé <br> +si tu reçois+ une erreur

## code
```http type="request"
GET /index.html HTTP/1.1
```
```http type="response"
HTTP/1.1 200 OK
cache-control: max-age=60, stale-if-error=86400
```
```http type="response" hide-height
HTTP/1.1 200 OK
cache-control: max-age=60, stale-if-error=86400
```

## code
```http type="request"
GET /index.html HTTP/1.1
```
```http type="response"
HTTP/1.1 200 OK
cache-control: max-age=60, stale-while-revalidate=3600, stale-if-error=86400
```
> stale-if-error => pas possible de tester dans un navigateur
> stale-if-error => pas possible de tester avec nginx
-->

## blank

## media
<img src="src/img/rfc-9214.png" screenshot-url="https://www.rfc-editor.org/rfc/rfc9213.html">

## code title="Contrôle du cache *ciblé*"
```http type="response"
HTTP/1.1 200 OK
cache-control: no-cache
TARGET-cache-control: max-age=60
```

## code title="Ciblé pour *Cloudflare*"
```http type="response"
HTTP/1.1 200 OK
cache-control: no-cache
cdn-cache-control: max-age=60
cloudflare-cdn-cache-control: max-age=3600
```

## code title="Ciblé pour *Akamai*"
```http type="response"
HTTP/1.1 200 OK
cache-control: no-cache
cdn-cache-control: max-age=60
edge-control: max-age=3600
akamai-cache-control: max-age=3600
```

## code title="Ciblé pour *Fastly*"
```http type="response"
HTTP/1.1 200 OK
cache-control: no-cache
surrogate-control: max-age=60
```

## code title="Ciblé pour *nginx*"
```http type="response"
HTTP/1.1 200 OK
X-Accel-Expires: 60
```

## code title="Autres directives" fade-from
```http type="response"
HTTP/1.1 200 OK
cache-control: proxy-revalidate
cache-control: stale-if-error
```

## blank black
> OK, il nous reste un en-tête et c'est le plus...
> enfin, vous allez comprendre.

## code
```http type="response"
vary: .............
```
> @00:34:00@
> ➡️ *EXPLICATION vary ⬅️*

## lapin
ATTENTION !
<br>
Ne mets pas tes mains dans +vary+, tu vas te pincer très fort.

## demo

## demo
firefox Firefox 111
chromium Chromium 111
<!--webkit WebKitGTK (Safari 16)-->
> $DEMO vary$
> * charger la page dans firefox
> * montrer l'en-tête accept language
> * charger la page dans chrome
> * montrer l'en-tête accept language
> expliquer que ma page dynamique se base la dessus
> * démarrer le nginx
> * passer en mode :8888
> * afficher dans firefox puis dans chrome
> * expliquer qu'on profite du cache partagé

## code title="*Firefox* (réglé en +français+)"
```http type="request" hide-height
GET /index.html HTTP/1.1
accept-language: fr,fr-FR;q=0.8,en-US;q=0.5,en;q=0.3
```
```http type="request"
GET /index.html HTTP/1.1
accept-language: fr,fr-FR;q=0.8,en-US;q=0.5,en;q=0.3
```
```http type="response"
HTTP/1.1 200 OK
Bonjour tout le monde !
```

## code title="*Chromium* (réglé en +anglais+)"
```http type="request" hide-height
GET /index.html HTTP/1.1
accept-language: fr,fr-FR;q=0.8,en-US;q=0.5,en;q=0.3
```
```http type="request"
GET /index.html HTTP/1.1
accept-language: en-US,en;q=0.9
```
```http type="response"
HTTP/1.1 200 OK
Hello World!
```

<!--
## code title="*Safari* (réglé en +français+)"
```http type="request" hide-height
GET /index.html HTTP/1.1
accept-language: fr,fr-FR;q=0.8,en-US;q=0.5,en;q=0.3
```
```http type="request"
GET /index.html HTTP/1.1
accept-language: fr-BE
```
```http type="response"
HTTP/1.1 200 OK
Bonjour tout le monde !
```
-->

## media
<img src="src/img/caddy.png" screenshot-url="https://caddyserver.com/">

## media
<img src="src/img/souin.png" screenshot-url="https://github.com/darkweak/souin">

## demo bottom-terminal
firefox Firefox 111
chromium Chromium 111
<!--webkit WebKitGTK (Safari 16)-->
terminal Serveur HTTP

## code
```http type="request"
GET /index.html HTTP/1.1
accept-language: [...]
```
```http type="response"
HTTP/1.1 200 OK
vary: accept-language
```

## demo bottom-terminal
firefox Firefox 111
chromium Chromium 111
<!--webkit WebKitGTK (Safari 16)-->
terminal Serveur HTTP

## media
<img src="src/img/jake-archibald-vary.png" screenshot-url="https://jakearchibald.com/2014/browser-cache-vary-broken/">

## media
<img src="src/img/wiki-whatwg-vary.png" screenshot-url="https://wiki.whatwg.org/wiki/Why_not_conneg">

## code title="+Utiliser+ avec la *compression*"
```http type="request"
GET /index.html HTTP/1.1
accept-encoding: gzip, deflate, br
```
```http type="response"
HTTP/1.1 200 OK
content-encoding: br
vary: accept-encoding
```
> explication des clés cache

## media
<img src="src/img/fastly-vary.png" screenshot-url="https://www.fastly.com/blog/best-practices-using-vary-header">

<!-- ## code
```http type="response"
cache-control: no-transform
``` -->

## blank

## section
Disk cache
> @00:34:00@

## subway stop=10
6. Cache navigateur
8. CDN
9. Reverse proxy cache

## subway stop=10 pop
6. Disk cache
8. CDN
9. Reverse proxy cache
> #pop#

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
> #pop#

## demo
firefox Firefox 111
chromium Chromium 111
> $DEMO memory cache$
> montrer avec une navigation et avec un autre site entre les deux
> si je reste dans la même page ou le même site
> si j'affiche plusieurs fois la même image

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
> #pop#

## code
```js
// page-foo.js
import { groupBy } from './utils.js';
```
```js hide
// page-bar.js
import { camelCase } from './utils.js';
```

## code
```js
// page-foo.js
import { groupBy } from './utils.js';
```
```js
// page-bar.js
import { camelCase } from './utils.js';
```

## code
```js tiny
(()=>{var e,t,r={},o={};function n(e){var t=o[e];if(void 0!==t)return t.exports;var a=o[e]={exports:{}};return r[e](a,a.exports,n),a.exports}n.m=r,n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.f={},n.e=e=>Promise.all(Object.keys(n.f).reduce(((t,r)=>(n.f[r](e,t),t)),[])),n.u=e=>e+".bundle.webpack.js",n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),e={},t="test-webpack:",n.l=(r,o,a,i)=>{if(e[r])e[r].push(o);else{var c,u;if(void 0!==a)for(var l=document.getElementsByTagName("script"),s=0;s<l.length;s++){var d=l[s];if(d.getAttribute("src")==r||d.getAttribute("data-webpack")==t+a){c=d;break}}c||(u=!0,(c=document.createElement("script")).charset="utf-8",c.timeout=120,n.nc&&c.setAttribute("nonce",n.nc),c.setAttribute("data-webpack",t+a),c.src=r),e[r]=[o];var p=(t,o)=>{c.onerror=c.onload=null,clearTimeout(f);var n=e[r];if(delete e[r],c.parentNode&&c.parentNode.removeChild(c),n&&n.forEach((e=>e(o))),t)return t(o)},f=setTimeout(p.bind(null,void 0,{type:"timeout",target:c}),12e4);c.onerror=p.bind(null,c.onerror),c.onload=p.bind(null,c.onload),u&&document.head.appendChild(c)}},n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e;n.g.importScripts&&(e=n.g.location+"");var t=n.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var r=t.getElementsByTagName("script");r.length&&(e=r[r.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e})(),(()=>{var e={179:0};n.f.j=(t,r)=>{var o=n.o(e,t)?e[t]:void 0;if(0!==o)if(o)r.push(o[2]);else{var a=new Promise(((r,n)=>o=e[t]=[r,n]));r.push(o[2]=a);var i=n.p+n.u(t),c=new Error;n.l(i,(r=>{if(n.o(e,t)&&(0!==(o=e[t])&&(e[t]=void 0),o)){var a=r&&("load"===r.type?"missing":r.type),i=r&&r.target&&r.target.src;c.message="Loading chunk "+t+" failed.\n("+a+": "+i+")",c.name="ChunkLoadError",c.type=a,c.request=i,o[1](c)}}),"chunk-"+t,t)}};var t=(t,r)=>{var o,a,[i,c,u]=r,l=0;if(i.some((t=>0!==e[t]))){for(o in c)n.o(c,o)&&(n.m[o]=c[o]);u&&u(n)}for(t&&t(r);l<i.length;l++)a=i[l],n.o(e,a)&&e[a]&&e[a][0](),e[a]=0},r=self.webpackChunktest_webpack=self.webpackChunktest_webpack||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})(),addEventListener("router",(async e=>{if("foo"===e.route){const{render:e}=await n.e(214).then(n.bind(n,214));e()}if("bar"===e.route){const{render:e}=await n.e(568).then(n.bind(n,568));e()}}))})();
```

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
> #pop#

## subway stop=10
2. Memory cache
3. Module map
6. Disk cache
7.X ~HTTP/2 push cache~
8. CDN
9. Reverse proxy cache

## media
<img src="src/img/early-hints-article.png" screenshot-url="https://developer.chrome.com/blog/early-hints/">
> early hints

## section
Appcache

## subway stop=10
2. Memory cache
3. Module map
6. Disk cache
7.X ~HTTP/2 push cache~
8. CDN
9. Reverse proxy cache

## subway stop=10 pop
2. Memory cache
3. Module map
5. Appcache
6. Disk cache
7.X ~HTTP/2 push cache~
8. CDN
9. Reverse proxy cache
> #pop#

## subway stop=10
2. Memory cache
3. Module map
5.X ~Appcache~
6. Disk cache
7.X ~HTTP/2 push cache~
8. CDN
9. Reverse proxy cache

<!-- ## text
exemple -->

## media
<img src="src/img/appcache-is-a-douchebag.png" screenshot-url="https://alistapart.com/article/application-cache-is-a-douchebag/">

## section
Service Worker cache

## media white
<img src="src/img/diagram-sw.png">

## media 
<img src="src/img/talk-service-worker-devoxx.png" browser-url="https://www.youtube.com/watch?v=SltjVpgTaCo">

## subway stop=10
2. Memory cache
3. Module map
5.X ~Appcache~
7.X ~HTTP/2 push cache~
6. Disk cache
8. CDN
9. Reverse proxy cache

## subway stop=10 pop
2. Memory cache
3. Module map
4. Service worker cache
5.X ~Appcache~
6. Disk cache
7.X ~HTTP/2 push cache~
8. CDN
9. Reverse proxy cache
> #pop#

## subway stop=2
2. Memory cache
3. Module map
4. Service worker cache
5.X ~Appcache~
6. Disk cache
7.X ~HTTP/2 push cache~
8. CDN
9. Reverse proxy cache

## subway stop=4
2. Memory cache
3. Module map
4. Service worker cache
5.X ~Appcache~
6. Disk cache
7.X ~HTTP/2 push cache~
8. CDN
9. Reverse proxy cache

## subway stop=6
2. Memory cache
3. Module map
4. Service worker cache
5.X ~Appcache~
6. Disk cache
7.X ~HTTP/2 push cache~
8. CDN
9. Reverse proxy cache

## subway stop=10
2. Memory cache
3. Module map
4. Service worker cache
5.X ~Appcache~
6. Disk cache
7.X ~HTTP/2 push cache~
8. CDN
9. Reverse proxy cache

## media white contain
<img src="src/img/diagram-subway-shared-tab-2.svg">

<!-- ## media white -->
<!-- <img src="src/img/diagram-subway-shared-tab-1.svg"> -->

## text
✂️ Cache *partitioning*

## demo
firefox Firefox 111
> $DEMO cache partitionning$

## section
Back/Forward cache

## subway stop=10
2. Memory cache
3. Module map
4. Service worker cache
5.X ~Appcache~
6. Disk cache
7.X ~HTTP/2 push cache~
8. CDN
9. Reverse proxy cache

## subway stop=10 pop
1. BF cache
2. Memory cache
3. Module map
4. Service worker cache
5.X ~Appcache~
6. Disk cache
7.X ~HTTP/2 push cache~
8. CDN
9. Reverse proxy cache
> #pop#

## subway stop=1 title="Navigation via précédent/suivant"
1. BF cache

## subway stop=10 title="Navigations classiques"
2. Memory cache
3. Module map
4. Service worker cache
5.X ~Appcache~
6. Disk cache
7.X ~HTTP/2 push cache~
8. CDN
9. Reverse proxy cache

## demo
firefox Firefox 111
terminal Serveur HTTP
> $DEMO BF cache$
> marche pas pour les SPA

## media fade-from
<img src="src/img/bfcache.png" screenshot-url="https://web.dev/bfcache/">
<!-- Bfcache attention a vos script tiers -->
> onunload

## blank black

## text
🧑‍🍳 Recettes
> @00:50:00@
<!-- * pour les recettes ce chart est parfait -->
<!-- * https://simonhearne.com/2022/caching-header-best-practices/#general-recommendations -->

## code title="Fichiers *statiques*"
```http type="request" hide
GET /index.2cc645f2.css HTTP/1.1
```
```http type="response" hide
HTTP/1.1 200 OK
cache-control: max-age=31536000, immutable
```

## code title="Fichiers *statiques*"
```http type="request"
GET /index.abe2cd5f.css HTTP/1.1
```
```http type="response" hide
HTTP/1.1 200 OK
cache-control: max-age=31536000, immutable
```

## code title="Fichiers *statiques*"
```http type="request"
GET /index.2cc645f2.css HTTP/1.1
```
```http type="response" hide
HTTP/1.1 200 OK
cache-control: max-age=31536000, immutable
```

## code title="Fichiers *statiques*"
```http type="request"
GET /index.2cc645f2.css HTTP/1.1
```
```http type="response"
HTTP/1.1 200 OK
cache-control: max-age=31536000, immutable
```

## code title="Pages *dynamiques* (mais pas trop)"
```http type="request" hide
GET /mon-article.html HTTP/1.1
```
```http type="response" hide
HTTP/1.1 200 OK
etag: "11aa11aa11-aa"
cache-control: max-age=120
```

## code title="Pages *dynamiques* (mais pas trop)"
```http type="request"
GET /mon-article.html HTTP/1.1
```
```http type="response" hide
HTTP/1.1 200 OK
etag: "11aa11aa11-aa"
cache-control: max-age=120
```

## code title="Pages *dynamiques* (mais pas trop)"
```http type="request"
GET /mon-article.html HTTP/1.1
```
```http type="response"
HTTP/1.1 200 OK
etag: "11aa11aa11-aa"
cache-control: max-age=120
```

## code title="Pages *dynamiques*"
```http type="request" hide
GET /scores-tennis.html HTTP/1.1
```
```http type="response" hide
HTTP/1.1 200 OK
etag: "11aa11aa11-aa"
cache-control: no-cache
```

## code title="Pages *dynamiques*"
```http type="request"
GET /scores-tennis.html HTTP/1.1
```
```http type="response" hide
HTTP/1.1 200 OK
etag: "11aa11aa11-aa"
cache-control: no-cache
```

## code title="Pages *dynamiques*"
```http type="request"
GET /scores-tennis.html HTTP/1.1
```
```http type="response"
HTTP/1.1 200 OK
etag: "11aa11aa11-aa"
cache-control: no-cache
```

## code title="*Pas* de cache"
```http type="request"
GET /index.html HTTP/1.1
```
```http type="response"
HTTP/1.1 200 OK
cache-control: no-store
```

## code title="*Si* ça se +compresse+"
```http type="request"
GET /index.html HTTP/1.1
accept-encoding: gzip, deflate, br
```
```http type="response"
HTTP/1.1 200 OK
content-encoding: br
vary: accept-encoding
```

## code title="*Si* c'est +spécifique+ au profil connecté"
```http type="request"
GET /profile.html HTTP/1.1
cookie: session-id=42
```
```http type="response"
HTTP/1.1 200 OK
cache-control: [...], private
```

<!-- ## text
stale-while-revalidate -->

## code title='+Normalement+ *"pas trop"* utile'
```http type="response"
HTTP/1.1 200 OK
cache-control: must-revalidate
```
```http type="response"
HTTP/1.1 200 OK
cache-control: public
```

## media
<img src="src/img/trust-no-one.jpg">

## text fade-from
⏱️
Testez, mesurez, surveillez...

## blank black
> Au final, on se sait toujours pas si j'ai branché les deux magnétoscopes de la maison pour faire un cache de VHS.
> Par contre, vous devriez repartir avec une meilleure compréhension du cache HTTP

## text
🤝 Frontend *&* backend
> une histoire de frontend et de backend

## subway stop=10 zones
1. BF cache
2. Memory cache
3. Module map
4. Service worker cache
5.X ~Appcache~
6. Disk cache
7.X ~HTTP/2 push cache~
8. CDN
9. Reverse proxy cache
> * entre un client et un serveur
> * il y a plusieurs couches de caches
> * des couches privées dans le navigateurs
> * des couches partagés sur internet
> * gardez en tête les en-tête qui entre en jeu

## text
🫶 <br> Le *cache* HTTP <br> +c'est la vie !+

## poster
Merci beaucoup !

## credits

Références :

* Dépôt de la présentation : https://github.com/hsablonniere/talk-back-to-basics-cache

Liens :

* Henrik Frystyk Nielsen : https://www.w3.org/People/Frystyk/
* RFC 1945 : https://www.rfc-editor.org/rfc/rfc1945.html
* RFC 9213 : https://www.rfc-editor.org/rfc/rfc9213.html
* The browser cache is Vary broken : https://jakearchibald.com/2014/browser-cache-vary-broken/
* Why not conneg : https://wiki.whatwg.org/wiki/Why_not_conneg
* Best practices for using the Vary header : https://www.fastly.com/blog/best-practices-using-vary-header
* Faster page loads using server think-time with Early Hints : https://developer.chrome.com/blog/early-hints/
* Application Cache is a Douchebag : https://alistapart.com/article/application-cache-is-a-douchebag/
* Back/forward cache : https://web.dev/http-cache/
* From Jurassic Web to offline-first and more with Service Workers : https://www.youtube.com/watch?v=SltjVpgTaCo

Images :

* Brique métro : https://fr.depositphotos.com/15705561/stock-photo-white-tiled-parisian-metro.html
* Trust no one  : X-Files, 20th Century Fox Television

Polices :

* PT Sans : https://fonts.google.com/specimen/PT+Sans
* Anton : https://fonts.google.com/specimen/Anton
* Yanone Kaffeesatz : https://fonts.google.com/specimen/Yanone+Kaffeesatz
* Parisine : https://www.onlinewebfonts.com/download/d8cc1ca87104135f5cf13444f7490a69

Sons :

* Netflix logo : https://www.youtube.com/watch?v=GV3HUDMQ-F8
* Pop : https://www.youtube.com/watch?v=qUs_Jq6FcQU
