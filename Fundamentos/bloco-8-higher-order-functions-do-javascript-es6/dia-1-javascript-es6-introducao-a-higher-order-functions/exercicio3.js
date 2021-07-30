const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const funcao = (gabarito, respostasEstudante) => {
  let nota = 0;
  for (let i = 0; i < gabarito.length; i += 1) {
  gabarito[i] === respostasEstudante[i] ? nota += 1 : nota += 0;
  }
  return nota;
};

const hof = (gabarito, respostasEstudante, callback) => callback(gabarito, respostasEstudante);

console.log(hof(RIGHT_ANSWERS, STUDENT_ANSWERS, funcao))
