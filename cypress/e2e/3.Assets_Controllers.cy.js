/// <reference types="Cypress" />
/// <reference types="cypress-iframe" />
/// <reference types="cypress-xpath" />
import WorkSpacePage from '../support/PageObjects/WorkSpacePage';
import AddMediumPage from '../support/PageObjects/AddMediumPage';
import ProductmoleculePage from '../support/PageObjects/ProductmoleculePage';
import CellPage from '../support/PageObjects/CellPage';
import SpargingGas from '../support/PageObjects/SpargingGas';
import ControllersPage from '../support/PageObjects/ControllersPage';

describe('Assets - Controllers', () => {
    const workspacePage = new WorkSpacePage();
    const controllersPage = new ControllersPage();
    
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
    cy.fixture('assets_controllersdata.json').then((data) => {
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

  it('should navigate to the Controllers list', () => {

    workspacePage.getContList().click(); // Navigate to controllers list
    cy.wait(4000)
  });

  it('Should check the controllers grid headers', ()=> {

    workspacePage.getContGridName().should('be.visible');
    workspacePage.getContGridType().should('be.visible');
    workspacePage.getContGridErr().should('be.visible');
    workspacePage.getContGridNotes().should('be.visible');
    workspacePage.getContGridActions().should('be.visible');
    workspacePage.getConGridExpand().eq(0).click();
    cy.wait(2500)
  });

  it('Add Sampling Controller ',()=> {
    
    controllersPage.getAddConBtn().click();  //click on add controller button
    cy.wait(2000)
    controllersPage.getConname().type(Assetdata.Assets_Controllers[0].controller1_name);
    cy.wait(2000)
    controllersPage.getConDes().type(Assetdata.Assets_Controllers[0].controller1_Description);
    cy.wait(1000)
    controllersPage.getConDropdown().click();  //click on controller type dropdown
    cy.wait(1000)
    controllersPage.getAddsamplingTypeCon().click(); //click on sampling type controller
    cy.wait(1000)
    controllersPage.getConTimeProfDropdown().click();
    cy.wait(1000)
    controllersPage.getAddtimeprofCon().click();
    cy.wait(1000)
    controllersPage.getConActionsdropdown().click();
    cy.wait(1000)
    controllersPage.getConTimeUnitDropdown().click();
    cy.wait(1000)
    controllersPage.getAddConTimeUnit().click();
    cy.wait(1000)
    controllersPage.getConLimitUnitDropdown().click();
    cy.wait(1000)
    controllersPage.getAddConLimitUnit().click();
    cy.wait(1000)


    cy.Add_controller_limits(2,
      Assetdata.Assets_Controllers[0].Controller1_cultivation_values[0].llimit,
      Assetdata.Assets_Controllers[0].Controller1_cultivation_values[0].hlimit)
  
    controllersPage.getConSavetBtn().click();
     cy.wait(1000)
    
  });
  

})