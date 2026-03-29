/**
 * @file toFinite.test.js
 * @description Unit tests for the toFinite function (src/toFinite.js)
 *
 * Tests cover:
 * - Finite number returned as-is
 * - Number.MIN_VALUE returned as-is
 * - Infinity clamped to MAX_INTEGER
 * - -Infinity clamped to -MAX_INTEGER
 * - String number conversion
 * - Null/undefined input (expects 0)
 * - Non-numeric string input (expects 0)
 * - Zero and negative zero handling
 *
 * Not tested:
 * - Object inputs with valueOf methods
 * - Symbol inputs
 *
 * Dependencies: Jest, Babel (for ES module support)
 */

import toFinite from '../../src/toFinite';

// Test cases for the toFinite function
describe('toFinite', () => {
  // Test number to finite number conversion
  it('converts numbers to finite numbers', () => {
    expect(toFinite(3.2)).toBe(3.2);
  });

  // Test number minimum value conversion
  it('converts Number.MIN_VALUE to itself', () => {
    expect(toFinite(Number.MIN_VALUE)).toBe(5e-324);
  });

  // Test infinity to max number conversion
  it('converts Infinity to MAX_INTEGER', () => {
    expect(toFinite(Infinity)).toBe(1.7976931348623157e+308);
  });

  // Test negative infinity to max number conversion
  it('converts -Infinity to -MAX_INTEGER', () => {
    expect(toFinite(-Infinity)).toBe(-1.7976931348623157e+308);
  });

  // Test string number conversion
  it('converts string numbers to finite numbers', () => {
    expect(toFinite('3.2')).toBe(3.2);
  });

  // Test null and undefined conversion
  it('returns 0 for null or undefined', () => {
    expect(toFinite(null)).toBe(0);
    expect(toFinite(undefined)).toBe(0);
  });

  // Test non-numeric string conversion
  it('returns 0 for non-numeric strings', () => {
    expect(toFinite('abc')).toBe(0);
  });

  // Test 0 conversion
  it('handles 0 correctly', () => {
    expect(toFinite(0)).toBe(0);
    expect(toFinite(-0)).toBe(-0);
  });
});