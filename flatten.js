const flatten = function(array) {

  let flatArray = [];

  for (const item of array) {
    if (Array.isArray(item)) {
      flatArray = flatArray.concat(flatten(item))
    } else {
       flatArray.push(item);
    }
  }
  return flatArray;
};

module.exports = flatten;