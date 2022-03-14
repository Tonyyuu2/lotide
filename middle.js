const eqArrays = require('./eqArrays');
const assertArraysEqual = require('./assertArraysEqual');

const middle = function (array) {
  if (array.length < 3) {
    return []
  }
  let middleArray = [];
  if (array.length % 2 === 0){
    let index1 = (array.length / 2) - 1;
    let index2 = (array.length / 2);
    middleArray.push(array[index1], array[index2]);
  } else {
    let index1 = Math.floor(array.length / 2);
    middleArray.push(array[index1]);
  }

  return middleArray;
}; 

// console.log(middle([1, 2, 3, 4, 5, 6, 7]));

module.exports = middle;