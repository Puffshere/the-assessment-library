export default ({ store }) => {
  try {
    store.dispatch('initFromStorage')
  } catch (err) {
    console.error('auth-state plugin init failed:', err)
  }
}
