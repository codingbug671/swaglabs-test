# Sauce Labs Demo – Cypress Test Automation

This test suite automates the customer flow on the [Sauce Labs Demo Website](https://www.saucedemo.com), including:

- Logging in with `standard_user`
- Adding 3 items to the cart
- Validating cart items and prices
- Completing the checkout process
- Verifying order confirmation

---

## Technologies Used

- **Cypress** – for end-to-end testing
- **JavaScript** – for writing test scripts
- **Allure Reporting** – to generate test reports

---

## Prerequisites

- [Node.js](https://nodejs.org/) (v14+ recommended)
- npm 
- [Java](https://www.oracle.com/java/technologies/javase-downloads.html)

---

## Project Setup

- Clone the repository:

```bash
       git clone https://github.com/codingbug671/swaglabs-test.git
       cd swaglabs-test
```

- Install dependencies:
```bash
    npm install
```

---
## Configuration
- Base URL: Set in cypress.config.js (default: https://www.saucedemo.com)
- Users: Test user data located in cypress/fixtures/users.json
- Allure plugin: Configured in cypress.config.js and imported in cypress/support/e2e.js


---
## Running Tests
- Run tests and generate Allure report
```bash
npm run test:report
```

This command runs all Cypress tests, then generates and opens the Allure report. The report contains detailed steps, logs and test results.

- Run tests with Cypress Test Runner UI
  
 ```bash
npx cypress open
```

- Run tests in headless mode

 ```bash
npm run test
```

- Generate Allure report manually
If tests already ran and you want to generate/open the report separately:
 ```bash
npx allure generate allure-results --clean
npx allure open
```
---

## Test Structure
- Page Objects: Located in cypress/support/PO/ folder for modular and reusable UI actions
- Test files: Located in cypress/e2e/
- Data: Tests uses user data from fixtures located in cypress/fixtures/

---

## Reporting
- Allure results are saved in allure-results/









