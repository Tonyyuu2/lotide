const eqArrays = require('./eqArrays');
const assertArraysEqual = require('./assertArraysEqual');

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

module.exports = eqObjects;