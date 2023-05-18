
describe("Check off Todo item", () => {
  beforeEach(()=>{
    cy.visit("https://todomvc-app-for-testing.surge.sh/");

    cy.get(".new-todo").type("Task 1{Enter}");
    cy.get('.todo-list').children("li").eq(0).as("todoItem");
  });
  it("should check off Todo item", () => {
    cy.get('@todoItem').find(".toggle").click();

    cy.contains(".todo-count", "No items left").should("be.visible");
  });

  it("should uncheck completed Todo item", () => {
    cy.get('@todoItem').find(".toggle").click();
    cy.get('@todoItem').find(".toggle").click();

    cy.contains(".todo-count", "1 item left").should("be.visible");
  });

});
