const assertEqual = function(actual, expected) {

  if (actual === expected) {
    console.log(`\u2705 ${actual} === ${expected}`);
  } else {
    console.log(`\u274C ${actual} !== ${expected}`);
  }
};


const findKey = function(object, callback) {
  let result;
  for (const key in object) {
    if (callback(key)) {
      return object[key];
    }
  }
  return result;
};



// const findKeyByValue = function(object, value) {
  // for (const key in object) {
    // if (object[key] === value) {
      // return key;
    // }
  // }
  // return undefined;
// };




findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2) // => "noma"