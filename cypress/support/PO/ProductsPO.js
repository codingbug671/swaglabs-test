export default class ProductsPage {


    getAddToCartBtn() {
        return 'button';
    }

    getShoppingCartBadge()
    {
        return 'span[data-test="shopping-cart-badge"]';
    }

    getInventoryItemName() {
        return 'div[data-test="inventory-item-name"]';
    }

    
    getInventoryItem() {
        return 'div[data-test="inventory-item"]';
    }



    addItemsToCart() {
    cy.allure().step('Add items to cart');
  const selectedItemNames = [];

  cy.get(this.getInventoryItem()).each((item, index) => {
    if (index < 3) {
      cy.wrap(item).within(() => {
        cy.allure().step(`Add item #${index + 1} to cart`);

        cy.get(this.getInventoryItemName())
          .invoke('text')
          .then((itemName) => {
            const name = itemName.trim();
            selectedItemNames.push(name);
            cy.allure().logStep(`Selected item: ${name}`);
          });

        cy.get(this.getAddToCartBtn()).click();

        cy.allure().logStep('Clicked Add to Cart button');
      });
    }
  }).then(() => {
    
    cy.get(this.getShoppingCartBadge()).should('have.text', '3');
    cy.allure().step('Assert cart badge shows 3 items');
  });

  return cy.wrap(selectedItemNames);
}

  

    

  
 



    

  



    



}


    
   
   




