describe('Library', () => {
  beforeEach(() => {
    cy.getTestUser().then((user) => {
      cy.login(user.email, user.password)
    })
  })

  it('loads assessments on the library page', () => {
    cy.visit('/library')

    // Should display at least one assessment/book card
    cy.get('.book-card, .assessment-card, [class*="book"], [class*="card"]')
      .should('have.length.greaterThan', 0)
  })

  it('shows assessment titles', () => {
    cy.visit('/library')

    cy.get('h2, h3, [class*="title"]')
      .filter(':visible')
      .should('have.length.greaterThan', 0)
  })

  it('API returns assessments', () => {
    cy.request('/api/assessments').then((res) => {
      expect(res.status).to.eq(200)
      const assessments = res.body.assessments || res.body
      expect(assessments).to.be.an('array')
      expect(assessments.length).to.be.greaterThan(0)
    })
  })

  it('library page loads without errors', () => {
    cy.visit('/library')
    cy.get('body').should('be.visible')
    cy.contains(/library/i).should('exist')
  })
})
