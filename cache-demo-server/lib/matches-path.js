export function matchesPath (pattern, middleware) {

  let regex;

  if (pattern instanceof RegExp) {
    regex = pattern;
  }
  else {
    const regexString = pattern.replace(/:([a-z]+)/, '(?<$1>.*)');
    regex = new RegExp('^' + regexString);
  }

  return (context) => {
    const matches = context.requestUrl.pathname.match(regex);
    if (matches != null) {
      const requestPathParams = matches?.groups ?? {};
      return middleware({ ...context, requestPathParams });
    }
  };
}

export function startsWith (prefix, middleware) {
  return (context) => {
    if (context.requestUrl.pathname.startsWith(prefix)) {
      return middleware(context);
    }
  };
}
