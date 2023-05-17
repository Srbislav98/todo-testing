describe("Add new Todo items to the list", () => {
  beforeEach(() => {
    cy.visit("https://todomvc-app-for-testing.surge.sh/");
  });
  it("should add one Todo item", () => {
    cy.get(".new-todo").type("Task 1{Enter}");
    cy.contains("label", "Task 1").should("be.visible");
    cy.contains(".todo-count", "1 item left").should("be.visible");
  });

  it("should add two Todo items", () => {
    cy.get(".new-todo").type("Task 1{Enter}");
    cy.contains("label", "Task 1").should("be.visible");
    cy.contains(".todo-count", "1 item left").should("be.visible");

    cy.get(".new-todo").type("Task 2{Enter}");
    cy.contains("label", "Task 2").should("be.visible");
    cy.contains(".todo-count", "2 items left").should("be.visible");
  });
});
