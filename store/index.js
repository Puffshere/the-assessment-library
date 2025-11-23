export const state = () => ({
  loggedIn: false,
  user: null,
  token: null
})

export const mutations = {
  SET_LOGGED_IN(state, val) {
    state.loggedIn = !!val
  },
  SET_USER(state, user) {
    state.user = user
  },
  SET_TOKEN(state, token) {
    state.token = token
  }
}

export const actions = {
  nuxtClientInit({ commit }) {
    if (process.client) {
      const savedFlag = localStorage.getItem('tal_logged_in')
      const savedToken = localStorage.getItem('tal_token')

      if (savedToken || savedFlag === '1') {
        commit('SET_LOGGED_IN', true)
        commit('SET_TOKEN', savedToken)

        if (savedToken) {
          this.$axios.setToken(savedToken, 'Bearer')
        }
      }
    }
  },
  async login({ commit }, { email, password }) {
    try {
      const res = await this.$axios.$post('/api/auth/login', {
        email,
        password
      })

      commit('SET_LOGGED_IN', true)
      commit('SET_USER', res.user)
      commit('SET_TOKEN', res.token)

      this.$axios.setToken(res.token, 'Bearer')

      if (process.client) {
        localStorage.setItem('tal_logged_in', '1')
        localStorage.setItem('tal_token', res.token)
      }

      return res
    } catch (err) {
      const msg = err?.response?.data?.message || 'Login failed'
      throw new Error(msg)
    }
  },
  async register({ commit }, { name, email, password }) {
    try {
      const res = await this.$axios.$post('/api/auth/register', {
        name,
        email,
        password
      })

      commit('SET_LOGGED_IN', true)
      commit('SET_USER', res.user)
      commit('SET_TOKEN', res.token)

      this.$axios.setToken(res.token, 'Bearer')

      if (process.client) {
        localStorage.setItem('tal_logged_in', '1')
        localStorage.setItem('tal_token', res.token)
      }

      return res
    } catch (err) {
      const msg = err?.response?.data?.message || 'Registration failed'
      throw new Error(msg)
    }
  },
  logout({ commit }) {
    commit('SET_LOGGED_IN', false)
    commit('SET_USER', null)
    commit('SET_TOKEN', null)

    this.$axios.setToken(false)

    if (process.client) {
      localStorage.removeItem('tal_logged_in')
      localStorage.removeItem('tal_token')
    }
  }
}