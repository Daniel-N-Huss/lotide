const eqObjects = function(object1, object2) {
  const object1Keys = Object.keys(object1);
  const object2Keys = Object.keys(object2);

  console.log(object1Keys, ' keys from Object 1');
  console.log(object2Keys, ' keys from Object 2');
  if (object1Keys.length !== object2Keys.length) {
    return false;
  }

  for (const key of object1Keys) {
    console.log('Object 1 key is ', object1[key], ' Object 2 key is ', object2[key]);
    if (object1.key !== object2.key) {
      return false;
    }

  }
  return true;
};


/*
pseudocode
  need to test of objects have the same number of keys
  test if key value in each object matches

  make variable that holds number of keys in obj1, test if same as obj 2
    if not, return false
  object loop that tries to call the same key in other object
    if not return false
    if they all match, return true


*/

// Tests
const assertEqual = function(actual, expected) {

  if (actual === expected) {
    console.log(`\u2705 ${actual} === ${expected}`);
  } else {
    console.log(`\u274C ${actual} !== ${expected}`);
  }
};


const ab = { a: '1', b: '2' };
const ba = { b: '2', a: '1' };
assertEqual(eqObjects(ab, ba), true);

const abc = {a: '1', b: '2', c: '3' };
assertEqual(eqObjects(ab, abc), false);