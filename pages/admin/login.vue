<template>
  <div class="login-wrap">
    <div class="login-card">
      <div class="login-logo">
        <span class="lock-icon">🔒</span>
        <h1>Admin access</h1>
        <p>The Assessment Library — internal only</p>
      </div>
      <form @submit.prevent="login">
        <div class="field">
          <label for="secret">Admin password</label>
          <input
            id="secret"
            v-model="secret"
            type="password"
            placeholder="Enter admin password"
            autocomplete="current-password"
            :disabled="loading"
            autofocus
          />
        </div>
        <div v-if="error" class="error-msg">{{ error }}</div>
        <button type="submit" class="login-btn" :disabled="loading || !secret">
          {{ loading ? 'Checking...' : 'Sign in' }}
        </button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AdminLogin',
  layout: 'admin',
  middleware: [],
  data() {
    return {
      secret: '',
      loading: false,
      error: '',
    }
  },
  methods: {
    async login() {
      this.loading = true
      this.error = ''
      try {
        const res = await this.$axios.post('/api/admin/verify', {
          adminSecret: this.secret,
        })
        if (res.data.ok) {
          sessionStorage.setItem('tal_admin_secret', this.secret)
          this.$router.push('/admin')
        } else {
          this.error = 'Incorrect password.'
        }
      } catch (err) {
        this.error = err.response?.data?.error || 'Incorrect password.'
      } finally {
        this.loading = false
      }
    },
  },
}
</script>

<style scoped>
.login-wrap {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--color-background-tertiary, #f5f4f1);
  padding: 1rem;
}
.login-card {
  background: var(--color-background-primary, #fff);
  border: 0.5px solid var(--color-border-tertiary, rgba(0,0,0,0.12));
  border-radius: 16px;
  padding: 2.5rem 2rem;
  width: 100%;
  max-width: 380px;
}
.login-logo {
  text-align: center;
  margin-bottom: 2rem;
}
.lock-icon {
  font-size: 32px;
  display: block;
  margin-bottom: 0.75rem;
}
h1 {
  font-size: 20px;
  font-weight: 500;
  margin: 0 0 4px;
}
.login-logo p {
  font-size: 13px;
  color: var(--color-text-secondary, #666);
  margin: 0;
}
.field {
  display: flex;
  flex-direction: column;
  gap: 6px;
  margin-bottom: 1rem;
}
label {
  font-size: 13px;
  font-weight: 500;
  color: var(--color-text-secondary, #666);
}
input {
  padding: 10px 12px;
  border: 0.5px solid var(--color-border-secondary, rgba(0,0,0,0.3));
  border-radius: 8px;
  font-size: 15px;
  background: var(--color-background-primary, #fff);
  color: var(--color-text-primary, #1a1a1a);
  font-family: inherit;
  outline: none;
  transition: border-color 0.15s;
  width: 100%;
  box-sizing: border-box;
}
input:focus {
  border-color: #534AB7;
  box-shadow: 0 0 0 3px rgba(83,74,183,0.1);
}
input:disabled { opacity: 0.5; }
.error-msg {
  font-size: 13px;
  color: #A32D2D;
  background: #FCEBEB;
  border: 0.5px solid rgba(163,45,45,0.3);
  border-radius: 6px;
  padding: 8px 12px;
  margin-bottom: 1rem;
}
.login-btn {
  width: 100%;
  padding: 12px;
  background: #534AB7;
  color: #fff;
  border: none;
  border-radius: 10px;
  font-size: 15px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.15s;
  font-family: inherit;
}
.login-btn:hover:not(:disabled) { background: #3C3489; }
.login-btn:disabled { opacity: 0.5; cursor: not-allowed; }
</style>
