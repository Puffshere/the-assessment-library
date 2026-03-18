<template>
  <div class="page-wrap">
    <main-nav />

    <section class="success-section">
      <div class="success-container">

        <!-- Loading -->
        <div v-if="loading" class="result-card">
          <div class="spinner" />
          <p class="status-text">Confirming your payment…</p>
        </div>

        <!-- Error -->
        <div v-else-if="error" class="result-card">
          <div class="icon-circle icon-circle--error">&#10005;</div>
          <h1>Something went wrong</h1>
          <p class="sub-text">{{ error }}</p>
          <div class="action-row">
            <nuxt-link to="/dashboard" class="btn-primary">Go to Dashboard</nuxt-link>
          </div>
        </div>

        <!-- Success -->
        <div v-else class="result-card">
          <div class="icon-circle icon-circle--success">&#10003;</div>
          <h1>{{ isSubscription ? 'Subscription Started!' : 'Payment Successful!' }}</h1>
          <p class="credits-added">
            Successfully added
            <strong>{{ creditsAdded }} credit<span v-if="creditsAdded !== 1">s</span></strong>
            to your account.
          </p>
          <div class="balance-box">
            <span class="balance-label">New balance</span>
            <span class="balance-value">{{ newBalance }}</span>
            <span class="balance-unit">credit<span v-if="newBalance !== 1">s</span></span>
          </div>
          <p v-if="isSubscription" class="renewal-note">
            {{ creditsAdded }} credit<span v-if="creditsAdded !== 1">s</span> will be added to your account automatically every month.
          </p>
          <div class="action-row">
            <nuxt-link to="/dashboard" class="btn-primary">Go to Dashboard</nuxt-link>
            <nuxt-link to="/library" class="btn-outline">Browse Assessments</nuxt-link>
          </div>
        </div>

      </div>
    </section>

    <footer-fold />
  </div>
</template>

<script>
export default {
  name: 'PaymentSuccess',

  components: {
    'main-nav':    () => import('@/components/Nav'),
    'footer-fold': () => import('@/components/Footer'),
  },

  data() {
    return {
      loading:        true,
      error:          '',
      creditsAdded:   0,
      newBalance:     0,
      isSubscription: false,
    };
  },

  async mounted() {
    const sessionId = this.$route.query.session_id;

    if (!sessionId) {
      this.error   = 'No payment session found. If you completed a payment, your credits may still have been added — please check your dashboard.';
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

      this.creditsAdded   = res.creditsAdded   || 0;
      this.newBalance     = res.creditsBalance  || 0;
      this.isSubscription = !!res.isSubscription;

      this.$store.commit('SET_CREDITS', res.creditsBalance);
    } catch (err) {
      const msg = err.response && err.response.data && err.response.data.message;
      this.error = msg || 'Could not confirm your payment. If credits were charged, please contact support — your credits will not be lost.';
    } finally {
      this.loading = false;
    }
  },
};
</script>

<style lang="scss" scoped>
@import '~assets/scss/vars';

.page-wrap {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.success-section {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f0f6fb;
  padding: 48px 16px;
}

.success-container {
  width: 100%;
  max-width: 480px;
}

.result-card {
  background: #fff;
  border-radius: 20px;
  padding: 48px 40px;
  text-align: center;
  box-shadow: 0 8px 40px rgba(0, 0, 0, 0.1);

  @media (max-width: 520px) {
    padding: 36px 24px;
  }
}

/* Loading */
.spinner {
  width: 48px;
  height: 48px;
  border: 4px solid #e0e0e0;
  border-top-color: $color-d;
  border-radius: 50%;
  animation: spin 0.8s linear infinite;
  margin: 0 auto 20px;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}

.status-text {
  color: #888;
  font-size: 1rem;
  margin: 0;
}

/* Icon */
.icon-circle {
  width: 72px;
  height: 72px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2.2rem;
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
  margin: 0 0 14px;
}

.sub-text {
  color: #666;
  font-size: 0.95rem;
  line-height: 1.6;
  margin: 0 0 24px;
}

.credits-added {
  color: #555;
  font-size: 1rem;
  margin: 0 0 20px;
  line-height: 1.5;

  strong { color: #1a1a2e; }
}

/* Balance box */
.balance-box {
  display: inline-flex;
  align-items: baseline;
  gap: 6px;
  background: #f0f6fb;
  border-radius: 12px;
  padding: 14px 28px;
  margin-bottom: 20px;
}

.balance-label {
  font-size: 0.8rem;
  color: #888;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.balance-value {
  font-size: 2.4rem;
  font-weight: 800;
  color: #1a1a2e;
  line-height: 1;
}

.balance-unit {
  font-size: 0.9rem;
  color: #666;
}

.renewal-note {
  font-size: 0.84rem;
  color: #888;
  font-style: italic;
  margin: 0 0 8px;
  line-height: 1.5;
}

/* Buttons */
.action-row {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 12px;
  margin-top: 28px;
}

.btn-primary,
.btn-outline {
  display: inline-block;
  padding: 12px 28px;
  border-radius: 8px;
  font-weight: 600;
  font-size: 0.95rem;
  text-decoration: none;
  transition: opacity 0.2s;

  &:hover { opacity: 0.85; }
}

.btn-primary {
  background: $color-d;
  color: #fff;
}

.btn-outline {
  background: transparent;
  border: 2px solid $color-d;
  color: $color-d;
}
</style>
