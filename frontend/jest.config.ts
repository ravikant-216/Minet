import type { Config } from '@jest/types'
// Sync object
const config: Config.InitialOptions = {
  testEnvironment: 'jest-environment-jsdom',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'json'],
  transform: {
    '^.+\\.(js|ts|tsx)?$': 'babel-jest',
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      'jest-transform-stub',
    '\\.(yaml)$': 'jest-raw-loader',
    '\\.css$': 'jest-transform-css',
  },
  transformIgnorePatterns: ['node_modules/(?!@prekari/core-ui)'],
  moduleNameMapper: {
    '\\.scss$': 'identity-obj-proxy',
    '^@components/(.*)$': '<rootDir>/src/components/$1',
    '^@/(.*)$': '<rootDir>/src/$1',
    '^@Components/(.*)$': '<rootDir>/src/components/$1',
    '^@Pages/(.*)$': '<rootDir>/src/pages/$1',
    '^@Assets/(.*)$': '<rootDir>/public/assests/$1',
    '^Services/(.*)$': '<rootDir>/src/services/$1',
  },
  roots: ['<rootDir>'],
  testRegex: '(/tests/jest/.*|(\\.|/)(test|spec))\\.(ts|tsx)$',
  collectCoverageFrom: ['src/**/*.{ts,tsx,js,jsx}'],
  setupFilesAfterEnv: ['./src/setupTests.ts'],
}
export default config
