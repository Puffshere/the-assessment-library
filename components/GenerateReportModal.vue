<template>
  <div class="gr-backdrop" @click.self="$emit('close')">
    <div class="gr-modal">

      <div class="gr-header">
        <h3 class="gr-title">Generate Full Report</h3>
        <button class="gr-close" @click="$emit('close')">✕</button>
      </div>

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
          <button class="gr-btn" :disabled="!option1Unlocked || generating" @click="generate('first')">
            {{ generating ? 'Generating…' : option1Unlocked ? 'Generate' : 'Locked' }}
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
          <button class="gr-btn" :disabled="!option2Unlocked || generating" @click="generate('third_overall')">
            {{ generating ? 'Generating…' : option2Unlocked ? 'Generate' : 'Locked' }}
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
          </div>
          <button class="gr-btn" :disabled="!option3Unlocked || generating" @click="generate('third_individual')">
            {{ generating ? 'Generating…' : option3Unlocked ? 'Generate' : 'Locked' }}
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
          <button class="gr-btn gr-btn--paid" :disabled="creditsBalance < 10 || generating" @click="generate('full')">
            {{ generating ? 'Generating…' : creditsBalance >= 10 ? 'Generate (10 Credits)' : 'Insufficient Credits' }}
          </button>
        </div>

      </div>

      <p v-if="genError" class="gr-error">{{ genError }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GenerateReportModal',
  props: {
    firstPersonConfidence:    { type: Number, default: 0 },
    thirdPersonConfidence:    { type: Number, default: 0 },
    fullyConfidentIndividuals:{ type: Array,  default: () => [] },
    firstPersonBreakdown:     { type: Object, default: null },
    thirdPersonBreakdown:     { type: Object, default: null },
    creditsBalance:           { type: Number, default: 0 }
  },
  data () {
    return {
      generating: false,
      genError: null
    }
  },
  computed: {
    option1Unlocked () { return this.firstPersonConfidence >= 100 },
    option2Unlocked () { return this.thirdPersonConfidence >= 100 },
    option3Unlocked () { return this.fullyConfidentIndividuals.length > 0 },
    userName () {
      return (this.$store.state.user && this.$store.state.user.name) || ''
    }
  },
  methods: {
    async generate (type) {
      this.generating = true
      this.genError = null
      try {
        const { buildReport, openInNewTab } = await import('@/utils/reportPdf')
        const doc = await buildReport({
          type,
          userName: this.userName,
          firstPersonBreakdown: this.firstPersonBreakdown,
          thirdPersonBreakdown: this.thirdPersonBreakdown
        })
        openInNewTab(doc, type, this.userName)
        this.$emit('close')
      } catch (err) {
        console.error('PDF generation error:', err)
        this.genError = 'Failed to generate report. Please try again.'
      } finally {
        this.generating = false
      }
    }
  }
}
</script>

<style scoped lang="scss">
.gr-backdrop {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.55);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 3000;
  padding: 16px;
}

.gr-modal {
  background: #fff;
  border-radius: 12px;
  padding: 28px;
  width: 100%;
  max-width: 560px;
  max-height: 90vh;
  overflow-y: auto;
  box-shadow: 0 16px 40px rgba(0, 0, 0, 0.35);
}

.gr-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 8px;
}

.gr-title {
  font-size: 20px;
  color: #12304d;
  margin: 0;
}

.gr-close {
  background: none;
  border: none;
  font-size: 18px;
  color: #888;
  cursor: pointer;
  padding: 2px 6px;
  line-height: 1;
  &:hover { color: #333; }
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
}

.gr-error {
  margin-top: 12px;
  font-size: 13px;
  color: #c00;
  background: #fff0f0;
  border-radius: 6px;
  padding: 8px 12px;
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
}
</style>
