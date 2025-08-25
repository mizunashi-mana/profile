import eslintJs from '@eslint/js';
import pluginEslintComments from '@eslint-community/eslint-plugin-eslint-comments/configs';
import stylistic from '@stylistic/eslint-plugin';
import { defineConfig } from 'eslint/config';
import * as pluginAstro from 'eslint-plugin-astro';
import { importX } from 'eslint-plugin-import-x';
import pluginPromise from 'eslint-plugin-promise';
import pluginUnusedImports from 'eslint-plugin-unused-imports';
import * as typescriptEslint from 'typescript-eslint';

export default defineConfig([
  eslintJs.configs.recommended,
  stylistic.configs.customize({
    indent: 2,
    semi: true,
  }),
  importX.flatConfigs.recommended,
  ...typescriptEslint.config(
    typescriptEslint.configs.recommended,
    typescriptEslint.configs.strict,
    typescriptEslint.configs.recommendedTypeChecked,
    typescriptEslint.configs.stylisticTypeChecked,
    {
      files: ['**/*.{ts,tsx}'],
      extends: [importX.flatConfigs.typescript],
    },
  ),
  pluginEslintComments.recommended,
  pluginPromise.configs['flat/recommended'],
  ...pluginAstro.configs.recommended,
  {
    plugins: {
      'unused-imports': pluginUnusedImports,
    },
  },
]);
