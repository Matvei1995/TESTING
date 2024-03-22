describe('check Example spec', () => {
  it('y a le mot example', () => {
    cy.visit('https://www.example.com');
    cy.contains('Example Domain')  })
})