const eqArrays = require('./eqArrays');
const assertArraysEqual = require('./assertArraysEqual');

const takeUntil = (array, stopCondition) => {
  let results = [];
  for (let number of array) {
    if (stopCondition(number)){
      break
    } else {
      results.push(number)
    }
  }
  return results
}

module.exports = takeUntil
