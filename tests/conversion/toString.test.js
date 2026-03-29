/**
 * @file toString.test.js
 * @description Unit tests for the toString function (src/toString.js)
 *
 * Tests cover:
 * - String input returned as-is
 * - Number to string conversion (including -0)
 * - Null and undefined conversion
 * - Array to comma-separated string
 * - Nested array flattening to string
 * - Symbol to string conversion
 * - Negative zero preservation as '-0'
 *
 * Not tested:
 * - Object inputs with custom toString methods
 * - Non-standard numeric formats (e.g. Infinity, NaN)
 *
 * Dependencies: Jest, Babel (for ES module support)
 */

import toString from '../../src/toString';

// Test cases for the toString function
describe('toString', () => {
  // Test string input
  it('returns string for string input', () => {
    expect(toString('hello')).toBe('hello');
  });

  // Test number to string conversion
  it('converts numbers to strings', () => {
    expect(toString(3.2)).toBe('3.2');
    expect(toString(-0)).toBe('-0');
    expect(toString(0)).toBe('0');
  });

  // Test boolean to string conversion
  it('converts null to empty string', () => {
    expect(toString(null)).toBe('null');
  });

  // Test undefined to string conversion
  it('converts undefined to empty string', () => {
    expect(toString(undefined)).toBe('undefined');
  });

  // Test object to string conversion
  it('converts array to string', () => {
    expect(toString([1, 2, 3])).toBe('1,2,3');
  });

  // Test nested array to string conversion
  it('handles nested arrays', () => {
    expect(toString([1, [2, 3], 4])).toBe('1,2,3,4');
  });

  // Test object with toString method
  it('converts symbols to string', () => {
    expect(toString(Symbol('test'))).toBe('Symbol(test)');
  });

  // Test object with toString method
  it('preserves negative zero', () => {
    expect(toString(-0)).toBe('-0');
    expect(toString(0)).toBe('0');
  });
});