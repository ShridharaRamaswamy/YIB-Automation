/// <reference types="Cypress" />
/// <reference types="cypress-iframe" />
/// <reference types="cypress-xpath" />
import WorkSpacePage from '../support/PageObjects/WorkSpacePage';
import AddMediumPage from '../support/PageObjects/AddMediumPage';
import ProductmoleculePage from '../support/PageObjects/ProductmoleculePage';
import CellPage from '../support/PageObjects/CellPage';
import SpargingGas from '../support/PageObjects/SpargingGas';

describe('Assets - Sparging Gas', () => {
  const addMediumPage = new AddMediumPage();
  const workspacePage = new WorkSpacePage();
  const productmoleculePage = new ProductmoleculePage();
  const cellPage = new CellPage();
  const spargingGas = new SpargingGas();
  
  let Assetdata;
  before(function () {

    cy.clearCookies({ timeout: 95000 });
    cy.clearAllCookies()
    cy.clearLocalStorage()
    cy.removeLocalStorage()
    cy.wait(4000)
    cy.login(Cypress.env('email'), Cypress.env('password'))
    cy.wait(4000)
  })

  beforeEach(() => {
    cy.fixture('assets_sparging_gasdata.json').then((data) => {
      Assetdata = data
    })
    cy.restoreLocalStorage()

  })
  after(() => {
    // cy.logout()
    cy.clearAllCookies();
    cy.clearAllLocalStorage()
    cy.removeLocalStorage()
    cy.wait(5000)

  })

  afterEach(() => {
    cy.saveLocalStorage()


  })

  it('Select workspace', function () {

    workspacePage.getSideNavWSpace().click();
    workspacePage.getWspaceNameFltr().click();
    workspacePage.getFilterSearBox().type('Workspace_Init');
    workspacePage.getFilterApplyBtn().click();
    cy.wait(2000)
    workspacePage.getSelectWspace().click();
    cy.wait(2000)
    workspacePage.getWsLandingAssetList().click();
    cy.wait(1000)

  });

  it('should navigate to the Sparging gas list', () => {

    workspacePage.getSGList().click(); // Navigate to sparging gas list
    cy.wait(4000)
  });

  it('Should check the sparging gas grid headers', ()=> {

    workspacePage.getSGGridName().should('be.visible');
    workspacePage.getSGGridNotes().should('be.visible');
    workspacePage.getSGGridActions().should('be.visible');
    workspacePage.getSGGridExpand().eq(0).click();
    cy.wait(2500)
  });

  it('validate sparging gas name field length ',()=> {
    
    
    spargingGas.getAddSGBtn().click();  //click on add sparging gas button
    cy.wait(2000)
    spargingGas.getSGname().type(Assetdata.Assets_sparging_gas[1].sg2_name);
    cy.wait(2000)
    spargingGas.getErrorMsg().should('be.visible');
    cy.wait(1000)
    spargingGas.getcancelButton().click();
    cy.wait(1000)
    
  });

  it('Add Sparging Gas ',()=> {
    
    spargingGas.getAddSGBtn().click();  //click on add sparging gas button
    cy.wait(2000)
    spargingGas.getSGname().type(Assetdata.Assets_sparging_gas[0].sg1_name);
    cy.wait(2000)
    spargingGas.getSGDes().type(Assetdata.Assets_sparging_gas[0].sg1_Description);
    cy.wait(2000)

    cy.Add_sparging_gas_components(2,0,
        Assetdata.Assets_sparging_gas[0].sg1_composition[0].name,
        Assetdata.Assets_sparging_gas[0].sg1_composition[0].llimit,
        Assetdata.Assets_sparging_gas[0].sg1_composition[0].hlimit,
        Assetdata.Assets_sparging_gas[0].sg1_composition[0].unit)

    spargingGas.getSGSaveBtn().click()
    cy.wait(1000)
    
  });

  it('validate the toast message once sparging gas added successfully' ,()=> {
    
    spargingGas.getToastMsgSG().should('be.visible');
    cy.wait(2000) 
  });
  

})