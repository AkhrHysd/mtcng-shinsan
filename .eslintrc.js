module.exports = {
    extends: ['next/core-web-vitals', 'plugin:@typescript-eslint/recommended'],
    plugins: ['@typescript-eslint'],
    parser: '@typescript-eslint/parser',
    rules: {
      // ここに追加のルールを設定
      '@typescript-eslint/no-unused-vars': 'error',
      '@typescript-eslint/explicit-module-boundary-types': 'off',
    },
  };