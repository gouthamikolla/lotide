const eqArrays = require('./eqArrays');
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

module.exports = eqObjects;
/*const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertEqual(eqObjects(ab, ba), true); // => true

const abc = { a: "1", b: "2", c: "3" };
assertEqual(eqObjects(ab, abc), false); // => false

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertEqual(eqObjects(cd, dc), true); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
assertEqual(eqObjects(cd, cd2), false); // => false
*/
const eqArrays = (arr1, arr2) => {
  let key = true;

  // Check if both arrays have the same length
  if (arr1.length !== arr2.length) {
    return false;
  }

  // Check elements in the same position in each array are equal
  for (let p in arr1) {
    if (arr1[p] !== arr2[p]) {
      key = false;
    }
  }
  return key;
};

// Returns true if both objects have identical keys with identical values
const eqObjects = (obj1, obj2) => {
  const obj1Keys = Object.keys(obj1);
  const obj2Keys = Object.keys(obj2);

  if (obj1Keys.length === obj2Keys.length) {
    for (let value in obj1) {
      if (Array.isArray(obj1[value]) && Array.isArray(obj2[value])) {
        if (eqArrays(obj1[value], obj2[value]) === false) {
          return false;
        }
      } else {
        if (obj1[value] !== obj2[value]) {
          return false;
        }
      }
    }
  } else {
    return false;
  }
  return true;
};

// Assert if 2 objects are the same
const assertObjectsEqual = function(actual, expected) {
  // Use to show content of objects
  const inspect = require('util').inspect;

  // Print out assertion message
  if (eqObjects(actual, expected) === true) {
    console.log(`✅✅✅ Assertion Passed: ${inspect(expected)} === ${inspect(actual)}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${inspect(expected)} !== ${inspect(actual)}`);
  }
};

// Test case
assertObjectsEqual({ a: '1', b: 2 }, { b: 2, a: '1' }); // <= true
assertObjectsEqual({ a: "1", b: "2" }, { b: "2", a: "1" }); // <= true
assertObjectsEqual({ a: "1", b: "2" }, { a: "1", b: "2", c: "3" }); // <= false
assertObjectsEqual({ c: "1", d: ["2", 3] }, { d: ["2", 3], c: "1" }); // <= true
assertObjectsEqual({ c: "1", d: ["2", 3] }, { c: "1", d: ["2", 3, 4] }); // <= false