import { assign } from './ployfill';

const isWindow = typeof window !== 'undefined';
const isSessionStorage = typeof sessionStorage !== 'undefined';

const keySightScope = '__sight-scope';

const scope = {};

const ss = (): void => {
  if (isWindow && isSessionStorage) {
    assign(scope, JSON.parse(sessionStorage.getItem(keySightScope) || '{}'));
    const search = window.location.search;
    if (search && search.length > 1) {
      search
        .substring(1)
        .split('&')
        .map((p) => p.split('='))
        .forEach(([key, value]) => {
          scope[key] = value;
        });
      sessionStorage.setItem(keySightScope, JSON.stringify(scope));
    }
  }
};

if (isWindow) {
  addEventListener('load', () => {
    ss();
  });
}

export const get = (key: string): any => {
  return scope[key];
};

ss();
