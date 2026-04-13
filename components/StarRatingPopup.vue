<template>
  <transition name="rating-fade">
    <div v-if="show" class="rating-backdrop" @click.self="skip">
      <div class="rating-card">
        <h3 class="rating-title">How would you rate this story?</h3>
        <p class="rating-subtitle">{{ assessmentTitle }}</p>

        <div class="stars">
          <button v-for="n in 5" :key="n"
            class="star-btn"
            :class="{ filled: n <= hoverStar || (hoverStar === 0 && n <= selectedStar) }"
            @mouseenter="hoverStar = n"
            @mouseleave="hoverStar = 0"
            @click="selectStar(n)">
            ★
          </button>
        </div>

        <p v-if="selectedStar" class="rating-label">{{ ratingLabels[selectedStar - 1] }}</p>

        <div class="rating-actions">
          <button class="rating-submit" :disabled="!selectedStar || submitting" @click="submit">
            {{ submitting ? 'Saving...' : 'Submit Rating' }}
          </button>
          <button class="rating-skip" @click="skip">Skip</button>
        </div>

        <p v-if="error" class="rating-error">{{ error }}</p>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  props: {
    show: { type: Boolean, default: false },
    assessmentId: { type: String, default: '' },
    assessmentTitle: { type: String, default: '' }
  },
  data() {
    return {
      selectedStar: 0,
      hoverStar: 0,
      submitting: false,
      error: '',
      ratingLabels: ['Poor', 'Fair', 'Good', 'Great', 'Excellent']
    }
  },
  methods: {
    selectStar(n) {
      this.selectedStar = n
    },
    async submit() {
      if (!this.selectedStar || !this.assessmentId) return
      this.submitting = true
      this.error = ''
      try {
        await this.$axios.$post('/api/assessments/' + this.assessmentId + '/rate', {
          rating: this.selectedStar
        })
        this.$emit('rated', this.selectedStar)
        this.$emit('close')
      } catch(err) {
        this.error = err.response?.data?.error || 'Failed to save rating.'
      } finally {
        this.submitting = false
      }
    },
    skip() {
      this.$emit('close')
    }
  },
  watch: {
    show(val) {
      if (val) {
        this.selectedStar = 0
        this.hoverStar = 0
        this.error = ''
      }
    }
  }
}
</script>

<style scoped>
.rating-fade-enter-active, .rating-fade-leave-active { transition: opacity 0.3s ease; }
.rating-fade-enter, .rating-fade-leave-to { opacity: 0; }

.rating-backdrop {
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
  padding: 20px;
  backdrop-filter: blur(3px);
}

.rating-card {
  background: #fff;
  border-radius: 16px;
  padding: 32px 40px;
  max-width: 400px;
  width: 100%;
  text-align: center;
  box-shadow: 0 20px 50px rgba(0,0,0,0.25);
}

.rating-title {
  margin: 0 0 4px;
  font-size: 20px;
  color: #12304d;
  font-family: Georgia, serif;
}

.rating-subtitle {
  margin: 0 0 20px;
  font-size: 14px;
  color: #888;
  font-style: italic;
}

.stars {
  display: flex;
  justify-content: center;
  gap: 8px;
  margin-bottom: 8px;
}

.star-btn {
  background: none;
  border: none;
  font-size: 36px;
  cursor: pointer;
  color: #ddd;
  transition: color 0.15s, transform 0.15s;
  padding: 0;
  line-height: 1;
  width: auto;
  height: auto;
  box-shadow: none;
}

.star-btn:hover {
  transform: scale(1.15);
}

.star-btn.filled {
  color: #ffbd05;
}

.rating-label {
  font-size: 14px;
  font-weight: 600;
  color: #12304d;
  margin: 4px 0 16px;
}

.rating-actions {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.rating-submit {
  background: #12304d;
  color: #fff;
  border: none;
  border-radius: 8px;
  padding: 12px 24px;
  font-size: 15px;
  font-weight: 700;
  cursor: pointer;
  font-family: inherit;
  transition: background 0.15s;
  width: 100%;
  height: auto;
  box-shadow: none;
}

.rating-submit:hover:not(:disabled) { background: #1a4a70; }
.rating-submit:disabled { opacity: 0.5; cursor: not-allowed; }

.rating-skip {
  background: none;
  border: none;
  color: #999;
  font-size: 13px;
  cursor: pointer;
  padding: 8px;
  font-family: inherit;
  width: auto;
  height: auto;
  box-shadow: none;
}

.rating-skip:hover { color: #666; }

.rating-error {
  color: #e93d2f;
  font-size: 12px;
  margin-top: 8px;
}
</style>
