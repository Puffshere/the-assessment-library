describe('Child Profiles', () => {
  beforeEach(() => {
    cy.getTestUser().then((user) => {
      cy.login(user.email, user.password)
    })
  })

  it('loads the Who\'s Playing screen', () => {
    cy.window().then((win) => win.$nuxt.$router.push('/kids/onboarding'))
    cy.url().should('include', '/kids/onboarding')
    cy.contains('Who\'s Playing?').should('be.visible')
  })

  it('shows existing profiles or add-new-player card', () => {
    cy.window().then((win) => win.$nuxt.$router.push('/kids/onboarding'))
    cy.get('.ko__card', { timeout: 10000 }).should('have.length.greaterThan', 0)
  })

  it('opens the creation wizard when Add New Player is clicked', () => {
    cy.window().then((win) => win.$nuxt.$router.push('/kids/onboarding'))
    cy.get('.ko__card--add', { timeout: 10000 }).click()

    // Step 1: child's real name
    cy.get('.ko__step-title').should('contain', 'name')
    cy.get('.ko__name-input').should('be.visible')
  })

  it('completes all 5 wizard steps', () => {
    cy.window().then((win) => win.$nuxt.$router.push('/kids/onboarding'))

    cy.get('.ko__card--add', { timeout: 10000 }).click()

    // Step 1: Enter child's real name
    const testName = 'CypressTest_' + Date.now()
    cy.contains('What is your name', { timeout: 5000 }).should('be.visible')
    cy.wait(300)
    cy.get('.ko__name-input').should('be.visible').clear().type(testName).trigger('input')
    cy.get('.ko__btn--primary').should('not.be.disabled').click()

    // Wait for Step 2 to render
    cy.contains('Give your character a name', { timeout: 5000 }).should('be.visible')
    cy.wait(300)

    // Step 2: Enter character name
    cy.get('.ko__name-input').should('be.visible').clear().type('TestHero').trigger('input')
    cy.get('.ko__btn--primary').should('not.be.disabled').click()

    // Wait for Step 3 to render
    cy.get('.ko__choices--gender', { timeout: 5000 }).should('be.visible')
    cy.wait(300)

    // Step 3: Select gender
    cy.get('.ko__choice').contains('Boy').click()
    cy.get('.ko__btn--primary').should('not.be.disabled').click()

    // Wait for Step 4 to render
    cy.get('.ko__choices--theme', { timeout: 5000 }).should('be.visible')
    cy.wait(300)

    // Step 4: Select theme
    cy.get('.ko__choice--theme').first().click()
    cy.get('.ko__btn--primary').should('not.be.disabled').click()

    // Wait for Step 5 to render
    cy.contains('Welcome', { timeout: 5000 }).should('be.visible')
    cy.wait(300)

    // Step 5: Confirmation — click Let's Go
    cy.get('.ko__btn--primary').should('not.be.disabled').click()

    // Should navigate to library to pick first quest
    cy.url().should('include', '/library', { timeout: 10000 })

    // Cleanup: delete the test profile via API
    cy.window().its('localStorage').invoke('getItem', 'tal_token').then((token) => {
      if (token) {
        cy.request({
          method: 'GET',
          url: '/api/child-profiles',
          headers: { Authorization: `Bearer ${token}` },
        }).then((res) => {
          const profiles = res.body.profiles || []
          const testProfile = profiles.find((p) => p.childName === testName)
          if (testProfile) {
            cy.request({
              method: 'DELETE',
              url: `/api/child-profiles/${testProfile._id}`,
              headers: { Authorization: `Bearer ${token}` },
            })
          }
        })
      }
    })
  })

  it('clicking a profile navigates to dashboard', () => {
    cy.window().then((win) => win.$nuxt.$router.push('/kids/onboarding'))

    // Wait for profiles to load
    cy.get('.ko__card', { timeout: 10000 }).should('have.length.greaterThan', 0)

    cy.get('body').then(($body) => {
      // Check if there are real profile cards (not just the add-new card)
      if ($body.find('.ko__card:not(.ko__card--add)').length) {
        cy.get('.ko__card:not(.ko__card--add) .ko__card-body').first().click()
        cy.url().should('include', '/dashboard')
      }
    })
  })
})
