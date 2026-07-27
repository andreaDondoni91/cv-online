const js = require("@eslint/js");
const react = require("eslint-plugin-react");
const reactHooks = require("eslint-plugin-react-hooks");
const jsxA11y = require("eslint-plugin-jsx-a11y");
const globals = require("globals");

module.exports = [
  {
    ignores: ["node_modules/**", "public/**", ".cache/**", ".claude/**", "coverage/**"],
  },

  js.configs.recommended,
  react.configs.flat.recommended,
  jsxA11y.flatConfigs.recommended,

  {
    files: ["**/*.{js,jsx}"],
    plugins: { "react-hooks": reactHooks },
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: "module",
      parserOptions: { ecmaFeatures: { jsx: true } },
      globals: { ...globals.browser },
    },
    settings: { react: { version: "detect" } },
    rules: {
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "warn",
      "react/prop-types": "off",
      "no-unused-vars": ["error", { ignoreRestSiblings: true }],
      "react/no-unescaped-entities": "off",
    },
  },

  {
    files: [
      "eslint.config.js",
      "gatsby-config.js",
      "babel.config.js",
      "jest.config.js",
      "postcss.config.js",
      "tailwind.config.js",
    ],
    languageOptions: {
      sourceType: "commonjs",
      globals: { ...globals.node },
    },
  },

  {
    files: ["gatsby-browser.js", "gatsby-ssr.js"],
    languageOptions: {
      sourceType: "module",
      globals: { ...globals.browser, ...globals.node },
    },
  },

  {
    files: ["**/*.test.{js,jsx}", "jest.setup.js", "loadershim.js"],
    languageOptions: {
      globals: { ...globals.browser, ...globals.node, ...globals.jest },
    },
  },

  {
    files: ["__mocks__/**"],
    languageOptions: {
      sourceType: "commonjs",
      globals: { ...globals.node, ...globals.jest },
    },
  },
];
