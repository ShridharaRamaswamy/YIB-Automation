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
        return cy.xpath("//app-assets-add-reactor-form//div[contains(@class,'reactor-info')]//div[@aria-rowindex='2']//div[contains(@role,'gridcell')][1]");
        //return cy.xpath("//app-assets-add-reactor-form//div[contains(@class,'composition')]//div[@aria-rowindex=" + compcount + "]//div[contains(@role,'gridcell')][1]");
    }   


    // Get the inlet Low Limit (second row, second cell)
    getAddInletLlimit(compcount) {
        //return cy.xpath("//app-assets-add-reactor-form//div[contains(@class,'reactor-info')]//div[@aria-rowindex='2']//div[contains(@role,'gridcell')][2]");
        return cy.xpath("//app-assets-add-reactor-form//div[contains(@class,'reactor-info')]//div[@aria-rowindex=" + compcount + "]//div[contains(@role,'gridcell')][2]");
       //return cy.xpath("//app-assets-add-reactor-form//div[contains(@class,'composition')]//div[@aria-rowindex=" + compcount + "]//div[contains(@role,'gridcell')][2]");
      }

    // Get the inlet High Limit (second row, third cell)
    getAddInletHlimit(compcount) {
        //return cy.xpath("//app-assets-add-reactor-form//div[contains(@class,'reactor-info')]//div[@aria-rowindex='2']//div[contains(@role,'gridcell')][3]");
        return cy.xpath("//app-assets-add-reactor-form//div[contains(@class,'reactor-info')]//div[@aria-rowindex=" + compcount + "]//div[contains(@role,'gridcell')][3]");
    }

    // Get the inlet Unit (second row, fourth cell)
    getAddInletUnit(compcount) {
        //return cy.xpath("//app-assets-add-reactor-form//div[contains(@class,'reactor-info')]//div[@aria-rowindex='2']//div[contains(@role,'gridcell')][4]");
        return cy.xpath("//app-assets-add-reactor-form//div[contains(@class,'reactor-info')]//div[@aria-rowindex=" + compcount + "]//div[contains(@role,'gridcell')][4]");
    }

    // Get the inlet Unit selection
    getAddInletUnit01() {
        return cy.xpath("//app-assets-add-reactor-form//div[contains(@class,'ag-theme-quartz ag-popup')]//div[2][@aria-label='Rich Select Field']//div[1][@aria-posinset='1']//span[contains(text(),'L')]");
    }

    // // Get the inlet error model element (second row, fifth cell)
    // getAddInletError(compcount) {
    //     return cy.xpath("//app-assets-add-reactor-form//div[contains(@class,'reactor-info')]//div[@aria-rowindex=" + compcount + "]//div[contains(@role,'gridcell')][5]");
    // }

    //Get the outlets dropdown element
    getreactoroutlets() {
        return cy.xpath("//h4[contains(text(),'Outlets')]")
      }

    // Get the save button of add reactor page
    getreactorSavetBtn() {
    return cy.xpath("//app-assets-add-reactor-form//div//p-button[2]// button[contains(text(),' Save ')]")
  }



// // Reactor Inlet Grid Headers
// const reactorInletGridName = () => cy.xpath("//app-assets-reactors-inlets//div[@class='ag-header-cell-label']//span[contains(text(),'Name')]");
// const reactorInletGridLlimit = () => cy.xpath("//app-assets-reactors-inlets//div[@class='ag-header-cell-label']//span[contains(text(),'Low Limit')]");
// const reactorInletGridHlimit = () => cy.xpath("//app-assets-reactors-inlets//div[@class='ag-header-cell-label']//span[contains(text(),'High Limit')]");
// const reactorInletGridUnit = () => cy.xpath("//app-assets-reactors-inlets//div[@class='ag-header-cell-label']//span[contains(text(),'Unit')]");
// const reactorInletGridErr = () => cy.xpath("//app-assets-reactors-inlets//div[@class='ag-header-cell-label']//span[contains(text(),'Error Model')]");

// // Reactor Outlet Grid Tab
// const reactorOutletGridTab = () => cy.get("app-assets-reactors-shell li a[data-pc-index='1']");

// // Reactor Inlet Grid Tab
// const reactorInletGridTab = () => cy.get("app-assets-reactors-shell li a[data-pc-index='0']");

// // Reactor Outlet Grid Headers
// const reactorOutletGridName = () => cy.xpath("//app-assets-reactors-outlets//div[@class='ag-header-cell-label']//span[contains(text(),'Name')]");
// const reactorOutletGridLlimit = () => cy.xpath("//app-assets-reactors-outlets//div[@class='ag-header-cell-label']//span[contains(text(),'Low Limit')]");
// const reactorOutletGridHlimit = () => cy.xpath("//app-assets-reactors-outlets//div[@class='ag-header-cell-label']//span[contains(text(),'High Limit')]");
// const reactorOutletGridUnit = () => cy.xpath("//app-assets-reactors-outlets//div[@class='ag-header-cell-label']//span[contains(text(),'Unit')]");
// const reactorOutletGridErr = () => cy.xpath("//app-assets-reactors-outlets//div[@class='ag-header-cell-label']//span[contains(text(),'Error Model')]");

} 
export default ReactorPage