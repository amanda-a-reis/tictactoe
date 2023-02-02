export default {
  roots: ['<rootDir>'],
  collectCoverageFrom: ['<rootDir>/src/**/*.ts'],
  coverageDirectory: 'coverage',
  testEnvironment: 'node',
  transform: {
    '.+\\.ts$': 'ts-jest'
  },
  preset: 'ts-jest',
  moduleNameMapper: {
    '@main(.*)': '<rootDir>/src/main/$1',
    '@test(.*)': '<rootDir>/src/test/$1'
  }
}
