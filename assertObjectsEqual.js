const eqArrays = function(arr1, arr2) {
  for (let i = 0; i < arr1.length || i < arr2.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};


const eqObjects = function(object1, object2) {
  const object1Keys = Object.keys(object1);
  const object2Keys = Object.keys(object2);

  if (object1Keys.length !== object2Keys.length) {
    return false;
  }
  for (const key of object1Keys) {

    if (Array.isArray(object1[key])) {

      const arrayTest = eqArrays(object1[key], object2[key]);

      if (arrayTest === false) {
        return false;
      }
    } else if (object1[key] !== object2[key]) {
      return false;
    }
  }
  return true;
};


const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  if (eqObjects(actual, expected)) {
    console.log(`\u2705 ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`\u274C ${actual} !== ${expected}`);
  }
};

const ab = { a: '1', b: '2' };
const ba = { b: '2', a: '1' };

assertObjectsEqual(ab, ba);

