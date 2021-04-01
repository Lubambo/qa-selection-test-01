const using = require("jasmine-data-provider");
const { browser, element, by } = require("protractor");
const SignIn = require("../page_objects/SignIn");
const Welcome = require("../page_objects/Welcome");
const immutableUsers = require("../test_data/immutableUsers.json");
const immutableAddresses = require("../test_data/immutableAddresses.json");
const Addresses = require("../page_objects/Addresses");

const testUser = immutableUsers.mainUser;
const testData = immutableAddresses;

describe("[Test Case - 1: Endereço -> Cadastro de Endereço]", () => {
    browser.waitForAngularEnabled(false);   // Necessário para navegar em páginas que não usam Angular.

    beforeAll(() => {
        browser.manage().window().maximize();
        SignIn.visit();
        SignIn.logIn(testUser.email, testUser.password);
    });

    using(testData, (data) => {
        it("Acessar página de lista de Endereços", () => {
            Welcome.goToAddressPage();
            expect(browser.getCurrentUrl()).toBe("http://a.testaddressbook.com/addresses");
        });

        if (data.firstName == "" || data.lastName == "" || data.address1 == "" || data.city == "" || data.zipCode == "") {
            it("Exibir mensagem de erro", () => {
                Addresses.newAddressLink.click();
                browser.sleep(1000);
                Addresses.addNewAddress(data);
                expect(Addresses.form.errorMessage.getText()).toMatch(/^[0-9]\serror/);
            });
        }
        else {
            it("Adicionar Endereço", async () => {
                browser.sleep(1000);
                let tableSizeBefore = await Addresses.tableItems.count();

                Addresses.newAddressLink.click();
                browser.sleep(1000);
                Addresses.addNewAddress(data);
                Addresses.listLink.click();

                browser.sleep(1000);
                let tableSizeAfter = await Addresses.tableItems.count();

                expect(tableSizeAfter).toBeGreaterThan(tableSizeBefore);
            });

            it("Visualizar Endereço", () => {
                //browser.sleep(6000);

                let item = Addresses.tableItems.get(0).all(by.tagName("td"));
                let showBtn = item.get(4).element(by.tagName("a"));

                showBtn.click();

                expect(browser.getCurrentUrl()).toMatch(/http:\/\/a\.testaddressbook\.com\/addresses\/[0-9]{4}/);
            });
        }
    });
});
