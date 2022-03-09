const eqArrays = function (array1, array2){
  if (array1.length !== array2.length){
    return false;
  }
  for (let i = 0; i < array1.length; i++){
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

const without = function(source, itemsToRemove){
  // let newArray = [];
  // for (let i = 0; i < source.length; i++){
  //   if(!itemsToRemove.includes(source[i])){ //does not include
  //     newArray.push(source[i])
  //   }
  // }
  // return newArray
  let newArray = [];
  for (const element of source){
    if(!itemsToRemove.includes(element)){ //does not include
      newArray.push(element)
    }
  }
  return newArray
}


// if element we're looking at is in the itemsToRemove
  // we don't want it 

console.log(without([1, 2, 3], [1])) // => [2, 3]
console.log(without(["1", "2", "3"], [1, 2, "3"])) // => ["1", "2"]
