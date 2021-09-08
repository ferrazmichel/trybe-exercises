const fetchPromise = () => {
new Promise((resolve, reject) => {
  const array = [];
  for(let i = 0; i < 10; i += 1) {
    const number = Math.floor(Math.random() * 49 + 1)
    array.push(number * number)
  }
  const soma = array.reduce((acc,number) => acc + number);
  (soma < 8000) ? resolve(soma) : reject();
})
.then(sum => [2, 3, 5, 10].map(number => sum / number))
.then()
.catch(() => console.log("É mais de oito mil! Essa promise deve estar quebrada!"))
};

fetchPromise();
