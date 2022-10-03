import path from 'node:path';
import { Readable } from 'node:stream';

// try to add context.responseStatus 200
// try to add context.responseHeaders['content-type']
// try to add context.responseBody
// try to add context.responseModificationDate
// try to add context.responseSize
// try to add context.responseEtag
// try to add context.gzipFile
// try to add context.brotliFile
export function dynamicPage (options = {}) {

  const absoluteRootPath = path.resolve(process.cwd(), options.root);

  return async (context) => {

    const pathname = context.requestUrl.pathname.endsWith('/')
      ? context.requestUrl.pathname + 'index.html'
      : context.requestUrl.pathname;

    const filepath = path.join(absoluteRootPath, pathname);
    try {

      const page = await import(filepath + '.js');
      const body = await page.render(context);
      const contentType = filepath.endsWith('.svg') ? 'image/svg+xml' : null;

      return {
        ...context,
        responseHeaders: {
          ...context.responseHeaders,
          // 'cache-control': 'no-cache, max-age=0, must-revalidate',
          // 'cache-control': 'public, max-age=2000',
          'content-type': contentType,
          // 'cache-control': 'no-store, no-cache, max-age=0, must-revalidate',
        },
        responseStatus: 200,
        responseBody: Readable.from(body),
      };
    }
    catch (e) {
      // next
      // console.error(e);
    }
  };
}
