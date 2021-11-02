/* eslint-disable func-style */
const without = function(source, itemsToRemove) {
  let newSource = [];
  for (let ele of source) {
    if (!itemsToRemove.includes(ele)) newSource.push(ele);
  }
  console.log(newSource);
};
 
module.exports = without;
/*without([1, 2, 3], [1]); // => [2, 3]
without(["1", "2", "3"], [1, 2, "3"]); // => ["1", "2"]

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);
*/