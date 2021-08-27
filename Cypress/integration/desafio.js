/// <reference types="cypress" />


describe ("Desafio ServeRest", () => {
    it("Realizar acesso ao site COM sucesso.", () => {
        cy.visit('/')
    });
    it("Criar um novo usuário não sendo administrador", () => {
        cy.get('[data-testid=cadastrar]').click();
        cy.get('[data-testid=nome]').type("Vinicius Cardoso");
        cy.get('[data-testid=email]').type("v_cardoso@hotmail.com");
        cy.get('[data-testid=senha]').type("190330");
        cy.get('[data-testid=cadastrar]').click();


    });
    it("Adicionar um produto a Lista", () => {
        cy.get('[data-testid=pesquisar]').type("Notebook");
        cy.get('[data-testid=botaoPesquisar]').click();
        cy.get('[data-testid=adicionarNaLista]').click();
    });
    it(" Validar a existência deste produto na Lista de Compras", () => {
        cy.get('#root>div>div>div>div>div>section>div>div>div:nth-child(1)').should('have.text',"Produto:Notebook Dell Inspiron 5000")
    });
});