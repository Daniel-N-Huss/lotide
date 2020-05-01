const assertEqual = function(actual, expected) {

  if (actual === expected) {
    console.log(`\u2705 ${actual} === ${expected}`);
  } else {
    console.log(`\u274C ${actual} !== ${expected}`);
  }
};

const findKey = function(object, callback) {
  for (const key in object) {
    if (callback(object[key])) {
      return key;
    } else if (callback(key)) {
      return key;
    }
  }
};


assertEqual(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2), "noma"); // => "noma"

let zergUnits = {
  baneling: 'bad',
  zergling: 'bad',
  queen: 'good',
  infestor: 'bad'
};

assertEqual(findKey(zergUnits, x => x === 'good'), 'queen');
assertEqual(findKey(zergUnits, x => x === 'bad'), 'baneling');
assertEqual(findKey(zergUnits, x => x === 'brave'), undefined);
