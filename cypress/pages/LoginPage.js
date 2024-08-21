// A classe LoginPage encapsula as interações com a página de login
class LoginPage {

  // Método para visitar a página de login
  visit() {
    // Acessa a URL da página de login
    cy.visit('https://www.saucedemo.com/v1/');
  }

  // Método para preencher o campo de nome de usuário
  fillUsername(username) {
    // Seleciona o campo de input pelo ID e insere o nome de usuário fornecido
    cy.get('#user-name').type(username);
  }

  // Método para preencher o campo de senha
  fillPassword(password) {
    // Seleciona o campo de input pelo ID e insere a senha fornecida
    cy.get('#password').type(password);
  }

  // Método para submeter o formulário de login
  submit() {
    // Seleciona o botão de login pelo ID e clica nele
    cy.get('#login-button').click();
  }

  // Método para realizar o login como um usuário padrão (standard_user)
  loginAsStandardUser() {
    // Executa a sequência de ações para realizar o login como usuário standard
    this.visit(); // Visita a página de login
    this.fillUsername('standard_user'); // Preenche o campo de nome de usuário
    this.fillPassword('secret_sauce'); // Preenche o campo de senha
    this.submit(); // Submete o formulário de login
  }
}

// Exporta a classe LoginPage para que possa ser utilizada em outros arquivos
export default LoginPage;
