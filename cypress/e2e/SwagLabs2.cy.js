/// <reference types="Cypress" />

context("", () => {
  describe("template spec", () => {
    beforeEach(() => {
      cy.visit("https://www.saucedemo.com");
    });

    it("Tst", () => {
      cy.wait(1000);
    });
  });
});
