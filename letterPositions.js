const letterPositions = function(sentence) {
  const results = {};
  for (let letter = 0; letter < sentence.length; letter++) {
    if (results[sentence[letter]]) {
      results[sentence[letter]].push(letter);
    } else
      results[sentence[letter]] = [letter];
    console.log(results);
  }
  return results;
};

module.exports = letterPositions;