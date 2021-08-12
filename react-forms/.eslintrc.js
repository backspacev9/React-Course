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
    plugins: [
        // ...
        'react-hooks',
    ],
    rules: {
        // ...
        'react-hooks/rules-of-hooks': 'error', // Проверяем правила хуков
        'react-hooks/exhaustive-deps': 'warn', // Проверяем зависимости эффекта
    },
};