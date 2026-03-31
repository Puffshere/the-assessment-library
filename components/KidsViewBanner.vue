<template>
  <div class="kids-view-banner">
    <div class="kids-view-banner__inner">
      <span class="kids-view-banner__label">Kids View</span>
      <span class="kids-view-banner__toggle-wrap" :class="{ 'is-disabled': !loggedIn }">
        <button class="kids-view-banner__toggle" :class="{ 'is-on': kidsViewActive }" :disabled="!loggedIn"
          @click="handleToggle" :aria-pressed="kidsViewActive.toString()" role="switch" aria-label="Toggle Kids View">
          <span class="kids-view-banner__toggle-knob" />
        </button>
        <span v-if="!loggedIn" class="kids-view-banner__tooltip">
          Please log in to enable Kids View.
        </span>
      </span>
      <span v-if="kidsViewActive" class="kids-view-banner__status">
        Kids View is Active
      </span>
    </div>

    <!-- ── Create PIN Modal ─────────────────────────── -->
    <transition name="modal-fade">
      <div v-if="modalMode === 'create'" class="pin-modal-backdrop" @click.self="cancelModal">
        <div class="pin-modal">
          <button class="modal-x-close" @click="cancelModal" aria-label="Close">&times;</button>
          <h3>Create a Kids View PIN</h3>
          <p>Choose a 4-digit PIN. You'll need this to turn off Kids View.</p>

          <div class="pin-input-wrap">
            <input ref="createPin1" v-model="createPinValue" type="password" maxlength="4" inputmode="numeric"
              pattern="\d{4}" placeholder="----" class="pin-input" @keyup.enter="focusConfirm" />
          </div>
          <label class="pin-field-label">Confirm PIN</label>
          <div class="pin-input-wrap">
            <input ref="createPin2" v-model="createPinConfirm" type="password" maxlength="4" inputmode="numeric"
              pattern="\d{4}" placeholder="----" class="pin-input" @keyup.enter="submitCreatePin" />
          </div>

          <p v-if="modalError" class="pin-error">{{ modalError }}</p>

          <div class="pin-actions">
            <button class="pin-btn pin-btn--cancel" @click="cancelModal">Cancel</button>
            <button class="pin-btn pin-btn--submit"
              :disabled="createPinValue.length !== 4 || createPinConfirm.length !== 4 || saving"
              @click="submitCreatePin">
              {{ saving ? 'Saving...' : 'Create PIN' }}
            </button>
          </div>
        </div>
      </div>
    </transition>

    <!-- ── Verify PIN Modal (exit Kids View) ────────── -->
    <transition name="modal-fade">
      <div v-if="modalMode === 'verify'" class="pin-modal-backdrop verify-backdrop" @click.self="cancelModal">
        <div class="pin-modal verify-modal">
          <div class="verify-stripe" />
          <button class="modal-x-close" @click="cancelModal" aria-label="Close">&times;</button>

          <div class="verify-lock">
            <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none"
              stroke="#1a6cb8" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
              <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
              <path d="M7 11V7a5 5 0 0 1 10 0v4" />
            </svg>
          </div>

          <h3>Enter PIN to exit Kids View</h3>
          <p>Enter your 4-digit PIN to deactivate Kids View.</p>

          <div class="verify-digits-wrap">
            <input
              ref="verifyPinInput"
              v-model="verifyPinValue"
              type="password"
              maxlength="4"
              inputmode="numeric"
              pattern="\d{4}"
              class="verify-real-input"
              @keyup.enter="submitVerifyPin"
            />
            <div class="verify-digits">
              <div v-for="i in 4" :key="i" class="verify-digit-box"
                :class="{
                  'is-filled': verifyPinValue.length >= i,
                  'is-active': verifyPinValue.length === i - 1
                }">
                <span v-if="verifyPinValue.length >= i" class="verify-dot">&bull;</span>
              </div>
            </div>
          </div>

          <p v-if="modalError" class="pin-error">{{ modalError }}</p>

          <div class="verify-actions">
            <button class="verify-confirm-btn" :disabled="verifyPinValue.length !== 4 || saving"
              @click="submitVerifyPin">
              {{ saving ? 'Verifying...' : 'Confirm' }}
            </button>
            <button class="verify-cancel-btn" @click="cancelModal">Cancel</button>
          </div>
          <div class="pin-links">
            <a class="pin-link" @click.prevent="openChangePin">Change PIN</a>
            <a class="pin-link" @click.prevent="openForgotPin">Forgot PIN?</a>
          </div>
        </div>
      </div>
    </transition>

    <!-- ── Change PIN Modal ─────────────────────────── -->
    <transition name="modal-fade">
      <div v-if="modalMode === 'change'" class="pin-modal-backdrop" @click.self="cancelModal">
        <div class="pin-modal">
          <button class="modal-x-close" @click="cancelModal" aria-label="Close">&times;</button>
          <h3>Change Your PIN</h3>
          <p>Enter your current PIN, then choose a new one.</p>

          <label class="pin-field-label">Current PIN</label>
          <div class="pin-input-wrap">
            <input ref="changePinCurrent" v-model="changePinCurrentValue" type="password" maxlength="4"
              inputmode="numeric" pattern="\d{4}" placeholder="----" class="pin-input"
              @keyup.enter="$refs.changePinNew && $refs.changePinNew.focus()" />
          </div>
          <label class="pin-field-label">New PIN</label>
          <div class="pin-input-wrap">
            <input ref="changePinNew" v-model="changePinNewValue" type="password" maxlength="4" inputmode="numeric"
              pattern="\d{4}" placeholder="----" class="pin-input"
              @keyup.enter="$refs.changePinConfirm && $refs.changePinConfirm.focus()" />
          </div>
          <label class="pin-field-label">Confirm New PIN</label>
          <div class="pin-input-wrap">
            <input ref="changePinConfirm" v-model="changePinConfirmValue" type="password" maxlength="4"
              inputmode="numeric" pattern="\d{4}" placeholder="----" class="pin-input" @keyup.enter="submitChangePin" />
          </div>

          <p v-if="modalError" class="pin-error">{{ modalError }}</p>
          <p v-if="modalSuccess" class="pin-success">{{ modalSuccess }}</p>

          <div class="pin-actions">
            <button class="pin-btn pin-btn--cancel" @click="cancelModal">Cancel</button>
            <button class="pin-btn pin-btn--submit"
              :disabled="changePinCurrentValue.length !== 4 || changePinNewValue.length !== 4 || changePinConfirmValue.length !== 4 || saving"
              @click="submitChangePin">
              {{ saving ? 'Saving...' : 'Update PIN' }}
            </button>
          </div>
          <a class="pin-link" @click.prevent="openForgotPin">Forgot PIN?</a>
        </div>
      </div>
    </transition>

    <!-- ── Forgot PIN Modal ─────────────────────────── -->
    <transition name="modal-fade">
      <div v-if="modalMode === 'forgot'" class="pin-modal-backdrop" @click.self="cancelModal">
        <div class="pin-modal">
          <button class="modal-x-close" @click="cancelModal" aria-label="Close">&times;</button>
          <h3>Reset Your PIN</h3>
          <p>Enter your account password to set a new PIN.</p>

          <label class="pin-field-label">Account Password</label>
          <div class="pin-input-wrap">
            <input ref="forgotPassword" v-model="forgotPasswordValue" type="password" placeholder="Enter password"
              class="pin-input pin-input--wide" @keyup.enter="$refs.forgotNewPin && $refs.forgotNewPin.focus()" />
          </div>
          <label class="pin-field-label">New PIN</label>
          <div class="pin-input-wrap">
            <input ref="forgotNewPin" v-model="forgotNewPinValue" type="password" maxlength="4" inputmode="numeric"
              pattern="\d{4}" placeholder="----" class="pin-input"
              @keyup.enter="$refs.forgotConfirmPin && $refs.forgotConfirmPin.focus()" />
          </div>
          <label class="pin-field-label">Confirm New PIN</label>
          <div class="pin-input-wrap">
            <input ref="forgotConfirmPin" v-model="forgotConfirmPinValue" type="password" maxlength="4"
              inputmode="numeric" pattern="\d{4}" placeholder="----" class="pin-input" @keyup.enter="submitForgotPin" />
          </div>

          <p v-if="modalError" class="pin-error">{{ modalError }}</p>
          <p v-if="modalSuccess" class="pin-success">{{ modalSuccess }}</p>

          <div class="pin-actions">
            <button class="pin-btn pin-btn--cancel" @click="cancelModal">Cancel</button>
            <button class="pin-btn pin-btn--submit"
              :disabled="!forgotPasswordValue || forgotNewPinValue.length !== 4 || forgotConfirmPinValue.length !== 4 || saving"
              @click="submitForgotPin">
              {{ saving ? 'Saving...' : 'Reset PIN' }}
            </button>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'KidsViewBanner',

  data() {
    return {
      modalMode: null, // null | 'create' | 'verify' | 'change' | 'forgot'
      modalError: '',
      modalSuccess: '',
      saving: false,

      // Create PIN
      createPinValue: '',
      createPinConfirm: '',

      // Verify PIN (exit)
      verifyPinValue: '',

      // Change PIN
      changePinCurrentValue: '',
      changePinNewValue: '',
      changePinConfirmValue: '',

      // Forgot PIN
      forgotPasswordValue: '',
      forgotNewPinValue: '',
      forgotConfirmPinValue: '',

      // Track where forgot-pin was opened from
      forgotPinReturnMode: null,
    }
  },

  computed: {
    loggedIn() {
      return this.$store.state.loggedIn
    },
    user() {
      return this.$store.state.user
    },
    kidsViewActive() {
      return this.$store.state.kidsViewActive
    },
    hasPin() {
      return !!(this.user && this.user.has_kids_pin)
    },
  },

  methods: {
    handleToggle() {
      if (!this.loggedIn) return

      if (!this.kidsViewActive) {
        if (!this.hasPin) {
          this.openModal('create')
          this.$nextTick(() => {
            if (this.$refs.createPin1) this.$refs.createPin1.focus()
          })
        } else {
          this.enableKidsView()
        }
      } else {
        this.openModal('verify')
        this.$nextTick(() => {
          if (this.$refs.verifyPinInput) this.$refs.verifyPinInput.focus()
        })
      }
    },

    async enableKidsView() {
      try {
        await this.$axios.$post('/api/kids-mode/toggle', { enabled: true })
        this.$store.commit('SET_KIDS_VIEW_ACTIVE', true)
        this.$router.push('/kids/onboarding')
      } catch (err) {
        console.error('Failed to enable Kids View:', err)
      }
    },

    async disableKidsView() {
      try {
        await this.$axios.$post('/api/kids-mode/toggle', { enabled: false })
        this.$store.commit('SET_KIDS_VIEW_ACTIVE', false)
        this.$store.commit('SET_ACTIVE_CHILD_PROFILE', null)

        // Redirect to adult dashboard if on a kids-only page
        if (this.$route.path.startsWith('/kids')) {
          this.$router.push('/dashboard')
        }
      } catch (err) {
        console.error('Failed to disable Kids View:', err)
      }
    },

    openChangePin() {
      this.openModal('change')
      this.$nextTick(() => {
        if (this.$refs.changePinCurrent) this.$refs.changePinCurrent.focus()
      })
    },

    openForgotPin() {
      this.forgotPinReturnMode = this.modalMode
      this.openModal('forgot')
      this.$nextTick(() => {
        if (this.$refs.forgotPassword) this.$refs.forgotPassword.focus()
      })
    },

    openModal(mode) {
      this.modalMode = mode
      this.modalError = ''
      this.modalSuccess = ''
      this.saving = false
      this.createPinValue = ''
      this.createPinConfirm = ''
      this.verifyPinValue = ''
      this.changePinCurrentValue = ''
      this.changePinNewValue = ''
      this.changePinConfirmValue = ''
      this.forgotPasswordValue = ''
      this.forgotNewPinValue = ''
      this.forgotConfirmPinValue = ''
    },

    cancelModal() {
      this.modalMode = null
      this.modalError = ''
      this.modalSuccess = ''
      this.forgotPinReturnMode = null
    },

    focusConfirm() {
      if (this.$refs.createPin2) this.$refs.createPin2.focus()
    },

    // ── Create PIN ──────────────────────────────
    async submitCreatePin() {
      if (this.createPinValue.length !== 4 || this.createPinConfirm.length !== 4 || this.saving) return

      if (this.createPinValue !== this.createPinConfirm) {
        this.modalError = 'PINs do not match.'
        return
      }

      this.saving = true
      this.modalError = ''

      try {
        await this.$axios.$post('/api/kids-mode/set-pin', { pin: this.createPinValue })
        this.$store.commit('SET_HAS_KIDS_PIN', true)
        await this.enableKidsView()
        this.cancelModal()
      } catch (err) {
        this.modalError = err?.response?.data?.message || 'Failed to create PIN.'
      } finally {
        this.saving = false
      }
    },

    // ── Verify PIN (exit) ───────────────────────
    async submitVerifyPin() {
      if (this.verifyPinValue.length !== 4 || this.saving) return

      this.saving = true
      this.modalError = ''

      try {
        await this.$axios.$post('/api/kids-mode/verify-pin', { pin: this.verifyPinValue })
        await this.disableKidsView()
        this.cancelModal()
      } catch (err) {
        this.modalError = 'Incorrect PIN. Kids View stays active.'
        this.verifyPinValue = ''
        this.$nextTick(() => {
          if (this.$refs.verifyPinInput) this.$refs.verifyPinInput.focus()
        })
      } finally {
        this.saving = false
      }
    },

    // ── Change PIN ──────────────────────────────
    async submitChangePin() {
      if (this.changePinCurrentValue.length !== 4 || this.changePinNewValue.length !== 4 || this.changePinConfirmValue.length !== 4 || this.saving) return

      if (this.changePinNewValue !== this.changePinConfirmValue) {
        this.modalError = 'New PINs do not match.'
        return
      }

      this.saving = true
      this.modalError = ''
      this.modalSuccess = ''

      try {
        const res = await this.$axios.$post('/api/kids-mode/change-pin', {
          currentPin: this.changePinCurrentValue,
          newPin: this.changePinNewValue,
        })
        this.$store.commit('SET_HAS_KIDS_PIN', true)
        this.modalSuccess = 'PIN updated successfully.'
        this.changePinCurrentValue = ''
        this.changePinNewValue = ''
        this.changePinConfirmValue = ''
        setTimeout(() => { this.cancelModal() }, 1200)
      } catch (err) {
        this.modalError = err?.response?.data?.message || 'Failed to change PIN.'
      } finally {
        this.saving = false
      }
    },

    // ── Forgot PIN (reset with password) ────────
    async submitForgotPin() {
      if (!this.forgotPasswordValue || this.forgotNewPinValue.length !== 4 || this.forgotConfirmPinValue.length !== 4 || this.saving) return

      if (this.forgotNewPinValue !== this.forgotConfirmPinValue) {
        this.modalError = 'New PINs do not match.'
        return
      }

      this.saving = true
      this.modalError = ''
      this.modalSuccess = ''

      try {
        const res = await this.$axios.$post('/api/kids-mode/reset-pin', {
          password: this.forgotPasswordValue,
          newPin: this.forgotNewPinValue,
        })
        this.$store.commit('SET_HAS_KIDS_PIN', true)
        this.modalSuccess = 'PIN has been reset.'

        const returnTo = this.forgotPinReturnMode
        setTimeout(() => {
          if (returnTo === 'verify') {
            this.openModal('verify')
            this.$nextTick(() => {
              if (this.$refs.verifyPinInput) this.$refs.verifyPinInput.focus()
            })
          } else {
            this.cancelModal()
          }
        }, 1200)
      } catch (err) {
        this.modalError = err?.response?.data?.message || 'Failed to reset PIN.'
      } finally {
        this.saving = false
      }
    },
  },
}
</script>

<style lang="scss" scoped>
@import '~assets/scss/vars';

$banner-blue: #1a6cb8;
$banner-height: 42px;

.kids-view-banner {
  position: fixed;
  top: 64px;
  left: 0;
  right: 0;
  z-index: 999999;
  height: $banner-height;
  background: $banner-blue;
}

.kids-view-banner__inner {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  height: 100%;
}

.kids-view-banner__label {
  font-weight: 700;
  font-size: 14px;
  color: #fff;
  letter-spacing: 0.02em;
}

/* ── Toggle ─────���────────────────────────────────── */

.kids-view-banner__toggle-wrap {
  position: relative;
  display: inline-flex;

  &.is-disabled {
    .kids-view-banner__toggle {
      background: #6b8fb5;
      cursor: not-allowed;
      opacity: 0.6;
    }

    &:hover .kids-view-banner__tooltip {
      opacity: 1;
      visibility: visible;
      transform: translateY(0);
    }
  }
}

.kids-view-banner__toggle {
  position: relative;
  width: 44px;
  height: 24px;
  border-radius: 12px;
  border: none;
  background: rgba(255, 255, 255, 0.95);
  cursor: pointer;
  padding: 0;
  transition: background 0.2s ease;

  &.is-on {
    background: #2ecc40;
  }

  &:focus {
    outline: 2px solid rgba(255, 255, 255, 0.6);
    outline-offset: 2px;
  }
}

.kids-view-banner__toggle-knob {
  position: absolute;
  top: 3px;
  left: 3px;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background: $banner-blue;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  transition: transform 0.2s ease, background 0.2s ease;

  .is-on & {
    transform: translateX(20px);
    background: #fff;
  }
}

/* ── Tooltip ─────────────────────────────────────── */

.kids-view-banner__tooltip {
  position: absolute;
  top: calc(100% + 8px);
  left: 50%;
  transform: translateX(-50%) translateY(4px);
  white-space: nowrap;
  background: #1b1b1b;
  color: #fff;
  font-size: 12px;
  font-weight: 600;
  padding: 6px 12px;
  border-radius: 6px;
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.2s ease, transform 0.2s ease, visibility 0.2s ease;
  pointer-events: none;
  z-index: 10;

  &::before {
    content: '';
    position: absolute;
    bottom: 100%;
    left: 50%;
    transform: translateX(-50%);
    border: 5px solid transparent;
    border-bottom-color: #1b1b1b;
  }
}

/* ── Status + Change PIN ─────────────────────────── */

.kids-view-banner__status {
  font-weight: 700;
  font-size: 14px;
  color: #fff;
}


/* ── PIN Modal (shared) ──��───────────────────────── */

.pin-modal-backdrop {
  position: fixed;
  inset: 0;
  padding: 126px 16px 40px;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: flex-start;
  justify-content: center;
  overflow-y: auto;
  z-index: 1000001;
}

.pin-modal {
  background: #fff;
  border-radius: 16px;
  padding: 48px 28px 32px;
  width: 100%;
  max-width: 380px;
  text-align: center;
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.18);
  position: relative;
  flex-shrink: 0;

  h3 {
    margin: 0 0 8px;
    font-size: 20px;
    color: #1a1a2e;
    font-weight: 700;
    line-height: 1.3;
  }

  >p {
    margin: 0 0 22px;
    font-size: 14px;
    color: #666;
    line-height: 1.5;
  }
}

.modal-x-close {
  position: absolute;
  top: 16px;
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

  &:hover {
    color: #c53030;
  }
}

.pin-field-label {
  display: block;
  font-size: 12px;
  font-weight: 600;
  color: #888;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  margin-bottom: 6px;
}

.pin-input-wrap {
  margin-bottom: 24px;
}

.pin-input {
  width: 160px;
  padding: 14px 20px;
  font-size: 24px;
  letter-spacing: 12px;
  text-align: center;
  border: 1.5px solid #d0d7e0;
  border-radius: 10px;
  outline: none;
  background: #f9fafb;
  transition: border-color 0.2s, box-shadow 0.2s, background 0.2s;

  &:focus {
    border-color: $banner-blue;
    background: #fff;
    box-shadow: 0 0 0 3px rgba($banner-blue, 0.15);
  }
}

.pin-input--wide {
  width: 240px;
  font-size: 16px;
  letter-spacing: normal;
}

.pin-error {
  color: $danger;
  font-weight: 600;
  font-size: 13px;
  margin: 0 0 16px;
}

.pin-success {
  color: $success;
  font-weight: 600;
  font-size: 13px;
  margin: 0 0 16px;
}

.pin-actions {
  display: flex;
  gap: 16px;
  justify-content: center;
}

.pin-btn {
  padding: 12px 28px;
  border-radius: 10px;
  border: none;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.2s, border-color 0.2s, opacity 0.2s;
  min-height: 44px;

  &:disabled {
    opacity: 0.45;
    cursor: not-allowed;
  }
}

.pin-btn--cancel {
  background: transparent;
  color: #555;
  border: 1.5px solid #d0d7e0;

  &:hover {
    border-color: #aab4c0;
    background: #f5f6f8;
  }
}

.pin-btn--submit {
  background: $banner-blue;
  color: #fff;
  border: 1.5px solid $banner-blue;

  &:hover:not(:disabled) {
    background: darken($banner-blue, 6%);
    border-color: darken($banner-blue, 6%);
  }
}

.pin-links {
  display: flex;
  justify-content: center;
  gap: 28px;
  margin-top: 20px;
}

.pin-link {
  color: $banner-blue;
  font-size: 13px;
  font-weight: 400;
  cursor: pointer;
  text-decoration: underline;

  &:hover {
    color: darken($banner-blue, 10%);
  }
}

/* ── Verify PIN modal redesign ─────────────────────── */

.verify-modal {
  background: #f0f7ff;
  overflow: visible;
  padding-top: 0;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.22), 0 4px 16px rgba(0, 0, 0, 0.08);

  h3 {
    color: #12304d;
  }
}

.verify-stripe {
  height: 6px;
  background: linear-gradient(to right, #e93d2f 25%, #ffbd05 25%, #ffbd05 50%, #0dab49 50%, #0dab49 75%, #1666ff 75%);
  margin: 0 -28px;
  border-radius: 16px 16px 0 0;
  flex-shrink: 0;
}

.verify-lock {
  margin: 36px auto 13px;
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba($banner-blue, 0.08);
  border-radius: 50%;
}


.verify-digits-wrap {
  position: relative;
  margin-bottom: 28px;
}

.verify-real-input {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  border: none;
  background: none;
  font-size: 24px;
  cursor: pointer;
  z-index: 2;
}

.verify-digits {
  display: flex;
  gap: 12px;
  justify-content: center;
  position: relative;
  z-index: 1;
}

.verify-digit-box {
  width: 48px;
  height: 56px;
  border: 2px solid #d0d7e0;
  border-radius: 10px;
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: border-color 0.2s, box-shadow 0.2s;

  &.is-active {
    border-color: $banner-blue;
    box-shadow: 0 0 0 3px rgba($banner-blue, 0.15);
  }

  &.is-filled {
    border-color: $banner-blue;
  }
}

.verify-dot {
  font-size: 28px;
  line-height: 1;
  color: #12304d;
}

.verify-actions {
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: stretch;
}

.verify-confirm-btn {
  width: 100%;
  padding: 14px 24px;
  border-radius: 10px;
  border: none;
  background: $banner-blue;
  color: #fff;
  font-size: 15px;
  font-weight: 700;
  cursor: pointer;
  transition: background 0.2s;

  &:hover:not(:disabled) {
    background: darken($banner-blue, 6%);
  }

  &:disabled {
    opacity: 0.45;
    cursor: not-allowed;
  }
}

.verify-cancel-btn {
  width: 100%;
  padding: 10px 24px;
  border-radius: 10px;
  border: 1.5px solid #d0d7e0;
  background: transparent;
  color: #666;
  font-size: 13px;
  font-weight: 600;
  cursor: pointer;
  transition: border-color 0.2s, background 0.2s;

  &:hover {
    border-color: #aab4c0;
    background: rgba(#fff, 0.6);
  }
}

/* ── Transition ─────────────────────────────────── */

.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: opacity 0.25s ease;
}

.modal-fade-enter,
.modal-fade-leave-to {
  opacity: 0;
}

/* ── Responsive ──────��───────────────────────────── */

@media (max-width: 480px) {
  .kids-view-banner__inner {
    padding: 0 12px;
  }

  .kids-view-banner__label,
  .kids-view-banner__status {
    font-size: 12px;
  }
}
</style>
