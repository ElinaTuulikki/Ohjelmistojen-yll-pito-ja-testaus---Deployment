/**
 * @file reduce.test.js
 * @description Unit tests for the reduce function (src/reduce.js)
 *
 * Tests cover:
 * - Reducing an array with an initial accumulator
 * - Reducing an array without an initial accumulator
 * - Reducing an object collection
 * - Empty array with initial value
 * - Single-element array without initial value
 * - Null/undefined collection input
 *
 * Not tested:
 * - Non-function iteratees
 *
 * Dependencies: Jest, Babel (for ES module support)
 */

import reduce from '../../src/reduce';

// Test suite for the reduce function
describe('reduce', () => {
  // Test with iteratee as a function
  it('reduces array with initial accumulator', () => {
    expect(reduce([1, 2], (sum, n) => sum + n, 0)).toBe(3);
  });

  // Test with iteratee as a function
  it('reduces array without initial accumulator', () => {
    expect(reduce([1, 2], (sum, n) => sum + n)).toBe(3);
  });

  // Test with iteratee as a function
  it('reduces object collection', () => {
    const collection = { 'a': 1, 'b': 2, 'c': 1 };
    const result = reduce(collection, (acc, value, key) => {
      (acc[value] || (acc[value] = [])).push(key);
      return acc;
    }, {});
    expect(result).toEqual({ '1': ['a', 'c'], '2': ['b'] });
  });

  // Test with iteratee as a function
  it('returns accumulator for empty array with initial value', () => {
    expect(reduce([], (sum, n) => sum + n, 0)).toBe(0);
  });

  // Test with iteratee as a function
  it('returns first element for empty array without initial value', () => {
    expect(reduce([1], (sum, n) => sum + n)).toBe(1);
  });

  // Test with iteratee as a function
  it('handles null or undefined collection', () => {
    expect(reduce(null, (sum, n) => sum + n, 0)).toBe(0);
    expect(reduce(undefined, (sum, n) => sum + n, 0)).toBe(0);
  });
});