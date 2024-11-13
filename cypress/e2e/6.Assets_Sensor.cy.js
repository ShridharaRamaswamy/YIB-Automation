/// <reference types="Cypress" />
/// <reference types="cypress-iframe" />
/// <reference types="cypress-xpath" />
import WorkSpacePage from '../support/PageObjects/WorkSpacePage';
import AddMediumPage from '../support/PageObjects/AddMediumPage';
import ProductmoleculePage from '../support/PageObjects/ProductmoleculePage';
import CellPage from '../support/PageObjects/CellPage';
import SensorPage from '../support/PageObjects/SensorPage';

describe('Assets - Sensor', () => {
  const addMediumPage = new AddMediumPage();
  const workspacePage = new WorkSpacePage();
  const productmoleculePage = new ProductmoleculePage();
  const cellPage = new CellPage();
  const sensorPage = new SensorPage();
   
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
    cy.fixture('assets_sensordata.json').then((data) => {
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

  it('should navigate to the Sensor list', () => {

    workspacePage.getSenList().click(); // Navigate to Sensor list
    cy.wait(4000)
  });

  it('Should check the Sensor grid headers', ()=> {

    workspacePage.getSenGridName().should('be.visible');
    workspacePage.getSenGridEnt().should('be.visible');
    workspacePage.getSenGridNotes().should('be.visible');
    workspacePage.getSenGridActions().should('be.visible')

   });

   it('validate sensor name field with more than 120 characters', () => {

    sensorPage.getAddSenBtn().click()
    cy.wait(2000)
    sensorPage.getSenName().type(Assetdata.Workshop_Sensors[4].sensor5_name)
    cy.wait(1000)
    sensorPage.getErrorMsg().should('be.visible');
    cy.wait(1000)
    sensorPage.getcancelButton().click();
     cy.wait(1000)
    
  });

  it('Add workshop temperature sensor',()=> {

    cy.wait(5000)

    sensorPage.getAddSenBtn().click()
    cy.wait(2000)
    sensorPage.getSenName().type(Assetdata.Workshop_Sensors[0].sensor1_name)
    cy.wait(1000)
    sensorPage.getSenDes().type(Assetdata.Workshop_Sensors[0].sensor1_Description)
    cy.wait(1000)

    cy.Add_sensor_components(2,1600,
      Assetdata.Workshop_Sensors[0].sensor1_composition[0].name,
      Assetdata.Workshop_Sensors[0].sensor1_composition[0].llimit,
      Assetdata.Workshop_Sensors[0].sensor1_composition[0].hlimit,
      Assetdata.Workshop_Sensors[0].sensor1_composition[0].unit)

    sensorPage.getSenSaveBtn().click()
    cy.wait(2000)
    
  });
  it('validate the toast message once sensor added successfully' ,()=> {
    
    sensorPage.getToastMsg().should('be.visible');
    cy.wait(2000) 
  });

  it('Add workshop spent media analyzer sensor',()=> {

    sensorPage.getAddSenBtn().click()
    cy.wait(2000)
    sensorPage.getSenName().type(Assetdata.Workshop_Sensors[1].sensor2_name)
    cy.wait(1000)
    sensorPage.getSenDes().type(Assetdata.Workshop_Sensors[1].sensor2_Description)
    cy.wait(1000)

    cy.Add_sensor_components(2,200,
      Assetdata.Workshop_Sensors[1].sensor2_composition[0].name,
      Assetdata.Workshop_Sensors[1].sensor2_composition[0].llimit,
      Assetdata.Workshop_Sensors[1].sensor2_composition[0].hlimit,
      Assetdata.Workshop_Sensors[1].sensor2_composition[0].unit)

    cy.Add_sensor_components(3,175,
      Assetdata.Workshop_Sensors[1].sensor2_composition[1].name,
      Assetdata.Workshop_Sensors[1].sensor2_composition[1].llimit,
      Assetdata.Workshop_Sensors[1].sensor2_composition[1].hlimit,
      Assetdata.Workshop_Sensors[1].sensor2_composition[1].unit)
      
    cy.Add_sensor_components(4,100,
      Assetdata.Workshop_Sensors[1].sensor2_composition[2].name,
      Assetdata.Workshop_Sensors[1].sensor2_composition[2].llimit,
      Assetdata.Workshop_Sensors[1].sensor2_composition[2].hlimit,
      Assetdata.Workshop_Sensors[1].sensor2_composition[2].unit) 

    cy.Add_sensor_components(5,100,
      Assetdata.Workshop_Sensors[1].sensor2_composition[3].name,
      Assetdata.Workshop_Sensors[1].sensor2_composition[3].llimit,
      Assetdata.Workshop_Sensors[1].sensor2_composition[3].hlimit,
      Assetdata.Workshop_Sensors[1].sensor2_composition[3].unit)

      cy.Add_sensor_components(6,0,
        Assetdata.Workshop_Sensors[1].sensor2_composition[4].name,
        Assetdata.Workshop_Sensors[1].sensor2_composition[4].llimit,
        Assetdata.Workshop_Sensors[1].sensor2_composition[4].hlimit,
        Assetdata.Workshop_Sensors[1].sensor2_composition[4].unit)
      


    sensorPage.getSenSaveBtn().click(),
    cy.wait(1000)
    
  });

  it('validate the toast message once sensor added successfully' ,()=> {
    
    sensorPage.getToastMsg().should('be.visible');
    cy.wait(2000) 
  });

  it('Add workshop reactor volume sensor',()=> {

    sensorPage.getAddSenBtn().click()
    cy.wait(2000)
    sensorPage.getSenName().type(Assetdata.Workshop_Sensors[2].sensor3_name)
    cy.wait(1000)
    sensorPage.getSenDes().type(Assetdata.Workshop_Sensors[2].sensor3_Description)
    cy.wait(1000)

    cy.Add_sensor_components(2,0,
      Assetdata.Workshop_Sensors[2].sensor3_composition[0].name,
      Assetdata.Workshop_Sensors[2].sensor3_composition[0].llimit,
      Assetdata.Workshop_Sensors[2].sensor3_composition[0].hlimit,
      Assetdata.Workshop_Sensors[2].sensor3_composition[0].unit)

    sensorPage.getSenSaveBtn().click()
    cy.wait(1000)
    
  });

  it('validate the toast message once sensor added successfully' ,()=> {
    
    sensorPage.getToastMsg().should('be.visible');
    cy.wait(2000) 
  });

  it('Add workshop cell counter sensor',()=> {

    sensorPage.getAddSenBtn().click()
    cy.wait(2000)
    sensorPage.getSenName().type(Assetdata.Workshop_Sensors[3].sensor4_name)
    cy.wait(1000)
    sensorPage.getSenDes().type(Assetdata.Workshop_Sensors[3].sensor4_Description)
    cy.wait(1000)

    cy.Add_sensor_components(2,0,
      Assetdata.Workshop_Sensors[3].sensor4_composition[0].name,
      Assetdata.Workshop_Sensors[3].sensor4_composition[0].llimit,
      Assetdata.Workshop_Sensors[3].sensor4_composition[0].hlimit,
      Assetdata.Workshop_Sensors[3].sensor4_composition[0].unit)

    cy.Add_sensor_components(3,0,
      Assetdata.Workshop_Sensors[3].sensor4_composition[1].name,
      Assetdata.Workshop_Sensors[3].sensor4_composition[1].llimit,
      Assetdata.Workshop_Sensors[3].sensor4_composition[1].hlimit,
      Assetdata.Workshop_Sensors[3].sensor4_composition[1].unit)
        
    cy.Add_sensor_components(4,50,
      Assetdata.Workshop_Sensors[3].sensor4_composition[2].name,
      Assetdata.Workshop_Sensors[3].sensor4_composition[2].llimit,
      Assetdata.Workshop_Sensors[3].sensor4_composition[2].hlimit,
      Assetdata.Workshop_Sensors[3].sensor4_composition[2].unit)

      cy.Add_sensor_components(5,90,
        Assetdata.Workshop_Sensors[3].sensor4_composition[3].name,
        Assetdata.Workshop_Sensors[3].sensor4_composition[3].llimit,
        Assetdata.Workshop_Sensors[3].sensor4_composition[3].hlimit,
        Assetdata.Workshop_Sensors[3].sensor4_composition[3].unit) 

    sensorPage.getSenSaveBtn().click()
    cy.wait(1000)
    
  });

  it('validate the toast message once sensor added successfully' ,()=> {
    
    sensorPage.getToastMsg().should('be.visible');
    cy.wait(2000) 
  });


  

})