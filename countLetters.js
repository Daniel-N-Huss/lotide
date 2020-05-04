const countLetters = function(sentence) {
  const letterCount = {};
  for (let letter of sentence) {
    if (letter !== ' ') {
      if (letterCount[letter]) {
        letterCount[letter] += 1;
      } else {
        letterCount[letter] = 1;
      }
    }
  }
  return letterCount;
};

module.exports = countLetters;