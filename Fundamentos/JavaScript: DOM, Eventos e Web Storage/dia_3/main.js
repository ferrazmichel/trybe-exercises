const firstDiv = document.getElementById('first-div');
const secondDiv = document.getElementById('second-div');
const thirdDiv = document.getElementById('third-div');
const input = document.getElementById('input');
const myWebpage = document.getElementById('my-spotrybefy');

firstDiv.addEventListener("click", clickTech);
secondDiv.addEventListener("click", clickTech);
thirdDiv.addEventListener("click", clickTech);
input.addEventListener("keyup", function(evento) {
    const change1 = document.getElementsByClassName("tech");
    change1[0].innerHTML = evento.target.value;
})
myWebpage.addEventListener("dblclick", function(){
    window.open('https://blog.betrybe.com/', '_blank');
});

function clickTech (evento) {
  const change = document.getElementsByClassName("tech");
  change[0].classList.remove('tech');
  evento.target.className = "tech";
  input.value = "";
}

myWebpage.addEventListener('mouseover', function(event) {
    event.target.style.color = 'orange';
  });
  
  myWebpage.addEventListener('mouseout', function(event) {
    event.target.style.color = 'unset';
  });

function resetText(event) {
  // O Event é passado como um parâmetro para a função.
  event.target.innerText = 'Opção reiniciada';
  // O event possui várias propriedades, porém a mais usada é o event.target,
  // que retorna o objeto que disparou o evento.
}

firstDiv.addEventListener('dblclick', resetText);
// Não precisa passar o parâmetro dentro do addEventListener. O próprio
// navegador fará esse trabalho por você, não é legal? Desse jeito, o
// event.target na nossa função retornará o objeto 'divUm'.