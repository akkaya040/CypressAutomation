
class BasketPage {

    //Logout From Page
    logout() {
        cy.get('[id=react-burger-menu-btn]').click()
        cy.get('#logout_sidebar_link').click()
        cy.wait(1000);

    }

    //In order to add product to basket
    addProductContainsName(productName){

    }

    //Home Page Should Contains Product
    checkProductsAreExist(){


    }




}
export default BasketPage