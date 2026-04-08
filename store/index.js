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
    if (process.client) {
      localStorage.setItem('tal_kids_view_active', val ? '1' : '0')
    }
  },

  SET_ACTIVE_CHILD_PROFILE(state, profile) {
    state.activeChildProfile = profile
    if (process.client) {
      if (profile && profile._id) {
        localStorage.setItem('tal_active_child_id', profile._id)
      } else {
        localStorage.removeItem('tal_active_child_id')
      }
    }
  }
}

function restoreAuthFromStorage({ commit, dispatch }, axiosInstance) {
  if (!process.client) return
  const savedFlag  = localStorage.getItem('tal_logged_in')
  const savedToken = localStorage.getItem('tal_token')
  if (savedToken || savedFlag === '1') {
    commit('SET_LOGGED_IN', true)
    commit('SET_TOKEN', savedToken)

    // Restore kids view state immediately so the dashboard renders
    // the correct view before fetchMe resolves
    if (localStorage.getItem('tal_kids_view_active') === '1') {
      commit('SET_KIDS_VIEW_ACTIVE', true)
    }

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

  async fetchMe({ commit, dispatch }) {
    try {
      const res = await this.$axios.$get('/api/auth/me')
      commit('SET_USER', res.user)
      commit('SET_KIDS_VIEW_ACTIVE', res.user.kids_mode_enabled)

      // Restore active child profile if kids mode is on and we have a saved child ID
      if (res.user.kids_mode_enabled && process.client) {
        const savedChildId = localStorage.getItem('tal_active_child_id')
        if (savedChildId) {
          dispatch('restoreChildProfile', savedChildId)
        }
      }
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

  async restoreChildProfile({ commit }, childId) {
    try {
      const res = await this.$axios.$get('/api/child-profiles')
      const profiles = res.profiles || res || []
      const match = profiles.find(p => (p._id || p.id) === childId)
      if (match) {
        commit('SET_ACTIVE_CHILD_PROFILE', match)
      }
    } catch (err) {
      console.error('Error restoring child profile:', err)
    }
  },

  async login({ commit, dispatch }, { email, password }) {
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

        // Restore active child profile if kids mode is on
        if (res.user.kids_mode_enabled) {
          const savedChildId = localStorage.getItem('tal_active_child_id')
          if (savedChildId) {
            dispatch('restoreChildProfile', savedChildId)
          }
        }
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

  logout({ commit, state }) {
    // Preserve the active child ID so it can be restored on next login
    const keepChildId = state.activeChildProfile && state.activeChildProfile._id

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
      // Restore the child ID so it survives logout/login cycle
      if (keepChildId) {
        localStorage.setItem('tal_active_child_id', keepChildId)
      }
    }
  }
}