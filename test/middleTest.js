const middle = require('../middle.js');
const assertArraysEqual = require('../assertArraysEqual');

middle([1]) // => []
middle([1, 2]) // => []


assertArraysEqual(middle([1, 2, 3]), [2]); // => [2]
middle([1, 2, 3, 4, 5]) // => [3]

middle([1, 2, 3, 4]) // => [2, 3]
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);