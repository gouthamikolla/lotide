const letterPositions = function(sentence) {
  const results = {};
  // logic to update results here
  for (let idx = 0; idx < sentence.length; idx++) {
    //console.log(idx, sentence[idx]);
    if (results[sentence[idx]]) {
      results[sentence[idx]].push(idx);
    } else {
      results[sentence[idx]] = [idx];
    }
  }
  //console.log(results);
  return results;
};

module.exports = letterPositions;

/*assertArraysEqual(letterPositions("hello")["h"], [0]);
assertArraysEqual(letterPositions("hello")["e"], [1]);
assertArraysEqual(letterPositions("hello")["l"], [2, 3]);
assertArraysEqual(letterPositions("hello")["o"], [4]);
*/