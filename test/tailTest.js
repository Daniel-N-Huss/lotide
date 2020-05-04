const tail = require('../tail.js');
const assertEqual = require('../assertEqual.js');

const words = ["yo yo", "Lighthouse", "Labs"];
console.log(tail(words));
assertEqual(words.length, 3);

console.log(tail([0,1,2,3,4]));
console.log(tail([]));
console.log(tail([1]));

const result = tail([0, 1, 2, 3]);
assertEqual(result[0], 1);