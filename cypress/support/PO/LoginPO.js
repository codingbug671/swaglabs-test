export default class LoginPage {


    getLoginBtn() {
        return 'input[data-test="login-button"]';
    }

    getUsernameInput()
    {
        return 'input[data-test="username"]';
    }

    getPasswordInput() {
        return 'input[data-test="password"]';
    }

    getPageTitle()
    {
        return 'span[data-test="title"]';
    }

    visitURL()
    {
        cy.allure().step('Visit URL');
        cy.visit('/');
        cy.url().should('include', 'saucedemo.com/');
    }

    loginUser(user) {

        cy.allure().step('Login user');
  
        cy.get(this.getUsernameInput()).type(user.username);
        cy.get(this.getPasswordInput()).type(user.password);
        cy.get(this.getLoginBtn()).click();

        cy.url().should('include', '/inventory.html');

        cy.get(this.getPageTitle())
            .should('have.text', "Products")
            .then(() => {
                cy.log('User successfully logged in');
            });
    }


    



}


    
   
   




