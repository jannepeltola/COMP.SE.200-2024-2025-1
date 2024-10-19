import { expect } from 'chai';
import toNumber from '../src/toNumber.js';

describe('toNumber', () => {
  it('should return the same number when the input is a number', () => {
    expect(toNumber(3.2)).to.equal(3.2);
    expect(toNumber(Number.MIN_VALUE)).to.equal(5e-324);
    expect(toNumber(Infinity)).to.equal(Infinity);
    expect(toNumber(-Infinity)).to.equal(-Infinity);
  });

  it('should convert string numbers to numbers', () => {
    expect(toNumber('3.2')).to.equal(3.2);
    expect(toNumber('10')).to.equal(10);
    expect(toNumber('0')).to.equal(0);
  });

  it('should return NaN for non-numeric strings', () => {
    expect(toNumber('abc')).to.be.NaN;
    expect(toNumber('123abc')).to.be.NaN;
  });

  it('should trim whitespace around string numbers', () => {
    expect(toNumber('  3.2  ')).to.equal(3.2);
    expect(toNumber('\t10\n')).to.equal(10);
  });

  it('should handle binary string values correctly', () => {
    expect(toNumber('0b101')).to.equal(5);
    expect(toNumber('0b10')).to.equal(2);
    expect(toNumber('0b1111')).to.equal(15);
  });

  it('should handle octal string values correctly', () => {
    expect(toNumber('0o10')).to.equal(8);
    expect(toNumber('0o7')).to.equal(7);
  });

  it('should handle bad hexadecimal string values correctly', () => {
    expect(toNumber('-0x1')).to.be.NaN;
    expect(toNumber('0xGHI')).to.be.NaN;
    expect(toNumber('0xF')).to.equal(15);
  });

  it('should return NaN for symbol values', () => {
    const sym = Symbol('sym');
    expect(toNumber(sym)).to.be.NaN;
  });

  it('should return NaN for objects with symbols', () => {
    const objWithSymbol = { valueOf: () => Symbol('sym') };
    expect(toNumber(objWithSymbol)).to.be.NaN;
  });

  it('should convert objects to their primitive values', () => {
    const obj = { valueOf: () => 42 };
    expect(toNumber(obj)).to.equal(42);

    const objString = { valueOf: () => '3.2' };
    expect(toNumber(objString)).to.equal(3.2);
  });

  it('should convert objects without a valueOf method to NaN', () => {
    const obj = { };
    expect(toNumber(obj)).to.be.NaN;
  });

  it('should handle objects with custom toString methods', () => {
    const obj = {
      toString: () => '7'
    };
    expect(toNumber(obj)).to.equal(7);
  });

  it('should handle arrays properly', () => {
    expect(toNumber([10])).to.equal(10);
    expect(toNumber([1, 2, 3])).to.be.NaN;
  });

  it('should convert null and undefined to NaN', () => {
    expect(toNumber(null)).to.be.NaN;
    expect(toNumber(undefined)).to.be.NaN;
  });

  it('should handle boolean values correctly', () => {
    expect(toNumber(true)).to.equal(1);
    expect(toNumber(false)).to.equal(0);
  });
});
