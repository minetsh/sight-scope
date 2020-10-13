const { get, putPayload, getPayload } = require('..');

test('sight-scope', () => {
  expect(get('hello')).toBeUndefined();

  const pid = putPayload('hi');
  expect(getPayload(pid)).toBe('hi');

  const pid2 = putPayload({
    name: 'Felix',
    extra: {
      age: 20,
    },
  });
  expect(getPayload(pid2)).toEqual({
    name: 'Felix',
    extra: {
      age: 20,
    },
  });
});
