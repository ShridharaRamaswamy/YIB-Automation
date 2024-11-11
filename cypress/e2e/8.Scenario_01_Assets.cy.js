/// <reference types="Cypress" />
/// <reference types="cypress-iframe" />
/// <reference types="cypress-xpath" />
import WorkSpacePage from '../support/PageObjects/WorkSpacePage';
import AddMediumPage from '../support/PageObjects/AddMediumPage';

describe('Assets - Scenario_01 - Medium', () => {
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

  it('Addition of scenario_01 feed2', () => {

    addMediumPage.getAddMediumBtn().click(); // Click to open the add medium form
    cy.wait(2000)

    addMediumPage.getAddMediumTitle().should('be.visible');
    cy.wait(2000)
    addMediumPage.getAddMediumName().type(Assetdata.scenario_01_Assets[0].feed2_medium_name);
    cy.wait(2000)
    addMediumPage.getAddMediumTypeDropdown().click();
    cy.wait(2000)
    addMediumPage.getSelectedMediumType().click();
    cy.wait(2000)
    addMediumPage.getAddMediumDesc().type(Assetdata.scenario_01_Assets[0].feed2_Description);
    cy.wait(2000)



    cy.Add_components(2, 600,
      Assetdata.scenario_01_Assets[0].feed2_medium_composition[0].name,
      Assetdata.scenario_01_Assets[0].feed2_medium_composition[0].llimit,
      Assetdata.scenario_01_Assets[0].feed2_medium_composition[0].hlimit,
      Assetdata.scenario_01_Assets[0].feed2_medium_composition[0].unit)
    cy.Add_components(3, 600,
      Assetdata.scenario_01_Assets[0].feed2_medium_composition[1].name,
      Assetdata.scenario_01_Assets[0].feed2_medium_composition[1].llimit,
      Assetdata.scenario_01_Assets[0].feed2_medium_composition[1].hlimit,
      Assetdata.scenario_01_Assets[0].feed2_medium_composition[1].unit)
    addMediumPage.AssetSavetBtn().click()
    addMediumPage.getToastMsg().should('be.visible');
    cy.wait(2000) 
  });

  it('Addition of scenario_01 feed3', () => {

    addMediumPage.getAddMediumBtn().click(); // Click to open the add medium form
    cy.wait(2000)

    addMediumPage.getAddMediumTitle().should('be.visible');
    cy.wait(2000)
    addMediumPage.getAddMediumName().type(Assetdata.scenario_01_Assets[1].feed3_medium_name);
    cy.wait(2000)
    addMediumPage.getAddMediumTypeDropdown().click();
    cy.wait(2000)
    addMediumPage.getSelectedMediumType().click();
    cy.wait(2000)
    addMediumPage.getAddMediumDesc().type(Assetdata.scenario_01_Assets[1].feed3_Description);

    cy.Add_components(2, 0,
      Assetdata.scenario_01_Assets[1].feed3_medium_composition[0].name,
      Assetdata.scenario_01_Assets[1].feed3_medium_composition[0].llimit,
      Assetdata.scenario_01_Assets[1].feed3_medium_composition[0].hlimit,
      Assetdata.scenario_01_Assets[1].feed3_medium_composition[0].unit)

    cy.Add_components(3, 0,
      Assetdata.scenario_01_Assets[1].feed3_medium_composition[1].name,
      Assetdata.scenario_01_Assets[1].feed3_medium_composition[1].llimit,
      Assetdata.scenario_01_Assets[1].feed3_medium_composition[1].hlimit,
      Assetdata.scenario_01_Assets[1].feed3_medium_composition[1].unit)

    cy.Add_components(4, 700,
      Assetdata.scenario_01_Assets[1].feed3_medium_composition[2].name,
      Assetdata.scenario_01_Assets[1].feed3_medium_composition[2].llimit,
      Assetdata.scenario_01_Assets[1].feed3_medium_composition[2].hlimit,
      Assetdata.scenario_01_Assets[1].feed3_medium_composition[2].unit)

    cy.Add_components(5, 1800,
      Assetdata.scenario_01_Assets[1].feed3_medium_composition[3].name,
      Assetdata.scenario_01_Assets[1].feed3_medium_composition[3].llimit,
      Assetdata.scenario_01_Assets[1].feed3_medium_composition[3].hlimit,
      Assetdata.scenario_01_Assets[1].feed3_medium_composition[3].unit)

    cy.Add_components(6, 1100,
      Assetdata.scenario_01_Assets[1].feed3_medium_composition[4].name,
      Assetdata.scenario_01_Assets[1].feed3_medium_composition[4].llimit,
      Assetdata.scenario_01_Assets[1].feed3_medium_composition[4].hlimit,
      Assetdata.scenario_01_Assets[1].feed3_medium_composition[4].unit)

    cy.Add_components(7, 1800,
      Assetdata.scenario_01_Assets[1].feed3_medium_composition[5].name,
      Assetdata.scenario_01_Assets[1].feed3_medium_composition[5].llimit,
      Assetdata.scenario_01_Assets[1].feed3_medium_composition[5].hlimit,
      Assetdata.scenario_01_Assets[1].feed3_medium_composition[5].unit)

    cy.Add_components(8, 600,
      Assetdata.scenario_01_Assets[1].feed3_medium_composition[6].name,
      Assetdata.scenario_01_Assets[1].feed3_medium_composition[6].llimit,
      Assetdata.scenario_01_Assets[1].feed3_medium_composition[6].hlimit,
      Assetdata.scenario_01_Assets[1].feed3_medium_composition[6].unit)

    cy.Add_components(9, 1200,
      Assetdata.scenario_01_Assets[1].feed3_medium_composition[7].name,
      Assetdata.scenario_01_Assets[1].feed3_medium_composition[7].llimit,
      Assetdata.scenario_01_Assets[1].feed3_medium_composition[7].hlimit,
      Assetdata.scenario_01_Assets[1].feed3_medium_composition[7].unit)

    cy.Add_components(10, 1800,
      Assetdata.scenario_01_Assets[1].feed3_medium_composition[8].name,
      Assetdata.scenario_01_Assets[1].feed3_medium_composition[8].llimit,
      Assetdata.scenario_01_Assets[1].feed3_medium_composition[8].hlimit,
      Assetdata.scenario_01_Assets[1].feed3_medium_composition[8].unit)

    cy.Add_components(11, 700,
      Assetdata.scenario_01_Assets[1].feed3_medium_composition[9].name,
      Assetdata.scenario_01_Assets[1].feed3_medium_composition[9].llimit,
      Assetdata.scenario_01_Assets[1].feed3_medium_composition[9].hlimit,
      Assetdata.scenario_01_Assets[1].feed3_medium_composition[9].unit)

    cy.Add_components(12, 1800,
      Assetdata.scenario_01_Assets[1].feed3_medium_composition[10].name,
      Assetdata.scenario_01_Assets[1].feed3_medium_composition[10].llimit,
      Assetdata.scenario_01_Assets[1].feed3_medium_composition[10].hlimit,
      Assetdata.scenario_01_Assets[1].feed3_medium_composition[10].unit)

    cy.Add_components(13, 1200,
      Assetdata.scenario_01_Assets[1].feed3_medium_composition[11].name,
      Assetdata.scenario_01_Assets[1].feed3_medium_composition[11].llimit,
      Assetdata.scenario_01_Assets[1].feed3_medium_composition[11].hlimit,
      Assetdata.scenario_01_Assets[1].feed3_medium_composition[11].unit)

    cy.Add_components(14, 1800,
      Assetdata.scenario_01_Assets[1].feed3_medium_composition[12].name,
      Assetdata.scenario_01_Assets[1].feed3_medium_composition[12].llimit,
      Assetdata.scenario_01_Assets[1].feed3_medium_composition[12].hlimit,
      Assetdata.scenario_01_Assets[1].feed3_medium_composition[12].unit)

    cy.Add_components(15, 300,
      Assetdata.scenario_01_Assets[1].feed3_medium_composition[13].name,
      Assetdata.scenario_01_Assets[1].feed3_medium_composition[13].llimit,
      Assetdata.scenario_01_Assets[1].feed3_medium_composition[13].hlimit,
      Assetdata.scenario_01_Assets[1].feed3_medium_composition[13].unit)
    cy.Add_components(16, 1200,
      Assetdata.scenario_01_Assets[1].feed3_medium_composition[14].name,
      Assetdata.scenario_01_Assets[1].feed3_medium_composition[14].llimit,
      Assetdata.scenario_01_Assets[1].feed3_medium_composition[14].hlimit,
      Assetdata.scenario_01_Assets[1].feed3_medium_composition[14].unit)

    cy.Add_components(17, 400,
      Assetdata.scenario_01_Assets[1].feed3_medium_composition[15].name,
      Assetdata.scenario_01_Assets[1].feed3_medium_composition[15].llimit,
      Assetdata.scenario_01_Assets[1].feed3_medium_composition[15].hlimit,
      Assetdata.scenario_01_Assets[1].feed3_medium_composition[15].unit)

    cy.Add_components(18, 800,
      Assetdata.scenario_01_Assets[1].feed3_medium_composition[16].name,
      Assetdata.scenario_01_Assets[1].feed3_medium_composition[16].llimit,
      Assetdata.scenario_01_Assets[1].feed3_medium_composition[16].hlimit,
      Assetdata.scenario_01_Assets[1].feed3_medium_composition[16].unit)

    cy.Add_components(19, 800,
      Assetdata.scenario_01_Assets[1].feed3_medium_composition[17].name,
      Assetdata.scenario_01_Assets[1].feed3_medium_composition[17].llimit,
      Assetdata.scenario_01_Assets[1].feed3_medium_composition[17].hlimit,
      Assetdata.scenario_01_Assets[1].feed3_medium_composition[17].unit)

    cy.Add_components(20, 200,
      Assetdata.scenario_01_Assets[1].feed3_medium_composition[18].name,
      Assetdata.scenario_01_Assets[1].feed3_medium_composition[18].llimit,
      Assetdata.scenario_01_Assets[1].feed3_medium_composition[18].hlimit,
      Assetdata.scenario_01_Assets[1].feed3_medium_composition[18].unit)

    cy.Add_components(21, 500,
      Assetdata.scenario_01_Assets[1].feed3_medium_composition[19].name,
      Assetdata.scenario_01_Assets[1].feed3_medium_composition[19].llimit,
      Assetdata.scenario_01_Assets[1].feed3_medium_composition[19].hlimit,
      Assetdata.scenario_01_Assets[1].feed3_medium_composition[19].unit)


    addMediumPage.AssetSavetBtn().click()
    addMediumPage.getToastMsg().should('be.visible');
    cy.wait(2000) 
  });

  it('Addition of scenario_01 inoculum', () => {

    addMediumPage.getAddMediumBtn().click(); // Click to open the add medium form
    cy.wait(2000)

    addMediumPage.getAddMediumTitle().should('be.visible');
    cy.wait(2000)
    addMediumPage.getAddMediumName().type(Assetdata.scenario_01_Assets[2].inoculum_medium_name);
    cy.wait(2000)
    addMediumPage.getAddMediumTypeDropdown().click();
    cy.wait(2000)
    addMediumPage.getSelectedMediumType().click();
    cy.wait(2000)
    addMediumPage.getAddMediumDesc().type(Assetdata.scenario_01_Assets[2].inoculum_Description);
    cy.wait(2000)



    cy.Add_components(2, 0,
      Assetdata.scenario_01_Assets[2].inoculum_medium_composition[0].name,
      Assetdata.scenario_01_Assets[2].inoculum_medium_composition[0].llimit,
      Assetdata.scenario_01_Assets[2].inoculum_medium_composition[0].hlimit,
      Assetdata.scenario_01_Assets[2].inoculum_medium_composition[0].unit)


    cy.Add_components(3, 0,
      Assetdata.scenario_01_Assets[2].inoculum_medium_composition[1].name,
      Assetdata.scenario_01_Assets[2].inoculum_medium_composition[1].llimit,
      Assetdata.scenario_01_Assets[2].inoculum_medium_composition[1].hlimit,
      Assetdata.scenario_01_Assets[2].inoculum_medium_composition[1].unit)


    cy.Add_components(4, 0,
      Assetdata.scenario_01_Assets[2].inoculum_medium_composition[2].name,
      Assetdata.scenario_01_Assets[2].inoculum_medium_composition[2].llimit,
      Assetdata.scenario_01_Assets[2].inoculum_medium_composition[2].hlimit,
      Assetdata.scenario_01_Assets[2].inoculum_medium_composition[2].unit)


    cy.Add_components(5, 0,
      Assetdata.scenario_01_Assets[2].inoculum_medium_composition[3].name,
      Assetdata.scenario_01_Assets[2].inoculum_medium_composition[3].llimit,
      Assetdata.scenario_01_Assets[2].inoculum_medium_composition[3].hlimit,
      Assetdata.scenario_01_Assets[2].inoculum_medium_composition[3].unit)

    cy.Add_components(6, 200,
      Assetdata.scenario_01_Assets[2].inoculum_medium_composition[4].name,
      Assetdata.scenario_01_Assets[2].inoculum_medium_composition[4].llimit,
      Assetdata.scenario_01_Assets[2].inoculum_medium_composition[4].hlimit,
      Assetdata.scenario_01_Assets[2].inoculum_medium_composition[4].unit)

    cy.Add_components(7, 200,
      Assetdata.scenario_01_Assets[2].inoculum_medium_composition[5].name,
      Assetdata.scenario_01_Assets[2].inoculum_medium_composition[5].llimit,
      Assetdata.scenario_01_Assets[2].inoculum_medium_composition[5].hlimit,
      Assetdata.scenario_01_Assets[2].inoculum_medium_composition[5].unit)

    addMediumPage.AssetSavetBtn().click()
    cy.wait(3000)
    addMediumPage.getToastMsg().should('be.visible');
    cy.wait(2000) 
  });

  it('Addition of scenario_01 feed4', () => {

    addMediumPage.getAddMediumBtn().click(); // Click to open the add medium form
    cy.wait(2000)

    addMediumPage.getAddMediumTitle().should('be.visible');
    cy.wait(2000)
    addMediumPage.getAddMediumName().type(Assetdata.scenario_01_Assets[3].feed4_medium_name);
    cy.wait(2000)
    addMediumPage.getAddMediumTypeDropdown().click();
    cy.wait(2000)
    addMediumPage.getSelectedMediumType().click();
    cy.wait(2000)
    addMediumPage.getAddMediumDesc().type(Assetdata.scenario_01_Assets[3].feed4_Description);
    cy.wait(2000)

    cy.Add_components(2, 0,
      Assetdata.scenario_01_Assets[3].feed4_medium_composition[0].name,
      Assetdata.scenario_01_Assets[3].feed4_medium_composition[0].llimit,
      Assetdata.scenario_01_Assets[3].feed4_medium_composition[0].hlimit,
      Assetdata.scenario_01_Assets[3].feed4_medium_composition[0].unit)

    addMediumPage.AssetSavetBtn().click()
    cy.wait(3000)
    addMediumPage.getToastMsg().should('be.visible');
    cy.wait(2000) 
  });


  it('Addition of scenario_01 feed5', () => {

    addMediumPage.getAddMediumBtn().click(); // Click to open the add medium form
    cy.wait(2000)

    addMediumPage.getAddMediumTitle().should('be.visible');
    cy.wait(2000)
    addMediumPage.getAddMediumName().type(Assetdata.scenario_01_Assets[4].feed5_medium_name);
    cy.wait(2000)
    addMediumPage.getAddMediumTypeDropdown().click();
    cy.wait(2000)
    addMediumPage.getSelectedMediumType().click();
    cy.wait(2000)
    addMediumPage.getAddMediumDesc().type(Assetdata.scenario_01_Assets[4].feed5_Description);
    cy.wait(2000)

    cy.Add_components(2, 500,
      Assetdata.scenario_01_Assets[4].feed5_medium_composition[0].name,
      Assetdata.scenario_01_Assets[4].feed5_medium_composition[0].llimit,
      Assetdata.scenario_01_Assets[4].feed5_medium_composition[0].hlimit,
      Assetdata.scenario_01_Assets[4].feed5_medium_composition[0].unit)
    cy.Add_components(3, 500,
      Assetdata.scenario_01_Assets[4].feed5_medium_composition[1].name,
      Assetdata.scenario_01_Assets[4].feed5_medium_composition[1].llimit,
      Assetdata.scenario_01_Assets[4].feed5_medium_composition[1].hlimit,
      Assetdata.scenario_01_Assets[4].feed5_medium_composition[1].unit)

    addMediumPage.AssetSavetBtn().click()
    cy.wait(3000)
    addMediumPage.getToastMsg().should('be.visible');
    cy.wait(2000) 
  });

  it('Addition of scenario_01 feed6', () => {

    addMediumPage.getAddMediumBtn().click(); // Click to open the add medium form
    cy.wait(2000)

    addMediumPage.getAddMediumTitle().should('be.visible');
    cy.wait(2000)
    addMediumPage.getAddMediumName().type(Assetdata.scenario_01_Assets[5].feed6_medium_name);
    cy.wait(2000)
    addMediumPage.getAddMediumTypeDropdown().click();
    cy.wait(2000)
    addMediumPage.getSelectedMediumType().click();
    cy.wait(2000)
    addMediumPage.getAddMediumDesc().type(Assetdata.scenario_01_Assets[5].feed6_Description);
    cy.wait(2000)

    cy.Add_components(2, 800,
      Assetdata.scenario_01_Assets[5].feed6_medium_composition[0].name,
      Assetdata.scenario_01_Assets[5].feed6_medium_composition[0].llimit,
      Assetdata.scenario_01_Assets[5].feed6_medium_composition[0].hlimit,
      Assetdata.scenario_01_Assets[5].feed6_medium_composition[0].unit)

    cy.Add_components(3, 0,
      Assetdata.scenario_01_Assets[5].feed6_medium_composition[1].name,
      Assetdata.scenario_01_Assets[5].feed6_medium_composition[1].llimit,
      Assetdata.scenario_01_Assets[5].feed6_medium_composition[1].hlimit,
      Assetdata.scenario_01_Assets[5].feed6_medium_composition[1].unit)

    cy.Add_components(4, 1400,
      Assetdata.scenario_01_Assets[5].feed6_medium_composition[2].name,
      Assetdata.scenario_01_Assets[5].feed6_medium_composition[2].llimit,
      Assetdata.scenario_01_Assets[5].feed6_medium_composition[2].hlimit,
      Assetdata.scenario_01_Assets[5].feed6_medium_composition[2].unit)

    cy.Add_components(5, 1100,
      Assetdata.scenario_01_Assets[5].feed6_medium_composition[3].name,
      Assetdata.scenario_01_Assets[5].feed6_medium_composition[3].llimit,
      Assetdata.scenario_01_Assets[5].feed6_medium_composition[3].hlimit,
      Assetdata.scenario_01_Assets[5].feed6_medium_composition[3].unit)
    cy.Add_components(6, 1400,
      Assetdata.scenario_01_Assets[5].feed6_medium_composition[4].name,
      Assetdata.scenario_01_Assets[5].feed6_medium_composition[4].llimit,
      Assetdata.scenario_01_Assets[5].feed6_medium_composition[4].hlimit,
      Assetdata.scenario_01_Assets[5].feed6_medium_composition[4].unit)
    cy.Add_components(7, 500,
      Assetdata.scenario_01_Assets[5].feed6_medium_composition[5].name,
      Assetdata.scenario_01_Assets[5].feed6_medium_composition[5].llimit,
      Assetdata.scenario_01_Assets[5].feed6_medium_composition[5].hlimit,
      Assetdata.scenario_01_Assets[5].feed6_medium_composition[5].unit)
    cy.Add_components(8, 0,
      Assetdata.scenario_01_Assets[5].feed6_medium_composition[6].name,
      Assetdata.scenario_01_Assets[5].feed6_medium_composition[6].llimit,
      Assetdata.scenario_01_Assets[5].feed6_medium_composition[6].hlimit,
      Assetdata.scenario_01_Assets[5].feed6_medium_composition[6].unit)
    cy.Add_components(9, 1300,
      Assetdata.scenario_01_Assets[5].feed6_medium_composition[7].name,
      Assetdata.scenario_01_Assets[5].feed6_medium_composition[7].llimit,
      Assetdata.scenario_01_Assets[5].feed6_medium_composition[7].hlimit,
      Assetdata.scenario_01_Assets[5].feed6_medium_composition[7].unit)
    cy.Add_components(10, 1400,
      Assetdata.scenario_01_Assets[5].feed6_medium_composition[8].name,
      Assetdata.scenario_01_Assets[5].feed6_medium_composition[8].llimit,
      Assetdata.scenario_01_Assets[5].feed6_medium_composition[8].hlimit,
      Assetdata.scenario_01_Assets[5].feed6_medium_composition[8].unit)

    cy.Add_components(11, 800,
      Assetdata.scenario_01_Assets[5].feed6_medium_composition[9].name,
      Assetdata.scenario_01_Assets[5].feed6_medium_composition[9].llimit,
      Assetdata.scenario_01_Assets[5].feed6_medium_composition[9].hlimit,
      Assetdata.scenario_01_Assets[5].feed6_medium_composition[9].unit)
    cy.Add_components(12, 1500,
      Assetdata.scenario_01_Assets[5].feed6_medium_composition[10].name,
      Assetdata.scenario_01_Assets[5].feed6_medium_composition[10].llimit,
      Assetdata.scenario_01_Assets[5].feed6_medium_composition[10].hlimit,
      Assetdata.scenario_01_Assets[5].feed6_medium_composition[10].unit)


    cy.Add_components(13, 1200,
      Assetdata.scenario_01_Assets[5].feed6_medium_composition[11].name,
      Assetdata.scenario_01_Assets[5].feed6_medium_composition[11].llimit,
      Assetdata.scenario_01_Assets[5].feed6_medium_composition[11].hlimit,
      Assetdata.scenario_01_Assets[5].feed6_medium_composition[11].unit)

    cy.Add_components(14, 1400,
      Assetdata.scenario_01_Assets[5].feed6_medium_composition[12].name,
      Assetdata.scenario_01_Assets[5].feed6_medium_composition[12].llimit,
      Assetdata.scenario_01_Assets[5].feed6_medium_composition[12].hlimit,
      Assetdata.scenario_01_Assets[5].feed6_medium_composition[12].unit)
    cy.Add_components(15, 500,
      Assetdata.scenario_01_Assets[5].feed6_medium_composition[13].name,
      Assetdata.scenario_01_Assets[5].feed6_medium_composition[13].llimit,
      Assetdata.scenario_01_Assets[5].feed6_medium_composition[13].hlimit,
      Assetdata.scenario_01_Assets[5].feed6_medium_composition[13].unit)
    cy.Add_components(16, 1100,
      Assetdata.scenario_01_Assets[5].feed6_medium_composition[14].name,
      Assetdata.scenario_01_Assets[5].feed6_medium_composition[14].llimit,
      Assetdata.scenario_01_Assets[5].feed6_medium_composition[14].hlimit,
      Assetdata.scenario_01_Assets[5].feed6_medium_composition[14].unit)

    cy.Add_components(17, 400,
      Assetdata.scenario_01_Assets[5].feed6_medium_composition[15].name,
      Assetdata.scenario_01_Assets[5].feed6_medium_composition[15].llimit,
      Assetdata.scenario_01_Assets[5].feed6_medium_composition[15].hlimit,
      Assetdata.scenario_01_Assets[5].feed6_medium_composition[15].unit)

    cy.Add_components(18, 800,
      Assetdata.scenario_01_Assets[5].feed6_medium_composition[16].name,
      Assetdata.scenario_01_Assets[5].feed6_medium_composition[16].llimit,
      Assetdata.scenario_01_Assets[5].feed6_medium_composition[16].hlimit,
      Assetdata.scenario_01_Assets[5].feed6_medium_composition[16].unit)

    cy.Add_components(19, 800,
      Assetdata.scenario_01_Assets[5].feed6_medium_composition[17].name,
      Assetdata.scenario_01_Assets[5].feed6_medium_composition[17].llimit,
      Assetdata.scenario_01_Assets[5].feed6_medium_composition[17].hlimit,
      Assetdata.scenario_01_Assets[5].feed6_medium_composition[17].unit)

    cy.Add_components(20, 200,
      Assetdata.scenario_01_Assets[5].feed6_medium_composition[18].name,
      Assetdata.scenario_01_Assets[5].feed6_medium_composition[18].llimit,
      Assetdata.scenario_01_Assets[5].feed6_medium_composition[18].hlimit,
      Assetdata.scenario_01_Assets[5].feed6_medium_composition[18].unit)
    cy.Add_components(21, 500,
      Assetdata.scenario_01_Assets[5].feed6_medium_composition[19].name,
      Assetdata.scenario_01_Assets[5].feed6_medium_composition[19].llimit,
      Assetdata.scenario_01_Assets[5].feed6_medium_composition[19].hlimit,
      Assetdata.scenario_01_Assets[5].feed6_medium_composition[19].unit)

    addMediumPage.AssetSavetBtn().click()
    cy.wait(1000)
    addMediumPage.getToastMsg().should('be.visible');
    cy.wait(2000) 
  });
  it('Addition of scenario_01 feed7', () => {

    addMediumPage.getAddMediumBtn().click(); // Click to open the add medium form
    cy.wait(2000)

    addMediumPage.getAddMediumTitle().should('be.visible');
    cy.wait(2000)
    addMediumPage.getAddMediumName().type(Assetdata.scenario_01_Assets[6].feed7_medium_name);
    cy.wait(2000)
    addMediumPage.getAddMediumTypeDropdown().click();
    cy.wait(2000)
    addMediumPage.getSelectedMediumType().click();
    cy.wait(2000)
    addMediumPage.getAddMediumDesc().type(Assetdata.scenario_01_Assets[6].feed7_Description);
    cy.wait(2000)

    cy.Add_components(2, 800,
      Assetdata.scenario_01_Assets[6].feed7_medium_composition[0].name,
      Assetdata.scenario_01_Assets[6].feed7_medium_composition[0].llimit,
      Assetdata.scenario_01_Assets[6].feed7_medium_composition[0].hlimit,
      Assetdata.scenario_01_Assets[6].feed7_medium_composition[0].unit)

    cy.Add_components(3, 0,
      Assetdata.scenario_01_Assets[6].feed7_medium_composition[1].name,
      Assetdata.scenario_01_Assets[6].feed7_medium_composition[1].llimit,
      Assetdata.scenario_01_Assets[6].feed7_medium_composition[1].hlimit,
      Assetdata.scenario_01_Assets[6].feed7_medium_composition[1].unit)

    cy.Add_components(4, 1400,
      Assetdata.scenario_01_Assets[6].feed7_medium_composition[2].name,
      Assetdata.scenario_01_Assets[6].feed7_medium_composition[2].llimit,
      Assetdata.scenario_01_Assets[6].feed7_medium_composition[2].hlimit,
      Assetdata.scenario_01_Assets[6].feed7_medium_composition[2].unit)

    cy.Add_components(5, 1100,
      Assetdata.scenario_01_Assets[6].feed7_medium_composition[3].name,
      Assetdata.scenario_01_Assets[6].feed7_medium_composition[3].llimit,
      Assetdata.scenario_01_Assets[6].feed7_medium_composition[3].hlimit,
      Assetdata.scenario_01_Assets[6].feed7_medium_composition[3].unit)
    cy.Add_components(6, 1400,
      Assetdata.scenario_01_Assets[6].feed7_medium_composition[4].name,
      Assetdata.scenario_01_Assets[6].feed7_medium_composition[4].llimit,
      Assetdata.scenario_01_Assets[6].feed7_medium_composition[4].hlimit,
      Assetdata.scenario_01_Assets[6].feed7_medium_composition[4].unit)
    cy.Add_components(7, 500,
      Assetdata.scenario_01_Assets[6].feed7_medium_composition[5].name,
      Assetdata.scenario_01_Assets[6].feed7_medium_composition[5].llimit,
      Assetdata.scenario_01_Assets[6].feed7_medium_composition[5].hlimit,
      Assetdata.scenario_01_Assets[6].feed7_medium_composition[5].unit)
    cy.Add_components(8, 0,
      Assetdata.scenario_01_Assets[6].feed7_medium_composition[6].name,
      Assetdata.scenario_01_Assets[6].feed7_medium_composition[6].llimit,
      Assetdata.scenario_01_Assets[6].feed7_medium_composition[6].hlimit,
      Assetdata.scenario_01_Assets[6].feed7_medium_composition[6].unit)
    cy.Add_components(9, 1300,
      Assetdata.scenario_01_Assets[6].feed7_medium_composition[7].name,
      Assetdata.scenario_01_Assets[6].feed7_medium_composition[7].llimit,
      Assetdata.scenario_01_Assets[6].feed7_medium_composition[7].hlimit,
      Assetdata.scenario_01_Assets[6].feed7_medium_composition[7].unit)
    cy.Add_components(10, 1400,
      Assetdata.scenario_01_Assets[6].feed7_medium_composition[8].name,
      Assetdata.scenario_01_Assets[6].feed7_medium_composition[8].llimit,
      Assetdata.scenario_01_Assets[6].feed7_medium_composition[8].hlimit,
      Assetdata.scenario_01_Assets[6].feed7_medium_composition[8].unit)

    cy.Add_components(11, 800,
      Assetdata.scenario_01_Assets[6].feed7_medium_composition[9].name,
      Assetdata.scenario_01_Assets[6].feed7_medium_composition[9].llimit,
      Assetdata.scenario_01_Assets[6].feed7_medium_composition[9].hlimit,
      Assetdata.scenario_01_Assets[6].feed7_medium_composition[9].unit)
    cy.Add_components(12, 1500,
      Assetdata.scenario_01_Assets[6].feed7_medium_composition[10].name,
      Assetdata.scenario_01_Assets[6].feed7_medium_composition[10].llimit,
      Assetdata.scenario_01_Assets[6].feed7_medium_composition[10].hlimit,
      Assetdata.scenario_01_Assets[6].feed7_medium_composition[10].unit)


    cy.Add_components(13, 1200,
      Assetdata.scenario_01_Assets[6].feed7_medium_composition[11].name,
      Assetdata.scenario_01_Assets[6].feed7_medium_composition[11].llimit,
      Assetdata.scenario_01_Assets[6].feed7_medium_composition[11].hlimit,
      Assetdata.scenario_01_Assets[6].feed7_medium_composition[11].unit)

    cy.Add_components(14, 1400,
      Assetdata.scenario_01_Assets[6].feed7_medium_composition[12].name,
      Assetdata.scenario_01_Assets[6].feed7_medium_composition[12].llimit,
      Assetdata.scenario_01_Assets[6].feed7_medium_composition[12].hlimit,
      Assetdata.scenario_01_Assets[6].feed7_medium_composition[12].unit)
    cy.Add_components(15, 500,
      Assetdata.scenario_01_Assets[6].feed7_medium_composition[13].name,
      Assetdata.scenario_01_Assets[6].feed7_medium_composition[13].llimit,
      Assetdata.scenario_01_Assets[6].feed7_medium_composition[13].hlimit,
      Assetdata.scenario_01_Assets[6].feed7_medium_composition[13].unit)
    cy.Add_components(16, 1100,
      Assetdata.scenario_01_Assets[6].feed7_medium_composition[14].name,
      Assetdata.scenario_01_Assets[6].feed7_medium_composition[14].llimit,
      Assetdata.scenario_01_Assets[6].feed7_medium_composition[14].hlimit,
      Assetdata.scenario_01_Assets[6].feed7_medium_composition[14].unit)

    cy.Add_components(17, 400,
      Assetdata.scenario_01_Assets[6].feed7_medium_composition[15].name,
      Assetdata.scenario_01_Assets[6].feed7_medium_composition[15].llimit,
      Assetdata.scenario_01_Assets[6].feed7_medium_composition[15].hlimit,
      Assetdata.scenario_01_Assets[6].feed7_medium_composition[15].unit)

    cy.Add_components(18, 800,
      Assetdata.scenario_01_Assets[6].feed7_medium_composition[16].name,
      Assetdata.scenario_01_Assets[6].feed7_medium_composition[16].llimit,
      Assetdata.scenario_01_Assets[6].feed7_medium_composition[16].hlimit,
      Assetdata.scenario_01_Assets[6].feed7_medium_composition[16].unit)

    cy.Add_components(19, 800,
      Assetdata.scenario_01_Assets[6].feed7_medium_composition[17].name,
      Assetdata.scenario_01_Assets[6].feed7_medium_composition[17].llimit,
      Assetdata.scenario_01_Assets[6].feed7_medium_composition[17].hlimit,
      Assetdata.scenario_01_Assets[6].feed7_medium_composition[17].unit)

    cy.Add_components(20, 200,
      Assetdata.scenario_01_Assets[6].feed7_medium_composition[18].name,
      Assetdata.scenario_01_Assets[6].feed7_medium_composition[18].llimit,
      Assetdata.scenario_01_Assets[6].feed7_medium_composition[18].hlimit,
      Assetdata.scenario_01_Assets[6].feed7_medium_composition[18].unit)
    cy.Add_components(21, 500,
      Assetdata.scenario_01_Assets[6].feed7_medium_composition[19].name,
      Assetdata.scenario_01_Assets[6].feed7_medium_composition[19].llimit,
      Assetdata.scenario_01_Assets[6].feed7_medium_composition[19].hlimit,
      Assetdata.scenario_01_Assets[6].feed7_medium_composition[19].unit)

    addMediumPage.AssetSavetBtn().click()
    cy.wait(2000)
    addMediumPage.getToastMsg().should('be.visible');
    cy.wait(2000) 
  });
  it('Addition of scenario_01 feed8', () => {

    addMediumPage.getAddMediumBtn().click(); // Click to open the add medium form
    cy.wait(2000)

    addMediumPage.getAddMediumTitle().should('be.visible');
    cy.wait(2000)
    addMediumPage.getAddMediumName().type(Assetdata.scenario_01_Assets[7].feed8_medium_name);
    cy.wait(2000)
    addMediumPage.getAddMediumTypeDropdown().click();
    cy.wait(2000)
    addMediumPage.getSelectedMediumType().click();
    cy.wait(2000)
    addMediumPage.getAddMediumDesc().type(Assetdata.scenario_01_Assets[7].feed8_Description);
    cy.wait(2000)

    cy.Add_components(2, 800,
      Assetdata.scenario_01_Assets[7].feed8_medium_composition[0].name,
      Assetdata.scenario_01_Assets[7].feed8_medium_composition[0].llimit,
      Assetdata.scenario_01_Assets[7].feed8_medium_composition[0].hlimit,
      Assetdata.scenario_01_Assets[7].feed8_medium_composition[0].unit)

    cy.Add_components(3, 0,
      Assetdata.scenario_01_Assets[7].feed8_medium_composition[1].name,
      Assetdata.scenario_01_Assets[7].feed8_medium_composition[1].llimit,
      Assetdata.scenario_01_Assets[7].feed8_medium_composition[1].hlimit,
      Assetdata.scenario_01_Assets[7].feed8_medium_composition[1].unit)

    cy.Add_components(4, 1400,
      Assetdata.scenario_01_Assets[7].feed8_medium_composition[2].name,
      Assetdata.scenario_01_Assets[7].feed8_medium_composition[2].llimit,
      Assetdata.scenario_01_Assets[7].feed8_medium_composition[2].hlimit,
      Assetdata.scenario_01_Assets[7].feed8_medium_composition[2].unit)

    cy.Add_components(5, 1100,
      Assetdata.scenario_01_Assets[7].feed8_medium_composition[3].name,
      Assetdata.scenario_01_Assets[7].feed8_medium_composition[3].llimit,
      Assetdata.scenario_01_Assets[7].feed8_medium_composition[3].hlimit,
      Assetdata.scenario_01_Assets[7].feed8_medium_composition[3].unit)
    cy.Add_components(6, 1400,
      Assetdata.scenario_01_Assets[7].feed8_medium_composition[4].name,
      Assetdata.scenario_01_Assets[7].feed8_medium_composition[4].llimit,
      Assetdata.scenario_01_Assets[7].feed8_medium_composition[4].hlimit,
      Assetdata.scenario_01_Assets[7].feed8_medium_composition[4].unit)
    cy.Add_components(7, 500,
      Assetdata.scenario_01_Assets[7].feed8_medium_composition[5].name,
      Assetdata.scenario_01_Assets[7].feed8_medium_composition[5].llimit,
      Assetdata.scenario_01_Assets[7].feed8_medium_composition[5].hlimit,
      Assetdata.scenario_01_Assets[7].feed8_medium_composition[5].unit)
    cy.Add_components(8, 0,
      Assetdata.scenario_01_Assets[7].feed8_medium_composition[6].name,
      Assetdata.scenario_01_Assets[7].feed8_medium_composition[6].llimit,
      Assetdata.scenario_01_Assets[7].feed8_medium_composition[6].hlimit,
      Assetdata.scenario_01_Assets[7].feed8_medium_composition[6].unit)
    cy.Add_components(9, 1300,
      Assetdata.scenario_01_Assets[7].feed8_medium_composition[7].name,
      Assetdata.scenario_01_Assets[7].feed8_medium_composition[7].llimit,
      Assetdata.scenario_01_Assets[7].feed8_medium_composition[7].hlimit,
      Assetdata.scenario_01_Assets[7].feed8_medium_composition[7].unit)
    cy.Add_components(10, 1400,
      Assetdata.scenario_01_Assets[7].feed8_medium_composition[8].name,
      Assetdata.scenario_01_Assets[7].feed8_medium_composition[8].llimit,
      Assetdata.scenario_01_Assets[7].feed8_medium_composition[8].hlimit,
      Assetdata.scenario_01_Assets[7].feed8_medium_composition[8].unit)

    cy.Add_components(11, 800,
      Assetdata.scenario_01_Assets[7].feed8_medium_composition[9].name,
      Assetdata.scenario_01_Assets[7].feed8_medium_composition[9].llimit,
      Assetdata.scenario_01_Assets[7].feed8_medium_composition[9].hlimit,
      Assetdata.scenario_01_Assets[7].feed8_medium_composition[9].unit)
    cy.Add_components(12, 1500,
      Assetdata.scenario_01_Assets[7].feed8_medium_composition[10].name,
      Assetdata.scenario_01_Assets[7].feed8_medium_composition[10].llimit,
      Assetdata.scenario_01_Assets[7].feed8_medium_composition[10].hlimit,
      Assetdata.scenario_01_Assets[7].feed8_medium_composition[10].unit)


    cy.Add_components(13, 1200,
      Assetdata.scenario_01_Assets[7].feed8_medium_composition[11].name,
      Assetdata.scenario_01_Assets[7].feed8_medium_composition[11].llimit,
      Assetdata.scenario_01_Assets[7].feed8_medium_composition[11].hlimit,
      Assetdata.scenario_01_Assets[7].feed8_medium_composition[11].unit)

    cy.Add_components(14, 1400,
      Assetdata.scenario_01_Assets[7].feed8_medium_composition[12].name,
      Assetdata.scenario_01_Assets[7].feed8_medium_composition[12].llimit,
      Assetdata.scenario_01_Assets[7].feed8_medium_composition[12].hlimit,
      Assetdata.scenario_01_Assets[7].feed8_medium_composition[12].unit)
    cy.Add_components(15, 500,
      Assetdata.scenario_01_Assets[7].feed8_medium_composition[13].name,
      Assetdata.scenario_01_Assets[7].feed8_medium_composition[13].llimit,
      Assetdata.scenario_01_Assets[7].feed8_medium_composition[13].hlimit,
      Assetdata.scenario_01_Assets[7].feed8_medium_composition[13].unit)
    cy.Add_components(16, 1100,
      Assetdata.scenario_01_Assets[7].feed8_medium_composition[14].name,
      Assetdata.scenario_01_Assets[7].feed8_medium_composition[14].llimit,
      Assetdata.scenario_01_Assets[7].feed8_medium_composition[14].hlimit,
      Assetdata.scenario_01_Assets[7].feed8_medium_composition[14].unit)

    cy.Add_components(17, 400,
      Assetdata.scenario_01_Assets[7].feed8_medium_composition[15].name,
      Assetdata.scenario_01_Assets[7].feed8_medium_composition[15].llimit,
      Assetdata.scenario_01_Assets[7].feed8_medium_composition[15].hlimit,
      Assetdata.scenario_01_Assets[7].feed8_medium_composition[15].unit)

    cy.Add_components(18, 800,
      Assetdata.scenario_01_Assets[7].feed8_medium_composition[16].name,
      Assetdata.scenario_01_Assets[7].feed8_medium_composition[16].llimit,
      Assetdata.scenario_01_Assets[7].feed8_medium_composition[16].hlimit,
      Assetdata.scenario_01_Assets[7].feed8_medium_composition[16].unit)

    cy.Add_components(19, 800,
      Assetdata.scenario_01_Assets[7].feed8_medium_composition[17].name,
      Assetdata.scenario_01_Assets[7].feed8_medium_composition[17].llimit,
      Assetdata.scenario_01_Assets[7].feed8_medium_composition[17].hlimit,
      Assetdata.scenario_01_Assets[7].feed8_medium_composition[17].unit)

    cy.Add_components(20, 200,
      Assetdata.scenario_01_Assets[7].feed8_medium_composition[18].name,
      Assetdata.scenario_01_Assets[7].feed8_medium_composition[18].llimit,
      Assetdata.scenario_01_Assets[7].feed8_medium_composition[18].hlimit,
      Assetdata.scenario_01_Assets[7].feed8_medium_composition[18].unit)
    cy.Add_components(21, 500,
      Assetdata.scenario_01_Assets[7].feed8_medium_composition[19].name,
      Assetdata.scenario_01_Assets[7].feed8_medium_composition[19].llimit,
      Assetdata.scenario_01_Assets[7].feed8_medium_composition[19].hlimit,
      Assetdata.scenario_01_Assets[7].feed8_medium_composition[19].unit)

    addMediumPage.AssetSavetBtn().click()
    cy.wait(3000)
    addMediumPage.getToastMsg().should('be.visible');
    cy.wait(2000) 
  });
  it('Addition of scenario_01 feed9', () => {

    addMediumPage.getAddMediumBtn().click(); // Click to open the add medium form
    cy.wait(2000)

    addMediumPage.getAddMediumTitle().should('be.visible');
    cy.wait(2000)
    addMediumPage.getAddMediumName().type(Assetdata.scenario_01_Assets[8].feed9_medium_name);
    cy.wait(2000)
    addMediumPage.getAddMediumTypeDropdown().click();
    cy.wait(2000)
    addMediumPage.getSelectedMediumType().click();
    cy.wait(2000)
    addMediumPage.getAddMediumDesc().type(Assetdata.scenario_01_Assets[8].feed9_Description);
    cy.wait(2000)

    cy.Add_components(2, 800,
      Assetdata.scenario_01_Assets[8].feed9_medium_composition[0].name,
      Assetdata.scenario_01_Assets[8].feed9_medium_composition[0].llimit,
      Assetdata.scenario_01_Assets[8].feed9_medium_composition[0].hlimit,
      Assetdata.scenario_01_Assets[8].feed9_medium_composition[0].unit)

    cy.Add_components(3, 0,
      Assetdata.scenario_01_Assets[8].feed9_medium_composition[1].name,
      Assetdata.scenario_01_Assets[8].feed9_medium_composition[1].llimit,
      Assetdata.scenario_01_Assets[8].feed9_medium_composition[1].hlimit,
      Assetdata.scenario_01_Assets[8].feed9_medium_composition[1].unit)

    cy.Add_components(4, 1400,
      Assetdata.scenario_01_Assets[8].feed9_medium_composition[2].name,
      Assetdata.scenario_01_Assets[8].feed9_medium_composition[2].llimit,
      Assetdata.scenario_01_Assets[8].feed9_medium_composition[2].hlimit,
      Assetdata.scenario_01_Assets[8].feed9_medium_composition[2].unit)

    cy.Add_components(5, 1100,
      Assetdata.scenario_01_Assets[8].feed9_medium_composition[3].name,
      Assetdata.scenario_01_Assets[8].feed9_medium_composition[3].llimit,
      Assetdata.scenario_01_Assets[8].feed9_medium_composition[3].hlimit,
      Assetdata.scenario_01_Assets[8].feed9_medium_composition[3].unit)
    cy.Add_components(6, 1400,
      Assetdata.scenario_01_Assets[8].feed9_medium_composition[4].name,
      Assetdata.scenario_01_Assets[8].feed9_medium_composition[4].llimit,
      Assetdata.scenario_01_Assets[8].feed9_medium_composition[4].hlimit,
      Assetdata.scenario_01_Assets[8].feed9_medium_composition[4].unit)
    cy.Add_components(7, 500,
      Assetdata.scenario_01_Assets[8].feed9_medium_composition[5].name,
      Assetdata.scenario_01_Assets[8].feed9_medium_composition[5].llimit,
      Assetdata.scenario_01_Assets[8].feed9_medium_composition[5].hlimit,
      Assetdata.scenario_01_Assets[8].feed9_medium_composition[5].unit)
    cy.Add_components(8, 0,
      Assetdata.scenario_01_Assets[8].feed9_medium_composition[6].name,
      Assetdata.scenario_01_Assets[8].feed9_medium_composition[6].llimit,
      Assetdata.scenario_01_Assets[8].feed9_medium_composition[6].hlimit,
      Assetdata.scenario_01_Assets[8].feed9_medium_composition[6].unit)
    cy.Add_components(9, 1300,
      Assetdata.scenario_01_Assets[8].feed9_medium_composition[7].name,
      Assetdata.scenario_01_Assets[8].feed9_medium_composition[7].llimit,
      Assetdata.scenario_01_Assets[8].feed9_medium_composition[7].hlimit,
      Assetdata.scenario_01_Assets[8].feed9_medium_composition[7].unit)
    cy.Add_components(10, 1400,
      Assetdata.scenario_01_Assets[8].feed9_medium_composition[8].name,
      Assetdata.scenario_01_Assets[8].feed9_medium_composition[8].llimit,
      Assetdata.scenario_01_Assets[8].feed9_medium_composition[8].hlimit,
      Assetdata.scenario_01_Assets[8].feed9_medium_composition[8].unit)

    cy.Add_components(11, 800,
      Assetdata.scenario_01_Assets[8].feed9_medium_composition[9].name,
      Assetdata.scenario_01_Assets[8].feed9_medium_composition[9].llimit,
      Assetdata.scenario_01_Assets[8].feed9_medium_composition[9].hlimit,
      Assetdata.scenario_01_Assets[8].feed9_medium_composition[9].unit)
    cy.Add_components(12, 1500,
      Assetdata.scenario_01_Assets[8].feed9_medium_composition[10].name,
      Assetdata.scenario_01_Assets[8].feed9_medium_composition[10].llimit,
      Assetdata.scenario_01_Assets[8].feed9_medium_composition[10].hlimit,
      Assetdata.scenario_01_Assets[8].feed9_medium_composition[10].unit)


    cy.Add_components(13, 1200,
      Assetdata.scenario_01_Assets[8].feed9_medium_composition[11].name,
      Assetdata.scenario_01_Assets[8].feed9_medium_composition[11].llimit,
      Assetdata.scenario_01_Assets[8].feed9_medium_composition[11].hlimit,
      Assetdata.scenario_01_Assets[8].feed9_medium_composition[11].unit)

    cy.Add_components(14, 1400,
      Assetdata.scenario_01_Assets[8].feed9_medium_composition[12].name,
      Assetdata.scenario_01_Assets[8].feed9_medium_composition[12].llimit,
      Assetdata.scenario_01_Assets[8].feed9_medium_composition[12].hlimit,
      Assetdata.scenario_01_Assets[8].feed9_medium_composition[12].unit)
    cy.Add_components(15, 500,
      Assetdata.scenario_01_Assets[8].feed9_medium_composition[13].name,
      Assetdata.scenario_01_Assets[8].feed9_medium_composition[13].llimit,
      Assetdata.scenario_01_Assets[8].feed9_medium_composition[13].hlimit,
      Assetdata.scenario_01_Assets[8].feed9_medium_composition[13].unit)
    cy.Add_components(16, 1100,
      Assetdata.scenario_01_Assets[8].feed9_medium_composition[14].name,
      Assetdata.scenario_01_Assets[8].feed9_medium_composition[14].llimit,
      Assetdata.scenario_01_Assets[8].feed9_medium_composition[14].hlimit,
      Assetdata.scenario_01_Assets[8].feed9_medium_composition[14].unit)

    cy.Add_components(17, 400,
      Assetdata.scenario_01_Assets[8].feed9_medium_composition[15].name,
      Assetdata.scenario_01_Assets[8].feed9_medium_composition[15].llimit,
      Assetdata.scenario_01_Assets[8].feed9_medium_composition[15].hlimit,
      Assetdata.scenario_01_Assets[8].feed9_medium_composition[15].unit)

    cy.Add_components(18, 800,
      Assetdata.scenario_01_Assets[8].feed9_medium_composition[16].name,
      Assetdata.scenario_01_Assets[8].feed9_medium_composition[16].llimit,
      Assetdata.scenario_01_Assets[8].feed9_medium_composition[16].hlimit,
      Assetdata.scenario_01_Assets[8].feed9_medium_composition[16].unit)

    cy.Add_components(19, 800,
      Assetdata.scenario_01_Assets[8].feed9_medium_composition[17].name,
      Assetdata.scenario_01_Assets[8].feed9_medium_composition[17].llimit,
      Assetdata.scenario_01_Assets[8].feed9_medium_composition[17].hlimit,
      Assetdata.scenario_01_Assets[8].feed9_medium_composition[17].unit)

    cy.Add_components(20, 200,
      Assetdata.scenario_01_Assets[8].feed9_medium_composition[18].name,
      Assetdata.scenario_01_Assets[8].feed9_medium_composition[18].llimit,
      Assetdata.scenario_01_Assets[8].feed9_medium_composition[18].hlimit,
      Assetdata.scenario_01_Assets[8].feed9_medium_composition[18].unit)
    cy.Add_components(21, 500,
      Assetdata.scenario_01_Assets[8].feed9_medium_composition[19].name,
      Assetdata.scenario_01_Assets[8].feed9_medium_composition[19].llimit,
      Assetdata.scenario_01_Assets[8].feed9_medium_composition[19].hlimit,
      Assetdata.scenario_01_Assets[8].feed9_medium_composition[19].unit)

    addMediumPage.AssetSavetBtn().click()
    cy.wait(3000)
    addMediumPage.getToastMsg().should('be.visible');
    cy.wait(2000) 
  });

  it('Addition of scenario_01 Antifoam', () => {

    addMediumPage.getAddMediumBtn().click(); // Click to open the add medium form
    cy.wait(2000)

    addMediumPage.getAddMediumTitle().should('be.visible');
    cy.wait(2000)
    addMediumPage.getAddMediumName().type(Assetdata.scenario_01_Assets[9].Antifoam_medium_name);
    cy.wait(2000)
    addMediumPage.getAddMediumTypeDropdown().click();
    cy.wait(2000)
    addMediumPage.getSelectedMediumType3().click();
    cy.wait(2000)
    addMediumPage.getAddMediumDesc().type(Assetdata.scenario_01_Assets[9].Antifoam_Description);
    cy.wait(2000)

    cy.Add_components(2, 1100,
      Assetdata.scenario_01_Assets[9].Antifoam_medium_composition[0].name,
      Assetdata.scenario_01_Assets[9].Antifoam_medium_composition[0].llimit,
      Assetdata.scenario_01_Assets[9].Antifoam_medium_composition[0].hlimit,
      Assetdata.scenario_01_Assets[9].Antifoam_medium_composition[0].unit)

    addMediumPage.AssetSavetBtn().click()
    cy.wait(3000)
    addMediumPage.getToastMsg().should('be.visible');
    cy.wait(2000) 
  });
  it('Addition of scenario_01 Base', () => {

    addMediumPage.getAddMediumBtn().click(); // Click to open the add medium form
    cy.wait(2000)

    addMediumPage.getAddMediumTitle().should('be.visible');
    cy.wait(2000)
    addMediumPage.getAddMediumName().type(Assetdata.scenario_01_Assets[10].Base_medium_name);
    cy.wait(2000)
    addMediumPage.getAddMediumTypeDropdown().click();
    cy.wait(2000)
    addMediumPage.getSelectedMediumType2().click();
    cy.wait(2000)
    addMediumPage.getAddMediumDesc().type(Assetdata.scenario_01_Assets[10].Base_Description);
    cy.wait(2000)

    cy.Add_components(2, 1100,
      Assetdata.scenario_01_Assets[10].Base_medium_composition[0].name,
      Assetdata.scenario_01_Assets[10].Base_medium_composition[0].llimit,
      Assetdata.scenario_01_Assets[10].Base_medium_composition[0].hlimit,
      Assetdata.scenario_01_Assets[10].Base_medium_composition[0].unit)

    addMediumPage.AssetSavetBtn().click()
    cy.wait(3000)
    addMediumPage.getToastMsg().should('be.visible');
    cy.wait(2000) 
  });
})