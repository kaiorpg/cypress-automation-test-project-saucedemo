/// <reference types= "cypress"/>
import LoginPage from '../pages/LoginPage.js';

describe('Visualização dos produtos', () => {
    const loginPage = new LoginPage();
    it('Login com o usuario standard', () => {
        
        //Login utilizando Page Objects para demonstrar o uso
        loginPage.visit();
        loginPage.fillUsername('standard_user');
        loginPage.fillPassword('secret_sauce');
        loginPage.submit();
        cy.url().should('include', '/inventory.html');
    });
    //validando os dados dos 6 produtos
    it('Validando o nome, preço, descrição, e imagem dos itens', () => {
        // Login efetivado pelo Cypress commands para gilizar o login e reduzir código
        cy.loginAsStandardUser();
        cy.get('#item_0_title_link > .inventory_item_name').should('contain.text', 'Sauce Labs Bike Light');
        cy.get(':nth-child(2) > .pricebar > .inventory_item_price').should('contain.text', '$9.99');
        cy.get(':nth-child(2) > .inventory_item_label > .inventory_item_desc').should('contain.text', "A red light isn't the desired state in testing but it sure helps when riding your bike at night. Water-resistant with 3 lighting modes, 1 AAA battery included.")
        cy.get('#item_0_img_link > .inventory_item_img').should('be.visible');

        cy.get('#item_1_title_link > .inventory_item_name').should('contain.text', 'Sauce Labs Bolt T-Shirt');
        cy.get(':nth-child(3) > .pricebar > .inventory_item_price').should('contain.text', '$15.99');
        cy.get(':nth-child(3) > .inventory_item_label > .inventory_item_desc').should('contain.text', "Get your testing superhero on with the Sauce Labs bolt T-shirt. From American Apparel, 100% ringspun combed cotton, heather gray with red bolt.");
        cy.get('#item_1_img_link > .inventory_item_img').should('be.visible');

        cy.get('#item_2_title_link > .inventory_item_name').should('contain.text', 'Sauce Labs Onesie');
        cy.get(':nth-child(5) > .pricebar > .inventory_item_price').should('contain.text', '$7.99');
        cy.get(':nth-child(5) > .inventory_item_label > .inventory_item_desc').should('contain.text', "Rib snap infant onesie for the junior automation engineer in development. Reinforced 3-snap bottom closure, two-needle hemmed sleeved and bottom won't unravel.");
        cy.get('#item_2_img_link > .inventory_item_img').should('be.visible');

        cy.get('#item_3_title_link > .inventory_item_name').should('contain.text', 'Test.allTheThings() T-Shirt (Red)');
        cy.get(':nth-child(6) > .pricebar > .inventory_item_price').should('contain.text', '$15.99');
        cy.get(':nth-child(6) > .inventory_item_label > .inventory_item_desc').should('contain.text', "This classic Sauce Labs t-shirt is perfect to wear when cozying up to your keyboard to automate a few tests. Super-soft and comfy ringspun combed cotton.");
        cy.get('#item_3_img_link > .inventory_item_img').should('be.visible');

        cy.get('#item_4_title_link > .inventory_item_name').should('contain.text', 'Sauce Labs Backpack');
        cy.get(':nth-child(1) > .pricebar > .inventory_item_price').should('contain.text', '$29.99');
        cy.get(':nth-child(1) > .inventory_item_label > .inventory_item_desc').should('contain.text', "carry.allTheThings() with the sleek, streamlined Sly Pack that melds uncompromising style with unequaled laptop and tablet protection.");
        cy.get('#item_4_img_link > .inventory_item_img').should('be.visible');

        cy.get('#item_5_title_link > .inventory_item_name').should('contain.text', 'Sauce Labs Fleece Jacket');
        cy.get(':nth-child(4) > .pricebar > .inventory_item_price').should('contain.text', '$49.99');
        cy.get(':nth-child(4) > .inventory_item_label > .inventory_item_desc').should('contain.text', "It's not every day that you come across a midweight quarter-zip fleece jacket capable of handling everything from a relaxing day outdoors to a busy day at the office.");
        cy.get('#item_5_img_link > .inventory_item_img').should('be.visible');

    });
});
