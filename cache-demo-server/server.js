import { createServer } from 'node:http';
import { hititipi } from 'hititipi';
import { chainUntilResponse } from 'hititipi/src/middlewares/chain-until-response.js';
import { staticFile } from 'hititipi/src/middlewares/static-file.js';
import { dynamicPage } from './lib/dynamic-page.js';
import { notFound } from './lib/not-found.js';
import { addDelay } from './lib/add-delay.js';
import { matchesPath } from './lib/matches-path.js';
import { setCacheControl } from './lib/set-cache-control.js';
import { logRequest } from './lib/log-request.js';

createServer(
  hititipi(
    logRequest(
      chainUntilResponse([
        addDelay(500),
        matchesPath('/favicon.ico', setCacheControl('public, max-age=10000')),
        matchesPath('/bfcache/', setCacheControl('no-cache, max-age=0, must-revalidate')),
        matchesPath('/disk-cache/:file.js', setCacheControl('public, max-age=10000')),
        matchesPath('/disk-cache/:file.css', setCacheControl('public, max-age=10000')),
        matchesPath('/partitionning/:file.js', setCacheControl('public, max-age=10000')),
        matchesPath('/partitionning/:file.css', setCacheControl('public, max-age=10000')),
        // matchesPath('/memory-cache/', preloadLinks(['/beatles.jpg'])),
        // matchesPath('/beatles.jpg', setCacheControl('no-store, no-cache, max-age=0')),
        dynamicPage({ root: 'pages' }),
        staticFile({ root: 'public' }),
        notFound,
      ]),
    ),
  ),
).listen(process.env.PORT ?? 8080);

