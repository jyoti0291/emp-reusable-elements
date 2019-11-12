const scanner = require("sonarqube-scanner");
scanner({
  serverUrl: "http://localhost:1234/",
  // If you need auth
  token: "ceec91d3b8b63f8ee6add8688f9f95046f1c8b12",
    options: {
      "sonar.projectKey": "EMPPOC",
      "sonar.sources": ".",
      "sonar.tests": "tests",
      "sonar.typescript.lcov.reportPaths": "coverage/lcov.info",
      "sonar.ts.tslintconfigpath":"tslint.json",
      "sonar.ts.lcov.reportpath":"test-results/coverage/coverage.lcov"
  }
},() => {});