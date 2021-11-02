/* eslint-disable no-undef */
const assert = require('chai').assert;
const tail = require('../tail');

describe("#tail", () => {
  it("returns 'LighthouseLabs' for ['Hello', 'Lighthouse', 'Labs']", () => {

    const result = tail(["Hello", "Lighthouse", "Labs"]);
    assert.strictEqual(result.join(),[ "Lighthouse", "Labs"].join());
  });
});
