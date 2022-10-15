import { createServer } from 'node:http';
import { createServer as createServerHttps } from 'node:https';
import { hititipi } from 'hititipi';
import fs from 'node:fs';
import { chainUntilResponse } from 'hititipi/src/middlewares/chain-until-response.js';
import { staticFile } from 'hititipi/src/middlewares/static-file.js';
// import { dynamicPage } from './lib/dynamic-page.js';
import { notFound } from './lib/not-found.js';
import { addDelay } from './lib/add-delay.js';
import { logRequest } from './lib/log-request.js';
import { chainAll } from 'hititipi/src/middlewares/chain-all.js';
import { dynamicPage } from './lib/dynamic-page.js';
import { startsWith } from './lib/matches-path.js';
import { cacheControl } from 'hititipi/src/middlewares/cache-control.js';
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
      chainUntilResponse([
        dynamicPage({ root: 'pages' }),
        staticFile({ root: 'public' }),
        notFound,
      ]),

      startsWith('/cc-ma-10/', cacheControl({ 'max-age': 0 })),
      // startsWith('/cc-ma-10/', cacheControl({ 'no-cache': true })),
      // startsWith('/cc-ma-10/', chainAll([
        // cacheControl({ 'max-age': 5, 'stale-while-revalidate': 20 }),
        // notModified({ etag: true }),
      // ])),
      startsWith('/cc-ns/', cacheControl({ 'no-store': true })),

      // matchesPath(/^\/validation-last-modified\//, notModified({ lastModified: true })),
      // matchesPath(/^\/validation-etag-last-modified\//, notModified({ etag: true, lastModified: true })),
    ]),
  ),
);

createServer(hititipiSetup).listen(process.env.PORT ?? 8081);
createServerHttps(httpsOptions, hititipiSetup).listen(process.env.PORT ?? 8082);

// browser.cache.disk.max_entry_size
// 51200

// browser.cache.disk.capacity
// 256000
