import { createServer } from 'node:http';
import ansiEscapes from 'ansi-escapes';
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
import { ResponseDelay } from './lib/response-transformer.js';

const httpsOptions = {
  key: fs.readFileSync('./cert/host.key'),
  cert: fs.readFileSync('./cert/host.crt'),
};

const ERROR_MODES = [false, 500, 503];
let errorMode = false;
let fakeLastModified = false;
let delay = 50;

// options,
let hititipiSetup = hititipi(
  logRequest(
    chainAll([
      async (context) => {
        await setTimeout(500);
        const responseTransformers = [
          ...context.responseTransformers,
          new ResponseDelay(delay),
        ];
        return { ...context, responseTransformers };
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
      startsWith('/lm-cc-ma-0/', chainAll([
        notModified({ lastModified: true }),
        cacheControl({ 'max-age': 0 }),
      ])),
      startsWith('/cc-ma-10-mr/', cacheControl({ 'max-age': 10, 'must-revalidate': true })),
      startsWith('/etag-cc-ma-10-mr/', chainAll([
        notModified({ etag: true }),
        cacheControl({ 'max-age': 10, 'must-revalidate': true }),
      ])),
      startsWith('/etag-cc-ma-1y/', chainAll([
        notModified({ etag: true }),
        cacheControl({ 'max-age': 31536000 }),
      ])),
      startsWith('/etag-cc-ma-1y-immutable/', chainAll([
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
        cacheControl({ 's-maxage': 20 }),
      ])),
      startsWith('/hello-vary/', chainAll([
        cacheControl({ 's-maxage': 20 }),
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
      startsWith('/sw/', chainAll([
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
        if (!fakeLastModified || context.responseHeaders['last-modified'] == null) {
          return;
        }
        const lastModifiedTs = Date.now() - 10 * 60 * 60 * 1000;
        return {
          ...context,
          responseHeaders: {
            ...context.responseHeaders,
            'last-modified': new Date(lastModifiedTs).toUTCString(),
          },
        };
      },

      (context) => {
        if (!errorMode) {
          return;
        }
        return {
          ...context,
          responseBody: Readable.from('503 Service Unavailable'),
          responseStatus: errorMode,
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

process.stdin.on('keypress', async function (character, key) {
  // console.log(key);
  if (key.name === 'return') {
    for (let i = 0; i < 25; i += 1) {
      await setTimeout(20);
      process.stdout.write(ansiEscapes.cursorPrevLine);
      process.stdout.write(ansiEscapes.eraseLine);
    }
  }
  if (key.name === 'e' && key.ctrl) {
    errorMode = ERROR_MODES[(ERROR_MODES.indexOf(errorMode) + 1) % ERROR_MODES.length];
    console.log('toggle error mode:', errorMode);
  }
  if (key.name === 'l' && key.ctrl) {
    fakeLastModified = !fakeLastModified;
    if (fakeLastModified) {
      console.log('last-modified: dates rewritten to 10 hours ago');
    }
    else {
      console.log('last-modified: real filesystem dates');
    }
  }
  if (key.name === 'up' && key.ctrl) {
    delay = delay + 25;
    console.log('delay:', delay + 'ms');
  }
  if (key.name === 'down' && key.ctrl) {
    delay = Math.max(0, delay - 25);
    console.log('delay:', delay + 'ms');
  }
  if (key.name === 'c' && key.ctrl) {
    process.exit();
  }
});

async function write (text) {
  for (let i = 0; i < text.length; i += 1) {
    process.stdout.write(text[i]);
    const delay = (text[i] === '\n') ? 200 : 15;
    await setTimeout(delay);
  }
}

// await write(`
// Bonjour Hubert et bonjour Devoxx !
//
// je suis un serveur HTTP de test,
// j'affiche les requêtes que je reçois.
//
// `);
