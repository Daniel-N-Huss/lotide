const results = {};

const addToLetterArray = function(sentence, letter) {
  results[sentence[letter]].push(letter);
};

const addNewLetterKey = function(sentence, letter) {
  results[sentence[letter]] = [letter];
};

const letterPositions = function(sentence) {
  for (let letter = 0; letter < sentence.length; letter++) {
    const letterKeyExists = results[sentence[letter]];
    letterKeyExists ? addToLetterArray(sentence, letter) : addNewLetterKey(sentence, letter);
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
console.log(test);

assertArraysEqual(test['h'], [0]);
assertArraysEqual(test['e'], [1]);
assertArraysEqual(test['l'], [2, 3]);
assertArraysEqual(test['o'], [4]);

