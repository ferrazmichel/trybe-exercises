const teste = require('./bonus');

test('Verifica se, ao passar um ID inexistente, retorna o erro correto', () => {
  expect(teste('1234', 'firstName')).toBe('ID não identificada');
})

test('Verifica se, ao passar uma informação inexistente, retorna o erro correto', () => {
  expect(teste('8579-6', 'address')).toBe('Informação indisponível');
})

test('Verifica se retorna a informação correta ao passar um ID disponível', () => {
  expect(teste('8579-6', 'firstName')).toBe('Ana');
})

test('Verifica se retorna a informação correta ao passar um ID disponível', () => {
  expect(teste('8579-6', 'lastName')).toBe('Gates');
})

test('Verifica se retorna a informação correta ao passar um ID disponível', () => {
  expect(teste('1256-4', 'lastName')).toBe('Bezos');
})

test('Verifica se retorna a informação correta ao passar um ID disponível', () => {
  expect(teste('9852-2-2', 'specialities')).toEqual(['Ruby', 'SQL']);
})