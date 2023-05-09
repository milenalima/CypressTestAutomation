/// <reference types="Cypress" />

context("Ultimate QA Pratice", () => {
  describe("Ultimate Suite Test", () => {
    beforeEach(() => {
      cy.visit("https://ultimateqa.com/simple-html-elements-for-automation/");
    });

    it("Check the next page and return", () => {
      cy.get(".et_pb_module_header > a").click();
      cy.get(".entry-title").should("have.text", "Link success");
      cy.wait(1000);
      cy.go("back");
    });

    it("Send a message to Contact Us page", () => {
      cy.get("#menu-item-216842 > a").click();
      cy.get("h1").should("have.text", "Contact Us");
      cy.get("#et_pb_contact_first_0").type("Bruce");
      cy.get("#et_pb_contact_last_0").type("Wayne");
      cy.get("#et_pb_contact_email_0").type("batemail@email.com");
      cy.get("#et_pb_contact_message_0").type("Bat message!");
      cy.get(".et_pb_contact_submit").click();
      cy.get(".et-pb-contact-message > p").should(
        "have.text",
        "Thanks for contacting us"
      );
    });

    it("Select an option on radio button", () => {
      cy.get('[type="radio"]').check("female");
    });

    it("Select an option on checkbox", () => {
      cy.get('[type="checkbox"]').check("Bike");
      cy.get('[type="checkbox"]').check("Car");
    });

    it("Select an option on dropdown", () => {
      cy.get("select").select("Volvo");
      cy.get("select").select("Audi");
    });

    it("Select and validate Tab1", () => {
      cy.get(".et_pb_tab_0 > a").click();
      cy.get(".et_pb_tab_0 > .et_pb_tab_content").should(
        "have.text",
        "tab 1 content"
      );
    });

    it("Select and validate Tab2", () => {
      cy.get(".et_pb_tab_1 > a").click();
      cy.get(".et_pb_tab_1 > .et_pb_tab_content").should(
        "have.text",
        "Tab 2 content"
      );
    });
  });
});
