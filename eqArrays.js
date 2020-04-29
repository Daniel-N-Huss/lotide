const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`\u2705 ${actual} === ${expected}`);
  } else {
    console.log(`\u274C ${actual} !== ${expected}`);
  }
};


const eqArrays = function(arr1, arr2) {
  for (let i = 0; i < arr1.length || i < arr2.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};


assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
assertEqual(eqArrays([1, 2, 3, 4], [1, 2, 3, 4, 5]), true);
assertEqual(eqArrays(['a', 'b', 'c'], ['a', 'b', 'c']), true);
assertEqual(eqArrays(['A name'], ['A name']), true);
assertEqual(eqArrays([1, 2, 3, '4'], [1, 2, 3, 4, 5]), true);