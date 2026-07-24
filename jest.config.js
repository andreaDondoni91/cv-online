module.exports = {
  testEnvironment: "jsdom",
  transform: {
    "^.+\\.[jt]sx?$": "babel-jest",
  },
  transformIgnorePatterns: ["node_modules/(?!(gatsby)/)"],
  moduleNameMapper: {
    ".+\\.(css|less|sass|scss)$": "identity-obj-proxy",
    ".+\\.(jpg|jpeg|png|gif|svg|webp|ico)$": "<rootDir>/__mocks__/file-mock.js",
  },
  testPathIgnorePatterns: ["node_modules", "\\.cache", "<rootDir>/public", "<rootDir>/e2e"],
  setupFiles: ["<rootDir>/loadershim.js"],
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
};
