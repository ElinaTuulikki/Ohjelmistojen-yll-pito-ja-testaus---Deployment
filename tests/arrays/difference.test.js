/**
 * @file difference.test.js
 * @description Unit tests for the difference function (src/difference.js)
 *
 * Tests cover:
 * - Returning values from first array not present in second
 * - Excluding values from multiple arrays
 * - Preserving original order
 * - All values excluded (empty result)
 * - No exclusion arrays provided
 * - Null/undefined as first array
 *
 * Not tested:
 * - Non-array elements within the arrays (e.g. objects)
 *
 * Dependencies: Jest, Babel (for ES module support)
 */

import difference from '../../src/difference';

// Test suite for the difference function
describe('difference', () => {
  // Test for values in first array not present in second
  it('returns values from first array not present in second', () => {
    expect(difference([2, 1], [2, 3])).toEqual([1]);
  });

  // Test for multiple arrays
  it('handles multiple arrays to exclude', () => {
    expect(difference([1, 2, 3, 4], [2], [3])).toEqual([1, 4]);
  });

  // Test for preserving order
  it('preserves order from original array', () => {
    expect(difference([3, 1, 2], [1, 3])).toEqual([2]);
  });

  // Test for no values to exclude
  it('returns empty array when all values are excluded', () => {
    expect(difference([1, 2, 3], [1, 2, 3])).toEqual([]);
  });

  // Test for no values to exclude
  it('returns original array when no values to exclude', () => {
    expect(difference([1, 2, 3])).toEqual([1, 2, 3]);
  });

  // Test for non-array input
  it('returns empty array for non-array input', () => {
    expect(difference(null, [1, 2])).toEqual([]);
    expect(difference(undefined, [1, 2])).toEqual([]);
  });
});