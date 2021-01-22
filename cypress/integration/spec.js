it('loads', () => {
    cy.visit('/')})

it('has expected state on load', () => {
  cy.visit('/')
  cy.window().its('store').invoke('getState').should('deep.equal', {
      campaigns : [],
      users : ''
  })
})
