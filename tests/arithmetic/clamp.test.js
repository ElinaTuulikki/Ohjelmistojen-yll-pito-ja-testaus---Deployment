/**
 * @file clamp.test.js
 * @description Unit tests for the clamp function (src/clamp.js)
 *
 * Tests cover:
 * - Number within bounds (returned as-is)
 * - Number below lower bound (clamped to lower)
 * - Number above upper bound (clamped to upper)
 * - Decimal numbers
 * - String number input coercion
 *
 * Not tested:
 * - NaN input
 * - Missing lower or upper bound arguments
 *
 * Dependencies: Jest, Babel (for ES module support)
 */

import clamp from '../../src/clamp';

// Test suite for the clamp function
describe('clamp', () => {
  // Basic test case for clamping a number within bounds
  it('returns the number when within bounds', () => {
    expect(clamp(0, -5, 5)).toBe(0);
    expect(clamp(3, -5, 5)).toBe(3);
  });

  // Test for edge cases
  it('returns lower bound when number is below it', () => {
    expect(clamp(-10, -5, 5)).toBe(-5);
  });

  // Test for edge cases
  it('returns upper bound when number is above it', () => {
    expect(clamp(10, -5, 5)).toBe(5);
  });

  // Test for decimal numbers
  it('works with decimal numbers', () => {
    expect(clamp(2.5, 0, 5)).toBe(2.5);
    expect(clamp(-1.5, -2, -1)).toBe(-1.5);
  });

  // Test for string numbers
  it('handles string numbers', () => {
    expect(clamp('10', -5, 5)).toBe(5);
    expect(clamp('-10', -5, 5)).toBe(-5);
  });
});