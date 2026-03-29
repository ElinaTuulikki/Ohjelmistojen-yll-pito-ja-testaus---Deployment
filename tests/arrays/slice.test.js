/**
 * @file slice.test.js
 * @description Unit tests for the slice function (src/slice.js)
 *
 * Tests cover:
 * - Slicing from a start index to an end index
 * - Slicing from a start index to the end (no end argument)
 * - Slicing the entire array (no arguments)
 * - Negative start index
 * - Negative end index
 * - Null/undefined array input
 *
 * Not tested:
 * - Start index greater than end index
 * - Out-of-bounds indices beyond array length
 *
 * Dependencies: Jest, Babel (for ES module support)
 */

import slice from '../../src/slice';

// Test suite for the slice function
describe('slice', () => {
  // Test slicing with start and end indices
  it('slices from start to end', () => {
    expect(slice([1, 2, 3, 4], 1, 3)).toEqual([2, 3]);
  });

  // Test for slicing to end when end omitted
  it('slices from start when end omitted', () => {
    expect(slice([1, 2, 3, 4], 2)).toEqual([3, 4]);
  });

  // Test for slicing with negative indices
  it('slices entire array when no arguments provided', () => {
    expect(slice([1, 2, 3, 4])).toEqual([1, 2, 3, 4]);
  });

  // Test for negative start index
  it('handles negative start index', () => {
    expect(slice([1, 2, 3, 4], -2)).toEqual([3, 4]);
  });

  // Test for negative end index
  it('handles negative end index', () => {
    expect(slice([1, 2, 3, 4], 1, -1)).toEqual([2, 3]);
  });

  // Test for start index greater than end index
  it('returns empty array for null or undefined array', () => {
    expect(slice(null, 1, 3)).toEqual([]);
    expect(slice(undefined, 1, 3)).toEqual([]);
  });
});