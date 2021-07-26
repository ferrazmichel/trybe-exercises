const cliques = document.querySelector('#clique');
const texto = document.querySelector('p');
let quantidade = 0;

cliques.addEventListener('click', () => {
  quantidade += 1;
  texto.innerText = `Você deu ${quantidade} cliques no botão!`
});
