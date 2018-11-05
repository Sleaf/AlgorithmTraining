const solve = require('../src').generateHashtag;

test('example', () => {
  expect(solve(" Hello there thanks for trying my Kata")).toBe('#HelloThereThanksForTryingMyKata');
  expect(solve(" Hello     World   ")).toBe('#HelloWorld');
  expect(solve("")).toBe(false);
  expect(solve("Codewars")).toBe("#Codewars");
  expect(solve("Looooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooong")).toBe(false);
});
