/**
 * @file drop.test.js
 * @description Unit tests for the drop function (src/drop.js)
 *
 * Tests cover:
 * - Dropping first n elements from an array
 * - Default n of 1 when not specified
 * - Dropping more elements than array length (empty result)
 * - Dropping 0 elements (array unchanged)
 * - Negative n (treated as 0)
 * - Null/undefined array input
 *
 * Not tested:
 * - Non-integer n values (e.g. floats)
 *
 * Dependencies: Jest, Babel (for ES module support)
 */

import drop from '../../src/drop';

// Test suite for the drop function
describe('drop', () => {
  // Test for dropping n elements
  it('drops first n elements from array', () => {
    expect(drop([1, 2, 3], 2)).toEqual([3]);
  });

  // Test for default n
  it('drops 1 element by default when n not specified', () => {
    expect(drop([1, 2, 3])).toEqual([2, 3]);
  });

  // Test for dropping more than array length
  it('returns empty array when dropping more than array length', () => {
    expect(drop([1, 2, 3], 5)).toEqual([]);
  });

  // Test for dropping 0 elements
  it('returns same array when dropping 0 elements', () => {
    expect(drop([1, 2, 3], 0)).toEqual([1, 2, 3]);
  });

  // Test for negative n
  it('handles negative n by dropping 0 elements', () => {
    expect(drop([1, 2, 3], -1)).toEqual([1, 2, 3]);
  });

  // Test for null or undefined array
  it('returns empty array for null or undefined array', () => {
    expect(drop(null, 2)).toEqual([]);
    expect(drop(undefined, 2)).toEqual([]);
  });
});