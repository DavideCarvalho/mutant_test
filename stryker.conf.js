module.exports = function(config) {
  config.set({
    files: [
      {
        pattern: "src/**/*.js",
        mutated: true,
        included: false
      },
      "test/**/*.js"
    ],
    testRunner: "jest",
    mutator: "javascript",
    transpilers: [],
    reporter: ["html", "clear-text", "progress"],
    coverageAnalysis: "all"
  });
};
