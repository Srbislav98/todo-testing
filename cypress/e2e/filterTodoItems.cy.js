
describe("Filter Todo items", () => {
  beforeEach(()=>{
    cy.visit("https://todomvc-app-for-testing.surge.sh/");

    cy.get(".new-todo").type("Task 1{Enter}");
    cy.get(".new-todo").type("Task 2{Enter}");
    cy.get('.todo-list').children("li").eq(0).as("firstTODO");
    cy.get('@firstTODO').find(".toggle").click();

  });
  it("should filter active Todo items", () => {
    cy.contains('Active').click();

    cy.contains('Active').should('have.class', 'selected');
    cy.get('.todo-list').children("li").should('have.length', 1);
    cy.get('.todo-list').children("li").eq(0).as("firstTODO");
    cy.get('@firstTODO').should('contain',"Task 1");
  });

  it("should filter completed Todo items", () => {
    cy.contains('Completed').click();

    cy.contains('Completed').should('have.class', 'selected');
    cy.get('.todo-list').children("li").should('have.length', 1);
    cy.get('.todo-list').children("li").eq(0).as("firstTODO");
    cy.get('@firstTODO').should('contain',"Task 2");
  });
});
