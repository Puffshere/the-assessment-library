// store/index.js
export const state = () => ({
  loggedIn: false,
  user: null,
  token: null
})

export const mutations = {
  SET_LOGGED_IN (state, val) {
    state.loggedIn = !!val
  },
  SET_USER (state, user) {
    state.user = user
  },
  SET_TOKEN (state, token) {
    state.token = token
  }
}

export const actions = {
  nuxtClientInit ({ commit }) {
    if (process.client) {
      // old flag support (if you used it before)
      const savedFlag = localStorage.getItem('tal_logged_in')
      const savedToken = localStorage.getItem('tal_token')

      if (savedToken || savedFlag === '1') {
        commit('SET_LOGGED_IN', true)
        commit('SET_TOKEN', savedToken)
        // later we can add a /me endpoint to restore user details
      }
    }
  },

  async login ({ commit }, { email, password }) {
    try {
      const res = await this.$axios.$post('/api/auth/login', {
        email,
        password
      })

      // Update Vuex
      commit('SET_LOGGED_IN', true)
      commit('SET_USER', res.user)
      commit('SET_TOKEN', res.token)

      // Persist to localStorage
      if (process.client) {
        localStorage.setItem('tal_logged_in', '1')
        localStorage.setItem('tal_token', res.token)
      }

      // Return something if the component wants it
      return res
    } catch (err) {
      const msg = err?.response?.data?.message || 'Login failed'
      throw new Error(msg)
    }
  },

  logout ({ commit }) {
    commit('SET_LOGGED_IN', false)
    commit('SET_USER', null)
    commit('SET_TOKEN', null)

    if (process.client) {
      localStorage.removeItem('tal_logged_in')
      localStorage.removeItem('tal_token')
    }
  }
}
