export function preloadLinks (links) {
  return (context) => {
    return {
      ...context,
      responseHeaders: {
        ...context.responseHeaders,
        'Link': links.map((url) => `<${url}>; rel=preload; as=image`).join(','),
      },
    };
  };
}
