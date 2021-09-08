function getChange(payable, paid) {
  const coins = [200, 100, 50, 20, 10, 5, 2, 1];
  const change = [];
  const { length } = coins;
  let remaining = paid - payable;

  if(paid < payable) {throw 'Error: paid value is not enough';};

  while (remaining > 0) {
    if (remaining >= 200) {
      change.push(200);
      remaining -= 200;
    } else if (remaining >= 100) {
      change.push(100);
      remaining -= 100;
    } else if (remaining >= 50) {
      remaining -= 50;
      change.push(50);
    } else if (remaining >= 20) {
      change.push(20);
      remaining -= 20;
    } else if (remaining >= 10) {
      change.push(10);
      remaining -= 10;
    } else if (remaining >= 5) {
      change.push(5);
      remaining -= 5;
    } else if (remaining >= 2) {
      change.push(2);
      remaining -= 2;
    } else {
      change.push(1);
      remaining = 0;
      }
  }
  return change;
}

const assert = require('assert');

let result = getChange(1, 1); // no change/coins just an empty array
let expected = [];
assert.deepStrictEqual(result, expected);

result = getChange(215, 300); // expect an array containing [50, 20, 10, 5]
expected = [50, 20, 10, 5];
assert.deepStrictEqual(result, expected);

result = getChange(486, 600); // expect an array containing [100, 10, 2, 2]
expected = [100, 10, 2, 2];
assert.deepStrictEqual(result, expected);

result = getChange(12, 400); // expect an array containing [200, 100, 50, 20, 10, 5, 2, 1]
expected = [200, 100, 50, 20, 10, 5, 2, 1];
assert.deepStrictEqual(result, expected);

assert.throws(() => { getChange(100, 10); }, /^Error: paid value is not enough$/);
