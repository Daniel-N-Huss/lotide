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
    if (letter !== ' ') {
      if (letterCount[letter]) {
        letterCount[letter] += 1;
      } else {
        letterCount[letter] = 1;
      }
    }
  }
  return letterCount;
};

const test = countLetters('bee');

assertEqual(test['b'], 1);
assertEqual(test['e'], 2);


console.log(countLetters('Hello there'));