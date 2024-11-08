class RetentionPage {

    // Get the Add retention info button element
    getAddRetentionBtn() {
        return cy.get("p-button[ptooltip='Add Retention Info']");
      }

    //Get the retention input name field
    getretentionname(){
        return cy.xpath("//app-assets-add-retention-system-form//input[@placeholder='Retention System Name']");
      }
      
    //Get the retention description field
    getRetDesfield(){
        return cy.get("app-assets-add-retention-system-form textarea[id='description']");
      }

    // Get the Add retention "Add" button
    getAddretentionspeciesBtn() {
        return cy.xpath("//app-assets-add-retention-system-form//div[2]//p-button/button[contains(text(),'Add')]");
      }

    // Get the retention Species DropDown in the grid (second row, first cell)
    getAddretentionDropDown(compcount) {
        return cy.xpath("//app-assets-add-retention-system-form//div[contains(@class,'composition')]//div[@aria-rowindex=" + compcount + "]//div[contains(@role,'gridcell')][1]");
      }

    // Get the retention Low Limit (second row, second cell)
    getAddRetentionLlimit(compcount) {
       return cy.xpath("//app-assets-add-retention-system-form//div[contains(@class,'composition')]//div[@aria-rowindex=" + compcount + "]//div[contains(@role,'gridcell')][2]");
      }

    // Get the retention High Limit (second row, third cell)
    getAddretentionHlimit(compcount) {
      return cy.xpath("//app-assets-add-retention-system-form//div[contains(@class,'composition')]//div[@aria-rowindex=" + compcount + "]//div[contains(@role,'gridcell')][3]");
     }

    // Get the retention Unit (second row, fourth cell)
    getAddretentionUnit(compcount) {
      return cy.xpath("//app-assets-add-retention-system-form//div[contains(@class,'composition')]//div[@aria-rowindex=" + compcount + "]//div[contains(@role,'gridcell')][4]");
      }

    //Get the save button in retention page
    getSaveBtn(){
      return cy.xpath("//app-assets-add-retention-system-form//div//p-button[2]// button[contains(text(),'Save')]");
    }

    
    //get error message element
    getErrorMsg(){
      return cy.xpath("//app-assets-add-retention-system-form//form//div[1]//div[1]//div//small[contains(text(),'Max 120 characters allowed.')]");
   }

   //get toast message element
   getToastMsg(){
      return cy.xpath("//yib-layout-toast//p-toast//div//p-toastitem//div//div//p[contains(text(),'Successfully added')]")
   }

   //get cancel button element
   getcancelButton(){
    return cy.xpath("//app-assets-add-retention-system-form//div[3]//p-button[1]//button//span[contains(text(),'Cancel')]");
}


      
}
export default RetentionPage