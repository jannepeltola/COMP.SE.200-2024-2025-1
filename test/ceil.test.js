import { expect } from 'chai';
import ceil from '../src/ceil.js';



describe('ceil', () => {
  it('should round up to the nearest integer by default', () => {
    expect(ceil(4.006)).to.equal(5);
    expect(ceil(4.5)).to.equal(5);
    expect(ceil(4.999)).to.equal(5);
  });

  it('should round up to the specified precision', () => {
    expect(ceil(6.004, 2)).to.equal(6.01);  // round to 2 decimal places
    expect(ceil(4.1234, 3)).to.equal(4.124);  // round to 3 decimal places
  });

  it('should handle negative precision', () => {
    expect(ceil(6040, -2)).to.equal(6100); // round up to the nearest hundred
    expect(ceil(990, -1)).to.equal(1000); // round up to the nearest ten
  });

  it('should handle edge cases with zero precision', () => {
    expect(ceil(7.000)).to.equal(7);  // exact integer
    expect(ceil(7)).to.equal(7);  // already an integer
  });

  it('should handle large numbers', () => {
    expect(ceil(123456.789, 2)).to.equal(123456.79);
    expect(ceil(123456789.123456, -5)).to.equal(123460000);
  });

  it('should handle negative numbers', () => {
    expect(ceil(-4.006)).to.equal(-4);  // round up toward zero
    expect(ceil(-6.004, 2)).to.equal(-6);  // round to 2 decimal places
    expect(ceil(-6040, -2)).to.equal(-6000);  // round up to the nearest hundred
  });

  it('should handle NaN and other invalid inputs gracefully', () => {
    expect(ceil(NaN)).to.be.NaN;
    expect(ceil('abc')).to.be.NaN;
    expect(ceil(null)).to.equal(0);
    expect(ceil(undefined)).to.equal(0);
  });
});
