const eqArrays = require('../eqArrays.js');
const assertEqual = require('../assertEqual');


// assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
// assertEqual(eqArrays([1, 2, 3, 4], [1, 2, 3, 4, 5]), true);
// assertEqual(eqArrays(['a', 'b', 'c'], ['a', 'b', 'c']), true);
// assertEqual(eqArrays(['A name'], ['A name']), true);
// assertEqual(eqArrays([1, 2, 3, '4'], [1, 2, 3, 4, 5]), true);