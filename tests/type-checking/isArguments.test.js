/**
 * @file isArguments.test.js
 * @description Unit tests for the isArguments function (src/isArguments.js)
 *
 * Tests cover:
 * - The native `arguments` object inside a function (expects true)
 * - Array (expects false — arrays are not arguments objects)
 * - Plain object (expects false)
 * - Null, undefined, string, number (all expect false)
 *
 * Not tested:
 * - Arrow functions (which have no `arguments` binding)
 * - Rest parameters used in place of arguments
 *
 * Dependencies: Jest, Babel (for ES module support)
 */

import isArguments from '../../src/isArguments';

// Test suite for isArguments function
describe('isArguments', () => {
  // Test case: should return true for arguments object
  it('returns true for arguments object', () => {
    function test() {
      expect(isArguments(arguments)).toBe(true);
    }
    test();
  });

  // Test case: should return false for array
  it('returns false for array', () => {
    expect(isArguments([1, 2, 3])).toBe(false);
  });

  // Test case: should return false for object
  it('returns false for object', () => {
    expect(isArguments({})).toBe(false);
  });

  // Test case: should return false for function
  it('returns false for null', () => {
    expect(isArguments(null)).toBe(false);
  });

  // Test case: should return false for undefined
  it('returns false for undefined', () => {
    expect(isArguments(undefined)).toBe(false);
  });

  // Test case: should return false for boolean
  it('returns false for string', () => {
    expect(isArguments('abc')).toBe(false);
  });

  // Test case: should return false for number
  it('returns false for number', () => {
    expect(isArguments(123)).toBe(false);
  });
});