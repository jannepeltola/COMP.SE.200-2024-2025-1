// NOTE: function is broken, fix here:
// const divide = createMathOperation((dividend, divisor) => dividend / divisor, 1)

import { expect } from 'chai';
import divide from '../src/divide.js';

describe('divide', () => {
  it('should divide two positive numbers correctly', () => {
    expect(divide(6, 4)).to.equal(1.5);
    expect(divide(10, 2)).to.equal(5);
  });

  it('should handle division by zero', () => {
    expect(divide(6, 0)).to.be.Infinity;
    expect(divide(-6, 0)).to.be.NegativeInfinity;
    expect(divide(0, 0)).to.be.NaN;
  });

  it('should divide negative numbers correctly', () => {
    expect(divide(-6, 3)).to.equal(-2);
    expect(divide(6, -3)).to.equal(-2);
    expect(divide(-6, -3)).to.equal(2);
  });

  it('should handle division of zero', () => {
    expect(divide(0, 5)).to.equal(0);
    expect(divide(0, -5)).to.equal(0);
  });

  it('should handle division by fractions', () => {
    expect(divide(1, 0.5)).to.equal(2);
    expect(divide(5, 2.5)).to.equal(2);
  });

  it('should return NaN when divisor is not a number', () => {
    expect(divide(6, 'a')).to.be.NaN;
    expect(divide(6, null)).to.be.NaN;
    expect(divide(6, undefined)).to.be.NaN;
  });

  it('should return NaN when dividend is not a number', () => {
    expect(divide('a', 6)).to.be.NaN;
    expect(divide(null, 6)).to.be.NaN;
    expect(divide(undefined, 6)).to.be.NaN;
  });

  it('should handle edge cases with large numbers', () => {
    expect(divide(Number.MAX_VALUE, 2)).to.equal(Number.MAX_VALUE / 2);
    expect(divide(-Number.MAX_VALUE, 2)).to.equal(-Number.MAX_VALUE / 2);
  });
});
