// Safari Private Browsing throws on localStorage access
function safeGetItem(key) {
  try { return window.localStorage.getItem(key) } catch { return null }
}
function safeSetItem(key, val) {
  try { window.localStorage.setItem(key, val) } catch { /* ignore */ }
}
function safeRemoveItem(key) {
  try { window.localStorage.removeItem(key) } catch { /* ignore */ }
}

export const state = () => ({
  loggedIn: false,
  user: null,

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
      safeSetItem('tal_kids_view_active', val ? '1' : '0')
    }
  },

  SET_ACTIVE_CHILD_PROFILE(state, profile) {
    state.activeChildProfile = profile
    if (process.client) {
      if (profile && profile._id) {
        safeSetItem('tal_active_child_id', profile._id)
      } else {
        safeRemoveItem('tal_active_child_id')
      }
    }
  }
}

export const actions = {
  async nuxtServerInit({ commit }, { req, $axios }) {
    // Server-side only — runs before middleware on every full-page request
    if (!req || !req.headers || !req.headers.cookie) return

    const cookieHeader = req.headers.cookie
    const tokenMatch = cookieHeader.match(/tal_token=([^;]+)/)
    if (!tokenMatch) return

    try {
      // Forward the cookie header to the API call so /api/auth/me sees the same cookie
      const res = await $axios.$get('/api/auth/me', {
        headers: { cookie: cookieHeader }
      })

      if (res && res.user) {
        commit('SET_LOGGED_IN', true)
        commit('SET_USER', res.user)
        commit('SET_KIDS_VIEW_ACTIVE', !!res.user.kids_mode_enabled)
      }
    } catch (err) {
      // Invalid/expired cookie or API error — leave Vuex in default unauthenticated state.
      // The middleware will redirect to login if necessary, which is correct behavior.
    }
  },

  async fetchMe({ commit, dispatch, state }) {
    // Remember whether we're logged in so we can bail out
    // if logout fired while this request was in-flight.
    const loggedInAtStart = state.loggedIn
    try {
      const res = await this.$axios.$get('/api/auth/me')
      if (state.loggedIn !== loggedInAtStart) return // logout happened — discard
      commit('SET_USER', res.user)
      commit('SET_KIDS_VIEW_ACTIVE', res.user.kids_mode_enabled)

      // Restore active child profile if kids mode is on and we have a saved child ID
      if (res.user.kids_mode_enabled && process.client) {
        const savedChildId = safeGetItem('tal_active_child_id')
        if (savedChildId) {
          dispatch('restoreChildProfile', savedChildId)
        }
      }
    } catch (err) {
      if (state.loggedIn !== loggedInAtStart) return

      // Only clear auth state on a genuine 401 (cookie actually invalid/expired).
      // Network errors, 500s, timeouts, etc. should leave auth state alone —
      // the user might just have a transient connectivity issue.
      const status = err && err.response && err.response.status
      if (status !== 401) {
        console.warn('fetchMe failed with non-401 error, keeping auth state:', status, err && err.message)
        return
      }

      commit('SET_LOGGED_IN', false)
      commit('SET_USER', null)
      commit('SET_KIDS_VIEW_ACTIVE', false)
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
      commit('SET_KIDS_VIEW_ACTIVE', res.user.kids_mode_enabled)

      // Restore active child profile if kids mode is on
      if (process.client && res.user.kids_mode_enabled) {
        const savedChildId = safeGetItem('tal_active_child_id')
        if (savedChildId) {
          dispatch('restoreChildProfile', savedChildId)
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
      commit('SET_KIDS_VIEW_ACTIVE', res.user.kids_mode_enabled)

      return res
    } catch (err) {
      const msg = err?.response?.data?.message || 'Registration failed'
      throw new Error(msg)
    }
  },

  async logout({ commit, state }) {
    try {
      await this.$axios.$post('/api/auth/logout')
    } catch (err) {
      // Best-effort — proceed with client cleanup even if the API call fails
      console.warn('Logout API call failed:', err)
    }

    // Preserve the active child ID so it can be restored on next login
    const keepChildId = state.activeChildProfile && state.activeChildProfile._id
    const wasKidsView = state.kidsViewActive

    commit('SET_LOGGED_IN', false)
    commit('SET_USER', null)
    commit('CLEAR_SESSIONS')
    commit('SET_KIDS_VIEW_ACTIVE', false)
    commit('SET_ACTIVE_CHILD_PROFILE', null)

    if (process.client) {
      // In kids view, preserve which child tab was active for next login.
      // In standard view, always reset to "all" (parent account).
      if (wasKidsView && keepChildId) {
        safeSetItem('tal_dashboard_profile', keepChildId)
        safeSetItem('tal_active_child_id', keepChildId)
      } else {
        safeSetItem('tal_dashboard_profile', 'all')
        safeRemoveItem('tal_active_child_id')
      }

      // Remember if kids view was active so login can redirect appropriately
      if (wasKidsView) {
        safeSetItem('tal_was_kids_view', '1')
      } else {
        safeRemoveItem('tal_was_kids_view')
      }
    }
  }
}
