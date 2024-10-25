// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
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

import "cypress-iframe";
import "cypress-xpath";
import '@4tw/cypress-drag-drop';
import "cypress-real-events";
import WorkSpacePage from '../support/PageObjects/WorkSpacePage';
import AddMediumPage from '../support/PageObjects/AddMediumPage';
import loginpage from "../support/PageObjects/loginpage";
import ProductmoleculePage from "./PageObjects/ProductmoleculePage";
before(() => {
  cy.fixture("../fixtures/workshoptestdata.json").as("data");
  cy.get("@data").then((data) => {


    Cypress.Commands.add("EnterToken", () => {
      cy.request({
        method: "GET",
        url: "https://api.testdataservices.com.au/v0001F_GetGoogleAuthCode?Email=shridhara.ramaswamy@yokogawa.com&SecretKey=QEHCNXXUA7Y76BDPEZ4PBESBE5FQ3CEO&SubscriptionKey=bksLG5nuZEeyrQr9AttIw474WbyNrsRP",

        headers: {
          accept: "application/json",
        },
      }).then((response) => {
        let body = JSON.parse(JSON.stringify(response.body));
        cy.wait(1500);
        cy.get(".gig-tfa-code-textbox").type(body.ThisToken);

        cy.log(body.ThisToken);
        cy.log(body.NextToken);
        cy.log(body.SecondsRemaining);
      });
    });
    Cypress.Commands.add("login", (email, password) => {
      const loginPage = new loginpage();
      cy.visit(Cypress.env("url"));
      loginPage.getEmail().type(email);
      loginPage.login().click();
      loginPage.getPassword().type(password);
      loginPage.login().click();
      cy.wait(5000)
      cy.EnterToken();
      cy.get(".gig-tfa-button").click();
      cy.wait(15000)
      // cy.get('.tenantsList > :nth-child(2) a[class="arrowicon"]').click({ timeout: 65000 })
      // cy.wait(15000);
    });
    Cypress.Commands.add("Add_components", (comcount, scroll, component, llimit, hlimit, unit) => {
      const addMediumPage = new AddMediumPage();
      const workspacePage = new WorkSpacePage();

      addMediumPage.getAddMediumCompBtn().click(); // Add the medium
      // Add additional assertions or interactions here as needed
      cy.wait(2000)

      addMediumPage.getAddMediumCompSpeciesDropDown(comcount).scrollIntoView().click({ timeout: 3000 });

      cy.wait(3000)
      cy.xpath("//div[contains(@class,'ag-rich-select-virtual-list-viewport')]").then($dropdown => {
        $dropdown[0].scrollTop = scroll; // Manually scroll 500px down
      });

      cy.wait(1000)
      cy.xpath("//app-assets-add-mediums-form//div[@role='option']//div[contains(text(),'" + component + "')]").scrollIntoView().click({ force: true })
      cy.wait(3000)
      addMediumPage.getAddMediumCompLlimit(comcount).click({ timeout: 3000 });
      addMediumPage.getAddMediumCompLlimit(comcount).type(llimit)

      addMediumPage.getAddMediumCompHlimit(comcount).click({ timeout: 3000 });
      addMediumPage.getAddMediumCompHlimit(comcount).type(hlimit)

      addMediumPage.getAddMediumCompUnit(comcount).click({ timeout: 3000 });
      cy.wait(3000)

      cy.wait(1000)
      cy.xpath("//app-assets-add-mediums-form//div[@role='option']//div[contains(text(),'" + unit + "')]").scrollIntoView().click({ force: true })
      cy.wait(2000)

    });
    Cypress.Commands.add("Add_pm_components", (comcount, scroll, component, limit, unit) => {
      const addMediumPage = new AddMediumPage();
      const workspacePage = new WorkSpacePage();
      const productmoleculePage = new ProductmoleculePage();

      productmoleculePage.getAddPMcompBtn().click(); // Add the medium
      // Add additional assertions or interactions here as needed
      cy.wait(2000)

      productmoleculePage.getAddPMCompSpeciesDropDown(comcount).scrollIntoView().click({ timeout: 3000 });

      cy.wait(3000)
      cy.xpath("//div[contains(@class,'ag-rich-select-virtual-list-viewport')]").then($dropdown => {
        $dropdown[0].scrollTop = scroll; // Manually scroll 500px down
      });

      cy.wait(1000)
      cy.xpath("//app-assets-add-mediums-form//div[@role='option']//div[contains(text(),'" + component + "')]").scrollIntoView().click({ force: true })
      cy.wait(3000)
    
      productmoleculePage.getAddPMComplimit(comcount).click({ timeout: 3000 });
      productmoleculePage.getAddPMComplimit(comcount).type(limit)

      productmoleculePage.getAddPMCompUnit(comcount).click({ timeout: 3000 });
      cy.wait(3000)

      cy.wait(1000)
      cy.xpath("//app-assets-add-mediums-form//div[@role='option']//div[contains(text(),'" + unit + "')]").scrollIntoView().click({ force: true })
      cy.wait(2000)

    });

  })
})