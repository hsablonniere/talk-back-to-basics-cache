import { createServer } from 'node:http';
import { createServer as createServerHttps } from 'node:https';
import { hititipi } from 'hititipi';
import fs from 'node:fs';
import { chainUntilResponse } from 'hititipi/src/middlewares/chain-until-response.js';
import { staticFile } from 'hititipi/src/middlewares/static-file.js';
import { notFound } from './lib/not-found.js';
import { logRequest } from './lib/log-request.js';
import { chainAll } from 'hititipi/src/middlewares/chain-all.js';
import { dynamicPage } from './lib/dynamic-page.js';
import { startsWith } from './lib/matches-path.js';
import { cacheControl } from 'hititipi/src/middlewares/cache-control.js';
import { notModified } from 'hititipi/src/middlewares/not-modified.js';
import readlineModule from 'readline';
import { Readable } from 'node:stream';
import { setTimeout } from 'node:timers/promises';

const httpsOptions = {
  key: fs.readFileSync('./cert/host.key'),
  cert: fs.readFileSync('./cert/host.crt'),
};

let errorMode = false;
let delay = 500;

// options,
let hititipiSetup = hititipi(
  logRequest(
    chainAll([
      async () => {
        await setTimeout(delay);
      },
      chainUntilResponse([
        dynamicPage({ root: 'pages' }),
        staticFile({ root: 'public' }),
        notFound,
      ]),

      startsWith('/cc-ma-10/', cacheControl({ 'max-age': 10 })),
      startsWith('/cc-ns/', cacheControl({ 'no-store': true })),
      startsWith('/etag-simple/', notModified({ etag: true })),
      startsWith('/etag-cc-ma-10/', chainAll([
        notModified({ etag: true }),
        cacheControl({ 'max-age': 10 }),
      ])),
      startsWith('/lm-simple/', notModified({ lastModified: true })),
      startsWith('/lm-cc-ma-10/', chainAll([
        notModified({ lastModified: true }),
        cacheControl({ 'max-age': 10 }),
      ])),
      startsWith('/lm-cc-nc/', chainAll([
        notModified({ lastModified: true }),
        cacheControl({ 'no-cache': true }),
      ])),
      startsWith('/etag-cc-ma-10-mr/', chainAll([
        notModified({ etag: true }),
        cacheControl({ 'max-age': 10, 'must-revalidate': true }),
      ])),
      startsWith('/etag-cc-ma-31536000/', chainAll([
        notModified({ etag: true }),
        cacheControl({ 'max-age': 31536000 }),
      ])),
      startsWith('/etag-cc-ma-31536000-immutable/', chainAll([
        notModified({ etag: true }),
        cacheControl({ 'max-age': 31536000, 'immutable': true }),
      ])),
      startsWith('/etag-cc-ma-10-swr-20/', chainAll([
        notModified({ etag: true }),
        cacheControl({ 'max-age': 10, 'stale-while-revalidate': 20 }),
      ])),
      startsWith('/etag-cc-ma-10-swr-20-mr/', chainAll([
        notModified({ etag: true }),
        cacheControl({ 'max-age': 10, 'stale-while-revalidate': 20, 'must-revalidate': true }),
      ])),
      startsWith('/etag-cc-ma-10-sie-20/', chainAll([
        notModified({ etag: true }),
        cacheControl({ 'max-age': 10, 'stale-if-error': 3600 }),
      ])),
      startsWith('/hello/', chainAll([
        cacheControl({ 'max-age': 10 }),
      ])),
      startsWith('/hello-vary/', chainAll([
        cacheControl({ 'max-age': 10 }),
        (context) => {
          return {
            ...context,
            responseHeaders: {
              ...context.responseHeaders,
              'vary': 'accept-language',
            },
          };
        },
      ])),

      (context) => {
        if (!errorMode) {
          return;
        }
        return {
          ...context,
          responseBody: Readable.from('503 Service Unavailable'),
          responseStatus: 503,
        };
      },

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

readlineModule.emitKeypressEvents(process.stdin);
process.stdin.setRawMode(true);

process.stdin.on('keypress', function (character, key) {
  // console.log(key);
  if (key.name === 'return') {
    console.log('\n'.repeat(40));
    console.clear();
  }
  if (key.name === 'e' && key.ctrl) {
    errorMode = !errorMode;
    console.log('toggle error mode:', errorMode);
  }
  if (key.name === 'up' && key.ctrl) {
    delay = delay + 500;
    console.log('delay:', delay + 'ms');
  }
  if (key.name === 'down' && key.ctrl) {
    delay = Math.max(0, delay - 500);
    console.log('delay:', delay + 'ms');
  }
  if (key.name === 'c' && key.ctrl) {
    process.exit();
  }
});

console.log('Bonjour, je suis un serveur HTTP de test...')
