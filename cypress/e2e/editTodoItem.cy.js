
describe("Edit Todo item", () => {
  beforeEach(()=>{
    cy.visit("https://todomvc-app-for-testing.surge.sh/");

    cy.get(".new-todo").type("Task 1{Enter}");

  });
  it("should rename Todo item and confirm it by clicking enter", () => {
    cy.get('.todo-list').children("li").eq(0).as("todoItem");
    cy.get('@todoItem').find('label').dblclick()
    cy.get('@todoItem').find('.edit').dblclick().clear().type("Task 9{Enter}");

    cy.get('@todoItem').should("contain", "Task 9").should("be.visible");
    cy.contains(".todo-count", "1 item left").should("be.visible");
  });

  it("should rename Todo item and confirm it by clicking outside input element", () => {
    cy.get('.todo-list').children("li").eq(0).as("todoItem");
    cy.get('@todoItem').find('label').dblclick()
    cy.get('@todoItem').find('.edit').dblclick().clear().type("Task 9");
    cy.get('h1').trigger('click');

    cy.get('@todoItem').should("contain", "Task 9").should("be.visible");
    cy.contains(".todo-count", "1 item left").should("be.visible");
  });

});