/// <reference types="Cypress" />
/// <reference types="cypress-iframe" />
/// <reference types="cypress-xpath" />
import WorkSpacePage from '../support/PageObjects/WorkSpacePage';
import AddMediumPage from '../support/PageObjects/AddMediumPage';
import ProductmoleculePage from '../support/PageObjects/ProductmoleculePage';

describe('Assets - Product Molecule', () => {
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
    cy.origin('Cypress.env("url")',() =>{
    })
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
    const storedUrl = Cypress.env("url");
    

    workspacePage.getSideNavWSpace().click();
    workspacePage.getWspaceNameFltr().click();
    workspacePage.getFilterSearBox().type('workspace_qa');
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

  it('product molecule name field length validation',()=> {
  
    productmoleculePage.getAddpmBtn().click(); // click on add product molecule button
    cy.wait(2500)
    productmoleculePage.getPMname().type(Assetdata.Workshop_ProductMolecules[1].pm2_name);
    cy.wait(2000)
    productmoleculePage.getErrorMsg1().should('be.visible');
    cy.wait(2000)
    productmoleculePage.getCancelBtn().click()
    
  })


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
    cy.Add_pm_components(3,900,
      Assetdata.Workshop_ProductMolecules[0].pm1_composition[1].name,
      Assetdata.Workshop_ProductMolecules[0].pm1_composition[1].value,
      Assetdata.Workshop_ProductMolecules[0].pm1_composition[1].unit)
    cy.Add_pm_components(4,900,
      Assetdata.Workshop_ProductMolecules[0].pm1_composition[2].name,
      Assetdata.Workshop_ProductMolecules[0].pm1_composition[2].value,
      Assetdata.Workshop_ProductMolecules[0].pm1_composition[2].unit)
    cy.Add_pm_components(5,500,
      Assetdata.Workshop_ProductMolecules[0].pm1_composition[3].name,
      Assetdata.Workshop_ProductMolecules[0].pm1_composition[3].value,
      Assetdata.Workshop_ProductMolecules[0].pm1_composition[3].unit)
    cy.Add_pm_components(6,500,
      Assetdata.Workshop_ProductMolecules[0].pm1_composition[4].name,
      Assetdata.Workshop_ProductMolecules[0].pm1_composition[4].value,
      Assetdata.Workshop_ProductMolecules[0].pm1_composition[4].unit)
    cy.Add_pm_components(7,0,
      Assetdata.Workshop_ProductMolecules[0].pm1_composition[5].name,
      Assetdata.Workshop_ProductMolecules[0].pm1_composition[5].value,
      Assetdata.Workshop_ProductMolecules[0].pm1_composition[5].unit)
    cy.Add_pm_components(8,500,
      Assetdata.Workshop_ProductMolecules[0].pm1_composition[6].name,
      Assetdata.Workshop_ProductMolecules[0].pm1_composition[6].value,
      Assetdata.Workshop_ProductMolecules[0].pm1_composition[6].unit)
    cy.Add_pm_components(9,700,
      Assetdata.Workshop_ProductMolecules[0].pm1_composition[7].name,
      Assetdata.Workshop_ProductMolecules[0].pm1_composition[7].value,
      Assetdata.Workshop_ProductMolecules[0].pm1_composition[7].unit)
    cy.Add_pm_components(10,900,
      Assetdata.Workshop_ProductMolecules[0].pm1_composition[8].name,
      Assetdata.Workshop_ProductMolecules[0].pm1_composition[8].value,
      Assetdata.Workshop_ProductMolecules[0].pm1_composition[8].unit)
    cy.Add_pm_components(11,500,
      Assetdata.Workshop_ProductMolecules[0].pm1_composition[9].name,
      Assetdata.Workshop_ProductMolecules[0].pm1_composition[9].value,
      Assetdata.Workshop_ProductMolecules[0].pm1_composition[9].unit)
    cy.Add_pm_components(12,700,
      Assetdata.Workshop_ProductMolecules[0].pm1_composition[10].name,
      Assetdata.Workshop_ProductMolecules[0].pm1_composition[10].value,
      Assetdata.Workshop_ProductMolecules[0].pm1_composition[10].unit)
    cy.Add_pm_components(13,900,
      Assetdata.Workshop_ProductMolecules[0].pm1_composition[11].name,
      Assetdata.Workshop_ProductMolecules[0].pm1_composition[11].value,
      Assetdata.Workshop_ProductMolecules[0].pm1_composition[11].unit)
    cy.Add_pm_components(14,900,
      Assetdata.Workshop_ProductMolecules[0].pm1_composition[12].name,
      Assetdata.Workshop_ProductMolecules[0].pm1_composition[12].value,
      Assetdata.Workshop_ProductMolecules[0].pm1_composition[12].unit)
    cy.Add_pm_components(15,400,
      Assetdata.Workshop_ProductMolecules[0].pm1_composition[13].name,
      Assetdata.Workshop_ProductMolecules[0].pm1_composition[13].value,
      Assetdata.Workshop_ProductMolecules[0].pm1_composition[13].unit)
    cy.Add_pm_components(16,900,
      Assetdata.Workshop_ProductMolecules[0].pm1_composition[14].name,
      Assetdata.Workshop_ProductMolecules[0].pm1_composition[14].value,
      Assetdata.Workshop_ProductMolecules[0].pm1_composition[14].unit)
    cy.Add_pm_components(17,400,
      Assetdata.Workshop_ProductMolecules[0].pm1_composition[15].name,
      Assetdata.Workshop_ProductMolecules[0].pm1_composition[15].value,
      Assetdata.Workshop_ProductMolecules[0].pm1_composition[15].unit)
    cy.Add_pm_components(18,600,
      Assetdata.Workshop_ProductMolecules[0].pm1_composition[16].name,
      Assetdata.Workshop_ProductMolecules[0].pm1_composition[16].value,
      Assetdata.Workshop_ProductMolecules[0].pm1_composition[16].unit)
    cy.Add_pm_components(19,500,
      Assetdata.Workshop_ProductMolecules[0].pm1_composition[17].name,
      Assetdata.Workshop_ProductMolecules[0].pm1_composition[17].value,
      Assetdata.Workshop_ProductMolecules[0].pm1_composition[17].unit)
    cy.Add_pm_components(20,500,
      Assetdata.Workshop_ProductMolecules[0].pm1_composition[18].name,
      Assetdata.Workshop_ProductMolecules[0].pm1_composition[18].value,
      Assetdata.Workshop_ProductMolecules[0].pm1_composition[18].unit)
                      
      productmoleculePage.getSaveBtn().click()
      cy.wait(500)
      productmoleculePage.getToastMsg().should('be.visible');
      cy.wait(2000)
  });

  it('validate the toast message once added successfully' ,()=> {
    
      productmoleculePage.getToastMsg().should('be.visible');
      cy.wait(2000) 
  })

})
