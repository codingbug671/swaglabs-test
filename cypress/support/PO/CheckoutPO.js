export default class CheckoutPage {


    getContinueBtn() {
        return 'input[data-test="continue"]';
    }

    getFirstNameInput()
    {
        return 'input[data-test="firstName"]';
    }

    getLastNameInput() {
        return 'input[data-test="lastName"]';
    }

    getPostalCodeInput()
    {
        return 'input[data-test="postalCode"]';
    }

    getCheckoutItemName() {
        return 'div[data-test="inventory-item-name"]';
    }

    
    getCheckoutItem() {
        return 'div[data-test="inventory-item"]';
    }

    getCheckoutItemPrices()
    {
        return 'div[data-test="inventory-item-price"]'
    }

    getTotalPrice()
    {
        return 'div[data-test="subtotal-label"]'
    }

    getFinishBtn()
    {
        return 'button[data-test="finish"]'
    }

    getOrderCompleteText()
    {
        return 'div[data-test="complete-text"]'
    }

    getBackToHomeBtn()
    {
        return 'button[data-test="back-to-products"]'
    }


    addCheckoutDetails(user) {

        cy.allure().step('User adds checkout details');
  
        cy.get(this.getFirstNameInput()).type(user.firstname);
        cy.get(this.getLastNameInput()).type(user.lastname);
        cy.get(this.getPostalCodeInput()).type(user.zipcode);
        cy.get(this.getContinueBtn()).click();

        cy.url().should('include', '/checkout-step-two.html');

       
    }

    validateCheckoutItems(expectedItemNames) {
  cy.allure().step('Validating items in checkout page');

  cy.get(this.getCheckoutItemName()).then($items => {
    const actualNames = [...$items].map(el => el.innerText.trim());

    expect(actualNames).to.have.length(expectedItemNames.length);

    expectedItemNames.forEach(name => {
      expect(actualNames).to.include(name);
      cy.allure().logStep(`Validated presence of item: ${name}`);
    });
  });

    }

 validateTotalPrice() {
  cy.allure().step('Validating total price');

  let calculatedTotal = 0;

  cy.get(this.getCheckoutItemPrices()).each(($el) => {
    cy.wrap($el)
      .invoke('text')
      .then((priceText) => {
        const price = parseFloat(priceText.replace('$', '').trim());
        calculatedTotal += price;
      });
  }).then(() => {
    cy.get(this.getTotalPrice())
      .invoke('text')
      .then((totalText) => {
        const displayedTotal = parseFloat(totalText.replace('Item total: $', '').trim());

        cy.allure().logStep(`Calculated total: $${calculatedTotal.toFixed(2)}`);
        cy.allure().logStep(`Displayed total: $${displayedTotal.toFixed(2)}`);

        expect(displayedTotal).to.eq(calculatedTotal);
      });
  });
}

completesCheckout()
{
    cy.allure().step('User completes checkout');
    cy.get(this.getFinishBtn()).click();
    cy.url().should('include', '/checkout-complete.html');
    cy.get(this.getOrderCompleteText())
    .should('have.text', 'Your order has been dispatched, and will arrive just as fast as the pony can get there!')
    .then(() => {
      cy.allure().logStep('Verified order confirmation message');
    });
    cy.allure().step('Navigate Back To Home');
    cy.get(this.getBackToHomeBtn()).click();
    cy.url().should('include', '/inventory.html');
}









    



}


    
   
   




