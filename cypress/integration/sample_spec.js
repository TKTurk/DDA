const sel = s => `img[alt="${s}"]`

describe('home page', () => {
  it('loads right, rly???', () => {
    cy.visit('http://localhost:8080')
    cy.get(sel('about')).click()
    cy.url().should('not.eq', 'http://localhost:8080/')
    cy.url().should('eq', 'http://localhost:8080/html/about.html')
  })
})
