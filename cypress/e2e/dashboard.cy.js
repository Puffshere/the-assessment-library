describe('Dashboard', () => {
  beforeEach(() => {
    cy.getTestUser().then((user) => {
      cy.login(user.email, user.password)
    })
  })

  it('loads the standard dashboard with correct tabs', () => {
    cy.window().then((win) => win.$nuxt.$router.push('/dashboard'))

    cy.contains('.results-tab', '1st Person', { timeout: 10000 }).should('be.visible')
    cy.contains('.results-tab', '3rd Person').should('be.visible')
    cy.contains('.results-tab', 'For Others').should('be.visible')
  })

  it('shows Account Overview panel in standard view', () => {
    cy.window().then((win) => win.$nuxt.$router.push('/dashboard'))

    cy.contains('Account Overview', { timeout: 10000 }).should('be.visible')
    cy.contains('Available Credits').should('be.visible')
  })

  it('shows Your Assessments panel', () => {
    cy.window().then((win) => win.$nuxt.$router.push('/dashboard'))

    // In standard view it says "Your Assessments", in Kids View "Your Quests"
    cy.contains(/Your Assessments|Your Quests/, { timeout: 10000 }).should('be.visible')
  })

  it('tabs switch content when clicked', () => {
    cy.window().then((win) => win.$nuxt.$router.push('/dashboard'))

    cy.contains('.results-tab', '3rd Person', { timeout: 10000 }).first().click()
    cy.get('.results-tab.is-active').should('contain', '3rd Person')

    cy.contains('.results-tab', '1st Person').click()
    cy.get('.results-tab.is-active').should('contain', '1st Person')
  })

  it('Kids View dashboard shows child name tabs and Players tab', () => {
    cy.window().its('localStorage').invoke('getItem', 'tal_token').then((token) => {
      if (!token) return

      cy.request({
        method: 'GET',
        url: '/api/child-profiles',
        headers: { Authorization: `Bearer ${token}` },
      }).then((res) => {
        const profiles = res.body.profiles || []
        if (!profiles.length) return

        // Enable kids mode via API
        cy.request({
          method: 'POST',
          url: '/api/kids-mode/toggle',
          headers: { Authorization: `Bearer ${token}` },
          body: { enabled: true },
          failOnStatusCode: false,
        }).then(() => {
          // Use client-side navigation to avoid SSR auth redirect
          cy.window().then((win) => win.$nuxt.$router.push('/dashboard'))

          // Wait for kids mode to be reflected — the store fetches /api/auth/me on init
          // which sets kidsViewActive; force a reload of the Vuex state
          cy.window().then((win) => {
            win.$nuxt.$store.commit('SET_KIDS_VIEW_ACTIVE', true)
          })

          cy.get('[data-cy="child-profile-tab"]', { timeout: 10000 }).should('have.length.greaterThan', 0)

          // Should show child name tabs
          profiles.forEach((p) => {
            cy.contains('[data-cy="child-profile-tab"]', p.childName).should('exist')
          })

          // Should show Players tab
          cy.get('[data-cy="players-tab"]').should('be.visible')
          cy.get('[data-cy="players-tab"]').should('contain', 'Players')

          // Restore: disable kids mode
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
  })

  it('character card shows locked state before assessments', () => {
    cy.window().its('localStorage').invoke('getItem', 'tal_token').then((token) => {
      if (!token) return

      cy.request({
        method: 'GET',
        url: '/api/child-profiles',
        headers: { Authorization: `Bearer ${token}` },
      }).then((res) => {
        const profiles = res.body.profiles || []
        const noAssessments = profiles.find(
          (p) => !p.completedAssessments || p.completedAssessments.length === 0
        )
        if (!noAssessments) return

        // Enable kids mode
        cy.request({
          method: 'POST',
          url: '/api/kids-mode/toggle',
          headers: { Authorization: `Bearer ${token}` },
          body: { enabled: true },
          failOnStatusCode: false,
        }).then(() => {
          cy.window().then((win) => {
            win.$nuxt.$store.commit('SET_KIDS_VIEW_ACTIVE', true)
            win.$nuxt.$router.push('/dashboard')
          })

          cy.get('[data-cy="child-profile-tab"]', { timeout: 10000 }).should('have.length.greaterThan', 0)

          // Click the child tab with no assessments
          cy.contains('[data-cy="child-profile-tab"]', noAssessments.childName).click()

          // Should show locked state text
          cy.contains(/Adventure awaits|Complete a story/i, { timeout: 5000 }).should('be.visible')

          // Restore
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
  })

  it('Your Adventure card shows progress bar in Kids View', () => {
    cy.window().its('localStorage').invoke('getItem', 'tal_token').then((token) => {
      if (!token) return

      cy.request({
        method: 'GET',
        url: '/api/child-profiles',
        headers: { Authorization: `Bearer ${token}` },
      }).then((res) => {
        const profiles = res.body.profiles || []
        if (!profiles.length) return

        // Enable kids mode
        cy.request({
          method: 'POST',
          url: '/api/kids-mode/toggle',
          headers: { Authorization: `Bearer ${token}` },
          body: { enabled: true },
          failOnStatusCode: false,
        }).then(() => {
          cy.window().then((win) => {
            win.$nuxt.$store.commit('SET_KIDS_VIEW_ACTIVE', true)
            win.$nuxt.$router.push('/dashboard')
          })

          cy.get('[data-cy="child-profile-tab"]', { timeout: 10000 }).should('have.length.greaterThan', 0)

          cy.contains('Your Adventure', { timeout: 5000 }).should('be.visible')

          // Should show progress bar or background button
          cy.get('body').then(($body) => {
            const text = $body.text()
            const hasProgress = text.includes('stories complete')
            const hasUnlock = text.includes('Choose a Background') ||
                              text.includes('Change Background')
            expect(hasProgress || hasUnlock).to.be.true
          })

          // Restore
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
  })
})
