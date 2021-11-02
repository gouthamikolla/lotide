/* eslint-disable func-style */
const map = function(words, callback) {
  const results = [];
  for (let item of words) {
    results.push(callback(item));
  }
  return results;
};
module.exports = map;

/*const words = ["ground", "control", "to", "major", "tom"];

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
*/
