const eqArrays = function (array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]){
      return false
    }
  }
  return true;
}
const assertArraysEqual = function (array1, array2){
  let isEqual = eqArrays(array1, array2);
  if (isEqual){
    console.log(`Assertion Passed: ${array1} === ${array2}`);
  } else {
    console.log(`Assertion Failed: ${array1} !== ${array2}`);
  }
}

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

console.log(middle([1, 2, 3, 4, 5, 6, 7]));