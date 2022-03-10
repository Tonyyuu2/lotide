const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`Assertion Failed: ${actual} !== ${expected}`);
  }
};
// function takes in a string and returns a count of each of the letters in that string 

const countLetters = function (string) {
  const results = {};
  let noWhiteSpace = string.split(' ').join('');
  for(let character of noWhiteSpace) {
    if(results[character]) { //if character exists in results
      results[character] += 1 // then add one to it
    } else { // if not
      results[character] = 1 // create it inside results with a value of 1
    }
  }
  return results
}


console.log(countLetters("lighthouse in the house"))