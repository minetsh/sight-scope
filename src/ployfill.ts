export function assign(target: any, ...sources: any[]): any {
  if (Object.assign) {
    return Object.assign.apply(this, arguments);
  }

  if (target === null || target === undefined) {
    throw new TypeError('Cannot convert undefined or null to object');
  }

  for (let source: any, i = 1, n = arguments.length; i < n; i++) {
    source = arguments[i];
    for (const key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }
  return target;
}
