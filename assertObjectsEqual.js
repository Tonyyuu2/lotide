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
const assertArraysEqual = function (array1, array2){
  let isEqual = eqArrays(array1, array2);
  if (isEqual){
    console.log(`Assertion Passed: ${array1} === ${array2}`);
  } else {
    console.log(`Assertion Failed: ${array1} !== ${array2}`);
  }
}
const eqObjects = function(object1, object2) {
  let keyArray1 = Object.keys(object1);
  let keyArray2 = Object.keys(object2);
  
  if(keyArray1.length !== keyArray2.length) {
    return false;
  }
  
  for (const key of keyArray1) { // a index or b index 
    if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
      if (!eqArrays(object1[key], object2[key])){
        return false
      }
    } else if (object1[key] !== object2[key]){
      return false
    }
  }
  return true
};

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  let equalObjects = eqObjects(actual, expected);
  if (equalObjects) {
    console.log(`Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log (`Assertion failed: ${inspect(actual)} === ${inspect(expected)}`)
  }
};

assertObjectsEqual({ c: "1", d: ["2", 3] }, { c: "1", d: ["2", 3] })

