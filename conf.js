const SpecReporter = require("jasmine-spec-reporter").SpecReporter;

exports.config = {
    directConnect: true,
    capabilities: {
        browserName: "chrome"
    },
    framework: "jasmine2",
    specs: ["specs/ui_app/*.spec.js", "specs/rest_api_app/*.spec.js"],
    baseUrl: "http://a.testaddressbook.com/",
    allScriptsTimeout: 120000,
    onPrepare: () => {
        jasmine.getEnv().addReporter(new SpecReporter({
            displayFailuresSummary: true,
            displayFailuredSpec: true,
            displaySuiteNumber: true,
            displaySpecDuration: true
        }));
    }
}