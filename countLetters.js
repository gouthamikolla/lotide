const countLetters = function(str) {
  let result = {};
  for (let letter of str) {
    //console.log(result[letter]);
    if (result[letter]) {
      result[letter] += 1;
    } else result[letter] = 1;
  }
  return result;
};

/*const output = {
  l: 1,
  i: 2,
  g: 1,
  h: 4,
  t: 2,
  o: 2,
  u: 2,
  s: 2,
  e: 3,
  n: 1,
};
*/

module.exports = countLetters;