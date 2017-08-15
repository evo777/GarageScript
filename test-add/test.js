const add = require('./add.js');

const test = (a, b, c) => {
  if (add(a, b) === c) {
    console.log('Correct');
  }
  console.log('Incorrect');
};

test(1, 2, 3);
test(8, 10, 4);
test(3, 4, 7);
test(9, 2, 5);
test(4,11,20);
