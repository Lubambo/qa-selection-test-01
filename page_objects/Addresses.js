const { browser, element, by } = require("protractor");
const path = require("path");

class Addresses {

    constructor() {
        // Address dashboard Page.
        this.newAddressLink = element(by.linkText("New Address"));
        this.tableItems = element.all(by.xpath('/html/body/div/table/tbody/tr'));

        // New Address form.
        this.form = {
            firstName: element(by.id("address_first_name")),
            lastName: element(by.id("address_last_name")),
            address1: element(by.id("address_street_address")),
            address2: element(by.id("address_secondary_address")),
            city: element(by.id("address_city")),
            state: element(by.id("address_state")),
            zipCode: element(by.id("address_zip_code")),
            country: element(by.xpath('//*[@id="new_address"]/div[8]')),
            birthday: element(by.id("address_birthday")),
            color: element(by.id("address_color")),
            age: element(by.id("address_age")),
            website: element(by.id("address_website")),
            picture: element(by.id("address_picture")),
            phone: element(by.id("address_phone")),
            commonInterests: [
                element(by.xpath('//*[@id="address_interest_climb"]')),
                element(by.xpath('//*[@id="address_interest_dance"]')),
                element(by.xpath('//*[@id="address_interest_read"]'))
            ],
            note: element(by.id("address_note")),
            submitBtn: element(by.name("commit")),
            errorMessage: element(by.id("error_explanation"))
        }

        // Address details page
        this.successMessage = element(by.cssContainingText(".alert-notice", "Address was successfully created."));
        this.listLink = element(by.linkText("List"));
        this.editLink = element(by.linkText("Edit"));
    }

    visit() {
        browser.get("/addresses");
    }

    selectState(state) {
        if (this.checkValue(state)) {
            this.form.state.all(by.cssContainingText("option", state)).click();
        }
    }

    selectCountry(index) {
        if (index >= 0) {
            this.form.country.all(by.name("address[country]")).get(index).click();
        }
    }

    setBirthday(date) {
        if (this.checkValue(date))
            this.form.birthday.clear();
        this.form.birthday.sendKeys(date);
    }

    setColor(color) {
        if (this.checkValue(color)) {
            this.form.color.click().then(() => {
                this.form.color.clear();
                this.form.color.sendKeys(color);
            });
        }
    }

    selectPicture(file) {
        if (this.checkValue(file)) {
            let filePath = "../test_data/" + file;
            let absolutePath = path.resolve(__dirname, filePath);
            let fileElement = this.form.picture;
            //browser.executeScript("arguments[0].style.visibility = 'visible';", fileElement.getWebElement());
            fileElement.sendKeys(absolutePath);
        }
    }

    selectInterests(interests = []) {
        if (interests.length > 0) {
            for (let i = 0; i < interests.length; i++) {
                this.form.commonInterests[parseInt(interests[i])].click();
            }
        }
    }

    addNewAddress(address) {
        this.form.firstName.sendKeys(address.firstName);
        this.form.lastName.sendKeys(address.lastName);
        this.form.address1.sendKeys(address.address1);
        this.form.address2.sendKeys(address.address2);
        this.form.city.sendKeys(address.city);
        this.selectState(address.state);
        this.form.zipCode.sendKeys(address.zipCode);
        this.selectCountry(address.country);
        this.setBirthday(address.birthday);
        this.setColor(address.color);
        this.form.age.sendKeys(address.age);
        this.form.website.sendKeys(address.website);
        this.selectPicture(address.picture);
        this.form.phone.sendKeys(address.phone);
        this.selectInterests(address.commonInterests);
        this.form.note.sendKeys(address.note);

        this.form.submitBtn.click();
    }

    checkValue(value) {
        if (value != null && value != undefined && value.length > 0) {
            return true;
        }

        return false;
    }

    getTableRowItems(row = 0) {
        return this.tableItems.get(row).all(by.tagName("td"));
    }

}

module.exports = new Addresses();