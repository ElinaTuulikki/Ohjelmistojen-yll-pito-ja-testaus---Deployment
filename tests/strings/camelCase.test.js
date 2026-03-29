/**
 * @file camelCase.test.js
 * @description Unit tests for the camelCase function (src/camelCase.js)
 *
 * Tests cover:
 * - Space-separated words to camelCase
 * - Kebab-case (with leading/trailing dashes) to camelCase
 * - Snake_case (with leading/trailing underscores, all caps) to camelCase
 * - Single word (lowercase and uppercase)
 * - Empty string input
 * - Mixed separators (hyphens, underscores, spaces)
 *
 * Not tested:
 * - Null/undefined input
 * - Unicode or non-Latin characters
 *
 * Known issues:
 * - Empty string test expects ' ' (a space), which appears to be a bug
 *   in either the test or the implementation — flagged for review
 *
 * Dependencies: Jest, Babel (for ES module support)
 */

import camelCase from '../../src/camelCase';

// Test suite for camelCase function
describe('camelCase', () => {
  // Test cases for various input formats
  it('converts space-separated words to camelCase', () => {
    expect(camelCase('Foo Bar')).toBe('fooBar');
  });

  // Test cases for kebab-case and snake_case inputs
  it('converts kebab-case to camelCase', () => {
    expect(camelCase('--foo-bar--')).toBe('fooBar');
  });

  // Test cases for snake_case inputs with leading and trailing underscores
  it('converts snake_case to camelCase', () => {
    expect(camelCase('__FOO_BAR__')).toBe('fooBar');
  });

  // Test cases for inputs with multiple separators and mixed cases
  it('handles single word', () => {
    expect(camelCase('foo')).toBe('foo');
    expect(camelCase('FOO')).toBe('foo');
  });

  // Test cases for empty string input
  it('handles empty string', () => {
    expect(camelCase('')).toBe(' ');
    expect(camelCase('')).toBe(' ');
  });

  // Test cases for inputs with multiple words and different separators
  it('handles multiple words with different separators', () => {
    expect(camelCase('hello-world_test STRING')).toBe('helloWorldTestString');
  });
});