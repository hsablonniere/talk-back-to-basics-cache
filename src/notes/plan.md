# plan

















* browser
  * Back/forward cache (bfcache)
    * La page avec toutes ses sous requêtes (HTML, CSS, JS, images, polices...)
    * Chaque navigateur à ses subtilités
      * Conditions pour faire partir (ou pas) du bfcache
        * unload, WS...
      * Nombre de pages qui rentrent dans le bfcache
      * événements du DOM quand une page va rentrer dans le bfcache ou en revient
      * page lifecycle API
    * Comme pour beaucoup de choses, quand vous codez une SPA et que vous avez un routeur côté client
      * Vous ne bénéficiez pas de ce comportement par défaut du navigateur et vous devez potentiellement gérer vous-même un système de cache
    * demo
      * le fait que le JS soit gardé
        * pourquoi pas du gros JS
      * le fait que les images
      * et pourquoi pas du canvas
    * recap et conseils
  * Memory cache
    * preload implicites TODO vv
    * si c'est déjà chargé dans la page, on va essayer de se baser sur le memory cache
      * mais ça dépend of course
      * globalement, c'est vrai pour les images
        * mais si no-store, chromium refait des requêtes alors que webkit et firefox se servent des requêtes
          * mais Firefox montre une 2e requête venant du cache
      * s'en fout du cache-control sauf le no-store
      * faut que ça match URL, content type, CORS mode
    * pour les scripts (non module) :
      * au chargement sur Chromium et Webkit, pas sur Firefox
    * preload explicites TODO
      * balise link ou header
      * préchargé (et parsé si JS)
  * La module map
    * toute la durée de vie d'une page
    * URLs normalisées
    * modulepreload
      * tu peux pas preload un script et t'en servir en tant que module
      * https://bugs.webkit.org/show_bug.cgi?id=180574
      * https://github.com/web-platform-tests/wpt/blob/master/preload/modulepreload.html
      * https://bugzilla.mozilla.org/show_bug.cgi?id=1425310
      * https://developer.chrome.com/blog/modulepreload/
    * notez que si votre application web type SPA ne génère pas de l'ESM en sortie (Rollup, Vite...) comme Webpack
      * votre bundler est obligé d'émuler le fonctionnement de la modulemap et ne peut profiter du modulepreload
  * Service Worker Cache
  * Appcache
    * Deprecated
  * HTTP Cache / Disk cache
    * cache-control
  * HTTP/2 Push "Cache" (unclaimed push streams container)
    * Deprecated
* CDN
  * proxy cache
* Server
  * proxy cache
  * real server

* est-ce qu'on parle de 301
