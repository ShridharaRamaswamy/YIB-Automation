/// <reference types="Cypress" />
/// <reference types="cypress-iframe" />
/// <reference types="cypress-xpath" />
import WorkSpacePage from '../support/PageObjects/WorkSpacePage';
import DesignSpec from '../support/PageObjects/DesignSpecPage';

describe('Digital Twin', () => {
  const workspacePage = new WorkSpacePage();
  const designSpec = new DesignSpec();
  
  let DTdata;
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
    cy.fixture('design_spec.json').then((data) => {
      DTdata = data
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
    cy.wait(2000)
    workspacePage.getFilterSearBox().type('Workspace_Init');
    cy.wait(2000)
    workspacePage.getFilterApplyBtn().click();
    cy.wait(2000)
    workspacePage.getSelectWspace().click();
    cy.wait(2000)
  });

  it('should navigate to the digital twin landing page', () => {

    designSpec.getDTList().click(); // click on USP list
    cy.wait(1000)
  });

  it('validate header, grid column names of digital twin page', () => {

    designSpec.getDTheader().should('be.visible')
    designSpec.getDTGridName().should('be.visible')
    designSpec.getDTGridDes().should('be.visible')
    designSpec.getDTGridRea().should('be.visible')
    designSpec.getDTGridStatus().should('be.visible')
    designSpec.getDTGridActions().should('be.visible')
  });

  it('add digital twin', () => {
    designSpec.getDTAdd().click()
    cy.wait(1000)
    designSpec.getDTAddHeader().should('be.visible')
    designSpec.getDTName().type(DTdata.Design_Spec[0].dt_name)
    cy.wait(1000)
    designSpec.getDTDes().type(DTdata.Design_Spec[0].dt_description)
    cy.wait(1000)
    designSpec.getDTcreate().click()
    cy.wait(1000)
  });

  it('add group', () => {
    
  });






 
})