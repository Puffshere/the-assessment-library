describe('Kids View', () => {
  let testUser

  beforeEach(() => {
    cy.getTestUser().then((user) => {
      testUser = user
      cy.login(user.email, user.password)
    })
  })

  it('shows Kids View toggle in the banner', () => {
    cy.visit('/dashboard')
    cy.get('button.kids-view-banner__toggle').should('exist')
  })

  it('toggling ON prompts PIN creation if no PIN exists', () => {
    cy.visit('/dashboard')
    cy.get('button.kids-view-banner__toggle').click()

    // Should show PIN creation or PIN verify modal
    cy.get('.pin-modal').should('be.visible')
  })

  it('toggling OFF with correct PIN deactivates Kids View', () => {
    // Enable kids mode via API first
    cy.window().its('localStorage').invoke('getItem', 'tal_token').then((token) => {
      cy.request({
        method: 'POST',
        url: '/api/kids-mode/toggle',
        headers: { Authorization: `Bearer ${token}` },
        body: { enabled: true },
        failOnStatusCode: false,
      })
    })

    cy.visit('/dashboard')

    // Verify Kids View is ON
    cy.get('button.kids-view-banner__toggle.is-on').should('exist')

    // Click toggle to turn OFF — verify PIN modal appears
    cy.get('button.kids-view-banner__toggle').click()
    cy.get('.pin-modal').should('be.visible')
    cy.contains('Enter PIN to exit Kids View').should('be.visible')

    // Enter the correct PIN — verify modal uses .verify-real-input
    cy.get('.pin-modal input.verify-real-input').type(testUser.kidsPin)
    cy.get('.verify-confirm-btn').click()

    // Kids View should now be OFF
    cy.get('button.kids-view-banner__toggle.is-on').should('not.exist')
    cy.get('button.kids-view-banner__toggle').should('exist')
    cy.get('button.kids-view-banner__toggle').should('not.have.class', 'is-on')
  })

  it('wrong PIN keeps Kids View active', () => {
    // Enable kids mode via API first
    cy.window().its('localStorage').invoke('getItem', 'tal_token').then((token) => {
      cy.request({
        method: 'POST',
        url: '/api/kids-mode/toggle',
        headers: { Authorization: `Bearer ${token}` },
        body: { enabled: true },
        failOnStatusCode: false,
      })
    })

    cy.visit('/dashboard')

    // Verify Kids View is ON
    cy.get('button.kids-view-banner__toggle.is-on').should('exist')

    // Click toggle to turn OFF
    cy.get('button.kids-view-banner__toggle').click()
    cy.get('.pin-modal').should('be.visible')

    // Enter wrong PIN — verify modal uses .verify-real-input
    cy.get('.pin-modal input.verify-real-input').type('0000')
    cy.get('.verify-confirm-btn').click()

    // Should show error
    cy.get('.pin-error').should('be.visible')

    // Kids View should still be active — cancel uses .verify-cancel-btn
    cy.get('.verify-cancel-btn').click()
    cy.get('button.kids-view-banner__toggle.is-on').should('exist')
  })

  it('Kids View state persists after page refresh', () => {
    // Enable kids mode via API
    cy.window().its('localStorage').invoke('getItem', 'tal_token').then((token) => {
      cy.request({
        method: 'POST',
        url: '/api/kids-mode/toggle',
        headers: { Authorization: `Bearer ${token}` },
        body: { enabled: true },
        failOnStatusCode: false,
      })
    })

    cy.visit('/dashboard')
    cy.get('button.kids-view-banner__toggle.is-on').should('exist')

    // Reload and verify it persists
    cy.reload()
    cy.get('button.kids-view-banner__toggle.is-on').should('exist')

    // Cleanup: disable kids mode
    cy.window().its('localStorage').invoke('getItem', 'tal_token').then((token) => {
      cy.request({
        method: 'POST',
        url: '/api/kids-mode/toggle',
        headers: { Authorization: `Bearer ${token}` },
        body: { enabled: false },
        failOnStatusCode: false,
      })
    })
  })
})
