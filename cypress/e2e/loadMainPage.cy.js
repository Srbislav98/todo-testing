describe("Add new Todo items to the list", () => {
    beforeEach(() => {
      cy.visit("https://todomvc-app-for-testing.surge.sh/");
    });
    it("should have one header title element 'todos' and input element", () => {
      cy.contains("h1", "todos").should("be.visible");
      cy.get('input').should('exist').and('have.attr', 'placeholder', 'What needs to be done?');
    });
  
    it("should add two Todo items", () => {
      cy.get(".new-todo").type("Task 1{Enter}");

    });
  });
  