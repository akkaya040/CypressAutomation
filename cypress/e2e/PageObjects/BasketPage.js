
class BasketPage {

    //delete product with name
    deleteProductContainsName(productName) {
        cy.xpath("//div[@class='inventory_item_name'][contains(text(),'" + productName + "')]/../../..//button")
            .click()

        return this;
    }

    goToCheckout() {

        cy.get('[data-test="checkout"]').click();
        cy.url().should('include', '/checkout-step-one.html');

        return this;
    }

    fillAddressForm(name, surname, zip) {
        cy.xpath("//input[@id='first-name']")
            .clear()
            .type(name)
            .should("have.value", name);


        cy.xpath("//input[@id='last-name']")
            .clear()
            .type(surname)
            .should("have.value", surname);


        cy.xpath("//input[@id='postal-code']")
            .clear()
            .type(zip)
            .should("have.value", zip);

        cy.xpath("//input[@id='continue']")
            .click()

        cy.url().should('include', '/checkout-step-two.html');

        return this;
    }


    clickFinishButton() {

        cy.xpath("//button[@id='finish']")
            .should('be.visible')
            .click();

        return this;
    }

    assertOrderIsConfirmedWith(message) {

        cy.get('.complete-header')
            .should('be.visible')
            .should('have.text', message);

        return this;
    }



}
export default BasketPage