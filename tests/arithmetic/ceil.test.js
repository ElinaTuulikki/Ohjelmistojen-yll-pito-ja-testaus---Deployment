/**
 * @file ceil.test.js
 * @description Unit tests for the ceil function (src/ceil.js)
 *
 * Tests cover:
 * - Rounding up to the nearest integer
 * - Negative number handling
 * - Optional precision parameter
 * - Zero as input
 *
 * Not tested:
 * - Non-numeric inputs (e.g. strings, null, undefined)
 *
 * Dependencies: Jest, Babel (for ES module support)
 */

import ceil from '../../src/ceil.js';

// Test suite for the ceil function
describe('ceil function', () => {
  // Basic test case for rounding up a positive decimal number
  test('rounds up to nearest integer', () => {
    expect(ceil(4.006)).toBe(5);
    expect(ceil(6.004)).toBe(7);
  });
  
  // Test for negative numbers
  test('handles negative numbers', () => {
    expect(ceil(-4.006)).toBe(-4);
  });
  
  // Test for precision parameter
  test('handles precision parameter', () => {
    expect(ceil(4.006, 2)).toBe(4.01);
  });
  
  // Test for non-numeric input
  test('handles zero', () => {
    expect(ceil(0)).toBe(0);
  });
});