const { get } = require('..');

test('sight-scope', () => {
  expect(get('hello')).toBeUndefined();
});
