class CheckoutPage {

    fillFirstName(firstname) {
      cy.get('[data-test="firstName"]').type(firstname);
    }
  
    fillLastName(lastname) {
      cy.get('[data-test="lastName"]').type(lastname);
    }
  
    fillPostalCode(postalcode) {
      cy.get('[data-test="postalCode"]').type(postalcode);
    }
  
    submit() {
      cy.get('.btn_primary').click();
    }
  }
  
  export default CheckoutPage;