function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
  };
  
  createDaysOfTheWeek();
  
const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
const dias = document.getElementById("days");

for (let i = 0; i < dezDaysList.length; i += 1) {
    let dia = document.createElement("li");
    dia.innerText = dezDaysList[i];
    dia.className = "day";
    dias.appendChild(dia); 
}

let feriado = document.querySelectorAll(".day");

for (let i = 0; i < feriado.length; i += 1) {
    let check = feriado[i].innerText;
    if (check == 24 || check == 25 || check == 31) {
        feriado[i].classList.add("holiday");
    }
}

for (let i = 0; i < feriado.length; i += 1) {
    let check = feriado[i].innerText;
    if (check == 4 || check == 11 || check == 18 || check == 25) {
        feriado[i].classList.add("friday");
    }
}

function holiday (string) {
    const botao = document.querySelector(".buttons-container");
    let but = document.createElement("button");
    but.innerText = string;
    but.className = "btn-holiday";
    botao.appendChild(but);
}

holiday("Feriados");

const botaoFeriado = document.querySelector(".btn-holiday");
botaoFeriado.addEventListener("click", clickFeriado)

function clickFeriado () {
    for (let i = 0; i < feriado.length; i += 1) {
        if (feriado[i].className == "day holiday" || feriado[i].className == "day holiday friday") {
            feriado[i].style.backgroundColor = "blue";
        }
    }
}

function createFridayButton(buttonName) {
    let buttonContainer = document.querySelector('.buttons-container');
    let newButton = document.createElement('button');
    let newButtonID = 'btn-friday';
  
    newButton.innerHTML = buttonName;
    newButton.id = newButtonID;
    buttonContainer.appendChild(newButton);
  };
  
  createFridayButton('Sexta-feira');


const getFridayButton = document.querySelector('#btn-friday');
getFridayButton.addEventListener('click', displayFridays);

function displayFridays(fridaysArray) {
    
    let fridays = document.getElementsByClassName('day friday');
    let newFridayText = 'SEXTOU o/';
  
    
    for (let index = 0; index < fridays.length; index += 1) {
      if (fridays[index].innerHTML !== newFridayText) {
          fridays[index].innerHTML = newFridayText;
      } else {
          fridays[index].innerHTML = fridaysArray[index];
        }
      }
    }

function dayMouseOver() {
    let days = document.querySelector('#days');
    
    days.addEventListener('mouseover', function(event) {
        event.target.style.fontSize = '30px';
        event.target.style.fontWeight = '600';
    })
};
    
function dayMouseOut() {
    let days = document.querySelector('#days');
    
    days.addEventListener('mouseout', function(event) {
        event.target.style.fontWeight = '200';
        event.target.style.fontSize = '20px';
    })
};

dayMouseOver();
dayMouseOut();

function newTaskSpan(task) {

    let tasksContainer = document.querySelector('.my-tasks');
    let taskName = document.createElement('span');
  
    taskName.innerHTML = task;
    tasksContainer.appendChild(taskName);
  };
  
newTaskSpan('Projeto:');

  function newTaskDiv(color) {

    let tasksContainer = document.querySelector('.my-tasks');
    let newTask = document.createElement('div');
  
    newTask.className = 'task';
    newTask.style.backgroundColor = color;
    tasksContainer.appendChild(newTask);
  };
  
  newTaskDiv('green');