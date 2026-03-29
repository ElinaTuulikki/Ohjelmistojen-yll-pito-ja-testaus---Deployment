/**
 * @file compact.test.js
 * @description Unit tests for the compact function (src/compact.js)
 *
 * Tests cover:
 * - Removing all falsey values (0, false, '', NaN, null, undefined)
 * - Preserving truthy values including objects and arrays
 * - All-falsey input array
 * - Empty array input
 * - Null/undefined input
 *
 * Not tested:
 * - Non-array inputs other than null/undefined (e.g. numbers, strings)
 *
 * Dependencies: Jest, Babel (for ES module support)
 */

import compact from '../../src/compact';

// Test suite for the compact function
describe('compact', () => {
  // Test for removing falsey values
  it('removes all falsey values', () => {
    expect(compact([0, 1, false, 2, '', 3])).toEqual([1, 2, 3]);
  });

  // Test for specific falsey values
  it('removes false, null, undefined, and NaN', () => {
    expect(compact([false, null, undefined, NaN, 1, 2])).toEqual([1, 2]);
  });

  // Test for truthy values
  it('keeps truthy values', () => {
    expect(compact([1, 'hello', true, [], {}])).toEqual([1, 'hello', true, [], {}]);
  });

  // Test for all falsey values
  it('returns empty array for all falsey values', () => {
    expect(compact([false, null, 0, '', undefined, NaN])).toEqual([]);
  });

  // Test for empty array
  it('returns empty array for empty array', () => {
    expect(compact([])).toEqual([]);
  });

  // Test for null or undefined input
  it('returns empty array for null or undefined', () => {
    expect(compact(null)).toEqual([]);
    expect(compact(undefined)).toEqual([]);
  });
});