module.exports = function(config) {
  config.set({
    files: [
      "src/**/__tests__/*.js",
      {
        pattern: "src/**/*.js",
        mutated: true,
        included: false
      }
    ],
    testRunner: "jest",
    mutator: "javascript",
    transpilers: [],
    reporter: ["html", "clear-text", "progress"],
    coverageAnalysis: "off"
  });
};
