class ControllersPage {

    // Get the Add Controller info button element----to be updated
    getAddConBtn() {
        return cy.get("p-button[ptooltip='Add Medium Info']");
      }

    //Get the controller input name field
    getConname(){
        return cy.get("app-assets-add-controller-form input[id='name']");
      }
    
    //Get the controller description element
    getConDes() {
        return cy.xpath("//textarea[@id='notes']");
     }

    //Get the controller type dropdown element
    getConDropdown(){
      return cy.xpath("//app-assets-add-controller-form//p-dropdown[@formcontrolname = 'controller_type']//div[@role='button']");
   }

    //Get the sampling controller type element
    getAddsamplingTypeCon() {
      return cy.xpath("//li//span[contains(text(),'sampling_controller')]")
   }

    //Get the Time profile type element
    getConTimeProfDropdown() {
      return cy.xpath("//app-assets-add-controller-form//p-dropdown[@formcontrolname = 'time_profile_type']//div[@role='button']")
    }

    //Get the daily time profile type element
    getAddtimeprofCon() {
      return cy.xpath("//li//span[contains(text(),'daily')]")
   }

   //Get the control actions parameter element
   getConActionsdropdown() {
    return cy.xpath("//h4[contains(text(),'Control Actions Parameter')]")
 }

  //Get the controller time unit dropdown element
  getConTimeUnitDropdown() {
    return cy.xpath("//app-assets-add-controller-form//p-dropdown[@formcontrolname = 'time_unit']//div[@role='button']")
}
  //Get the Time unit 'h' element from time unit dropdown
  getAddConTimeUnit() {
    return cy.xpath("//li//span[contains(text(),'h')]")
 }

  //Get the Limit unit element
  getConLimitUnitDropdown() {
    return cy.xpath("//app-assets-add-controller-form//p-dropdown[@formcontrolname = 'limit_unit']//div[@role='button']")
  }

  //Get the limit unit 'h' element from time unit dropdown
  getAddConLimitUnit() {
    return cy.xpath("//li//span[contains(text(),'L')]")
 }

 // Get the save button of controller page
 getConSavetBtn() {
  return cy.xpath("//app-assets-add-controller-form//div//p-button[2]// button[contains(text(),' Save ')]")
}

// Get the delete button of controller cultivation grid page
getConDelBtn() {
  return cy.xpath("//app-assets-delete-cell-renderer//p-button//button[@type='button']")
}

// Get the low limit field  grid page element
getConllimit() {
  return cy.xpath("//app-assets-delete-cell-renderer//p-button//button[@type='button']")
}

// Get the controller Low Limit (second row, second cell)
getAddcontrollerLlimit(compcount) {
  return cy.xpath("//app-assets-add-controller-form//div[contains(@class,'grid')]//div[@aria-rowindex=" + compcount + "]//div[contains(@role,'gridcell')][2]");
}

// Get the controller High Limit (second row, third cell)
getAddcontrollerHlimit(compcount) {
  return cy.xpath("//app-assets-add-controller-form//div[contains(@class,'grid')]//div[@aria-rowindex=" + compcount + "]//div[contains(@role,'gridcell')][3]");
}

//get error message element
getErrorMsg(){
  return cy.xpath("//app-assets-add-controller-form//form//div[1]//div[1]//div//small[contains(text(),'Max 120 characters allowed.')]");
}

//get toast message element
getToastMsg(){
  return cy.xpath("//yib-layout-toast//p-toast//div//p-toastitem//div//div//p[contains(text(),'Controller Information Added Successfully')]")
}

//get cancel button element
getcancelButton(){
return cy.xpath("//app-assets-add-controller-form//div[2]//p-button[1]//button//span[contains(text(),'Cancel')]");
}

} 
export default ControllersPage