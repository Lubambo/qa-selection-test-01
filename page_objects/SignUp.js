const { element, by, browser } = require("protractor");

class SignUp {

    constructor() {
        this.email = element(by.id("user_email"));
        this.password = element(by.id("user_password"));
        this.submitBtn = element(by.name("commit"));
    }

    visit() { browser.get("/sign_up"); }

    createUser(email, password) {
        this.email.sendKeys(email);
        this.password.sendKeys(password);
        this.submitBtn.click();
    }

}

module.exports = new SignUp();