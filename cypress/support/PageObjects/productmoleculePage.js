class ProductmoleculePage{

    // Get the Add product molecule button element
    getAddpmBtn() {
      return cy.get("p-button[ptooltip='Add Molecule Info']");
    }
    
    //Get the Product Molecule input name field
    getPMname(){
      return cy.get("app-assets-add-product-molecule input[id='name']");
    }
    
    //Get the Description input field
    getPMdes(){
      return cy.get("app-assets-add-product-molecule textarea[id='description']");
    }

    //Get the Add component button
    getAddPMcompBtn(){
      return cy.xpath("//app-assets-add-product-molecule//div//p-button[1]//button[contains(text(),'Add')]");
    }

    // Get the Composition Species DropDown in the grid (second row, first cell)
    getAddPMCompSpeciesDropDown(compcount) {
      return cy.xpath("//app-assets-add-product-molecule//div[contains(@class,'composition')]//div[@aria-rowindex=" + compcount + "]//div[contains(@role,'gridcell')][1]");
  }
    // Get the Composition Limit (second row, third cell)
    getAddPMComplimit(compcount) {
      return cy.xpath("//app-assets-add-product-molecule//div[contains(@class,'composition')]//div[@aria-rowindex=" + compcount + "]//div[contains(@role,'gridcell')][2]");
  }
    // Get the Composition Unit (second row, fourth cell)
    getAddPMCompUnit(compcount) {
      return cy.xpath("//app-assets-add-product-molecule//div[contains(@class,'composition')]//div[@aria-rowindex=" + compcount + "]//div[contains(@role,'gridcell')][3]");
  }

    //Get the save button in product molecule page
    getSaveBtn(){
      return cy.xpath("//app-assets-add-product-molecule//div//p-button[2]// button[contains(text(),'Save')]");
    }

}
export default ProductmoleculePage;