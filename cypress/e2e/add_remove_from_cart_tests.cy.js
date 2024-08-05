/// <reference types= "cypress"/>
import CheckoutPage from '../pages/CheckoutPage.js';

describe('Visualização dos produtos', () => {
    const checkoutPage = new CheckoutPage();

    //adicionando itens ao carrinho e clicando no botão de ir ao carrinho
    it('Add, remover e add novamente itens no carrinho', () => {
        //preferi utilizar o commands no lugar do page objects para simplificar o código e mostrar essa funcionalidade em prática
        cy.loginAsStandardUser();
        cy.url().should('include', '/inventory.html');
        //add itens ao carrinho e removendo
        cy.get(':nth-child(1) > .pricebar > .btn_primary').dblclick().click();
        cy.get(':nth-child(2) > .pricebar > .btn_primary').dblclick()
        cy.get(':nth-child(3) > .pricebar > .btn_primary').dblclick()
        cy.get(':nth-child(4) > .pricebar > .btn_primary').dblclick()
        cy.get(':nth-child(5) > .pricebar > .btn_primary').dblclick()
        cy.get(':nth-child(6) > .pricebar > .btn_primary').dblclick()
        cy.get('#shopping_cart_container').click();
        cy.get('.subheader').should('be.visible');
        //retirando o ultimo item do carrinho e voltando para a loja
        cy.get('.item_pricebar > .btn_secondary').click();
        cy.get('.btn_secondary').click();
        //readicionando os itens para fechar a compra
        cy.get(':nth-child(1) > .pricebar > .btn_primary').click();
        cy.get('.btn_secondary').should('contain.text', 'REMOVE');
        cy.get(':nth-child(2) > .pricebar > .btn_primary').click();
        cy.get('.btn_secondary').should('contain.text', 'REMOVE');
        cy.get(':nth-child(3) > .pricebar > .btn_primary').click();
        cy.get('.btn_secondary').should('contain.text', 'REMOVE');
        cy.get(':nth-child(4) > .pricebar > .btn_primary').click();
        cy.get('.btn_secondary').should('contain.text', 'REMOVE');
        cy.get(':nth-child(5) > .pricebar > .btn_primary').click();
        cy.get('.btn_secondary').should('contain.text', 'REMOVE');
        cy.get(':nth-child(6) > .pricebar > .btn_primary').click();
        cy.get('.btn_secondary').should('contain.text', 'REMOVE');
        cy.get('#shopping_cart_container').click();
        //Indo para tela de Checkout
        cy.get('.btn_action').click();
        //page objects para tela de checkout sendo utilizado
        checkoutPage.fillFirstName('Kaio');
        checkoutPage.fillLastName('Castro');
        checkoutPage.fillPostalCode('123456');
        checkoutPage.submit();
        cy.get('.btn_action').click();
        cy.get('.complete-header').should('be.visible');
        cy.get('.complete-header').should('contain.text', 'THANK YOU FOR YOUR ORDER');

    });
});
