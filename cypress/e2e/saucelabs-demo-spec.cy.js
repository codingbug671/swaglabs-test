/// <reference types="cypress" />

import LoginPage from "../support/PO/LoginPO";
import ProductsPage from "../support/PO/ProductsPO";
import CartPage from "../support/PO/CartPO";
import users from '../fixtures/users.json';
import CheckoutPage from "../support/PO/CheckoutPO";



const loginPage = new LoginPage();
const productsPage = new ProductsPage();
const cartPage = new CartPage();
const checkoutPage = new CheckoutPage();



describe('Sauce Labs Demo - Test Case', () => {
  
  users.forEach((user) => {
  it(`should complete full checkout flow for ${user.username}`, () => {
    loginPage.visitURL();
    loginPage.loginUser(user);
    productsPage.addItemsToCart().then((selectedItemNames) => {
      cartPage.validateCartItems(selectedItemNames);
      cartPage.checkOutItems();
      checkoutPage.addCheckoutDetails(user);
      checkoutPage.validateCheckoutItems(selectedItemNames);
      checkoutPage.validateTotalPrice();
      checkoutPage.completesCheckout();

      
    });
  });
});


 
});
