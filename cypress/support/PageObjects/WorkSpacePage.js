class WorkSpacePage {
  
    // Get the Side Navigation Workspace element
    getSideNavWSpace() {
      return cy.get("yib-layout-sidenav a[title='Workspace']");
    }
  
    // Get the Workspace Name Filter element
    getWspaceNameFltr() {
      return cy.xpath("//app-workspace-shell//div[@class='ag-header-cell-label']//span[contains(text(),'Name')]/parent::div/parent::div/span");
    }
  
    // Get the Filter Search Box element
    getFilterSearBox() {
      return cy.get("input[aria-label='Search filter values']");
    }
  
    // Get the Filter Apply Button element
    getFilterApplyBtn() {
      return cy.get("button[type='submit']");
    }
  
    // Get the Select Workspace element
    getSelectWspace() {
      return cy.xpath("//div[contains(@class,'ag-row-first')]//div[@col-id='workspace_name']/parent::div");
    }
    
    getWsLandingAssetList() {
        return cy.get("a[class*='landing-page-routerlink'][href*='/assets']");
      }
    // Get the Medium List element
  getMediumList() {
    return cy.get("app-assets-assets-landing-page a[href*='medium']");
  }

  // Get Medium Grid Name element
  getMediumGridName() {
    return cy.xpath("//app-assets-medium//div[@class='ag-header-cell-label']//span[contains(text(),'Name')]");
  }

  // Get Medium Grid Type element
  getMediumGridType() {
    return cy.xpath("//app-assets-medium//div[@class='ag-header-cell-label']//span[contains(text(),'Type')]");
  }

  // Get Medium Grid Notes element
  getMediumGridNotes() {
    return cy.xpath("//app-assets-medium//div[@class='ag-header-cell-label']//span[contains(text(),'Notes')]");
  }

  // Get Medium Grid Actions element
  getMediumGridActions() {
    return cy.xpath("//app-assets-medium//div[@class='ag-header-cell-label']//span[contains(text(),'Actions')]");
  }

  // Get Composition Components element
  getCompComponents() {
    return cy.xpath("//app-assets-compositions-detail-cell-renderer//div[@class='ag-header-cell-label']//span[contains(text(),'Components')]");
  }

  // Get Composition Low Limit element
  getCompLlimit() {
    return cy.xpath("//app-assets-compositions-detail-cell-renderer//div[@class='ag-header-cell-label']//span[contains(text(),'Low Limit')]");
  }

  // Get Composition High Limit element
  getCompHlimit() {
    return cy.xpath("//app-assets-compositions-detail-cell-renderer//div[@class='ag-header-cell-label']//span[contains(text(),'High Limit')]");
  }

  // Get Composition Unit element
  getCompUnit() {
    return cy.xpath("//app-assets-compositions-detail-cell-renderer//div[@class='ag-header-cell-label']//span[contains(text(),'Unit')]");
  }

  // Get Composition Error Model element
  getCompErr() {
    return cy.xpath("//app-assets-compositions-detail-cell-renderer//div[@class='ag-header-cell-label']//span[contains(text(),'Error Model')]");
  }
    // Get the Grid Expand/Contract button element
    getPmGridExpand() {
        return cy.xpath("//span[@ref='eContracted']");
        }
  }
  
  export default WorkSpacePage;
  