<template>
    <transition name="archie-slide">
        <div v-if="isVisible && isLoggedIn && !!$store.state.user" class="archie" :class="{ 'archie--collapsed': isCollapsed, 'archie--chat': isChatMode }">

            <!-- Collapsed pill -->
            <button v-if="isCollapsed" class="archie__pill" @click="expand" aria-label="Open Archie">
                <span class="archie__pill-avatar">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                        <circle cx="12" cy="7" r="4" />
                    </svg>
                </span>
                <span class="archie__pill-name">Archie</span>
            </button>

            <!-- Expanded card -->
            <div v-else class="archie__card">
                <div class="archie__header">
                    <div class="archie__identity">
                        <div class="archie__avatar">
                            <svg class="archie__avatar-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                                <circle cx="12" cy="7" r="4" />
                            </svg>
                            <span class="archie__status-dot"></span>
                        </div>
                        <div class="archie__meta">
                            <span class="archie__name">Archie</span>
                            <span class="archie__label">{{ isChatMode ? 'Ask me anything' : 'Your AI Guide' }}</span>
                        </div>
                    </div>
                    <div class="archie__header-actions">
                        <button class="archie__mode-btn" @click="toggleChatMode" :title="isChatMode ? 'Back to tip' : 'Chat with Archie'">
                            <svg v-if="!isChatMode" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
                            </svg>
                            <svg v-else width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
                            </svg>
                        </button>
                        <button class="archie__collapse-btn" @click="collapse" aria-label="Minimize Archie">
                            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                                <path d="M2 9l5-5 5 5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </button>
                    </div>
                </div>

                <template v-if="!isChatMode">
                    <div class="archie__body">
                        <div v-if="isLoading" class="archie__loading">
                            <span></span><span></span><span></span>
                        </div>
                        <p v-else class="archie__message" v-html="currentTip"></p>
                    </div>

                    <div v-if="!isLoading && quickActions.length" class="archie__actions">
                        <button
                            v-for="action in quickActions"
                            :key="action.route"
                            class="archie__action-chip"
                            @click="handleAction(action)">
                            {{ action.label }}
                        </button>
                    </div>

                    <div class="archie__footer">
                        <span class="archie__cache-indicator" :class="{ 'archie__cache-indicator--fresh': isFresh }">
                            {{ isFresh ? 'Fresh tip' : 'Cached tip' }}
                        </span>
                        <button class="archie__refresh-btn" :disabled="isLoading" @click="fetchTip(true)">
                            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                                <path d="M10.5 6A4.5 4.5 0 1 1 6 1.5" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" />
                                <path d="M6 1.5l1.5 1.5L6 4.5" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                            Refresh
                        </button>
                    </div>
                </template>

                <template v-else>
                    <div class="archie__chat-messages" ref="chatMessages">
                        <div v-for="(msg, idx) in chatHistory" :key="idx" class="archie__chat-msg" :class="'archie__chat-msg--' + msg.role">
                            <div class="archie__chat-bubble" v-html="msg.content"></div>
                        </div>
                        <div v-if="isChatLoading" class="archie__chat-msg archie__chat-msg--assistant">
                            <div class="archie__chat-bubble">
                                <div class="archie__loading"><span></span><span></span><span></span></div>
                            </div>
                        </div>
                    </div>
                    <div class="archie__chat-input-area">
                        <input ref="chatInput" v-model="chatInput" class="archie__chat-input" type="text" placeholder="Ask Archie anything..." :disabled="isChatLoading" @keydown.enter="sendMessage" />
                        <button class="archie__chat-send" :disabled="isChatLoading || !chatInput.trim()" @click="sendMessage">
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                                <line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/>
                            </svg>
                        </button>
                    </div>
                </template>
            </div>
        </div>
    </transition>
</template>

<script>
const CACHE_TTL_MS = 24 * 60 * 60 * 1000; // 24 hours

const PAGE_CONTEXTS = {
  "/dashboard": "dashboard",
  "/library": "library",
  "/library/": "assessment",
  "/auth": null, // hide on auth pages
};

const PAGE_ACTIONS = {
  dashboard: [
    { label: "Browse assessments", route: "/library" },
    { label: "View my results", route: "/dashboard#results" },
  ],
  library: [
    { label: "Go to dashboard", route: "/dashboard" },
    { label: "View my results", route: "/dashboard#results" },
  ],
  assessment: [{ label: "Go to dashboard", route: "/dashboard" }],
  results: [
    { label: "Take another", route: "/library" },
    { label: "Go to dashboard", route: "/dashboard" },
  ],
  default: [
    { label: "Go to dashboard", route: "/dashboard" },
    { label: "Browse assessments", route: "/library" },
  ],
};

export default {
  name: "ArchieButler",

  data() {
    return {
      isCollapsed: true,
      isLoading: false,
      currentTip: "",
      isFresh: false,
      isVisible: true,
      isChatMode: false,
      chatInput: '',
      chatHistory: [],
      isChatLoading: false,
    };
  },

  props: {
    traitOverride: {
      type: String,
      default: null,
    },
  },

  computed: {
    isLoggedIn() {
      return !!this.$store.state.loggedIn;
    },

    user() {
      return this.$store.state.user;
    },

    dominantTrait() {
      if (this.traitOverride) return this.traitOverride;

      // fallback — read from Vuex sessions
      const sessions = this.$store.state.sessionsByAssessmentId;
      let topTrait = null;
      let topScore = -1;
      if (sessions) {
        Object.values(sessions).forEach((session) => {
          if (session && session.score && session.score.breakdown) {
            Object.entries(session.score.breakdown).forEach(
              ([trait, score]) => {
                if (score > topScore) {
                  topScore = score;
                  topTrait = trait;
                }
              }
            );
          }
        });
      }
      return topTrait || "general";
    },

    pageContext() {
      const path = this.$route.path;

      // Hide on auth pages entirely
      if (path.startsWith("/auth")) {
        return null;
      }

      if (path === "/dashboard") return "dashboard";
      if (path.startsWith("/library/") && path.length > "/library/".length)
        return "assessment";
      if (path === "/library") return "library";
      if (path.includes("results")) return "results";

      return "default";
    },

    quickActions() {
      return PAGE_ACTIONS[this.pageContext] || PAGE_ACTIONS.default;
    },

    cacheKey() {
      return `archie_${this.dominantTrait}_${this.pageContext}_${this.$store.state.kidsViewActive ? 'kids' : 'adult'}`;
    },

    kidsViewActive() {
      return this.$store.state.kidsViewActive;
    },
  },

  watch: {
    "$route.path"() {
      // Re-fetch tip when page changes
      if (this.pageContext) {
        this.fetchTip(false);
      }
    },

    isLoggedIn(val) {
      if (val) this.fetchTip(false);
    },

    kidsViewActive() {
      localStorage.removeItem(this.cacheKey);
      this.fetchTip(false);
    },

    "$store.state.activeChildProfile"(val) {
      if (val && this.$store.state.kidsViewActive) {
        localStorage.removeItem(this.cacheKey);
        this.fetchTip(false);
      }
    },
  },

  mounted() {
    Object.keys(localStorage).filter(k => k.startsWith('archie_')).forEach(k => localStorage.removeItem(k));
    if (this.isLoggedIn && this.pageContext) {
      this.fetchTip(false);
    }
  },

  methods: {
    expand() {
      this.isCollapsed = false;
    },

    collapse() {
      this.isCollapsed = true;
    },

    getCached() {
      try {
        const raw = localStorage.getItem(this.cacheKey);
        if (!raw) return null;
        const { tip, timestamp } = JSON.parse(raw);
        if (Date.now() - timestamp > CACHE_TTL_MS) {
          localStorage.removeItem(this.cacheKey);
          return null;
        }
        return tip;
      } catch {
        return null;
      }
    },

    setCache(tip) {
      try {
        localStorage.setItem(
          this.cacheKey,
          JSON.stringify({ tip, timestamp: Date.now() })
        );
      } catch {
        // localStorage full — fail silently
      }
    },

    async fetchTip(forceRefresh = false) {
      if (!this.pageContext) return;

      // Try cache first unless forced refresh
      if (!forceRefresh) {
        const cached = this.getCached();
        if (cached) {
          this.currentTip = cached;
          this.isFresh = false;
          return;
        }
      }

      this.isLoading = true;

      console.log('ARCHIE DEBUG', JSON.stringify(this.$store.state.activeChildProfile));
      console.log('ARCHIE DEBUG', this.$store.state.kidsViewActive);
      const profile = this.$store.state.activeChildProfile;
      let childStats = null;
      if (profile) {
        // Derive stats the same way KidsCharacterCard does
        const sessions = profile.completedAssessments || [];
        let disc = null;
        if (sessions.length) {
          const totals = { D: 0, I: 0, S: 0, C: 0 };
          sessions.forEach(s => {
            if (s.scoreBreakdown) {
              totals.D += Number(s.scoreBreakdown.D) || 0;
              totals.I += Number(s.scoreBreakdown.I) || 0;
              totals.S += Number(s.scoreBreakdown.S) || 0;
              totals.C += Number(s.scoreBreakdown.C) || 0;
            }
          });
          disc = {
            D: totals.D / sessions.length,
            I: totals.I / sessions.length,
            S: totals.S / sessions.length,
            C: totals.C / sessions.length,
          };
        }
        if (disc) {
          const clamp = v => Math.round(Math.min(100, Math.max(0, v)));
          childStats = {
            strength: clamp(disc.D),
            leadership: clamp(disc.D),
            speed: clamp(disc.I),
            creativity: clamp((disc.I + disc.C) / 2),
            heart: clamp(disc.S),
            wisdom: clamp((disc.S + disc.C) / 2),
          };
        } else if (profile.stats) {
          childStats = Object.fromEntries(Object.entries(profile.stats).map(([k, v]) => [k, Math.round(v || 0)]));
        }
      }
      try {
        const res = await this.$axios.$post("/api/archie/tip", {
          trait: this.dominantTrait,
          pageContext: this.pageContext,
          userName: this.user ? this.user.name : null,
          isKidsMode: this.$store.state.kidsViewActive,
          childName: profile ? profile.childName : null,
          childCharacterName: profile ? profile.characterName : null,
          childDiscType: profile ? profile.currentDiscType : null,
          childStats: childStats,
          childCompletedCount: profile ? profile.completedAssessments ? profile.completedAssessments.length : 0 : 0,
        });

        this.currentTip = res.tip;
        this.isFresh = true;
        this.setCache(res.tip);
      } catch (err) {
        this.currentTip =
          "Welcome! I'm Archie, your guide through The Assessment Library. Let me know if you need help finding the right assessment.";
        this.isFresh = false;
      } finally {
        this.isLoading = false;
      }
    },

    handleAction(action) {
      this.$router.push(action.route);
    },

    toggleChatMode() {
      this.isChatMode = !this.isChatMode;
      if (this.isChatMode) {
        this.loadChatHistory();
        if (this.chatHistory.length === 0 && this.currentTip) {
          this.chatHistory.push({ role: 'assistant', content: this.currentTip });
          this.saveChatHistory();
        }
        this.$nextTick(() => {
          this.scrollToBottom();
          if (this.$refs.chatInput) this.$refs.chatInput.focus();
        });
      }
    },

    loadChatHistory() {
      try {
        const userId = this.user ? this.user.id || this.user._id : 'guest';
        const raw = localStorage.getItem(`archie_chat_${userId}`);
        if (raw) this.chatHistory = JSON.parse(raw);
      } catch { this.chatHistory = []; }
    },

    saveChatHistory() {
      try {
        const userId = this.user ? this.user.id || this.user._id : 'guest';
        localStorage.setItem(`archie_chat_${userId}`, JSON.stringify(this.chatHistory.slice(-50)));
      } catch {}
    },

    scrollToBottom() {
      const el = this.$refs.chatMessages;
      if (el) el.scrollTop = el.scrollHeight;
    },

    async sendMessage() {
      const text = this.chatInput.trim();
      if (!text || this.isChatLoading) return;
      this.chatInput = '';
      this.chatHistory.push({ role: 'user', content: text });
      this.saveChatHistory();
      this.isChatLoading = true;
      this.$nextTick(() => this.scrollToBottom());
      const profile = this.$store.state.activeChildProfile;
      let childStats = null;
      if (profile) {
        const sessions = profile.completedAssessments || [];
        let disc = null;
        if (sessions.length) {
          const totals = { D: 0, I: 0, S: 0, C: 0 };
          sessions.forEach(s => {
            if (s.scoreBreakdown) {
              totals.D += Number(s.scoreBreakdown.D) || 0;
              totals.I += Number(s.scoreBreakdown.I) || 0;
              totals.S += Number(s.scoreBreakdown.S) || 0;
              totals.C += Number(s.scoreBreakdown.C) || 0;
            }
          });
          disc = { D: totals.D / sessions.length, I: totals.I / sessions.length, S: totals.S / sessions.length, C: totals.C / sessions.length };
        }
        if (disc) {
          const clamp = v => Math.round(Math.min(100, Math.max(0, v)));
          childStats = { strength: clamp(disc.D), leadership: clamp(disc.D), speed: clamp(disc.I), creativity: clamp((disc.I + disc.C) / 2), heart: clamp(disc.S), wisdom: clamp((disc.S + disc.C) / 2) };
        } else if (profile.stats) {
          childStats = Object.fromEntries(Object.entries(profile.stats).map(([k, v]) => [k, Math.round(v || 0)]));
        }
      }
      try {
        const res = await this.$axios.$post('/api/archie/chat', {
          message: text,
          history: this.chatHistory.slice(-10),
          trait: this.dominantTrait,
          pageContext: this.pageContext,
          userName: this.user ? this.user.name : null,
          isKidsMode: this.$store.state.kidsViewActive,
          childName: profile ? profile.childName : null,
          childCharacterName: profile ? profile.characterName : null,
          childDiscType: profile ? profile.currentDiscType : null,
          childStats,
          childCompletedCount: profile ? (profile.completedAssessments ? profile.completedAssessments.length : 0) : 0,
        });
        this.chatHistory.push({ role: 'assistant', content: res.reply });
        this.saveChatHistory();
      } catch {
        this.chatHistory.push({ role: 'assistant', content: 'Sorry, I had trouble responding. Please try again!' });
      } finally {
        this.isChatLoading = false;
        this.$nextTick(() => this.scrollToBottom());
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import "~assets/scss/vars";

.archie {
  position: fixed;
  bottom: 24px;
  right: 28px; // was 24px — gives breathing room from edge
  z-index: 1000;
  font-family: $font-family;

  &--collapsed {
    bottom: 20px;
    right: 24px;
  }
}

.archie__pill {
  display: flex;
  align-items: center;
  gap: 8px;
  background: #12304d;
  color: #fff;
  border: none;
  border-radius: 50px;
  padding: 10px 18px 10px 10px;
  cursor: pointer;
  box-shadow: 0 4px 16px rgba(18, 48, 77, 0.4);
  transition: transform 0.15s ease, box-shadow 0.15s ease;
  position: relative;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(18, 48, 77, 0.5);
  }

  &:active {
    transform: scale(0.97);
  }
}

.archie__pill-avatar {
  width: 28px;
  height: 28px;
  border-radius: 50%;
  background: $primary;
  border: 2px solid rgba(#fff, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  line-height: 1;
  flex-shrink: 0;
}

.archie__pill-name {
  font-size: 14px;
  font-weight: 600;
  letter-spacing: 0.01em;
}

.archie__unread-dot {
  position: absolute;
  top: 6px;
  right: 6px;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: $warning;
  border: 2px solid $primary;
}

.archie__card {
  width: 280px; // was 300px — slightly tighter
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 4px 24px rgba(0, 51, 197, 0.13), 0 2px 8px rgba(0, 0, 0, 0.07);
  overflow: hidden;
  border: 2px solid rgba($primary, 0.15);
}

.archie__header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 16px;
  background: #12304d; // your site's heading dark color — more premium
  color: #fff;
  position: relative;
  overflow: hidden;

  // DISC color bar at the bottom — matches your site's brand stripe
  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: linear-gradient(
      to right,
      #e93d2f 25%,
      #ffbd05 25%,
      #ffbd05 50%,
      #0dab49 50%,
      #0dab49 75%,
      #1666ff 75%
    );
  }
}

.archie__identity {
  display: flex;
  align-items: center;
  gap: 10px;
}

.archie__avatar {
  position: relative;
  width: 34px;
  height: 34px;
  border-radius: 50%;
  background: $primary;
  border: 2px solid rgba(#fff, 0.4);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.archie__avatar-icon {
  width: 16px;
  height: 16px;
  display: block;
}

.archie__status-dot {
  position: absolute;
  bottom: 1px;
  right: 1px;
  width: 9px;
  height: 9px;
  border-radius: 50%;
  background: $success;
  border: 2px solid $primary;
}

.archie__meta {
  display: flex;
  flex-direction: column;
  gap: 1px;
}

.archie__name {
  font-size: 15px;
  font-weight: 700;
  color: #fff;
  letter-spacing: 0.02em;
  line-height: 1.2;
}

.archie__label {
  font-size: 11px;
  color: rgba(#fff, 0.6);
  letter-spacing: 0.03em;
  font-family: $nunito-family;
}

.archie__collapse-btn {
  background: rgba(#fff, 0.15);
  border: none;
  border-radius: 6px;
  width: 28px;
  height: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  cursor: pointer;
  transition: background 0.15s;

  &:hover {
    background: rgba(#fff, 0.25);
  }
}

// Body
.archie__body {
  padding: 14px 16px 10px;
  min-height: 72px;
  display: flex;
  align-items: center;
}

.archie__message {
  font-size: 13px;
  color: #12304d; // matches your site's heading color
  line-height: 1.65;
  margin: 0;
  font-family: $nunito-family;

  strong {
    color: $primary;
    font-weight: 700;
  }
}

// Loading dots
.archie__loading {
  display: flex;
  gap: 5px;
  align-items: center;
  padding: 4px 0;

  span {
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: rgba($primary, 0.3);
    animation: archie-bounce 1s infinite;

    &:nth-child(2) {
      animation-delay: 0.15s;
    }
    &:nth-child(3) {
      animation-delay: 0.3s;
    }
  }
}

@keyframes archie-bounce {
  0%,
  80%,
  100% {
    transform: translateY(0);
    opacity: 0.4;
  }
  40% {
    transform: translateY(-5px);
    opacity: 1;
  }
}

// Quick action chips
.archie__actions {
  padding: 0 16px 12px;
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
}

.archie__action-chip {
  font-size: 12px;
  font-family: $font-family;
  font-weight: 600;
  color: $primary;
  background: #fff;
  border: 2px solid rgba($primary, 0.3);
  border-radius: 8px; // matches your site's button border-radius
  padding: 5px 12px;
  cursor: pointer;
  transition: background 0.15s, border-color 0.15s, transform 0.1s;
  white-space: nowrap;

  &:hover {
    background: rgba($primary, 0.06);
    border-color: $primary;
  }

  &:active {
    transform: scale(0.97);
  }
}

.archie__footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 14px;
  border-top: 1px solid rgba($primary, 0.08);
  background: $sub-background;
  border-radius: 0 0 12px 12px;
}

.archie__cache-indicator {
  font-size: 11px;
  color: #999;
  display: flex;
  align-items: center;
  gap: 4px;

  &::before {
    content: "";
    display: inline-block;
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: #ccc;
  }

  &--fresh::before {
    background: $success;
  }
}

.archie__refresh-btn {
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 11px;
  font-family: $font-family;
  color: $secondary;
  background: none;
  border: none;
  cursor: pointer;
  padding: 2px 4px;
  border-radius: 4px;
  transition: background 0.15s;

  &:hover {
    background: rgba($secondary, 0.08);
  }

  &:disabled {
    opacity: 0.4;
    cursor: not-allowed;
  }
}

// Slide-in transition
.archie-slide-enter-active,
.archie-slide-leave-active {
  transition: opacity 0.25s ease, transform 0.25s ease;
}

.archie-slide-enter,
.archie-slide-leave-to {
  opacity: 0;
  transform: translateY(12px);
}

// Mobile
@media (max-width: 540px) {
  .archie {
    bottom: 16px;
    right: 16px;
  }

  .archie__card {
    width: 272px;
  }
}

.archie--chat .archie__card { width: 320px; }

.archie__header-actions { display: flex; align-items: center; gap: 6px; }

.archie__mode-btn {
  background: rgba(#fff, 0.15); border: none; border-radius: 6px;
  width: 28px; height: 28px; display: flex; align-items: center;
  justify-content: center; color: #fff; cursor: pointer; transition: background 0.15s;
  &:hover { background: rgba(#fff, 0.25); }
}

.archie__chat-messages {
  height: 280px; overflow-y: auto; padding: 12px 14px;
  display: flex; flex-direction: column; gap: 10px; scroll-behavior: smooth;
}

.archie__chat-msg { display: flex; }
.archie__chat-msg--user { justify-content: flex-end; }
.archie__chat-msg--assistant { justify-content: flex-start; }

.archie__chat-bubble {
  max-width: 85%; padding: 8px 12px; border-radius: 12px;
  font-size: 13px; font-family: $nunito-family; line-height: 1.5;
  strong { color: $primary; font-weight: 700; }
}

.archie__chat-msg--user .archie__chat-bubble {
  background: $primary; color: #fff; border-bottom-right-radius: 4px;
}

.archie__chat-msg--assistant .archie__chat-bubble {
  background: $sub-background; color: #12304d;
  border-bottom-left-radius: 4px; border: 1px solid rgba($primary, 0.1);
}

.archie__chat-input-area {
  display: flex; align-items: center; gap: 8px; padding: 10px 12px;
  border-top: 1px solid rgba($primary, 0.08); background: $sub-background;
  border-radius: 0 0 12px 12px;
}

.archie__chat-input {
  flex: 1; border: 1.5px solid rgba($primary, 0.2); border-radius: 20px;
  padding: 7px 14px; font-size: 13px; font-family: $nunito-family;
  color: #12304d; background: #fff; outline: none; transition: border-color 0.15s;
  &:focus { border-color: $primary; }
  &::placeholder { color: #aaa; }
  &:disabled { opacity: 0.5; }
}

.archie__chat-send {
  width: 32px; height: 32px; border-radius: 50%; background: $primary;
  border: none; display: flex; align-items: center; justify-content: center;
  color: #fff; cursor: pointer; flex-shrink: 0; transition: background 0.15s, transform 0.1s;
  &:hover { background: darken($primary, 8%); }
  &:active { transform: scale(0.95); }
  &:disabled { opacity: 0.4; cursor: not-allowed; }
}
</style>
