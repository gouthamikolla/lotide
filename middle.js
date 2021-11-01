/* eslint-disable no-unused-vars */
/* eslint-disable func-style */
/*function eqArrays(arr1, arr2) {
  return arr1[0] === arr2[0] && arr1[1] === arr2[1] && arr1[2] === arr2[2];
}

const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed:  ${actual}  === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Asserion Failed: ${actual} !== ${expected}`);
  }
};
*/

const eqArrays = require('./eqArrays');
const assertArraysEqual = require('./assertArraysEqual');

const middle = function(array) {
  let newArray = [];
  if (array.length === 1 || array.length === 2) {
    return newArray;
  } else {
    if (array.length % 2 === 0) {
      let idx = Math.floor(array.length / 2);
      newArray.push(array[idx - 1]);
      newArray.push(array[idx]);
    } else {
      let idx = Math.floor(array.length / 2);
      newArray.push(array[idx]);
    }
  }
  return newArray;
};

module.exports = middle;
