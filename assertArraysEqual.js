/* eslint-disable no-undef */
/* eslint-disable func-style */
/*function eqArrays(arr1, arr2) {
  return arr1[0] === arr2[0] && arr1[1] === arr2[1] && arr1[2] === arr2[2];
}
*/

const eqArrays = require('./eqArrays');

const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    console.log(`✅✅✅ Assertion Passed:  ${arr1}  === ${arr2}`);
  } else {
    console.log(`🛑🛑🛑 Asserion Failed: ${arr1} !== ${arr2}`);
  }
};


module.exports = assertArraysEqual;
