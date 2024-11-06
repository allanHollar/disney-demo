// eslint.config.js
const { Linter } = require("eslint");

/** @type {Linter.FlatConfig[]} */
const config = [
  {
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: "module",
      parser: require("@babel/eslint-parser"),
      parserOptions: {
        requireConfigFile: false,
        babelOptions: {
          presets: ["@babel/preset-react"],
        },
      },
      globals: {
        window: "readonly",
        document: "readonly",
      },
    },
    plugins: {
      react: require("eslint-plugin-react"),
      import: require("eslint-plugin-import"),
    },
    rules: {
      "import/order": [
        "warn",
        {
          groups: [
            "builtin",
            "external",
            "internal",
            "parent",
            "sibling",
            "index",
          ],
          "newlines-between": "always",
          alphabetize: { order: "asc", caseInsensitive: true },
        },
      ],
      "react/react-in-jsx-scope": "off",
    },
    settings: {
      react: {
        version: "detect",
      },
    },
  },
];

module.exports = config;
