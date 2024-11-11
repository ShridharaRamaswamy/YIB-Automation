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

  //Get the Product Molecule list
  getPMlist() {
    return cy.get("app-assets-assets-landing-page a[href*='product-molecules']");
  }

  //Get Product molecule grid name element
  getPMGridName() {
    return cy.xpath("//app-assets-product-molecules//div[@class='ag-header-cell-label']//span[contains(text(),'Name')]");
  }

  //Get Product molecule Glycosylation element
  getPMGridGlycosylation() {
    return cy.xpath("//app-assets-product-molecules//div[@class='ag-header-cell-label']//span[contains(text(),'Glycosylation')]");
  }

  //Get Product molecule charge variants element
  getPMGridChargeVariant() {
    return cy.xpath("//app-assets-product-molecules//div[@class='ag-header-cell-label']//span[contains(text(),'Charge Variants')]");
  }

  //Get Product molecule Notes element
  getPMGridNotes() {
    return cy.xpath("//app-assets-product-molecules//div[@class='ag-header-cell-label']//span[contains(text(),'Notes')]");
  }

  //Get Product molecule Grid expand/contract button element
  getPMGridExpand() {
    return cy.xpath("//span[@ref='eContracted']");
  }
  //Get the cells list
  getCellsList() {
    return cy.xpath("//app-assets-assets-landing-page//section//a[contains(text(),'Cells')]");
  }
  //Get Cells grid name element
  getCellsGridName() {
    return cy.xpath("//app-assets-cells//div[@class='ag-header-cell-label']//span[contains(text(),'Name')]");
  }
  //Get Cells grid Organism element
  getCellsGridOrg() {
    return cy.xpath("//app-assets-cells//div[@class='ag-header-cell-label']//span[contains(text(),'Organism')]");
  }
  //Get Cells grid Host Cell Line element
  getCellsGridHostCell() {
    return cy.xpath("//app-assets-cells//div[@class='ag-header-cell-label']//span[contains(text(),'Host Cell Line')]");
  }
  //Get Cells grid Product Molecule element
  getCellsGridPM() {
    return cy.xpath("//app-assets-cells//div[@class='ag-header-cell-label']//span[contains(text(),'Product Molecule')]");
  }
  //Get Cells grid MNM element
  getCellsGridMNM() {
    return cy.xpath("//app-assets-cells//div[@class='ag-header-cell-label']//span[contains(text(),'MNM')]");
  }
  //Get Cells grid Notes element
  getCellsGridNotes() {
    return cy.xpath("//app-assets-cells//div[@class='ag-header-cell-label']//span[contains(text(),'Notes')]");
  }
  //Get Cells grid Actions element
  getCellsGridActions() {
    return cy.xpath("//app-assets-cells//div[@class='ag-header-cell-label']//span[contains(text(),'Actions')]");
  }
  //Get Cells Grid expand/contract button element
  getCellsGridExpand() {
    return cy.xpath("//span[@ref='eContracted']");
  }
  //Get the sensors list
  getSenList() {
    return cy.xpath("//app-assets-assets-landing-page//section//a[contains(text(),' Sensors ')]");
  }

  //Get sensor grid name element
  getSenGridName() {
    return cy.xpath("//app-assets-sensors//div[@class='ag-header-cell-label']//span[contains(text(),'Name')]");
  }

  //Get sensor grid sensed entities element
  getSenGridEnt() {
    return cy.xpath("//app-assets-sensors//div[@class='ag-header-cell-label']//span[contains(text(),'Sensed Entities')]");
  }

  //Get Sensor grid Notes element
  getSenGridNotes() {
    return cy.xpath("//app-assets-sensors//div[@class='ag-header-cell-label']//span[contains(text(),'Notes')]");
  }

  //Get Sensor grid Actions element
  getSenGridActions() {
    return cy.xpath("//app-assets-sensors//div[@class='ag-header-cell-label']//span[contains(text(),'Actions')]");
  }

  //Get the Sparging gas list
  getSGList() {
    return cy.xpath("//app-assets-assets-landing-page//section//a[contains(text(),' Sparging Gases ')]");
  }

    //Get Sparging gas grid name element
  getSGGridName() {
    return cy.xpath("//app-assets-sparging-gases//div[@class='ag-header-cell-label']//span[contains(text(),'Name')]");
  }

    //Get Sparging gas grid Notes element
  getSGGridNotes() {
    return cy.xpath("//app-assets-sparging-gases//div[@class='ag-header-cell-label']//span[contains(text(),'Notes')]");
  }

  //Get Sparging gas grid Actions element
  getSGGridActions() {
    return cy.xpath("//app-assets-sparging-gases//div[@class='ag-header-cell-label']//span[contains(text(),'Actions')]");
  }

  //Get sparging gas Grid expand/contract button element
  getSGGridExpand() {
    return cy.xpath("//span[@ref='eContracted']");
  }

  //Get the Controllers list
  getContList() {
    return cy.xpath("//app-assets-assets-landing-page//section//a[contains(text(),' Controllers ')]");
  }

  //Get controllers grid name element
  getContGridName() {
    return cy.xpath("//app-assets-controllers//div[@class='ag-header-cell-label']//span[contains(text(),'Name')]");
  }

  //Get controllers grid type element
  getContGridType() {
    return cy.xpath("//app-assets-controllers//div[@class='ag-header-cell-label']//span[contains(text(),'Type')]");
  }

    //Get controllers grid Error model element
  getContGridErr() {
    return cy.xpath("//app-assets-controllers//div[@class='ag-header-cell-label']//span[contains(text(),'Error Model')]");
  }

    //Get controllers grid Notes element
  getContGridNotes() {
    return cy.xpath("//app-assets-controllers//div[@class='ag-header-cell-label']//span[contains(text(),'Notes')]");
  }

  //Get controllers grid Actions element
  getContGridActions() {
    return cy.xpath("//app-assets-controllers//div[@class='ag-header-cell-label']//span[contains(text(),'Actions')]");
  }

  //Get Controller Grid expand/contract button element
  getConGridExpand() {
    return cy.xpath("//span[@ref='eContracted']");
  }

  //Get the reactors list
  getReactorList() {
    return cy.xpath("//app-assets-assets-landing-page//section//a[contains(text(),' Reactors ')]");
  }

  //Get reactor grid name element
  getReactorGridName() {
    return cy.xpath("//app-assets-reactors//div[@class='ag-header-cell-label']//span[contains(text(),'Name')]");
  }

  //Get reactor grid no of inlets element
  getreactorGridInlet() {
    return cy.xpath("//app-assets-reactors//div[@class='ag-header-cell-label']//span[contains(text(),'No of Inlets')]");
  }

  //Get reactor grid no of outlets element
  getreactorGridoutlet() {
    return cy.xpath("//app-assets-reactors//div[@class='ag-header-cell-label']//span[contains(text(),'No of Outlets')]");
  }

  //Get reactor grid max working volume element
  getreactorGridMaxWrk() {
    return cy.xpath("//app-assets-reactors//div[@class='ag-header-cell-label']//span[contains(text(),'Max Working Volume')]");
  }

  //Get reactor grid impeller name element
  getreactorGridImplName() {
    return cy.xpath("//app-assets-reactors//div[@class='ag-header-cell-label']//span[contains(text(),'Impeller Name')]");
  }

  //Get reactor grid notes element
  getreactorGridNotes() {
    return cy.xpath("//app-assets-reactors//div[@class='ag-header-cell-label']//span[contains(text(),'Notes')]");
  }

    //Get reactor grid actions element
  getreactorGridActions() {
    return cy.xpath("//app-assets-reactors//div[@class='ag-header-cell-label']//span[contains(text(),'Actions')]");
  }

    //Get reactor Grid expand/contract button element
  getreactorGridExpand() {
    return cy.xpath("//span[@ref='eContracted']");
  }
  
  //Get the retention list
  getRetentionList() {
    return cy.xpath("//app-assets-assets-landing-page//section//a[contains(text(),' Retention System ')]");
  }

   //Get retention grid name element
   getRetentionGridName() {
    return cy.xpath("//app-assets-retention-system//div[@class='ag-header-cell-label']//span[contains(text(),'Name')]");
  }

    //Get Retention grid Notes element
  getRetentionGridNotes() {
    return cy.xpath("//app-assets-retention-system//div[@class='ag-header-cell-label']//span[contains(text(),'Notes')]");
  }

  //Get Retention grid Actions element
  getRetentionGridActions() {
    return cy.xpath("//app-assets-retention-system//div[@class='ag-header-cell-label']//span[contains(text(),'Actions')]");
  }

  //Get Retention  Grid expand/contract button element
  getRetentionGridExpand() {
    return cy.xpath("//span[@ref='eContracted']");
  }
  
    }
  
  export default WorkSpacePage;
  