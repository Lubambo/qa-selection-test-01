const { browser } = require("protractor");
const SignUp = require("../page_objects/SignUp");
const SignIn = require("../page_objects/SignIn");
const Welcome = require("../page_objects/Welcome");

describe("Cadastro e Autenticação de usuário", function () {

    browser.waitForAngularEnabled(false);   // Necessário para navegar em páginas que não usam Angular.

    const mutable = new Date();
    const user = {
        email: mutable.valueOf() + "@email.com",
        password: "12345"
    }

    beforeAll(() => {
        SignUp.visit();
        browser.manage().window().maximize();
    });

    it("Verifica URL de Cadastro/Sign Up", () => {
        expect(browser.getCurrentUrl()).toBe("http://a.testaddressbook.com/sign_up");
    });

    it("Cria novo usuário", () => {
        SignUp.createUser(user.email, user.password);
    });

    it("Captura e-mail do usuário logado", () => {
        checkLoggedEmail();
    });

    it("Encerra sessão do usuário", () => {
        Welcome.signOut();
        expect(browser.getCurrentUrl()).toBe("http://a.testaddressbook.com/sign_in");
    });

    it("Autentica usuário", () => {
        SignIn.logIn(user.email, user.password);
        checkLoggedEmail();
    });

    function checkLoggedEmail() {
        var loggedEmail = Welcome.loggedEmail;
        expect(loggedEmail.getText()).toBe(user.email);
    }

});