const path = require("path");

module.exports = {
  rootDir: path.resolve(__dirname, "./"),
  moduleFileExtensions: ["js", "json", "vue"],
  transform: {
    ".*\\.js$": "<rootDir>/node_modules/babel-jest",
    ".*\\.vue$": "<rootDir>/node_modules/vue-jest"
  },
  snapshotSerializers: ["<rootDir>/node_modules/jest-serializer-vue"],
  setupFiles: ["<rootDir>/jest.setup"],
  mapCoverage: true,
  coverageDirectory: "<rootDir>/coverage",
  collectCoverageFrom: [
    "src/**/*.{js,vue}",
    "!src/index.umd.js",
    "!**/node_modules/**"
  ]
};
