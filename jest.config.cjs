module.exports = {
  moduleFileExtensions: ['js', 'ts', 'json', 'vue'],
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
    '^.+\\.ts$': 'ts-jest',
    '^.+\\.vue$': 'vue-jest',
  },
  moduleNameMapper: {
    '^.+/(.*\\.svg)\\?component$': '<rootDir>/jest.svg.mock.vue',
    '^@/(.*)$': '<rootDir>/src/$1',
    '^@Assets/(.*)$': '<rootDir>/src/assets/$1',
    '^@Components/(.*)$': '<rootDir>/src/components/$1',
    '^@Atoms/(.*)$': '<rootDir>/src/components/atoms/$1',
    '^@Molecules/(.*)$': '<rootDir>/src/components/molecules/$1',
    '^@Organisms/(.*)$': '<rootDir>/src/components/organisms/$1',
    '^@Templates/(.*)$': '<rootDir>/src/components/templates/$1',
    '^@Views/(.*)$': '<rootDir>/src/views/$1',
  },
  collectCoverage: true,
  collectCoverageFrom: ['**/*.{js,ts,vue}'],
  coveragePathIgnorePatterns: [
    'node_modules',
    'coverage',
    '.d.ts',
    '.md',
    '.json',
    '.setup.ts',
    '.config.ts',
    '.story.vue',
    'src/main.ts',
    'src/router',
    '<rootDir>/src/main.ts',
  ],
  coverageDirectory: '<rootDir>/coverage/',
}
