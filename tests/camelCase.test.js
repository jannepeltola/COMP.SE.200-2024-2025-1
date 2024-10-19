import { expect } from 'chai';
import camelCase from '../src/camelCase.js';

describe('camelCase', () => {
  it('should convert regular strings to camelCase', () => {
    expect(camelCase('Foo Bar')).to.equal('fooBar');
    expect(camelCase('--foo-bar--')).to.equal('fooBar');
    expect(camelCase('__FOO_BAR__')).to.equal('fooBar');
  });

  it('should return empty string when input is an empty string', () => {
    expect(camelCase('')).to.equal('');
  });

  it('should handle strings with special characters', () => {
    expect(camelCase('foo-bar!')).to.equal('fooBar');
    expect(camelCase('foo@bar')).to.equal('fooBar');
  });

  it('should handle strings with numbers', () => {
    expect(camelCase('foo123Bar')).to.equal('foo123Bar');
    expect(camelCase('123fooBar')).to.equal('123fooBar');
  });

  it('should handle strings with multiple spaces', () => {
    expect(camelCase('foo   bar')).to.equal('fooBar');
    expect(camelCase('    Foo Bar   ')).to.equal('fooBar');
  });

  it('should handle non-string input by converting to string', () => {
    expect(camelCase(123)).to.equal('123');
    expect(camelCase(null)).to.equal('');
    expect(camelCase(undefined)).to.equal('');
    expect(camelCase([])).to.equal('');
    expect(camelCase(['Foo', 'Bar'])).to.equal('fooBar');
  });

  it('should handle strings with apostrophes correctly', () => {
    expect(camelCase("I'm Foo Bar")).to.equal('imFooBar');
    expect(camelCase("I'm Foo")).to.equal('imFoo');
  });
});
