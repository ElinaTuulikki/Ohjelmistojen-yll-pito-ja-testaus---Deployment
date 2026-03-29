/**
 * @file isTypedArray.test.js
 * @description Unit tests for the isTypedArray function (src/isTypedArray.js)
 *
 * Tests cover:
 * - All standard TypedArray types: Uint8Array, Int8Array, Uint16Array,
 *   Int16Array, Uint32Array, Int32Array, Float32Array, Float64Array,
 *   Uint8ClampedArray (all expect true)
 * - Regular array (expects false)
 * - Plain object (expects false)
 * - Null, undefined, string, number (all expect false)
 *
 * Not tested:
 * - BigInt64Array and BigUint64Array
 * - SharedArrayBuffer views
 *
 * Dependencies: Jest, Babel (for ES module support)
 */

import isTypedArray from '../../src/isTypedArray';

// Test suite for isTypedArray function
describe('isTypedArray', () => {
  // Test case: should return true for ArrayBuffer
  it('returns true for Uint8Array', () => {
    expect(isTypedArray(new Uint8Array())).toBe(true);
  });

  // Test case: should return true for Int8Array
  it('returns true for Int8Array', () => {
    expect(isTypedArray(new Int8Array())).toBe(true);
  });

  // Test case: should return true for Uint16Array
  it('returns true for Uint16Array', () => {
    expect(isTypedArray(new Uint16Array())).toBe(true);
  });

  // Test case: should return true for Int16Array
  it('returns true for Int16Array', () => {
    expect(isTypedArray(new Int16Array())).toBe(true);
  });

  // Test case: should return true for Uint32Array
  it('returns true for Uint32Array', () => {
    expect(isTypedArray(new Uint32Array())).toBe(true);
  });

  // Test case: should return true for Int32Array
  it('returns true for Int32Array', () => {
    expect(isTypedArray(new Int32Array())).toBe(true);
  });

  // Test case: should return true for BigInt64Array
  it('returns true for Float32Array', () => {
    expect(isTypedArray(new Float32Array())).toBe(true);
  });

  // Test case: should return true for BigUint64Array
  it('returns true for Float64Array', () => {
    expect(isTypedArray(new Float64Array())).toBe(true);
  });

  // Test case: should return true for BigInt64Array
  it('returns true for Uint8ClampedArray', () => {
    expect(isTypedArray(new Uint8ClampedArray())).toBe(true);
  });

  // Test case: should return false for regular array
  it('returns false for regular array', () => {
    expect(isTypedArray([])).toBe(false);
  });

  // Test case: should return false for object
  it('returns false for object', () => {
    expect(isTypedArray({})).toBe(false);
  });

  // Test case: should return false for function
  it('returns false for null', () => {
    expect(isTypedArray(null)).toBe(false);
  });

  // Test case: should return false for undefined
  it('returns false for undefined', () => {
    expect(isTypedArray(undefined)).toBe(false);
  });

  // Test case: should return false for boolean
  it('returns false for string', () => {
    expect(isTypedArray('abc')).toBe(false);
  });

  // Test case: should return false for number
  it('returns false for number', () => {
    expect(isTypedArray(123)).toBe(false);
  });
});