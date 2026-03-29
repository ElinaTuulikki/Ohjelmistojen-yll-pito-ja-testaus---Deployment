/**
 * @file get.test.js
 * @description Unit tests for the get function (src/get.js)
 *
 * Tests cover:
 * - Getting a value using a dot-notation string path
 * - Getting a value using an array path
 * - Returning a default value when the path resolves to undefined
 * - Returning undefined when no default provided and path not found
 * - Null/undefined object input with default value fallback
 * - Deeply nested property access
 *
 * Not tested:
 * - Bracket notation for non-numeric keys
 * - Paths with special characters
 *
 * Dependencies: Jest, Babel (for ES module support)
 */

import get from '../../src/get';

// Test cases for the `get` function
describe('get', () => {
  // Test case: should get value at string path
  it('gets value at string path', () => {
    const object = { 'a': [{ 'b': { 'c': 3 } }] };
    expect(get(object, 'a[0].b.c')).toBe(3);
  });

  // Test case: should get value at array path
  it('gets value at array path', () => {
    const object = { 'a': [{ 'b': { 'c': 3 } }] };
    expect(get(object, ['a', '0', 'b', 'c'])).toBe(3);
  });

  // Test case: should return defaultValue if path not found
  it('returns defaultValue when resolved value is undefined', () => {
    const object = { 'a': { 'b': 2 } };
    expect(get(object, 'a.b.c', 'default')).toBe('default');
  });

  // Test case: should return undefined if path not found and no defaultValue provided
  it('returns undefined when no defaultValue and path not found', () => {
    const object = { 'a': 1 };
    expect(get(object, 'b')).toBeUndefined();
  });

  // Test case: should handle null or undefined object
  it('handles null or undefined object', () => {
    expect(get(null, 'a.b', 'default')).toBe('default');
    expect(get(undefined, 'a.b', 'default')).toBe('default');
  });

  // Test case: should handle empty path
  it('gets nested properties', () => {
    const object = { 'a': { 'b': { 'c': 42 } } };
    expect(get(object, 'a.b.c')).toBe(42);
  });
});