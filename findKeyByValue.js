const assertEqual = require('./assertEqual');

const findKeyByValue = function (object, value) {
  for (const key in object) {
    if (object[key] === value){ //value that lives at key inside object
      return key
    } 
  }
  return undefined
}

module.exports = findKeyByValue;
