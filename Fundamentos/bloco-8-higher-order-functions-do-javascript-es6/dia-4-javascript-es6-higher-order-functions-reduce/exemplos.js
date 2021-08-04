const numbers = [32, 15, 3, 2, -5, 56, 70];

const maiorF = (result, number) => result > number ? result : number;
const maiorN = numbers.reduce(maiorF);
console.log(maiorN);

// exemplo 2
const numbers2 = [21, 19, 233, 53, 8, 5, 76, 23, 54];

const somaParF = (num1, num2) => num2 % 2 === 0 ? num1 + num2 : num1;
const result = numbers2.reduce(somaParF, 0);
console.log(result);