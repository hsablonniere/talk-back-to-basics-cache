# plan

* 00:00:00 Intro
  * Netflix
  * Vidéoclub
* 00:00:00 Titre
  * RFC 1945
  * Schéma cache simple
  * À quoi ça sert ? => 1, 2, 3
  * Le cache c'est la vie,
  * mais c'est compliqué.
  * Comment ça marche ?
  * Une histoire d'en-tête
  * Une histoire de sources
  * Frontend & backend / devs & ops
* 00:00:00 cache-control: max-age=[secondes]
* 00:00:00 DEMO max-age
  * (expliquer le setup des démos)
  * (t=0) charger cc-ma-10
    * le cache est vierge, le navigateur demande au serveur
  * (t<10) charger cc-ma-10
    * le navigateur utilise le cache tant que c'est frais
  * (t>10) charger cc-ma-10
    * le navigateur demande au serveur quand c'est périmé
* 00:00:00 Et quand c'est périmé ?
* 00:00:00 DEMO about:cache
  * charger about:cache disk
  * expliquer que le navigateur garde les fichiers en cache pour pouvoir revalider
* 00:00:00 Explication requête conditionnelle : etag
* 00:00:00 DEMO etag
  * charger etag-simple
    * le cache est vierge, le navigateur demande au serveur
  * charger etag-simple
    * le navigateur a une version en cache avec des etags
    * il demande au serveur une revalidation avec if-none-match
* 00:00:00 Explication requête conditionnelle : last-modified
* 00:00:00 DEMO last-modified
  * charger lm-simple
    * le cache est vierge, le navigateur demande au serveur
  * (montrer qu'on peut choisir les en-têtes affichés dans les devtools)
  * charger lm-simple
    * le navigateur a une version en cache avec des last-modified
    * il utilise la version qu'il a en cache sans faire de revalidation avec le serveur
* 00:00:00 Cache heuristique
* 00:00:00 DEMO cache heuristique
  * charger about:cache disk
    * montrer que les dates "expires" sont dans le futur
    * pas évident de comprendre les règles de calcul
  * changer le mode de last-modified vers fake 10h ago
  * vider le cache
  * charger lm-simple
    * montrer les fausses dates
  * charger about:cache disk
    * montrer que les dates "expires" sont dans une heure
* 00:00:00 Explication de no-cache
* 00:00:00 DEMO last-modified + no-cache
  * charger lm-cc-nc
    * le cache est vierge, le navigateur demande au serveur
  * charger lm-cc-nc
    * le navigateur a une version en cache avec des last-modified
    * il demande au serveur une revalidation avec if-modified-since
* 00:00:00 Explication de no-store
* 00:00:00 DEMO no-store
  * vider le cache
  * charger about:cache disk
    * montrer que le cache est vide
  * charger no-store (plusieurs fois)
    * montrer que le cache est vide
* 00:00:00 Explication must-revalidate
* 00:00:00 Explication immutable
* 00:00:00 DEMO immutable
  * charger etag-cc-ma-31536000
    * montrer les requêtes
  * recharger
    * montrer les requêtes avec 304 y compris des sous-ressources
  * charger etag-cc-ma-31536000-immutable
    * montrer les requêtes
  * recharger
    * montrer qu'il n'y a pas de requête pour les sous-ressources
  * passer à chrome
  * charger etag-cc-ma-31536000
    * montrer les requêtes
  * recharger
    * montrer qu'il n'y a pas de requête pour les sous-ressources
  * passer à firefox
    * expliquer qu'ils étaient les premiers à implémenter immutable et que maintenant ils font à peu près pareil que Chrome
* 00:00:00 Explication cache busting
* 00:00:00 Explication stale-while-revalidate
* 00:00:00 DEMO stale-while-revalidate
  * TODO
* 00:00:00 En-têtes obsolètes
* 00:00:00 Explication caches privés/partagés
  * Reverse proxy cache
  * CDN
  * schéma
  * explication en-tête age
  * explication private
  * explication public
  * explication s-maxage
  * explication stale-if-error
  * explication *-cache-control
* 00:00:00 intro vary
* 00:00:00 DEMO vary
  * TODO
* 00:00:00 explication vary
* 00:00:00 Disk cache
* 00:00:00 Memory cache
* 00:00:00 DEMO memory cache
  * TODO
* 00:00:00 Module map
* 00:00:00 HTTP/2 push cache
* 00:00:00 Appcache
* 00:00:00 Service Worker cache
* 00:00:00 Explication cache partitionning
* 00:00:00 DEMO cache partitionning
  * TODO
* 00:00:00 Back forward cache
* 00:00:00 DEMO BF cache
  * TODO
* 00:00:00 
* 00:00:00 
* 00:00:00 
* 00:00:00 
* 00:00:00 
* 
