describe("Visit the ", () => {
  it("passes", () => {
    cy.visit("https://www.youtube.com/");
  });
});

it("Validate my tutorial on YouTube", () => {
  cy.get("#search").type("Cypress");
});
