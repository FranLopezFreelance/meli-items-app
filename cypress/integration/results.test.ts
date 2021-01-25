describe('Results Page', () => {
  it('there should be certain styles on the Results Page', () => {
    // Defino la url para interceptar el REQUEST y el archivo del mock de datos
    cy.intercept('/api/items', {fixture: 'searchResults.json'})
      .as('results');
    // Visito la página correspondiente
    cy.visit('/items?search=telefonos');
    // Espero la notificación de la intercepción del REQUEST y carga de Mock de datos
    cy.wait('@results');

    // Verifico las propiedades
    cy.get('.breadcrumb-box')
      .should('have.css', 'padding-top', '16px')
      .should('have.css', 'padding-bottom', '16px');
    cy.get('.item-box')
      .should('have.css', 'padding', '16px');
    cy.get('.description-box')
      .should('have.css', 'margin', '16px');
    cy.get('.item-price')
      .should('have.css', 'font-size', '24px');
    cy.get('.item-title')
      .should('have.css', 'font-size', '18px')
      .should('have.css', 'margin-top', '32px');
    cy.get('.item-state')
      .should('have.css', 'font-size', '12px');
    cy.get('.results-item-image')
      .should('have.css', 'width', '180px')
      .should('have.css', 'border-radius', '4px');
  });
});
