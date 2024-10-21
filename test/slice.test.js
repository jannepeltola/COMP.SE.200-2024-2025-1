import { expect } from 'chai';
import slice from '../src/slice.js';

describe('slice', () => {
  const array = [1, 2, 3, 4];

  it('should return a slice from the start index', () => {
    expect(slice(array, 2)).to.deep.equal([3, 4]);
  });

  it('should return a slice from start to end index', () => {
    expect(slice(array, 1, 3)).to.deep.equal([2, 3]);
    expect(slice(array, 0, 2)).to.deep.equal([1, 2]);
  });

  it('should return an empty array if start is greater than end', () => {
    expect(slice(array, 3, 1)).to.deep.equal([]);
  });

  it('should return the entire array if no start or end is specified', () => {
    expect(slice(array)).to.deep.equal([1, 2, 3, 4]);
  });

  it('should handle negative start and end values as offsets from the end', () => {
    expect(slice(array, -2)).to.deep.equal([3, 4]);
    expect(slice(array, -3, -1)).to.deep.equal([2, 3]);
  });

  it('should handle start greater than array length', () => {
    expect(slice(array, 5)).to.deep.equal([]);
  });

  it('should handle negative start values larger than array length', () => {
    expect(slice(array, -10)).to.deep.equal([1, 2, 3, 4]);
  });

  it('should handle null or undefined arrays gracefully', () => {
    expect(slice(null)).to.deep.equal([]);
    expect(slice(undefined)).to.deep.equal([]);
  });

  it('should return an empty array when input array is empty', () => {
    expect(slice([], 1, 2)).to.deep.equal([]);
  });

  it('should handle mixed positive and negative indices', () => {
    expect(slice(array, -3, 3)).to.deep.equal([2, 3]);
    expect(slice(array, 1, -1)).to.deep.equal([2, 3]);
  });

  it('should handle limit values', () => {
    expect(slice(array, 0, 4)).to.deep.equal([1, 2, 3, 4]);
    expect(slice(array, 1, 3)).to.deep.equal([2, 3]);
    expect(slice(array, 0, 4)).to.deep.equal([1, 2, 3, 4]);
    expect(slice(array, -5, 4)).to.deep.equal([1, 2, 3, 4]);
  });

  it('should handle slice beyond array bounds gracefully', () => {
    expect(slice(array, 0, 10)).to.deep.equal([1, 2, 3, 4]);
    expect(slice(array, -10, 10)).to.deep.equal([1, 2, 3, 4]);
  });
});
