/**
 * @file isSymbol.test.js
 * @description Unit tests for the isSymbol function (src/isSymbol.js)
 *
 * Tests cover:
 * - Symbol primitive (Symbol() and Symbol.iterator)
 * - Symbol wrapper object (Object(Symbol()))
 * - String, number, boolean (all expect false)
 * - Null, undefined (expect false)
 * - Plain object and array (expect false)
 *
 * Not tested:
 * - Well-known symbols beyond Symbol.iterator
 *
 * Dependencies: Jest, Babel (for ES module support)
 */

import isSymbol from '../../src/isSymbol';

// Test suite for isSymbol function
describe('isSymbol', () => {
  // Test case: should return true for symbol primitive
  it('returns true for symbol primitive', () => {
    expect(isSymbol(Symbol.iterator)).toBe(true);
    expect(isSymbol(Symbol('test'))).toBe(true);
  });

  // Test case: should return true for Symbol object
  it('returns true for Symbol object', () => {
    expect(isSymbol(Object(Symbol()))).toBe(true);
  });

  // Test case: should return false for function
  it('returns false for string', () => {
    expect(isSymbol('abc')).toBe(false);
  });

  // Test case: should return false for number
  it('returns false for number', () => {
    expect(isSymbol(123)).toBe(false);
  });

  // Test case: should return false for boolean
  it('returns false for boolean', () => {
    expect(isSymbol(true)).toBe(false);
    expect(isSymbol(false)).toBe(false);
  });

  // Test case: should return false for null
  it('returns false for null', () => {
    expect(isSymbol(null)).toBe(false);
  });

  // Test case: should return false for undefined
  it('returns false for undefined', () => {
    expect(isSymbol(undefined)).toBe(false);
  });

  // Test case: should return false for object
  it('returns false for object', () => {
    expect(isSymbol({})).toBe(false);
  });

  // Test case: should return false for array
  it('returns false for array', () => {
    expect(isSymbol([])).toBe(false);
  });
});