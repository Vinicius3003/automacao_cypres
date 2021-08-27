/// <reference types="cypress" />

describe ("Cadastro", () => {
    it("Realizar o Cadastro COM sucesso.", () => {
        // Acessar a página 
        cy.visit('/')
        // Preencher usuario 
        cy.get('[data-testid=email]').type("vinii_cardoso@hotmail.com");
        // Preencher senha
        cy.get('[data-testid=senha]').type("190330");
        // Clicar em entrar
        cy.get('[data-testid=entrar]').click();
        // 
        cy.get('[data-testeid=logout]').should('have.text',"logout"); 

    });
});