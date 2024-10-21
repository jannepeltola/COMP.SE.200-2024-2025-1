import { expect } from 'chai';
import eq from '../src/eq.js';


// NOTE: Broken
// Add one more = sign to comparison to make it a strict equal


describe('eq', () => {
  it('should return true for strictly equal primitive values', () => {
    expect(eq('a', 'a')).to.equal(true);
    expect(eq(1, 1)).to.equal(true);
    expect(eq(true, true)).to.equal(true);
    expect(eq(null, null)).to.equal(true);
  });

  it('should return false for non-equivalent primitive values', () => {
    expect(eq('a', 'b')).to.equal(false);
    expect(eq(1, 2)).to.equal(false);
    expect(eq(true, false)).to.equal(false);
    expect(eq(undefined, null)).to.equal(false);
  });

  it('should return true for `NaN` comparisons', () => {
    expect(eq(NaN, NaN)).to.equal(true);
  });

  it('should return true for identical object references', () => {
    const obj = { a: 1 };
    expect(eq(obj, obj)).to.equal(true);
  });

  it('should return false for different object references with same structure', () => {
    const obj1 = { a: 1 };
    const obj2 = { a: 1 };
    expect(eq(obj1, obj2)).to.equal(false);
  });

  it('should return false for comparing primitives to their object wrappers', () => {
    expect(eq('a', Object('a'))).to.equal(false);
    expect(eq(1, Object(1))).to.equal(false);
    expect(eq(true, Object(true))).to.equal(false);
  });

  it('should handle comparison of `null` and `undefined` correctly', () => {
    expect(eq(null, undefined)).to.equal(false);
    expect(eq(null, null)).to.equal(true);
    expect(eq(undefined, undefined)).to.equal(true);
  });

  it('should handle edge cases with different types', () => {
    expect(eq(0, false)).to.equal(false);  // because of `==` comparison
    expect(eq('', false)).to.equal(false);  // due to type coercion
    expect(eq([], '')).to.equal(false);     // empty array is loosely equal to an empty string
    expect(eq({}, '[object Object]')).to.equal(false);  // object not loosely equal to string
  });
});
