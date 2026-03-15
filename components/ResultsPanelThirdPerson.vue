<template>
  <div class="tp-root">
  <div class="panel panel-wide">

    <!-- ══════════════════════════════════════════════
         TAB 2 — HOW OTHERS SEE YOU
    ══════════════════════════════════════════════ -->
    <template v-if="activeView === 'second'">
      <div class="results-header">
        <h2 class="panel-title">How Others See You</h2>
        <p v-if="thirdPersonTopTrait" class="overall-top-trait"
          :style="{ color: traitColor(thirdPersonTopTrait) }">
          <span class="overall-top-label">Perceived Dominant Trait:</span><br />
          <span class="overall-top-name">{{ traitTitle(thirdPersonTopTrait) }}</span>
        </p>

        <!-- Assessment filter dropdown -->
        <div v-if="allInvitedAssessments.length" class="category-dropdown">
          <button class="dropdown-button" @click="thirdPersonDropdownOpen = !thirdPersonDropdownOpen"
            :style="{ backgroundColor: thirdPersonTopTrait ? traitColor(thirdPersonTopTrait) : '#143180' }">
            {{ selectedAssessmentLabel }}
            <span class="arrow">▾</span>
          </button>
          <div v-if="thirdPersonDropdownOpen" class="dropdown-menu">
            <div class="group">
              <div class="top" @click="pickAssessmentFilter('all')">All assessments</div>
              <div class="group-label">Assessments</div>
              <div
                v-for="a in allInvitedAssessments"
                :key="a.slug"
                class="item"
                @click="pickAssessmentFilter(a.slug)"
              >
                {{ a.title }}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="panel-body">
        <div class="confidence-slot" style="width: 280px;">
          <ConfidenceBar :value="thirdPersonConfidence" />
        </div>

        <div class="overall-layout">
          <div v-if="thirdPersonAggregateBreakdown" class="overall-chart">
            <div class="chart">
              <div class="bar" :style="{ height: aggD + '%', backgroundColor: '#f44336' }"
                :title="'D: ' + aggD.toFixed(1) + '%'">
                <div class="value">{{ aggD.toFixed(1) }}%</div>
                <div class="label">D</div>
              </div>
              <div class="bar" :style="{ height: aggI + '%', backgroundColor: '#ffbd05' }"
                :title="'I: ' + aggI.toFixed(1) + '%'">
                <div class="value">{{ aggI.toFixed(1) }}%</div>
                <div class="label">I</div>
              </div>
              <div class="bar" :style="{ height: aggS + '%', backgroundColor: '#0dab49' }"
                :title="'S: ' + aggS.toFixed(1) + '%'">
                <div class="value">{{ aggS.toFixed(1) }}%</div>
                <div class="label">S</div>
              </div>
              <div class="bar" :style="{ height: aggC + '%', backgroundColor: '#1666ff' }"
                :title="'C: ' + aggC.toFixed(1) + '%'">
                <div class="value">{{ aggC.toFixed(1) }}%</div>
                <div class="label">C</div>
              </div>
            </div>
          </div>
          <p v-else class="no-data">
            No one has completed an assessment for you yet.<br />
            Add participants on the "3rd Person Participants" tab and invite them.
          </p>

          <h6 class="overall-meta">
            <p>
              Invited:
              <span style="font-size: 24px; margin-left: 10px;">{{ totalInvitationCount }}</span>
            </p>
            <p>
              Completed:
              <span style="font-size: 24px; margin-left: 10px;">{{ completedInvitations.length }}</span>
            </p>
            <p>
              Outstanding:
              <span style="font-size: 24px; margin-left: 10px; color: #ffbd05;">{{ outstandingInvitationCount }}</span>
            </p>
          </h6>
        </div>

        <!-- Comparison button -->
        <div v-if="selectedAssessmentFilter !== 'all' && thirdPersonAggregateBreakdown && firstPersonBreakdownForFilter" class="comparison-btn-wrap">
          <button class="blue small" @click="showComparisonModal = true">
            View 1st vs. 3rd Person Breakdown
          </button>
        </div>

        <!-- Generate Full Report button -->
        <div class="gr-trigger-wrap">
          <button class="gr-trigger-btn" @click="showReportModal = true">
            Generate Full Report
          </button>
        </div>
      </div>

    </template>

    <!-- ══════════════════════════════════════════════
         TAB 3 — PARTICIPANT MANAGEMENT
    ══════════════════════════════════════════════ -->
    <template v-else>

      <!-- HEADER -->
      <div class="participants-header">
        <h2 class="panel-title">Participants</h2>
        <button class="blue small add-btn" @click="toggleAddForm">
          {{ showAddForm ? 'Cancel' : '+ Add Participant' }}
        </button>
      </div>

      <!-- ADD FORM (collapsible) -->
      <div v-if="showAddForm" class="add-form">
        <div class="add-form-fields">
          <input v-model="addForm.name" placeholder="Name" class="add-input" />
          <input v-model="addForm.email" type="email" placeholder="Email address" class="add-input" />
          <button class="blue small" @click="saveParticipant" :disabled="addLoading">
            {{ addLoading ? 'Saving...' : 'Save' }}
          </button>
        </div>
        <p v-if="addError" class="form-error">{{ addError }}</p>
      </div>

      <!-- PARTICIPANTS BODY (scrollable) -->
      <div class="participants-body">
        <div v-if="loading" class="status-msg">Loading participants...</div>

        <div v-else-if="!participants.length" class="status-msg empty">
          <p>No participants yet.</p>
          <p>Add someone above to invite them to take an assessment.</p>
        </div>

        <ul v-else class="participant-list">
          <li v-for="p in participants" :key="p._id" class="participant-row">
            <div class="participant-info">
              <div class="participant-name">{{ p.name }}</div>
              <div class="participant-email">{{ p.email }}</div>
              <div v-if="p.invitations && p.invitations.length" class="inv-badges">
                <template v-for="inv in p.invitations">
                  <span
                    :key="inv._id + '-status'"
                    class="inv-badge"
                    :style="{ backgroundColor: statusColor(inv.status) }"
                  >
                    {{ inv.assessmentTitle }}: {{ statusLabel(inv.status) }}
                  </span>
                  <span
                    v-if="inv.status === 'completed' && confidenceScore(inv) !== null"
                    :key="inv._id + '-confidence'"
                    class="inv-badge confidence-badge"
                    :style="{ backgroundColor: '#12304d' }"
                    :title="`Confidence: how well ${p.name} perceived your style`"
                  >
                    {{ confidenceScore(inv) }}% match
                  </span>
                </template>
              </div>
            </div>
            <button class="outline small invite-btn" @click="openInvite(p)">Invite</button>
          </li>
        </ul>
      </div>

    </template>
  </div><!-- end .panel-wide -->

  <!-- COMPARISON MODAL — outside panel to avoid stacking context issues -->
  <div v-if="showComparisonModal" class="modal-backdrop" @click.self="showComparisonModal = false">
    <div class="invite-modal comparison-modal">
      <h3 class="modal-title">1st vs. 3rd Person Breakdown</h3>
      <p class="modal-subtitle">How you actually scored vs. how others perceived you would score on <strong>{{ selectedAssessmentLabel }}</strong>.</p>
      <table class="comparison-table">
        <thead>
          <tr>
            <th>Trait</th>
            <th>Your Score</th>
            <th>Others' Perception</th>
            <th>Difference</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="t in ['D', 'I', 'S', 'C']" :key="t">
            <td class="trait-cell" :style="{ color: traitColor(t), fontWeight: 700 }">{{ t }}</td>
            <td>{{ firstPersonBreakdownForFilter[t].toFixed(1) }}%</td>
            <td>{{ thirdPersonAggregateBreakdown[t].toFixed(1) }}%</td>
            <td :style="{ color: traitDiffColor(t), fontWeight: 600 }">
              {{ traitDiff(t) > 0 ? '+' : '' }}{{ traitDiff(t).toFixed(1) }}%
            </td>
          </tr>
        </tbody>
      </table>
      <p class="comparison-note">
        Perception accuracy:
        <strong :style="{ color: perceptionAccuracyColor }">{{ perceptionAccuracy }}%</strong>
        — how closely others' answers matched your own.
      </p>
      <div class="modal-actions" style="margin-top: 20px;">
        <button class="outline small" @click="showComparisonModal = false">Close</button>
      </div>
    </div>
  </div>

  <!-- INVITE MODAL — outside panel to avoid stacking context issues -->
  <div v-if="inviteTarget" class="modal-backdrop" @click.self="closeInvite">
    <div class="invite-modal">
      <h3 class="modal-title">Invite {{ inviteTarget.name }}</h3>
      <p class="modal-subtitle">Select one of your completed assessments:</p>
      <select v-model="inviteSlug" class="modal-select">
        <option value="" disabled>Choose an assessment...</option>
        <option
          v-for="s in uniqueCompletedSessions"
          :key="s.assessmentSlug"
          :value="s.assessmentSlug"
        >
          {{ s.assessmentTitle }}
        </option>
      </select>
      <p v-if="noCompletedSessions" class="form-error">
        You need to complete an assessment before you can invite someone.
      </p>
      <div class="modal-actions">
        <button
          class="blue small"
          @click="sendInvite"
          :disabled="!inviteSlug || inviteLoading"
        >
          {{ inviteLoading ? 'Sending...' : 'Send Invite' }}
        </button>
        <button class="outline small" @click="closeInvite">Cancel</button>
      </div>
      <p v-if="inviteError" class="form-error">{{ inviteError }}</p>
    </div>
  </div>

  <!-- Report modal — inside .tp-root so template has one root element -->
  <GenerateReportModal
    v-if="showReportModal"
    :first-person-confidence="0"
    :third-person-confidence="thirdPersonConfidence"
    :fully-confident-individuals="fullyConfidentIndividuals"
    @close="showReportModal = false"
  />

  </div><!-- end .tp-root -->
</template>

<script>
const TRAIT_TITLES = {
  D: 'Dominance (D)',
  I: 'Influence (I)',
  S: 'Steadiness (S)',
  C: 'Conscientiousness (C)'
}

const TRAIT_COLORS = {
  D: '#f44336',
  I: '#ffbd05',
  S: '#0dab49',
  C: '#1666ff'
}

export default {
  name: 'ResultsPanelThirdPerson',
  components: {
    'ConfidenceBar': () => import('@/components/ConfidenceMeter.vue'),
    'GenerateReportModal': () => import('@/components/GenerateReportModal.vue')
  },
  props: {
    activeView: {
      type: String,
      default: 'third'
    },
    completedSessions: {
      type: Array,
      default: () => []
    },
    selectedResult: {
      type: Object,
      default: null
    },
    sessions: {
      type: Array,
      default: () => []
    },
    assessmentsStarted: {
      type: Number,
      default: 0
    },
    assessmentsCompleted: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      participants: [],
      loading: true,
      selectedAssessmentFilter: 'all',
      thirdPersonDropdownOpen: false,
      showComparisonModal: false,
      showAddForm: false,
      addForm: { name: '', email: '' },
      addLoading: false,
      addError: null,
      inviteTarget: null,
      inviteSlug: '',
      inviteLoading: false,
      inviteError: null,
      showReportModal: false
    }
  },
  computed: {
    // ── "How Others See You" computed ──────────────────────────────────────
    allInvitedAssessments() {
      const map = new Map()
      this.participants.forEach(p => {
        ;(p.invitations || []).forEach(inv => {
          if (!map.has(inv.assessmentSlug)) {
            map.set(inv.assessmentSlug, inv.assessmentTitle)
          }
        })
      })
      return Array.from(map.entries()).map(([slug, title]) => ({ slug, title }))
    },
    selectedAssessmentLabel() {
      if (this.selectedAssessmentFilter === 'all') return 'All assessments'
      const found = this.allInvitedAssessments.find(a => a.slug === this.selectedAssessmentFilter)
      return found ? found.title : 'All assessments'
    },
    completedInvitations() {
      const list = []
      this.participants.forEach(p => {
        ;(p.invitations || []).forEach(inv => {
          if (inv.status === 'completed' && inv.responseBreakdown) {
            if (this.selectedAssessmentFilter === 'all' || inv.assessmentSlug === this.selectedAssessmentFilter) {
              list.push(inv)
            }
          }
        })
      })
      return list
    },
    totalInvitationCount() {
      let count = 0
      this.participants.forEach(p => {
        ;(p.invitations || []).forEach(inv => {
          if (this.selectedAssessmentFilter === 'all' || inv.assessmentSlug === this.selectedAssessmentFilter) {
            count++
          }
        })
      })
      return count
    },
    outstandingInvitationCount() {
      return this.totalInvitationCount - this.completedInvitations.length
    },
    thirdPersonAggregateBreakdown() {
      const completed = this.completedInvitations
      if (!completed.length) return null

      const totals = { D: 0, I: 0, S: 0, C: 0 }
      completed.forEach(inv => {
        const b = inv.responseBreakdown;
        ['D', 'I', 'S', 'C'].forEach(t => {
          const v = parseFloat(b[t] != null ? b[t] : (b.get && b.get(t))) || 0
          totals[t] += v
        })
      })

      const grand = totals.D + totals.I + totals.S + totals.C
      if (!grand) return null

      return {
        D: (totals.D / grand) * 100,
        I: (totals.I / grand) * 100,
        S: (totals.S / grand) * 100,
        C: (totals.C / grand) * 100
      }
    },
    thirdPersonTopTrait() {
      const b = this.thirdPersonAggregateBreakdown
      if (!b) return null
      const entries = Object.entries(b).filter(([t, v]) => ['D', 'I', 'S', 'C'].includes(t) && typeof v === 'number')
      if (!entries.length) return null
      entries.sort((a, b) => b[1] - a[1])
      return entries[0][0]
    },
    thirdPersonConfidence() {
      // 10 completed invitations = 100% confidence
      return Math.min(100, this.completedInvitations.length * 10)
    },
    aggD() {
      const b = this.thirdPersonAggregateBreakdown
      return b ? b.D : 0
    },
    aggI() {
      const b = this.thirdPersonAggregateBreakdown
      return b ? b.I : 0
    },
    aggS() {
      const b = this.thirdPersonAggregateBreakdown
      return b ? b.S : 0
    },
    aggC() {
      const b = this.thirdPersonAggregateBreakdown
      return b ? b.C : 0
    },
    firstPersonBreakdownForFilter() {
      if (this.selectedAssessmentFilter === 'all') return null
      return this.completedSessionsBySlug[this.selectedAssessmentFilter] || null
    },
    perceptionAccuracy() {
      const fp = this.firstPersonBreakdownForFilter
      const tp = this.thirdPersonAggregateBreakdown
      if (!fp || !tp) return 0
      const avgDiff = ['D', 'I', 'S', 'C'].reduce((sum, t) => {
        return sum + Math.abs((fp[t] || 0) - (tp[t] || 0))
      }, 0) / 4
      return Math.max(0, Math.round(100 - avgDiff))
    },
    perceptionAccuracyColor() {
      const score = this.perceptionAccuracy
      if (score >= 80) return '#0dab49'
      if (score >= 60) return '#ffbd05'
      return '#e93d2f'
    },

    // ── Participant management computed ────────────────────────────────────
    uniqueCompletedSessions() {
      const map = new Map()
      for (const s of this.completedSessions) {
        if (s.assessmentSlug && !map.has(s.assessmentSlug)) {
          map.set(s.assessmentSlug, {
            assessmentTitle: s.assessmentTitle,
            assessmentSlug: s.assessmentSlug
          })
        }
      }
      return Array.from(map.values())
    },
    noCompletedSessions() {
      return this.uniqueCompletedSessions.length === 0
    },
    completedSessionsBySlug() {
      const map = {}
      ;(this.completedSessions || []).forEach(s => {
        if (s.assessmentSlug && s.scoreBreakdown) {
          map[s.assessmentSlug] = s.scoreBreakdown
        }
      })
      return map
    },
    fullyConfidentIndividuals() {
      const results = []
      this.participants.forEach(p => {
        ;(p.invitations || []).forEach(inv => {
          if (inv.status !== 'completed' || !inv.responseBreakdown) return
          const score = this.confidenceScore(inv)
          if (score !== null && parseFloat(score) >= 100) {
            results.push({
              key: p._id + '-' + inv._id,
              label: inv.assessmentTitle + ' (' + p.name + ')'
            })
          }
        })
      })
      return results
    }
  },
  mounted() {
    this.fetchParticipants()
  },
  methods: {
    traitTitle(trait) {
      return TRAIT_TITLES[trait] || trait
    },
    traitColor(trait) {
      return TRAIT_COLORS[trait] || '#143180'
    },
    pickAssessmentFilter(slug) {
      this.selectedAssessmentFilter = slug
      this.thirdPersonDropdownOpen = false
    },
    traitDiff(trait) {
      const fp = this.firstPersonBreakdownForFilter
      const tp = this.thirdPersonAggregateBreakdown
      if (!fp || !tp) return 0
      // positive = others perceived you higher in this trait than you actually scored
      return (tp[trait] || 0) - (fp[trait] || 0)
    },
    traitDiffColor(trait) {
      const diff = Math.abs(this.traitDiff(trait))
      if (diff <= 5) return '#0dab49'
      if (diff <= 15) return '#ffbd05'
      return '#e93d2f'
    },

    // ── Participant management methods ─────────────────────────────────────
    async fetchParticipants() {
      try {
        const res = await this.$axios.$get('/api/participants')
        this.participants = res
      } catch (err) {
        console.error('Error fetching participants:', err)
      } finally {
        this.loading = false
      }
    },
    toggleAddForm() {
      this.showAddForm = !this.showAddForm
      if (this.showAddForm) {
        this.addForm = { name: '', email: '' }
        this.addError = null
      }
    },
    async saveParticipant() {
      if (!this.addForm.name || !this.addForm.email) {
        this.addError = 'Name and email are required.'
        return
      }
      this.addLoading = true
      this.addError = null
      try {
        const res = await this.$axios.$post('/api/participants', {
          name: this.addForm.name,
          email: this.addForm.email
        })
        this.participants.push(res)
        this.addForm = { name: '', email: '' }
        this.showAddForm = false
      } catch (err) {
        console.error('Error saving participant:', err)
        this.addError =
          (err.response && err.response.data && err.response.data.message) ||
          'Failed to save participant. Please try again.'
      } finally {
        this.addLoading = false
      }
    },
    openInvite(participant) {
      this.inviteTarget = participant
      this.inviteSlug = ''
      this.inviteError = null
    },
    closeInvite() {
      this.inviteTarget = null
      this.inviteSlug = ''
      this.inviteError = null
    },
    async sendInvite() {
      if (!this.inviteSlug) return
      this.inviteLoading = true
      this.inviteError = null
      try {
        const res = await this.$axios.$post(
          `/api/participants/${this.inviteTarget._id}/invite`,
          { assessmentSlug: this.inviteSlug }
        )
        const idx = this.participants.findIndex(p => p._id === this.inviteTarget._id)
        if (idx !== -1) {
          this.$set(this.participants, idx, res)
        }
        this.closeInvite()
      } catch (err) {
        console.error('Error sending invite:', err)
        const status = err.response && err.response.status
        if (status === 409) {
          this.inviteError = 'This participant is already invited to that assessment.'
        } else {
          this.inviteError = 'Failed to send invite. Please try again.'
        }
      } finally {
        this.inviteLoading = false
      }
    },
    confidenceScore(inv) {
      if (!inv.responseBreakdown) return null
      const inviterBreakdown = this.completedSessionsBySlug[inv.assessmentSlug]
      if (!inviterBreakdown) return null

      const traits = ['D', 'I', 'S', 'C']
      const diffs = traits.map(t => {
        const a = parseFloat(inviterBreakdown[t]) || 0
        const b = parseFloat(inv.responseBreakdown[t] != null ? inv.responseBreakdown[t] : (inv.responseBreakdown.get && inv.responseBreakdown.get(t))) || 0
        return Math.abs(a - b)
      })
      const avgDiff = diffs.reduce((s, d) => s + d, 0) / 4
      return Math.max(0, 100 - avgDiff).toFixed(1)
    },
    statusLabel(status) {
      switch (status) {
        case 'invited': return 'Invited'
        case 'started': return 'Started'
        case 'completed': return 'Completed'
        default: return status
      }
    },
    statusColor(status) {
      switch (status) {
        case 'invited': return '#1666ff'
        case 'started': return '#ffbd05'
        case 'completed': return '#0dab49'
        default: return '#888'
      }
    }
  }
}
</script>

<style scoped lang="scss">
.tp-root {
  display: contents;
}

.panel-wide {
  display: flex;
  flex-direction: column;
  height: 450px;
  position: relative;
}

/* ── Participant management styles ────────────────────────────────────────── */

.participants-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex: 0 0 auto;
  padding-bottom: 12px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.08);
  margin-bottom: 8px;

  .panel-title {
    margin: 0;
  }
}

.add-form {
  flex: 0 0 auto;
  background: #f6f9fc;
  border-radius: 8px;
  padding: 12px;
  margin-bottom: 10px;
}

.add-form-fields {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
  align-items: center;
}

.add-input {
  flex: 1 1 140px;
  font-size: 13px;
  border: 2px solid #dcdfe6;
  border-radius: 4px;
  padding: 7px 9px;
  font-family: inherit;
  outline: none;

  &:focus {
    border-color: #00679b;
  }
}

.participants-body {
  flex: 1 1 auto;
  overflow-y: auto;
  padding-right: 8px;
}

.participant-list {
  list-style: none;
  margin: 0;
  padding: 0;
}

.participant-row {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 10px 0;
  border-bottom: 1px solid rgba(0, 0, 0, 0.06);

  &:last-child {
    border-bottom: none;
  }
}

.participant-info {
  flex: 1 1 auto;
  min-width: 0;
}

.participant-name {
  font-weight: 600;
  font-size: 14px;
  color: #12304d;
  margin-bottom: 2px;
}

.participant-email {
  font-size: 12px;
  color: #555;
  margin-bottom: 6px;
}

.inv-badges {
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
}

.inv-badge {
  display: inline-block;
  font-size: 11px;
  color: #fff;
  padding: 2px 8px;
  border-radius: 999px;
  font-weight: 600;
}

.confidence-badge {
  background: #12304d !important;
  font-weight: 700;
}

.invite-btn {
  flex: 0 0 auto;
  margin-left: 12px;
  font-size: 12px;
  height: 32px;
  padding: 0 12px;
  white-space: nowrap;
}

.status-msg {
  text-align: center;
  padding: 32px 0;
  font-size: 14px;
  color: #555;

  &.empty p + p {
    margin-top: 6px;
  }
}

.form-error {
  font-size: 12px;
  color: #c00;
  margin: 6px 0 0;
  padding: 0;
}

.modal-backdrop {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2000;
}

.invite-modal {
  background: #fff;
  border-radius: 10px;
  padding: 28px;
  width: 90%;
  max-width: 480px;
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.35);
}

.modal-title {
  margin: 0 0 6px;
  font-size: 20px;
  color: #12304d;
}

.modal-subtitle {
  font-size: 14px;
  color: #555;
  margin-bottom: 12px;
}

.modal-select {
  width: 100%;
  font-size: 14px;
  border: 2px solid #dcdfe6;
  border-radius: 4px;
  padding: 9px;
  font-family: inherit;
  margin-bottom: 16px;
  background: #fff;

  &:focus {
    border-color: #00679b;
    outline: none;
  }
}

.modal-actions {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
}

.comparison-btn-wrap {
  margin-top: 16px;
  text-align: center;
}

.comparison-modal {
  max-width: 520px;
}

.comparison-table {
  width: 100%;
  border-collapse: collapse;
  font-size: 13px;
  margin-top: 12px;

  th {
    text-align: left;
    padding: 6px 8px;
    border-bottom: 2px solid #dce8f0;
    color: #12304d;
    font-size: 12px;
    font-weight: 700;
  }

  td {
    padding: 7px 8px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.06);
  }

  tr:last-child td {
    border-bottom: none;
  }

  .trait-cell {
    font-size: 15px;
  }
}

.comparison-note {
  margin: 12px 0 0;
  font-size: 13px;
  color: #555;
  font-family: 'Nunito Sans', sans-serif;
}

@media (max-width: 768px) {
  .panel-wide {
    height: auto;
    min-height: 300px;
  }

  .participants-body {
    overflow-y: visible;
    max-height: none;
  }

  .add-form-fields {
    flex-direction: column;

    .add-input {
      flex: 1 1 auto;
      width: 100%;
    }
  }

  .participant-row {
    flex-wrap: wrap;

    .invite-btn {
      margin-left: 0;
      margin-top: 8px;
    }
  }

  .modal-actions {
    flex-direction: column;

    button {
      width: 100%;
    }
  }
}

.gr-trigger-wrap {
  position: absolute;
  bottom: 16px;
  right: 16px;
}

.gr-trigger-btn {
  padding: 8px 16px;
  background: #12304d;
  color: #fff;
  border: none;
  border-radius: 6px;
  font-size: 13px;
  font-weight: 600;
  cursor: pointer;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
  transition: background 0.2s;

  &:hover {
    background: #1a4a70;
  }
}
</style>
