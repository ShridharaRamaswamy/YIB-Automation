class AddMediumPage {

    // Get the Add Medium button element
    getAddMediumBtn() {
        return cy.get("p-button[ptooltip='Add Medium Info']");
    }

    // Get the Add Medium title element
    getAddMediumTitle() {
        return cy.get("p-dialog[class*='addmedium-dialog'] div h3");
    }

    // Get the Add Medium Name input field
    getAddMediumName() {
        return cy.get("app-assets-add-mediums-form input[id='name']");
    }

    // Get the Medium Type dropdown trigger
    getAddMediumTypeDropdown() {
        return cy.get("app-assets-add-mediums-form p-dropdown[optionlabel='medium_type_name'] div[aria-label='dropdown trigger']");
    }

    // Select a specific Medium Type (liquid_feed)
    getSelectedMediumType() {
        return cy.get("app-assets-add-mediums-form li[aria-label='liquid_feed']");
    }

    getSelectedMediumType1() {
        return cy.get("app-assets-add-mediums-form li[aria-label='inoculum']");
    }
    getSelectedMediumType2() {
        return cy.get("app-assets-add-mediums-form li[aria-label='base']");
    }
    getSelectedMediumType3() {
        return cy.get("app-assets-add-mediums-form li[aria-label='antifoam']");
    }
    // Get the Add Medium Description textarea
    getAddMediumDesc() {
        return cy.get("app-assets-add-mediums-form textarea[id='description']");
    }

    // Get the Add Medium "Add" button
    getAddMediumCompBtn() {
        return cy.xpath("//app-assets-add-mediums-form//div//p-button[2]//button[contains(text(),'Add')]");
    }

    // Get the Composition Grid Components header
    getAddMediumCompGridComponents() {
        return cy.xpath("//app-assets-add-mediums-form//div[contains(@class,'composition')]//div[@class='ag-header-cell-label']//span[contains(text(),'Components')]");
    }

    // Get the Composition Grid Low Limit header
    getAddMediumCompGridLlimit() {
        return cy.xpath("//app-assets-add-mediums-form//div[contains(@class,'composition')]//div[@class='ag-header-cell-label']//span[contains(text(),'Low Limit')]");
    }

    // Get the Composition Grid High Limit header
    getAddMediumCompGridHlimit() {
        return cy.xpath("//app-assets-add-mediums-form//div[contains(@class,'composition')]//div[@class='ag-header-cell-label']//span[contains(text(),'High Limit')]");
    }

    // Get the Composition Grid Units header
    getAddMediumCompGridUnits() {
        return cy.xpath("//app-assets-add-mediums-form//div[contains(@class,'composition')]//div[@class='ag-header-cell-label']//span[contains(text(),'Units')]");
    }

    // Get the Composition Grid Error Model header
    getAddMediumCompGridError() {
        return cy.xpath("//app-assets-add-mediums-form//div[contains(@class,'composition')]//div[@class='ag-header-cell-label']//span[contains(text(),'Error Model')]");
    }

    // Get the Composition Species DropDown in the grid (second row, first cell)
    getAddMediumCompSpeciesDropDown(compcount) {
        return cy.xpath("//app-assets-add-mediums-form//div[contains(@class,'composition')]//div[@aria-rowindex=" + compcount + "]//div[contains(@role,'gridcell')][1]");
    }

    // Get the Composition Low Limit (second row, second cell)
    getAddMediumCompLlimit(compcount) {
        return cy.xpath("//app-assets-add-mediums-form//div[contains(@class,'composition')]//div[@aria-rowindex=" + compcount + "]//div[contains(@role,'gridcell')][2]");
    }

    // Get the Composition High Limit (second row, third cell)
    getAddMediumCompHlimit(compcount) {
        return cy.xpath("//app-assets-add-mediums-form//div[contains(@class,'composition')]//div[@aria-rowindex=" + compcount + "]//div[contains(@role,'gridcell')][3]");
    }

    // Get the Composition Unit (second row, fourth cell)
    getAddMediumCompUnit(compcount) {
        return cy.xpath("//app-assets-add-mediums-form//div[contains(@class,'composition')]//div[@aria-rowindex=" + compcount + "]//div[contains(@role,'gridcell')][4]");
    }

    // Get the Composition Error (second row, fifth cell)
    getAddMediumCompError(compcount) {
        return cy.xpath("//app-assets-add-mediums-form//div[contains(@class,'composition')]//div[@aria-rowindex=" + compcount + "]//div[contains(@role,'gridcell')][5]");
    }

    AssetSavetBtn() {
        return cy.get("app-assets-assets-shell button:contains('Save')")
    }

     //get error message element
     getErrorMsg(){
        return cy.xpath("//app-assets-add-mediums-form//form//div[1]//div[1]//div//small[contains(text(),'Max 120 characters allowed.')]");
     }

    //get toast message element
    getToastMsg(){
       return cy.xpath("//yib-layout-toast//p-toast//div//p-toastitem//div//div//p[contains(text(),' Medium Information Added Successfully')]")
    }

     //get cancel button element
    getcancelButton(){
     return cy.xpath("//app-assets-add-mediums-form//form//div[2]//p-button[1]//button//span[contains(text(),'Cancel')]");
    }
}

export default AddMediumPage;
