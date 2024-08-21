/// <reference types="cypress"/>
import LoginPage from '../pages/LoginPage.js';

describe('Visualização dos produtos', () => {
    const loginPage = new LoginPage();

    // Teste para realizar login com o usuário padrão ("standard_user")
    it('Login com o usuario standard', () => {
        // Login utilizando Page Objects para demonstrar o uso
        loginPage.visit(); // Acessa a página de login
        loginPage.fillUsername('standard_user'); // Preenche o campo de nome de usuário
        loginPage.fillPassword('secret_sauce'); // Preenche o campo de senha
        loginPage.submit(); // Submete o formulário de login

        // Verifica se a URL após o login contém '/inventory.html', indicando que o login foi bem-sucedido
        cy.url().should('include', '/inventory.html');
    });

    // Teste para validar as informações de 6 produtos na página de inventário
    it('Validando o nome, preço, descrição, e imagem dos produtos', () => {
        // Login efetivado pelo Cypress commands para agilizar o login e reduzir código
        cy.loginAsStandardUser(); // Comando customizado para realizar login como usuário padrão

        // Valida as informações do primeiro produto (Sauce Labs Bike Light)
        cy.get('#item_0_title_link > .inventory_item_name')
            .should('contain.text', 'Sauce Labs Bike Light'); // Verifica o nome do produto
        cy.get(':nth-child(2) > .pricebar > .inventory_item_price')
            .should('contain.text', '$9.99'); // Verifica o preço do produto
        cy.get(':nth-child(2) > .inventory_item_label > .inventory_item_desc')
            .should('contain.text', "A red light isn't the desired state in testing but it sure helps when riding your bike at night. Water-resistant with 3 lighting modes, 1 AAA battery included."); // Verifica a descrição do produto
        cy.get('#item_0_img_link > .inventory_item_img')
            .should('be.visible'); // Verifica se a imagem do produto está visível

        // Valida as informações do segundo produto (Sauce Labs Bolt T-Shirt)
        cy.get('#item_1_title_link > .inventory_item_name')
            .should('contain.text', 'Sauce Labs Bolt T-Shirt'); // Verifica o nome do produto
        cy.get(':nth-child(3) > .pricebar > .inventory_item_price')
            .should('contain.text', '$15.99'); // Verifica o preço do produto
        cy.get(':nth-child(3) > .inventory_item_label > .inventory_item_desc')
            .should('contain.text', "Get your testing superhero on with the Sauce Labs bolt T-shirt. From American Apparel, 100% ringspun combed cotton, heather gray with red bolt."); // Verifica a descrição do produto
        cy.get('#item_1_img_link > .inventory_item_img')
            .should('be.visible'); // Verifica se a imagem do produto está visível

        // Valida as informações do terceiro produto (Sauce Labs Onesie)
        cy.get('#item_2_title_link > .inventory_item_name')
            .should('contain.text', 'Sauce Labs Onesie'); // Verifica o nome do produto
        cy.get(':nth-child(5) > .pricebar > .inventory_item_price')
            .should('contain.text', '$7.99'); // Verifica o preço do produto
        cy.get(':nth-child(5) > .inventory_item_label > .inventory_item_desc')
            .should('contain.text', "Rib snap infant onesie for the junior automation engineer in development. Reinforced 3-snap bottom closure, two-needle hemmed sleeved and bottom won't unravel."); // Verifica a descrição do produto
        cy.get('#item_2_img_link > .inventory_item_img')
            .should('be.visible'); // Verifica se a imagem do produto está visível

        // Valida as informações do quarto produto (Test.allTheThings() T-Shirt (Red))
        cy.get('#item_3_title_link > .inventory_item_name')
            .should('contain.text', 'Test.allTheThings() T-Shirt (Red)'); // Verifica o nome do produto
        cy.get(':nth-child(6) > .pricebar > .inventory_item_price')
            .should('contain.text', '$15.99'); // Verifica o preço do produto
        cy.get(':nth-child(6) > .inventory_item_label > .inventory_item_desc')
            .should('contain.text', "This classic Sauce Labs t-shirt is perfect to wear when cozying up to your keyboard to automate a few tests. Super-soft and comfy ringspun combed cotton."); // Verifica a descrição do produto
        cy.get('#item_3_img_link > .inventory_item_img')
            .should('be.visible'); // Verifica se a imagem do produto está visível

        // Valida as informações do quinto produto (Sauce Labs Backpack)
        cy.get('#item_4_title_link > .inventory_item_name')
            .should('contain.text', 'Sauce Labs Backpack'); // Verifica o nome do produto
        cy.get(':nth-child(1) > .pricebar > .inventory_item_price')
            .should('contain.text', '$29.99'); // Verifica o preço do produto
        cy.get(':nth-child(1) > .inventory_item_label > .inventory_item_desc')
            .should('contain.text', "carry.allTheThings() with the sleek, streamlined Sly Pack that melds uncompromising style with unequaled laptop and tablet protection."); // Verifica a descrição do produto
        cy.get('#item_4_img_link > .inventory_item_img')
            .should('be.visible'); // Verifica se a imagem do produto está visível

        // Valida as informações do sexto produto (Sauce Labs Fleece Jacket)
        cy.get('#item_5_title_link > .inventory_item_name')
            .should('contain.text', 'Sauce Labs Fleece Jacket'); // Verifica o nome do produto
        cy.get(':nth-child(4) > .pricebar > .inventory_item_price')
            .should('contain.text', '$49.99'); // Verifica o preço do produto
        cy.get(':nth-child(4) > .inventory_item_label > .inventory_item_desc')
            .should('contain.text', "It's not every day that you come across a midweight quarter-zip fleece jacket capable of handling everything from a relaxing day outdoors to a busy day at the office."); // Verifica a descrição do produto
        cy.get('#item_5_img_link > .inventory_item_img')
            .should('be.visible'); // Verifica se a imagem do produto está visível
    });
});
//para melhorar o código e efetivar page objects interessantes, a nomenclatura dos sub ítens dos produtos devem ter um padrão EX: #item_5_title_link > .inventory_item_name. Neste produto o mais interessante era que todos os sub ítens tivessem o mesmo número, no caso 5, e neste caso ele fica com o numero 4 depois, oque dificulta uma lógica de teste para todos produtos.