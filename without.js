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

// loop through the itemsToRemove
//    for each item in the items to remove
        // check if item is in source
          // if true, we want to remove item from source

          
const without = function(source, itemsToRemove) {
  let sourceToEdit = [...source];
  for (let x = 0; x < source.length; x++) {
    const indexOfItemInSource = itemsToRemove.indexOf(source[x])
    if (indexOfItemInSource > -1) {
      sourceToEdit.splice(x, 1)
    }
  }
  return sourceToEdit;
};
          
const without = function(source, itemsToRemove) {
  let sourceToEdit = [...source];
  for (const item of itemsToRemove) {
    const indexOfItemInSource = sourceToEdit.indexOf(item)
    if (indexOfItemInSource > -1) {
      sourceToEdit.splice(indexOfItemInSource, 1)
    }
  }
  return sourceToEdit;
};

// const without = function(source, itemsToRemove) {
//   let sourceToEdit = [...source];
//   for (let x = 0; x < source.length; x++) {
//     for (let y = 0; y < itemsToRemove.length; y++) {
//       if (source[x] === itemsToRemove[y]) {
//         sourceToEdit.splice(x, 1);
//       }
//     }
//   }
//   console.log(source);
//   return sourceToEdit;
// };

console.log(without([1, 2, 3], [1]));
console.log(without(["1", "2", "3"], [1, 2, "3"]));
console.log(without(['aba', 'bcb', 'b'], ['aba', 'b']));

const words = ["hello", "world", "lighthouse"];
console.log(without(words, ["lighthouse"]));

assertArraysEqual(words, ["hello", "world", "lighthouse"]);