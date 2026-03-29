/**
 * @file memoize.test.js
 * @description Unit tests for the memoize function (src/memoize.js)
 *
 * Tests cover:
 * - Result caching based on first argument (default resolver)
 * - Custom resolver function for cache key generation
 * - Different arguments producing separate cache entries
 * - Exposed `cache` property (expects a Map instance)
 * - Custom cache implementation via memoize.Cache
 * - TypeError thrown for non-function inputs (function and resolver)
 *
 * Not tested:
 * - Cache invalidation or manual cache clearing
 * - Async functions as the memoized target
 *
 * Dependencies: Jest, Babel (for ES module support)
 */

import memoize from '../../src/memoize';

describe('memoize', () => {
  it('caches results based on first argument by default', () => {
    const fn = jest.fn(x => x * 2);
    const memoized = memoize(fn);
    
    expect(memoized(1)).toBe(2);
    expect(memoized(1)).toBe(2);
    expect(fn).toHaveBeenCalledTimes(1);
  });

  it('uses resolver to determine cache key', () => {
    const fn = jest.fn((a, b) => a + b);
    const resolver = (...args) => args.join('-');
    const memoized = memoize(fn, resolver);
    
    expect(memoized(1, 2)).toBe(3);
    expect(memoized(1, 2)).toBe(3);
    expect(fn).toHaveBeenCalledTimes(1);
    
    expect(memoized(2, 1)).toBe(3);
    expect(fn).toHaveBeenCalledTimes(2);
  });

  it('handles different arguments with default resolver', () => {
    const fn = jest.fn(x => x);
    const memoized = memoize(fn);
    
    memoized(1);
    memoized(2);
    memoized(1);
    
    expect(fn).toHaveBeenCalledTimes(2);
  });

  it('exposes cache property', () => {
    const fn = x => x;
    const memoized = memoize(fn);
    
    expect(memoized.cache).toBeDefined();
    expect(memoized.cache instanceof Map).toBe(true);
  });

  it('allows custom cache implementation', () => {
    const originalCache = memoize.Cache;
    memoize.Cache = WeakMap;
    
    const fn = x => x;
    const memoized = memoize(fn);
    
    expect(memoized.cache instanceof WeakMap).toBe(true);
    
    memoize.Cache = originalCache;
  });

  it('throws error for non-function input', () => {
    expect(() => memoize('not a function')).toThrow(TypeError);
    expect(() => memoize(() => {}, 'not a function')).toThrow(TypeError);
  });
});