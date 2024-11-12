class DeleteAssets {

    //Asset delete button
    getAssetDeleteBtn(){
        return cy.get('li[aria-label="Delete"] div[class*="p-menuitem-content"] a').click();
    }

    // Get the  Name Filter element
     getNameFltr() {
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

    //Get action button of product molecule
    getPMActionBtn() {
        return cy.get('app-assets-product-molecule-action-cell-renderer button');
    }

    //Get action button of cells
    getcellsActionBtn() {
        return cy.get('app-assets-cell-actions-cell-renderer button');
    }

    //Get action button of sparging gas
    getSGActionBtn() {
      return cy.get('app-assets-sg-actions-cell-renderer button');
    }

    //Get action button of retention system
    getRetActionBtn() {
      return cy.get('app-assets-actions-cell-renderer button');
    }

    //Get action button of reactors
    getReactorActionBtn() {
      return cy.get('app-assets-reactor-action-cell-renderer button');
    }

    //Get action button of controllers
    getContActionBtn() {
      return cy.get('app-assets-controller-actions-cell-renderer button');
    }

    //Get action button of sensors
    getsensorActionBtn() {
      return cy.get('app-assets-sensor-actions-cell-renderer button');
    }

    //Get action button of medium
    getmedActionBtn() {
      return cy.get('app-assets-medium-actions-cell-renderer button');
    }

    //Get Breadcrumb for assets
    getBreadCrumbAssets() {
        return cy.xpath("//a[contains(text(),'Assets')]");
    }

    //get toast message element
   getToastMsg(){
    return cy.xpath("//yib-layout-toast//p-toast//div//p-toastitem//div//div//p[contains(text(),'Successfully deleted')]")
 }
      
}
export default DeleteAssets