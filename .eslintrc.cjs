module.exports = {
    env: { browser: true, es2022: true },
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:react-hooks/recommended',
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
    plugins: ['react-refresh', 'prettier'],
    rules: {
        'react-refresh/only-export-components': 'warn',
        'prettier/prettier': ['error', { singleQuote: true }],
        quotes: ['error', 'single', { avoidEscape: true }],
    },
    overrides: [
        {
            files: ['**/*.cjs'],
            env: {
                node: true,
            },
        },
    ],
};
