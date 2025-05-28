module.exports = {
  testEnvironment: 'node',
  transform: {
    '^.+\\.js$': 'babel-jest',
  },
  moduleFileExtensions: ['js'],
  moduleDirectories: ['node_modules', 'src/js'],
  testMatch: ['**/tests/**/*.(test|spec).js'],
  moduleNameMapper: {
    '^src/js/(.*)$': '<rootDir>/src/js/$1',
  },
};
