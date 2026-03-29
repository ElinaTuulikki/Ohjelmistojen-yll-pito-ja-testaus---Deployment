/**
 * @file defaultToAny.test.js
 * @description Unit tests for the defaultToAny function (src/defaultToAny.js)
 *
 * Tests cover:
 * - Valid first value returned as-is
 * - Undefined first value falls through to first valid default
 * - First default also invalid (null) — falls through to second default
 * - All values invalid (undefined, null, NaN) — returns NaN
 * - Multiple defaults with null/undefined skipped
 * - Zero as a valid (non-nullish) value
 * - False as a valid (non-nullish) value
 * - Empty string as a valid (non-nullish) value
 *
 * Not tested:
 * - No arguments passed
 * - Single argument only
 *
 * Dependencies: Jest, Babel (for ES module support)
 */

import defaultToAny from '../../src/defaultToAny';

describe('defaultToAny', () => {
  it('returns value when value is valid', () => {
    expect(defaultToAny(1, 10, 20)).toBe(1);
  });

  it('returns first default value when value is undefined', () => {
    expect(defaultToAny(undefined, 10, 20)).toBe(10);
  });

  it('returns second default value when first default is invalid', () => {
    expect(defaultToAny(undefined, null, 20)).toBe(20);
  });

  it('returns NaN when all values are invalid', () => {
    expect(defaultToAny(undefined, null, NaN)).toBeNaN();
  });

  it('handles multiple default values', () => {
    expect(defaultToAny(null, undefined, 5, 10)).toBe(5);
  });

  it('returns value when value is 0', () => {
    expect(defaultToAny(0, 10, 20)).toBe(0);
  });

  it('returns value when value is false', () => {
    expect(defaultToAny(false, true, 'default')).toBe(false);
  });

  it('returns value when value is empty string', () => {
    expect(defaultToAny('', 'default')).toBe('');
  });
});