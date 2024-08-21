/// <reference types="cypress"/>

import LogoutPage from '../pages/LogoutPage';


describe('Testes de Logout do Usuário', () => {
  const logoutPage = new LogoutPage();

  // Teste para verificar o processo de logout de um usuário padrão
  it('Deve efetuar logout com sucesso após login como usuário padrão', () => {
    // Realiza login como um usuário padrão usando comando customizado
    cy.loginAsStandardUser();

    // Realiza o logout usando o Page Object
    logoutPage.performLogout();

    // Verifica se o logout foi realizado com sucesso, redirecionando para a página de login
    logoutPage.verifyLogout(); // Este método já verifica a URL correta
  });
});
