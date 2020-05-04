

// assertEqual(findKey({
//   "Blue Hill": { stars: 1 },
//   "Akaleri":   { stars: 3 },
//   "noma":      { stars: 2 },
//   "elBulli":   { stars: 3 },
//   "Ora":       { stars: 2 },
//   "Akelarre":  { stars: 3 }
// }, x => x.stars === 2), "noma"); // => "noma"

// let zergUnits = {
//   baneling: 'bad',
//   zergling: 'bad',
//   queen: 'good',
//   infestor: 'bad'
// };

// assertEqual(findKey(zergUnits, x => x === 'good'), 'queen');
// assertEqual(findKey(zergUnits, x => x === 'bad'), 'baneling');
// assertEqual(findKey(zergUnits, x => x === 'brave'), undefined);