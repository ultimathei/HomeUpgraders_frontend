module.exports = {
  moduleFileExtensions: [
    'js',
    'ts',
    'json',
    'vue'
  ],
  transform: {
    "^.+\\.tsx?$": "ts-jest",
    '^.+\\.ts$': 'ts-jest',
    '^.+\\.vue$': 'vue-jest'
  },
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
    '^@Components/(.*)$': '<rootDir>/src/components/$1',
    '^@Atoms/(.*)$': '<rootDir>/src/components/atoms/$1',
    '^@Molecules/(.*)$': '<rootDir>/src/components/molecules/$1',
    '^@Organisms/(.*)$': '<rootDir>/src/components/organisms/$1',
    '^@Templates/(.*)$': '<rootDir>/src/components/templates/$1',
    '^@Views/(.*)$': '<rootDir>/src/views/$1',
  },
}
