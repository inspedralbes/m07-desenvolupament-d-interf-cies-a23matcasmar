describe('Test E2E personal', () => {
  /*
  Como usuario visitante, quiero ver mi nombre en la página de inicio (index.html)
  para saber que estoy en la página correcta.
  */
  it('Comprova que el nom apareix a index.html', () => {
    cy.visit('http://127.0.0.1:3000/index.html'); // ajusta el port si cal
    cy.contains('Matthew Antonio Castilla Marapi').should('be.visible');
  });

  /*
  Como usuario interesado en mis proyectos, quiero hacer clic en el enlace a 
  "Projectes" y ver la página con mis repositorios de GitHub.
  */
  it('Comprova que es pot navegar a projectes.html i veure enllaços a GH', () => {
    cy.visit('http://127.0.0.1:3000/index.html');
    cy.contains('Projectes').click();
    cy.url().should('include', 'projectes.html');
    cy.get('a[href*="github.com"]').should('have.length.at.least', 1);
  });

  /*
  Como usuario, quiero que los enlaces a mis proyectos de GitHub se abran en 
  una nueva pestaña para no perder la página principal.
  */
  it('Comprova que tots els enllaços a GitHub tenen target="_blank"', () => {
  cy.visit('http://127.0.0.1:3000/index.html');
  cy.get('a[href*="github.com"]').each(($el) => {
    cy.wrap($el).should('have.attr', 'target', '_blank');
  });
});

});

