const add = require('./add.js');

const test = (a, b, c) => {
  if (add(a, b) === c) {
    return 'Correct';
  }
  return 'Incorrect';
};

console.log(test(1, 2, 3));
console.log(test(8, 10, 4));
console.log(test(3, 4, 7));
console.log(test(9, 2, 5));
console.log(test(4,11,20));
