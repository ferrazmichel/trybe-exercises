

const shoppingList = ['leite', 'arroz', 'feijão', 'banana', 'carne'];

const items = shoppingList.map((item) => {
  console.log("item: ", item);
  return `(<li>${ item }</li>)`;
});

console.log(items);