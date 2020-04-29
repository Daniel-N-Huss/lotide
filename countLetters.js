const assertEqual = function(actual, expected) {

  if (actual === expected) {
    console.log(`\u2705 ${actual} === ${expected}`);
  } else {
    console.log(`\u274C ${actual} !== ${expected}`);
  }
};


const countLetters = function(sentence) {
  const letterCount = {};
  for (let letter of sentence) {
    if (letterCount[letter]) {
      letterCount[letter] += 1;
    } else {
      letterCount[letter] = 1;
    }
  }
  return letterCount;
};


console.log(countLetters('Hello there'));