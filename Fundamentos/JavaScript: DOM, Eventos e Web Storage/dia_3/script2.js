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