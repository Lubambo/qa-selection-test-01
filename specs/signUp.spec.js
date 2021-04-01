const { browser, by } = require("protractor");
const using = require("jasmine-data-provider");
const SignUp = require("../page_objects/SignUp");
const SignIn = require("../page_objects/SignIn");
const Welcome = require("../page_objects/Welcome");
const immutableUsers = require("../test_data/immutableUsers.json");
const randomTestData = require("../test_data/DataGenerator");

const testData = immutableUsers.list;
//const testData = randomTestData.generateRandomUsers(3);  // Usado para evitar os problemas envolvendo cadastro de usuário já existente.

using(testData, (data) => {

    describe("[Test Case - 1: Autenticação -> Cadastro de usuário]", () => {

        browser.waitForAngularEnabled(false);   // Necessário para navegar em páginas que não usam Angular.

        beforeAll(() => {
            browser.manage().window().maximize();
        });

        if (data.email.length !== 0 || data.password.length !== 0) {
            it("Verificar URL de Cadastro/Sign Up", () => {
                SignUp.visit();
                expect(browser.getCurrentUrl()).toBe("http://a.testaddressbook.com/sign_up");
            });

            it("Criar novo usuário", () => {
                SignUp.createUser(data.email, data.password);
            });

            it("Capturar e-mail do usuário logado", () => {
                checkLoggedEmail();
            });

            it("Encerrar sessão do usuário recém cadastrado", () => {
                Welcome.signOut();
                expect(browser.getCurrentUrl()).toBe("http://a.testaddressbook.com/sign_in");
            });
        }

    });

    describe("[Test Case - 2: Autenticação -> 'Sign In' de usuário recém cadastrado]", () => {

        browser.waitForAngularEnabled(false);   // Necessário para navegar em páginas que não usam Angular.

        beforeAll(() => {
            browser.manage().window().maximize();
        });

        if (data.email.length === 0 || data.password.length === 0) {
            it("Fazer login sem preencher todos os campos", () => {
                SignIn.visit();
                SignIn.logIn(data.email, data.password);

                let errorMsg = browser.element(by.className("alert-notice"));
                expect(errorMsg.getText()).toBe("Bad email or password.");

                SignIn.email.sendKeys("");
                SignIn.password.sendKeys("");
            });
        }
        else {
            it("Autenticar usuário", () => {
                SignIn.visit();
                SignIn.logIn(data.email, data.password);
                checkLoggedEmail();
            });

            it("Encerrar sessão do usuário após Sign In", () => {
                Welcome.signOut();
                expect(browser.getCurrentUrl()).toBe("http://a.testaddressbook.com/sign_in");
            });
        }

    });

    function checkLoggedEmail() {
        var loggedEmail = Welcome.loggedEmail;
        expect(loggedEmail.getText()).toBe(data.email);
    }

});
