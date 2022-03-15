const assertArraysEqual = require('./assertArraysEqual');
const eqArrays = require('./eqArrays');

const without = function(source, itemsToRemove){
 
  let newArray = [];
  for (const element of source){
    if(!itemsToRemove.includes(element)){ //does not include
      newArray.push(element)
    }
  }
  return newArray
}

module.exports = without;