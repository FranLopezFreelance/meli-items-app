describe('Item Detail Page', () => {
  it('there should be certain styles on the Item Detail Page', () => {
    // Defino la url para interceptar el REQUEST y el archivo del mock de datos
    cy.intercept('/api/items/*', {fixture: 'item-detail.json'})
      .as('itemDetail');
    // Visito la página correspondiente
    cy.visit('/items/MLA897952360');
    // Espero la notificación de la intercepción del REQUEST y carga de Mock de datos
    cy.wait('@itemDetail');

    // Verifico las propiedades
    cy.get('.breadcrumb-box')
      .should('have.css', 'padding-top', '16px')
      .should('have.css', 'padding-bottom', '16px');
    cy.get('.detail-container')
      .should('have.css', 'padding-top', '32px');
    cy.get('.detail-header')
      .should('have.css', 'font-size', '14px')
      .should('have.css', 'margin-bottom', '16px');
    cy.get('.title')
      .should('have.css', 'font-size', '24px')
      .should('have.css', 'margin-bottom', '32px');
    cy.get('.base-price')
      .should('have.css', 'font-size', '46px');
    cy.get('.buy-button-box')
      .should('have.css', 'padding-top', '32px')
      .should('have.css', 'padding-right', '32px');
    cy.get('.item-description')
      .should('have.css', 'padding-left', '32px');
    cy.get('.description-title')
      .should('have.css', 'font-size', '28px')
      .should('have.css', 'margin-bottom', '32px');
    cy.get('.description')
      .should('have.css', 'font-size', '16px');
    cy.get('.item-image')
      .should('have.css', 'width', '680px');
  });
});
