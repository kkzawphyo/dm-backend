import { defineConfig } from 'eslint-define-config';
import typescriptEslintParser from '@typescript-eslint/parser';
import typescriptEslintPlugin from '@typescript-eslint/eslint-plugin';

export default defineConfig([
  {
    files: ['src/**/*.ts'], // Include all .ts files under src
    languageOptions: {
      parser: typescriptEslintParser,
      ecmaVersion: 2020,
      sourceType: 'module',
    },
    plugins: {
      '@typescript-eslint': typescriptEslintPlugin,
    },
    rules: {
      semi: [2, 'always'],
      'space-before-function-paren': [0, { anonymous: 'always', named: 'always' }],
      camelcase: 0,
      'no-return-assign': 0,
      quotes: ['error', 'single'],
      '@typescript-eslint/no-non-null-assertion': 'off',
      '@typescript-eslint/no-namespace': 'off',
      '@typescript-eslint/explicit-module-boundary-types': 'off',
    },
  },
  // Prettier Configuration
  {
    files: ['*.{js,ts}'],
    rules: {
      'prettier/prettier': ['error'],
    },
    plugins: ['prettier'],
  },
]);
