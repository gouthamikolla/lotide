const findKeyByValue = function(obj, val) {
  let key;
  for (const property in obj) {
    //console.log(`${property}: ${obj[property]}`);
    if (obj[property] === val) {
      key = property;
      return key;
    }
  }
  return key;
};

module.exports = findKeyByValue;
/*const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama: "The Wire",
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
*/