describe('homepage user flow', () => {
  beforeEach(() => {
    cy.intercept('GET', 'http://localhost:3001/api/v1/tricks', {
      statusCode: 200,
      fixture: 'trickInfo.json'
    })
    .visit('http://localhost:3000')
  })

  it('should display title, form, and existing cards', () => {
    cy.contains('h1', 'Sick Trick Wish List')
    cy.get('.form-container')
      .contains('form > :nth-child(1)')
  })
})