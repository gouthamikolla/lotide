/* eslint-disable no-unused-vars */
const assertEqual = require('./assertEqual');
const head = function(array) {
  return array.length > 0 ? array[0] : undefined;
};


module.exports = head;