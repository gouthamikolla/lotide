/* eslint-disable func-style */
function eqArrays(arr1, arr2) {
  return arr1[0] === arr2[0] && arr1[1] === arr2[1] && arr1[2] === arr2[2];
}

const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    console.log(`✅✅✅ Assertion Passed:  ${arr1}  === ${arr2}`);
  } else {
    console.log(`🛑🛑🛑 Asserion Failed: ${arr1} !== ${arr2}`);
  }
};

const map = function(words, callback) {
  const results = [];
  for (let item of words) {
    results.push(callback(item));
  }
  return results;
};
const words = ["ground", "control", "to", "major", "tom"];

//const results1 = map(words, (word) => word[0]);
//console.log(results1);

assertArraysEqual(
  map(words, (word) => word[0]),
  ["g", "c", "t", "m", "t"]
);

assertArraysEqual(
  map(words, (word) => word.length),
  [6, 7, 2, 5, 3]
);
