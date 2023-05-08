/// <reference types="Cypress" />

context("SwagLabs", () => {
  describe("Suite Test 1", () => {
    beforeEach(() => {
      cy.visit("https://www.saucedemo.com/");
    });

    it("Login with multiple users", () => {
      cy.wait(1000);
      //cy.get('[data-test="username"]');
      //cy.get('[data-test="password"]');
    });

    //method
    /*multipleLogin(() => {
      var userList = [
        "standard_user",
        "locked_out_user",
        "problem_user",
        "performance_glitch_user",
      ];
      var password = "secret_sauce";
      for (var i = 0; i < userList.length; i++) {
        cy.get('[data-test="username"]').type(userList[i]);
        cy.get('[data-test="password"]').type(password);
        cy.get("#react-burger-menu-btn").click();
        cy.get("#logout_sidebar_link").click();
      }
    });*/
  });
});
