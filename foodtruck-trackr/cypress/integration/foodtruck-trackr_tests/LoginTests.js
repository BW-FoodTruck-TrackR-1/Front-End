describe("Testing Login.js", () => {
  beforeEach(() => {
    cy.visit("baseUrl");
  });
  it("Checks that LoginDiner.js form inputs are working correctly", () => {
    cy.pause();
    cy.get('[href="/login"]').click();
    cy.get('[href="/login/diner"]').click();
    cy.get("input[name=username]")
      .type("testUserDiner")
      .should("have.value", "testUserDiner");

    cy.get("input[name=password]")
      .type("testPassDiner")
      .should("have.value", "testPassDiner");

    cy.get("form").submit();
  });
  it("Checks that LoginOperator.js form inputs are working correctly", () => {
    cy.pause();
    cy.get('[href="/login"]').click();
    cy.get('[href="/login/operator"]').click();
    cy.get("input[name=username]")
      .type("testUserOperator")
      .should("have.value", "testUserOperator");

    cy.get("input[name=password]")
      .type("testPassOperator1!")
      .should("have.value", "testPassOperator1!");

    cy.get("form").submit();
  });
});
