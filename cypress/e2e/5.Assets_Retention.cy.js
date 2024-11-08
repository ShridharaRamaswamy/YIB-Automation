/// <reference types="Cypress" />
/// <reference types="cypress-iframe" />
/// <reference types="cypress-xpath" />
import WorkSpacePage from '../support/PageObjects/WorkSpacePage';
import AddMediumPage from '../support/PageObjects/AddMediumPage';
import ProductmoleculePage from '../support/PageObjects/ProductmoleculePage';
import CellPage from '../support/PageObjects/CellPage';
import RetentionPage from '../support/PageObjects/RetentionPage';

describe('Assets - Retention System', () => {
  const workspacePage = new WorkSpacePage();
  const retentionPage = new RetentionPage();
  
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
    cy.fixture('assets_retentiondata.json').then((data) => {
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

  it('select workspace', function () {

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

  it('should navigate to the retention list', () => {

    workspacePage.getRetentionList().click(); // Navigate to retention list
    cy.wait(4000)
  });

  it('should check the retention grid headers', ()=> {

    workspacePage.getRetentionGridName().should('be.visible');
    workspacePage.getRetentionGridNotes().should('be.visible');
    workspacePage.getRetentionGridActions().should('be.visible');
    workspacePage.getRetentionGridExpand().eq(0).click();
    cy.wait(2000)
  });

  it('validate retention name field with more than 120 characters', () => {

    retentionPage.getAddRetentionBtn().click(); // click on add retention info button
    cy.wait(2500)
    retentionPage.getretentionname().type(Assetdata.Assets_Retention[1].ret1_name);
    cy.wait(2000)
    retentionPage.getErrorMsg().should('be.visible');
    cy.wait(1000)
    retentionPage.getcancelButton().click();
     cy.wait(1000)
  });

  it('add retention',()=> {
  
    retentionPage.getAddRetentionBtn().click(); // click on add retention info button
    cy.wait(2500)
    retentionPage.getretentionname().type(Assetdata.Assets_Retention[0].ret_name);
    cy.wait(2000)
    retentionPage.getRetDesfield().type(Assetdata.Assets_Retention[0].ret_Description);
    cy.wait(1000)

    cy.Add_retention_species(2,0,
      Assetdata.Assets_Retention[0].ret_species[0].name,
      Assetdata.Assets_Retention[0].ret_species[0].llimit,
      Assetdata.Assets_Retention[0].ret_species[0].hlimit,
      Assetdata.Assets_Retention[0].ret_species[0].unit)

      retentionPage.getSaveBtn().click()
    
  });

  it('validate the toast message once reactor added successfully' ,()=> {
    
    retentionPage.getToastMsg().should('be.visible');
    cy.wait(2000) 
  });
  
  

})