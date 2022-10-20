
class LoginPage {

    //
    navigate(url) {
        cy.visit(url);
        cy.wait(1000);

    }


    enterUsername(username) {
        cy.get('[id=user-name]')
            .clear()
            .type(username)
            .should("have.value", username);

        return this;
    }

    enterPassword(password) {
        cy.get('[id=password]')
            .clear()
            .type(password)
            .should("have.value", password);

        return this;
    }

    submit() {

        cy.get('[id=login-button]').click()

        return this;
    }

    controlWrongErrorMessageIsExist() {

        cy.get('[data-test=error]').should('contain.text', 'Username and password do not match any user in this service')

        return this;
    }


}
export default LoginPage