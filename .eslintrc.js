module.exports = {
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
    quotes: ["error", single, { avoidEscape: true }],
    eqeqeq: ["error", "smart"],
    "no-multi-space": "error",
    "no-multiple-empty-lines": "error",
    "no-trailing-spaces": "error",
    "eol-last": ["error", "always"],
    "import/prefer-default-export": "off",
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/explicit-member-accessibility": "off",
  },
  settings: {
    "import/parsers": {
      "@typescript-eslint/parser": [".ts", ".tsx"],
    },
    "import/resolver": {
      typescript: {},
    },
  },
};
