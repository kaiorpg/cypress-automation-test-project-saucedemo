// A classe CheckoutPage encapsula as interações com a página de checkout
class CheckoutPage {

  // Método para preencher o campo de nome (primeiro nome)
  fillFirstName(firstname) {
    // Seleciona o campo de input usando um seletor de atributo e insere o nome fornecido
    cy.get('[data-test="firstName"]').type(firstname);
  }

  // Método para preencher o campo de sobrenome
  fillLastName(lastname) {
    // Seleciona o campo de input usando um seletor de atributo e insere o sobrenome fornecido
    cy.get('[data-test="lastName"]').type(lastname);
  }

  // Método para preencher o campo de código postal
  fillPostalCode(postalcode) {
    // Seleciona o campo de input usando um seletor de atributo e insere o código postal fornecido
    cy.get('[data-test="postalCode"]').type(postalcode);
  }

  // Método para submeter o formulário de checkout
  submit() {
    // Seleciona o botão de envio usando um seletor de classe e clica nele
    cy.get('.btn_primary').click();
  }
}

// Exporta a classe CheckoutPage para que possa ser utilizada em outros arquivos
export default CheckoutPage
