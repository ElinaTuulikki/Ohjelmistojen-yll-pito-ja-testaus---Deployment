/**
 * @file isBoolean.test.js
 * @description Unit tests for the isBoolean function (src/isBoolean.js)
 *
 * Tests cover:
 * - Boolean primitives true and false (both expect true)
 * - Boolean wrapper objects new Boolean(true/false) (expect true)
 * - Null, undefined (expect false)
 * - Number primitives 0 and 1 (expect false — commonly confused with booleans)
 * - String 'true' and 'false' (expect false)
 * - Array and plain object (expect false)
 *
 * Not tested:
 * - Symbol inputs
 *
 * Dependencies: Jest, Babel (for ES module support)
 */

import isBoolean from '../../src/isBoolean';

// Test suite for isBoolean function
describe('isBoolean', () => {
  // Test case: should return true for boolean primitive true
  it('returns true for boolean primitive true', () => {
    expect(isBoolean(true)).toBe(true);
  });

  // Test case: should return true for boolean primitive false
  it('returns true for boolean primitive false', () => {
    expect(isBoolean(false)).toBe(true);
  });

  // Test case: should return true for Boolean object
  it('returns true for Boolean object', () => {
    expect(isBoolean(new Boolean(true))).toBe(true);
    expect(isBoolean(new Boolean(false))).toBe(true);
  });

  // Test case: should return false for null
  it('returns false for null', () => {
    expect(isBoolean(null)).toBe(false);
  });

  // Test case: should return false for undefined
  it('returns false for undefined', () => {
    expect(isBoolean(undefined)).toBe(false);
  });

  // Test case: should return false for number
  it('returns false for number', () => {
    expect(isBoolean(1)).toBe(false);
    expect(isBoolean(0)).toBe(false);
  });

  // Test case: should return false for string
  it('returns false for string', () => {
    expect(isBoolean('true')).toBe(false);
    expect(isBoolean('false')).toBe(false);
  });

  // Test case: should return false for function
  it('returns false for array', () => {
    expect(isBoolean([])).toBe(false);
  });

  // Test case: should return false for object
  it('returns false for object', () => {
    expect(isBoolean({})).toBe(false);
  });
});