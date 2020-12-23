import { assign } from './ployfill';
import { parseQueryParams, uuid } from './utils';
import ss from './ss';

export { parseQueryParams, uuid };

const scope = {};
const keySightScope = '__sight-scope';

const sight = (): void => {
  assign(scope, JSON.parse(ss.getItem(keySightScope) || '{}'));
  const { search, hash } = window.location;
  const sh = search || hash;
  parseQueryParams(search || hash, scope);
  ss.setItem(keySightScope, JSON.stringify(scope));
};

if (typeof addEventListener !== 'undefined') {
  addEventListener('load', () => {
    sight();
  });
}

export const get = (key: string): any => {
  return scope[key];
};

export const putPayload = (data: any): string => {
  const payloadId = uuid();
  ss.setItem(`__sight-scope_${payloadId}`, JSON.stringify(data));
  return payloadId;
};

export const getPayload = (payloadId: string): any => {
  const data = ss.getItem(`__sight-scope_${payloadId}`);
  if (data) {
    return JSON.parse(data);
  }
};

sight();
