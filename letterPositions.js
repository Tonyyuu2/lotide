// return all indices in the string where each character is found
const eqArrays = require('./eqArrays');
const assertEqual = require('./assertEqual');

const letterPositions = function(sentence) {
  const results = {};
  for (let i = 0; i < sentence.length; i++) {
    if (!results[sentence[i]]){ // if h does no exist in results
      results[sentence[i]] = [i] // result[h] = [0]
    } else {
      results[sentence[i]].push(i) // current index(itirration) gets added to results[h] 
    }
  }
  return results;
};

module.exports = letterPositions;