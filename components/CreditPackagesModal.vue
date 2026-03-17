<template>
  <transition name="modal-fade">
    <div v-if="show" class="modal-backdrop" @click.self="$emit('close')">
      <div class="credits-modal">
        <button class="modal-close" @click="$emit('close')" aria-label="Close">&#10005;</button>

        <div class="modal-header">
          <h2>Purchase Credits</h2>
          <p>Each credit unlocks one assessment. Credits never expire.</p>
        </div>

        <div v-if="loadingPackages" class="packages-loading">
          <span>Loading packages…</span>
        </div>

        <div v-else class="packages-grid">
          <div
            v-for="pkg in packages"
            :key="pkg.id"
            class="package-card"
            :class="{ 'is-popular': pkg.credits === 5 }"
            @click="selectPackage(pkg)"
          >
            <div v-if="pkg.credits === 5" class="popular-badge">Most Popular</div>
            <div class="pkg-credits">{{ pkg.credits }}</div>
            <div class="pkg-credits-label">Credit<span v-if="pkg.credits !== 1">s</span></div>
            <div class="pkg-price">${{ (pkg.price / 100).toFixed(0) }}</div>
            <div class="pkg-description">{{ pkg.description }}</div>
            <div class="pkg-per-credit">${{ (pkg.price / pkg.credits / 100).toFixed(2) }} / credit</div>
          </div>
        </div>

        <p v-if="errorMsg" class="error-msg">{{ errorMsg }}</p>

        <p class="secure-note">
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
          Secure checkout via Stripe
        </p>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'CreditPackagesModal',

  props: {
    show: {
      type: Boolean,
      default: false,
    },
  },

  data() {
    return {
      packages: [],
      loadingPackages: true,
      redirecting: false,
      errorMsg: '',
    };
  },

  watch: {
    show(val) {
      if (val && this.packages.length === 0) {
        this.loadPackages();
      }
    },
  },

  methods: {
    async loadPackages() {
      try {
        this.loadingPackages = true;
        const res = await this.$axios.$get('/api/payments/packages');
        this.packages = res.packages || [];
      } catch (err) {
        this.errorMsg = 'Could not load packages. Please try again.';
      } finally {
        this.loadingPackages = false;
      }
    },

    getToken() {
      return (
        this.$store.state.token ||
        (process.client && localStorage.getItem('tal_token')) ||
        null
      );
    },

    async selectPackage(pkg) {
      if (this.redirecting) return;
      this.errorMsg = '';
      this.redirecting = true;

      try {
        const token = this.getToken();
        const res = await this.$axios.$post(
          '/api/payments/create-checkout-session',
          { packageId: pkg.id },
          token ? { headers: { Authorization: `Bearer ${token}` } } : {}
        );

        if (res && res.url) {
          window.location.href = res.url;
        } else {
          throw new Error('No checkout URL returned');
        }
      } catch (err) {
        this.errorMsg =
          (err.response && err.response.data && err.response.data.message) ||
          'Could not start checkout. Please try again.';
        this.redirecting = false;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import '~assets/scss/vars';

.modal-backdrop {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.55);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
  padding: 16px;
}

.credits-modal {
  background: #fff;
  border-radius: 16px;
  padding: 36px 32px 28px;
  max-width: 640px;
  width: 100%;
  position: relative;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.25);
}

.modal-close {
  position: absolute;
  top: 14px;
  right: 16px;
  background: none;
  border: none;
  font-size: 18px;
  cursor: pointer;
  color: #888;
  line-height: 1;
  padding: 4px 8px;

  &:hover { color: #333; }
}

.modal-header {
  text-align: center;
  margin-bottom: 28px;

  h2 {
    font-size: 1.5rem;
    font-weight: 700;
    margin: 0 0 8px;
    color: #1a1a2e;
  }

  p {
    color: #666;
    font-size: 0.95rem;
    margin: 0;
  }
}

.packages-loading {
  text-align: center;
  padding: 32px 0;
  color: #888;
}

.packages-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
  margin-bottom: 20px;

  @media (max-width: 520px) {
    grid-template-columns: 1fr;
  }
}

.package-card {
  border: 2px solid #e8e8e8;
  border-radius: 12px;
  padding: 20px 16px;
  text-align: center;
  cursor: pointer;
  position: relative;
  transition: border-color 0.2s, transform 0.15s, box-shadow 0.2s;

  &:hover {
    border-color: $color-d;
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.1);
  }

  &.is-popular {
    border-color: $color-d;
    background: #fff9f9;

    &:hover {
      box-shadow: 0 6px 24px rgba(233, 61, 47, 0.2);
    }
  }
}

.popular-badge {
  position: absolute;
  top: -11px;
  left: 50%;
  transform: translateX(-50%);
  background: $color-d;
  color: #fff;
  font-size: 0.68rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  padding: 3px 10px;
  border-radius: 20px;
  white-space: nowrap;
}

.pkg-credits {
  font-size: 2.4rem;
  font-weight: 800;
  color: #1a1a2e;
  line-height: 1;
}

.pkg-credits-label {
  font-size: 0.8rem;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  color: #888;
  margin-bottom: 12px;
}

.pkg-price {
  font-size: 1.6rem;
  font-weight: 700;
  color: $color-d;
  margin-bottom: 8px;
}

.pkg-description {
  font-size: 0.8rem;
  color: #666;
  margin-bottom: 8px;
  line-height: 1.4;
}

.pkg-per-credit {
  font-size: 0.75rem;
  color: #aaa;
}

.error-msg {
  color: $color-d;
  font-size: 0.88rem;
  text-align: center;
  margin: 8px 0;
}

.secure-note {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  font-size: 0.78rem;
  color: #aaa;
  margin: 12px 0 0;

  svg {
    flex-shrink: 0;
    stroke: #aaa;
  }
}

/* Transition */
.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: opacity 0.2s;
}
.modal-fade-enter,
.modal-fade-leave-to {
  opacity: 0;
}
</style>
