export default {
  // Test file location
  testMatch: ['**/tests/**/*.test.js'],
  
  // Collect coverage from src folder
  collectCoverageFrom: [
    'src/**/*.js',                 // Look in src folder
    '!src/.internal/**/*.js',      // Exclude .internal directory
    '!**/tests/**',
    '!**/node_modules/**'
  ],
  
  // Set coverage threshold to 60%
  coverageThreshold: {
    global: {
      statements: 60,
      branches: 60,
      functions: 60,
      lines: 60
    }
  },
  
  // Coverage reporting
  coverageReporters: ['text', 'lcov', 'json-summary', 'html'],
  
  // Transform ES Modules
  transform: {
    '^.+\\.js$': 'babel-jest'
  },
  
  // Test environment
  testEnvironment: 'node',
  
  // Verbose output
  verbose: true,
  
  // Clear mocks between tests
  clearMocks: true
};