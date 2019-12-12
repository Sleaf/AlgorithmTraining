const solves = require('./index');

test('chooseBestSum', () => {
  expect(solves.chooseBestSum(163, 3, [50, 55, 56, 57, 58])).toBe(163);
  expect(solves.chooseBestSum(163, 3, [50])).toBe(null);
  expect(solves.chooseBestSum(0, 3, [50, 55, 57, 58, 60])).toBe(null);
  expect(solves.chooseBestSum(174, 3, [50, 55, 57, 58, 60])).toBe(173);
  expect(solves.chooseBestSum(230, 3, [91, 74, 73, 85, 73, 81, 87])).toBe(228);
  expect(solves.chooseBestSum(150, 4, [50, 50, 50, 50, 50])).toBe(null);
  expect(solves.chooseBestSum(200, 4, [50, 50, 50, 50, 50])).toBe(200);
});

test('generateHashtag', () => {
  expect(solves.generateHashtag(" Hello there thanks for trying my Kata")).toBe('#HelloThereThanksForTryingMyKata');
  expect(solves.generateHashtag(" Hello     World   ")).toBe('#HelloWorld');
  expect(solves.generateHashtag("")).toBe(false);
  expect(solves.generateHashtag("Codewars")).toBe("#Codewars");
  expect(solves.generateHashtag("Looooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooong")).toBe(false);
});

test('isInteresting', () => {
  expect(solves.isInteresting(3, [1337, 256])).toBe(0);
  expect(solves.isInteresting(11209, [1337, 256])).toBe(1);
  expect(solves.isInteresting(11211, [1337, 256])).toBe(2);
  expect(solves.isInteresting(9876, [1337, 256])).toBe(2);
  expect(solves.isInteresting(3210, [1337, 256])).toBe(2);
});
