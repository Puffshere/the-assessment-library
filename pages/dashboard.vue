<template>
    <section class="dashboard">
        <main-nav />

        <section class="header">
            <img src="~assets/logo-without-background.png" alt="image of logo" class="logo" />
            <div class="container">
                <div class="row">
                    <h1>Your Library <span style="color: #e93d2f; text-shadow: 1px 1px 1px black;">Dashboard</span></h1>
                    <h4>See your assessments, scores, and available credits in one place.</h4>
                </div>
            </div>
            <span v-if="dashboard.user.name" class="mobile-greeting">{{ dashboard.user.name.split(' ')[0] }}</span>
        </section>

        <section class="content">
            <div class="container">
                <div v-if="loading" class="status-block">
                    Loading your dashboard...
                </div>

                <div v-else-if="error" class="status-block error">
                    {{ error }}
                </div>
                <div v-else class="grid">
                    <div class="results-wrapper">
                        <div class="results-tabs">
                            <!-- Kids view: one tab per child profile + Players tab -->
                            <template v-if="kidsViewActive">
                                <div v-for="cp in childProfiles" :key="cp._id"
                                    class="results-tab results-tab--kid"
                                    :class="{ 'is-active': activeChildTab === cp._id }"
                                    data-cy="child-profile-tab"
                                    @click="switchChildTab(cp)">
                                    {{ cp.childName }}
                                </div>

                                <div class="results-tab results-tab--players"
                                    data-cy="players-tab"
                                    @click="$router.push('/kids/onboarding')">
                                    <svg class="results-tab__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                        stroke-linecap="round" stroke-linejoin="round">
                                        <rect x="2" y="6" width="20" height="12" rx="2" />
                                        <line x1="6" y1="10" x2="6" y2="14" />
                                        <line x1="4" y1="12" x2="8" y2="12" />
                                        <circle cx="16" cy="10" r="1.5" />
                                        <circle cx="19" cy="13" r="1.5" />
                                    </svg>
                                    <span>Players</span>
                                </div>
                            </template>

                            <!-- Standard view: normal tabs -->
                            <template v-else>
                                <div class="results-tab" :class="{ 'is-active': activeResultsView === 'first' }"
                                    @click="activeResultsView = 'first'">
                                    1st Person
                                </div>

                                <div class="results-tab" :class="{ 'is-active': activeResultsView === 'second' }"
                                    @click="activeResultsView = 'second'">
                                    3rd Person
                                </div>

                                <div class="results-tab" :class="{ 'is-active': activeResultsView === 'third' }"
                                    @click="activeResultsView = 'third'">
                                    <span class="tab-label-desktop">3rd Person Participants</span>
                                    <span class="tab-label-mobile">Participants</span>
                                </div>

                                <div class="results-tab" :class="{ 'is-active': activeResultsView === 'fourth' }"
                                    @click="openForOthersTab">
                                    For Others
                                    <span v-if="pendingForOthersCount && !forOthersSeen" class="tab-badge">
                                        {{ pendingForOthersCount }}
                                    </span>
                                </div>

                                <div v-if="childProfiles.length"
                                    class="results-tab results-tab--viewer"
                                    :class="{ 'is-active': activeResultsView === 'first' }"
                                    @click="cycleViewingChild">
                                    {{ viewingChildLabel }}
                                </div>
                            </template>
                        </div>

                        <!-- 1st person view -->
                        <kids-character-card v-if="activeResultsView === 'first' && kidsViewActive"
                            :completed-sessions="activeChildSessions" />
                        <results-panel v-else-if="activeResultsView === 'first'" :selected-result="selectedResult"
                            :sessions="filteredSessions" :assessments-started="filteredSessions.length"
                            :assessments-completed="filteredCompletedSessions.length"
                            :credits-balance="dashboard.user.creditsBalance"
                            @clear-results="selectedResult = null"
                            @credits-deducted="dashboard.user.creditsBalance = $event" />

                        <!-- 3rd person views -->
                        <results-panel-third-person v-else-if="activeResultsView === 'second' || activeResultsView === 'third'"
                            :selected-result="selectedResult"
                            :active-view="activeResultsView"
                            :sessions="dashboard.sessions" :assessments-started="dashboard.sessions.length"
                            :assessments-completed="completedSessions.length"
                            :completed-sessions="completedSessions"
                            :credits-balance="dashboard.user.creditsBalance"
                            :invite-assessment-slug="$route.query.inviteAssessment || ''"
                            @clear-results="selectedResult = null"
                            @credits-deducted="dashboard.user.creditsBalance = $event" />

                        <!-- For Others view -->
                        <div v-else-if="activeResultsView === 'fourth'" class="panel panel-wide panel-for-others">

                            <!-- DETAIL VIEW -->
                            <template v-if="selectedForOthersResult">
                                <div class="results-header">
                                    <h2 class="panel-title">{{ selectedForOthersResult.assessmentTitle }}</h2>
                                    <button class="red" @click="selectedForOthersResult = null" aria-label="Back to list">Back</button>
                                </div>
                                <div class="panel-body">
                                    <div class="results-layout">
                                        <div class="chart-col">
                                            <div class="chart" v-if="forOthersBreakdown">
                                                <div class="bar" :style="{ height: forOthersPct('D') + '%', backgroundColor: '#f44336' }" :title="'D: ' + forOthersPct('D').toFixed(1) + '%'">
                                                    <div class="label">D</div>
                                                </div>
                                                <div class="bar" :style="{ height: forOthersPct('I') + '%', backgroundColor: '#ffbd05' }" :title="'I: ' + forOthersPct('I').toFixed(1) + '%'">
                                                    <div class="label">I</div>
                                                </div>
                                                <div class="bar" :style="{ height: forOthersPct('S') + '%', backgroundColor: '#0dab49' }" :title="'S: ' + forOthersPct('S').toFixed(1) + '%'">
                                                    <div class="label">S</div>
                                                </div>
                                                <div class="bar" :style="{ height: forOthersPct('C') + '%', backgroundColor: '#1666ff' }" :title="'C: ' + forOthersPct('C').toFixed(1) + '%'">
                                                    <div class="label">C</div>
                                                </div>
                                            </div>
                                            <p v-else class="no-data">No score breakdown available.</p>
                                        </div>
                                        <div class="text-col">
                                            <h5>These are the scores you believed <strong>{{ selectedForOthersResult.inviterName }}</strong> would have gotten.</h5>
                                            <hr class="shortLine top" />
                                            <ul v-if="forOthersBreakdown">
                                                <li>D: {{ forOthersPct('D').toFixed(1) }}%</li>
                                                <li>I: {{ forOthersPct('I').toFixed(1) }}%</li>
                                                <li>S: {{ forOthersPct('S').toFixed(1) }}%</li>
                                                <li>C: {{ forOthersPct('C').toFixed(1) }}%</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </template>

                            <!-- LIST VIEW -->
                            <template v-else>
                                <h2 class="panel-title">Assessments I've Taken for Others</h2>

                                <div v-if="!dashboard.pendingInvitations.length && !dashboard.thirdPersonSessions.length" class="empty-state">
                                    <p>You haven't taken any assessments on behalf of others yet.</p>
                                    <p>When someone invites you to take an assessment, it will appear here.</p>
                                </div>

                                <div v-else class="sessions scroll-area">
                                    <!-- Pending invitations (link not yet clicked — no session exists) -->
                                    <div v-if="dashboard.pendingInvitations.length" class="section-block">
                                        <h3 style="color: #e93d2f;">Awaiting Your Response</h3>
                                        <hr />
                                        <ul>
                                            <li v-for="inv in dashboard.pendingInvitations" :key="String(inv.invitationId)" class="session-row">
                                                <div class="session-row-top">
                                                    <div class="session-main">
                                                        <div class="session-title">{{ inv.assessmentTitle }}</div>
                                                        <div class="session-meta">
                                                            From: <strong>{{ inv.inviterName }}</strong>
                                                            <span v-if="inv.invitedAt" style="margin-left: 8px;">
                                                                &middot; Invited: {{ formatDate(inv.invitedAt) }}
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <div class="session-actions">
                                                        <button class="blue small"
                                                            @click="startInvitedAssessment(inv)">
                                                            Start
                                                        </button>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>

                                    <!-- Sessions already started or completed -->
                                    <div v-if="dashboard.thirdPersonSessions.length" class="section-block">
                                        <h3 v-if="dashboard.pendingInvitations.length" style="color: #0dab49;">In Progress / Completed</h3>
                                        <hr v-if="dashboard.pendingInvitations.length" />
                                        <ul>
                                            <li v-for="s in dashboard.thirdPersonSessions" :key="s.id" class="session-row">
                                                <div class="session-row-top">
                                                    <div class="session-main">
                                                        <div class="session-title">{{ s.assessmentTitle }}</div>
                                                        <div class="session-meta">
                                                            For: <strong>{{ s.inviterName }}</strong>
                                                            <span v-if="s.completedAt" style="margin-left: 8px;">
                                                                &middot; Completed: {{ formatDate(s.completedAt) }}
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <div class="session-actions">
                                                        <button v-if="s.status === 'completed' && s.scoreBreakdown"
                                                            class="outline small green"
                                                            @click="selectedForOthersResult = s">
                                                            View Results
                                                        </button>
                                                        <button v-else-if="s.status !== 'completed'"
                                                            class="outline small"
                                                            @click="resumeThirdPersonSession(s)">
                                                            Resume
                                                        </button>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </template>
                        </div>
                    </div>

                    <!-- ACCOUNT OVERVIEW / ADVENTURE CARD -->
                    <div v-if="kidsViewActive && activeChildProfile"
                        :class="hasActiveBackground ? 'adventure-card-nowrap' : 'panel adventure-card-wrapper'">
                        <div class="adventure-card"
                            :class="{ 'is-pressed': showBgModal }"
                            :style="adventureCardBg"
                            @click="openBgModal">
                            <div class="adventure-card__shimmer"></div>
                            <div class="adventure-card__particles">
                                <span v-for="n in 8" :key="n" class="adventure-card__star"
                                    :style="{ left: (n * 12 + 3) + '%', animationDelay: (n * 0.4) + 's' }"></span>
                            </div>
                            <div class="adventure-card__content">
                                <h2 class="adventure-card__world-name" :style="{ textShadow: '0 0 20px ' + playerThemeColor + '88, 0 0 40px ' + playerThemeColor + '44' }">
                                    {{ activeChildProfile.characterName || activeChildProfile.childName }}'s World!
                                </h2>
                            </div>
                        </div>
                    </div>

                    <div v-else class="panel">
                        <h2 class="panel-title">Account Overview</h2>
                        <p class="user-name">
                            <strong>{{ dashboard.user.name || dashboard.user.email }}</strong>
                        </p>
                        <p class="user-email">
                            {{ dashboard.user.email }}
                        </p>

                        <div class="credits-card">
                            <p class="credits-label">Available Credits</p>
                            <p class="credits-value">
                                {{ dashboard.user.creditsBalance }}
                            </p>
                            <button class="blue small" @click="showCreditModal = true">
                                Purchase Credits
                            </button>
                        </div>
                    </div>

                    <!-- SESSIONS -->
                    <div class="panel panel-assessments" @wheel.prevent="onAssessmentsWheel">
                        <h2 class="panel-title">{{ kidsViewActive ? 'Your Quests' : 'Your Assessments' }}</h2>

                        <div v-if="!activeSessions.length" class="empty-state">
                            <template v-if="kidsViewActive">
                                <p>No quests yet!</p>
                                <p>Head to the Library to start your first adventure.</p>
                            </template>
                            <template v-else>
                                <p>You haven't started any assessments yet.</p>
                                <p>
                                    When you check out a book from the Library and begin an
                                    assessment, it will show up here.
                                </p>
                            </template>
                        </div>

                        <!-- Scrollable list area -->
                        <div v-else class="sessions scroll-area">
                            <!-- NOT STARTED -->
                            <div v-if="notStartedSessions.length" class="section-block">
                                <h3 style="color: #e93d2f;">{{ kidsViewActive ? 'New Quests' : 'Ready to Begin' }}</h3>
                                <hr />
                                <ul>
                                    <li v-for="s in notStartedSessions" :key="s.id" class="session-row">
                                        <div class="session-row-top">
                                            <div class="session-main">
                                                <div class="session-title">
                                                    {{ s.assessmentTitle }}
                                                </div>
                                                <div class="session-meta">
                                                    Added:
                                                    <span>{{ formatDate(s.createdAt || s.startedAt) }}</span>
                                                </div>
                                            </div>
                                            <div class="session-actions">
                                                <button class="blue small" @click="goToSession(s)">
                                                    Start
                                                </button>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>

                            <!-- IN PROGRESS -->
                            <div v-if="inProgressSessions.length" class="section-block">
                                <h3 style="color: #e93d2f;">{{ kidsViewActive ? 'Continue Your Quest' : 'In Progress' }}</h3>
                                <hr />
                                <ul>
                                    <li v-for="s in inProgressSessions" :key="s.id" class="session-row"
                                        :class="{ 'has-progress': hasProgress(s) }">
                                        <div class="session-row-top">
                                            <div class="session-main">
                                                <div class="session-title">
                                                    {{ s.assessmentTitle }}
                                                </div>
                                                <div class="session-meta">
                                                    Started:
                                                    <span>{{ formatDate(s.startedAt) }}</span>
                                                </div>
                                            </div>
                                            <div class="session-actions">
                                                <button class="outline small light" @click="goToSession(s)">
                                                    Resume
                                                </button>
                                            </div>
                                        </div>

                                        <div v-if="hasProgress(s)" class="session-progress">
                                            <div class="progress-bar">
                                                <div class="progress-bar-inner" :style="getProgressStyle(s)"></div>
                                            </div>
                                            <div class="progress-label">
                                                {{ getProgressLabel(s) }}
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>

                            <!-- COMPLETED -->
                            <div v-if="activeCompletedSessions.length" class="section-block">
                                <h3 style="color: #e93d2f;">{{ kidsViewActive ? 'Quests Conquered' : 'Completed' }}</h3>
                                <hr />
                                <ul>
                                    <li v-for="s in activeCompletedSessions" :key="s.id" class="session-row">
                                        <div class="session-row-top">
                                            <div class="session-main">
                                                <div class="session-title">
                                                    {{ s.assessmentTitle }}
                                                </div>
                                                <div class="session-meta">
                                                    <span v-if="getTopTrait(s)" class="score-pill"
                                                        :style="{ backgroundColor: getTraitColor(s), color: '#fff', borderRadius: '5px', padding: '1px 8px', maxHeight: '20px', marginLeft: '0px', marginRight: '10px' }">
                                                        {{ getTopTrait(s) }}
                                                    </span>
                                                    Completed:
                                                    <span>{{ formatDate(s.completedAt) }}</span>
                                                </div>
                                            </div>
                                            <div class="session-actions">
                                                <button class="outline small green" @click="viewResults(s)">
                                                    View Results
                                                </button>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>

                            <div v-if="
                                !notStartedSessions.length &&
                                !inProgressSessions.length &&
                                !activeCompletedSessions.length
                            " class="empty-state">
                                <p>
                                    {{ kidsViewActive ? 'No quests found yet.' : 'Assessments found, but none are in-progress or completed yet.' }}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <footer-fold />

        <credit-packages-modal
            :show="showCreditModal"
            @close="showCreditModal = false" />

        <!-- Background Selection Modal -->
        <transition name="fade">
            <div v-if="showBgModal" class="bgm-backdrop" @click.self="showBgModal = false">
                <div class="bgm-modal">
                    <button class="modal-x-close" @click="showBgModal = false" aria-label="Close">&times;</button>

                    <h2 class="bgm-title">Choose Your World</h2>
                    <p class="bgm-subtitle">Pick a background for your adventure card</p>

                    <div class="bgm-grid">
                        <div v-for="bg in currentThemeBackgrounds" :key="bg.file"
                            class="bgm-card"
                            :class="{
                                'is-selected': bgModalSelection === bg.file,
                                'is-unlockable': bg.canUnlock,
                                'is-locked': !bg.unlocked && !bg.canUnlock
                            }"
                            @click="handleBgCardClick(bg)">
                            <img :src="'/images/backgrounds/' + bg.file"
                                :alt="bg.file" class="bgm-card__img"
                                :class="{ 'is-locked': !bg.unlocked && !bg.canUnlock }" />

                            <!-- Locked: needs more stories -->
                            <div v-if="!bg.unlocked && !bg.canUnlock" class="bgm-card__lock">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                    stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                                    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                                </svg>
                                <span>{{ bg.needMore }} more {{ bg.needMore === 1 ? 'story' : 'stories' }}</span>
                            </div>

                            <!-- Unlockable: player has a token to spend -->
                            <div v-if="bg.canUnlock" class="bgm-card__unlockable">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                    stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                                </svg>
                                <span>Tap to unlock!</span>
                            </div>

                            <!-- Selected checkmark -->
                            <div v-if="bg.unlocked && bgModalSelection === bg.file" class="bgm-card__check">
                                <svg viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
                                    <polyline points="20 6 9 17 4 12" />
                                </svg>
                            </div>
                        </div>
                    </div>

                    <p v-if="availableUnlockTokens > 0" class="bgm-token-hint">
                        You have {{ availableUnlockTokens }} background{{ availableUnlockTokens > 1 ? 's' : '' }} to unlock!
                    </p>

                    <button class="bgm-confirm"
                        :disabled="!bgModalSelection"
                        @click="confirmBackground">
                        Apply Background
                    </button>
                </div>
            </div>
        </transition>
    </section>
</template>

<script>
export default {
  middleware: ["auth"],

  components: {
    "main-nav": () => import("@/components/Nav"),
    "footer-fold": () => import("@/components/Footer"),
    "results-panel": () => import("@/components/ResultsPanel.vue"),
    "results-panel-third-person": () =>
      import("@/components/ResultsPanelThirdPerson.vue"),
    "credit-packages-modal": () =>
      import("@/components/CreditPackagesModal.vue"),
    "kids-character-card": () => import("@/components/KidsCharacterCard.vue"),
  },
  data() {
    return {
      loading: true,
      error: null,
      showCreditModal: false,
      showBgModal: false,
      bgModalSelection: null,
      THEME_FILES: {
        medieval: ["midevil-1.webp", "midevil-2.webp", "midevil-3.webp"],
        scifi: ["sci-fi-1.webp", "sci-fi-2.webp", "sci-fi-3.webp"],
        videogame: [
          "video-game-1.webp",
          "video-game-2.webp",
          "video-game-3.webp",
        ],
      },
      selectedResult: null,
      selectedForOthersResult: null,
      activeResultsView: "first",
      childProfiles: [],
      activeChildTab: null,
      viewingChildId: null,
      forOthersSeen: false,
      DstyleTitle: "Dominance (D)",
      DstyleDescription: "You are direct, decisive, and results-oriented.",
      IstyleTitle: "Influence (I)",
      IstyleDescription: "You are outgoing, persuasive, and people-oriented.",
      SstyleTitle: "Steadiness (S)",
      SstyleDescription: "You are patient, reliable, and supportive.",
      CstyleTitle: "Conscientiousness (C)",
      CstyleDescription: "You are detail-oriented, analytical, and precise.",
      dashboard: {
        user: {
          name: "",
          email: "",
          creditsBalance: 0,
        },
        sessions: [],
        thirdPersonSessions: [],
        pendingInvitations: [],
        pendingInviteCount: 0,
      },
    };
  },
  computed: {
    kidsViewActive() {
      return this.$store.state.kidsViewActive;
    },
    activeChildProfile() {
      return this.$store.state.activeChildProfile;
    },
    childStoriesCompleted() {
      return this.activeCompletedSessions.length;
    },
    playerThemeColor() {
      if (!this.activeChildProfile) return "#4facfe";
      const t = this.activeChildProfile.theme;
      if (t === "medieval") return "#f5a623";
      if (t === "scifi") return "#4facfe";
      if (t === "videogame") return "#0dab49";
      return "#4facfe";
    },
    hasActiveBackground() {
      const bg =
        this.activeChildProfile && this.activeChildProfile.cardBackground;
      return !!(bg && bg.endsWith(".webp"));
    },
    adventureCardBg() {
      const bg =
        this.activeChildProfile && this.activeChildProfile.cardBackground;
      if (!bg)
        return {
          background:
            "linear-gradient(135deg, #0f1623 0%, #1a2744 50%, #12304d 100%)",
        };
      // Check if it's a webp filename (new system) or an old gradient id
      if (bg.endsWith(".webp")) {
        return {
          backgroundImage: `url(/images/backgrounds/${bg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        };
      }
      return {
        background:
          "linear-gradient(135deg, #0f1623 0%, #1a2744 50%, #12304d 100%)",
      };
    },
    themeCompletions() {
      // Use live session data — same source as childStoriesCompleted
      return this.activeCompletedSessions.length;
    },
    unlockedForTheme() {
      if (!this.activeChildProfile) return [];
      const theme = this.activeChildProfile.theme;
      const map = this.activeChildProfile.unlockedBackgrounds;
      if (!map) return [];
      return (
        (typeof map.get === "function" ? map.get(theme) : map[theme]) || []
      );
    },
    // How many unlock tokens the player has earned but not yet used
    availableUnlockTokens() {
      const completions = this.themeCompletions;
      let earned = 0;
      for (const threshold of [3, 6, 9]) {
        if (completions >= threshold) earned++;
      }
      return Math.max(0, earned - this.unlockedForTheme.length);
    },
    // Next milestone the player needs to reach (for "X more stories" text)
    nextMilestone() {
      const completions = this.themeCompletions;
      for (const threshold of [3, 6, 9]) {
        if (completions < threshold) return threshold;
      }
      return null;
    },
    currentThemeBackgrounds() {
      if (!this.activeChildProfile) return [];
      const theme = this.activeChildProfile.theme;
      const files = this.THEME_FILES[theme] || [];
      const unlocked = this.unlockedForTheme;
      const hasTokens = this.availableUnlockTokens > 0;
      const completions = this.themeCompletions;
      const unlockedCount = unlocked.length;
      const tokens = this.availableUnlockTokens;

      // Next milestone the player needs to reach (after spending available tokens)
      // e.g. 1 unlocked + 1 token = next milestone is (1+1+1)*3 = 9
      const nextNeededMilestone = (unlockedCount + tokens + 1) * 3;
      const needMore = Math.max(0, nextNeededMilestone - completions);

      return files.map((file) => {
        const isUnlocked = unlocked.includes(file);
        if (isUnlocked) {
          return { file, unlocked: true, canUnlock: false, needMore: 0 };
        }
        if (hasTokens) {
          // Player can choose ANY locked background to unlock
          return { file, unlocked: false, canUnlock: true, needMore: 0 };
        }
        // Locked, no tokens — show dynamic count to next milestone
        return { file, unlocked: false, canUnlock: false, needMore };
      });
    },
    // All completed sessions (unfiltered, used by results panels)
    completedSessions() {
      return this.dashboard.sessions.filter((s) => s.status === "completed");
    },

    // ── Context-aware session source ──────────────
    // Returns only the sessions relevant to whoever is "active"
    activeSessions() {
      if (this.kidsViewActive) {
        // Kids view: only sessions linked to the active child
        if (!this.activeChildTab) return [];
        return this.dashboard.sessions.filter(
          (s) => s.childProfileId === this.activeChildTab
        );
      }
      if (this.viewingChildId) {
        // Standard view with a child selected
        return this.dashboard.sessions.filter(
          (s) => s.childProfileId === this.viewingChildId
        );
      }
      // Standard view, no child selected: parent's own (no childProfileId)
      return this.dashboard.sessions.filter((s) => !s.childProfileId);
    },

    notStartedSessions() {
      return this.activeSessions.filter(
        (s) =>
          s.status === "not_started" ||
          (!s.startedAt && s.status !== "completed")
      );
    },
    inProgressSessions() {
      return this.activeSessions.filter(
        (s) => s.status === "in_progress" && s.startedAt
      );
    },
    activeCompletedSessions() {
      return this.activeSessions.filter((s) => s.status === "completed");
    },

    // Kids view character card: completed sessions for this child only
    activeChildSessions() {
      if (!this.activeChildTab) return [];
      return this.completedSessions.filter(
        (s) => s.childProfileId === this.activeChildTab
      );
    },

    // Standard view results panel
    filteredSessions() {
      return this.activeSessions;
    },
    filteredCompletedSessions() {
      return this.activeCompletedSessions;
    },
    viewingChildLabel() {
      if (!this.viewingChildId) return "All (Parent Account)";
      const cp = this.childProfiles.find((p) => p._id === this.viewingChildId);
      return cp ? cp.childName : "All (Parent Account)";
    },
    selectedBreakdown() {
      if (!this.selectedResult) return null;
      const s = this.selectedResult;
      return s.scoreBreakdown || (s.score && s.score.breakdown) || null;
    },
    DPercentage() {
      const b = this.selectedBreakdown;
      return b && typeof b.D === "number" ? b.D : 0;
    },
    IPercentage() {
      const b = this.selectedBreakdown;
      return b && typeof b.I === "number" ? b.I : 0;
    },
    SPercentage() {
      const b = this.selectedBreakdown;
      return b && typeof b.S === "number" ? b.S : 0;
    },
    CPercentage() {
      const b = this.selectedBreakdown;
      return b && typeof b.C === "number" ? b.C : 0;
    },
    topScore() {
      if (!this.selectedBreakdown) return null;
      const entries = Object.entries(this.selectedBreakdown).filter(
        ([trait, value]) =>
          ["D", "I", "S", "C"].includes(trait) && typeof value === "number"
      );
      if (!entries.length) return null;
      entries.sort((a, b) => b[1] - a[1]);
      return entries[0][0];
    },
    styleTitle() {
      switch (this.topScore) {
        case "D":
          return this.DstyleTitle;
        case "I":
          return this.IstyleTitle;
        case "S":
          return this.SstyleTitle;
        case "C":
          return this.CstyleTitle;
        default:
          return "";
      }
    },
    forOthersBreakdown() {
      const s = this.selectedForOthersResult;
      if (!s) return null;
      return s.scoreBreakdown || (s.score && s.score.breakdown) || null;
    },
    pendingForOthersCount() {
      return typeof this.dashboard.pendingInviteCount === "number"
        ? this.dashboard.pendingInviteCount
        : 0;
    },
    styleDescription() {
      switch (this.topScore) {
        case "D":
          return this.DstyleDescription;
        case "I":
          return this.IstyleDescription;
        case "S":
          return this.SstyleDescription;
        case "C":
          return this.CstyleDescription;
        default:
          return "";
      }
    },
    dominantDiscTrait() {
      const completed = (this.dashboard.sessions || []).filter(
        (s) => s.status === "completed" && s.scoreBreakdown
      );
      if (!completed.length) return null;

      let topTrait = null;
      let topScore = -1;

      completed.forEach((session) => {
        const breakdown = session.scoreBreakdown;
        if (!breakdown) return;
        Object.entries(breakdown).forEach(([trait, score]) => {
          if (score > topScore) {
            topScore = score;
            topTrait = trait;
          }
        });
      });

      return topTrait;
    },
  },
  async mounted() {
    this.loading = true;
    this.error = null;

    try {
      const res = await this.$axios.$get("/api/dashboard");
      this.dashboard = res;
      console.log("dominant trait:", this.dominantDiscTrait);
      console.log(
        "completed sessions:",
        this.dashboard.sessions.filter((s) => s.status === "completed").length
      );
      console.log(
        "first completed session keys:",
        this.dashboard.sessions.find((s) => s.status === "completed")
      );
    } catch (err) {
      console.error("Dashboard load error:", err);
      this.error =
        (err.response && err.response.data && err.response.data.message) ||
        "Failed to load your dashboard. Please try again.";
    } finally {
      this.loading = false;
    }

    // Fetch child profiles for tabs (kids view) and switcher (standard view)
    await this.fetchChildProfiles();

    // Open a specific tab if requested via query param (e.g. from assessment conclusion)
    const tab = this.$route.query.tab;
    if (tab && ["first", "second", "third", "fourth"].includes(tab)) {
      this.activeResultsView = tab;
    }
  },
  watch: {
    kidsViewActive() {
      this.fetchChildProfiles();
    },
  },
  methods: {
    async fetchChildProfiles() {
      try {
        const res = await this.$axios.$get("/api/child-profiles");
        this.childProfiles = res.profiles || [];
        // Auto-select the active profile tab, or first profile
        const active = this.$store.state.activeChildProfile;
        if (active && this.childProfiles.find((p) => p._id === active._id)) {
          this.activeChildTab = active._id;
        } else if (this.childProfiles.length) {
          this.activeChildTab = this.childProfiles[0]._id;
          this.$store.commit("SET_ACTIVE_CHILD_PROFILE", this.childProfiles[0]);
        }
      } catch (err) {
        console.error("Error fetching child profiles:", err);
      }
    },
    switchChildTab(profile) {
      this.activeChildTab = profile._id;
      this.$store.commit("SET_ACTIVE_CHILD_PROFILE", profile);
    },
    async selectBackground(bgFile) {
      if (!this.activeChildProfile) return;
      try {
        const res = await this.$axios.$put(
          `/api/child-profiles/${this.activeChildProfile._id}`,
          { cardBackground: bgFile }
        );
        this.$store.commit("SET_ACTIVE_CHILD_PROFILE", res.profile);
        const idx = this.childProfiles.findIndex(
          (p) => p._id === res.profile._id
        );
        if (idx !== -1) this.$set(this.childProfiles, idx, res.profile);
      } catch (err) {
        console.error("Error saving background:", err);
      }
    },
    openBgModal() {
      this.bgModalSelection = this.activeChildProfile.cardBackground || null;
      this.showBgModal = true;
    },
    async handleBgCardClick(bg) {
      if (bg.unlocked) {
        // Already unlocked — just select it
        this.bgModalSelection = bg.file;
      } else if (bg.canUnlock) {
        // Player has an unlock token — unlock this background
        await this.unlockBackground(bg.file);
      }
      // Otherwise locked — do nothing
    },
    async unlockBackground(bgFile) {
      if (!this.activeChildProfile) return;
      try {
        const theme = this.activeChildProfile.theme;
        const map = this.activeChildProfile.unlockedBackgrounds;
        const currentUnlocked = map
          ? (typeof map.get === "function" ? map.get(theme) : map[theme]) || []
          : [];
        const newUnlocked = [...currentUnlocked, bgFile];

        // Build the full map to send
        const fullMap = {};
        if (map) {
          // Copy existing entries from all themes
          if (typeof map.forEach === "function") {
            map.forEach((v, k) => {
              fullMap[k] = v;
            });
          } else {
            Object.assign(fullMap, map);
          }
        }
        fullMap[theme] = newUnlocked;

        const res = await this.$axios.$put(
          `/api/child-profiles/${this.activeChildProfile._id}`,
          { unlockedBackgrounds: fullMap }
        );
        this.$store.commit("SET_ACTIVE_CHILD_PROFILE", res.profile);
        const idx = this.childProfiles.findIndex(
          (p) => p._id === res.profile._id
        );
        if (idx !== -1) this.$set(this.childProfiles, idx, res.profile);

        // Auto-select the newly unlocked background
        this.bgModalSelection = bgFile;
      } catch (err) {
        console.error("Error unlocking background:", err);
      }
    },
    async confirmBackground() {
      if (!this.bgModalSelection) return;
      await this.selectBackground(this.bgModalSelection);
      this.showBgModal = false;
      this.bgModalSelection = null;
    },
    cycleViewingChild() {
      this.selectedResult = null;
      // Cycle: null -> child1 -> child2 -> ... -> null
      const ids = [null, ...this.childProfiles.map((p) => p._id)];
      const currentIdx = ids.indexOf(this.viewingChildId);
      this.viewingChildId = ids[(currentIdx + 1) % ids.length];
    },
    openCreditModal() {
      this.showCreditModal = true;
    },
    formatDate(dateStr) {
      if (!dateStr) return "—";
      const d = new Date(dateStr);
      if (isNaN(d.getTime())) return "—";
      return d.toLocaleDateString(undefined, {
        year: "numeric",
        month: "short",
        day: "numeric",
      });
    },
    goToSession(session) {
      const TITLE_TO_SLUG = {
        "Shane's Day at the Park": "shanes-day-at-the-park",
        "Allie's Professional Journey": "allies-professional-journey",
        "Jessica's First Job": "jessicas-first-job",
        "Roger's New Business": "rogers-new-business",
        "Trevor's Day at School": "trevors-day-at-school",
        "Weston's Birthday": "westons-birthday",
      };

      const slug =
        session.assessmentSlug ||
        (session.assessment && session.assessment.slug) ||
        TITLE_TO_SLUG[session.assessmentTitle] ||
        null;

      if (!slug) {
        alert("We could not find a route for this assessment yet.");
        console.warn("No route mapping for session", session);
        return;
      }

      this.$router.push({
        path: `/library/${slug}`,
        query: { session: session.id || session._id },
      });
    },
    hasProgress(session) {
      return (
        typeof session.currentQuestionIndex === "number" &&
        session.currentQuestionIndex >= 0
      );
    },
    getChapterProgress(session) {
      const totalChapters = 10;
      const idx = Number(session.currentQuestionIndex) || 0;

      const estimatedChapter =
        Math.floor(
          (idx / Math.max(session.totalQuestions || 26, 1)) * totalChapters
        ) + 1;

      const currentChapter = Math.min(
        totalChapters,
        Math.max(1, estimatedChapter)
      );
      const percent = (currentChapter / totalChapters) * 100;

      return { currentChapter, totalChapters, percent };
    },
    getProgressLabel(session) {
      const { currentChapter, totalChapters } =
        this.getChapterProgress(session);
      return `Chapter ${currentChapter} of ${totalChapters}`;
    },
    getProgressPercent(session) {
      return this.getChapterProgress(session).percent;
    },
    getTopTrait(session) {
      const breakdown =
        session.scoreBreakdown ||
        (session.score && session.score.breakdown) ||
        null;

      if (!breakdown) return null;

      const entries = Object.entries(breakdown).filter(
        ([trait, value]) =>
          ["D", "I", "S", "C"].includes(trait) && typeof value === "number"
      );

      if (!entries.length) return null;

      entries.sort((a, b) => b[1] - a[1]);
      return entries[0][0];
    },
    getTraitColor(session) {
      const top = this.getTopTrait(session);

      switch (top) {
        case "D":
          return "#e93d2f";
        case "I":
          return "#ffbd05";
        case "S":
          return "#0dab49";
        case "C":
          return "#1666ff";
        default:
          return "#00A8FF";
      }
    },
    getProgressStyle(session) {
      return {
        width: this.getProgressPercent(session) + "%",
        "--progress-color": this.getTraitColor(session),
      };
    },
    viewResults(session) {
      this.selectedResult = session;
    },
    openForOthersTab() {
      this.activeResultsView = "fourth";
      this.forOthersSeen = true;
    },
    startInvitedAssessment(inv) {
      this.$router.push(
        `/library/${inv.assessmentSlug}?participant=${inv.participantId}&invitation=${inv.invitationId}`
      );
    },
    resumeThirdPersonSession(s) {
      const query = { session: s.id };
      if (s.participantId) query.participant = s.participantId;
      if (s.invitationId) query.invitation = s.invitationId;
      this.$router.push({ path: `/library/${s.assessmentSlug}`, query });
    },
    forOthersPct(trait) {
      const b = this.forOthersBreakdown;
      return b && typeof b[trait] === "number" ? b[trait] : 0;
    },
    onAssessmentsWheel(event) {
      const panel = event.currentTarget;
      const list = panel.querySelector(".scroll-area");
      if (!list) return;
      list.scrollTop += event.deltaY;
    },
  },
  head() {
    return {
      title: "Dashboard | The Assessment Library",
      meta: [
        {
          hid: "description",
          name: "description",
          content:
            "View your Assessment Library dashboard, including credits, in-progress assessments, and completed scores.",
        },
      ],
    };
  },
};
</script>

<style lang="scss">
@import "~assets/scss/vars";
@import "~assets/scss/new-styles";

.dashboard {
  .header {
    margin-top: 64px;
    text-align: center;
    padding: 40px 16px;
    background-color: rgba(161, 156, 147, 0.521);
    position: relative;
    box-shadow: 5px 5px 10px #0814368e;

    h1 {
      margin-bottom: 0px;
    }

    h4 {
      margin-top: -10px;
      font-weight: 400;
      font-family: $nunito-family;
    }

    .logo {
      width: 270px;
      position: absolute;
      left: 80px;
      top: -25px;
    }

    &:after {
      background: linear-gradient(
        to right,
        $color-d 25%,
        $color-i 25%,
        $color-i 50%,
        $color-s 50%,
        $color-s 75%,
        $color-c 75%
      );
      position: absolute;
      content: "";
      height: 10px;
      right: 0;
      left: 0;
      bottom: 0;
      z-index: 2;
    }
  }

  .content {
    padding: 40px 16px 80px 16px;
  }

  .status-block {
    text-align: center;
    padding: 40px 0;
    font-size: 16px;

    &.error {
      color: #c00;
    }
  }

  .results-tab--viewer {
    margin-left: auto;
  }

  .grid {
    display: flex;
    flex-wrap: wrap;
    gap: 24px;
    margin-top: 40px;
  }

  .panel {
    flex: 1 1 320px;
    border-radius: 11px;
    border: 3px solid #025baf67;
    background: #fff;
    box-shadow: 4px 4px 4px 3px rgba(0, 0, 0, 0.15);
    padding: 24px;
  }

  /* ── Adventure card (Kids View account panel) ──── */

  // State 1: no background — white wrapper with dark inner
  // ── Adventure Card (video-game style) ──────────
  .adventure-card-wrapper {
    display: flex;
    flex-direction: column;
    cursor: pointer;
  }

  .adventure-card-nowrap {
    flex: 1 1 320px;
    display: flex;
    flex-direction: column;
    cursor: pointer;

    .adventure-card {
      border-radius: 11px;
      border: none;
      box-shadow: none;
    }
  }

  .adventure-card {
    flex: 1;
    border-radius: 8px;
    border: 2px solid rgba(255, 255, 255, 0.12);
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.4),
      inset 0 1px 0 rgba(255, 255, 255, 0.08);
    padding: 0;
    position: relative;
    overflow: hidden;
    background: linear-gradient(135deg, #0a0f1e 0%, #111d35 40%, #0d1a2e 100%);
    cursor: pointer;
    transition: transform 0.2s ease, box-shadow 0.2s ease;

    &:hover {
      transform: scale(1.03);
      box-shadow: 0 12px 40px rgba(0, 0, 0, 0.5),
        inset 0 1px 0 rgba(255, 255, 255, 0.12);
    }

    &.is-pressed {
      transform: scale(0.97);
    }
  }

  .adventure-card__shimmer {
    position: absolute;
    inset: 0;
    background: linear-gradient(
      105deg,
      transparent 30%,
      rgba(255, 255, 255, 0.04) 45%,
      rgba(255, 255, 255, 0.08) 50%,
      rgba(255, 255, 255, 0.04) 55%,
      transparent 70%
    );
    background-size: 300% 100%;
    animation: ac-shimmer 4s ease-in-out infinite;
    pointer-events: none;
  }

  @keyframes ac-shimmer {
    0% {
      background-position: 200% 0;
    }
    100% {
      background-position: -100% 0;
    }
  }

  .adventure-card__particles {
    position: absolute;
    inset: 0;
    pointer-events: none;
    overflow: hidden;
  }

  .adventure-card__star {
    position: absolute;
    width: 3px;
    height: 3px;
    background: #fff;
    border-radius: 50%;
    opacity: 0;
    animation: ac-twinkle 3s ease-in-out infinite;

    &:nth-child(odd) {
      top: 20%;
      width: 2px;
      height: 2px;
    }
    &:nth-child(even) {
      top: 60%;
    }
    &:nth-child(3n) {
      top: 40%;
      width: 4px;
      height: 4px;
      box-shadow: 0 0 6px rgba(255, 255, 255, 0.5);
    }
  }

  @keyframes ac-twinkle {
    0%,
    100% {
      opacity: 0;
      transform: scale(0.5);
    }
    50% {
      opacity: 0.7;
      transform: scale(1);
    }
  }

  .adventure-card__content {
    position: relative;
    z-index: 1;
    padding: 24px 24px 20px;
  }

  .adventure-card__label {
    font-family: $nunito-family;
    font-size: 11px;
    font-weight: 800;
    text-transform: uppercase;
    letter-spacing: 0.14em;
    color: rgba(255, 255, 255, 0.35);
    margin: 0 0 10px;
  }

  .adventure-card__name {
    font-family: $font-family;
    font-size: 28px;
    font-weight: 900;
    color: #fff;
    margin: 0 0 8px;
    line-height: 1.1;
  }

  .adventure-card__world-name {
    font-family: $font-family;
    font-size: 32px;
    font-weight: 900;
    color: #fff;
    margin: 0 0 20px;
    line-height: 1.15;
  }

  .adventure-card__badge {
    display: inline-block;
    font-family: $nunito-family;
    font-size: 12px;
    font-weight: 700;
    color: rgba(255, 255, 255, 0.85);
    background: rgba(255, 255, 255, 0.1);
    border: 1px solid rgba(255, 255, 255, 0.15);
    border-radius: 20px;
    padding: 4px 14px;
    margin-bottom: 20px;
    letter-spacing: 0.02em;
  }

  // ── XP bar ──
  .adventure-card__xp {
    margin-top: 4px;
  }

  .adventure-card__xp-header {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    margin-bottom: 6px;
  }

  .adventure-card__xp-text {
    font-family: $nunito-family;
    font-size: 11px;
    font-weight: 800;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    color: rgba(255, 255, 255, 0.45);
  }

  .adventure-card__xp-count {
    font-family: $nunito-family;
    font-size: 16px;
    font-weight: 900;
    color: #fff;
    text-shadow: 0 0 10px rgba(13, 171, 73, 0.5);
  }

  .adventure-card__xp-track {
    position: relative;
    height: 14px;
    background: rgba(255, 255, 255, 0.08);
    border-radius: 7px;
    overflow: hidden;
    border: 1px solid rgba(255, 255, 255, 0.06);
    margin-bottom: 10px;
  }

  .adventure-card__xp-fill {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    background: linear-gradient(90deg, #0dab49, #2ecc71);
    border-radius: 7px;
    transition: width 0.8s cubic-bezier(0.22, 1, 0.36, 1);
  }

  .adventure-card__xp-glow {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    background: linear-gradient(
      90deg,
      transparent 60%,
      rgba(46, 204, 113, 0.6)
    );
    border-radius: 7px;
    filter: blur(4px);
    pointer-events: none;
    transition: width 0.8s cubic-bezier(0.22, 1, 0.36, 1);
  }

  .adventure-card__hint {
    font-family: $nunito-family;
    font-size: 12px;
    font-weight: 600;
    color: rgba(255, 255, 255, 0.3);
    margin: 0;
  }

  // ── Background modal ──
  .bgm-backdrop {
    position: fixed;
    inset: 0;
    padding-top: 116px;
    padding-bottom: 40px;
    padding-left: 16px;
    padding-right: 16px;
    background: rgba(0, 0, 0, 0.65);
    display: flex;
    align-items: flex-start;
    justify-content: center;
    overflow-y: auto;
    z-index: 999998;
  }

  .bgm-modal {
    background: linear-gradient(160deg, #0a0f1e 0%, #111d35 40%, #0d1a2e 100%);
    border-radius: 20px;
    border: 2px solid rgba(255, 255, 255, 0.1);
    padding: 64px 48px 56px;
    width: 100%;
    max-width: 860px;
    position: relative;
    flex-shrink: 0;
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5),
      0 0 40px rgba(79, 172, 254, 0.08);
    text-align: center;
  }

  .bgm-modal .modal-x-close {
    position: absolute;
    top: 16px;
    right: 16px;
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

  .bgm-title {
    font-family: $font-family;
    font-size: 36px;
    font-weight: 900;
    color: #fff;
    margin: 0 0 8px;
    text-shadow: 0 0 20px rgba(79, 172, 254, 0.3);
  }

  .bgm-subtitle {
    font-family: $nunito-family;
    font-size: 16px;
    font-weight: 600;
    color: rgba(255, 255, 255, 0.4);
    margin: 0 0 36px;
  }

  .bgm-grid {
    display: flex;
    gap: 20px;
    justify-content: center;
    margin-bottom: 32px;
  }

  .bgm-card {
    flex: 1 1 0;
    min-height: 220px;
    border-radius: 14px;
    overflow: hidden;
    position: relative;
    cursor: pointer;
    border: 3px solid transparent;
    transition: border-color 0.2s ease, transform 0.2s ease,
      box-shadow 0.2s ease;

    &:hover:not(.is-locked) {
      transform: scale(1.05);
      border-color: rgba(255, 255, 255, 0.3);
    }

    &.is-selected {
      border-color: #4facfe;
      box-shadow: 0 0 16px rgba(79, 172, 254, 0.5),
        0 0 4px rgba(79, 172, 254, 0.3);
    }

    &.is-locked {
      cursor: default;
    }

    &.is-unlockable {
      cursor: pointer;
      border-color: rgba(245, 166, 35, 0.4);
      animation: bgm-unlockable-pulse 2s ease-in-out infinite;

      &:hover {
        border-color: #f5a623;
        box-shadow: 0 0 16px rgba(245, 166, 35, 0.5);
      }
    }
  }

  @keyframes bgm-unlockable-pulse {
    0%,
    100% {
      box-shadow: 0 0 0 rgba(245, 166, 35, 0);
    }
    50% {
      box-shadow: 0 0 12px rgba(245, 166, 35, 0.3);
    }
  }

  .bgm-card__img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    transition: filter 0.2s;

    &.is-locked {
      filter: grayscale(100%) brightness(0.4);
    }
  }

  .bgm-card__lock {
    position: absolute;
    inset: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 8px;
    color: rgba(255, 255, 255, 0.7);

    svg {
      width: 36px;
      height: 36px;
    }

    span {
      font-family: $nunito-family;
      font-size: 14px;
      font-weight: 700;
      color: rgba(255, 255, 255, 0.6);
    }
  }

  .bgm-card__unlockable {
    position: absolute;
    inset: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 8px;
    color: #f5a623;
    background: rgba(0, 0, 0, 0.35);

    svg {
      width: 36px;
      height: 36px;
    }

    span {
      font-family: $nunito-family;
      font-size: 14px;
      font-weight: 700;
    }
  }

  .bgm-token-hint {
    font-family: $nunito-family;
    font-size: 13px;
    font-weight: 700;
    color: #f5a623;
    margin: 0 0 16px;
    text-shadow: 0 0 10px rgba(245, 166, 35, 0.3);
  }

  .bgm-card__check {
    position: absolute;
    bottom: 6px;
    right: 6px;
    width: 24px;
    height: 24px;
    background: #4facfe;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 2px 8px rgba(79, 172, 254, 0.5);

    svg {
      width: 14px;
      height: 14px;
    }
  }

  .bgm-confirm {
    display: block;
    width: 100%;
    font-family: $nunito-family;
    font-size: 20px;
    font-weight: 900;
    color: #fff;
    text-transform: uppercase;
    letter-spacing: 0.06em;
    background: #0ea5e9;
    border: none;
    border-radius: 8px;
    height: 60px;
    padding: 0;
    margin: 48px 0 16px;
    cursor: pointer;
    box-shadow: 0 4px 16px rgba(14, 165, 233, 0.35);
    transition: background 0.15s ease, box-shadow 0.2s ease;

    &:hover:not(:disabled) {
      background: #0284c7;
      box-shadow: 0 4px 24px rgba(14, 165, 233, 0.5);
    }

    &:disabled {
      opacity: 0.4;
      cursor: not-allowed;
    }
  }

  .panel-assessments {
    flex: 1 1 320px;
    max-height: 386px;
    min-height: 386px;
    display: flex;
    flex-direction: column;

    .panel-title {
      flex: 0 0 auto;
      margin-bottom: 0px;
    }

    .scroll-area {
      flex: 1 1 auto;
      overflow-y: auto;
      padding-right: 8px;
      -webkit-overflow-scrolling: touch;
    }
  }

  .panel-for-others {
    max-height: 450px;
    overflow: hidden;
    display: flex;
    flex-direction: column;

    .scroll-area {
      flex: 1 1 auto;
      overflow-y: auto;
      padding-right: 8px;
      max-height: 380px;
    }
  }

  .panel-title {
    font-size: 20px;
    margin-bottom: 16px;
  }

  .user-name {
    font-size: 18px;
    margin-bottom: 4px;
  }

  .user-email {
    font-size: 14px;
    margin-bottom: 16px;
    color: #555;
  }

  .credits-card {
    border-radius: 10px;
    background: #ebebeb;
    padding: 0px 16px 10px 16px;
    text-align: center;
    box-shadow: 4px 4px 8px #12304d8e;

    .credits-label {
      font-size: 24px;
      padding-top: 20px;
      margin-bottom: -20px;
    }

    .credits-value {
      font-size: 32px;
      font-weight: 700;
      margin-bottom: 16px;
    }

    .small {
      font-size: 14px;
      padding: 6px 12px;
    }

    button {
      margin-bottom: 12px;
    }
  }

  .sessions {
    .section-block + .section-block {
      margin-top: 24px;
    }

    h3 {
      font-size: 16px;
      margin-bottom: 12px;
    }

    ul {
      list-style: none;
      margin: 0;
      padding: 0;
    }

    .session-row {
      padding: 10px 0;
      border-bottom: 1px solid rgba(0, 0, 0, 0.06);

      &:last-child {
        border-bottom: none;
      }

      &.has-progress {
        padding-bottom: 12px;
      }
    }

    .session-row-top {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .session-main {
      flex: 1 1 auto;
    }

    .session-title {
      font-weight: 600;
      margin-bottom: 4px;
    }

    .session-meta {
      font-size: 13px;
      color: #555;

      span {
        margin-left: 4px;
      }

      .score-pill {
        display: inline-block;
        margin-left: 8px;
        padding: 2px 8px;
        border-radius: 999px;
        background: #eef5ff;
        font-size: 12px;
      }
    }

    .session-actions {
      margin-left: 16px;
      flex: 0 0 auto;

      .small {
        font-size: 13px;
        padding: 6px 10px;
      }
    }

    .session-progress {
      margin-top: 6px;
      display: flex;
      flex-direction: column;
      align-items: flex-end;
    }

    .progress-bar {
      width: 170px;
      height: 6px;
      border-radius: 999px;
      background: #e4edf7;
      overflow: hidden;
    }

    .progress-bar-inner {
      height: 100%;
      border-radius: inherit;
      background-color: var(--progress-color, #00a8ff);
      transition: width 0.35s ease, background-color 0.2s ease;
    }

    .progress-label {
      font-size: 11px;
      margin-top: 2px;
      color: #143180;
    }
  }

  .empty-state {
    font-size: 14px;
    color: #555;

    p + p {
      margin-top: 6px;
    }
  }

  .results-wrapper {
    position: relative;
    width: 100%;
  }

  .tab-label-mobile {
    display: none;
  }
  .mobile-greeting {
    display: none;
  }

  .results-tabs {
    position: absolute;
    top: -36px;
    left: 16px;
    right: 16px;
    display: flex;
    gap: 0px;
    z-index: 10;
  }

  .results-tab {
    border: 3px solid #025baf67;
    border-bottom: none;
    border-radius: 8px 8px 0 0;
    padding: 6px 14px;
    background: #f0f4fa;
    font-size: 14px;
    font-weight: 500;
    color: #143180;
    cursor: pointer;
    box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.15);
    position: relative;
    z-index: 11;
    transition: background 0.2s ease, color 0.2s ease;
    transform: scale(0.95);
    height: 36px;

    &.is-active {
      height: 40px;
      background: #fff;
      color: #0d4ca5;
      box-shadow: none;
      padding-bottom: 5px;

      margin-bottom: 0px;
      border-bottom: 2px solid #fff;
      z-index: 20;
    }

    &:active {
      transform: scale(0.8);
    }

    .tab-badge {
      position: absolute;
      top: -8px;
      right: -8px;
      min-width: 18px;
      height: 18px;
      padding: 0 5px;
      border-radius: 999px;
      background: $color-d;
      color: #fff;
      font-size: 11px;
      font-weight: 700;
      line-height: 18px;
      text-align: center;
      box-shadow: 0 1px 4px rgba(0, 0, 0, 0.35);
      pointer-events: none;
      animation: badge-pop 0.25s ease;
    }
  }

  @keyframes badge-pop {
    0% {
      transform: scale(0);
      opacity: 0;
    }
    70% {
      transform: scale(1.2);
    }
    100% {
      transform: scale(1);
      opacity: 1;
    }
  }

  .results-tab--kid {
    &.is-active {
      background: #fff;
      color: #0d4ca5;
      font-weight: 700;
    }
  }

  .results-tab--players {
    margin-left: auto;
    display: flex;
    align-items: center;
    gap: 5px;
    border-style: dashed;
    border-color: rgba(2, 91, 175, 0.35);
    background: rgba(240, 244, 250, 0.6);
    color: #6b7a8d;
    font-size: 13px;

    &:hover {
      background: #e8edf4;
      color: #143180;
    }
  }

  .results-tab__icon {
    width: 16px;
    height: 16px;
    flex-shrink: 0;
  }

  results-panel,
  results-panel-third-person {
    position: relative;
    z-index: 0;
  }
}

@media (max-width: 768px) {
  .dashboard {
    .header {
      padding: 0 16px;
      height: 56px;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      text-align: left;
      box-shadow: none;

      .logo {
        display: none;
      }

      .container {
        flex: 0 0 auto;
        width: auto;
        margin: 0;
        padding: 0;
      }

      h1 {
        font-size: 0;
        margin: 0;
        padding: 0;
        line-height: 56px;

        span {
          font-size: 20px;
        }
      }

      h4 {
        display: none;
      }

      .mobile-greeting {
        display: block;
        font-size: 15px;
        font-weight: 500;
        color: #143180;
        white-space: nowrap;
      }

      &:after {
        height: 4px;
      }
    }

    .content {
      padding-top: 24px;
    }

    .grid {
      flex-direction: column;
      margin-top: 10px;
    }

    .results-tabs {
      position: static;
      overflow-x: auto;
      -webkit-overflow-scrolling: touch;
      flex-wrap: nowrap;
      scrollbar-width: none;
      gap: 0px;
      margin: 0;
      margin-bottom: -5px;
      padding: 0 14px;
      z-index: 10;

      &::-webkit-scrollbar {
        display: none;
      }
    }

    .tab-label-desktop {
      display: none;
    }
    .tab-label-mobile {
      display: inline;
    }

    .results-tab {
      white-space: nowrap;

      &:last-child {
        margin-right: 14px;
      }
    }

    .panel,
    .panel-assessments {
      flex: 0 0 100%;
      max-width: 100%;
      width: 100%;
    }

    .panel-assessments {
      max-height: none;
      min-height: auto;

      .scroll-area {
        overflow-y: visible;
        max-height: none;
      }

      button {
        width: 110px;
      }
    }
  }
}
</style>