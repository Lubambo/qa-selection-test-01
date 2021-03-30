const { element, by, browser } = require("protractor");

class Welcome {

    constructor() {
        this.homeLink = element(by.linkText("Home"));
        this.addressLink = element(by.linkText("Addresses"));
        this.signOutLink = element(by.linkText("Sign out"));
        this.loggedEmail = element(by.className("navbar-text"));
    }

    visit() { browser.get("/"); }

    goToHomePage() { this.homeLink.click(); }
    goToAddressPage() { this.addressLink.click(); }
    signOut() { this.signOutLink.click(); }

}

module.exports = new Welcome();