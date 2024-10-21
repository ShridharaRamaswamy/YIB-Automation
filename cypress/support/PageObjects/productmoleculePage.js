class productmoleculePage{

    // Get the Add product molecule button element
    getAddpmBtn() {
      return cy.get("p-button[ptooltip='Add Molecule Info']");
    }

}
export default productmoleculePage;