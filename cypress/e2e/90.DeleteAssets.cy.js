/// <reference types="Cypress" />
/// <reference types="cypress-iframe" />
/// <reference types="cypress-xpath" />
import WorkSpacePage from '../support/PageObjects/WorkSpacePage';
import AddMediumPage from '../support/PageObjects/AddMediumPage';
import ProductmoleculePage from '../support/PageObjects/ProductmoleculePage';
import DeleteAssets from '../support/PageObjects/DeleteAssets';

describe('Assets - Delete', () => {
  const workspacePage = new WorkSpacePage();
  const deleteAssets = new DeleteAssets();
  
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
    cy.fixture('scneario_01testdata.json').then((data) => {
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
    cy.wait(2000)
    workspacePage.getFilterSearBox().type('Workspace_Init');
    cy.wait(2000)
    workspacePage.getFilterApplyBtn().click();
    cy.wait(2000)
    workspacePage.getSelectWspace().click();
    cy.wait(2000)
    workspacePage.getWsLandingAssetList().click();
    cy.wait(1000)

  });

  it('should navigate to the cells list', () => {

    workspacePage.getCellsList().click(); // Navigate to Cells list
    cy.wait(4000)
  });


  it('delete cells ', ()=> {

    deleteAssets.getNameFltr().click();
    cy.wait(1000)
    deleteAssets.getFilterSearBox().type('(Aut)workshop cell');
    cy.wait(2000)
    deleteAssets.getFilterApplyBtn().click();
    cy.wait(1500)
    deleteAssets.getcellsActionBtn().first().click();
    cy.wait(3000)
    deleteAssets.getAssetDeleteBtn().click();
    cy.wait(3000)
    deleteAssets.getNameFltr().click();
    cy.wait(1000)
    deleteAssets.getFilterSearBox().type('(Aut)scenario 01 cell'); 
    cy.wait(2000)
    deleteAssets.getFilterApplyBtn().click();
    cy.wait(1500)
    deleteAssets.getcellsActionBtn().first().click();
    cy.wait(3000)
    deleteAssets.getAssetDeleteBtn().click();
    cy.wait(3500)
    deleteAssets.getToastMsg().should('be.visible');
    cy.wait(2000)
    deleteAssets.getBreadCrumbAssets().click();
    cy.wait(3000)
  });

  it('should navigate to the product molecule list', () => {

    workspacePage.getPMlist().click(); // Navigate to product molecule list
    cy.wait(4000)
    deleteAssets.getToastMsg().should('be.visible');
    cy.wait(2000)
  });

  it('delete product molecule ', ()=> {

    deleteAssets.getNameFltr().click();
    cy.wait(1000)
    deleteAssets.getFilterSearBox().type('(Aut)Product molecules');
    cy.wait(2000)
    deleteAssets.getFilterApplyBtn().click();
    cy.wait(2000)
    deleteAssets.getPMActionBtn().first().click();
    cy.wait(3000)
    deleteAssets.getAssetDeleteBtn().click();
    cy.wait(2000)
    deleteAssets.getToastMsg().should('be.visible');
    cy.wait(3000)
    deleteAssets.getBreadCrumbAssets().click();
    cy.wait(3000)
  });


  it('should navigate to the Sparging gas list', () => {

    workspacePage.getSGList().click(); // Navigate to sparging gas list
    cy.wait(4000)
  });

  it('delete sparging gas ', ()=> {

    deleteAssets.getNameFltr().click();
    cy.wait(1000)
    deleteAssets.getFilterSearBox().type('(AUT) Assets_sparging_gas');
    cy.wait(2000)
    deleteAssets.getFilterApplyBtn().click();
    cy.wait(2000)
    deleteAssets.getSGActionBtn().first().click();
    cy.wait(3000)
    deleteAssets.getAssetDeleteBtn().click();
    cy.wait(2000)
    deleteAssets.getToastMsg().should('be.visible');
    cy.wait(2000)
    deleteAssets.getBreadCrumbAssets().click();
    cy.wait(3000)
  });

  it('should navigate to the retention list', () => {

    workspacePage.getRetentionList().click(); // Navigate to retention list
    cy.wait(4000)
  });

  it('delete retention system ', ()=> {

    deleteAssets.getNameFltr().click();
    cy.wait(1000)
    deleteAssets.getFilterSearBox().type('(AUT)Retention assets');
    cy.wait(2000)
    deleteAssets.getFilterApplyBtn().click();
    cy.wait(2000)
    deleteAssets.getRetActionBtn().first().click();
    cy.wait(3000)
    deleteAssets.getAssetDeleteBtn().click();
    cy.wait(2000)
    deleteAssets.getToastMsg().should('be.visible');
    cy.wait(2000)
    deleteAssets.getBreadCrumbAssets().click();
    cy.wait(3000)
  });

  it('should navigate to the reactors list', () => {

    workspacePage.getReactorList().click(); // Navigate to Reactor list
    cy.wait(4000)
  });

  it('delete reactors ', ()=> {

    deleteAssets.getNameFltr().first().click();
    cy.wait(1000)
    deleteAssets.getFilterSearBox().type('(Aut)Asests Reactor');
    cy.wait(2000)
    deleteAssets.getFilterApplyBtn().click();
    cy.wait(2000)
    deleteAssets.getReactorActionBtn().first().click();
    cy.wait(3000)
    deleteAssets.getAssetDeleteBtn().click();
    cy.wait(2000)
    deleteAssets.getToastMsg().should('be.visible');
    cy.wait(2000)
    deleteAssets.getBreadCrumbAssets().click();
    cy.wait(3000)
  });
    
  it('should navigate to the Controllers list', () => {

    workspacePage.getContList().click(); // Navigate to controllers list
    cy.wait(4000)
  });

  it('delete sampling controller ', ()=> {

    deleteAssets.getNameFltr().click();
    cy.wait(1000)
    deleteAssets.getFilterSearBox().type('(Aut) -sampling controller');
    cy.wait(2000)
    deleteAssets.getFilterApplyBtn().click();
    cy.wait(2000)
    deleteAssets.getContActionBtn().first().click();
    cy.wait(3000)
    deleteAssets.getAssetDeleteBtn().click();
    cy.wait(2000)
    deleteAssets.getToastMsg().should('be.visible');
    cy.wait(2000)
    deleteAssets.getBreadCrumbAssets().click();
    cy.wait(3000)
  });

  it('should navigate to the Sensor list', () => {

    workspacePage.getSenList().click(); // Navigate to Sensor list
    cy.wait(4000)
  });

  it('delete sensors ', ()=> {

    deleteAssets.getNameFltr().click();
    cy.wait(1000)
    deleteAssets.getFilterSearBox().type('(Aut)workshop temperature sensor');
    cy.wait(2000)
    deleteAssets.getFilterApplyBtn().click();
    cy.wait(2000)
    deleteAssets.getsensorActionBtn().first().click();
    cy.wait(3000)
    deleteAssets.getAssetDeleteBtn().click();
    cy.wait(2000)
    deleteAssets.getToastMsg().should('be.visible');
    cy.wait(2000)
    deleteAssets.getNameFltr().click();
    cy.wait(1000)
    deleteAssets.getFilterSearBox().type('(Aut)workshop spent media analyzer');
    cy.wait(2000)
    deleteAssets.getFilterApplyBtn().click();
    cy.wait(2000)
    deleteAssets.getsensorActionBtn().first().click();
    cy.wait(3000)
    deleteAssets.getAssetDeleteBtn().click();
    cy.wait(2000)
    deleteAssets.getToastMsg().should('be.visible');
    cy.wait(2000)
    deleteAssets.getNameFltr().click();
    cy.wait(1000)
    deleteAssets.getFilterSearBox().type('(Aut)workshop reactor scale');
    cy.wait(2000)
    deleteAssets.getFilterApplyBtn().click();
    cy.wait(2000)
    deleteAssets.getsensorActionBtn().first().click();
    cy.wait(3000)
    deleteAssets.getAssetDeleteBtn().click();
    cy.wait(2000)
    deleteAssets.getToastMsg().should('be.visible');
    cy.wait(2000)
    deleteAssets.getNameFltr().click();
    cy.wait(1000)
    deleteAssets.getFilterSearBox().type('(Aut)workshop cell counter');
    cy.wait(2000)
    deleteAssets.getFilterApplyBtn().click();
    cy.wait(2000)
    deleteAssets.getsensorActionBtn().first().click();
    cy.wait(3000)
    deleteAssets.getAssetDeleteBtn().click();
    cy.wait(2000)
    deleteAssets.getBreadCrumbAssets().click();
    cy.wait(3000)
  });

  it('should navigate to the medium list', () => {

    workspacePage.getMediumList().click(); // Navigate to the medium list
    cy.wait(2000)
  });

  it('delete workshop medium ', ()=> {

    deleteAssets.getNameFltr().click();
    cy.wait(1000)
    deleteAssets.getFilterSearBox().type('(AUT)workshop feed1');
    cy.wait(2000)
    deleteAssets.getFilterApplyBtn().click();
    cy.wait(2000)
    deleteAssets.getmedActionBtn().first().click();
    cy.wait(3000)
    deleteAssets.getAssetDeleteBtn().click();
    cy.wait(2000)
    deleteAssets.getToastMsg().should('be.visible');
    cy.wait(2000)
    deleteAssets.getNameFltr().click();
    cy.wait(1000)
    deleteAssets.getFilterSearBox().type('(AUT)workshop feed2');
    cy.wait(2000)
    deleteAssets.getFilterApplyBtn().click();
    cy.wait(2000)
    deleteAssets.getmedActionBtn().first().click();
    cy.wait(3000)
    deleteAssets.getAssetDeleteBtn().click();
    cy.wait(2000)
    deleteAssets.getToastMsg().should('be.visible');
    cy.wait(2000)
    deleteAssets.getNameFltr().click();
    cy.wait(1000)
    deleteAssets.getFilterSearBox().type('(AUT)workshop inoculum + basal medium');
    cy.wait(2000)
    deleteAssets.getFilterApplyBtn().click();
    cy.wait(2000)
    deleteAssets.getmedActionBtn().first().click();
    cy.wait(3000)
    deleteAssets.getAssetDeleteBtn().click();
    cy.wait(2000)
    deleteAssets.getToastMsg().should('be.visible');
    cy.wait(2000)
    deleteAssets.getBreadCrumbAssets().click();
    cy.wait(3000)
  });

  it('should navigate to the medium list', () => {

    workspacePage.getMediumList().click(); // Navigate to the medium list
    cy.wait(2000)
  });

  it('delete scenario_01 mediums ', ()=> {

    cy.search_medium_names(
      Assetdata.scenario_01_Assets[0].feed2_medium_name)
    deleteAssets.getToastMsg().should('be.visible');
    cy.wait(3000)
    cy.search_medium_names(
      Assetdata.scenario_01_Assets[1].feed3_medium_name)
    cy.wait(3000)
    deleteAssets.getToastMsg().should('be.visible');
    cy.wait(2000)
    cy.search_medium_names(
      Assetdata.scenario_01_Assets[2].inoculum_medium_name)
    cy.wait(3000)
    deleteAssets.getToastMsg().should('be.visible');
    cy.wait(2000)
    cy.search_medium_names(
      Assetdata.scenario_01_Assets[3].feed4_medium_name)
    cy.wait(3000)
    deleteAssets.getToastMsg().should('be.visible');
    cy.wait(2000)
    cy.search_medium_names(
      Assetdata.scenario_01_Assets[4].feed5_medium_name)
    cy.wait(3000)
    deleteAssets.getToastMsg().should('be.visible');
    cy.wait(2000)
    cy.search_medium_names(
      Assetdata.scenario_01_Assets[5].feed6_medium_name)
    cy.wait(3000)
    deleteAssets.getToastMsg().should('be.visible');
    cy.wait(2000)
    cy.search_medium_names(
      Assetdata.scenario_01_Assets[6].feed7_medium_name)
    cy.wait(3000)
    deleteAssets.getToastMsg().should('be.visible');
    cy.wait(2000)
    cy.search_medium_names(
      Assetdata.scenario_01_Assets[7].feed8_medium_name)
    cy.wait(3000)
    deleteAssets.getToastMsg().should('be.visible');
    cy.wait(2000)
    cy.search_medium_names(
      Assetdata.scenario_01_Assets[8].feed9_medium_name)
    cy.wait(3000)
    deleteAssets.getToastMsg().should('be.visible');
    cy.wait(2000)
    cy.search_medium_names(
      Assetdata.scenario_01_Assets[9].Antifoam_medium_name)
    cy.wait(3000)
    deleteAssets.getToastMsg().should('be.visible');
    cy.wait(2000)
    cy.search_medium_names(
      Assetdata.scenario_01_Assets[10].Base_medium_name)
    cy.wait(3000)
    deleteAssets.getToastMsg().should('be.visible');
    cy.wait(2000)
  });
})