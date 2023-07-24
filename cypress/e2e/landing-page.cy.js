describe('homepage user flow', () => {
  beforeEach(() => {
    cy.intercept('GET', 'http://localhost:3001/api/v1/tricks', {
      statusCode: 200,
      fixture: 'trickInfo.json'
    })
    .visit('http://localhost:3000')
  })

  it('should display title, form elements, and existing cards', () => {
    cy.contains('h1', 'Sick Trick Wish List')
    cy.get('.form-container')
    cy.get('.trick-submission')
    cy.get('.trick-name-input')
    cy.get('.obstacle-selector')
    cy.get('.tutorial-link-input')
    cy.get('button')
    cy.get('.trick-cards-container').children()
      .should('have.length', 3)
  })
})