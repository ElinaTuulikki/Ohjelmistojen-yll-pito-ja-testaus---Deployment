/**
 * @file toInteger.test.js
 * @description Unit tests for the toInteger function (src/toInteger.js)
 *
 * Tests cover:
 * - Decimal number truncation to integer
 * - Number.MIN_VALUE conversion (expects 0)
 * - Infinity and -Infinity conversion to MAX_INTEGER boundaries
 * - String number conversion
 * - Negative number truncation
 * - Null/undefined input (expects 0)
 * - Non-numeric string input (expects 0)
 * - Zero and negative zero preservation
 *
 * Not tested:
 * - Object inputs with valueOf methods
 * - Symbol inputs
 *
 * Dependencies: Jest, Babel (for ES module support)
 */

import toInteger from '../../src/toInteger';

// Test cases for the toInteger function
describe('toInteger', () => {
  // Test decimal number conversion
  it('converts decimal numbers to integers', () => {
    expect(toInteger(3.2)).toBe(3);
    expect(toInteger(3.9)).toBe(3);
  });

  // Test minimum value conversion
  it('converts Number.MIN_VALUE to 0', () => {
    expect(toInteger(Number.MIN_VALUE)).toBe(0);
  });

  // Test infinity to max integer conversion
  it('converts Infinity to MAX_INTEGER', () => {
    expect(toInteger(Infinity)).toBe(1.7976931348623157e+308);
  });

  // Test negative infinity to min integer conversion
  it('converts -Infinity to -MAX_INTEGER', () => {
    expect(toInteger(-Infinity)).toBe(-1.7976931348623157e+308);
  });

  // Test string number conversion
  it('converts string numbers to integers', () => {
    expect(toInteger('3.2')).toBe(3);
    expect(toInteger('3.9')).toBe(3);
  });

  // Test binary string conversion
  it('converts negative numbers', () => {
    expect(toInteger(-3.2)).toBe(-3);
    expect(toInteger(-3.9)).toBe(-3);
  });

  // Test octal string conversion
  it('returns 0 for null or undefined', () => {
    expect(toInteger(null)).toBe(0);
    expect(toInteger(undefined)).toBe(0);
  });

  // Test hex string conversion
  it('returns 0 for non-numeric strings', () => {
    expect(toInteger('abc')).toBe(0);
  });

  // Test whitespace in strings
  it('preserves zero', () => {
    expect(toInteger(0)).toBe(0);
    expect(toInteger(-0)).toBe(-0);
  });
});