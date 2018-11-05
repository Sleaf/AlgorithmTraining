const solve = require('../src').chooseBestSum;

test('example', () => {
  expect(solve(163, 3, [50, 55, 56, 57, 58])).toBe(163);
  expect(solve(163, 3, [50])).toBe(null);
  expect(solve(0, 3, [50, 55, 57, 58, 60])).toBe(null);
  expect(solve(174, 3, [50, 55, 57, 58, 60])).toBe(173);
  expect(solve(230, 3, [91, 74, 73, 85, 73, 81, 87])).toBe(228);
  expect(solve(150, 4, [50, 50, 50, 50, 50])).toBe(null);
  expect(solve(200, 4, [50, 50, 50, 50, 50])).toBe(200);
});
