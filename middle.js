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


const middle = function(array) {
  let resultArray = [];
  
  if (array.length > 2) {
    if (array.length % 2 === 0) {
      resultArray.push(array[array.length / 2 - 1]);
      resultArray.push(array[array.length / 2]);
    } else {
      resultArray.push(array[Math.floor(array.length / 2)]);
    }
  }
  console.log(resultArray);
  return resultArray;
};

middle([1]) // => []
middle([1, 2]) // => []


assertArraysEqual(middle([1, 2, 3]), [2]); // => [2]
middle([1, 2, 3, 4, 5]) // => [3]

middle([1, 2, 3, 4]) // => [2, 3]
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);