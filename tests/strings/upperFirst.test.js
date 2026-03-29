/**
 * @file upperFirst.test.js
 * @description Unit tests for the upperFirst function (src/upperFirst.js)
 *
 * Tests cover:
 * - Capitalizing the first character of a lowercase string
 * - Already-uppercase first character (no change)
 * - Empty string input
 * - Single character input (both cases)
 * - String with spaces (only first character affected)
 * - Non-string inputs: null, undefined, number
 *
 * Not tested:
 * - Unicode or special character first characters
 *
 * Dependencies: Jest, Babel (for ES module support)
 */

import upperFirst from '../../src/upperFirst';

// Test suite for upperFirst function
describe('upperFirst', () => {
  it('converts first character to uppercase', () => {
    expect(upperFirst('fred')).toBe('Fred');
  });

  // Test cases for already uppercase first character
  it('handles already uppercase first character', () => {
    expect(upperFirst('FRED')).toBe('FRED');
  });

  // Test cases for empty string input
  it('handles empty string', () => {
    expect(upperFirst('')).toBe('');
  });

  // Test cases for single character input
  it('handles single character', () => {
    expect(upperFirst('f')).toBe('F');
    expect(upperFirst('F')).toBe('F');
  });

  // Test cases for string with spaces
  it('handles string with spaces', () => {
    expect(upperFirst('hello world')).toBe('Hello world');
  });

  // Test cases for non-string inputs
  it('handles non-string inputs', () => {
    expect(upperFirst(null)).toBe('');
    expect(upperFirst(undefined)).toBe('');
    expect(upperFirst(123)).toBe('123');
  });
});