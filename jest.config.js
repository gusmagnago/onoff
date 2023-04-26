module.exports = {
    testEnvironment: 'jest-environment-jsdom',
    setupFilesAfterEnv: ['<rootDir>/.jest/setup-tests.ts'],
    moduleNameMapper: {
        '\\.(svg)$': '<rootDir>./jest/mocks/mock-files.ts',
        '\\.(css|sass|scss)$': 'identity-obj-proxy',
    },
    preset: 'ts-jest',
    transform: {
        '^.+\\.ts?$': 'ts-jest',
    },
    transformIgnorePatterns: ['<rootDir>/node_modules/'],
};
