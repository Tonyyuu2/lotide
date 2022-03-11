const findKey = (object, callback) => {
  for (let key in object) {
    // console.log('key: ', key)
    // console.log('object[key]: ', object[key])
    // console.log('callback(object[key]): ', callback(object[key]))
    if (callback(object[key])){
      return key
    }
  } 
} 

let result = findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2) // => "noma"

console.log(result)

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`Assertion Failed: ${actual} !== ${expected}`);
  }
};

assertEqual(result, "noma")





// let thing = findKey({
//   "Blue Hill": { stars: 1 },
//   "Akaleri":   { stars: 3 },
//   "noma":      { stars: 2 },
//   "elBulli":   { stars: 3 },
//   "Ora":       { stars: 2 },
//   "Akelarre":  { stars: 3 }
// }, (x) => {
//   // console.log('x: ', x) //{ stars: 1 }
//   return x.stars === 2 // { stars: 1 }.stars === 2
// }) // => "noma" //{stars: 1}.stars === 2