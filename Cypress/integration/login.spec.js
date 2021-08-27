/// <reference types="cypress" />

describe ("Login", () => {
    it("Realizar o Login COM sucesso.", () => {
        // Acessar a página 
        cy.visit('/')
        // Preencher usuario 
        cy.get('[data-testid=email]').type("vinii_cardoso");
        // Preencher senha
        cy.get('[data-testid=senha]').type("teste");
        // Clicar em entrar
        cy.get('[data-testid=entrar]').click();
        // Validar o texto Bem Vindo Fulano da Silva
        cy.get('h1').should('have.text',"Bem Vindo  Fulano da Silva"); 

    });
});