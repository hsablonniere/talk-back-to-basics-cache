export function notFound (context) {
  if (context.responseStatus == null) {
    return { ...context, responseStatus: 404 };
  }
};
