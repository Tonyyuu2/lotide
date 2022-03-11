const map = (array, callback) => {
  let results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
}

const words = ["ground", "control", "to", "major", "tom"];
const numbers = [1, 2, 3, 4, 5]

const results1 = map(words, (word) => word[0]);
console.log(results1);

const results2 = map(words, (word) => word.length);
console.log(results2);

const results3 = map(numbers, (number) => number * 3);
console.log(results3);

const assertArraysEqual = function (array1, array2){
  let isEqual = eqArrays(array1, array2);
  if (isEqual){
    console.log(`Assertion Passed: ${array1} === ${array2}`);
  } else {
    console.log(`Assertion Failed: ${array1} !== ${array2}`);
  }
}

const eqArrays = function (array1, array2){
  if (array1.length !== array2.length){
    return false;
  }
  for (let i = 0; i < array1.length; i++){
    if (array1[i] !== array2[i]){
      return false
    }
  }
  return true
}

assertArraysEqual(results1, ["g", "c", "t", "m", "t"]);
assertArraysEqual(results2, [6, 7, 2, 5, 3]);
assertArraysEqual(results3, [3, 6, 9, 12 ,15]);