/// <reference types="cypress" />


import HomePage from "./PageObjects/HomePage";
import LoginPage from "./PageObjects/LoginPage";
import BasketPage from "./PageObjects/BasketPage";

var login = new LoginPage();
var homePage = new HomePage();
var basketPage = new BasketPage();

describe('Regression Tests', function () {
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
      .controlIsProductAdded();

  })

  it('Add & Delete Product From Basket', function () {


    homePage.addProductContainsName('Sauce Labs Backpack')
      .addProductContainsName('Sauce Labs Fleece Jacket')
      .addProductContainsName('Sauce Labs Bolt T-Shirt')
      .controlIsProductAdded()
      .goToBasket()

    basketPage.deleteProductContainsName('Sauce Labs Fleece Jacket');

  })

  it('Buy A Product', function () {

    homePage.addProductContainsName('Sauce Labs Backpack')
      .controlIsProductAdded()
      .goToBasket();

    basketPage.goToCheckout()
      .fillAddressForm('Kurtulus', 'Akkaya', '16100')
      .clickFinishButton()
      .assertOrderIsConfirmedWith('THANK YOU FOR YOUR ORDER');


  })




})
