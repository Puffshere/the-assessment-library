<template>
    <section class="assessments-header">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <h1 class="section-title">Assessment Solutions</h1>
                    <p class="section-subtitle">
                        Assessments 24x7 specializes in a wide range of solutions to fit all your personality assessment needs. With comprehensive personal and professional tools, you can feel 
                        confident that we have just the right resource to support your goals and strategic plans. While our specialty is behavioral, motivational, critical thinking, emotional 
                        intelligence, and learning styles tools, we also have assessments specifically designed for use in sales, service, coaching, leadership, and a variety of industries, 
                        roles, and environments.
                    </p>
                </div>
            </div>

            <div class="row">
                <div class="col-8">
                    <div class="feature-callout">
                        <svg class="icon" xmlns="http://www.w3.org/2000/svg" width="70" height="70" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="1" stroke-linecap="round" stroke-linejoin="round">
                            <circle cx="12" cy="8" r="7"></circle>
                            <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline>
                        </svg>

                        <h3>Business and Personal Solutions</h3>
                        <p>
                        Many of the world's top coaches, growth-minded individuals, and forward-thinking organizations rely on our assessments to ensure positive outcomes 
                        in personal and professional life, including employee selection, leadership development, sales & customer service training, team-building, 
                        communication & collaboration training, conflict resolution, and succession planning. 
                        </p>
                    </div>

                    <div class="feature-callout">
                        <svg class="icon" xmlns="http://www.w3.org/2000/svg" width="70" height="70" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="1" stroke-linecap="round" stroke-linejoin="round">
                            <line x1="12" y1="20" x2="12" y2="10"></line>
                            <line x1="18" y1="20" x2="18" y2="4"></line>
                            <line x1="6" y1="20" x2="6" y2="16"></line>
                        </svg>

                        <h3>Why Assessments?</h3>
                        <p>
                            Assessments work by introducing scientific measurements to someone's critical thinking and processing abilities, motivation, skill proficiencies, learning styles, 
                            behavioral characteristics, emotional intelligence, and personal values. Our assessments are constructed to evaluate and reveal someone's holistic 
                            makeup to help build self-awareness and intentionality in all areas of life, personal and professional. 
                        </p>
                    </div>

                    <div class="feature-callout">
                        <svg class="icon" xmlns="http://www.w3.org/2000/svg" width="70" height="70" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="1" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                            <circle cx="8.5" cy="7" r="4"></circle>
                            <polyline points="17 11 19 13 23 9"></polyline>
                        </svg>

                        <h3>What are the Core Assessments?</h3>
                        <p>
                            Each of the five Core Assessments offers a unique assessment instrument, with  its own set of reports, validity studies, coaching materials, workshop materials, certification 
                            training, and more. Whether you want to develop more self-aware leaders, assemble top-performing teams, improve sales and service results, enhance training initiatives, 
                            or select top-performing employees, the Core Assessments provide the foundation for dependable human performance answers.
                        </p>
                    </div>
                </div>

                <div class="col-4">
                    <div class="feature-box">
                        <div class="feature-text">
                            <h3>Other Assessment Solutions</h3>
                            <p>
                           Our catalog includes many unique and highly specialized assessments:
                            </p>
                            <ul>
                                <li>Combination Reports</li>
                                <li>Specialty Reports</li>
                                <li>360° Profile Reports</li>
                                <li>Hiring & Selection Reports</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>    
</template>

<style lang="scss" scoped>
    @import '~assets/scss/vars';

    .assessments-header {
        background: url('~assets/assessment-bg.jpg');
        background-size: cover;
        padding: 50px 0;
        color: #fff;

        .section-title {
            font-size: 30pt;
            text-align: center;
            margin-bottom: 0;
        }

        .section-subtitle {
            text-align: center;
            margin-top: 0;
            margin-bottom: 40px;
        }

        .feature-callout {
            margin-bottom: 30px;

            .icon {
                position: absolute;
            }

            h3 {
                font-size: 20pt;
                margin-top: 0;
                margin-bottom: 5px;
                margin-left: 90px;
            }

            p {
                margin-top: 0;
                margin-bottom: 0;
                margin-left: 90px;
            }
        }

        .feature-box {
            background: url('https://images.unsplash.com/photo-1549925245-f20a1bac6454?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=80');
            background-size: cover;
            background-position: center;
            border-radius: 10px;
            padding: 200px 0 0;
            box-shadow: 0 30px 30px rgba(0,0,0,.1);

            .feature-text {
                position: relative;
                padding: 0 20px 30px;
                background: #fff;
                color: #000;
                border-radius: 0 0 10px 10px;

                h3 {
                    position: relative;
                    z-index: 1;
                    font-size: 20pt;
                    margin-top: 0;
                    margin-bottom: 8px;
                }

                p {
                    margin-top: 0;
                    margin-bottom: 25px;
                }

                &:before {
                    content: '';
                    background: url('~assets/tri-sep.png');
                    background-repeat: no-repeat;
                    position: absolute;
                    width: 100%;
                    height: 81px;
                    left: 0;
                    top: -50px;
                    z-index: 0;
                }
            }
        }

        @media screen and (max-width: $breakpoint-med) {
            .feature-callout {
                .icon {
                    position: relative;
                    margin: 0 auto;
                    display: block;
                }

                h3, p {
                    margin-left: 0;
                }
                
            }
        }
    }
</style>
