class LogoutPage {
    // Este método retorna o elemento do botão de menu (hambúrguer) que, quando clicado, abre o menu lateral
    get menuButton() {
        return cy.get('.bm-burger-button > button');
    }
    // Este método retorna o elemento do link de logout no menu lateral, garantindo que o texto "Logout" esteja presente e visível
    get logoutLink() {
        return cy.get('#logout_sidebar_link')
            .should('contain.text', 'Logout') // Verifica se o link contém o texto "Logout"
            .should('be.visible'); // Verifica se o link está visível
    }
    // Este método realiza o logout clicando primeiro no botão de menu e depois no link de logout
    performLogout() {
        this.menuButton.click(); // Abre o menu lateral clicando no botão de menu (hambúrguer)
        this.logoutLink.click(); // Clica no link de logout para sair da sessão
    }

    // Verifica se o usuário foi redirecionado para a página de login
    // Este método verifica se, após o logout, o usuário foi redirecionado para a URL da página de login
    verifyLogout() {
        cy.url().should('eq', 'https://www.saucedemo.com/v1/index.html'); // Verifica se a URL atual é a página de login esperada
    }
}

export default LogoutPage;
