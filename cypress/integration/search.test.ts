describe('Search Page', () => {
  it('there should be certain styles on the Search Page', () => {
    cy.visit('/');
    cy.get('.input-search')
      .should('have.css', 'font-size', '18px');
  });
});
