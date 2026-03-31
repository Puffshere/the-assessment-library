<template>
  <div class="gr-backdrop" @click.self="$emit('close')">
    <div class="gr-modal">
      <button class="modal-x-close" @click="$emit('close')" aria-label="Close">&times;</button>

      <h3 class="gr-title">{{ step === 'focus' ? 'Select 3 Focus Areas' : 'Generate Full Report' }}</h3>

      <!-- ── Focus area picker (Option 1 only) ─────────────────────────────── -->
      <template v-if="step === 'focus'">
        <p class="gr-intro">
          Choose exactly 3 focus areas to shape your 1st Person report content.
        </p>
        <div class="gr-focus-grid">
          <button
            v-for="area in FOCUS_AREAS"
            :key="area"
            class="gr-focus-btn"
            :class="{ 'gr-focus-btn--selected': selectedAreas.includes(area), 'gr-focus-btn--disabled': !selectedAreas.includes(area) && selectedAreas.length >= 3 }"
            :disabled="!selectedAreas.includes(area) && selectedAreas.length >= 3"
            @click="toggleArea(area)"
          >
            {{ area }}
          </button>
        </div>
        <p class="gr-focus-count">{{ selectedAreas.length }} / 3 selected</p>
        <p v-if="genError" class="gr-error">{{ genError }}</p>
        <div class="gr-focus-actions">
          <button class="gr-btn gr-btn--secondary" @click="step = 'options'">Back</button>
          <button
            class="gr-btn"
            :disabled="selectedAreas.length !== 3 || generating"
            @click="submitGenerate('first')"
          >
            {{ generating ? generatingLabel : 'Generate Report' }}
          </button>
        </div>
      </template>

      <!-- ── Main options ──────────────────────────────────────────────────── -->
      <template v-else>
        <p class="gr-intro">
          Choose a report type below. Free reports unlock automatically when confidence thresholds are met.
        </p>

        <!-- No free reports available notice -->
        <p v-if="!option1Unlocked && !option2Unlocked && !option3Unlocked" class="gr-no-free">
          No free reports available yet — keep completing assessments and inviting participants to unlock them.
        </p>

        <div class="gr-options">

          <!-- Option 1 -->
          <div class="gr-option" :class="{ 'gr-locked': !option1Unlocked }">
            <div class="gr-badge gr-badge--free">Free</div>
            <div class="gr-option-body">
              <h4 class="gr-option-title">1st Person Report</h4>
              <p class="gr-option-desc">
                Personalized report based on your self-assessments. Choose 3 focus areas to shape the content.
                ~10 pages with charts.
              </p>
              <p v-if="!option1Unlocked" class="gr-unlock-hint">
                🔒 Requires 100% 1st Person confidence — currently {{ firstPersonConfidence }}%
              </p>
            </div>
            <button class="gr-btn" :disabled="!option1Unlocked || generating" @click="startOption1">
              {{ generating && pendingType === 'first' ? generatingLabel : option1Unlocked ? 'Generate' : 'Locked' }}
            </button>
          </div>

          <!-- Option 2 -->
          <div class="gr-option" :class="{ 'gr-locked': !option2Unlocked }">
            <div class="gr-badge gr-badge--free">Free</div>
            <div class="gr-option-body">
              <h4 class="gr-option-title">3rd Person Overall Report</h4>
              <p class="gr-option-desc">
                Compares how you see yourself vs. how others perceive you across all participants.
                ~10 pages with charts.
              </p>
              <p v-if="!option2Unlocked" class="gr-unlock-hint">
                🔒 Requires 100% 3rd Person overall confidence — currently {{ thirdPersonConfidence }}%
              </p>
            </div>
            <button class="gr-btn" :disabled="!option2Unlocked || generating" @click="submitGenerate('third_overall')">
              {{ generating && pendingType === 'third_overall' ? generatingLabel : option2Unlocked ? 'Generate' : 'Locked' }}
            </button>
          </div>

          <!-- Option 3 -->
          <div class="gr-option" :class="{ 'gr-locked': !option3Unlocked }">
            <div class="gr-badge gr-badge--free">Free</div>
            <div class="gr-option-body">
              <h4 class="gr-option-title">Individual 3rd Person Report</h4>
              <p class="gr-option-desc">
                Deep-dive self-awareness report for one specific relationship where confidence reached 100%.
                ~5 pages with charts.
              </p>
              <p v-if="!option3Unlocked" class="gr-unlock-hint">
                🔒 Requires one individual 3rd Person assessment confidence to reach 100%
              </p>
              <div v-if="option3Unlocked && fullyConfidentIndividuals.length > 1" class="gr-individual-select">
                <label class="gr-individual-label">Select individual:</label>
                <select v-model="selectedIndividual" class="gr-select">
                  <option v-for="ind in fullyConfidentIndividuals" :key="ind.key" :value="ind">
                    {{ ind.label }}
                  </option>
                </select>
              </div>
            </div>
            <button class="gr-btn" :disabled="!option3Unlocked || generating" @click="submitGenerate('third_individual')">
              {{ generating && pendingType === 'third_individual' ? generatingLabel : option3Unlocked ? 'Generate' : 'Locked' }}
            </button>
          </div>

          <!-- Option 4 — always shown, always active if balance allows -->
          <div class="gr-option gr-option--paid">
            <div class="gr-badge gr-badge--paid">10 Credits</div>
            <div class="gr-option-body">
              <h4 class="gr-option-title">Full Report (1st + 3rd Person)</h4>
              <p class="gr-option-desc">
                The most comprehensive report — combines both 1st and 3rd Person analyses in full detail.
                ~20 pages with charts. Always available.
              </p>
              <p class="gr-credit-balance">
                Your balance:
                <strong :class="{ 'gr-insufficient': creditsBalance < 10 }">{{ creditsBalance }} credits</strong>
              </p>
              <p v-if="creditsBalance < 10" class="gr-unlock-hint">
                ⚠️ You need {{ 10 - creditsBalance }} more credit{{ 10 - creditsBalance === 1 ? '' : 's' }} to unlock this report.
              </p>
            </div>
            <button class="gr-btn gr-btn--paid" :disabled="creditsBalance < 10 || generating" @click="submitGenerate('full')">
              {{ generating && pendingType === 'full' ? generatingLabel : creditsBalance >= 10 ? 'Generate (10 Credits)' : 'Insufficient Credits' }}
            </button>
          </div>

        </div>

        <p v-if="genError" class="gr-error">{{ genError }}</p>
      </template>

    </div>
  </div>
</template>

<script>
const FOCUS_AREAS = [
  'Communication Style',
  'Leadership & Influence',
  'Team Collaboration',
  'Conflict Resolution',
  'Decision Making',
  'Stress Management',
  'Personal Growth',
  'Relationships & Trust',
  'Career Development',
  'Work-Life Balance'
]

export default {
  name: 'GenerateReportModal',
  props: {
    firstPersonConfidence:     { type: Number, default: 0 },
    thirdPersonConfidence:     { type: Number, default: 0 },
    fullyConfidentIndividuals: { type: Array,  default: () => [] },
    firstPersonBreakdown:      { type: Object, default: null },
    thirdPersonBreakdown:      { type: Object, default: null },
    creditsBalance:            { type: Number, default: 0 }
  },
  data () {
    return {
      FOCUS_AREAS,
      step: 'options',
      generating: false,
      pendingType: null,
      genError: null,
      selectedAreas: [],
      selectedIndividual: null
    }
  },
  computed: {
    option1Unlocked () { return this.firstPersonConfidence >= 100 },
    option2Unlocked () { return this.thirdPersonConfidence >= 100 },
    option3Unlocked () { return this.fullyConfidentIndividuals.length > 0 },
    userName () {
      return (this.$store.state.user && this.$store.state.user.name) || ''
    },
    generatingLabel () {
      return 'Generating…'
    }
  },
  created () {
    if (this.fullyConfidentIndividuals.length > 0) {
      this.selectedIndividual = this.fullyConfidentIndividuals[0]
    }
  },
  methods: {
    toggleArea (area) {
      const idx = this.selectedAreas.indexOf(area)
      if (idx >= 0) {
        this.selectedAreas.splice(idx, 1)
      } else if (this.selectedAreas.length < 3) {
        this.selectedAreas.push(area)
      }
    },
    startOption1 () {
      this.genError = null
      this.step = 'focus'
    },
    async submitGenerate (type) {
      this.generating = true
      this.pendingType = type
      this.genError = null

      try {
        // Build request payload
        const payload = {
          type,
          userName: this.userName,
          firstPersonBreakdown: this.firstPersonBreakdown,
          thirdPersonBreakdown: this.thirdPersonBreakdown
        }
        if (type === 'first') {
          payload.focusAreas = this.selectedAreas
        }
        if (type === 'third_individual' && this.selectedIndividual) {
          payload.individualLabel = this.selectedIndividual.label
        }

        // Fetch AI-generated sections from the server
        const result = await this.$axios.$post('/api/reports/generate', payload)
        const { sections } = result
        if (type === 'full' && result.creditsBalance !== undefined) {
          this.$emit('credits-deducted', result.creditsBalance)
        }

        // Build and open PDF
        const { buildReport, openInNewTab } = await import('@/utils/reportPdf')
        const doc = await buildReport({
          type,
          userName: this.userName,
          firstPersonBreakdown: this.firstPersonBreakdown,
          thirdPersonBreakdown: this.thirdPersonBreakdown,
          sections
        })
        openInNewTab(doc, type, this.userName)
        this.$emit('close')
      } catch (err) {
        console.error('Report generation error:', err)
        const serverMsg = err.response && err.response.data && err.response.data.error
        this.genError = serverMsg || 'Failed to generate report. Please try again.'
      } finally {
        this.generating = false
        this.pendingType = null
      }
    }
  }
}
</script>

<style scoped lang="scss">
.gr-backdrop {
  position: fixed;
  inset: 0;
  padding-top: 116px;
  padding-bottom: 40px;
  padding-left: 16px;
  padding-right: 16px;
  background: rgba(0, 0, 0, 0.55);
  display: flex;
  align-items: flex-start;
  justify-content: center;
  overflow-y: auto;
  z-index: 3000;
}

.gr-modal {
  background: #fff;
  border-radius: 12px;
  padding: 48px 28px 28px;
  width: 100%;
  max-width: 560px;
  flex-shrink: 0;
  box-shadow: 0 16px 40px rgba(0, 0, 0, 0.35);
  position: relative;
}

.gr-title {
  font-size: 20px;
  color: #12304d;
  margin: 0 0 8px;
}

.modal-x-close {
  position: absolute;
  top: 12px;
  right: 12px;
  background: none;
  border: none;
  font-size: 24px;
  font-weight: 700;
  color: #e53e3e;
  cursor: pointer;
  line-height: 1;
  padding: 0;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover { color: #c53030; }
}

.gr-intro {
  font-size: 13px;
  color: #666;
  margin: 0 0 12px;
}

.gr-no-free {
  background: #fff8e1;
  border: 1px solid #ffc107;
  border-radius: 6px;
  padding: 10px 14px;
  font-size: 13px;
  color: #6d4c00;
  margin-bottom: 14px;
}

.gr-options {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.gr-option {
  display: flex;
  align-items: flex-start;
  gap: 12px;
  border: 2px solid #e2e8f0;
  border-radius: 10px;
  padding: 14px 16px;
  transition: border-color 0.2s;

  &:not(.gr-locked):hover {
    border-color: #00679b;
  }

  &.gr-locked {
    opacity: 0.6;
  }

  &.gr-option--paid {
    border-color: #ffbd05;
    background: #fffdf0;
  }
}

.gr-badge {
  flex: 0 0 auto;
  font-size: 11px;
  font-weight: 700;
  padding: 3px 8px;
  border-radius: 999px;
  margin-top: 2px;
  white-space: nowrap;

  &.gr-badge--free {
    background: #0dab49;
    color: #fff;
  }

  &.gr-badge--paid {
    background: #ffbd05;
    color: #333;
  }
}

.gr-option-body {
  flex: 1 1 auto;
  min-width: 0;
}

.gr-option-title {
  font-size: 14px;
  font-weight: 700;
  color: #12304d;
  margin: 0 0 4px;
}

.gr-option-desc {
  font-size: 12px;
  color: #555;
  margin: 0 0 4px;
}

.gr-unlock-hint {
  font-size: 12px;
  color: #c00;
  margin: 4px 0 0;
}

.gr-credit-balance {
  font-size: 12px;
  color: #555;
  margin: 4px 0 0;

  .gr-insufficient {
    color: #c00;
  }
}

.gr-individual-select {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-top: 6px;
}

.gr-individual-label {
  font-size: 12px;
  color: #555;
  white-space: nowrap;
}

.gr-select {
  font-size: 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 3px 6px;
  color: #333;
  background: #fff;
  flex: 1 1 auto;
  min-width: 0;
}

.gr-btn {
  flex: 0 0 auto;
  align-self: center;
  padding: 8px 14px;
  background: #00679b;
  color: #fff;
  border: 2px solid #00679b;
  border-radius: 6px;
  font-size: 12px;
  font-weight: 600;
  white-space: nowrap;
  cursor: pointer;
  transition: background 0.2s;

  &:hover:not(:disabled) {
    background: #00507a;
    border-color: #00507a;
  }

  &:disabled {
    background: #aaa;
    border-color: #aaa;
    cursor: not-allowed;
    opacity: 0.5;
  }

  &.gr-btn--paid {
    background: #ffbd05;
    border-color: #ffbd05;
    color: #12304d;

    &:hover:not(:disabled) {
      background: #e8a800;
      border-color: #e8a800;
    }
  }

  &.gr-btn--secondary {
    background: transparent;
    border-color: #ccc;
    color: #555;

    &:hover:not(:disabled) {
      border-color: #888;
      color: #333;
    }
  }
}

.gr-error {
  margin-top: 12px;
  font-size: 13px;
  color: #c00;
  background: #fff0f0;
  border-radius: 6px;
  padding: 8px 12px;
}

// ── Focus area picker ──────────────────────────────────────────────────────

.gr-focus-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 10px;
}

.gr-focus-btn {
  padding: 7px 14px;
  font-size: 13px;
  border: 2px solid #d0d9e3;
  border-radius: 999px;
  background: #fff;
  color: #555;
  cursor: pointer;
  transition: all 0.15s;

  &:hover:not(:disabled) {
    border-color: #00679b;
    color: #00679b;
  }

  &.gr-focus-btn--selected {
    background: #00679b;
    border-color: #00679b;
    color: #fff;
  }

  &.gr-focus-btn--disabled {
    opacity: 0.4;
    cursor: not-allowed;
  }
}

.gr-focus-count {
  font-size: 12px;
  color: #888;
  margin: 0 0 14px;
}

.gr-focus-actions {
  display: flex;
  justify-content: flex-end;
  gap: 10px;
}

@media (max-width: 480px) {
  .gr-modal { padding: 18px 14px; }

  .gr-option {
    flex-wrap: wrap;
  }

  .gr-btn {
    width: 100%;
    margin-top: 8px;
  }

  .gr-focus-actions .gr-btn {
    width: auto;
  }
}
</style>
