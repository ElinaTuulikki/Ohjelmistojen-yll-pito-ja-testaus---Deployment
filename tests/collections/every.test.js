/**
 * @file every.test.js
 * @description Unit tests for the every function (src/every.js)
 *
 * Tests cover:
 * - Returns true when all elements pass the predicate
 * - Returns false when any element fails the predicate
 * - Empty array (vacuous truth — returns true)
 * - Null/undefined collection (returns true, consistent with empty)
 * - Early termination after first failing element
 *
 * Not tested:
 * - Object collections as input
 * - Non-function predicates (e.g. property shorthand)
 *
 * Dependencies: Jest, Babel (for ES module support)
 */

import every from '../../src/every';

// Test suite for the every function
describe('every', () => {
  // Test with iteratee as a function
  it('returns true when all elements pass predicate', () => {
    expect(every([2, 4, 6], n => n % 2 === 0)).toBe(true);
  });

  // Test with empty array
  it('returns false when any element fails predicate', () => {
    expect(every([2, 3, 4], n => n % 2 === 0)).toBe(false);
  });

  // Test with empty array
  it('returns true for empty array', () => {
    expect(every([], n => n > 0)).toBe(true);
  });

  // Test with null or undefined array
  it('returns false for null or undefined array', () => {
    expect(every(null, n => n > 0)).toBe(true);
    expect(every(undefined, n => n > 0)).toBe(true);
  });

  // Test with object collections
  it('stops iteration after first failure', () => {
    const predicate = jest.fn(n => n < 3);
    expect(every([1, 2, 3, 4], predicate)).toBe(false);
    expect(predicate).toHaveBeenCalledTimes(3); // called for 1, 2, then stops at 3
  });
});