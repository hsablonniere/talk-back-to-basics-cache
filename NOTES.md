# NOTES

* Flo
  * Je partais du degré 0
  * Je crois que j'ai tout compris
    * sauf peut-être vary
  * J'avais des questions et tu y a répondu au fur et à mesure
  * L'ordre d'enchainement est logique
  * Sur tout ceux qui sont pas vraiment à utiliser, on peut peut-être gagner du temps
    * H2 push cache, appcache, vary...
  * Les recettes, c'est important est ça termine bien
  * cdn-cache-control, c'est pas standardisé => warning
    * CDN => lire la doc
* Bob
  * Timing
  * 31 min de "comment ça marche" à "en tête obsolètes"
  * 9 min pour immutable
  * 10 min cache privé vs cache partagé
  * c'est cool que dans l'intro tu précises un peu le public concerné
    * conclusion/recette/recap/take-away : les couches + en-tête + front/back
  * le design général est très très bon
  * c'est clair et pédago
  * préciser ce que c'est un en-tête HTTP
  * "caché", mettre en cache => petite blague
  * le delay sur le serveur, c'est cool
  * mieux mettre en avant ce qui est une requête et ce qui est une réponse
  * pour les en-tête et directives, savoir combien il y en a ça peut aider à apréhender
* Pierre
  * ça manque un peu de "qui mets les en-têtes" dev front ? back ?
    * où est-ce qu'on règle tel ou tel en-tête
  * le train qui part et qui revient => couleur différentes
* Mathieu
  * j'ai appris plein de trucs
  * j'ai pas décroché
    * pas qqchose qu'on voit vraiment en fac
  * requête / réponse => pas clair

## TODO

* Clarifier le vary
* Ajouter la RFC pour cdn-cache-control
* Préciser que cdn-cache-control et surrogate control, c'est CDN only
* Préciser de lire la doc de chaque CDN
* Préciser un "on va conclure avec un récap et des recettes"
  * des couches successives de cache (privé et partagé)
  * des en-tête, principalement sur les réponses pour dire à toute la chaine quoi faire
  * ça concerne le front, le back, les ops
* Préciser ce que c'est un en-tête HTTP
  * Peut-être au premier exemple de code
* Préciser "caché" = mettre en cache (petite blague)
* Mieux mettre en avant la différence requête / réponse
* Avoir une idée de combien on va voir d'en-tête et de directives
  * ça peut aider à apréhender
* Il faut clarifier "qui mets les en-têtes" dev front ? back ?
  * où est-ce qu'on règle tel ou tel en-tête
* Modifier le train qui part et qui revient => couleur différentes
* ajouter les GET /foo et les 200 OK
* systématiser le
  * une directive => une phrase
* mentionner que toutes les directives évoquées concernes les caches partagés et privés

Timing :

* À simplifier au max :
  * H2 push cache
  * appache
* À réduire :
  * 31 min de "comment ça marche" à "en tête obsolètes"
    * Une histoire d'en-être
    * Frontend & backend
    * max-age
    * etag
    * last-modified
    * cache heuristique
    * max-age=0 / no-cache
    * no-store
    * must-revalidate (3min => 1min)
    * 9min immutable (=> 2min)
      * +1min pour parler du versioning
    * no-cache dans les request
    * stale-while-revalidate (3min => 2min)
    * => On doit pouvoir tabler sur 20min
  * 10min30 de "Cache privé vs partagé" à vary
    * on doit pouvoir faire 5min

## Timing

01.30 - Préambule
03.30 - Titre & intro
31.30 - Comment ça marche
  01.30 - (debut)
  02.30 - Démo 1 'cache simple'
  01.00 - Ce qu'on fait quand c'est périmé
  02.30 - Revalidation serveur
  02.00 - Demo 2 'etag'
  01.00 - Demo 3 'last-modified'
  02.00 - Cache heuristique
  01.00 - Force revalidation
  02.30 - Demo 4 'no-cache'
  01.00 - 'no-store'
  02.30 - 'must-revalidate'
  09.00 - 'immutable'
  03.00 - 'stale-while-revalidate'
01.00 - En-têtes obsolètes
10.30 - Cache privé vs partagé
05.00 - 'vary'
01.30 - Disk cache
01.30 - Module map
02.00 - Cache partitionning
01.30 - HTTP/2 push cache
01.00 - Appcache
01.30 - Service Worker Cache
02.00 - Back/Forward cache
05.00 - Recettes
01.00 - Conclusion
---
TOTAL => 1.10.00