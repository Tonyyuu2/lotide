const assertEqual = require('./assertEqual');

const countLetters = function (string) {
  const results = {};
  let noWhiteSpace = string.split(' ').join('');
  for(let character of noWhiteSpace) {
    if(results[character]) { //if character exists in results
      results[character] += 1 // then add one to it
    } else { // if not
      results[character] = 1 // create it inside results with a value of 1
    }
  }
  return results
}
module.exports = countLetters;