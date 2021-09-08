const checaAposta = (numeroSorteado, numeroApost) => numeroSorteado === numeroApost ? 'Parabens' : 'Tente novamente';

const hof = (numeroApost, callback) => {
  const numeroSort = Math.floor(Math.random() * 5);

  return callback(numeroSort, numeroApost);
};

console.log(hof(3, checaAposta));