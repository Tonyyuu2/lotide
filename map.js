const eqArrays = require('./eqArrays');
const assertArraysEqual = require('./assertArraysEqual');


const map = (array, callback) => {
  let results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
}

module.exports = map;
