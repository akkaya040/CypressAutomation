
class HomePage {

    //Logout From Page
    logout() {
        cy.get('[id=react-burger-menu-btn]').click()
        cy.get('#logout_sidebar_link').click()
        cy.wait(1000);

    }

    //In order to add product to basket
    addProductContainsName(productName){
        cy.xpath("//div[@class='inventory_item_name'][contains(text(),'" + productName + "')]/../../..//button")
        .click()

    }

    //Home Page Should Contains Product
    checkProductsAreExist(){
        //control visibility of products
        cy.get('[class=inventory_item]').should('be.visible')

    }




}
export default HomePage