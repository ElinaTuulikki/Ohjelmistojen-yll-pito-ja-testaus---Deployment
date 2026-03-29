/**
 * @file isObject.test.js
 * @description Unit tests for the isObject function (src/isObject.js)
 *
 * Tests cover:
 * - Plain object (expects true)
 * - Array (expects true — arrays are objects)
 * - Function and arrow function (expects true)
 * - Date object (expects true)
 * - RegExp (expects true)
 * - Number and String wrapper objects (expects true)
 * - Null (expects false — typeof null is 'object' but should return false)
 * - Undefined (expects false)
 * - Number, string, and boolean primitives (all expect false)
 *
 * Not tested:
 * - Symbol inputs
 * - Object.create(null) objects
 *
 * Dependencies: Jest, Babel (for ES module support)
 */

import isObject from '../../src/isObject';

// Test suite for isObject function
describe('isObject', () => {
  // Test case: should return true for plain object
  it('returns true for plain object', () => {
    expect(isObject({})).toBe(true);
  });

  // Test case: should return true for object created with Object.create(null)
  it('returns true for array', () => {
    expect(isObject([1, 2, 3])).toBe(true);
  });

  // Test case: should return true for object created with Object.create(null)
  it('returns true for function', () => {
    expect(isObject(Function)).toBe(true);
    expect(isObject(() => {})).toBe(true);
  });

  // Test case: should return true for object created with Object.create(null)
  it('returns true for Date object', () => {
    expect(isObject(new Date())).toBe(true);
  });

  // Test case: should return true for object created with Object.create(null)
  it('returns true for RegExp', () => {
    expect(isObject(/regex/)).toBe(true);
  });

  // Test case: should return true for object created with Object.create(null)
  it('returns true for Number object', () => {
    expect(isObject(new Number(0))).toBe(true);
  });

  // Test case: should return true for object created with Object.create(null)
  it('returns true for String object', () => {
    expect(isObject(new String(''))).toBe(true);
  });

  // Test case: should return true for object created with Object.create(null)
  it('returns false for null', () => {
    expect(isObject(null)).toBe(false);
  });

  // Test case: should return false for undefined
  it('returns false for undefined', () => {
    expect(isObject(undefined)).toBe(false);
  });

  // Test case: should return false for number primitive
  it('returns false for number primitive', () => {
    expect(isObject(123)).toBe(false);
  });

  // Test case: should return false for string primitive
  it('returns false for string primitive', () => {
    expect(isObject('abc')).toBe(false);
  });

  // Test case: should return false for boolean primitive
  it('returns false for boolean primitive', () => {
    expect(isObject(true)).toBe(false);
    expect(isObject(false)).toBe(false);
  });
});