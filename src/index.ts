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

const uuid = () => {
  return Number(Date.now() * 100 + Math.floor(Math.random() * 100)).toString(
    36,
  );
};

export const get = (key: string): any => {
  return scope[key];
};

export const putPayload = (data: any): string => {
  const payloadId = uuid();
  if (isWindow && isSessionStorage) {
    sessionStorage.setItem(`__sight-scope_${payloadId}`, JSON.stringify(data));
  }
  return payloadId;
};

export const getPayload = (payloadId: string): any => {
  if (isWindow && isSessionStorage) {
    const data = sessionStorage.getItem(`__sight-scope_${payloadId}`);
    if (data) {
      return JSON.parse(data);
    }
  }
};

ss();
