export interface QueryParam {
  [key: string]: string;
}

/**
 * 解析&拼接的key-value字符串
 * @param u url/search/hash
 */
export const parseQueryParams = (u: string, scope?: QueryParam): QueryParam => {
  if (!u) return {};
  const index = u.indexOf('?');
  return u
    .substring(index + 1)
    .split('&')
    .map((p: string) => p.split('='))
    .reduce((sc: QueryParam, [key, value]: string[]) => {
      sc[key] = value;
      return sc;
    }, scope || {});
};

/**
 * 返回唯一 ID
 */
export const uuid = (): string => {
  return Number(Date.now() * 100 + Math.floor(Math.random() * 100)).toString(
    36,
  );
};
