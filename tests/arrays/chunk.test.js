/**
 * @file chunk.test.js
 * @description Unit tests for the chunk function (src/chunk.js)
 *
 * Tests cover:
 * - Splitting array into equal-sized chunks
 * - Uneven chunks (remainder in last chunk)
 * - Default chunk size of 1
 * - Empty array input
 * - Null/undefined array input
 * - Size less than 1 (0 or negative)
 *
 * Not tested:
 * - Non-integer chunk sizes (e.g. floats)
 *
 * Dependencies: Jest, Babel (for ES module support)
 */

import chunk from '../../src/chunk';

// Test suite for the chunk function
describe('chunk', () => {
  // Test for splitting array into chunks of specified size
  it('splits array into chunks of specified size', () => {
    expect(chunk(['a', 'b', 'c', 'd'], 2)).toEqual([['a', 'b'], ['c', 'd']]);
  });

  // Test for uneven chunks
  it('handles uneven chunks', () => {
    expect(chunk(['a', 'b', 'c', 'd'], 3)).toEqual([['a', 'b', 'c'], ['d']]);
  });

  // Test for default size
  it('uses default size of 1 when not specified', () => {
    expect(chunk(['a', 'b', 'c'])).toEqual([['a'], ['b'], ['c']]);
  });

  // Test for non-array input
  it('returns empty array for empty array', () => {
    expect(chunk([], 2)).toEqual([]);
  });

  // Test for null or undefined input
  it('returns empty array for null or undefined array', () => {
    expect(chunk(null, 2)).toEqual([]);
    expect(chunk(undefined, 2)).toEqual([]);
  });

  // Test for size less than 1
  it('returns empty array when size is less than 1', () => {
    expect(chunk(['a', 'b', 'c'], 0)).toEqual([]);
    expect(chunk(['a', 'b', 'c'], -1)).toEqual([]);
  });
});