/// <reference types="cypress"/>
import CheckoutPage from '../pages/CheckoutPage.js';

describe('Fluxo de aquisição completo', () => {
    const checkoutPage = new CheckoutPage();

    // Teste para adicionar, remover e adicionar novamente itens no carrinho
    it('Add, remover itens do carrinho e efetivar o checkout da compra', () => {
        // Usando um comando customizado para login como um usuário padrão
        cy.loginAsStandardUser();
        
        // Verifica se a URL inclui '/inventory.html', confirmando que a página de inventário foi carregada
        cy.url().should('include', '/inventory.html');
        
        // Adiciona itens ao carrinho e, em seguida, remove alguns itens
        // Usando seletores CSS para localizar os botões de adicionar ao carrinho
        cy.get(':nth-child(1) > .pricebar > .btn_primary').dblclick().click(); // Adiciona o primeiro item duas vezes, então clica para adicionar ao carrinho
        cy.get(':nth-child(2) > .pricebar > .btn_primary').dblclick(); // Adiciona o segundo item
        cy.get(':nth-child(3) > .pricebar > .btn_primary').dblclick(); // Adiciona o terceiro item
        cy.get(':nth-child(4) > .pricebar > .btn_primary').dblclick(); // Adiciona o quarto item
        cy.get(':nth-child(5) > .pricebar > .btn_primary').dblclick(); // Adiciona o quinto item
        cy.get(':nth-child(6) > .pricebar > .btn_primary').dblclick(); // Adiciona o sexto item
        
        // Clica no ícone do carrinho de compras para visualizar os itens adicionados
        cy.get('#shopping_cart_container').click();
        
        // Verifica se o cabeçalho da página do carrinho está visível
        cy.get('.subheader').should('be.visible');
        
        // Remove o último item adicionado ao carrinho e volta para a página de inventário
        cy.get('.item_pricebar > .btn_secondary').click(); // Remove um item do carrinho
        cy.get('.btn_secondary').click(); // Volta para a página de inventário
        
        // Re-adiciona os itens ao carrinho para proceder com o checkout
        cy.get(':nth-child(1) > .pricebar > .btn_primary').click(); // Adiciona o primeiro item
        cy.get('.btn_secondary').should('contain.text', 'REMOVE'); // Verifica se o botão mudou para "REMOVE"
        cy.get(':nth-child(2) > .pricebar > .btn_primary').click(); // Adiciona o segundo item
        cy.get('.btn_secondary').should('contain.text', 'REMOVE'); // Verifica o botão
        cy.get(':nth-child(3) > .pricebar > .btn_primary').click(); // Adiciona o terceiro item
        cy.get('.btn_secondary').should('contain.text', 'REMOVE'); // Verifica o botão
        cy.get(':nth-child(4) > .pricebar > .btn_primary').click(); // Adiciona o quarto item
        cy.get('.btn_secondary').should('contain.text', 'REMOVE'); // Verifica o botão
        cy.get(':nth-child(5) > .pricebar > .btn_primary').click(); // Adiciona o quinto item
        cy.get('.btn_secondary').should('contain.text', 'REMOVE'); // Verifica o botão
        cy.get(':nth-child(6) > .pricebar > .btn_primary').click(); // Adiciona o sexto item
        cy.get('.btn_secondary').should('contain.text', 'REMOVE'); // Verifica o botão
        
        // Clica novamente no ícone do carrinho para revisar os itens antes do checkout
        cy.get('#shopping_cart_container').click();
        
        // Inicia o processo de checkout
        cy.get('.btn_action').click();
        
        // Usa Page Object para preencher as informações de checkout
        checkoutPage.fillFirstName('Kaio');
        checkoutPage.fillLastName('Castro');
        checkoutPage.fillPostalCode('123456');
        
        // Submete o formulário de checkout
        checkoutPage.submit();
        
        // Confirma a finalização do pedido
        cy.get('.btn_action').click();
        
        // Verifica se a mensagem de conclusão do pedido está visível
        cy.get('.complete-header').should('be.visible');
        
        // Verifica se a mensagem de agradecimento está presente
        cy.get('.complete-header').should('contain.text', 'THANK YOU FOR YOUR ORDER');
    });
});
