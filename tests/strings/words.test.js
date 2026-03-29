/**
 * @file words.test.js
 * @description Unit tests for the words function (src/words.js)
 *
 * Tests cover:
 * - Splitting a sentence into words with the default pattern
 * - Splitting with a custom regex pattern
 * - Empty string input (expects empty array)
 * - String with no words (punctuation only)
 * - Single word input
 * - String containing numbers mixed with letters
 *
 * Not tested:
 * - Unicode or non-Latin character strings
 * - Null/undefined input
 *
 * Dependencies: Jest, Babel (for ES module support)
 */

import words from '../../src/words';

// Test suite for words function
describe('words', () => {
  it('splits string into words with default pattern', () => {
    expect(words('fred, barney, & pebbles')).toEqual(['fred', 'barney', 'pebbles']);
  });

  // Test cases for custom pattern
  it('splits string with custom pattern', () => {
    expect(words('fred, barney, & pebbles', /[^, ]+/g)).toEqual(['fred', 'barney', '&', 'pebbles']);
  });

  // Test cases for string with leading and trailing spaces
  it('handles empty string', () => {
    expect(words('')).toEqual([]);
  });

  // Test cases for string with no words
  it('handles string with no words', () => {
    expect(words('!!!')).toEqual([]);
  });

  // Test cases for string with multiple spaces
  it('handles single word', () => {
    expect(words('hello')).toEqual(['hello']);
  });

  // Test cases for string with numbers
  it('handles string with numbers', () => {
    expect(words('hello123 world456')).toEqual(['hello123', 'world456']);
  });
});