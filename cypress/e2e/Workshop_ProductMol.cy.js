/// <reference types="Cypress" />
/// <reference types="cypress-iframe" />
/// <reference types="cypress-xpath" />
import WorkSpacePage from '../support/PageObjects/WorkSpacePage';
import AddMediumPage from '../support/PageObjects/AddMediumPage';
import ProductmoleculePage from '../support/PageObjects/ProductmoleculePage';

describe('template spec', () => {
  const addMediumPage = new AddMediumPage();
  const workspacePage = new WorkSpacePage();
  const productmoleculePage = new ProductmoleculePage();
  
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
    cy.fixture('product_moleculedata.json').then((data) => {
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

    workspacePage.getPMlist().click(); // Navigate to product molecule list
    cy.wait(4000)
  });

  it('Should check the product molecule grid headers', ()=> {

    workspacePage.getPMGridName().should('be.visible');
    workspacePage.getPMGridGlycosylation().should('be.visible');
    workspacePage.getPMGridChargeVariant().should('be.visible');
    workspacePage.getPMGridNotes().should('be.visible');
    workspacePage.getPmGridExpand().eq(0).click();
    cy.wait(2000)
  });

  it('Add workshop product molecule',()=> {
  
    productmoleculePage.getAddpmBtn().click(); // click on add product molecule button
    cy.wait(2500)
    productmoleculePage.getPMname().type(Assetdata.Workshop_ProductMolecules[0].pm1_name);
    cy.wait(2000)
    productmoleculePage.getPMdes().type(Assetdata.Workshop_ProductMolecules[0].pm1_Description);
    cy.wait(2000)
    //productmoleculePage.getAddPMcompBtn().click(); //click on add components button in product molecule page
    //cy.wait(2000)
    
    cy.Add_pm_components(2,0,
      Assetdata.Workshop_ProductMolecules[0].pm1_composition[0].name,
      Assetdata.Workshop_ProductMolecules[0].pm1_composition[0].value,
      Assetdata.Workshop_ProductMolecules[0].pm1_composition[0].unit)
    cy.Add_pm_components(3,0,
      Assetdata.Workshop_ProductMolecules[0].pm1_composition[1].name,
      Assetdata.Workshop_ProductMolecules[0].pm1_composition[1].value,
      Assetdata.Workshop_ProductMolecules[0].pm1_composition[1].unit)

      productmoleculePage.getSaveBtn().click()
    
  })

})