class DesignSpec {

    //Get Digital twin landing page
    getDTList() {
        return cy.get("a[class*='landing-page-routerlink'][href*='/usp-dt']");
  }

    //Getdigital twin header name
    getDTheader() {
        return cy.xpath("//app-usp-usp-list//h1[contains(text(),'Digital Twin')]");
  }

    //Get digital twin grid name element
    getDTGridName() {
        return cy.xpath("//app-usp-usp-list//div[@class='ag-header-cell-label']//span[contains(text(),'Name')]");
  }

    //Get digital twin grid description element
    getDTGridDes() {
        return cy.xpath("//app-usp-usp-list//div[@class='ag-header-cell-label']//span[contains(text(),'Description')]");
  }

    //Get digital twin grid no of reactors element
    getDTGridRea() {
        return cy.xpath("//app-usp-usp-list//div[@class='ag-header-cell-label']//span[contains(text(),'No of Reactors')]");
  }

    //Get digital twin grid status element
    getDTGridStatus() {
        return cy.xpath("//app-usp-usp-list//div[@class='ag-header-cell-label']//span[contains(text(),'Status')]");
  }

    //Get digital twin grid actions element
    getDTGridActions() {
        return cy.xpath("//app-usp-usp-list//div[@class='ag-header-cell-label']//span[contains(text(),'Actions')]");
  }

    //Get digital twin grid actions element
    getDTGridActions() {
        return cy.xpath("//app-usp-usp-list//div[@class='ag-header-cell-label']//span[contains(text(),'Actions')]");
  }   

    //Get Add digital twin element
    getDTAdd() {
        return cy.xpath("//app-usp-usp-list//p-button[@ptooltip='Add Digital Twin']");
  }

    //Get Add digital twin page header element
    getDTAddHeader() {
        return cy.xpath("//app-usp-create-usp//h3[contains(text(),'Create DT for Upstream Proces')]");
  }

    //Get Add digital twin page name element
    getDTName() {
        return cy.xpath("//app-usp-create-usp//input[@formcontrolname = 'upstream_process_name']");
  }

    //Get Add digital twin page description element
    getDTDes() {
        return cy.xpath("//app-usp-create-usp//textarea[@formcontrolname = 'upstream_process_notes']");
  }

    //Get Add digital twin page create element
    getDTcreate() {
        return cy.xpath("//app-usp-create-usp//span[contains(text(),'Create')]");
  }








    }
export default DesignSpec