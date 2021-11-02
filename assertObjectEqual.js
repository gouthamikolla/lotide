/* eslint-disable func-style */
/* eslint-disable no-undef */

function eqArrays(arr1, arr2) {
  return arr1[0] === arr2[0] && arr1[1] === arr2[1] && arr1[2] === arr2[2];
}

const eqObjects = function(object1, object2) {
  let objSame;
  if (Object.keys(object1).length === Object.keys(object2).length) {
    for (let key of Object.keys(object1)) {
      if (Array.isArray(object2[key]) && Array.isArray(object1[key]))
        objSame = eqArrays(object2[key], object1[key]);
      else objSame = object2[key] === object1[key];
    }
  } else objSame = false;

  return objSame;
};

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  if (eqObjects(actual, expected) === true) {
    console.log(`✅✅✅ Assertion Passed: ${inspect(expected)} === ${inspect(actual)}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${inspect(expected)} !== ${inspect(actual)}`);
  }
};

assertObjectsEqual({ a: '1', b: 2 }, { b: 2, a: '1' }); // <= true
assertObjectsEqual({ a: "1", b: "2" }, { b: "2", a: "1" }); // <= true
assertObjectsEqual({ a: "1", b: "2" }, { a: "1", b: "2", c: "3" }); // <= false
assertObjectsEqual({ c: "1", d: ["2", 3] }, { d: ["2", 3], c: "1" }); // <= true
assertObjectsEqual({ c: "1", d: ["2", 3] }, { c: "1", d: ["2", 3, 4] }); // <= false