const assert = require('assert');

const sumAll = (...values) => {
  let sum = 0;
  values.forEach(value => {
    sum += value;
  });

  return sum;
};

const sum = (...values) => values.reduce((accumulator, currentValue) => accumulator + currentValue );

// Será que eu consigo passar X parametros com apenas 1 declaração do argumento da função?
sumAll(1, 2, 3, 4, 5, 6, 7, 8, 9);

// TESTES
assert.strictEqual(sum(1, 2), 3);
assert.strictEqual(sum(1, 2, 3), 6);
assert.strictEqual(sum(1, 2, 3, 4, 5), 15);
