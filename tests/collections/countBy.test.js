/**
 * @file countBy.test.js
 * @description Unit tests for the countBy function (src/countBy.js)
 *
 * Tests cover:
 * - Counting occurrences using a function iteratee
 * - Counting using Math.floor as iteratee
 * - Counting by string property name (e.g. 'length')
 * - Empty array and empty object input
 * - Object collections as input
 *
 * Not tested:
 * - Null/undefined collection input
 * - Non-standard iteratee types
 *
 * Dependencies: Jest, Babel (for ES module support)
 */

import countBy from '../../src/countBy';

// Test suite for the countBy function
describe('countBy', () => {
  // Test with iteratee as a function
  it('counts occurrences based on iteratee result', () => {
    const users = [
      { 'user': 'barney', 'active': true },
      { 'user': 'betty', 'active': true },
      { 'user': 'fred', 'active': false }
    ];
    expect(countBy(users, value => value.active)).toEqual({ 'true': 2, 'false': 1 });
  });

  // Test with iteratee as a property name
  it('counts array elements by value', () => {
    expect(countBy([6.1, 4.2, 6.3], Math.floor)).toEqual({ '4': 1, '6': 2 });
  });

  // Test with iteratee as a property name
  it('counts string characters', () => {
    expect(countBy(['one', 'two', 'three'], 'length')).toEqual({ '3': 2, '5': 1 });
  });

  // Test with iteratee as a property name
  it('returns empty object for empty collection', () => {
    expect(countBy([], value => value)).toEqual({});
    expect(countBy({}, value => value)).toEqual({});
  });

  // Test with object collections
  it('handles object collections', () => {
    const obj = { 'a': 1, 'b': 2, 'c': 1 };
    expect(countBy(obj, value => value)).toEqual({ '1': 2, '2': 1 });
  });
});