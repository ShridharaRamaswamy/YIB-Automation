/// <reference types="Cypress" />
/// <reference types="cypress-iframe" />
/// <reference types="cypress-xpath" />
import WorkSpacePage from '../support/PageObjects/WorkSpacePage';
import AddMediumPage from '../support/PageObjects/AddMediumPage';
import ProductmoleculePage from '../support/PageObjects/ProductmoleculePage';
import CellPage from '../support/PageObjects/CellPage';
import SpargingGas from '../support/PageObjects/SpargingGas';
import ControllersPage from '../support/PageObjects/ControllersPage';
import ReactorPage from '../support/PageObjects/ReactorPage';

describe('template spec', () => {
    const workspacePage = new WorkSpacePage();
    const controllersPage = new ControllersPage();
    const reactorPage = new ReactorPage();
    
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
    cy.fixture('assets_reactorsdata.json').then((data) => {
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

    workspacePage.getReactorList().click(); // Navigate to Reactor list
    cy.wait(4000)
  });

  it('Should check the Reactor grid headers', ()=> {

    workspacePage.getReactorGridName().should('be.visible');
    workspacePage.getreactorGridInlet().should('be.visible');
    workspacePage.getreactorGridoutlet().should('be.visible');
    workspacePage.getreactorGridMaxWrk().should('be.visible');
    workspacePage.getreactorGridImplName().should('be.visible');
    workspacePage.getreactorGridNotes().should('be.visible');
    workspacePage.getreactorGridActions().should('be.visible');
    workspacePage.getreactorGridExpand().eq(0).click();
    cy.wait(2500)
  });

  it('Add reactor ',()=> {
    
    reactorPage.getreactorAddBtn().click();  //click on add controller button
    cy.wait(2000)
    reactorPage.getreactornamefield().type(Assetdata.Assets_reactors[0].reactor1_name);
    cy.wait(2000)
    reactorPage.getreactorDesfield().type(Assetdata.Assets_reactors[0].reactor1_Description);
    cy.wait(2000)
    reactorPage.getreactorGeo().click();
    cy.wait(1000)
    reactorPage.getreactorMinVessel().clear();
    reactorPage.getreactorMinVessel().type(Assetdata.Assets_reactors[0].reactor1_Geo_Properties[0].MinVessel);
    cy.wait(1000)
    reactorPage.getreactorMaxVessel().clear();
    reactorPage.getreactorMaxVessel().type(Assetdata.Assets_reactors[0].reactor1_Geo_Properties[0].MaxVessel);
    cy.wait(1000)
    reactorPage.getVesselunitdropdown().click();
    cy.wait(1000)
    reactorPage.getVesselUnit().click();
    reactorPage.getreactorIMP().click();
    cy.wait(1000)
    reactorPage.getIMPdropdown().click();
    reactorPage.getAddImpeller().click();
    cy.wait(1000)
    reactorPage.getreactorinlets().click();
    cy.wait(1000)

    cy.Add_reactor_inlets(2,0,
      Assetdata.Assets_reactors[0].reactor1_io[0].name,
      Assetdata.Assets_reactors[0].reactor1_io[0].llimit,
      Assetdata.Assets_reactors[0].reactor1_io[0].hlimit,
      Assetdata.Assets_reactors[0].reactor1_io[0].unit,
      Assetdata.Assets_reactors[0].reactor1_io[0].notes),

    cy.Add_reactor_inlets(3,0,
      Assetdata.Assets_reactors[0].reactor1_io[1].name,
      Assetdata.Assets_reactors[0].reactor1_io[1].llimit,
      Assetdata.Assets_reactors[0].reactor1_io[1].hlimit,
      Assetdata.Assets_reactors[0].reactor1_io[1].unit,
      Assetdata.Assets_reactors[0].reactor1_io[1].notes)

    reactorPage.getreactorSavetBtn().click()
    cy.wait(1000)
    
  });
  

})