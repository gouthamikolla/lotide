function eqArrays(arr1, arr2) {
  return arr1[0] === arr2[0] && arr1[1] === arr2[1] && arr1[2] === arr2[2];
}

const assertArraysEqual = function (arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    console.log(`✅✅✅ Assertion Passed:  ${arr1}  === ${arr2}`);
  } else {
    console.log(`🛑🛑🛑 Asserion Failed: ${arr1} !== ${arr2}`);
  }
};

const letterPositions = function (sentence) {
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

assertArraysEqual(letterPositions("hello")["h"], [0]);
assertArraysEqual(letterPositions("hello")["e"], [1]);
assertArraysEqual(letterPositions("hello")["l"], [2, 3]);
assertArraysEqual(letterPositions("hello")["o"], [4]);
