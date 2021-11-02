/* eslint-disable func-style */

//const eqArrays = require('./eqArrays');
//const assertArraysEqual = require('./assertArraysEqual');
 
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