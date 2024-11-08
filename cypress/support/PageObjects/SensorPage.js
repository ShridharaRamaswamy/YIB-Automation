class SensorPage {

    // Get the Add Sensors info button element
    getAddSenBtn() {
        return cy.get("p-button[ptooltip='Add Sensor Info']");
      }

    // Get the Sensor name field element
    getSenName() {
        return cy.get("app-assets-sensor-form input[id='name']");
      }

    //Get the Sensor description element
     getSenDes() {
        return cy.get("app-assets-sensor-form textarea[id = 'description']");
     }

    // Get the Add Sensor Entities "Add" button
    getAddSenEntBtn() {
        return cy.xpath("//app-assets-sensor-form//div//h4//button[contains(text(),'Add')]");
    }

    // Get the Sensed Entities Grid Sensed Entity header
    getSensedEntity() {
        return cy.xpath("//app-assets-sensor-form//div[@class='ag-header-cell-label']//span[contains(text(),'Sensed Entity')]");
    }

    // Get the Sensed Entities Grid Low Limit header
    getSenGridLlimit() {
        return cy.xpath("//app-assets-sensor-form//div[@class='ag-header-cell-label']//span[contains(text(),'Low Limit')]");
    }

    // Get the Sensed Entities Grid High Limit header
    getSenGridHlimit() {
        return cy.xpath("//app-assets-sensor-form//div[@class='ag-header-cell-label']//span[contains(text(),'High Limit')]");
    }

    // Get the Sensed Entities Grid Units header
    getSenGridUnits() {
        return cy.xpath("//app-assets-sensor-form//div[@class='ag-header-cell-label']//span[contains(text(),'Unit')]");
    }

    // Get the Sensed Entities Grid Error Model header
    getSenGridError() {
        return cy.xpath("//app-assets-sensor-form//div[@class='ag-header-cell-label']//span[contains(text(),'Error Model')]");
    }

    // Get the sensed entities DropDown in the grid (second row, first cell)
    getSenEntDropDown(compcount) {
        return cy.xpath("//app-assets-sensor-form//div[@aria-rowindex=" + compcount + "]//div[contains(@role,'gridcell')][1]");
    }

    // Get the Composition Low Limit (second row, second cell)
    getAddSenLlimit(compcount) {
        return cy.xpath("//app-assets-sensor-form//div[contains(@class,'composition')]//div[@aria-rowindex=" + compcount + "]//div[contains(@role,'gridcell')][2]");
    }

    // Get the Composition High Limit (second row, third cell)
    getAddSenCompHlimit(compcount) {
        return cy.xpath("//app-assets-sensor-form//div[contains(@class,'composition')]//div[@aria-rowindex=" + compcount + "]//div[contains(@role,'gridcell')][3]");
    }

    // Get the Composition Unit (second row, fourth cell)
    getAddSenCompUnit(compcount) {
        return cy.xpath("//app-assets-sensor-form//div[contains(@class,'composition')]//div[@aria-rowindex=" + compcount + "]//div[contains(@role,'gridcell')][4]");
    }

    // Get the Composition Error (second row, fifth cell)
    getAddSenCompError(compcount) {
        return cy.xpath("//app-assets-sensor-form//div[contains(@class,'composition')]//div[@aria-rowindex=" + compcount + "]//div[contains(@role,'gridcell')][5]");
    }

    //Get the save button elecment of cells page
    getSenSaveBtn() {
        return cy.xpath("//app-assets-sensor-form//div//p-button[2]// button[contains(text(),' Save ')]");
     }

     //get error message element
    getErrorMsg(){
        return cy.xpath("//app-assets-sensor-form//form//div[1]//div[1]//div//small[contains(text(),'Max 120 characters allowed.')]");
     }
  
     //get toast message element
     getToastMsg(){
        return cy.xpath("//yib-layout-toast//p-toast//div//p-toastitem//div//div//p[contains(text(),' Successfully added Sensor')]")
     }
  
     //get cancel button element
     getcancelButton(){
      return cy.xpath("//app-assets-sensor-form//div[2]//div[2]//p-button[1]//button//span[contains(text(),'Cancel')]");
  }
}

export default SensorPage