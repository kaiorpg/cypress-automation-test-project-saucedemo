/// <reference types= "cypress"/>

describe('Login Tests', () => {
  // Obtendo o array de usuários do Cypress.env
  const users = Cypress.env('users');
// Definição do array com os diferentes tipos de usuários
  users.forEach((user) => {
    // Comando para fazer login com base no tipo de usuário
    it(`Testando todos Logins por ${user.type} user`, () => {
      cy.loginWith(user.type);
      // Verificando se o login foi realizado com sucesso
      if (user.type === 'standard') {
        cy.url().should('include', '/inventory.html');
        cy.get('.product_label').should('be.visible');
      // Verificando se o login foi bloqueado ou ocorreu algum erro
      } else if (user.type === 'lockedOut') {
        cy.get('[data-test="error"]').should('be.visible');
      }
    });
    it('Teste de Logout', () => {
      cy.loginAsStandardUser();
      cy.get('.bm-burger-button > button').click();
      cy.get('#logout_sidebar_link').click();
      cy.url().should('eq', 'https://www.saucedemo.com/v1/index.html');
    });
  });
})