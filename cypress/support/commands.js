
// Definição do array com os diferentes tipos de usuários
const users = [
    { type: 'standard', username: 'standard_user', password: 'secret_sauce' },
    { type: 'lockedOut', username: 'locked_out_user', password: 'secret_sauce' },
    { type: 'problem', username: 'problem_user', password: 'secret_sauce' },
    { type: 'performance', username: 'performance_glitch_user', password: 'secret_sauce' }
  ];
  
  // Comando para fazer login com base no tipo de usuário
  Cypress.Commands.add('loginWith', (userType) => {
    const user = users.find(u => u.type === userType);
    if (user) {
      cy.visit('https://www.saucedemo.com/v1/');
      cy.get('#user-name').type(user.username);
      cy.get('#password').type(user.password);
      cy.get('#login-button').click();
    } else {
      throw new Error(`Login type ${userType} is not defined`);
    }
  });
  
  // Expondo o array de usuários para uso nos testes
  Cypress.env('users', users);

  Cypress.Commands.add('loginAsStandardUser', () => {
  const username = 'standard_user';
  const password = 'secret_sauce';

  cy.visit('https://www.saucedemo.com/v1/');
  cy.get('#user-name').type(username);
  cy.get('#password').type(password);
  cy.get('#login-button').click();
});

Cypress.Commands.add('loginAsStandardUser', () => {
    const username = 'standard_user';
    const password = 'secret_sauce';
  
    cy.visit('https://www.saucedemo.com/v1/');
    cy.get('#user-name').type(username);
    cy.get('#password').type(password);
    cy.get('#login-button').click();
  });