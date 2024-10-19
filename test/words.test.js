import { expect } from 'chai';
import words from '../src/words.js';

describe('words', () => {
  it('should return an empty array for an empty string', () => {
    expect(words('')).to.deep.equal([]);
  });

  it('should split a simple string into words', () => {
    expect(words('fred, barney, & pebbles')).to.deep.equal(['fred', 'barney', 'pebbles']);
  });

  it('should split a string with special characters', () => {
    expect(words('hello-world')).to.deep.equal(['hello', 'world']);
    expect(words('foo@bar.com')).to.deep.equal(['foo', 'bar', 'com']);
  });

  it('should handle strings with multiple spaces', () => {
    expect(words('   foo   bar   ')).to.deep.equal(['foo', 'bar']);
    expect(words('foo   bar    baz')).to.deep.equal(['foo', 'bar', 'baz']);
  });

  it('should return words using a custom pattern', () => {
    expect(words('fred, barney, & pebbles', /[^, ]+/g)).to.deep.equal(['fred', 'barney', '&', 'pebbles']);
    expect(words('abc123 def456', /\S+/g)).to.deep.equal(['abc123', 'def456']);
  });

  it('should handle Unicode words correctly', () => {
    expect(words('こんにちは世界')).to.deep.equal(['こんにちは', '世界']); // "Hello World" in Japanese
    expect(words('naïve façade résumé')).to.deep.equal(['naïve', 'façade', 'résumé']);
  });

  it('should return an empty array for non-matching patterns', () => {
    expect(words('abc', /xyz/g)).to.deep.equal([]);
    expect(words('foo bar', /baz/g)).to.deep.equal([]);
  });

  it('should handle strings with mixed character types', () => {
    expect(words('abc123 xyz!')).to.deep.equal(['abc123', 'xyz']);
    expect(words('2021 is the year')).to.deep.equal(['2021', 'is', 'the', 'year']);
  });
});
