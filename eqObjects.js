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