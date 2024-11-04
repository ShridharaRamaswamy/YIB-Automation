/// <reference types="Cypress" />
/// <reference types="cypress-iframe" />
/// <reference types="cypress-xpath" />
import WorkSpacePage from '../support/PageObjects/WorkSpacePage';
import AddMediumPage from '../support/PageObjects/AddMediumPage';

describe('template spec', () => {
  const addMediumPage = new AddMediumPage();
  const workspacePage = new WorkSpacePage();
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

  })

  it('should navigate to the medium list', () => {
    const workspacePage = new WorkSpacePage();

    workspacePage.getMediumList().click(); // Navigate to the medium list
  });

  it('should check the medium grid headers', () => {
    const workspacePage = new WorkSpacePage();
    workspacePage.getMediumGridName().should('be.visible');
    workspacePage.getMediumGridType().should('be.visible');
    workspacePage.getMediumGridNotes().should('be.visible');
    workspacePage.getMediumGridActions().should('be.visible');
    workspacePage.getPmGridExpand().eq(0).click();
    cy.wait(2000)
  });

  it('should check composition components', () => {
    const workspacePage = new WorkSpacePage();
    workspacePage.getCompComponents().should('be.visible');
    workspacePage.getCompLlimit().should('be.visible');
    workspacePage.getCompHlimit().should('be.visible');
    workspacePage.getCompUnit().should('be.visible');
    workspacePage.getCompErr().should('be.visible');
  });

  it('Addition of workshop feed1', () => {

    addMediumPage.getAddMediumBtn().click(); // Click to open the add medium form
    cy.wait(2000)

    addMediumPage.getAddMediumTitle().should('be.visible');
    cy.wait(2000)
    addMediumPage.getAddMediumName().type(Assetdata.Workshop_Assets[0].feed1_medium_name);
    cy.wait(2000)
    addMediumPage.getAddMediumTypeDropdown().click();
    cy.wait(2000)
    addMediumPage.getSelectedMediumType().click();
    cy.wait(2000)
    addMediumPage.getAddMediumDesc().type(Assetdata.Workshop_Assets[0].feed1_Description);
    cy.wait(2000)



    cy.Add_components(2, 0,
      Assetdata.Workshop_Assets[0].feed1_medium_composition[0].name,
      Assetdata.Workshop_Assets[0].feed1_medium_composition[0].llimit,
      Assetdata.Workshop_Assets[0].feed1_medium_composition[0].hlimit,
      Assetdata.Workshop_Assets[0].feed1_medium_composition[0].unit)

    addMediumPage.AssetSavetBtn().click()


  });

  it('Addition of workshop feed2', () => {

    addMediumPage.getAddMediumBtn().click(); // Click to open the add medium form
    cy.wait(2000)

    addMediumPage.getAddMediumTitle().should('be.visible');
    cy.wait(2000)
    addMediumPage.getAddMediumName().type(Assetdata.Workshop_Assets[1].feed2_medium_name);
    cy.wait(2000)
    addMediumPage.getAddMediumTypeDropdown().click();
    cy.wait(2000)
    addMediumPage.getSelectedMediumType().click();
    cy.wait(2000)
    addMediumPage.getAddMediumDesc().type(Assetdata.Workshop_Assets[1].feed2_Description);
  
    cy.Add_components(2, 0,
      Assetdata.Workshop_Assets[1].feed2_medium_composition[0].name,
      Assetdata.Workshop_Assets[1].feed2_medium_composition[0].llimit,
      Assetdata.Workshop_Assets[1].feed2_medium_composition[0].hlimit,
      Assetdata.Workshop_Assets[1].feed2_medium_composition[0].unit)
     
      cy.Add_components(3, 0,
      Assetdata.Workshop_Assets[1].feed2_medium_composition[1].name,
      Assetdata.Workshop_Assets[1].feed2_medium_composition[1].llimit,
      Assetdata.Workshop_Assets[1].feed2_medium_composition[1].hlimit,
      Assetdata.Workshop_Assets[1].feed2_medium_composition[1].unit)
    
      addMediumPage.AssetSavetBtn().click()


  });
  it('Addition of workshop inoculum', () => {

    addMediumPage.getAddMediumBtn().click(); // Click to open the add medium form
    cy.wait(2000)

    addMediumPage.getAddMediumTitle().should('be.visible');
    cy.wait(2000)
    addMediumPage.getAddMediumName().type(Assetdata.Workshop_Assets[2].inoculum_medium_name);
    cy.wait(2000)
    addMediumPage.getAddMediumTypeDropdown().click();
    cy.wait(2000)
    addMediumPage.getSelectedMediumType1().click();
    cy.wait(2000)
    addMediumPage.getAddMediumDesc().type(Assetdata.Workshop_Assets[2].inoculum_Description);
    cy.wait(2000)


    
    cy.Add_components(2, 0,
      Assetdata.Workshop_Assets[2].inoculum_medium_composition[0].name,
      Assetdata.Workshop_Assets[2].inoculum_medium_composition[0].llimit,
      Assetdata.Workshop_Assets[2].inoculum_medium_composition[0].hlimit,
      Assetdata.Workshop_Assets[2].inoculum_medium_composition[0].unit)

     
    cy.Add_components(3, 0,
      Assetdata.Workshop_Assets[2].inoculum_medium_composition[1].name,
      Assetdata.Workshop_Assets[2].inoculum_medium_composition[1].llimit,
      Assetdata.Workshop_Assets[2].inoculum_medium_composition[1].hlimit,
      Assetdata.Workshop_Assets[2].inoculum_medium_composition[1].unit)

     
    cy.Add_components(4, 0,
      Assetdata.Workshop_Assets[2].inoculum_medium_composition[2].name,
      Assetdata.Workshop_Assets[2].inoculum_medium_composition[2].llimit,
      Assetdata.Workshop_Assets[2].inoculum_medium_composition[2].hlimit,
      Assetdata.Workshop_Assets[2].inoculum_medium_composition[2].unit)
    
   
    cy.Add_components(5, 0,
      Assetdata.Workshop_Assets[2].inoculum_medium_composition[3].name,
      Assetdata.Workshop_Assets[2].inoculum_medium_composition[3].llimit,
      Assetdata.Workshop_Assets[2].inoculum_medium_composition[3].hlimit,
      Assetdata.Workshop_Assets[2].inoculum_medium_composition[3].unit)
    
    cy.Add_components(6, 200,
      Assetdata.Workshop_Assets[2].inoculum_medium_composition[4].name,
      Assetdata.Workshop_Assets[2].inoculum_medium_composition[4].llimit,
      Assetdata.Workshop_Assets[2].inoculum_medium_composition[4].hlimit,
      Assetdata.Workshop_Assets[2].inoculum_medium_composition[4].unit)
    
    cy.Add_components(7, 200,
      Assetdata.Workshop_Assets[2].inoculum_medium_composition[5].name,
      Assetdata.Workshop_Assets[2].inoculum_medium_composition[5].llimit,
      Assetdata.Workshop_Assets[2].inoculum_medium_composition[5].hlimit,
      Assetdata.Workshop_Assets[2].inoculum_medium_composition[5].unit)
    
    addMediumPage.AssetSavetBtn().click()
    cy.wait(3000)
  });
})