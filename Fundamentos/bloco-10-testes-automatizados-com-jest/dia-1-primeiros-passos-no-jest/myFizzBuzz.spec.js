const myFizzBuzz = require('./myFizzBuzz');

test('Faça uma chamada com um número divisível por 3 e 5 e verifique se o retorno é o esperado', () => {
  expect(myFizzBuzz(15)).toBe('fizzbuzz')
});

test('Faça uma chamada com um número divisível por 3 e verifique se o retorno é o esperado', () => {
  expect(myFizzBuzz(6)).toBe('fizz')
});

test('Faça uma chamada com um número divisível por 5 e verifique se o retorno é o esperado', () => {
  expect(myFizzBuzz(10)).toBe('buzz')
});

test('Faça uma chamada com um número que não é divisível por 3 ou 5 e verifique se o retorno é o esperado', () => {
  expect(myFizzBuzz(8)).not.toBe('fizzbuzz')
});

test('Faça uma chamada com um parâmetro que não é um número e verifique se o retorno é o esperado', () => {
  expect(myFizzBuzz('teste')).toBe(false);
});