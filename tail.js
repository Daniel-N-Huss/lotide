const assertEqual = function(actual, expected) {

  if (actual === expected) {
    console.log(`\u2705 ${actual} === ${expected}`);
  } else {
    console.log(`\u274C ${actual} !== ${expected}`);
  }
};


const tail = function(array) {

  let tail = array.slice(1);
  return tail;
};

// tests
const words = ["yo yo", "Lighthouse", "Labs"];
tail(words);
assertEqual(words.length, 3);

console.log(tail([0,1,2,3,4]));
console.log(tail([]));
console.log(tail([1]));