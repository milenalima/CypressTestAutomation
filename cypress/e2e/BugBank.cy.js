/// <reference types="Cypress" />

context("BugBank", () => {
  describe("Suite Test 1", () => {
    beforeEach(() => {
      cy.visit("https://bugbank.netlify.app/");
    });

    it("Create a bank account", () => {
      cy.wait(1000);
      cy.get(".ihdmxA").click();
      //Filling the fields
      cy.get(":nth-child(2) > .input__default")
        .click({ force: true })
        .type("milena@ciandt.com");
      cy.get(":nth-child(3) > .input__default")
        .click({ force: true })
        .type("Bruce Wayne");
      cy.get(
        ":nth-child(4) > .style__ContainerFieldInput-sc-s3e9ea-0 > .input__default"
      )
        .click({ force: true })
        .type("senha");
      cy.get(
        ":nth-child(5) > .style__ContainerFieldInput-sc-s3e9ea-0 > .input__default"
      )
        .click({ force: true })
        .type("senha");
      cy.get("#toggleAddBalance").click({ force: true });
      cy.get(
        ".styles__ContainerFormRegister-sc-7fhc7g-0 > .style__ContainerButton-sc-1wsixal-0"
      ).click({ force: true });

      cy.get("#modalText").should("include.text", "foi criada com sucesso");
      cy.get("#btnCloseModal").click();
    });

    it("Connect to the bank account", () => {
      cy.wait(1000);
      cy.get(
        ".style__ContainerFormLogin-sc-1wbjw6k-0 > :nth-child(1) > .input__default"
      ).type("milena@ciandt.com");
      cy.get(
        ".style__ContainerFormLogin-sc-1wbjw6k-0 > .login__password > .style__ContainerFieldInput-sc-s3e9ea-0 > .input__default"
      ).type("senha");
      cy.get(".otUnI").click();
    });

    it("Get a bank account extract", () => {
      cy.wait(1000);
      cy.get(
        ".style__ContainerFormLogin-sc-1wbjw6k-0 > :nth-child(1) > .input__default"
      ).type("milena@ciandt.com");
      cy.get(
        ".style__ContainerFormLogin-sc-1wbjw6k-0 > .login__password > .style__ContainerFieldInput-sc-s3e9ea-0 > .input__default"
      ).type("senha");
      cy.get(".otUnI").click();
      cy.get("#btn-EXTRATO").click();
      cy.get("#textBalanceAvailable").should("have.text", "R$");
    });
  });
});
