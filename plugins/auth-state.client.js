export default ({ store }) => {
  // Defer auth restoration until AFTER Vue hydration completes.
  // If we modify the store (loggedIn = true) before hydration, the client
  // state won't match the SSR-rendered HTML (loggedIn = false), and Vue 2
  // silently fails to attach event handlers — leaving a dead page.
  window.onNuxtReady(() => {
    try {
      store.dispatch('initFromStorage')
    } catch (err) {
      console.error('auth-state plugin init failed:', err)
    }
  })
}
