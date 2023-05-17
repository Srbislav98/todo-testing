
describe("Verify Todo count", () => {
  beforeEach(()=>{
    cy.visit("https://todomvc-app-for-testing.surge.sh/");

    cy.get(".new-todo").type("Task 1{Enter}");
    cy.get(".new-todo").type("Task 2{Enter}");
  });
  it("should verify that Todo count is properly changed when Todo item is added", () => {
    cy.contains(".todo-count", "2 items left").should("be.visible");
    cy.get(".new-todo").type("Task 3{Enter}");

    cy.contains(".todo-count", "3 items left").should("be.visible");
  });

  it("should verify that Todo count is properly changed when Todo item is removed", () => {
    cy.contains(".todo-count", "2 items left").should("be.visible");
    cy.contains("label", "Task 1").siblings(".destroy").click({ force: true });

    cy.contains(".todo-count", "1 item left").should("be.visible");
  });

  it("should verify that Todo count is properly changed when Todo item is checked", () => {
    cy.contains(".todo-count", "2 items left").should("be.visible");
    cy.get('.todo-list').children("li").eq(0).as("todoItem");
    cy.get('@todoItem').find(".toggle").click();

    cy.contains(".todo-count", "1 item left").should("be.visible");
  });

});
