
// //again
// //const without = function(source, itemsToRemove) {
// //  let sourceToEdit = [...source];
// //  for (let x = 0; x < source.length; x++) {
// //    const indexOfItemInSource = itemsToRemove.indexOf(source[x])
// //    if (indexOfItemInSource > -1) {
// //      sourceToEdit.splice(x, 1)
// //    }
// //  }
// //  return sourceToEdit;
// //};

// //first try
// // const without = function(source, itemsToRemove) {
// //   let sourceToEdit = [...source];
// //   for (let x = 0; x < source.length; x++) {
// //     for (let y = 0; y < itemsToRemove.length; y++) {
// //       if (source[x] === itemsToRemove[y]) {
// //         sourceToEdit.splice(x, 1);
// //       }
// //     }
// //   }
// //   console.log(source);
// //   return sourceToEdit;
// // };

// console.log(without([1, 2, 3], [1]));
// console.log(without(["1", "2", "3"], [1, 2, "3"]));
// console.log(without(['aba', 'bcb', 'b'], ['aba', 'b']));

// const words = ["hello", "world", "lighthouse"];
// console.log(without(words, ["lighthouse"]));

// assertArraysEqual(words, ["hello", "world", "lighthouse"]);