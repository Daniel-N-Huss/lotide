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

  for (let item in array) {
    if (Array.isArray(item)) {
      for (let each in item) {
        flatArray.push(array[item][each]);
        console.log(array[item[each]]);
      }
    } else {
      flatArray.push(array[item]);
      console.log(array[item]);
    }
  }
  console.log(flatArray);
  return flatArray;
};

assertArraysEqual((flatten([1, 2, [3, 4], 5, [6]])), [1, 2, 3, 4, 5, 6]);