describe("Loads the main page", () => {
    beforeEach(() => {
      cy.visit("https://todomvc-app-for-testing.surge.sh/");
    });
    it("should have one header title element 'todos' and input element", () => {
      cy.contains("h1", "todos").should("be.visible");
      cy.get('input').should('exist').and('have.attr', 'placeholder', 'What needs to be done?');
    });
  
    it("should check that input element is focused", () => {
      cy.focused().should('have.class', 'new-todo');
    });
  });
  