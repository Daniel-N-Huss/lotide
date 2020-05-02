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
    } if ((typeof object1[key]) === 'object' && Array.isArray(object1[key] === false)) {
      eqObjects(object1[key], object2[key]);
    } else if (object1[key] !== object2[key]) {
      return false;
    }
  }
  return true;
};

// Tests
const assertEqual = function(actual, expected) {

  if (actual === expected) {
    console.log(`\u2705 ${actual} === ${expected}`);
  } else {
    console.log(`\u274C ${actual} !== ${expected}`);
  }
};


// const ab = { a: '1', b: '2' };
// const ba = { b: '2', a: '1' };
// assertEqual(eqObjects(ab, ba), true);

// const abc = {a: '1', b: '2', c: '3' };
// assertEqual(eqObjects(ab, abc), false);

// const cd = { c: '1', d: ['2', 3]};
// const dc = { d: ['2', 3], c: '1'};

// assertEqual(eqObjects(cd, dc), true);

// const cd2 = { c: '1', d: ['2', 3, 4]};

// assertEqual(eqObjects(cd, cd2), false);

const obby1 = {a: {b: 1}};
const obby2 = {a: {b: 1}};

assertEqual(eqObjects(obby1, obby2), true);