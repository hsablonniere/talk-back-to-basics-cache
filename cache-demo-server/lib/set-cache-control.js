export function setCacheControl (cacheControl) {
  return (context) => {
    return {
      ...context,
      responseHeaders: {
        ...context.responseHeaders,
        'cache-control': cacheControl,
      },
    };
  };
}
