<template>
    <section class="footer" v-if="!hidden">
        <div class="container">
            <div class="row">
                <div class="col-4">
                    <img class="logo" src="https://cdn.assessments24x7.com/file/assessments24x7-media/logo-footer.png"
                        alt="Assessments 24x7 - Global Leader in Assessment Technology" loading="lazy">
                    <p class="about-text">
                        For 20+ years, we have provided consultants,
                        coaches, and corporations the tools to optimize hiring processes
                        and maximize performance. Our validated assessments,
                        flexible platform, and exceptional support have positioned us as
                        a "Global Leader in Assessment Technology."
                    </p>
                </div>

                <div class="col-4">
                    <div class="col-6">
                        <ul class="footer-links">
                            <li class="link"><nuxt-link to="/">Home</nuxt-link></li>
                            <li class="link"><nuxt-link to="/assessments">Assessments</nuxt-link></li>
                            <li class="link"><nuxt-link to="/certifications">Certifications</nuxt-link></li>
                            <li class="link"><a href="https://blog.assessments24x7.com/">Blog</a></li>
                            <li class="link"><nuxt-link to="/about">About</nuxt-link></li>
                            <li class="link"><nuxt-link to="/contact">Contact</nuxt-link></li>
                        </ul>
                    </div>

                    <div class="col-6">
                        <ul class="footer-links">
                            <li class="link"><nuxt-link to="/about/testimonials">Testimonials</nuxt-link></li>
                            <li class="link"><nuxt-link to="/about/what-is-disc">What is DISC?</nuxt-link></li>
                            <li class="link"><nuxt-link to="/about/faq">FAQs</nuxt-link></li>
                            <li class="link"><nuxt-link to="/certifications/directory/coaches">Coach
                                    Directory</nuxt-link></li>
                            <li class="link"><nuxt-link to="/certifications/directory/workshop-leaders">Workshop
                                    Leaders</nuxt-link></li>
                            <li class="link"><nuxt-link to="/about/validity">Validity Studies</nuxt-link></li>
                        </ul>
                    </div>
                </div>

                <div class="col-4">
                    <p class="contact-title">Contact Assessments 24x7</p>
                    <p class="contact-info"><a class="contact-touch-point" href="tel:+12064006647">+1 (206) 400-6647</a>
                    </p>
                    <p class="contact-info"><a class="contact-touch-point"
                            href="mailto:sales@assessments24x7.com">sales@assessments24x7.com</a></p>

                    <!-- Facebook icon -->
                    <a class="contact-social" target="_blank" rel="noopener"
                        href="https://www.facebook.com/Assessments247" aria-label="Like Assessments 24x7 on Facebook">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                        </svg>
                    </a>

                    <!-- Twitter icon -->
                    <a class="contact-social" target="_blank" rel="noopener" href="https://twitter.com/assessments24x7"
                        aria-label="Follow Assessments 24x7 on Twitter">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <path
                                d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z">
                            </path>
                        </svg>
                    </a>

                    <!-- LinkedIn icon -->
                    <a class="contact-social" target="_blank" rel="noopener"
                        href="https://www.linkedin.com/company/assessments24x7"
                        aria-label="Connect with Assessments 24x7 on LinkedIn">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z">
                            </path>
                            <rect x="2" y="9" width="4" height="12"></rect>
                            <circle cx="4" cy="4" r="2"></circle>
                        </svg>
                    </a>

                    <!-- Instagram icon -->
                    <a class="contact-social" target="_blank" rel="noopener"
                        href="https://www.instagram.com/assessments24x7/"
                        aria-label="Connect with Assessments 24x7 on Instagram">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="white">
                            <path
                                d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z" />
                        </svg>
                    </a>

                    <!-- YouTube icon -->
                    <a class="contact-social" target="_blank" rel="noopener"
                        href="https://www.youtube.com/assessments24x7online"
                        aria-label="Watch Assessments 24x7 on YouTube">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <path
                                d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z">
                            </path>
                            <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
                        </svg>
                    </a>

                    <p class="contact-legal">&copy; {{ new Date().getFullYear() }} Global Assessment Technologies
                        LLC.<br />All Rights Reserved.</p>
                    <p class="contact-privacy">
                        <a href="/legal/privacy">Privacy Policy</a> &nbsp;|&nbsp; <a href="/legal/compliance">GDPR
                            Compliance</a><br />
                        <a href="/legal/accessibility">Accessibility</a>
                    </p>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    data() {
        return {
            hidden: false,
        }
    },
    created() {
        if (this.$route.query.noframe) {
            this.hidden = true;
        }
    }
}
</script>

<style lang="scss" scoped>
@import '~assets/scss/app';

.footer {
    background: linear-gradient(90deg, rgba(30, 34, 45, 1) 0%, rgba(48, 53, 66, 1) 100%);
    padding: 50px 0;
    color: #fff;

    &:after {
        background: linear-gradient(to right, $color-d 25%, $color-i 25%, $color-i 50%, $color-s 50%, $color-s 75%, $color-c 75%);
        position: absolute;
        content: '';
        height: 6px;
        right: 0;
        left: 0;
        bottom: 0;
        z-index: 2;
    }

    .logo {
        width: 100%;
    }

    .about-text {
        margin-top: 20px;
        font-size: 10pt;
    }

    .footer-links {
        list-style: none;
        padding-left: 0;
        margin-top: 0;

        .link {
            margin-bottom: 8px;
            font-family: $font-alt;

            a {
                color: #fff;
                text-decoration: none;
            }
        }
    }

    .contact-title {
        font-weight: 600;
        font-size: 14pt;
        margin: 0 0 5px;
    }

    .contact-info,
    .contact-privacy {
        margin: 0;

        a {
            color: #fff;
            text-decoration: none;
        }
    }

    .contact-info {
        .contact-touch-point {
            height: 27px;
            margin: 8px 0;
            display: block;
        }
    }

    .contact-social {
        padding-top: 10px;
        color: #fff;

        svg {
            margin-right: 10px;
            margin-top: 12px;
        }
    }

    .contact-legal {
        font-size: 9pt;
        margin-bottom: 5px;
    }
}

@media screen and (max-width: $breakpoint-med) {
    .footer {
        .logo {
            width: 225px;
        }
    }
}
</style>
