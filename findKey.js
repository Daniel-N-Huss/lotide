const findKey = function(object, callback) {
  for (const key in object) {
    if (callback(object[key])) {
      return key;
    } else if (callback(key)) {
      return key;
    }
  }
};

module.exports = findKey;