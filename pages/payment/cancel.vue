<template>
  <div class="payment-result-page">
    <div class="result-card">
      <div class="icon-circle">&#8592;</div>
      <h1>Payment Cancelled</h1>
      <p>No charge was made. You can purchase credits any time from your dashboard.</p>
      <div class="actions">
        <nuxt-link to="/dashboard" class="result-btn">
          Go to Dashboard
        </nuxt-link>
        <nuxt-link to="/library" class="result-btn result-btn--outline">
          Browse Assessments
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PaymentCancel',
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

.icon-circle {
  width: 72px;
  height: 72px;
  border-radius: 50%;
  background: #f5f5f5;
  color: #888;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  margin: 0 auto 24px;
}

h1 {
  font-size: 1.6rem;
  font-weight: 700;
  color: #1a1a2e;
  margin: 0 0 12px;
}

p {
  color: #666;
  font-size: 1rem;
  line-height: 1.5;
  margin: 0 0 28px;
}

.actions {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
}

.result-btn {
  display: inline-block;
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
