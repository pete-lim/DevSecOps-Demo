const multiply = require('../service/multiply');

test('Multiplying 10 and 5 to get 50', () => {
  expect(multiply(10, 5)).toBe(50);
});
test.each([
  [1, 2, 2],
  [2, 6, 12],
  [12, 12, 144],
  [11, 9, 99],
])('multiplies %i by %i to get % i', (a, b, expected) => {
  expect(multiply(a, b)).toBe(expected);
});
