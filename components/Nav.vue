<template>
    <header class="main-nav" :class="{ 'is-scrolled': hasScrolled }" role="banner">
        <div class="container">
            <div class="row bar" :aria-label="'Main navigation for The Assessment Library'">

                <div class="brand">
                    <nuxt-link to="/" class="brand-link" aria-label="Go to The Assessment Library home">
                        <span class="logo-mark" aria-hidden="true">
                            <span class="book book--d"></span>
                            <span class="book book--i"></span>
                            <span class="book book--s"></span>
                            <span class="book book--c"></span>
                        </span>
                        <span class="brand-text">The Assessment Library</span>
                    </nuxt-link>
                </div>

                <nav class="links desktop" role="navigation" aria-label="Primary">
                    <nuxt-link v-for="item in navItems" :key="item.to" :to="item.to" exact
                        :class="['link', isActive(item.to) ? 'active' : '']">
                        {{ item.label }}
                    </nuxt-link>
                </nav>

                <div class="actions desktop">
                    <button v-if="loggedIn" class="green action-btn" @click="logoutAndGoHome">
                        Sign Out
                    </button>
                    <button v-else type="button" class="green action-btn" @click="goToLogin">
                        Sign In
                    </button>
                </div>

                <button class="hamburger mobile" :aria-expanded="mobileOpen ? 'true' : 'false'"
                    aria-controls="mobile-menu" @click="toggleMobile" @keyup.enter.space.prevent="toggleMobile">
                    <span class="hamburger-box" aria-hidden="true">
                        <span class="hamburger-inner"></span>
                    </span>
                    <span class="sr-only">{{ mobileOpen ? 'Close menu' : 'Open menu' }}</span>
                </button>
            </div>
        </div>

        <transition name="fade">
            <div v-if="mobileOpen" class="backdrop mobile" @click="closeMobile" />
        </transition>

        <transition name="slide-down">
            <nav v-if="mobileOpen" id="mobile-menu" class="mobile-drawer mobile" role="dialog" aria-modal="true"
                aria-label="Mobile menu" ref="drawer">
                <ul class="mobile-list">
                    <li v-for="item in navItems" :key="item.to">
                        <nuxt-link :to="item.to" class="mobile-link" :class="isActive(item.to) ? 'active' : ''"
                            @click.native="closeMobile">
                            {{ item.label }}
                        </nuxt-link>
                    </li>
                </ul>
                <div class="mobile-actions">
                    <button v-if="loggedIn" class="steel" @click="logoutAndGoHome">
                        Sign Out
                    </button>
                    <button v-else type="button" class="steel" @click="goToLogin">
                        Sign In
                    </button>
                </div>
            </nav>
        </transition>
    </header>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
    name: 'MainNav',
    data() {
        return {
            mobileOpen: false,
            hasScrolled: false,
            navItems: [
                { label: 'Dashboard', to: '/dashboard' },
                { label: 'Library', to: '/library' },
                { label: 'About', to: '/about' },
                { label: 'Contact', to: '/contact' }
            ]
        }
    },
    computed: {
        ...mapState(['loggedIn'])
    },

    mounted() {
        this.onScroll = () => { this.hasScrolled = window.pageYOffset > 4 }
        window.addEventListener('scroll', this.onScroll, { passive: true })
    },

    beforeDestroy() {
        window.removeEventListener('scroll', this.onScroll)
        this.enableScroll()
    },
    methods: {
        ...mapActions(['login', 'logout']),

        isActive(to) {
            const p = this.$route.path
            return to === '/' ? p === '/' : p.startsWith(to)
        },
        async logoutAndGoHome() {
            await this.logout()
            this.closeMobile()
            if (this.$route.path !== '/') {
                this.$router.push('/')
            }
        },
        goToLogin() {
            this.$router.push('/auth/login')
        },
        toggleMobile() {
            this.mobileOpen = !this.mobileOpen
            this.mobileOpen ? this.disableScroll() : this.enableScroll()
        },
        closeMobile() {
            if (!this.mobileOpen) return
            this.mobileOpen = false
            this.enableScroll()
        },
        disableScroll() {
            document.documentElement.style.overflow = 'hidden'
            document.body.style.overflow = 'hidden'
        },
        enableScroll() {
            document.documentElement.style.overflow = ''
            document.body.style.overflow = ''
        }
    }
}
</script>


<style scoped lang="scss">
$blue: #12304d;
$sky: #00A8FF;
$gold: #FFDE59;
$ink: #1b1b1b;
$paper: #ffffff;
$shadow: rgba(0, 0, 0, 0.08);

.sr-only {
    position: absolute !important;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 1px, 1px);
    white-space: nowrap;
    border: 0;
}

.main-nav {
    position: sticky;
    top: 0;
    z-index: 1000000;
    width: 100%;
    background: $paper;
    transition: box-shadow 160ms ease, background-color 160ms ease;
    box-shadow: 2px 2px 2px gray;

    &.is-scrolled {
        box-shadow: 0 6px 18px $shadow;
        background: rgba($paper, 0.98);
        backdrop-filter: saturate(120%) blur(6px);
    }

    .bar {
        display: flex;
        align-items: center;
        justify-content: space-between;
        min-height: 64px;
        padding: 10px 0;
        gap: 8px;
    }
}

.brand {
    flex: 1 1 auto;

    .brand-link {
        display: inline-flex;
        align-items: center;
        gap: 12px;
        text-decoration: none;
        min-width: 0;
    }

    .brand-text {
        font-family: 'Merriweather', 'Georgia', serif;
        font-weight: 700;
        font-size: 18px;
        color: $blue;
        letter-spacing: 0.2px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        max-width: 100%;
        margin: 0;
    }

    .logo-mark {
        display: inline-flex;
        gap: 3px;

        .book {
            width: 8px;
            height: 18px;
            border-radius: 2px;
            box-shadow: 0 1px 2px rgba(0, 0, 0, 0.12);

            &--d {
                background: #e93d2f;
            }

            &--i {
                background: #ffbd05;
            }

            &--s {
                background: #0dab49;
            }

            &--c {
                background: #1666ff;
            }
        }
    }
}

.links.desktop,
.actions.desktop {
    display: none;
}

.hamburger.mobile {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 44px;
    height: 44px;
    border-radius: 10px;
    border: 1px solid rgba($blue, 0.18);
    background: #fff;
    cursor: pointer;
    margin-left: auto;

    .hamburger-box {
        width: 18px;
        height: 14px;
        position: relative;
    }

    .hamburger-inner,
    .hamburger-inner::before,
    .hamburger-inner::after {
        position: absolute;
        left: 0;
        width: 18px;
        height: 2px;
        background-color: $blue;
        border-radius: 2px;
        content: "";
        transition: transform 160ms ease, opacity 160ms ease;
    }

    .hamburger-inner {
        top: 6px;
    }

    .hamburger-inner::before {
        top: -6px;
    }

    .hamburger-inner::after {
        top: 6px;
    }
}

.backdrop.mobile {
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.25);
    z-index: 999;
}

.mobile-drawer.mobile {
    position: fixed;
    left: 0;
    right: 0;
    top: 64px;
    background: #fff;
    z-index: 1000;
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.12);
    border-bottom: 1px solid rgba(0, 0, 0, 0.06);
    padding: 12px 16px 16px;

    .mobile-list {
        list-style: none;
        padding: 0;
        margin: 0;

        li {
            margin: 2px 0;
        }
    }

    .mobile-link {
        display: block;
        padding: 12px 8px;
        border-radius: 10px;
        text-decoration: none;
        color: $ink;
        font-weight: 600;

        &:hover {
            background: rgba($blue, 0.06);
        }

        &.active {
            color: $blue;
            background: rgba($gold, 0.18);
        }
    }

    .mobile-actions {
        margin-top: 8px;
        display: grid;
        gap: 8px;

        .full {
            width: 100%;
        }
    }
}

.link {
    position: relative;
    display: inline-flex;
    align-items: center;
    padding: 8px 12px;
    color: $ink;
    text-decoration: none;
    font-weight: 600;
    border-radius: 8px;
    transition: color 140ms ease, background 140ms ease;

    &:hover {
        background: rgba($blue, 0.06);
    }

    &.active {
        color: $blue;
    }

    &.active::after {
        content: "";
        position: absolute;
        left: 10px;
        right: 10px;
        bottom: 2px;
        height: 3px;
        background: $gold;
        border-radius: 2px;
    }
}

.action-btn,
.teal,
.light {
    font-family: 'Merriweather', 'Georgia', serif;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    height: 38px;
    padding: 0 14px;
    border-radius: 10px;
    font-weight: 700;
    text-decoration: none;
    cursor: pointer;
    width: 90px;
    border: none;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);

    &:active {
        transform: translateY(1px);
    }
}

.green {
    margin-left: 150px;
    color: #fff;
    background: #008b67;

    &:hover {
        filter: saturate(110%);
    }
}

.steel {
    color: #fff;
    background: #008b67;

    &:hover {
        filter: saturate(110%);
    }
}

.light {
    background: #fff;
    color: $blue;
    border-color: rgba($blue, 0.2);

    &:hover {
        background: rgba($blue, 0.06);
    }
}

.fade-enter-active,
.fade-leave-active {
    transition: opacity 160ms ease;
}

.fade-enter,
.fade-leave-to {
    opacity: 0;
}

.slide-down-enter-active,
.slide-down-leave-active {
    transition: transform 180ms ease, opacity 180ms ease;
}

.slide-down-enter,
.slide-down-leave-to {
    transform: translateY(-8px);
    opacity: 0;
}

@media (max-width: 959px) {
    .main-nav .bar {
        justify-content: flex-start;
        gap: 8px;
    }

    .main-nav .brand {
        margin-left: 20px !important;
    }

    .teal {
        margin-left: 0px !important;
    }
}

@media (min-width: 960px) {
    .links.desktop {
        display: flex;
        gap: 12px;
    }

    .actions.desktop {
        display: inline-flex;
        gap: 8px;
    }

    .hamburger.mobile,
    .mobile,
    .mobile-drawer.mobile,
    .backdrop.mobile {
        display: none !important;
    }

    .main-nav .brand {
        margin-left: 120px;
    }
}

@media (min-width: 600px) {}
</style>