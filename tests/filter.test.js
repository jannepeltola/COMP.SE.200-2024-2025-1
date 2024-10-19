import { expect } from 'chai';
import filter from '../src/filter.js';

describe('filter', () => {
  it('should return an array of elements that match the predicate', () => {
    const users = [
      { user: 'barney', active: true },
      { user: 'fred', active: false }
    ];
    const result = filter(users, ({ active }) => active);
    expect(result).to.deep.equal([{ user: 'barney', active: true }]);
  });

  it('should return an empty array if no elements match the predicate', () => {
    const users = [
      { user: 'barney', active: false },
      { user: 'fred', active: false }
    ];
    const result = filter(users, ({ active }) => active);
    expect(result).to.deep.equal([]);
  });

  it('should return all elements if all match the predicate', () => {
    const numbers = [1, 2, 3, 4, 5];
    const result = filter(numbers, (num) => num > 0);
    expect(result).to.deep.equal([1, 2, 3, 4, 5]);
  });

  it('should return an empty array when input is null or undefined', () => {
    expect(filter(null, () => true)).to.deep.equal([]);
    expect(filter(undefined, () => true)).to.deep.equal([]);
  });

  it('should return an empty array when input array is empty', () => {
    expect(filter([], () => true)).to.deep.equal([]);
  });

  it('should pass the correct arguments to the predicate function', () => {
    const array = ['a', 'b', 'c'];
    const spy = (value, index, arr) => {
      expect(value).to.equal(array[index]);
      expect(arr).to.equal(array);
      return true;
    };
    filter(array, spy);
  });

  it('should handle predicates that return falsy values correctly', () => {
    const numbers = [1, 2, 3, 4, 5];
    const result = filter(numbers, (num) => num % 2 === 0); // even numbers only
    expect(result).to.deep.equal([2, 4]);
  });

  it('should handle non-function predicates gracefully', () => {
    const array = [1, 2, 3];
    expect(() => filter(array, null)).to.throw(TypeError);
    expect(() => filter(array, undefined)).to.throw(TypeError);
  });
});
