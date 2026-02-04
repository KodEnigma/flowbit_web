import globals from 'globals';
import pluginVue from 'eslint-plugin-vue';

export default [
  {
    files: ['**/*.js', '**/*.jsx', '**/*.cjs', '**/*.mjs'],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.es2024
      },
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module'
      }
    },
    rules: {
      // Basic JS rules
      'no-unused-vars': 'warn',
    }
  },
  {
    files: ['**/*.vue'],
    languageOptions: {
      parser: require('vue-eslint-parser'),
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module'
      }
    },
    plugins: {
      vue: pluginVue
    }
  }
];