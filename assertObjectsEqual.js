let eqArrays = require('./eqArrays');

let eqObjects = require('./eqObjects');

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  if (eqObjects(actual, expected)) {
    console.log(`\u2705 ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`\u274C ${actual} !== ${expected}`);
  }
};

module.exports = assertObjectsEqual; 
