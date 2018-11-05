const solve = require('../src').isInteresting;

test('example', () => {
  expect(solve(3, [1337, 256])).toBe(0);
  expect(solve(11209, [1337, 256])).toBe(1);
  expect(solve(11211, [1337, 256])).toBe(2);
  expect(solve(9876, [1337, 256])).toBe(2);
  expect(solve(3210, [1337, 256])).toBe(2);
});
