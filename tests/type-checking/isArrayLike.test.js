/**
 * @file isArrayLike.test.js
 * @description Unit tests for the isArrayLike function (src/isArrayLike.js)
 *
 * Tests cover:
 * - Array (expects true)
 * - String (expects true — has a numeric length)
 * - Arguments object (expects true)
 * - Function and arrow function (expect false)
 * - Null, undefined, number (all expect false)
 * - Plain object without a length property (expects false)
 * - Object with a non-numeric length property (expects false)
 *
 * Not tested:
 * - TypedArrays (which are also array-like)
 * - DOM NodeList or HTMLCollection
 *
 * Dependencies: Jest, Babel (for ES module support)
 */

import isArrayLike from '../../src/isArrayLike';

// Test suite for isArrayLike function
describe('isArrayLike', () => {
  // Test case: should return true for array
  it('returns true for array', () => {
    expect(isArrayLike([1, 2, 3])).toBe(true);
  });

  // Test case: should return true for string
  it('returns true for string', () => {
    expect(isArrayLike('abc')).toBe(true);
  });

  // Test case: should return true for arguments object
  it('returns true for arguments object', () => {
    function test() {
      expect(isArrayLike(arguments)).toBe(true);
    }
    test();
  });

  // Test case: should return false for function
  it('returns false for function', () => {
    expect(isArrayLike(Function)).toBe(false);
    expect(isArrayLike(() => {})).toBe(false);
  });

  // Test case: should return false for boolean
  it('returns false for null', () => {
    expect(isArrayLike(null)).toBe(false);
  });

  // Test case: should return false for undefined
  it('returns false for undefined', () => {
    expect(isArrayLike(undefined)).toBe(false);
  });

  // Test case: should return false for object
  it('returns false for number', () => {
    expect(isArrayLike(123)).toBe(false);
  });

  // Test case: should return false for object without length
  it('returns false for object without length', () => {
    expect(isArrayLike({})).toBe(false);
  });

  // Test case: should return false for object with non-numeric length
  it('returns false for object with non-numeric length', () => {
    expect(isArrayLike({ length: 'abc' })).toBe(false);
  });
});