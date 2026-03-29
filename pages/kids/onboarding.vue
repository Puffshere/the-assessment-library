<template>
    <div class="ko">
        <main-nav />

        <!-- ═══════════ STATE 1 — PLAYER SELECT ═══════════ -->
        <div v-if="mode === 'select'" class="ko__screen">
            <div class="ko__header">
                <h1 class="ko__title">Who's Playing?</h1>
                <p class="ko__subtitle">Choose your player to start the adventure</p>
            </div>

            <div v-if="loading" class="ko__loading">
                <div class="ko__spinner"></div>
                <p>Loading players...</p>
            </div>

            <div v-else class="ko__grid">
                <!-- Profile cards -->
                <div v-for="p in profiles" :key="p._id" class="ko__card"
                    :class="'ko__card--' + p.theme">
                    <!-- Edit pencil -->
                    <button class="ko__edit" @click.stop="openMenu(p)" aria-label="Edit profile">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                            stroke-linecap="round" stroke-linejoin="round">
                            <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z" />
                            <path d="m15 5 4 4" />
                        </svg>
                    </button>

                    <!-- Tap area -->
                    <div class="ko__card-body" @click="selectProfile(p)">
                        <!-- Character image or silhouette -->
                        <div class="ko__avatar-area">
                            <img v-if="getCharacterImage(p)" :src="getCharacterImage(p)"
                                :alt="p.childName" class="ko__char-img" />
                            <div v-else class="ko__silhouette">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2"
                                    stroke-linecap="round" stroke-linejoin="round">
                                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                                    <circle cx="9" cy="7" r="4" />
                                </svg>
                            </div>
                        </div>

                        <!-- Name -->
                        <p class="ko__card-name">{{ p.childName }}</p>
                        <p v-if="p.characterName" class="ko__card-charname">{{ p.characterName }}</p>

                        <!-- Theme badge -->
                        <span class="ko__badge" :class="'ko__badge--' + p.theme">
                            {{ themeLabel(p.theme) }}
                        </span>

                        <!-- Archetype -->
                        <p v-if="p.currentDiscType" class="ko__archetype">
                            {{ getArchetypeName(p) }}
                        </p>

                        <!-- Achievement slots -->
                        <div class="ko__achievements">
                            <div class="ko__ach-slot" v-for="ach in achievementSlots" :key="ach.key">
                                <div class="ko__ach-icon">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                        stroke-linecap="round" stroke-linejoin="round">
                                        <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                                        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                                    </svg>
                                </div>
                                <span class="ko__ach-label">{{ ach.label }}</span>
                            </div>
                        </div>
                    </div>

                    <!-- Change Theme -->
                    <button class="ko__theme-btn" @click.stop="startThemeChange(p)">
                        Change Theme
                    </button>
                </div>

                <!-- Add New Player card -->
                <div class="ko__card ko__card--add" @click="startWizard">
                    <div class="ko__card-body ko__add-body">
                        <div class="ko__add-icon">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"
                                stroke-linecap="round">
                                <line x1="12" y1="5" x2="12" y2="19" />
                                <line x1="5" y1="12" x2="19" y2="12" />
                            </svg>
                        </div>
                        <p class="ko__add-label">Add New Player</p>
                    </div>
                </div>
            </div>
        </div>

        <!-- ═══════════ STATE 2 — WIZARD ═══════════ -->
        <div v-else-if="mode === 'wizard'" class="ko__screen ko__screen--wizard">
            <transition :name="wizardTransition" mode="out-in">
                <!-- Step 1: Child's real name -->
                <div v-if="wizardStep === 1" key="step1" class="ko__step">
                    <h2 class="ko__step-title">What is your name?</h2>
                    <p class="ko__step-sub">Your real name, so your parents can find you.</p>
                    <input ref="nameInput" v-model="wizardName" type="text" class="ko__name-input"
                        placeholder="Enter your name..." maxlength="30"
                        @keyup.enter="wizardName.trim() && goStep(2)" />
                    <div class="ko__step-actions">
                        <button class="ko__btn ko__btn--primary" :disabled="!wizardName.trim()" @click="goStep(2)">
                            Next
                        </button>
                        <button class="ko__btn ko__btn--ghost" @click="cancelWizard">Cancel</button>
                    </div>
                </div>

                <!-- Step 2: Character name -->
                <div v-if="wizardStep === 2" key="step2" class="ko__step">
                    <h2 class="ko__step-title">Give your character a name!</h2>
                    <p class="ko__step-sub">Pick a cool name for your hero. It can be anything you want!</p>
                    <input ref="charNameInput" v-model="wizardCharacterName" type="text" class="ko__name-input"
                        placeholder="Enter a character name..." maxlength="30"
                        @keyup.enter="wizardCharacterName.trim() && goStep(3)" />
                    <div class="ko__step-actions">
                        <button class="ko__btn ko__btn--primary" :disabled="!wizardCharacterName.trim()" @click="goStep(3)">
                            Next
                        </button>
                        <button class="ko__btn ko__btn--ghost" @click="goStep(1)">Back</button>
                    </div>
                </div>

                <!-- Step 3: Gender -->
                <div v-if="wizardStep === 3" key="step3" class="ko__step">
                    <h2 class="ko__step-title">Choose your character</h2>
                    <p class="ko__step-sub">Pick the hero that looks like you!</p>
                    <div class="ko__choices ko__choices--gender">
                        <button class="ko__choice" :class="{ 'is-selected': wizardGender === 'boy' }"
                            @click="wizardGender = 'boy'">
                            <div class="ko__choice-icon ko__choice-icon--boy">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                    stroke-linecap="round" stroke-linejoin="round">
                                    <circle cx="12" cy="7" r="5" />
                                    <path d="M17 21v-2a4 4 0 0 0-4-4H11a4 4 0 0 0-4 4v2" />
                                </svg>
                            </div>
                            <span class="ko__choice-label">Boy</span>
                        </button>
                        <button class="ko__choice" :class="{ 'is-selected': wizardGender === 'girl' }"
                            @click="wizardGender = 'girl'">
                            <div class="ko__choice-icon ko__choice-icon--girl">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                    stroke-linecap="round" stroke-linejoin="round">
                                    <circle cx="12" cy="7" r="5" />
                                    <path d="M17 21v-2a4 4 0 0 0-4-4H11a4 4 0 0 0-4 4v2" />
                                </svg>
                            </div>
                            <span class="ko__choice-label">Girl</span>
                        </button>
                    </div>
                    <div class="ko__step-actions">
                        <button class="ko__btn ko__btn--primary" :disabled="!wizardGender" @click="goStep(4)">
                            Next
                        </button>
                        <button class="ko__btn ko__btn--ghost" @click="goStep(2)">Back</button>
                    </div>
                </div>

                <!-- Step 4: Theme -->
                <div v-if="wizardStep === 4" key="step4" class="ko__step">
                    <h2 class="ko__step-title">{{ themeChangeProfile ? 'Choose a New Theme' : 'Pick your world' }}</h2>
                    <p class="ko__step-sub">{{ themeChangeProfile ? 'Your character will get a new look!' : 'Where does your adventure take place?' }}</p>
                    <div class="ko__choices ko__choices--theme">
                        <button v-for="t in themes" :key="t.value" class="ko__choice ko__choice--theme"
                            :class="[{ 'is-selected': wizardTheme === t.value }, 'ko__choice--' + t.value]"
                            @click="wizardTheme = t.value">
                            <div class="ko__theme-icon" v-html="t.icon"></div>
                            <span class="ko__choice-label">{{ t.label }}</span>
                        </button>
                    </div>
                    <div class="ko__step-actions">
                        <button class="ko__btn ko__btn--primary" :disabled="!wizardTheme || saving"
                            @click="themeChangeProfile ? saveThemeChange() : goStep(5)">
                            {{ saving ? 'Saving...' : (themeChangeProfile ? 'Save Theme' : 'Next') }}
                        </button>
                        <button class="ko__btn ko__btn--ghost"
                            @click="themeChangeProfile ? cancelWizard() : goStep(3)">
                            {{ themeChangeProfile ? 'Cancel' : 'Back' }}
                        </button>
                    </div>
                </div>

                <!-- Step 5: Confirmation -->
                <div v-if="wizardStep === 5" key="step5" class="ko__step ko__step--confirm">
                    <div class="ko__confirm-burst"></div>
                    <h2 class="ko__step-title ko__step-title--big">Welcome, {{ wizardCharacterName }}!</h2>
                    <p class="ko__step-sub">Your adventure begins with your first quest!</p>
                    <div class="ko__step-actions">
                        <button class="ko__btn ko__btn--primary ko__btn--lg" :disabled="saving" @click="createProfile">
                            {{ saving ? 'Creating...' : 'Let\'s Go!' }}
                        </button>
                    </div>
                    <p v-if="saveError" class="ko__error">{{ saveError }}</p>
                </div>
            </transition>

            <!-- Step dots -->
            <div v-if="!themeChangeProfile" class="ko__dots">
                <span v-for="s in 5" :key="s" class="ko__dot" :class="{ 'is-active': wizardStep === s, 'is-done': wizardStep > s }"></span>
            </div>
        </div>

        <!-- ═══════════ EDIT/DELETE MENU ═══════════ -->
        <transition name="ko-fade">
            <div v-if="menuProfile" class="ko__overlay" @click.self="closeMenu">
                <div class="ko__menu">
                    <h4 class="ko__menu-title">{{ menuProfile.childName }}</h4>
                    <button class="ko__menu-item" @click="editFromMenu">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                            stroke-linecap="round" stroke-linejoin="round">
                            <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z" />
                        </svg>
                        Edit Name
                    </button>
                    <button class="ko__menu-item ko__menu-item--danger" @click="confirmDelete">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                            stroke-linecap="round" stroke-linejoin="round">
                            <polyline points="3 6 5 6 21 6" />
                            <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                        </svg>
                        Delete Profile
                    </button>
                    <button class="ko__menu-cancel" @click="closeMenu">Cancel</button>
                </div>
            </div>
        </transition>

        <!-- DELETE CONFIRM -->
        <transition name="ko-fade">
            <div v-if="deleteTarget" class="ko__overlay" @click.self="deleteTarget = null">
                <div class="ko__menu">
                    <h4 class="ko__menu-title">Delete {{ deleteTarget.childName }}?</h4>
                    <p class="ko__menu-text">This will permanently remove this player and all their progress.</p>
                    <button class="ko__menu-item ko__menu-item--danger" :disabled="deleting" @click="doDelete">
                        {{ deleting ? 'Deleting...' : 'Yes, Delete' }}
                    </button>
                    <button class="ko__menu-cancel" @click="deleteTarget = null">Cancel</button>
                </div>
            </div>
        </transition>

        <!-- EDIT NAME MODAL -->
        <transition name="ko-fade">
            <div v-if="editNameProfile" class="ko__overlay" @click.self="editNameProfile = null">
                <div class="ko__menu">
                    <h4 class="ko__menu-title">Edit Names</h4>
                    <label class="ko__edit-label">Real Name</label>
                    <input v-model="editNameValue" type="text" class="ko__edit-input" maxlength="30"
                        placeholder="Child's real name..." />
                    <label class="ko__edit-label">Character Name</label>
                    <input v-model="editCharacterNameValue" type="text" class="ko__edit-input" maxlength="30"
                        placeholder="Character name..." @keyup.enter="saveEditName" />
                    <button class="ko__menu-item" :disabled="!editNameValue.trim() || !editCharacterNameValue.trim() || editSaving" @click="saveEditName">
                        {{ editSaving ? 'Saving...' : 'Save' }}
                    </button>
                    <button class="ko__menu-cancel" @click="editNameProfile = null">Cancel</button>
                </div>
            </div>
        </transition>
    </div>
</template>

<script>
import { getCharacter, ARCHETYPE_NAMES } from '@/utils/characterConfig'

export default {
    middleware: ['auth'],

    components: {
        'main-nav': () => import('@/components/Nav')
    },

    data() {
        return {
            profiles: [],
            loading: true,
            mode: 'select', // 'select' | 'wizard'

            // Wizard
            wizardStep: 1,
            wizardName: '',
            wizardCharacterName: '',
            wizardGender: '',
            wizardTheme: '',
            wizardTransition: 'slide-left',
            saving: false,
            saveError: '',

            // Theme change
            themeChangeProfile: null,

            // Menus
            menuProfile: null,
            deleteTarget: null,
            deleting: false,
            editNameProfile: null,
            editNameValue: '',
            editCharacterNameValue: '',
            editSaving: false,

            achievementSlots: [
                { key: 'sidekick', label: 'Sidekick' },
                { key: 'background', label: 'Background' },
                { key: 'badge', label: 'Badge' }
            ],

            themes: [
                {
                    value: 'medieval',
                    label: 'Medieval',
                    icon: '<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M24 4v28M24 32l-6 8h12l-6-8M18 16h12M16 22h16"/></svg>'
                },
                {
                    value: 'scifi',
                    label: 'Sci-Fi',
                    icon: '<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M24 6l-8 18h16L24 6zM16 24l-6 14h28l-6-14M24 24v14M20 38h8"/></svg>'
                },
                {
                    value: 'videogame',
                    label: 'Video Game',
                    icon: '<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><rect x="6" y="14" width="36" height="20" rx="10"/><circle cx="32" cy="21" r="2"/><circle cx="38" cy="27" r="2"/><line x1="14" y1="21" x2="14" y2="27"/><line x1="11" y1="24" x2="17" y2="24"/></svg>'
                }
            ]
        }
    },

    async mounted() {
        await this.fetchProfiles()
    },

    methods: {
        async fetchProfiles() {
            this.loading = true
            try {
                const res = await this.$axios.$get('/api/child-profiles')
                this.profiles = res.profiles || []
                if (!this.profiles.length) {
                    this.startWizard()
                }
            } catch (err) {
                console.error('Error fetching profiles:', err)
            } finally {
                this.loading = false
            }
        },

        themeLabel(theme) {
            return { medieval: 'Medieval', scifi: 'Sci-Fi', videogame: 'Video Game' }[theme] || theme
        },

        getCharacterImage(profile) {
            if (!profile.currentDiscType || !profile.gender || !profile.theme) return null
            const char = getCharacter(profile.theme, profile.currentDiscType, profile.gender)
            return char.imagePath
        },

        getArchetypeName(profile) {
            if (!profile.currentDiscType || !profile.gender) return ''
            const names = ARCHETYPE_NAMES[profile.currentDiscType]
            return names ? names[profile.gender] : ''
        },

        selectProfile(profile) {
            this.$store.commit('SET_ACTIVE_CHILD_PROFILE', profile)
            this.$router.push('/dashboard')
        },

        // ── Wizard ───────────────────────────────────
        startWizard() {
            this.mode = 'wizard'
            this.wizardStep = 1
            this.wizardName = ''
            this.wizardCharacterName = ''
            this.wizardGender = ''
            this.wizardTheme = ''
            this.themeChangeProfile = null
            this.saveError = ''
            this.$nextTick(() => {
                if (this.$refs.nameInput) this.$refs.nameInput.focus()
            })
        },

        cancelWizard() {
            if (this.profiles.length) {
                this.mode = 'select'
                this.themeChangeProfile = null
            }
        },

        goStep(step) {
            this.wizardTransition = step > this.wizardStep ? 'slide-left' : 'slide-right'
            this.wizardStep = step
            if (step === 1) {
                this.$nextTick(() => {
                    if (this.$refs.nameInput) this.$refs.nameInput.focus()
                })
            } else if (step === 2 && !this.themeChangeProfile) {
                this.$nextTick(() => {
                    if (this.$refs.charNameInput) this.$refs.charNameInput.focus()
                })
            }
        },

        async createProfile() {
            this.saving = true
            this.saveError = ''
            try {
                const res = await this.$axios.$post('/api/child-profiles', {
                    childName: this.wizardName.trim(),
                    characterName: this.wizardCharacterName.trim(),
                    gender: this.wizardGender,
                    theme: this.wizardTheme
                })
                const profile = res.profile
                this.profiles.push(profile)
                this.$store.commit('SET_ACTIVE_CHILD_PROFILE', profile)
                this.$router.push('/library')
            } catch (err) {
                this.saveError = (err.response && err.response.data && err.response.data.message) || 'Failed to create profile.'
            } finally {
                this.saving = false
            }
        },

        // ── Theme change ─────────────────────────────
        startThemeChange(profile) {
            this.themeChangeProfile = profile
            this.wizardTheme = profile.theme
            this.wizardStep = 4
            this.mode = 'wizard'
        },

        async saveThemeChange() {
            this.saving = true
            try {
                const res = await this.$axios.$put(`/api/child-profiles/${this.themeChangeProfile._id}`, {
                    theme: this.wizardTheme
                })
                const idx = this.profiles.findIndex(p => p._id === this.themeChangeProfile._id)
                if (idx !== -1) this.$set(this.profiles, idx, res.profile)

                const active = this.$store.state.activeChildProfile
                if (active && active._id === this.themeChangeProfile._id) {
                    this.$store.commit('SET_ACTIVE_CHILD_PROFILE', res.profile)
                }

                this.themeChangeProfile = null
                this.mode = 'select'
            } catch (err) {
                console.error('Error saving theme:', err)
            } finally {
                this.saving = false
            }
        },

        // ── Edit / Delete ────────────────────────────
        openMenu(profile) {
            this.menuProfile = profile
        },

        closeMenu() {
            this.menuProfile = null
        },

        editFromMenu() {
            this.editNameProfile = this.menuProfile
            this.editNameValue = this.menuProfile.childName
            this.editCharacterNameValue = this.menuProfile.characterName || ''
            this.closeMenu()
        },

        async saveEditName() {
            if (!this.editNameValue.trim() || this.editSaving) return
            this.editSaving = true
            try {
                const res = await this.$axios.$put(`/api/child-profiles/${this.editNameProfile._id}`, {
                    childName: this.editNameValue.trim(),
                    characterName: this.editCharacterNameValue.trim()
                })
                const idx = this.profiles.findIndex(p => p._id === this.editNameProfile._id)
                if (idx !== -1) this.$set(this.profiles, idx, res.profile)
                this.editNameProfile = null
            } catch (err) {
                console.error('Error saving name:', err)
            } finally {
                this.editSaving = false
            }
        },

        confirmDelete() {
            this.deleteTarget = this.menuProfile
            this.closeMenu()
        },

        async doDelete() {
            if (this.deleting) return
            this.deleting = true
            try {
                await this.$axios.$delete(`/api/child-profiles/${this.deleteTarget._id}`)
                this.profiles = this.profiles.filter(p => p._id !== this.deleteTarget._id)

                const active = this.$store.state.activeChildProfile
                if (active && active._id === this.deleteTarget._id) {
                    this.$store.commit('SET_ACTIVE_CHILD_PROFILE', null)
                }
                this.deleteTarget = null
                if (!this.profiles.length) this.startWizard()
            } catch (err) {
                console.error('Error deleting:', err)
            } finally {
                this.deleting = false
            }
        }
    },

    head() {
        return { title: "Who's Playing? | The Assessment Library" }
    }
}
</script>

<style lang="scss" scoped>
@import '~assets/scss/vars';

$green: #008b67;
$medieval: #b8860b;
$scifi: #0077cc;
$videogame: #9b30ff;
$dark-bg: linear-gradient(135deg, #0f1623 0%, #1a2744 40%, #12304d 100%);

.ko {
    min-height: 100vh;
    background: $dark-bg;
}

/* ════════ Screen / Header ════════ */

.ko__screen {
    padding: 120px 24px 80px;
    max-width: 960px;
    margin: 0 auto;
}

.ko__header {
    text-align: center;
    margin-bottom: 48px;
}

.ko__title {
    font-family: $font-family;
    font-size: 42px;
    font-weight: 900;
    color: #fff;
    margin: 0 0 8px;
    text-shadow: 0 2px 20px rgba($green, 0.35);
}

.ko__subtitle {
    font-family: $nunito-family;
    font-size: 16px;
    color: rgba(255, 255, 255, 0.5);
    margin: 0;
    font-weight: 600;
}

/* ════════ Loading ════════ */

.ko__loading {
    text-align: center;
    padding: 60px 0;
    color: rgba(255, 255, 255, 0.5);
    font-family: $nunito-family;

    p { margin: 16px 0 0; color: rgba(255, 255, 255, 0.5); }
}

.ko__spinner {
    width: 36px; height: 36px;
    border: 3px solid rgba(255, 255, 255, 0.12);
    border-top-color: $green;
    border-radius: 50%;
    margin: 0 auto;
    animation: ko-spin 0.8s linear infinite;
}
@keyframes ko-spin { to { transform: rotate(360deg); } }

/* ════════ Grid ════════ */

.ko__grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
    gap: 24px;
    justify-items: center;
}

/* ════════ Profile Card ════════ */

.ko__card {
    position: relative;
    width: 100%;
    max-width: 280px;
    background: rgba(255, 255, 255, 0.05);
    backdrop-filter: blur(8px);
    border: 1.5px solid rgba(255, 255, 255, 0.1);
    border-radius: 20px;
    overflow: hidden;
    transition: transform 0.22s, box-shadow 0.22s, border-color 0.22s;
    box-shadow: 0 4px 24px rgba(0, 0, 0, 0.2);

    &:hover { transform: translateY(-5px); box-shadow: 0 12px 36px rgba(0, 0, 0, 0.35); }

    &--medieval { border-color: rgba($medieval, 0.3); &:hover { border-color: rgba($medieval, 0.6); } }
    &--scifi    { border-color: rgba($scifi, 0.3);    &:hover { border-color: rgba($scifi, 0.6); } }
    &--videogame { border-color: rgba($videogame, 0.3); &:hover { border-color: rgba($videogame, 0.6); } }
}

.ko__card-body {
    padding: 24px 20px 16px;
    text-align: center;
    cursor: pointer;
}

.ko__edit {
    position: absolute; top: 10px; right: 10px;
    width: 30px; height: 30px; min-width: 0; padding: 0;
    border: none; background: rgba(255, 255, 255, 0.08);
    border-radius: 8px; display: flex; align-items: center; justify-content: center;
    cursor: pointer; box-shadow: none; z-index: 2;
    transition: background 0.15s;
    svg { width: 14px; height: 14px; color: rgba(255, 255, 255, 0.4); }
    &:hover { background: rgba(255, 255, 255, 0.18); transform: none; svg { color: #fff; } }
}

/* ── Avatar / character ─── */

.ko__avatar-area {
    width: 110px; height: 110px;
    margin: 0 auto 14px;
    border-radius: 50%;
    overflow: hidden;
    position: relative;
}

.ko__char-img {
    width: 100%; height: 100%;
    object-fit: cover;
    display: block;
}

.ko__silhouette {
    width: 100%; height: 100%;
    display: flex; align-items: center; justify-content: center;
    background: rgba(255, 255, 255, 0.04);
    border: 2px dashed rgba(255, 255, 255, 0.12);
    border-radius: 50%;
    box-shadow: 0 0 24px rgba($green, 0.15) inset;
    svg { width: 44px; height: 44px; color: rgba(255, 255, 255, 0.18); }
}

.ko__card-name {
    font-family: $font-family;
    font-size: 18px; font-weight: 800; color: #fff;
    margin: 0 0 2px;
}

.ko__card-charname {
    font-family: $nunito-family;
    font-size: 13px; font-weight: 600; color: rgba(255,255,255,0.55);
    font-style: italic;
    margin: 0 0 8px;
}

.ko__badge {
    display: inline-block;
    font-family: $nunito-family;
    font-size: 11px; font-weight: 700;
    text-transform: uppercase; letter-spacing: 0.06em;
    padding: 4px 12px; border-radius: 50px; color: #fff;
    &--medieval  { background: rgba($medieval, 0.7); }
    &--scifi     { background: rgba($scifi, 0.7); }
    &--videogame { background: rgba($videogame, 0.7); }
}

.ko__archetype {
    font-family: $nunito-family;
    font-size: 13px; color: rgba(255, 255, 255, 0.45);
    margin: 8px 0 0; font-style: italic;
}

/* ── Achievement slots ─── */

.ko__achievements {
    display: flex; justify-content: center; gap: 12px;
    margin-top: 14px; padding-top: 14px;
    border-top: 1px solid rgba(255, 255, 255, 0.06);
}

.ko__ach-slot {
    display: flex; flex-direction: column; align-items: center; gap: 4px;
}

.ko__ach-icon {
    width: 28px; height: 28px;
    border-radius: 6px;
    background: rgba(255, 255, 255, 0.04);
    border: 1px solid rgba(255, 255, 255, 0.08);
    display: flex; align-items: center; justify-content: center;
    svg { width: 14px; height: 14px; color: rgba(255, 255, 255, 0.2); }
}

.ko__ach-label {
    font-family: $nunito-family;
    font-size: 9px; font-weight: 700; color: rgba(255, 255, 255, 0.25);
    text-transform: uppercase; letter-spacing: 0.04em;
}

/* ── Theme button ─── */

.ko__theme-btn {
    display: block; width: 100%;
    padding: 10px; border: none;
    background: rgba(255, 255, 255, 0.04);
    border-top: 1px solid rgba(255, 255, 255, 0.06);
    color: rgba(255, 255, 255, 0.4);
    font-family: $nunito-family; font-size: 12px; font-weight: 700;
    cursor: pointer; box-shadow: none;
    height: auto; border-radius: 0;
    transition: background 0.15s, color 0.15s;
    &:hover { background: rgba($green, 0.1); color: $green; transform: none; }
}

/* ── Add card ─── */

.ko__card--add {
    border-style: dashed; border-color: rgba(255, 255, 255, 0.15);
    background: rgba(255, 255, 255, 0.02); cursor: pointer;
    &:hover { border-color: $green; background: rgba($green, 0.05); }
}

.ko__add-body {
    display: flex; flex-direction: column; align-items: center;
    justify-content: center; min-height: 280px;
}

.ko__add-icon {
    width: 56px; height: 56px; border-radius: 50%;
    border: 2.5px dashed rgba(255, 255, 255, 0.2);
    display: flex; align-items: center; justify-content: center;
    margin-bottom: 12px; transition: border-color 0.2s, background 0.2s;
    svg { width: 24px; height: 24px; color: rgba(255, 255, 255, 0.3); transition: color 0.2s; }
    .ko__card--add:hover & { border-color: $green; background: rgba($green, 0.1); svg { color: $green; } }
}

.ko__add-label {
    font-family: $nunito-family;
    font-size: 15px; font-weight: 700;
    color: rgba(255, 255, 255, 0.35); margin: 0;
    transition: color 0.2s;
    .ko__card--add:hover & { color: $green; }
}

/* ════════ WIZARD ════════ */

.ko__screen--wizard {
    display: flex; flex-direction: column;
    align-items: center; justify-content: center;
    min-height: calc(100vh - 120px);
    padding-top: 100px;
}

.ko__step {
    text-align: center; width: 100%; max-width: 520px; padding: 0 16px;
}

.ko__step-title {
    font-family: $font-family;
    font-size: 32px; font-weight: 900; color: #fff;
    margin: 0 0 8px;
    text-shadow: 0 2px 16px rgba(0, 0, 0, 0.3);

    &--big { font-size: 38px; text-shadow: 0 2px 20px rgba($green, 0.3); }
}

.ko__step-sub {
    font-family: $nunito-family;
    font-size: 15px; color: rgba(255, 255, 255, 0.45);
    margin: 0 0 32px; font-weight: 600;
}

/* ── Name input ─── */

.ko__name-input {
    display: block; width: 100%; max-width: 360px;
    margin: 0 auto 28px; padding: 16px 20px;
    font-family: $nunito-family; font-size: 20px; font-weight: 700;
    color: #fff; text-align: center;
    background: rgba(255, 255, 255, 0.06);
    border: 2px solid rgba(255, 255, 255, 0.12);
    border-radius: 14px; outline: none;
    transition: border-color 0.2s;
    &::placeholder { color: rgba(255, 255, 255, 0.2); }
    &:focus { border-color: $green; }
}

/* ── Choice cards ─── */

.ko__choices {
    display: flex; justify-content: center; gap: 20px;
    margin-bottom: 32px; flex-wrap: wrap;
}

.ko__choice {
    display: flex; flex-direction: column; align-items: center;
    gap: 10px; padding: 24px 28px;
    background: rgba(255, 255, 255, 0.05);
    border: 2px solid rgba(255, 255, 255, 0.1);
    border-radius: 16px; cursor: pointer;
    transition: transform 0.2s, border-color 0.2s, background 0.2s, box-shadow 0.2s;
    width: auto; height: auto; box-shadow: none;

    &:hover { transform: translateY(-3px); background: rgba(255, 255, 255, 0.08); }
    &.is-selected {
        border-color: $green; background: rgba($green, 0.1);
        box-shadow: 0 0 20px rgba($green, 0.2);
    }
}

.ko__choice-icon {
    width: 56px; height: 56px; border-radius: 50%;
    display: flex; align-items: center; justify-content: center;
    svg { width: 32px; height: 32px; color: rgba(255, 255, 255, 0.6); }

    &--boy  { background: rgba(#0077cc, 0.2); svg { color: #5ba8dc; } }
    &--girl { background: rgba(#cc3399, 0.2); svg { color: #e06cb8; } }
}

.ko__choice-label {
    font-family: $nunito-family;
    font-size: 15px; font-weight: 800; color: #fff;
}

/* Theme-specific choice colors */
.ko__choice--theme {
    min-width: 130px;
    &.ko__choice--medieval.is-selected  { border-color: $medieval; background: rgba($medieval, 0.12); box-shadow: 0 0 20px rgba($medieval, 0.2); }
    &.ko__choice--scifi.is-selected     { border-color: $scifi; background: rgba($scifi, 0.12); box-shadow: 0 0 20px rgba($scifi, 0.2); }
    &.ko__choice--videogame.is-selected { border-color: $videogame; background: rgba($videogame, 0.12); box-shadow: 0 0 20px rgba($videogame, 0.2); }
}

.ko__theme-icon {
    width: 48px; height: 48px;
    display: flex; align-items: center; justify-content: center;
    svg { width: 48px; height: 48px; color: rgba(255, 255, 255, 0.55); }
}

/* ── Buttons ─── */

.ko__step-actions {
    display: flex; justify-content: center; gap: 12px; flex-wrap: wrap;
}

.ko__btn {
    width: auto; height: auto;
    padding: 13px 36px;
    border-radius: 50px;
    font-family: $nunito-family; font-size: 15px; font-weight: 800;
    cursor: pointer; border: none; box-shadow: none;
    transition: transform 0.15s, box-shadow 0.15s, opacity 0.15s;

    &--primary {
        background: $green; color: #fff;
        &:hover:not(:disabled) { transform: translateY(-1px); box-shadow: 0 4px 16px rgba($green, 0.35); }
        &:disabled { opacity: 0.4; cursor: not-allowed; transform: none; }
    }
    &--ghost {
        background: transparent; color: rgba(255, 255, 255, 0.45);
        &:hover { color: #fff; transform: none; }
    }
    &--lg { padding: 16px 48px; font-size: 18px; }
}

.ko__error {
    font-family: $nunito-family;
    font-size: 13px; color: #e93d2f; font-weight: 600;
    margin: 12px 0 0;
}

/* ── Step dots ─── */

.ko__dots {
    display: flex; justify-content: center; gap: 10px;
    margin-top: 40px;
}

.ko__dot {
    width: 10px; height: 10px; border-radius: 50%;
    background: rgba(255, 255, 255, 0.12);
    transition: background 0.3s, transform 0.3s;
    &.is-active { background: $green; transform: scale(1.3); }
    &.is-done   { background: rgba($green, 0.4); }
}

/* ── Confirmation burst ─── */

.ko__step--confirm { position: relative; }

.ko__confirm-burst {
    position: absolute; top: -40px; left: 50%; transform: translateX(-50%);
    width: 200px; height: 200px; border-radius: 50%;
    background: radial-gradient(circle, rgba($green, 0.15) 0%, transparent 70%);
    pointer-events: none;
    animation: ko-pulse 2s ease-in-out infinite;
}

@keyframes ko-pulse {
    0%, 100% { transform: translateX(-50%) scale(1); opacity: 0.6; }
    50% { transform: translateX(-50%) scale(1.15); opacity: 1; }
}

/* ════════ Menus / Overlays ════════ */

.ko__overlay {
    position: fixed; inset: 0;
    background: rgba(0, 0, 0, 0.55);
    display: flex; align-items: center; justify-content: center;
    z-index: 999999; padding: 20px;
}

.ko__menu {
    background: #fff; border-radius: 16px; padding: 24px;
    width: 100%; max-width: 320px; text-align: center;
    box-shadow: 0 16px 48px rgba(0, 0, 0, 0.25);
}

.ko__menu-title {
    font-family: $font-family;
    font-size: 18px; font-weight: 800; color: #12304d; margin: 0 0 16px;
}

.ko__menu-text {
    font-family: $nunito-family;
    font-size: 13px; color: #888; margin: 0 0 16px; line-height: 1.5;
}

.ko__menu-item {
    display: flex; align-items: center; justify-content: center; gap: 8px;
    width: 100%; height: auto; padding: 12px 16px; margin-bottom: 8px;
    border: none; border-radius: 10px; background: #f0f2f5;
    color: #12304d; font-family: $nunito-family; font-size: 14px; font-weight: 700;
    cursor: pointer; box-shadow: none;
    transition: background 0.15s;
    svg { width: 16px; height: 16px; }
    &:hover { background: #e4e7ec; transform: none; }
    &--danger { background: #fef2f2; color: #e93d2f; &:hover { background: #fde8e8; } }
    &:disabled { opacity: 0.6; cursor: not-allowed; }
}

.ko__menu-cancel {
    width: 100%; height: auto; padding: 10px; margin-top: 4px;
    border: none; border-radius: 10px; background: transparent;
    color: #999; font-family: $nunito-family; font-size: 13px; font-weight: 700;
    cursor: pointer; box-shadow: none;
    &:hover { color: #666; background: #f8f8f8; transform: none; }
}

.ko__edit-label {
    display: block;
    font-family: $nunito-family; font-size: 12px; font-weight: 700;
    color: #6b7a8d; text-transform: uppercase; letter-spacing: 0.04em;
    margin-bottom: 4px;
}

.ko__edit-input {
    display: block; width: 100%;
    padding: 12px 14px; margin-bottom: 12px;
    font-family: $nunito-family; font-size: 16px; font-weight: 600;
    border: 1.5px solid #dde3ea; border-radius: 10px;
    outline: none; box-sizing: border-box;
    &:focus { border-color: $green; }
}

/* ════════ Transitions ════════ */

.ko-fade-enter-active, .ko-fade-leave-active { transition: opacity 0.2s; }
.ko-fade-enter, .ko-fade-leave-to { opacity: 0; }

.slide-left-enter-active, .slide-left-leave-active,
.slide-right-enter-active, .slide-right-leave-active {
    transition: all 0.35s cubic-bezier(0.4, 0, 0.2, 1);
}
.slide-left-enter  { opacity: 0; transform: translateX(60px); }
.slide-left-leave-to { opacity: 0; transform: translateX(-60px); }
.slide-right-enter { opacity: 0; transform: translateX(-60px); }
.slide-right-leave-to { opacity: 0; transform: translateX(60px); }

/* ════════ Responsive ════════ */

@media (max-width: 600px) {
    .ko__screen { padding: 100px 16px 60px; }
    .ko__title { font-size: 30px; }
    .ko__subtitle { font-size: 14px; }
    .ko__header { margin-bottom: 32px; }
    .ko__grid { grid-template-columns: repeat(auto-fill, minmax(160px, 1fr)); gap: 16px; }
    .ko__card { max-width: 100%; }
    .ko__card-body { padding: 18px 14px 12px; }
    .ko__avatar-area { width: 80px; height: 80px; }
    .ko__card-name { font-size: 16px; }
    .ko__step-title { font-size: 24px; &--big { font-size: 28px; } }
    .ko__choices { gap: 12px; }
    .ko__choice { padding: 18px 20px; }
    .ko__name-input { font-size: 18px; padding: 14px 16px; }
}
</style>
