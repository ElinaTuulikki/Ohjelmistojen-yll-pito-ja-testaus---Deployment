/**
 * @file toNumber.test.js
 * @description Unit tests for the toNumber function (src/toNumber.js)
 *
 * Tests cover:
 * - Number inputs returned as-is (including MIN_VALUE and Infinity)
 * - String number conversion (integer, decimal, negative)
 * - Binary string conversion (0b prefix)
 * - Octal string conversion (0o prefix)
 * - Hex string conversion (0x prefix)
 * - Whitespace trimming in string input
 * - Symbol input (expects NaN)
 * - Null input (expects 0)
 * - Undefined input (expects NaN)
 * - Object with valueOf method
 *
 * Not tested:
 * - Arrays as input
 * - Objects without valueOf
 *
 * Dependencies: Jest, Babel (for ES module support)
 */

import toNumber from '../../src/toNumber';

// Test cases for the toNumber function
describe('toNumber', () => {
  // Test edge cases
  it('converts numbers to themselves', () => {
    expect(toNumber(3.2)).toBe(3.2);
    expect(toNumber(Number.MIN_VALUE)).toBe(5e-324);
    expect(toNumber(Infinity)).toBe(Infinity);
  });

  // Test edge cases
  it('converts string numbers to numbers', () => {
    expect(toNumber('3.2')).toBe(3.2);
    expect(toNumber('3')).toBe(3);
    expect(toNumber('-3.2')).toBe(-3.2);
  });

// Test edge cases
  it('converts binary strings to numbers', () => {
    expect(toNumber('0b101')).toBe(5);
    expect(toNumber('0b111')).toBe(7);
  });

  // Test edge cases
  it('converts octal strings to numbers', () => {
    expect(toNumber('0o10')).toBe(8);
    expect(toNumber('0o7')).toBe(7);
  });

  // Test edge cases
  it('returns NaN for hex strings', () => {
    expect(toNumber('0x10')).toBe(16);
    expect(toNumber('0x1a')).toBe(26);
  });

  // Test edge cases
  it('handles whitespace in strings', () => {
    expect(toNumber(' 3.2 ')).toBe(3.2);
    expect(toNumber('\t3.2\n')).toBe(3.2);
  });

  // Test edge cases
  it('returns NaN for symbols', () => {
    expect(toNumber(Symbol('test'))).toBeNaN();
  });

  it('returns 0 for null', () => {
    expect(toNumber(null)).toBe(0);
  });

  it('returns NaN for undefined', () => {
    expect(toNumber(undefined)).toBeNaN();
  });

  it('converts objects with valueOf', () => {
    const obj = { valueOf: () => 42 };
    expect(toNumber(obj)).toBe(42);
  });
});