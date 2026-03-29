/**
 * @file filter.test.js
 * @description Unit tests for the filter function (src/filter.js)
 *
 * Tests cover:
 * - Filtering objects in an array using a function predicate
 * - Filtering numbers with a comparison predicate
 * - No elements passing the predicate (empty result)
 * - Empty array input
 * - Null/undefined array input
 *
 * Not tested:
 * - Property shorthand predicates (e.g. { active: true })
 * - Object collections as input
 *
 * Dependencies: Jest, Babel (for ES module support)
 */

import filter from '../../src/filter';

// Test suite for the filter function
describe('filter', () => {
  // Test with iteratee as a function
  it('returns array of elements that pass predicate', () => {
    const users = [
      { 'user': 'barney', 'active': true },
      { 'user': 'fred', 'active': false }
    ];
    expect(filter(users, ({ active }) => active)).toEqual([{ 'user': 'barney', 'active': true }]);
  });

  // Test with iteratee as a property name
  it('filters numbers greater than 2', () => {
    expect(filter([1, 2, 3, 4], n => n > 2)).toEqual([3, 4]);
  });

  // Test with iteratee as a property name
  it('returns empty array when no elements pass predicate', () => {
    expect(filter([1, 2, 3], n => n > 5)).toEqual([]);
  });

  // Test with iteratee as a property name
  it('returns empty array for empty array', () => {
    expect(filter([], n => n > 0)).toEqual([]);
  });

  // Test with null or undefined array
  it('handles null or undefined array', () => {
    expect(filter(null, n => n > 0)).toEqual([]);
    expect(filter(undefined, n => n > 0)).toEqual([]);
  });
});