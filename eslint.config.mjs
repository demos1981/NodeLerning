import globals from "globals";

import path from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";
import pluginJs from "@eslint/js";

// mimic CommonJS variables -- not needed if using CommonJS
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: pluginJs.configs.recommended,
});

export default [
  { languageOptions: { globals: globals.browser } },

  {
    env: {
      browser: true,
      es2021: true,
      jest: true,
    },
    extends: [
      "eslint:recomended",
      "plugin:@typescript-eslint/recommended",
      "prettier/@typescript-eslint",
    ],
    globals: {
      Atomics: "readonly",
      SharedArrayBuffer: "readonly",
    },
    parserOptions: {
      project: ["./tsconfig.json"],
      tscongigRootDir: __dirname,
      ecmaVersion: "latest",
      sourceType: "module",
    },
    ignorePatterns: ["**/*.js"],
    rules: {
      semi: ["error", "always"],
      indent: ["error", 2],
      "max-len": ["error", { code: 160 }],

      eqeqeq: ["error", "smart"],
      "no-multi-space": "error",
      "no-multiple-empty-lines": "error",
      "no-trailing-spaces": "error",
      "eol-last": ["error", "always"],
      "import/prefer-default-export": "off",
      "@typescript-eslint/explicit-function-return-type": "off",
      "@typescript-eslint/explicit-member-accessibility": "off",
    },
  },
];
