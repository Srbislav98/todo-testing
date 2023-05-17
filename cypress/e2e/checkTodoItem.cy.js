
describe("Check Todo item", () => {
  beforeEach(()=>{
    cy.visit("https://todomvc-app-for-testing.surge.sh/");

    cy.get(".new-todo").type("Task 1{Enter}");
  });
  it("should check Todo item", () => {
    cy.get('.todo-list').children("li").eq(0).as("todoItem");
    cy.get('@todoItem').find(".toggle").click();

    cy.contains(".todo-count", "No items left").should("be.visible");
  });

  it("should uncheck checked Todo item", () => {
    cy.get('.todo-list').children("li").eq(0).as("todoItem");
    cy.get('@todoItem').find(".toggle").click();
    cy.contains(".todo-count", "No items left").should("be.visible");
    cy.get('@todoItem').find(".toggle").click();

    cy.contains(".todo-count", "1 item left").should("be.visible");
  });

});
