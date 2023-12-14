<template>
    <section class="stats lazyload">
        <div class="container">
            <div class="row">
                <div class="col-8">
                    <p class="stat-title">Assessments 24x7 powers millions of assessments globally.</p>
                    <p class="stat-description">
                        Leading organizations and coaches utilize our assessment technology
                        to guide their strategy for hiring & selection, performance evaluations, 
                        skills training, team-building, conflict management, promotion & succession planning, 
                        organizational restructuring, employee retention, and leadership development. 
                        For decades, we have partnered with companies both big and small, coaches, consultants,
                        and trainers to give them the tools to succeed. 
                    </p>
                    <nuxt-link to="/assessments" class="hyperlink light">Online Assessment Solutions &rarr;</nuxt-link>
                </div>

                <div class="col-4">
                    <p class="stat-number">23,541,474</p>
                    <p class="stat-label">Assessments completed through our technology platform</p>
                </div>
            </div>

            <div class="row">
                <div class="col-12">
                    <div class="review-container">
                        <div class="col-4">
                            <div class="review">
                                <div class="review-avatar tamarra-causley-robinson lazyload"></div>
                                <div class="social-icon">
                                    <img class="lazyload" data-src="~/assets/social-icons/alignable.png" alt="Alignable">
                                </div>
                                <div class="review-stars">
                                    <span class="star">★</span>
                                    <span class="star">★</span>
                                    <span class="star">★</span>
                                    <span class="star">★</span>
                                    <span class="star">★</span>
                                </div>
                                <p class="review-name"><strong>Tamarra Causley Robinson</strong> - Life Coach</p>
                                <p class="review-body">I am currently in the certification process for HVP and EIQ Assessments and have found the process for certification to be smooth and the support of my understanding of the materials to be outstanding.</p>
                            </div>
                        </div>

                        <div class="col-4">
                            <div class="review">
                                <div class="review-avatar kyle-gillette lazyload"></div>
                                <div class="social-icon">
                                    <img class="lazyload" data-src="~/assets/social-icons/alignable.png" alt="Alignable">
                                </div>
                                <div class="review-stars">
                                    <span class="star">★</span>
                                    <span class="star">★</span>
                                    <span class="star">★</span>
                                    <span class="star">★</span>
                                    <span class="star">★</span>
                                </div>
                                <p class="review-name"><strong>Kyle Gillette</strong> - Gillette Solutions</p>
                                <p class="review-body">I wouldn’t be in business if it weren’t for Assessments 24x7 and Dr. Tony Alessandra! You guys are awesome.</p>
                            </div>
                        </div>

                        <div class="col-4">
                            <div class="review">
                                <div class="review-avatar paul-scaffidi lazyload"></div>
                                <div class="social-icon">
                                    <img class="lazyload" data-src="~/assets/social-icons/alignable.png" alt="Alignable">
                                </div>
                                <div class="review-stars">
                                    <span class="star">★</span>
                                    <span class="star">★</span>
                                    <span class="star">★</span>
                                    <span class="star">★</span>
                                    <span class="star">★</span>
                                </div>
                                <p class="review-name"><strong>Paul Scaffidi</strong> - Performance Systems</p>
                                <p class="review-body">Assessments 24x7 has been a leader in the assessment business by providing amazing assessments and outstanding support to their clients with class, consistency and quality.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
    @import '~assets/scss/vars';

    .stats {
        background-size: cover !important;
        background-position: bottom !important;
        width: 100%;
        padding: 50px 0 80px;
        color: #fff;
        margin: 100px 0 140px;

        &.lazyloaded {
            background: url('https://images.unsplash.com/photo-1506656864462-fcc324490523?ixlib=rb-1.2.1&auto=format&fit=crop&w=3149&q=80');
        }

        .stat-title {
            font-size: 30pt;
            line-height: 34pt;
            font-weight: 600;
            margin-bottom: 0;
        }

        .stat-number {
            font-size: 50pt;
            font-weight: 600;
            text-align: center;
            margin-bottom: 0;
        }

        .stat-description {
            margin-bottom: 20px;
        }

        .stat-label {
            letter-spacing: 2px;
            text-transform: uppercase;
            text-align: center;
            font-weight: 600;
            margin-top: 0;
            font-size: 9pt;
        }

        #globe {
            width: 100%;
            height: 420px;
            
        }

        canvas {
            width: 100% !important;
            margin-top: -55px;
        }

        .review-container {
            margin-top: 20px;

            .review {
                box-shadow: 0 0 10px rgba(0,0,0,0.1);
                border-radius: 10px;
                padding: 5px 10px;
                background: #1f232d;
                position: relative;
                min-height: 210px;
                max-height: 210px;
                margin-bottom: 26px;

                .review-avatar {
                    width: 62px;
                    height: 62px;
                    background-size: cover !important;
                    border-radius: 50%;
                    position: absolute;
                    margin-left: -18px;
                    margin-top: -11px;
                    box-shadow: 0 0 10px rgba(0,0,0,0.1);
                    border: 2px solid #363e51;
                }

                .lazyloaded {
                    &.tamarra-causley-robinson { background: url('~assets/review-avatars/tamarra-causley-robinson.jpg'); }
                    &.kyle-gillette { background: url('~assets/review-avatars/kyle-gillette.jpeg'); }
                    &.paul-scaffidi { background: url('~assets/review-avatars/paul-scaffidi.jpg'); }
                }

                .social-icon img {
                    width: 24px;
                    position: absolute;
                    right: 15px;
                    top: 15px;
                }

                .review-stars {
                    margin-left: 56px;
                    margin-top: 8px;

                    .star {
                        color: #ffffff;
                        font-size: 14pt;
                        background: $color-i;
                        padding: 0 5px;
                    }
                }

                .review-name {
                    margin: 22px 0 0;
                    font-size: 11pt;
                }

                .review-body {
                    font-size: 10pt;
                    margin-top: 6px;
                }
            }
        }
    }

    @media screen and (max-width: $breakpoint-small) {
        .stats {
            padding: 20px 0 40px;
            margin: 50px 0 20px;

            #globe {
                display: none;
            }

            .button {
                display: block;
                margin: 20px 0 0;
            }

            .stat-title {
                font-size: 17pt;
                line-height: 21pt;
            }

            .stat-number {
                margin-top: 10px;
            }
        }
    }
</style>
