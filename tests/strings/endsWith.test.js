/**
 * @file endsWith.test.js
 * @description Unit tests for the endsWith function (src/endsWith.js)
 *
 * Tests cover:
 * - String that ends with the target (true)
 * - String that does not end with the target (false)
 * - Optional position parameter (checks up to that index)
 * - Position greater than string length (treated as full length)
 * - Negative position (treated as 0, returns false)
 * - Empty string input
 *
 * Not tested:
 * - Non-string inputs
 * - Multi-character target strings
 *
 * Dependencies: Jest, Babel (for ES module support)
 */

import endsWith from '../../src/endsWith';

// Test suite for endsWith function
describe('endsWith', () => {
  it('returns true when string ends with target', () => {
    expect(endsWith('abc', 'c')).toBe(true);
  });

  // Test cases for position parameter
  it('returns false when string does not end with target', () => {
    expect(endsWith('abc', 'b')).toBe(false);
  });

  // Test cases for position parameter
  it('handles position parameter', () => {
    expect(endsWith('abc', 'b', 2)).toBe(true);
  });

  // Test cases for position parameter greater than string length
  it('handles position greater than string length', () => {
    expect(endsWith('abc', 'c', 5)).toBe(true);
  });

  // Test cases for negative position parameter
  it('handles negative position', () => {
    expect(endsWith('abc', 'a', -1)).toBe(false);
  });

  // Test cases for empty string input
  it('handles empty string', () => {
    expect(endsWith('', 'a')).toBe(false);
    expect(endsWith('', '')).toBe(true);
  });
});