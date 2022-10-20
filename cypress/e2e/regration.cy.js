/// <reference types="cypress" />


import HomePage from "./PageObjects/HomePage";
import LoginPage from "./PageObjects/LoginPage"

var login = new LoginPage();
var homePage = new HomePage();

describe('Regration Tests', function () {
  before(() => {

    cy.fixture('credentials').then(function (data) {
      this.data = data;
    })

  })

  beforeEach(function () {

    login.navigate('https://www.saucedemo.com/');
    cy.login('standard_user', 'secret_sauce');


  })

  it('Home Page Product Control', function () {
    
    homePage.checkProductsAreExist();

  })

  it('Add Product To Basket And Control', function () {
    homePage.addProductContainsName('Sauce Labs Bolt T-Shirt')

  })

  it('Add & Delete Product From Basket', function () {

  })


})
