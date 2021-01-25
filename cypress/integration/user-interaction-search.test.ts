describe('User Interaction', () => {
  it('there should be 4 results', () => {
    // Ingreso al root
    cy.visit('/');
    // Obtengo el input de búsqueda y tipeo "telefonos"
    cy.get('.input-search').type('telefonos');
    // /ntercepto el llamado a la api
    cy.intercept('/api/items', {fixture: 'searchResults.json'})
      .as('results');
    // Hago click en la lupa
    cy.get('.search-button').click();
    // Espero los resultados
    cy.wait('@results');
    // Espero obtener 4 resultados
    cy.get('.item-box').should('have.length', 4);
  });
});
