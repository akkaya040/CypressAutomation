
class HomePage {

    //Logout From Page
    logout() {
        cy.get('[id=react-burger-menu-btn]').click()
        cy.get('#logout_sidebar_link').click()
        cy.wait(1000);

        return this;
    }

    //In order to add product to basket
    addProductContainsName(productName) {
        cy.xpath("//div[@class='inventory_item_name'][contains(text(),'" + productName + "')]/../../..//button")
            .click()

        return this;
    }

    //Home Page Should Contains Product
    checkProductsAreExist() {
        //control visibility of products
        cy.get('[class=inventory_item]').should('be.visible')

        return this;
    }

    controlIsProductAdded() {

        cy.get('.shopping_cart_badge')
            .should('be.visible')
            .invoke('text').then(parseFloat).should('be.gte', 1)

        return this;
    }

    goToBasket() {
        cy.get('.shopping_cart_link').click();
        cy.url().should('include', '/cart.html');

        return this;
    }



}
export default HomePage