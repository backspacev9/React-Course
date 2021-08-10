module.exports = {
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 6,
        project: './tsconfig.json',
    },
    extends: ['airbnb-typescript'],
    parser: '@typescript-eslint/parser',
    settings: {
        react: {
            pragma: 'React',
            version: 'detect',
        },
    },
};