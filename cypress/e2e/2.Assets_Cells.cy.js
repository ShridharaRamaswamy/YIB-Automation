/// <reference types="Cypress" />
/// <reference types="cypress-iframe" />
/// <reference types="cypress-xpath" />
import WorkSpacePage from '../support/PageObjects/WorkSpacePage';
import AddMediumPage from '../support/PageObjects/AddMediumPage';
import ProductmoleculePage from '../support/PageObjects/ProductmoleculePage';
import CellPage from '../support/PageObjects/CellPage';

describe('Assets - Cells', () => {
  const addMediumPage = new AddMediumPage();
  const workspacePage = new WorkSpacePage();
  const productmoleculePage = new ProductmoleculePage();
  const cellPage = new CellPage();
  
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
    cy.fixture('assets_cellsdata.json').then((data) => {
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

  it('should navigate to the cells list', () => {

    workspacePage.getCellsList().click(); // Navigate to Cells list
    cy.wait(4000)
  });

  it('should check the cells grid headers', ()=> {

    workspacePage.getCellsGridName().should('be.visible');
    workspacePage.getCellsGridOrg().should('be.visible');
    workspacePage.getCellsGridHostCell().should('be.visible');
    workspacePage.getCellsGridPM().should('be.visible');
    workspacePage.getCellsGridMNM().should('be.visible');
    workspacePage.getCellsGridNotes().should('be.visible');
    workspacePage.getCellsGridActions().should('be.visible');
    workspacePage.getCellsGridExpand().eq(0).click();
    cy.wait(2000)
  });

  it('cells name field length validation', ()=> {
    cellPage.getAddcellsBtn().click(); // click on add cells info button
    cy.wait(2500)
    cellPage.getCellname().type(Assetdata.Assets_Cells[2].cell3_name);
    cy.wait(2000)
    cellPage.getErrorMsg().should('be.visible');
    cy.wait(2000)
    cellPage.getcancelButton().click();
    cy.wait(500)
  });


  it('add workshop cell',()=> {
  
    cellPage.getAddcellsBtn().click(); // click on add cells info button
    cy.wait(2500)
    cellPage.getCellname().type(Assetdata.Assets_Cells[0].cell1_name);
    cy.wait(2000)
    cellPage.getCellDropdown().click(); //click on host cell selection dropdown
    cy.wait(2000)
    cellPage.getCellWSHostcell().click(); //click on Host_cell_line_workshop-organism_workshop
    cy.wait(2000)
    cellPage.getCellsDes().type(Assetdata.Assets_Cells[0].cell1_Description);
    cy.wait(2000)
    cellPage.getCellsPM().click();
    cy.wait(2000)
    cellPage.getCellsAddMNM().click();
    cy.wait(2000)
    cellPage.getCellsMNMName().click();
    cy.wait(2000)
    cellPage.getCellsMNMmodelname().click();
    cy.wait(2000)
    cellPage.getCellsSaveBtn().click()
    cy.wait(1000)
    
  });

  it('validate the toast message once workshop cell added successfully' ,()=> {
    
    cellPage.getToastMsgCells().should('be.visible');
    cy.wait(2000) 
  });

  it('add scenario 01 cell',()=> {
  
    cellPage.getAddcellsBtn().click(); // click on add cells info button
    cy.wait(2500)
    cellPage.getCellname().type(Assetdata.Assets_Cells[1].cell2_name);
    cy.wait(2000)
    cellPage.getCellDropdown().click(); //click on host cell selection dropdown
    cy.wait(2000)
    cellPage.getCellSceHostcell().click(); //click on Host_cell_line_workshop-organism_workshop
    cy.wait(2000)
    cellPage.getCellsDes().type(Assetdata.Assets_Cells[1].cell2_Description);
    cy.wait(2000)
    cellPage.getCellsPM().click();
    cy.wait(2000)
    cellPage.getCellsAddMNM().click();
    cy.wait(2000)
    cellPage.getCellsMNMName().click();
    cy.wait(2000)
    cellPage.getCellsMNMmodelnameSce().click();
    cy.wait(2000)
    cellPage.getCellsSaveBtn().click()
    cy.wait(1000)
    
  });

  it('validate the toast message once scenario 01 cell added successfully' ,()=> {
    
    cellPage.getToastMsgCells().should('be.visible');
    cy.wait(2000) 
  });
  

})