const SpecReporter = require("jasmine-spec-reporter").SpecReporter;

exports.config = {
    directConnect: true,
    capabilities: {
        browserName: "chrome"
    },
    framework: "jasmine2",
    //specs: ["specs/*.spec.js"],
    specs: ["specs/addressCRUD.spec.js"],
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