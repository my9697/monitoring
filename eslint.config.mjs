import globals from "globals";
import tseslint from "typescript-eslint";
import eslintConfigPrettier from 'eslint-config-prettier';

export default [
  ...tseslint.configs.recommended,
  eslintConfigPrettier,
  {
    files: ["**/*.{js,mjs,cjs,ts}"],
    languageOptions: { globals: globals.browser },
    rules: {"@typescript-eslint/no-explicit-any": "off"}
  },
];