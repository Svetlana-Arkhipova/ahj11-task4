import checkValidity from '../js/validity';

test('is valid', () => {
  const cardNumber = '4556315375909159';
  expect(checkValidity(cardNumber)).toBeTruthy();
});

test('is not valid', () => {
  const cardNumber = '4556315375909150';
  expect(checkValidity(cardNumber)).toBeFalsy();
});
