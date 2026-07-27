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

  // Application source: browser, ES modules, JSX.
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
      // No PropTypes / TypeScript in this project by design.
      "react/prop-types": "off",
      // Allow destructuring to omit props into a `...rest` collector.
      "no-unused-vars": ["error", { ignoreRestSiblings: true }],
      // Literal quotes are intentional (package.json-style code display).
      "react/no-unescaped-entities": "off",
    },
  },

  // CommonJS config files run by Node.
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

  // Gatsby SSR/browser APIs: ES modules in a Node context.
  {
    files: ["gatsby-browser.js", "gatsby-ssr.js"],
    languageOptions: {
      sourceType: "module",
      globals: { ...globals.browser, ...globals.node },
    },
  },

  // Jest tests and setup files.
  {
    files: ["**/*.test.{js,jsx}", "jest.setup.js", "loadershim.js"],
    languageOptions: {
      globals: { ...globals.browser, ...globals.node, ...globals.jest },
    },
  },

  // Jest manual mocks: CommonJS + jest globals.
  {
    files: ["__mocks__/**"],
    languageOptions: {
      sourceType: "commonjs",
      globals: { ...globals.node, ...globals.jest },
    },
  },
];
