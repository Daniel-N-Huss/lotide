const letterPositions = function(sentence) {
  const results = {};

  for (let letter = 0; letter < sentence.length; letter++) {
    if (results[sentence[letter]]) {
      results[sentence[letter]].push(letter);
    } else
      results[sentence[letter]] = [letter];
    console.log(results);
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

const test = letterPositions('hello');

assertArraysEqual(test['h'], [0]);
assertArraysEqual(test['e'], [1]);
assertArraysEqual(test['l'], [2, 3]);
assertArraysEqual(test['o'], [4]);

