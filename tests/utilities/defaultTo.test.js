/**
 * @file defaultTo.test.js
 * @description Unit tests for the defaultTo function (src/defaultTo.js)
 *
 * Tests cover:
 * - Valid values returned as-is: number, string, false, zero
 * - Null input falls through to defaultValue
 * - Undefined input falls through to defaultValue
 * - NaN input returned as NaN (not replaced by default)
 * - Empty string as a valid non-nullish value
 * - Zero as a valid non-nullish value
 * - False as a valid non-nullish value
 *
 * Not tested:
 * - More than two arguments (use defaultToAny for that)
 *
 * Dependencies: Jest, Babel (for ES module support)
 */

import defaultTo from '../../src/defaultTo';

// Test suite for defaultTo function
describe('defaultTo', () => {
  // Test case: should return value when value is not null or undefined
  it('returns value when value is not null or undefined', () => {
    expect(defaultTo(1, 10)).toBe(1);
    expect(defaultTo('hello', 'default')).toBe('hello');
    expect(defaultTo(false, true)).toBe(false);
    expect(defaultTo(0, 10)).toBe(0);
  });

  // Test case: should return defaultValue when value is null
  it('returns defaultValue when value is null', () => {
    expect(defaultTo(null, 10)).toBe(10);
  });

  // Test case: should return defaultValue when value is undefined  
  it('returns defaultValue when value is undefined', () => {
    expect(defaultTo(undefined, 10)).toBe(10);
  });

  // Test case: should return value when value is NaN
  it('returns value when value is NaN', () => {
    expect(defaultTo(NaN, 10)).toBeNaN();
  });

  // Test case: should return value when value is empty array
  it('returns value when value is empty string', () => {
    expect(defaultTo('', 'default')).toBe('');
  });

  // Test case: should return value when value is empty array
  it('returns value when value is 0', () => {
    expect(defaultTo(0, 10)).toBe(0);
  });

  // Test case: should return value when value is false
  it('returns value when value is false', () => {
    expect(defaultTo(false, true)).toBe(false);
  });
});