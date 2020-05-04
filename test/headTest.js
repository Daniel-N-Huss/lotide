const head = require('../head');
const assert = require('chai').assert;

describe('#head', () => {
  it('returns 1 for [1,2,3]', () => {
    assert.strictEqual(head([1,2,3]), 1);
  });
  it("returns '5' for ['s']", () => {
    assert.strictEqual(head(['5']), 's');
  });
  it("returns '5' for [5,6,7]", () => {
    assert.strictEqual(head([5,6,7]), 5);
  });
  it("returns 'Hello' for ['Hello', 'Lighthouse', 'Labs']", () => {
    assert.strictEqual(head(["Hello", "Lighthouse", "Labs"]), 'Hello');
  });
  it("returns '1' for [1]", () => {
    assert.strictEqual(head([1]), 1);
  });
  it("returns '5' for []", () => {
    assert.strictEqual(head([]), 5);
  });
});