/**
 * @file add.test.js
 * @description Unit tests for the add function (src/add.js)
 *
 * Tests cover:
 * - Adding two positive numbers
 * - Adding positive and negative numbers
 * - Adding two negative numbers
 * - Decimal number addition
 * - String number input coercion
 * - Zero as input
 *
 * Not tested:
 * - Non-numeric, non-string inputs (e.g. objects, arrays)
 *
 * Dependencies: Jest, Babel (for ES module support)
 */

import add from '../../src/add';

// Test suite for the add function
describe('add', () => {
  // Basic test case for adding two positive numbers
  it('adds two positive numbers', () => {
    expect(add(6, 4)).toBe(10);
  });

  // New test cases for edge cases and different input types
  it('adds positive and negative numbers', () => {
    expect(add(6, -4)).toBe(2);
    expect(add(-6, 4)).toBe(-2);
  });

  // Test for adding two negative numbers
  it('adds two negative numbers', () => {
    expect(add(-6, -4)).toBe(-10);
  });

  // Test for adding decimal numbers
  it('handles decimal numbers', () => {
    expect(add(1.5, 2.5)).toBe(4);
    expect(add(0.1, 0.2)).toBeCloseTo(0.3);
  });

  // Test for adding string numbers
  it('handles string numbers', () => {
    expect(add('6', '4')).toBe(10);
  });

  // Test for adding non-numeric strings
  it('handles zero', () => {
    expect(add(0, 5)).toBe(5);
    expect(add(5, 0)).toBe(5);
    expect(add(0, 0)).toBe(0);
  });
});