/// <reference types="cypress"/>

describe('Testes de Autenticação', () => {
  // Obtendo o array de usuários a partir do ambiente configurado no Cypress
  const users = Cypress.env('users');

  // Itera sobre o array de usuários e executa testes de login para cada tipo de usuário
  users.forEach((user) => {
    // Testa o processo de login para diferentes tipos de usuários
    it(`Deve testar login para usuário do tipo ${user.type}`, () => {
      // Comando customizado para realizar o login com base no tipo de usuário
      cy.loginWith(user.type);

      // Verifica o comportamento esperado para um usuário padrão
      if (user.type === 'standard') {
        cy.url().should('include', '/inventory.html'); // Verifica se a URL contém '/inventory.html'
        cy.get('.product_label').should('be.visible'); // Confirma que o usuário foi redirecionado para a página de inventário
      }
      // Verifica o comportamento esperado para um usuário bloqueado
      else if (user.type === 'lockedOut') {
        cy.get('[data-test="error"]').should('be.visible'); // Verifica se a mensagem de erro é exibida
      }
    });
  });
});
