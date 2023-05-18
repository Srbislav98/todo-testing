
describe("Edit Todo item", () => {
  beforeEach(()=>{
    cy.visit("https://todomvc-app-for-testing.surge.sh/");

    cy.get(".new-todo").type("Task 1{Enter}");
    cy.get('.todo-list').children("li").eq(0).as("todoItem");
  });
  it("should rename Todo item and confirm it by clicking enter", () => {
    cy.get('@todoItem').find('label').dblclick();
    cy.get('@todoItem').find('.edit').dblclick().clear().type("Task 9{Enter}");

    cy.get('@todoItem').should("contain", "Task 9").should("be.visible");
    cy.contains(".todo-count", "1 item left").should("be.visible");
  });

  it("should rename Todo item and confirm it by clicking outside input element", () => {
    cy.get('@todoItem').find('label').dblclick();
    cy.get('@todoItem').find('.edit').clear().type("Task 9");
    cy.get('h1').click();

    cy.get('@todoItem').should("contain", "Task 9").should("be.visible");
    cy.contains(".todo-count", "1 item left").should("be.visible");
  });

  it("should remove Todo item when leaving input empty while editing item", () => {
    cy.get('@todoItem').find('label').dblclick();
    cy.get('@todoItem').find('.edit').clear().type("{Enter}");

    cy.get('.todo-list li').should('not.exist');
  });


});
