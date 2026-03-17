<template>
  <div class="payment-result-page">
    <div class="result-card">
      <div v-if="loading" class="state-loading">
        <div class="spinner" />
        <p>Confirming your payment…</p>
      </div>

      <div v-else-if="error" class="state-error">
        <div class="icon-circle icon-circle--error">&#10005;</div>
        <h1>Something went wrong</h1>
        <p>{{ error }}</p>
        <nuxt-link to="/dashboard" class="result-btn result-btn--outline">
          Go to Dashboard
        </nuxt-link>
      </div>

      <div v-else class="state-success">
        <div class="icon-circle icon-circle--success">&#10003;</div>
        <h1>{{ isSubscription ? 'Subscription Started!' : 'Payment Successful!' }}</h1>
        <p>
          Successfully added
          <strong>{{ creditsAdded }} credit<span v-if="creditsAdded !== 1">s</span></strong>
          to your account.
        </p>
        <p class="balance-line">
          Your new balance: <span class="balance-value">{{ newBalance }} credit<span v-if="newBalance !== 1">s</span></span>
        </p>
        <p v-if="isSubscription" class="sub-renewal-note">
          {{ creditsAdded }} credit<span v-if="creditsAdded !== 1">s</span> will be added automatically each month.
        </p>
        <div class="result-actions">
          <nuxt-link to="/dashboard" class="result-btn">
            Go to Dashboard
          </nuxt-link>
          <nuxt-link to="/library" class="result-btn result-btn--outline">
            Browse Assessments
          </nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PaymentSuccess',

  data() {
    return {
      loading: true,
      error: '',
      creditsAdded: 0,
      newBalance: 0,
      isSubscription: false,
    };
  },

  computed: {
    billingParam() {
      return this.$route.query.billing;
    },
  },

  async mounted() {
    const sessionId = this.$route.query.session_id;
    if (!sessionId) {
      this.error = 'No payment session found.';
      this.loading = false;
      return;
    }

    try {
      const token =
        this.$store.state.token ||
        (process.client && localStorage.getItem('tal_token')) ||
        null;
      const res = await this.$axios.$post(
        '/api/payments/verify-and-fulfill',
        { sessionId },
        token ? { headers: { Authorization: `Bearer ${token}` } } : {}
      );

      this.creditsAdded    = res.creditsAdded || 0;
      this.newBalance      = res.creditsBalance;
      this.isSubscription  = !!res.isSubscription;

      this.$store.commit('SET_CREDITS', res.creditsBalance);
    } catch (err) {
      this.error =
        (err.response && err.response.data && err.response.data.message) ||
        'Could not verify payment. Please contact support if credits were not added.';
    } finally {
      this.loading = false;
    }
  },
};
</script>

<style lang="scss" scoped>
@import '~assets/scss/vars';

.payment-result-page {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f0f6fb;
  padding: 24px 16px;
}

.result-card {
  background: #fff;
  border-radius: 20px;
  padding: 48px 40px;
  max-width: 460px;
  width: 100%;
  text-align: center;
  box-shadow: 0 12px 48px rgba(0, 0, 0, 0.1);

  @media (max-width: 480px) {
    padding: 36px 24px;
  }
}

/* Loading */
.state-loading {
  p { color: #666; margin-top: 20px; }
}

.spinner {
  width: 48px;
  height: 48px;
  border: 4px solid #e0e0e0;
  border-top-color: $color-d;
  border-radius: 50%;
  animation: spin 0.8s linear infinite;
  margin: 0 auto;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}

/* Icon circles */
.icon-circle {
  width: 72px;
  height: 72px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  font-weight: 700;
  margin: 0 auto 24px;

  &--success {
    background: #e6f9ee;
    color: $color-s;
  }

  &--error {
    background: #fdecea;
    color: $color-d;
  }
}

h1 {
  font-size: 1.6rem;
  font-weight: 700;
  color: #1a1a2e;
  margin: 0 0 12px;
}

p {
  color: #555;
  font-size: 1rem;
  margin: 0 0 8px;
  line-height: 1.5;
}

.balance-line {
  font-size: 0.95rem;
  color: #777;
  margin-bottom: 8px;
}

.sub-renewal-note {
  font-size: 0.85rem;
  color: #888;
  margin-bottom: 24px;
  font-style: italic;
}

.result-actions {
  margin-top: 24px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
}

.balance-value {
  font-weight: 700;
  color: #1a1a2e;
}

.result-btn {
  display: inline-block;
  margin: 6px;
  padding: 12px 28px;
  background: $color-d;
  color: #fff;
  border-radius: 8px;
  font-weight: 600;
  font-size: 0.95rem;
  text-decoration: none;
  transition: opacity 0.2s;

  &:hover { opacity: 0.88; }

  &--outline {
    background: transparent;
    border: 2px solid $color-d;
    color: $color-d;
  }
}
</style>
