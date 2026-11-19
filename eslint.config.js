// @ts-check
import js from '@eslint/js';
import tseslint from 'typescript-eslint';
import astro from 'eslint-plugin-astro';
import globals from 'globals';

export default tseslint.config(
  {
    ignores: [
      'dist/',
      '.astro/',
      '.wrangler/',
      'node_modules/',
      'worker-configuration.d.ts',
      '.lighthouseci/',
      // Source du design system (aperçus, archives) : publiée telle quelle, pas du code du site.
      'design-system/',
    ],
  },
  js.configs.recommended,
  ...tseslint.configs.recommended,
  ...astro.configs.recommended,
  {
    languageOptions: {
      globals: { ...globals.browser, ...globals.node },
    },
  },
  {
    files: ['**/*.d.ts'],
    rules: { '@typescript-eslint/triple-slash-reference': 'off' },
  },
  {
    // Moteur du cube porté tel quel depuis le prototype cube-gsap (code dense, généré à la main).
    // Avertissements seulement, pour ne pas bloquer la CI ; à nettoyer progressivement.
    files: ['src/scripts/cube-home.js'],
    rules: {
      '@typescript-eslint/no-unused-vars': 'warn',
      '@typescript-eslint/no-unused-expressions': 'off',
    },
  },
);
