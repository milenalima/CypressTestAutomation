/// <reference types="Cypress" />

context("Cypress Test", () => {
  describe("Suite de Teste 1", () => {
    beforeEach(() => {
      cy.visit("https://www.youtube.com/");
    });

    it("Validate my tutorial on YouTube", () => {
      cy.wait(1000);
      cy.get("#search-input").type("cypress{enter}");
      cy.wait(1000);
      cy.get(
        ":nth-child(3) > :nth-child(1) > #dismissible > .text-wrapper > #meta > #title-wrapper > .title-and-badge > #video-title > yt-formatted-string.style-scope"
      ).click();
      /*cy.get("title")
        .should("have.text", "Automação de Testes com Cypress para Iniciantes")
        .click();*/
    });
  });
});
