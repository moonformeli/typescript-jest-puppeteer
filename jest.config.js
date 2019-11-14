module.exports = {
  verbose: true,
  roots: ["<rootDir>/src"],
  transform: {
    "^.+\\.tsx?$": "ts-jest"
  },
  globals: {
    "ts-jest": {
      diagnostics: false
    }
  },
  setupFilesAfterEnv: ["<rootDir>/jest.beforeEach.ts"],
  globalSetup: "<rootDir>/setup.ts"
};
