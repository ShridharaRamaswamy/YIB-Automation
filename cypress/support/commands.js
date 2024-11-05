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
import SensorPage from "./PageObjects/SensorPage";
import SpargingGas from "./PageObjects/SpargingGas";
import ControllersPage from "./PageObjects/ControllersPage";
import ReactorPage from "./PageObjects/ReactorPage";
import RetentionPage from "./PageObjects/RetentionPage";
import DeleteAssets from "./PageObjects/DeleteAssets";
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

      productmoleculePage.getAddPMcompBtn().click(); // Add the product molecule
      // Add additional assertions or interactions here as needed
      cy.wait(2000)

      productmoleculePage.getAddPMCompSpeciesDropDown(comcount).scrollIntoView().click({ timeout: 3000 });

      cy.wait(3000)
      cy.xpath("//div[contains(@class,'ag-rich-select-virtual-list-viewport')]").then($dropdown => {
        $dropdown[0].scrollTop = scroll; // Manually scroll 500px down
      });

      cy.wait(1000)
      cy.xpath("//div[@role='option']//div[contains(text(),'" + component + "')]").scrollIntoView().click({ force: true })
      cy.wait(3000)
    
      productmoleculePage.getAddPMComplimit(comcount).click({ timeout: 3000 });
      productmoleculePage.getAddPMComplimit(comcount).type(limit)

      productmoleculePage.getAddPMCompUnit(comcount).click({ timeout: 3000 });
      cy.wait(3000)

      cy.wait(1000)
      cy.xpath("//div[@role='option']//div[contains(text(),'" + unit + "')]").scrollIntoView().click({ force: true })
      cy.wait(2000)

    });
    Cypress.Commands.add("Add_sensor_components", (comcount, scroll, component, llimit, hlimit, unit) => {
      const addMediumPage = new AddMediumPage();
      const workspacePage = new WorkSpacePage();
      const sensorPage = new SensorPage();

      sensorPage.getAddSenEntBtn().click(); // Add the sensor entities button
      // Add additional assertions or interactions here as needed
      cy.wait(2000)

      sensorPage.getSenEntDropDown(comcount).scrollIntoView().click({ timeout: 3000 });

      cy.wait(3000)
      cy.xpath("//div[contains(@class,'ag-rich-select-virtual-list-viewport')]").then($dropdown => {
        $dropdown[0].scrollTop = scroll; // Manually scroll 500px down
      });

      cy.wait(2000)
      cy.xpath("//app-assets-sensor-form//div[@role='option']//div[contains(text(),'" + component + "')]").scrollIntoView().click({ force: true }
      );
      cy.wait(3000)

      sensorPage.getAddSenLlimit(comcount).click({ timeout: 3000 });
      sensorPage.getAddSenLlimit(comcount).type(llimit)

      sensorPage.getAddSenCompHlimit(comcount).click({ timeout: 3000 });
      sensorPage.getAddSenCompHlimit(comcount).type(hlimit)

      // cy.xpath("//div[contains(@class,'ag-rich-select-virtual-list-viewport')]").then($dropdown => {
      //   $dropdown[0].scrollTop = scrollunit; // Manually scroll 500px down
      // });

      sensorPage.getAddSenCompUnit(comcount).click({ timeout: 3000 });
      cy.wait(3000)
      
      cy.xpath("//div[contains(@class,'ag-rich-select-virtual-list-viewport')]").then($dropdown => {
        $dropdown[0].scrollTop = scroll; // Manually scroll 500px down
      });

      cy.wait(1000)
      cy.xpath("//app-assets-sensor-form//div[@role='option']//div[contains(text(),'" + unit + "')]").scrollIntoView().click({ force: true })
      cy.wait(2000)

    });
    Cypress.Commands.add("Add_sparging_gas_components", (comcount, scroll, component, llimit, hlimit, unit) => {
      const spargingGas = new SpargingGas();

      spargingGas.getAddSGCompBtn().click(); // click the sparging gas component 
      // Add additional assertions or interactions here as needed
      cy.wait(2000)

      spargingGas.getAddSGCompSpeciesDropDown(comcount).scrollIntoView().click({ timeout: 3000 });

      cy.wait(3000)
      cy.xpath("//div[contains(@class,'ag-rich-select-virtual-list-viewport')]").then($dropdown => {
        $dropdown[0].scrollTop = scroll; // Manually scroll 500px down
      });

      cy.wait(1000)
      cy.xpath("//app-assets-add-sparging-gases-form//div[@role='option']//div[contains(text(),'" + component + "')]").first().scrollIntoView().click({ force: true });
      cy.wait(2000)
      spargingGas.getAddSGCompLlimit(comcount).click({ timeout: 3000 });
      spargingGas.getAddSGCompLlimit(comcount).type(llimit)

      spargingGas.getAddSGCompHlimit(comcount).click({ timeout: 3000 });
      spargingGas.getAddSGCompHlimit(comcount).type(hlimit)

      spargingGas.getAddSGCompUnit(comcount).click({ timeout: 3000 });
      cy.wait(3000)

      cy.wait(1000)
      cy.xpath("//app-assets-add-sparging-gases-form//div[@role='option']//div[contains(text(),'" + unit + "')]").scrollIntoView().click({ force: true })
      cy.wait(2000)

    });
    Cypress.Commands.add("Add_controller_limits", (comcount,llimit, hlimit) => {
      const controllersPage = new ControllersPage();
      cy.wait(2000)
      
      controllersPage.getAddcontrollerLlimit(comcount).click({ timeout: 3000 });
      controllersPage.getAddcontrollerLlimit(comcount).type(llimit);
      cy.wait(2000)

      controllersPage.getAddcontrollerHlimit(comcount).click({ timeout: 3000 });
      controllersPage.getAddcontrollerHlimit(comcount).type(hlimit).type('{enter}');      
      cy.wait(1000)

    });
    Cypress.Commands.add("Add_reactor_inlets", (comcount, name, llimit, hlimit, unit ) => {
      const addMediumPage = new AddMediumPage();
      const workspacePage = new WorkSpacePage();
      const reactorPage = new ReactorPage();

      reactorPage.getAddreactorInletBtn().click(); 
      cy.wait(2000)

      reactorPage.getAddInletname(comcount).click({ timeout: 1500 })
      reactorPage.getAddInletname(comcount).type(name)
      cy.wait(3000)
      
      reactorPage.getAddInletLlimit(comcount).click({ timeout: 3000 });
      reactorPage.getAddInletLlimit(comcount).type(llimit)
      cy.wait(3000)

      reactorPage.getAddInletHlimit(comcount).click({ timeout: 3000 });
      reactorPage.getAddInletHlimit(comcount).type(hlimit)
      cy.wait(3000)

      reactorPage.getAddInletUnit(comcount).click({ timeout: 3000 });
      cy.wait(3000)

      cy.xpath("//app-assets-add-reactor-form//div[@role='option']//div[contains(text(),'" + unit + "')]").first().click({ force: true })
      cy.wait(2000)

      // reactorPage.getAddInletNotes(comcount).click({timeout:1500});
      // reactorPage.getAddInletNotes(comcount).type(notes)
      // cy.wait(2000)

    });
    Cypress.Commands.add("Add_reactor_outlets", (comcount,  name, llimit, hlimit, unit ) => {
      const workspacePage = new WorkSpacePage();
      const reactorPage = new ReactorPage();

      // cy.wait(3000)
      // cy.xpath("//div[contains(@class,'ag-rich-select-virtual-list-viewport')]").then($dropdown => {
      //   $dropdown[0].scrollTop = scroll; // Manually scroll 500px down
      // });

      //cy.scrollTo('bottom');

      reactorPage.getAddreactorOutletBtn().click(); 
      cy.wait(2000)

      cy.scrollTo('bottom',{ensureScrollable: false});

      reactorPage.getAddOutletname(comcount).click({ timeout: 1500 })
      reactorPage.getAddOutletname(comcount).type(name)
      cy.wait(3000)
      
      reactorPage.getAddOutletLlimit(comcount).click({ timeout: 3000 });
      reactorPage.getAddOutletLlimit(comcount).type(llimit)
      cy.wait(3000)

      reactorPage.getAddOutletHlimit(comcount).click({ timeout: 3000 });
      reactorPage.getAddOutletHlimit(comcount).type(hlimit)
      cy.wait(3000)

      reactorPage.getAddOutletUnit(comcount).click({ timeout: 3000 });
      cy.wait(3000)

      cy.xpath("//app-assets-add-reactor-form//div[@role='option']//div[contains(text(),'" + unit + "')]").first().click({ force: true })
      cy.wait(2000)

      // reactorPage.getAddInletNotes(comcount).click({timeout:1500});
      // reactorPage.getAddInletNotes(comcount).type(notes)
      // cy.wait(2000)

    });
    Cypress.Commands.add("Add_retention_species", (comcount, scroll, component, llimit, hlimit, unit) => {

      const retentionPage = new RetentionPage();

      retentionPage.getAddretentionspeciesBtn().click(); 
      cy.wait(2000)

      retentionPage.getAddretentionDropDown(comcount).scrollIntoView().click({ timeout: 3000 });

      cy.wait(3000)
      cy.xpath("//div[contains(@class,'ag-rich-select-virtual-list-viewport')]").then($dropdown => {
        $dropdown[0].scrollTop = scroll; // Manually scroll 500px down
      });

      cy.wait(1000)
      cy.xpath("//app-assets-add-retention-system-form//div[@role='option']//div[contains(text(),'" + component + "')]").scrollIntoView().click({ force: true })
      cy.wait(3000)
      retentionPage.getAddRetentionLlimit(comcount).click({ timeout: 3000 });
      retentionPage.getAddRetentionLlimit(comcount).type(llimit)

      retentionPage.getAddretentionHlimit(comcount).click({ timeout: 3000 });
      retentionPage.getAddretentionHlimit(comcount).type(hlimit)

      retentionPage.getAddretentionUnit(comcount).click({ timeout: 3000 });
      cy.wait(3000)

      cy.wait(1000)
      cy.xpath("//app-assets-add-retention-system-form//div[@role='option']//div[contains(text(),'" + unit + "')]").scrollIntoView().click({ force: true })
      cy.wait(2000)

    });
    Cypress.Commands.add('search_medium_names', (medium_name) => {
      const deleteAssets = new DeleteAssets();

      deleteAssets.getNameFltr().click();
      cy.wait(2000)
      deleteAssets.getFilterSearBox().type(medium_name);
      cy.wait(2000)
      deleteAssets.getFilterApplyBtn().click();
      cy.wait(2000)
      deleteAssets.getmedActionBtn().first().click();
      cy.wait(3000)
      deleteAssets.getAssetDeleteBtn().click();
      cy.wait(2000)
      
    }
    )

  })
})