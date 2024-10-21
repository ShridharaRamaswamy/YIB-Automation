/// <reference types="Cypress" />
/// <reference types="cypress-iframe" />
/// <reference types="cypress-xpath" />
import WorkSpacePage from '../support/PageObjects/WorkSpacePage';
import AddMediumPage from '../support/PageObjects/AddMediumPage';

describe('template spec', () => {
  const addMediumPage = new AddMediumPage();
  const workspacePage = new WorkSpacePage();
  //const productmoleculePage = new productmoleculePage();
  
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
    cy.fixture('workshoptestdata.json').then((data) => {
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

  it('should navigate to the product molecule list', () => {
    const WorkSpacePage = new WorkSpacePage();

    WorkSpacePage.getPMlist().click(); // Navigate to product molecule list
    cy.wait(2000)
  });

  it('Addition of workshop product molecule',()=> {
  
    productmoleculePage.getAddpmBtn().click(); // click on add product molecule button
    cy.wait(2000)
    
  })

})