/**
 * @file capitalize.test.js
 * @description Unit tests for the capitalize function (src/capitalize.js)
 *
 * Tests cover:
 * - Capitalizing the first letter of a lowercase string
 * - Converting an all-caps string to first-letter-only capitalized
 * - Empty string input
 * - Null input (expects an error to be thrown)
 *
 * Not tested:
 * - Undefined input
 * - Numeric or boolean inputs
 * - Strings with leading whitespace
 *
 * Dependencies: Jest, Babel (for ES module support)
 */

import capitalize from '../../src/capitalize.js';

// Test suite for capitalize function
describe('capitalize function', () => {
  test('capitalizes first letter', () => {
    expect(capitalize('fred')).toBe('Fred');
    expect(capitalize('FRED')).toBe('Fred');
  });
  
  // Test cases for non-alphabetic characters
  test('handles empty string', () => {
    expect(capitalize('')).toBe('');
  });
  
  // Test cases for non-string input
  test('throws error for non-string', () => {
    expect(() => capitalize(null)).toThrow();
  });
});