import checkPaySystem from '../js/paysystem';

test.each([
  ['мир', '2201382000000013', 'mir'],
  ['diners club', '30484742554645', 'diners_club'],
  ['jcb', '3544793851454139', 'jcb'],
  ['amex', '340577627746486', 'amex'],
  ['visa', '4556315375909159', 'visa'],
  ['maestro', '5018526464325987', 'maestro'],
  ['mastercard', '5384879732455656', 'master'],
  ['discover', '6011204551808787425', 'discover'],
])(('it sould be %s'), (_, input, expected) => {
  expect(checkPaySystem(input)).toBe(expected);
});
