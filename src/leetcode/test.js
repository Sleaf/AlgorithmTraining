const solves = require('./index');

test('3sum', () => {
  expect(solves.threeSum([3, 0, 3, 2, -4, 0, -3, 2, 2, 0, -1, -5])).toBe([[-5, 2, 3], [-4, 2, 2], [-3, 0, 3], [0, 0, 0]]);
});