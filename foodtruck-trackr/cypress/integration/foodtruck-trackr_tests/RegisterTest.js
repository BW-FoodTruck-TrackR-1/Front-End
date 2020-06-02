describe("Tests Register.js", () => {
  beforeEach(() => {
    cy.visit("baseUrl");
  });
  it("Checks that Diner.js is working correctly", () => {
    cy.pause();
    cy.get('[href="/dinerreg"]').click();
    cy.get("input[name=username]")
      .type("testUserDiner")
      .should("have.value", "testUserDiner");
    cy.get("input[name=password]")
      .type("testPassDiner1!")
      .should("have.value", "testPassDiner1!");
    cy.get("input[name=location]").type("USA").should("have.value", "USA");
    cy.get("form").submit();
  });
  it("Checks that Operator.js is working correctly", () => {
    cy.pause();
    cy.get('[href="/operatorreg"]').click();
    cy.get("input[name=username]")
      .type("testUserOperator")
      .should("have.value", "testUserOperator");
    cy.get("input[name=password]")
      .type("testPassOperator1!")
      .should("have.value", "testPassOperator1!");
    cy.get("form").submit();
  });
});
