
describe("Clear completed Todo items", () => {
  beforeEach(()=>{
    cy.visit("https://todomvc-app-for-testing.surge.sh/");

    cy.get(".new-todo").type("Task 1{Enter}");
    cy.get(".new-todo").type("Task 2{Enter}");
    cy.get('.todo-list').children("li").eq(0).as("firstTODO");
    cy.get('@firstTODO').find(".toggle").click();
  });

  it("it should clear all completed Todo items", () => {
    cy.get('.todo-list').children("li").should('have.length', 2);
    cy.contains('Clear completed').click();
            
    cy.get('.todo-list').children("li").should('have.length', 1);
  });
});
