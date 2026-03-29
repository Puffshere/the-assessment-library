describe('Authentication', () => {
  beforeEach(() => {
    cy.visit('/auth/login')
  })

  it('logs in with valid credentials', () => {
    cy.getTestUser().then((user) => {
      cy.get('#email').type(user.email)
      cy.get('#password').type(user.password)
      cy.get('button[type="submit"]').click()

      cy.url().should('not.include', '/auth/login')
      cy.window().its('localStorage').invoke('getItem', 'tal_logged_in').should('eq', '1')
      cy.window().its('localStorage').invoke('getItem', 'tal_token').should('not.be.null')
    })
  })

  it('shows error for wrong password', () => {
    cy.getTestUser().then((user) => {
      cy.get('#email').type(user.email)
      cy.get('#password').type('wrongpassword123')
      cy.get('button[type="submit"]').click()

      cy.url().should('include', '/auth/login')
      cy.get('p.error-msg').should('be.visible')
    })
  })

  it('logs out and redirects to login', () => {
    cy.getTestUser().then((user) => {
      cy.login(user.email, user.password)
      cy.visit('/dashboard')

      cy.contains('button', 'Sign Out').click()

      cy.url().should('eq', Cypress.config('baseUrl') + '/')
      cy.window().its('localStorage').invoke('getItem', 'tal_token').should('be.null')
    })
  })
})
