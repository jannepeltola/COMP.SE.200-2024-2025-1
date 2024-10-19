import { expect } from 'chai';
import toString from '../src/toString.js';

describe('toString', () => {
  it('should return an empty string for null and undefined values', () => {
    expect(toString(null)).to.equal('');
    expect(toString(undefined)).to.equal('');
  });

  it('should return the same string when input is already a string', () => {
    expect(toString('hello')).to.equal('hello');
    expect(toString('')).to.equal('');
  });

  it('should handle numbers correctly', () => {
    expect(toString(0)).to.equal('0');
    expect(toString(-0)).to.equal('-0');
    expect(toString(42)).to.equal('42');
    expect(toString(Infinity)).to.equal('Infinity');
    expect(toString(-Infinity)).to.equal('-Infinity');
  });

  it('should handle boolean values', () => {
    expect(toString(true)).to.equal('true');
    expect(toString(false)).to.equal('false');
  });

  it('should convert arrays to strings', () => {
    expect(toString([1, 2, 3])).to.equal('1,2,3');
    expect(toString([null, undefined, 'a'])).to.equal(',,a');
    expect(toString([])).to.equal('');
  });

  it('should convert objects to strings', () => {
    expect(toString({})).to.equal('[object Object]');
    expect(toString({ a: 1 })).to.equal('[object Object]');
    expect(toString({ toString: () => 'custom string' })).to.equal('custom string');
  });

  it('should convert symbols to their string representation', () => {
    const sym = Symbol('example');
    expect(toString(sym)).to.equal('Symbol(example)');
  });

  it('should convert functions to strings', () => {
    const func = () => {};
    expect(toString(func)).to.equal(func.toString());
  });

  it('should convert big integers to strings', () => {
    expect(toString(BigInt(123))).to.equal('123');
  });

  it('should convert nested arrays to strings', () => {
    expect(toString([1, [2, [3]]] )).to.equal('1,2,3');
    expect(toString([[null, undefined], [1, 2]])).to.equal(',,1,2');
  });

  it('should handle special numeric cases', () => {
    expect(toString(NaN)).to.equal('NaN');
    expect(toString(1/0)).to.equal('Infinity');
    expect(toString(-1/0)).to.equal('-Infinity');
  });
});
