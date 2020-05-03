const eqArrays = function(arr1, arr2) {
  for (let i = 0; i < arr1.length || i < arr2.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};

const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1, array2)) {
    console.log(`\u2705 ${array1} === ${array2}`);
  } else {
    console.log(`\u274C ${array1} !== ${array2}`);
  }
};

const flatten = function(array) {

  let flatArray = [];

  for (const item of array) {
    if (Array.isArray(item)) {
      flatArray = flatArray.concat(flatten(item))
    } else {
       flatArray.push(item);
    }
  }
  return flatArray;
};

assertArraysEqual((flatten([1, 2, [3, 4], 5, [6]])), [1, 2, 3, 4, 5, 6]);