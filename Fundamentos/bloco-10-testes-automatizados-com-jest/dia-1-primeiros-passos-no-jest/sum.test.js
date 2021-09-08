const sum = require('./sum');

test('Verifica se 2 + 3 retorna 5', () => {
  expect(sum(2, 3)).toBe(5);
});
