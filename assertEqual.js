const assertEqual = function(actual, expected) {

  if (actual === expected) {
    console.log(`\u2705 ${actual} === ${expected}`);
  } else {
    console.log(`\u274C ${actual} !== ${expected}`);
  }
};

// tests

assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
assertEqual(1, true);
assertEqual('bones', 'Bones');
assertEqual('100', 100);
assertEqual(101, 100);
assertEqual('Daniel', 'Daniel');