const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`Assertion Failed: ${actual} !== ${expected}`);
  }
};

const eqArrays = function (array1, array2){
  for (let i = 0; i < array1.length; i++){
    for(let y = 0; y < array2.length; y++){
      if (array1[i] === array2[y]){
        return true
      } else {
        return false
      }
    }
  }
}
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
assertEqual(eqArrays([1, 2, '3'], [1, 2, 3]), false);
assertEqual(eqArrays([1, 'hello', 3], [1, 2, 3]), false);
assertEqual(eqArrays([3, 2, 3], [1, 2, 3]), false);