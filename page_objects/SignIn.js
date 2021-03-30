const { element, by, browser } = require("protractor");

class SignIn {

    constructor() {
        this.email = element(by.id("session_email"));
        this.password = element(by.id("session_password"));
        this.submitBtn = element(by.name("commit"));
    }

    visit() { browser.get("/sign_in"); }

    logIn(email, password) {
        this.email.sendKeys(email);
        this.password.sendKeys(password);
        this.submitBtn.click();
    }

}

module.exports = new SignIn();