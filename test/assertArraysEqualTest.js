const assertArraysEqual = require('../assertArraysEqual.js');

assertArraysEqual([1, 2, 3], [1, 2, 3]);
assertArraysEqual([1, 2, 3], [1, 2, '3']);
assertArraysEqual(['a friend', 'in me'], ['a friend', 'in me']);
