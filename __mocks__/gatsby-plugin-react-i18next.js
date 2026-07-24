const React = require("react");
const itTranslation = require("../locales/it/translation.json");

function getByPath(obj, path) {
  return path.split(".").reduce((acc, key) => (acc == null ? undefined : acc[key]), obj);
}

function t(key, options) {
  const value = getByPath(itTranslation, key);
  if (options && options.returnObjects) return value;
  return value !== undefined ? value : key;
}

const i18nextApi = {
  language: "it",
  languages: ["it", "en"],
  defaultLanguage: "it",
  originalPath: "/",
  changeLanguage: jest.fn(),
  navigate: jest.fn(),
  t,
};

module.exports = {
  useTranslation: () => ({ t, i18n: { language: "it" } }),
  useI18next: () => i18nextApi,
  Trans: ({ children }) => children,
  Link: ({ to, language, ...rest }) => React.createElement("a", { href: to, ...rest }),
  I18nextContext: React.createContext(i18nextApi),
};
