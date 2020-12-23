const { get, putPayload, getPayload, parseQueryParams } = require('..');

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

  expect(
    parseQueryParams(
      'https://yisheng.aihaisi.com/wx/pay/zhongyao#/prescription/29185/advise?advise=true&ref=packages/diagnose/pages/chat/index&appId=wx19c7fa71f7b7064d&xrpar=8D500093AD6C78BB25E428B545FF47729D515559983528DD82946D5C80A70E7FB7A5C5471DC43F7EA960A9574E0077FA13319E91A18CE9622258539DA50E1769',
    ),
  ).toEqual({
    advise: 'true',
    ref: 'packages/diagnose/pages/chat/index',
    appId: 'wx19c7fa71f7b7064d',
    xrpar:
      '8D500093AD6C78BB25E428B545FF47729D515559983528DD82946D5C80A70E7FB7A5C5471DC43F7EA960A9574E0077FA13319E91A18CE9622258539DA50E1769',
  });
});
