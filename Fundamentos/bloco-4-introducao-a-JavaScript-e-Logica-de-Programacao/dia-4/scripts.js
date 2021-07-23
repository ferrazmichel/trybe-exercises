function palindromo(string) {

  var array = string.split("");
  let result = 0;
  for (let i = 0; i < array.length; i++) {
    let numb = array.length - i - 1;
    if (array[i] == array[numb]) {
      result++;
    } else { result = 0;
      }
  }
  if (result == array.length ) {
    console.log(true)
  } else { console.log(false)
    }
}

function maiorValor(array) {

let numb = 0;
for (let i = 1; i < array.length; i++) {
  if (array[i] > array[numb]) {
    numb = i;
  }
} 
console.log(numb) 
}

function menorValor(array) {

  let numb = 0;
  for (let i = 1; i < array.length; i++) {
    if (array[i] < array[numb]) {
      numb = i;
    }
  } 
  console.log(numb) 
  }

function maiorNome(array) {

    let name = 0;
    let big = 0;
    let result;
    for (let i = 0; i < array.length; i++) {
      name = array[i].length;
      if (name > big) {
        big = name;
        result = array[i];
      }
    } 
    console.log(result)
    }  

function wordEnding(string1, string2) {

  let s1 = string1.split("");
  let s2 = string2.split("");
  let rs1 = s1.reverse();
  let rs2 = s2.reverse();
  let result;
  
  if (rs1[0] == rs2[0] && rs1[1] == rs2[1]) {
      result = true;
    } else {
      result = false;
    }
    console.log(result)
  } 
 
  function exerciseBonus(string) {

    let array = string.split("");
    let result;
    let numb1;
    let numb2; 

    if (array.length == 1) {

      if (array[0] == 'I') {
        numb1 = 1;
      } else if (array[0] == 'V') {
        numb1 = 5;
      } else if (array[0] == 'X') {
        numb1 = 10;
      } else if (array[0] == 'L') {
        numb1 = 50;
      } else if (array[0] == 'C') {
        numb1 = 100;
      } else {
        numb1 = 1000
      }

      console.log(numb1)

    } else {

      if (array[0] == 'I') {
        numb1 = 1;
      } else if (array[0] == 'V') {
        numb1 = 5;
      } else if (array[0] == 'X') {
        numb1 = 10;
      } else if (array[0] == 'L') {
        numb1 = 50;
      } else if (array[0] == 'C') {
        numb1 = 100;
      } else {
        numb1 = 1000;
      }

      if (array[1] == 'I') {
        numb2 = 1;
      } else if (array[1] == 'V') {
        numb2 = 5;
      } else if (array[1] == 'X') {
        numb2 = 10;
      } else if (array[1] == 'L') {
        numb2 = 50;
      } else if (array[1] == 'C') {
        numb2 = 100;
      } else {
        numb2 = 1000;
      }

      if (numb1 > numb2) {

        result = numb1 + numb2;

        console.log(result)

      } else {

      result = numb2 - numb1;
        
      console.log(result)

      }
    }   
  } 
   
function arrayOfNumbers(vector) {

let array = [];
  
for (let index of vector) {
  for (let i = 0; i < index.length; i++) {
    if (index[i] % 2 == 0) {
      array.push(index[i]);
    }
  }
}
console.log(array);
}

arrayOfNumbers([[1, 2], [3,4,5,6], [7,8,9,10]])