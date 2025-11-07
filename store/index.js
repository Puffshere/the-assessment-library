export const state = () => ({
  loggedIn: false
})

export const mutations = {
  SET_LOGGED_IN (state, val) {
    state.loggedIn = !!val
  }
}

export const actions = {
  // hydrate from localStorage on client
  nuxtClientInit ({ commit }) {
    if (process.client) {
      const saved = localStorage.getItem('tal_logged_in')
      if (saved === '1') commit('SET_LOGGED_IN', true)
    }
  },
  login ({ commit }) {
    commit('SET_LOGGED_IN', true)
    if (process.client) localStorage.setItem('tal_logged_in', '1')
  },
  logout ({ commit }) {
    commit('SET_LOGGED_IN', false)
    if (process.client) localStorage.removeItem('tal_logged_in')
  }
}
