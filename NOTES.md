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