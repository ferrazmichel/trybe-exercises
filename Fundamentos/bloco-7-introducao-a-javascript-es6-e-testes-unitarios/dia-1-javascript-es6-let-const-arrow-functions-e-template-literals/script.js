// exercicio 1
const func = (escopo) => {
  if (escopo === true) {
    var ifScope = 'Não devo ser utilizada fora do meu escopo (if).';
    ifScope = `${ifScope} ótimo, fui utilizada no escopo!`;
    console.log(ifScope);
  } else {
    const elseScope = 'Não devo ser utilizada fora meu escopo (else)';
    console.log(elseScope);
  }
}

func(true);

// exercicio 2
const oddsAndEvens = [13, 3, 4, 10, 7, 2];

// seu codigo aqui
function compararNumeros(a, b) {
  return a - b;
}

let array = oddsAndEvens.sort(compararNumeros);

console.log(`Os números ${array} se encontram ordenados de forma crescente!`); // será necessário alterar essa linha 😉

// Exercicios Parte 2
// Exercicio 1
const fatorial = number => {
  let result = 1;
  for (let i = 2; i<= number; i += 1) {
    result = result * i;
  }
  console.log(result);
}  
fatorial(6);

// Exercicios Parte 2
// Exercicio 4
const exerc4 = (string) => {
  let strDeterm = 'Tryber x aqui';
  const str = string;
  let arrayS = strDeterm.split('');
  for (const i in arrayS) {
    arrayS[i] === 'x' ? arrayS[i] = str : null;
  }
  const result = arrayS.join('');
  console.log(result);
}

exerc4('Bebeto');
