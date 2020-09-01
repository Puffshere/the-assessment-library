<template>
    <header v-if="!hidden">
        <div class="info-bar">
            <p>
                <strong>Upcoming Event:</strong> Join us for an overview of our exciting new product, HireSense! <a class="hyperlink light" href="https://us02web.zoom.us/webinar/register/WN_x3JOpnjiR6Cm-mniReUUmw" target="_blank" rel="noopener">Free Webinar Registration &rarr;</a>
            </p>
        </div>

        <nav class="container">
            <div class="row">
                <div class="col-3">
                    <logo></logo>
                </div>

                <div class="col-9 nav-collapse-container">
                    <div class="nav-collapse">
                        <ul class="nav-bar">
                            <li class="nav-item" @mouseover="hover.assessments = true" @mouseleave="hover.assessments = false">
                                <a href="/assessments" :class="{ active: active == 'assessments' }">Assessments</a>

                                <ul :class="{ active: hover.assessments, 'sub-nav-category': true }">
                                    <span class="title">Core Assessments</span>

                                    <li class="sub-nav-item">
                                        <a href="/assessments/disc">DISC</a>
                                    </li>

                                    <li class="sub-nav-item">
                                        <a href="/assessments/motivators">Motivators</a>
                                    </li>

                                    <li class="sub-nav-item">
                                        <a href="/assessments/emotional-intelligence">Emotional Intelligence</a>
                                    </li>

                                    <li class="sub-nav-item">
                                        <a href="/assessments/critical-thinking-hvp">Critical Thinking (HVP)</a>
                                    </li>

                                    <li class="sub-nav-item">
                                        <a href="/assessments/learning-styles">Learning Styles</a>
                                    </li>

                                    <li class="sub-nav-item">
                                        <a href="/sample-reports">Sample Reports</a>
                                    </li>

                                    <span class="title">360&deg; Assessments</span>

                                    <li class="sub-nav-item">
                                        <a href="/assessments/360/disc">DISC 360&deg;</a>
                                    </li>

                                    <li class="sub-nav-item">
                                        <a href="/assessments/360/eiq">EIQ-2 360&deg;</a>
                                    </li>

                                    <li class="sub-nav-item">
                                        <a href="/assessments/360/leadership-effectiveness">Leadership Effectiveness</a>
                                    </li>

                                    <span class="title">Additional Assessments</span>

                                    <li class="sub-nav-item">
                                        <a href="/assessments/sales-iq">Sales IQ Plus</a>
                                    </li>
                                </ul>
                            </li>

                            <!--<li class="nav-item" @mouseover="hover.selection = true" @mouseleave="hover.selection = false">
                                <a href="/" :class="{ active: active == 'hiring' }">Hiring & Selection</a>

                                <ul :class="{ active: hover.selection, 'sub-nav-category': true }">
                                    <span class="title">Insights Products</span>
                                    
                                    <li class="sub-nav-item">
                                        <a href="/assessments/insights-gps">Insights GPS</a>
                                    </li>

                                    <li class="sub-nav-item">
                                        <a href="/assessments/insights-gps">Insights Selection & Screening</a>
                                    </li>
                                </ul>
                            </li>-->

                            <li class="nav-item">
                                <a href="/hiring-and-selection" :class="{ active: active == 'hiring' }">Hiring &amp; Selection</a>
                            </li>
                            
                            <li class="nav-item" @mouseover="hover.training = true" @mouseleave="hover.training = false">
                                <a href="/certifications" :class="{ active: active == 'training' }">Certifications</a>

                                <ul :class="{ active: hover.training, 'sub-nav-category': true }">
                                    <span class="title">Training Topics</span>

                                    <li class="sub-nav-item">
                                        <a href="/certifications/assessment">Assessment Certifications</a>
                                    </li>

                                    <li class="sub-nav-item">
                                        <a href="/certifications/workshop-certification">Workshop Certification</a>
                                    </li>

                                    <li class="sub-nav-item">
                                        <a href="/certifications/directory/coaches">Coach Directory</a>
                                    </li>

                                    <li class="sub-nav-item">
                                        <a href="/certifications/directory/workshop-leaders">Workshop Leaders</a>
                                    </li>

                                    <li class="sub-nav-item">
                                        <a href="/certifications/disc-virtual-training">DISC Virtual Training</a>
                                    </li>

                                    <!--<li class="sub-nav-item">
                                        <a href="/certifications/continuing-education">Continuing Education</a>
                                    </li>-->
                                </ul>
                            </li>

                            <li class="nav-item" @mouseover="hover.about = true" @mouseleave="hover.about = false">
                                <a href="/about" :class="{ active: active == 'about' }">About</a>

                                <ul :class="{ active: hover.about, 'sub-nav-category': true }">
                                    <span class="title">About Us</span>

                                    <li class="sub-nav-item">
                                        <a href="/about/difference">Our Difference</a>
                                    </li>

                                    <li class="sub-nav-item">
                                        <a href="/about/testimonials">Testimonials</a>
                                    </li>

                                    <li class="sub-nav-item">
                                        <a href="https://app.assessments24x7.com">
                                            Mobile App
                                            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" height="14px" width="14px" fill="#ffffff" viewBox="0 0 100 100" version="1.1" x="0px" y="0px">
                                                <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" sketch:type="MSPage">
                                                    <g sketch:type="MSLayerGroup" transform="translate(2.000000, 2.000000)" fill="#ffffff">
                                                        <path d="M73.7883228,16 L44.56401,45.2243128 C42.8484762,46.9398466 42.8459918,49.728257 44.5642987,51.4465639 C46.2791092,53.1613744 49.0684023,53.1650001 50.7865498,51.4468526 L80,22.2334024 L80,32.0031611 C80,34.2058797 81.790861,36 84,36 C86.2046438,36 88,34.2105543 88,32.0031611 L88,11.9968389 C88,10.8960049 87.5527117,9.89722307 86.8294627,9.17343595 C86.1051125,8.44841019 85.1063303,8 84.0031611,8 L63.9968389,8 C61.7941203,8 60,9.790861 60,12 C60,14.2046438 61.7894457,16 63.9968389,16 L73.7883228,16 L73.7883228,16 Z M88,56 L88,36.9851507 L88,78.0296986 C88,83.536144 84.0327876,88 79.1329365,88 L16.8670635,88 C11.9699196,88 8,83.5274312 8,78.0296986 L8,17.9703014 C8,12.463856 11.9672124,8 16.8670635,8 L59.5664682,8 L40,8 C42.209139,8 44,9.790861 44,12 C44,14.209139 42.209139,16 40,16 L18.2777939,16 C17.0052872,16 16,17.1947367 16,18.668519 L16,77.331481 C16,78.7786636 17.0198031,80 18.2777939,80 L77.7222061,80 C78.9947128,80 80,78.8052633 80,77.331481 L80,56 C80,53.790861 81.790861,52 84,52 C86.209139,52 88,53.790861 88,56 L88,56 Z" sketch:type="MSShapeGroup"/>
                                                    </g>
                                                </g>
                                            </svg>
                                        </a>
                                    </li>

                                    <li class="sub-nav-item">
                                        <a href="/about/partners">Partners</a>
                                    </li>

                                    <span class="title">Resources</span>

                                    <li class="sub-nav-item">
                                        <a href="/about/why-use-assessments">Why Use Assessments?</a>
                                    </li>

                                    <li class="sub-nav-item">
                                        <a href="/about/what-is-disc">What is DISC?</a>
                                    </li>

                                    <li class="sub-nav-item">
                                        <a href="/about/validity">Validity Studies</a>
                                    </li>

                                    <li class="sub-nav-item">
                                        <a href="/store/disc-profiler-deck">Profiler Card Deck</a>
                                    </li>

                                    <li class="sub-nav-item">
                                        <a href="/about/faq">FAQs</a>
                                    </li>
                                </ul>
                            </li>

                            <li class="nav-item">
                                <a href="/blog" :class="{ active: active == 'blog' }">Blog</a>
                            </li>
                            
                            <li class="nav-item">
                                <a href="/contact" :class="{ active: active == 'contact' }">Contact</a>
                            </li>
                        </ul>
                    </div>

                    <div class="hamburger">
                        <input type="checkbox" @click="toggleMobileMenu()" aria-label="Open mobile navigation menu" />
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
            </div>
        </nav>

        <div :class="{ 'mobile-menu': true, 'show': showMobileMenu }">
            <ul class="nav-bar">
                <li class="nav-item">
                    <a href="/assessments">Assessments</a>
                </li>

                <li class="nav-item indent">
                    <a href="/assessments/disc">DISC</a>
                </li>

                <li class="nav-item indent">
                    <a href="/assessments/motivators">Motivators</a>
                </li>

                <li class="nav-item indent">
                    <a href="/assessments/emotional-intelligence">Emotional Intelligence</a>
                </li>

                <li class="nav-item indent">
                    <a href="/assessments/critical-thinking-hvp">Critical Thinking (HVP)</a>
                </li>

                <li class="nav-item indent">
                    <a href="/assessments/learning-styles">Learning Styles</a>
                </li>

                <li class="nav-item indent">
                    <a href="/sample-reports">Sample Reports</a>
                </li>

                <li class="nav-item indent">
                    <a href="/assessments/360/disc">DISC 360</a>
                </li>

                <li class="nav-item indent">
                    <a href="/assessments/360/eiq">EIQ-2 360</a>
                </li>

                <li class="nav-item indent">
                    <a href="/assessments/360/leadership-effectiveness">Leadership Effectiveness</a>
                </li>

                <li class="nav-item indent">
                    <a href="/assessments/sales-iq">Sales IQ Plus</a>
                </li>
                
                <li class="nav-item">
                    <a href="/hiring-and-selection">Hiring & Selection</a>
                </li>

                <li class="nav-item">
                    <a href="/certifications">Certifications</a>
                </li>

                <li class="nav-item indent">
                    <a href="/certifications/assessment">Assessment Certifications</a>
                </li>

                <li class="nav-item indent">
                    <a href="/certifications/workshop-certification">Workshop Certification</a>
                </li>

                <li class="nav-item indent">
                    <a href="/certifications/directory/coaches">Coach Directory</a>
                </li>

                <li class="nav-item indent">
                    <a href="/certifications/directory/workshop-leaders">Workshop Leaders</a>
                </li>

                <li class="nav-item indent">
                    <a href="/certifications/disc-virtual-training">DISC Virtual Training</a>
                </li>

                <!--<li class="nav-item indent">
                    <a href="/certifications/continuing-education">Continuing Education</a>
                </li>-->
                
                <li class="nav-item">
                    <a href="/about">About</a>
                </li>

                <li class="nav-item indent">
                    <a href="/about/difference">Our Difference</a>
                </li>

                <li class="nav-item indent">
                    <a href="/about/testimonials">Testimonials</a>
                </li>

                <li class="nav-item indent">
                    <a href="https://app.assessments24x7.com">
                        Mobile App
                        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" height="14px" width="14px" fill="#ffffff" viewBox="0 0 100 100" version="1.1" x="0px" y="0px">
                            <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" sketch:type="MSPage">
                                <g sketch:type="MSLayerGroup" transform="translate(2.000000, 2.000000)" fill="#ffffff">
                                    <path d="M73.7883228,16 L44.56401,45.2243128 C42.8484762,46.9398466 42.8459918,49.728257 44.5642987,51.4465639 C46.2791092,53.1613744 49.0684023,53.1650001 50.7865498,51.4468526 L80,22.2334024 L80,32.0031611 C80,34.2058797 81.790861,36 84,36 C86.2046438,36 88,34.2105543 88,32.0031611 L88,11.9968389 C88,10.8960049 87.5527117,9.89722307 86.8294627,9.17343595 C86.1051125,8.44841019 85.1063303,8 84.0031611,8 L63.9968389,8 C61.7941203,8 60,9.790861 60,12 C60,14.2046438 61.7894457,16 63.9968389,16 L73.7883228,16 L73.7883228,16 Z M88,56 L88,36.9851507 L88,78.0296986 C88,83.536144 84.0327876,88 79.1329365,88 L16.8670635,88 C11.9699196,88 8,83.5274312 8,78.0296986 L8,17.9703014 C8,12.463856 11.9672124,8 16.8670635,8 L59.5664682,8 L40,8 C42.209139,8 44,9.790861 44,12 C44,14.209139 42.209139,16 40,16 L18.2777939,16 C17.0052872,16 16,17.1947367 16,18.668519 L16,77.331481 C16,78.7786636 17.0198031,80 18.2777939,80 L77.7222061,80 C78.9947128,80 80,78.8052633 80,77.331481 L80,56 C80,53.790861 81.790861,52 84,52 C86.209139,52 88,53.790861 88,56 L88,56 Z" sketch:type="MSShapeGroup"/>
                                </g>
                            </g>
                        </svg>
                    </a>
                </li>

                <li class="nav-item indent">
                    <a href="/about/partners">Partners</a>
                </li>

                <li class="nav-item indent">
                    <a href="/about/why-use-assessments">Why Use Assessments</a>
                </li>

                <li class="nav-item indent">
                    <a href="/about/what-is-disc">What is DISC?</a>
                </li>

                <li class="nav-item indent">
                    <a href="/about/validity">Validity Studies</a>
                </li>

                <li class="nav-item indent">
                    <a href="/store/disc-profiler-deck">Profiler Card Deck</a>
                </li>

                <li class="nav-item indent">
                    <a href="/about/faq">FAQs</a>
                </li>
                
                <li class="nav-item">
                    <a href="/blog">Blog</a>
                </li>
                
                <li class="nav-item">
                    <a href="/contact">Contact</a>
                </li>
            </ul>
        </div>
    </header>
</template>

<script>
    import Logo from './Logo';

    export default {
        props: ['active'],
        components: {
            'logo': Logo
        },
        data() {
            return {
                showMobileMenu: false,
                hover: {
                    assessments: false,
                    training: false,
                    selection: false,
                    about: false
                },
                hidden: false
            }
        },
        created() {
            if (this.$route.query.noframe) {
                this.hidden = true;
            }
        },
        methods: {
            toggleMobileMenu() {
                if (this.showMobileMenu) {
                    this.showMobileMenu = false;
                } else {
                    this.showMobileMenu = true;
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import '~assets/scss/vars';

    header {
        top: 0;
        left: 0;
        width: 100%;
        z-index: 1;
        background-color: #1e222d;
        box-shadow: 0 4px 6px 0 rgba(12,0,46,.06);
        transition: all .3s ease-in-out;

        .info-bar {
            background-color: #363d52;
            text-align: center;
            padding: 10px;
            color: #fff;

            .hyperlink {
                box-shadow: inset 0 -3px 0 0 rgba(255, 255, 255, .3);
            }
            
            p {
                margin: 0;
            }
        }

        .nav-item a {
            color: #fff !important;
            
            &.active {
                color: $secondary !important;
                border-bottom: 2px solid $secondary !important;
            }
        }

        nav {
            .nav-collapse {
                .nav-bar {
                    float: right;
                    margin: -12px 0;
                    z-index: 999999;
                    position: relative;

                    .nav-item {
                        display: inline-block;
                        font-family: $font-family;
                        font-weight: 600;
                        line-height: 83px;

                        &:not(:first-child) {
                            margin-left: 20px;
                        }

                        a {
                            font-size: 15px;
                            color: #666;
                            text-decoration: none;
                            transition: color .2s ease-out;

                            &:hover {
                                color: #000;
                            }

                            &.active {
                                color: $primary;
                                border-bottom: 2px solid $primary;
                                padding-bottom: 7px;
                            }
                        }

                        .sub-nav-category {
                            display: none;
                            position: absolute;
                            padding-left: 0;
                            list-style: none;
                            margin-left: 0;
                            background: #161921;
                            margin-top: -5px;
                            box-shadow: 0 4px 6px 0 rgba(12,0,46,.06);
                            line-height: 20px;

                            &.active {
                                display: block;
                            }

                            .title {
                                font-weight: 600;
                                font-size: 8pt;
                                letter-spacing: 2px;
                                text-transform: uppercase;
                                color: #00bbff;
                                display: block;
                                background: #0d0f15;
                                padding: 5px 10px;
                                border-bottom: 1px solid #252a3a;
                                border-top: 1px solid #000;
                            }

                            .sub-nav-item {
                                margin: 11px 13px;

                                a {
                                    display: block;
                                }
                            }
                        }
                    }
                }
            }

            .hamburger {
                display: none;
                position: absolute;
                top: 15px;
                right: 22px;
                z-index: 1;

                input {
                    display: block;
                    width: 40px;
                    height: 40px;
                    position: absolute;
                    top: -15px;
                    right: -11px;
                    opacity: 0;
                    cursor: pointer;
                    z-index: 2;
                    -webkit-touch-callout: none;

                    &:checked ~ span {
                        opacity: 1;
                        transform: rotate(-45deg) translate(0, -1px);

                        &:nth-last-child(2) {
                            opacity: 0;
                            transform: rotate(0deg) scale(0.2, 0.2);
                        }

                        &:nth-last-child(3) {
                            transform: rotate(45deg) translate(2px, 1px);
                        }
                    }
                }
                 
                span {
                    display: block;
                    width: 24px;
                    height: 2px;
                    margin-bottom: 5px;
                    background: #fff;
                    border-radius: 2px;
                    transform-origin: 4px 0px;
                    transition: transform 0.3s cubic-bezier(0.77,0.2,0.05,1.0),
                                opacity 0.3s ease;

                    &:first-child {
                        transform-origin: 0% 0%;
                    }

                    &:nth-last-child(2) {
                        transform-origin: 0% 100%;
                    }
                }
            }
        }

        .mobile-menu {
            display: none;
            opacity: 0;
            width: 100%;
            background: linear-gradient(0deg, rgba(30,34,45,1) 0%, rgba(48,53,66,1) 100%);
            margin-top: -16px;
            overflow-y: scroll;
            transition: height 0.3s cubic-bezier(0.77,0.2,0.05,1.0);

            &.show {
                display: block;
                opacity: 1;
            }

            .nav-bar {
                list-style: none;
                padding-left: 0;

                .nav-item {
                    padding: 10px 20px;
                    font-size: 16pt;
                    background: rgba(0,0,0,0.1);
                    margin-bottom: 2px;

                    svg {
                        stroke: #5d616b;
                        vertical-align: middle;
                        margin-right: 6px;
                    }

                    a {
                        text-decoration: none;
                        width: 100%;
                        display: block;

                        &:hover {
                            color: #00a8ff !important;
                        }
                    }

                    &.indent {
                        padding-left: 40px;
                        font-size: 13pt;
                    }
                }
            }
        }
    }

    @media screen and (max-width: $breakpoint-med) {
        header {
            nav {
                .nav-collapse-container {
                    position: absolute;
                }

                .nav-collapse {
                    display: none;
                }

                .hamburger {
                    display: block;
                }
            }
        }
    }
</style>
