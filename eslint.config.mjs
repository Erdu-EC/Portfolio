import astroPlugin from 'eslint-plugin-astro'
import js from '@eslint/js'

export default [
  js.configs.recommended,
  ...astroPlugin.configs.recommended,
  {
    files: ['**/*.astro'],
    languageOptions: {
      globals: {
        Astro: 'readonly',
      },
    },
  },
  {
    rules: {
      'no-unused-vars': 'off',
      'no-undef': 'off',
    },
  },
]
