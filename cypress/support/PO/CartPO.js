export default class CartPage {


    getShoppingCartLink() {
        return 'a[data-test="shopping-cart-link"]';
    }

  
    getShoppingCartItemName() {
        return 'div[data-test="inventory-item-name"]';
    }

    
    getShoppingCartItem() {
        return 'div[data-test="inventory-item"]';
    }

    getCheckoutButton()
    {
      return 'button[data-test="checkout"]'
    }



    
   validateCartItems(expectedItemNames) {
  cy.allure().step('Validating items in cart');

  cy.get(this.getShoppingCartLink()).click();

  cy.url().should('include', '/cart.html');

  cy.get(this.getShoppingCartItemName()).then($items => {
    const actualNames = [...$items].map(el => el.innerText.trim());

    expect(actualNames).to.have.length(expectedItemNames.length);

    expectedItemNames.forEach(name => {
      expect(actualNames).to.include(name);
      cy.allure().logStep(`Validated presence of item: ${name}`);
    });
  });
}


checkOutItems()
{

  cy.allure().step('Checkout cart items');

  cy.get(this.getCheckoutButton()).click();

  cy.url().should('include', '/checkout-step-one.html');
}

  

    

  
 



    

  



    



}


    
   
   




