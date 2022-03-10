// return all indices in the string where each character is found

const letterPositions = function(sentence) {
  const results = {};
  for (let i = 0; i < sentence.length; i++) {
    if (!results[sentence[i]]){ // if h does no exist in results
      results[sentence[i]] = [i] // result[h] = [0]
    } else {
      results[sentence[i]].push(i) // current index(itirration) gets added to results[h] 
    }
  }
  return results;
};

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

assertArraysEqual(letterPositions("hello").e, [1]);