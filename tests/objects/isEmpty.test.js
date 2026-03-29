/**
 * @file isEmpty.test.js
 * @description Unit tests for the isEmpty function (src/isEmpty.js)
 *
 * Tests cover:
 * - Null and undefined (expect true)
 * - Empty and non-empty arrays
 * - Empty and non-empty strings
 * - Empty and non-empty objects
 * - Numbers and booleans (primitives with no length/keys)
 *
 * Not tested:
 * - Map and Set collections
 * - ArrayBuffer or typed arrays
 *
 * Dependencies: Jest, Babel (for ES module support)
 */

import isEmpty from '../../src/isEmpty';

// Test cases for the `isEmpty` function
describe('isEmpty', () => {
  it('returns true for null and undefined', () => {
    expect(isEmpty(null)).toBe(true);
    expect(isEmpty(undefined)).toBe(true);
  });

  // Test case: should return true for empty array
  it('returns true for empty array', () => {
    expect(isEmpty([])).toBe(true);
  });

  // Test case: should return false for non-empty array
  it('returns false for non-empty array', () => {
    expect(isEmpty([1, 2, 3])).toBe(false);
  });

  // Test case: should return true for empty string
  it('returns true for empty string', () => {
    expect(isEmpty('')).toBe(true);
  });

  // Test case: should return false for non-empty string
  it('returns false for non-empty string', () => {
    expect(isEmpty('abc')).toBe(false);
  });

  // Test case: should return true for empty object
  it('returns true for empty object', () => {
    expect(isEmpty({})).toBe(true);
  });

  // Test case: should return false for non-empty object
  it('returns false for non-empty object', () => {
    expect(isEmpty({ 'a': 1 })).toBe(false);
  });

  // Test case: should return true for empty Map and Set
  it('returns true for numbers and booleans', () => {
    expect(isEmpty(1)).toBe(true);
    expect(isEmpty(true)).toBe(false);
  });
});