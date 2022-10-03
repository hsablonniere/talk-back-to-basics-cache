export function matchesPath (pattern, middleware) {

  const regexString = pattern.replace(/:([a-z]+)/, '(?<$1>.*)');
  const regex = new RegExp('^' + regexString);

  return (context) => {
    const matches = context.requestUrl.pathname.match(regex);
    if (matches != null) {
      const requestPathParams = matches?.groups ?? {};
      return middleware({ ...context, requestPathParams });
    }
  };
}
