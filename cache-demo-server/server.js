import { createServer } from 'node:http';
import { createServer as createServerHttps } from 'node:https';
import { hititipi } from 'hititipi';
import fs from 'node:fs';
import { chainUntilResponse } from 'hititipi/src/middlewares/chain-until-response.js';
import { staticFile } from 'hititipi/src/middlewares/static-file.js';
// import { dynamicPage } from './lib/dynamic-page.js';
import { notFound } from './lib/not-found.js';
import { addDelay } from './lib/add-delay.js';
import { matchesPath } from './lib/matches-path.js';
import { setCacheControl } from './lib/set-cache-control.js';
import { logRequest } from './lib/log-request.js';
import { chainAll } from 'hititipi/src/middlewares/chain-all.js';
import { notModified } from 'hititipi/src/middlewares/not-modified.js';

const httpsOptions = {
  key: fs.readFileSync('./cert/key.pem'),
  cert: fs.readFileSync('./cert/cert.pem'),
};

// options,
let hititipiSetup = hititipi(
  logRequest(
    chainAll([
      addDelay(500),
      matchesPath('/favicon.ico', setCacheControl('public, max-age=10000')),
      matchesPath('/bfcache/', setCacheControl('no-cache, max-age=0, must-revalidate')),
      matchesPath('/disk-cache/:file.js', setCacheControl('public, max-age=10000')),
      matchesPath('/disk-cache/:file.css', setCacheControl('public, max-age=10000')),
      matchesPath('/partitionning/:file.js', setCacheControl('public, max-age=10000')),
      matchesPath('/partitionning/:file.css', setCacheControl('public, max-age=10000')),

      matchesPath('/not-immutable/', setCacheControl('max-age=0')),
      matchesPath('/not-immutable/:file.css', setCacheControl('max-age=2000')),
      matchesPath('/not-immutable/:file.js', setCacheControl('max-age=2000')),
      matchesPath('/not-immutable/:file.jpg', setCacheControl('max-age=2000')),

      matchesPath('/immutable/', setCacheControl('max-age=0')),
      matchesPath('/immutable/:file.css', setCacheControl('max-age=2000, immutable')),
      matchesPath('/immutable/:file.js', setCacheControl('max-age=2000, immutable')),
      matchesPath('/immutable/:file.jpg', setCacheControl('max-age=2000, immutable')),

      // matchesPath('/immutable/:file.jpg', setCacheControl('max-age=15, immutable')),
      // matchesPath('/memory-cache/', preloadLinks(['/beatles.jpg'])),
      // matchesPath('/beatles.jpg', setCacheControl('no-store, no-cache, max-age=0')),
      chainUntilResponse([
        // dynamicPage({ root: 'pages' }),
        staticFile({ root: 'public' }),
        notFound,
      ]),
      notModified({ lastModified: true }),
    ]),
  ),
);
createServer(hititipiSetup).listen(process.env.PORT ?? 8080);
createServerHttps(httpsOptions, hititipiSetup).listen(process.env.PORT ?? 8081);

