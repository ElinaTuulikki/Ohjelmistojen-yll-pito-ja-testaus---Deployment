/**
 * @file isDate.test.js
 * @description Unit tests for the isDate function (src/isDate.js)
 *
 * Tests cover:
 * - Date object (current date)
 * - Date object with a specific date string
 * - Date string (expects false — strings are not Date objects)
 * - Null, undefined, number, array, and plain object (all expect false)
 *
 * Not tested:
 * - Invalid Date objects (e.g. new Date('invalid'))
 * - Date subclasses
 *
 * Dependencies: Jest, Babel (for ES module support)
 */

import isDate from '../../src/isDate';

// Test suite for isDate function
describe('isDate', () => {
  // Test case: should return true for Date object
  it('returns true for Date object', () => {
    expect(isDate(new Date())).toBe(true);
  });

  // Test case: should return true for Date object with specific date
  it('returns true for Date object with specific date', () => {
    expect(isDate(new Date('2024-01-01'))).toBe(true);
  });

  // Test case: should return false for date string
  it('returns false for date string', () => {
    expect(isDate('Mon April 23 2012')).toBe(false);
  });

  // Test case: should return false for number
  it('returns false for null', () => {
    expect(isDate(null)).toBe(false);
  });

  // Test case: should return false for undefined
  it('returns false for undefined', () => {
    expect(isDate(undefined)).toBe(false);
  });

  // Test case: should return false for boolean
  it('returns false for number', () => {
    expect(isDate(123)).toBe(false);
  });

  // Test case: should return false for string
  it('returns false for array', () => {
    expect(isDate([])).toBe(false);
  });

  // Test case: should return false for function
  it('returns false for object', () => {
    expect(isDate({})).toBe(false);
  });
});