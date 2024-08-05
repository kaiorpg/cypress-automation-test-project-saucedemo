class LoginPage {
  visit() {
    cy.visit('https://www.saucedemo.com/v1/');
  }

  fillUsername(username) {
    cy.get('#user-name').type(username);
  }

  fillPassword(password) {
    cy.get('#password').type(password);
  }

  submit() {
    cy.get('#login-button').click();
  }

  loginAsStandardUser() {
    this.visit();
    this.fillUsername('standard_user');
    this.fillPassword('secret_sauce');
    this.submit();
  }
}

export default LoginPage;