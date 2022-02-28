module.exports = {
  clearMocks: true,
  collectCoverage: true,
  collectCoverageFrom: [
    "src/**",
  ],
  coverageDirectory: "coverage",
  coverageProvider: "v8",
  setupFilesAfterEnv: [
    "./__test__/common/globals.js",
  ]
};
