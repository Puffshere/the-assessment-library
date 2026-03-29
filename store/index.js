export const state = () => ({
  loggedIn: false,
  user: null,
  token: null,

  sessionsByAssessmentId: {},

  kidsViewActive: false,
  activeChildProfile: null
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
  },

  SET_CREDITS(state, balance) {
    if (state.user) {
      state.user = { ...state.user, creditsBalance: balance }
    }
  },

  SET_SESSION_FOR_ASSESSMENT(state, { assessmentId, session }) {
    state.sessionsByAssessmentId = {
      ...state.sessionsByAssessmentId,
      [assessmentId]: session
    }
  },

  CLEAR_SESSIONS(state) {
    state.sessionsByAssessmentId = {}
  },

  SET_HAS_KIDS_PIN(state, val) {
    if (state.user) {
      state.user = { ...state.user, has_kids_pin: !!val }
    }
  },

  SET_KIDS_VIEW_ACTIVE(state, val) {
    state.kidsViewActive = !!val
  },

  SET_ACTIVE_CHILD_PROFILE(state, profile) {
    state.activeChildProfile = profile
  }
}

function restoreAuthFromStorage({ commit, dispatch }, axiosInstance) {
  if (!process.client) return
  const savedFlag  = localStorage.getItem('tal_logged_in')
  const savedToken = localStorage.getItem('tal_token')
  if (savedToken || savedFlag === '1') {
    commit('SET_LOGGED_IN', true)
    commit('SET_TOKEN', savedToken)
    if (savedToken) {
      axiosInstance.setToken(savedToken, 'Bearer')
      dispatch('fetchMe')
    }
  }
}

export const actions = {
  nuxtClientInit({ commit, dispatch }) {
    restoreAuthFromStorage({ commit, dispatch }, this.$axios)
  },

  initFromStorage({ commit, dispatch }) {
    restoreAuthFromStorage({ commit, dispatch }, this.$axios)
  },

  async fetchMe({ commit }) {
    try {
      const res = await this.$axios.$get('/api/auth/me')
      commit('SET_USER', res.user)
      commit('SET_KIDS_VIEW_ACTIVE', res.user.kids_mode_enabled)
    } catch (err) {
      // Token is invalid/expired — log out
      commit('SET_LOGGED_IN', false)
      commit('SET_USER', null)
      commit('SET_TOKEN', null)
      commit('SET_KIDS_VIEW_ACTIVE', false)
      this.$axios.setToken(false)
      if (process.client) {
        localStorage.removeItem('tal_logged_in')
        localStorage.removeItem('tal_token')
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
      commit('SET_KIDS_VIEW_ACTIVE', res.user.kids_mode_enabled)

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

  async register({ commit }, { name, email, password, participantId, invitationId }) {
    try {
      const res = await this.$axios.$post('/api/auth/register', {
        name,
        email,
        password,
        ...(participantId && invitationId ? { participantId, invitationId } : {})
      })

      commit('SET_LOGGED_IN', true)
      commit('SET_USER', res.user)
      commit('SET_TOKEN', res.token)
      commit('SET_KIDS_VIEW_ACTIVE', res.user.kids_mode_enabled)

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
    commit('CLEAR_SESSIONS')
    commit('SET_KIDS_VIEW_ACTIVE', false)
    commit('SET_ACTIVE_CHILD_PROFILE', null)

    this.$axios.setToken(false)

    if (process.client) {
      localStorage.removeItem('tal_logged_in')
      localStorage.removeItem('tal_token')
    }
  }
}