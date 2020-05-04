const middle = function(array) {
  let resultArray = [];
  
  if (array.length > 2) {
    let halfArray = array.length / 2;
    if (array.length % 2 === 0) {
      resultArray.push(array[halfArray - 1]);
      resultArray.push(array[halfArray]);
    } else {
      resultArray.push(array[Math.floor(halfArray)]);
    }
  }
  console.log(resultArray);
  return resultArray;
};

module.exports = middle;