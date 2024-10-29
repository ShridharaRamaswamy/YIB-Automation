class CellPage {

    // Get the Add Cells info button element
    getAddcellsBtn() {
        return cy.get("p-button[ptooltip='Add Cell Info']");
      }
    //Get the Cells input name field
    getCellname(){
        return cy.get("app-assets-add-cells-form input[id='name']");
      }
     //Get the host cell-organism dropdown element
     getCellDropdown(){
        return cy.xpath("//app-assets-add-cells-form//p-dropdown//div[@role='button']");
     } 

     //Get the workshop host cell line organism element
     getCellWSHostcell() {
        return cy.xpath("//li[contains(text(),' host_cell_line_workshop - organism_workshop ')]")
     }

     //Get the cells description element
     getCellsDes() {
        return cy.get("app-assets-add-cells-form textarea[id = 'description']");
     }

     //Get the cells product molecule & radio button element
     getCellsPM() {
        return cy.xpath("//span[contains(text(),'(Aut)Product molecules')]//parent::div[@class='ag-cell-wrapper']/div");
     }

     //Get the Add MNM model button element
     getCellsAddMNM() {
        return cy.xpath("//app-assets-add-cells-form//button/span[contains(text(),'add')]");
     }

     //Get theMNM model drop down element
     getCellsMNMName() {
        return cy.xpath("//div[contains(text(),'Select from DB')]");
     }

     //Get the workshop cell MNM model from the dropdown
     getCellsMNMmodelname() {
        return cy.xpath("//div[contains(text(),'metabolic_network_model_workshop')]//ancestor::div[@class='ag-rich-select-row']");
     }

     //Get the save button elecment of cells page
     getCellsSaveBtn() {
        return cy.xpath("//app-assets-add-cells-form//div//p-button[2]// button[contains(text(),' Save ')]");
     }

     //Get the Scenario host cell element
     getCellSceHostcell() {
        return cy.xpath("//li[contains(text(),' K-1 - CHO ')]")
     }
     
     //Get the Scenario 01 cell MNM model from the dropdown
     getCellsMNMmodelnameSce() {
        return cy.xpath("//div[contains(text(),'model_1')]//ancestor::div[@class='ag-rich-select-row']");
     }




     
}
export default CellPage