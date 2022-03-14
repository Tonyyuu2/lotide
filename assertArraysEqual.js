const eqArrays = require('./eqArrays');

const assertArraysEqual = function (array1, array2){
  let isEqual = eqArrays(array1, array2);
  if (isEqual){
    console.log(`Assertion Passed: ${array1} === ${array2}`);
  } else {
    console.log(`Assertion Failed: ${array1} !== ${array2}`);
  }
}

// assertArraysEqual([1, 2, 3], [1, 2, 4]);

module.exports = assertArraysEqual;