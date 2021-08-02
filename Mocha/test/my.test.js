var { expect } = require('chai');
var assert = require('assert');
describe('Array', function () {
  describe('#indexOf()', function () {
    it('should return -1 when the value is not present', function () {
      assert.equal([1, 2, 3].indexOf(4), -1);
    });
  });
  describe('#indexOf()', function () {
    it('should return -1 when the value is not present', function () {
      // Target object deeply (but not strictly) equals `{a: 1}`
      expect({ a: 1 }).to.deep.equal({ a: 1 });
      expect({ a: 1 }).to.not.equal({ a: 1 });

      // Target array deeply (but not strictly) includes `{a: 1}`
      expect([{ a: 1 }]).to.deep.include({ a: 1 });
      expect([{ a: 1 }]).to.not.include({ a: 1 });
    });
  });
});