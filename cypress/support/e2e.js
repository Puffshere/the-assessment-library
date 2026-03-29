// Custom command: login via API and persist auth token in localStorage
// Visits the home page to establish the origin, sets tokens, then waits
// for the Nuxt client to hydrate and recognize the auth state.
Cypress.Commands.add('login', (email, password) => {
  cy.request('POST', '/api/auth/login', { email, password }).then((res) => {
    const { token } = res.body
    // Visit home to establish origin and let Nuxt boot
    cy.visit('/', { failOnStatusCode: false })
    cy.window().then((win) => {
      win.localStorage.setItem('tal_logged_in', '1')
      win.localStorage.setItem('tal_token', token)
    })
    // Reload so the Nuxt client plugin picks up the token from localStorage
    // and sets the Vuex auth state before any middleware runs
    cy.reload()
    // Wait for the app to hydrate with auth state
    cy.contains('Sign Out', { timeout: 10000 }).should('exist')
  })
})

// Custom command: login and navigate to a specific page (client-side)
// Use this when visiting auth-protected pages to avoid SSR redirect
Cypress.Commands.add('loginAndVisit', (email, password, path) => {
  cy.login(email, password)
  // Use client-side navigation by clicking a link or using the window
  cy.window().then((win) => {
    win.$nuxt.$router.push(path)
  })
  cy.url().should('include', path)
})

// Custom command: load fixture credentials
Cypress.Commands.add('getTestUser', () => {
  return cy.fixture('testUser')
})
