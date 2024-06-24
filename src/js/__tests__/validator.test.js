import Validator from '../classes/validator';

const check = new Validator();

test.each([
  ['dos237kdfjv-kjsdnc_jh', true],
  ['DOS237kdfjv-kjsdnc_jh', true],
  ['dos237kФФФfjv-kjsdnc_jh', false],
  ['1dos237kdfjv-kjsdnc_jh', false],
  ['-dos237kdfjv-kjsdnc_jh', false],
  ['_dos237kdfjv-kjsdnc_jh', false],
  ['dos237kdfjv-kjsdnc_jh1', false],
  ['dos237kdfjv-kjsdnc_jh-', false],
  ['dos237kdfjv-kjsdnc_jh_', false],
  ['dos2376kfjv-kjsdnc_jh', false],
  ['dos2 6kfjv-kjsdnc_jh', false],
  ['dos237kfjv-kjsdnc_jh\nhgv', false],
])(
  ('Проверка имени %s'),
  (name, result) => {
    expect(check.validateUsername(name)).toBe(result);
  },
);
