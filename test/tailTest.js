const tail = require('../tail.js');
const assert = require('chai').assert;

describe('#Tail Unit Tests', () => {

  it('returns ["Lighthouse", "Labs"] when given ["yo yo", "Lighthouse", "Labs"]', () => {
    assert.deepEqual(tail(["yo yo", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"]);
  });

  it('does not return "[1]" when given [0, 1, 2, 3]', () => {
    assert.notDeepEqual(tail([0, 1, 2, 3]), [1]);
  });

  it('returns [] when given []', () => {
    assert.deepEqual(tail([]), []);
  });
  it('returns [] when given [1]', () => {
    assert.deepEqual(tail([1]), []);
  });
});