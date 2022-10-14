import { performance } from 'perf_hooks';

let timeoutId;

function logHeader (headers, headerName) {
  if (headers[headerName] != null) {
    console.log('  ', headerName, headers[headerName]);
  }
}

export function logRequest (applyMiddleware) {
  return async (context) => {

    if (timeoutId != null) {
      clearTimeout(timeoutId);
    }
    timeoutId = setTimeout(() => console.log(''), 2000);

    const before = performance.now();
    const now = new Date().toISOString();
    const shortNow = now.substring(11, 23);
    const newContext = await applyMiddleware(context);
    const after = performance.now();
    const elapsed = (after - before).toFixed(2) + 'ms';
    let requestCc = context.requestHeaders['cache-control'];
    console.log(shortNow, newContext.requestMethod, newContext.requestUrl.pathname, newContext.requestUrl.search, newContext.responseStatus, elapsed);

    logHeader(context.requestHeaders, 'cache-control');
    logHeader(context.requestHeaders, 'if-modified-since');
    logHeader(context.requestHeaders, 'etag');

    return newContext;
  };
}
