/**
 * @file keys.test.js
 * @description Unit tests for the keys function (src/keys.js)
 *
 * Tests cover:
 * - Own enumerable property names of a class instance (excludes prototype keys)
 * - Index keys of a string
 * - Empty array for empty object
 * - Index keys of an array
 * - Keys of a plain object with properties
 * - Null/undefined input (expects empty array)
 *
 * Not tested:
 * - Symbol keys
 * - Non-enumerable properties
 *
 * Dependencies: Jest, Babel (for ES module support)
 */

import keys from '../../src/keys';

// Test cases for the `keys` function
describe('keys', () => {
  // Test case: should return own enumerable property names of object
  it('returns own enumerable property names of object', () => {
    function Foo() {
      this.a = 1;
      this.b = 2;
    }
    Foo.prototype.c = 3;
    expect(keys(new Foo())).toEqual(['a', 'b']);
  });

  // Test case: should return array of indices for array
  it('returns array of indices for string', () => {
    expect(keys('hi')).toEqual(['0', '1']);
  });

  // Test case: should return empty array for null and undefined
  it('returns empty array for empty object', () => {
    expect(keys({})).toEqual([]);
  });

  // Test case: should return keys of array
  it('returns keys of array', () => {
    expect(keys(['a', 'b', 'c'])).toEqual(['0', '1', '2']);
  });

  // Test case: should return keys of object with properties
  it('returns keys of object with properties', () => {
    const object = { 'a': 1, 'b': 2, 'c': 3 };
    expect(keys(object)).toEqual(['a', 'b', 'c']);
  });

  // Test case: should handle null or undefined
  it('handles null or undefined', () => {
    expect(keys(null)).toEqual([]);
    expect(keys(undefined)).toEqual([]);
  });
});