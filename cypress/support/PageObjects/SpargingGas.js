class SpargingGas {

    // Get the Add Sparging gas info button element
    getAddSGBtn() {
        return cy.get("p-button[ptooltip='Add Sparging Gas Info']");
      }

    //Get the sparging gas input name field
    getSGname(){
        return cy.get("app-assets-add-sparging-gases-form input[id='name']");
      }
    
    //Get the sparging gas description element
    getSGDes() {
        return cy.get("app-assets-add-sparging-gases-form textarea[id = 'description']");
     }

    // Get the Add sparging gas "Add" button
    getAddSGCompBtn() {
        return cy.xpath("//app-assets-add-sparging-gases-form//div//p-button[2]//button[contains(text(),'Add')]");
    }

    // Get the Composition Species DropDown in the grid (second row, first cell)
    getAddSGCompSpeciesDropDown(compcount) {
        return cy.xpath("//app-assets-add-sparging-gases-form//div[contains(@class,'composition')]//div[@aria-rowindex=" + compcount + "]//div[contains(@role,'gridcell')][1]");
    }

    // Get the Composition Low Limit (second row, second cell)
    getAddSGCompLlimit(compcount) {
        return cy.xpath("//app-assets-add-sparging-gases-form//div[contains(@class,'composition')]//div[@aria-rowindex=" + compcount + "]//div[contains(@role,'gridcell')][2]");
    }

    // Get the Composition High Limit (second row, third cell)
    getAddSGCompHlimit(compcount) {
        return cy.xpath("//app-assets-add-sparging-gases-form//div[contains(@class,'composition')]//div[@aria-rowindex=" + compcount + "]//div[contains(@role,'gridcell')][3]");
    }

    // Get the Composition Unit (second row, fourth cell)
    getAddSGCompUnit(compcount) {
        return cy.xpath("//app-assets-add-sparging-gases-form//div[contains(@class,'composition')]//div[@aria-rowindex=" + compcount + "]//div[contains(@role,'gridcell')][4]");
    }

    // Get the Composition Error (second row, fifth cell)
    getAddSGCompError(compcount) {
        return cy.xpath("//app-assets-add-sparging-gases-form//div[contains(@class,'composition')]//div[@aria-rowindex=" + compcount + "]//div[contains(@role,'gridcell')][5]");
    }

    //Get the save button elecment of sparging gas page
    getSGSaveBtn() {
        return cy.xpath("//app-assets-add-sparging-gases-form//div//p-button[2]// button[contains(text(),' Save ')]");
     }
}

export default SpargingGas