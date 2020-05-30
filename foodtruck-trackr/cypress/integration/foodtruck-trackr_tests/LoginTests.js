describe("Testing Login.js", () => {
  beforeEach(() => {
    cy.visit("baseUrl");
  });
  it("Checks that LoginDiner.js form inputs are working correctly", () => {
    cy.pause();
    cy.visit("/login/diner");
    cy.get("input[name=username]")
      .type("testDiner")
      .should("have.value", "testDiner");

    cy.get("input[name=password]")
      .type("testPasswordDiner")
      .should("have.value", "testPasswordDiner");

    cy.get("form").submit();

    cy.get("input").clear();
  });
  it("Checks that LoginOperator.js form inputs are working correctly", () => {
    cy.pause();
    cy.visit("/login/operator");
    cy.get("input[name=username]")
      .type("testOperator")
      .should("have.value", "testOperator");

    cy.get("input[name=password]")
      .type("testPasswordOperator")
      .should("have.value", "testPasswordOperator");

    cy.get("form").submit();

    cy.get("input").clear();
  });
});
