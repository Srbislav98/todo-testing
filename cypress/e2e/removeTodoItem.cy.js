describe("Remove Todo item from the list", () => {
  beforeEach(() => {
    cy.visit("https://todomvc-app-for-testing.surge.sh/");

    cy.get(".new-todo").type("Task 1{Enter}");
  });
  it("should remove Todo item", () => {
    cy.contains("label", "Task 1").siblings(".destroy").click({ force: true });

    cy.contains("label", "Task 1").should("not.exist");
  });

  it("should remove checked Todo item", () => {
    cy.get(".toggle").first().click();
    cy.contains(".todo-count", "No items left").should("be.visible");
    cy.contains("label", "Task 1").siblings(".destroy").click({ force: true });

    cy.contains("label", "Task 1").should("not.exist");
  });
});
