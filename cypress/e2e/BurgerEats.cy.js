/// <reference types="Cypress" />

context("Burger Eats Tests", () => {
  describe("Suite Test 1", () => {
    beforeEach(() => {
      cy.visit("https://buger-eats.vercel.app/");
    });

    it("Fail register", () => {
      cy.wait(1000);
      cy.get('a[href="/deliver"]').click();

      //Filling the fields
      cy.get(":nth-child(2) > :nth-child(2) > :nth-child(1) > input").type(
        "Peter Parker"
      );
      cy.get(":nth-child(2) > :nth-child(2) > :nth-child(2) > input").type(
        "22222222210"
      );

      //Finilizing the register
      cy.get(".button-success").click();

      //Asserts
      cy.get(":nth-child(3) > :nth-child(1) > .alert-error").should(
        "have.text",
        "É necessário informar o email"
      );
      cy.get(":nth-child(2) > :nth-child(1) > .alert-error").should(
        "have.text",
        "É necessário informar o CEP"
      );
      cy.get(":nth-child(4) > :nth-child(1) > .alert-error").should(
        "have.text",
        "É necessário informar o número do endereço"
      );
      cy.get("form > :nth-child(6)").should(
        "have.text",
        "Adicione uma foto da sua CNH"
      );
    });

    it("Successful register", () => {
      cy.wait(1000);
      cy.get('a[href="/deliver"]').click();

      //Filling the fields
      cy.get(":nth-child(2) > :nth-child(2) > :nth-child(1) > input").type(
        "Milena Lima Lopes"
      );
      cy.get(":nth-child(2) > :nth-child(2) > :nth-child(2) > input").type(
        "45247365810"
      );
      cy.get(":nth-child(3) > :nth-child(1) > input").type("teste@teste.com");
      cy.get(":nth-child(3) > :nth-child(2) > :nth-child(1) > input").type(
        "13145074"
      );
      cy.get(":nth-child(3) > :nth-child(2) > :nth-child(2) > input").click();
      cy.get(":nth-child(4) > :nth-child(1) > input").type("35");
      cy.get(".delivery-method > :nth-child(2)").click();
      cy.get("p").click();
      cy.wait(3000);

      //Finilizing the register
      cy.get(".button-success").click();
    });
  });
});
