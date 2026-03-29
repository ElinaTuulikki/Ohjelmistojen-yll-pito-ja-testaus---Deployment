/**
 * @file divide.test.js
 * @description Unit tests for the divide function (src/divide.js)
 *
 * Tests cover:
 * - Dividing two positive numbers
 * - Dividing positive by negative and vice versa
 * - Dividing two negative numbers
 * - Division by zero (expects Infinity / -Infinity)
 * - Decimal number division
 *
 * Not tested:
 * - String number input coercion
 * - NaN input
 *
 * Dependencies: Jest, Babel (for ES module support)
 */

import divide from '../../src/divide';

// Test suite for the divide function
describe('divide', () => {
  // Basic test case for dividing two positive numbers
  it('divides two positive numbers', () => {
    expect(divide(6, 4)).toBe(1.5);
    expect(divide(10, 2)).toBe(5);
  });

  // Test for negative numbers
  it('divides positive by negative', () => {
    expect(divide(6, -2)).toBe(-3);
  });

  // Test for negative numbers
  it('divides negative by positive', () => {
    expect(divide(-6, 2)).toBe(-3);
  });

  // Test for negative numbers
  it('divides negative by negative', () => {
    expect(divide(-6, -2)).toBe(3);
  });

  // Test for division by zero
  it('divides by zero', () => {
    expect(divide(6, 0)).toBe(Infinity);
    expect(divide(-6, 0)).toBe(-Infinity);
  });

  // Test for decimal numbers
  it('handles decimal numbers', () => {
    expect(divide(5, 2)).toBe(2.5);
    expect(divide(1.5, 0.5)).toBe(3);
  });
});