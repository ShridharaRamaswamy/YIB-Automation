class ReactorPage {

    // Get the reactor add info button element
    getreactorAddBtn() {
        return cy.get("p-button[ptooltip='Add Reactors Info']");
      }

    //Get the controller input name field
    getreactornamefield(){
        return cy.get("app-assets-add-reactor-form input[id='reactor_name']");
      }

    //Get the controller description field
    getreactorDesfield(){
        return cy.get("app-assets-add-reactor-form textarea[id='description']");
      }

    //Get the Geometric properties dropdown element
    getreactorGeo() {
        return cy.xpath("//h4[contains(text(),' Geometric Properties ')]");
      }

    //Get minimum vessel volume 
    getreactorMinVessel(){
        return cy.xpath("//p-inputnumber[@id='minimal_working_volume_value']");
      }

    //Get maximum vessel volume 
    getreactorMaxVessel(){
        return cy.xpath("//p-inputnumber[@id='maximal_working_volume_value']");
      }
    
    //Get select unit dropdown volume 
    getVesselunitdropdown(){
        return cy.xpath("//div[@class='p-dropdown p-component p-inputwrapper']//span[@aria-label='Select unit']");
      }

    //Get select unit for vessel
    getVesselUnit(){
        return cy.xpath("//li[@aria-label='L']");
      }

    //Get the impeller details dropdown element
    getreactorIMP() {
        return cy.xpath("//h4[contains(text(),'Impeller Details')]")
      }

    //Get select impeller dropdown element
    getIMPdropdown(){
        return cy.xpath("//span[@aria-label='Select impeller']");
      }

    //Get impeller
    getAddImpeller(){
        return cy.xpath("//li[@aria-label='elephant_ear']");
      }
    
    //Get the inlets dropdown element
    getreactorinlets() {
        return cy.xpath("//h4[contains(text(),'Inlets')]")
      }

    // Get the Add Reactor inlet "Add" button
    getAddreactorInletBtn() {
        return cy.xpath("//app-assets-add-reactor-form//div//p-accordion[1]//p-button/button/span[contains(text(),'add')]");
    }

    // Get the inlet name field element (second row, first cell)
    getAddInletname(compcount) {
        return cy.xpath("//app-assets-add-reactor-form//div[contains(@class,'reactor-info')]//div[@aria-rowindex=" + compcount + "]//div[contains(@role,'gridcell')][1]");
    }   


    // Get the inlet Low Limit (second row, second cell)
    getAddInletLlimit(compcount) {
        return cy.xpath("//app-assets-add-reactor-form//div[contains(@class,'reactor-info')]//div[@aria-rowindex=" + compcount + "]//div[contains(@role,'gridcell')][2]");
      }

    // Get the inlet High Limit (second row, third cell)
    getAddInletHlimit(compcount) {
        return cy.xpath("//app-assets-add-reactor-form//div[contains(@class,'reactor-info')]//div[@aria-rowindex=" + compcount + "]//div[contains(@role,'gridcell')][3]");
    }

    // Get the inlet Unit (second row, fourth cell)
    getAddInletUnit(compcount) {
        return cy.xpath("//app-assets-add-reactor-form//div[contains(@class,'reactor-info')]//div[@aria-rowindex=" + compcount + "]//div[contains(@role,'gridcell')][4]");
    }

    // Get the inlet Unit selection
    getAddInletUnit01() {
        return cy.xpath("//app-assets-add-reactor-form//div[contains(@class,'ag-theme-quartz ag-popup')]//div[2][@aria-label='Rich Select Field']//div[1][@aria-posinset='1']//span[contains(text(),'L')]");
    }

    // Get the inlet notes element (second row, fifth cell)
    getAddInletNotes(compcount) {
        return cy.xpath("//app-assets-add-reactor-form//div[contains(@class,'reactor-info')]//div[@aria-rowindex=" + compcount + "]//div[contains(@role,'gridcell')][5]");
    }

    //Get the outlets dropdown element
    getreactoroutlets() {
        return cy.xpath("//h4[contains(text(),'Outlets')]")
      }

       // Get the Add Reactor outlet "Add" button
    getAddreactorOutletBtn() {
      return cy.xpath("//app-assets-add-reactor-form//div//p-accordion[2]//p-button/button/span[contains(text(),'add')]");
  }

    // Get the outlet name field element (second row, first cell)
    getAddOutletname(compcount) {
      return cy.xpath("//app-assets-add-reactor-form//div[contains(@class,'reactor-info')]//div[@aria-rowindex=" + compcount + "]//div[@role='gridcell' and @col-id='outlet_name'][1]");
  } 

    // Get the save button of add reactor page
    getreactorSavetBtn() {
    return cy.xpath("//app-assets-add-reactor-form//div//p-button[2]// button[contains(text(),' Save ')]")
  }

    // Get the outlet Low Limit (second row, second cell)
    getAddOutletLlimit(compcount) {
      return cy.xpath("//app-assets-add-reactor-form//div[contains(@class,'reactor-info')]//div[@aria-rowindex=" + compcount + "]//div[@role='gridcell' and @col-id='outflux_global_constraint.lower_limit'][1]");
    }

  // Get the outlet High Limit (second row, third cell)
  getAddOutletHlimit(compcount) {
      return cy.xpath("//app-assets-add-reactor-form//div[contains(@class,'reactor-info')]//div[@aria-rowindex=" + compcount + "]//div[@role='gridcell' and @col-id='outflux_global_constraint.upper_limit'][1]");
  }

  // Get the outlet Unit (second row, fourth cell)
  getAddOutletUnit(compcount) {
      return cy.xpath("//app-assets-add-reactor-form//div[contains(@class,'reactor-info')]//div[@aria-rowindex=" + compcount + "]//div[@role='gridcell' and @col-id='outflux_global_constraint.unit'][1]");
  }
 
  //get error message element
getErrorMsg(){
  return cy.xpath("//app-assets-add-reactor-form//form//div[1]//div[1]//div//small[contains(text(),'Max 120 characters allowed.')]");
}

//get toast message element
getToastMsg(){
  return cy.xpath("//yib-layout-toast//p-toast//div//p-toastitem//div//div//p[contains(text(),'Successfully added')]")
}

//get cancel button element
getcancelButton(){
return cy.xpath("//app-assets-add-reactor-form//div[2]//p-button[1]//button//span[contains(text(),'Cancel')]");
}

} 
export default ReactorPage