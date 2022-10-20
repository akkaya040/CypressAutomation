/// <reference types="cypress" />

import HomePage from "./PageObjects/HomePage";
import LoginPage from "./PageObjects/LoginPage"


var login = new LoginPage();
var homePage = new HomePage();

describe('Functional Tests', () => {

  //Specific Task Before Main Test Cases Run.
  beforeEach(() => {
    cy.fixture('credentials').then(function (data) {
      this.data = data;
    })
  })


  it('Trying Login With Correct Username & Password ', function () {


    login.navigate(this.data.url);
    login.enterUsername(this.data.username);
    login.enterPassword(this.data.password);
    login.submit();
    cy.url().should('include', '/inventory.html');
    cy.logout();

  })

  //Login With Precoded Function
  it('Trying Login With Method ', function () {

    cy.login(this.data.username, this.data.password);
    cy.logout();

  })

  it('Success Login Control ', function () {

    cy.login(this.data.username, this.data.password);
    cy.logout();

  })

  it('Try Unregistered User Login  Message Control ', function () {

    login.enterUsername('wrong_username');
    login.enterPassword(this.data.password);
    login.submit();
    login.controlWrongErrorMessageIsExist();

  })

  it('Try Wrong Password Login Message Control ', function () {

    login.enterUsername(this.data.username);
    login.enterPassword('wrong_pass');
    login.submit();
    login.controlWrongErrorMessageIsExist();

  })



})
