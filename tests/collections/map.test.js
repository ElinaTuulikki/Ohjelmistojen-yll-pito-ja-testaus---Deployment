/**
 * @file map.test.js
 * @description Unit tests for the map function (src/map.js)
 *
 * Tests cover:
 * - Mapping array values using a named function iteratee
 * - Mapping with an arrow function iteratee
 * - Empty array input
 * - Null/undefined array input
 * - Verifying output array length matches input
 *
 * Not tested:
 * - Object collections as input
 * - Property shorthand iteratees
 *
 * Dependencies: Jest, Babel (for ES module support)
 */

import map from '../../src/map';

// Test suite for the map function
describe('map', () => {
  // Test with iteratee as a function
  it('maps array values using iteratee', () => {
    function square(n) {
      return n * n;
    }
    expect(map([4, 8], square)).toEqual([16, 64]);
  });

  it('handles different iteratee types', () => {
    expect(map([1, 2, 3], n => n * 2)).toEqual([2, 4, 6]);
  });

  it('returns empty array for empty array', () => {
    expect(map([], n => n * 2)).toEqual([]);
  });

  it('handles null or undefined array', () => {
    expect(map(null, n => n * 2)).toEqual([]);
    expect(map(undefined, n => n * 2)).toEqual([]);
  });

  it('preserves array length', () => {
    const result = map([1, 2, 3], n => n);
    expect(result).toHaveLength(3);
  });
});