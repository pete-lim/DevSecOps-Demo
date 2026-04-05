const sum = require('../service/sum');

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});
test.each([
  [1, 2, 3],
  [3, 4, 7],
  [5, 9, 14],
  [7, 9, 16],
])('adds %i + %i to equal %i', (a, b, expected) => {
  expect(sum(a, b)).toBe(expected);
});
