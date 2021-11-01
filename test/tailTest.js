/* eslint-disable no-undef */
const assertEqual = require('../assertEqual');
const tail = require('../tail');

const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result.join(), ["Lighthouse", "Labs"].join());