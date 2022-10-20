// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })


import LoginPage from "../e2e/PageObjects/LoginPage.js"
import HomePage from "../e2e/PageObjects/HomePage.js"

Cypress.Commands.add('login', (email, password) => {
    const loginPage = new LoginPage();
    loginPage.enterUsername(email);
    loginPage.enterPassword(password);
    loginPage.submit();
    cy.url().should('include', '/inventory.html')

 })


 Cypress.Commands.add('logout', () => {
    const homePage = new HomePage();
    homePage.logout()
    cy.url().should('eq', 'https://www.saucedemo.com/')

 })

 Cypress.Commands.add('generateString', ()=>{
        var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        var charactersLength = characters.length;
        return [...Array(length)]
        .map(i => characters[Math.random() * charactersLength | 0])
        .join('');
 });
