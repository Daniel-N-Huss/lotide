const map = function(array, callback) {
  const results = [];

  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};


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




const words = ['above', 'beside', 'underwhere', 'avoid', 'druid'];
const nums = [1, 2, 3];

const results1 = map(words, word => word[0]);
console.log(results1);

assertArraysEqual(map(words, word => word[0]), ['a', 'b', 'u', 'a', 'd']);

assertArraysEqual(map(words, word => word + ' us'), ['above us', 'beside us', 'underwhere us', 'avoid us', 'druid us']);

assertArraysEqual(map(nums, num => num ** num), [1, 4, 27]);