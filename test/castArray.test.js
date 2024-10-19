import { expect } from 'chai';
import castArray from '../src/castArray.js';

describe('castArray', () => {
  it('should return an array when a primitive value is passed', () => {
    expect(castArray(1)).to.deep.equal([1]);
    expect(castArray('abc')).to.deep.equal(['abc']);
    expect(castArray(true)).to.deep.equal([true]);
  });

  it('should return an array when an object is passed', () => {
    expect(castArray({ a: 1 })).to.deep.equal([{ a: 1 }]);
  });

  it('should return an array when null or undefined is passed', () => {
    expect(castArray(null)).to.deep.equal([null]);
    expect(castArray(undefined)).to.deep.equal([undefined]);
  });

  it('should return an empty array when no argument is passed', () => {
    expect(castArray()).to.deep.equal([]);
  });

  it('should return the same array when an array is passed', () => {
    const array = [1, 2, 3];
    expect(castArray(array)).to.equal(array); // reference equality
  });

  it('should return an array of arguments when multiple values are passed', () => {
    expect(castArray(1, 2, 3)).to.deep.equal([1]);
  });

  it('should handle edge cases with special objects like Date, RegExp, etc.', () => {
    const date = new Date();
    expect(castArray(date)).to.deep.equal([date]);

    const regex = /test/;
    expect(castArray(regex)).to.deep.equal([regex]);
  });
});
