<template>
    <section class="assessments-header">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <h2 class="section-title">Building High Performance Teams</h2>
                    <p class="section-subtitle">
                        Team Assessments utilize scientific measurements to assess employees’ 
                        motivations, work styles, and behavioral characteristics and personal values. 
                        The Team DISC Report showcases how employees interact with each other and 
                        helps them develop a better working relationship.  In one report, managers 
                        and employees can glance at entire teams’ DISC results.
                    </p>
                </div>
            </div>

            <div class="row">
                <div class="col-8">
                    <div class="feature-callout">
                        <svg class="icon" xmlns="http://www.w3.org/2000/svg" width="70" height="70" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="1" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"></path>
                        </svg>

                        <h3>Lorem Ipsum</h3>
                        <p>
                            Etiam luctus blandit vulputate. Quisque id vestibulum felis. In 
                            hac habitasse platea dictumst. Integer orci enim, volutpat a 
                            eleifend nec, fringilla eu neque. Suspendisse mollis erat id est 
                            tristique, sit amet consequat ante viverra.
                        </p>
                    </div>

                    <div class="feature-callout">
                        <svg class="icon" xmlns="http://www.w3.org/2000/svg" width="70" height="70" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="1" stroke-linecap="round" stroke-linejoin="round">
                            <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
                            <polyline points="2 17 12 22 22 17"></polyline>
                            <polyline points="2 12 12 17 22 12"></polyline>
                        </svg>

                        <h3>Lorem Ipsum</h3>
                        <p>
                            Etiam luctus blandit vulputate. Quisque id vestibulum felis. In 
                            hac habitasse platea dictumst. Integer orci enim, volutpat a 
                            eleifend nec, fringilla eu neque. Suspendisse mollis erat id est 
                            tristique, sit amet consequat ante viverra.
                        </p>
                    </div>

                    <div class="feature-callout">
                        <svg class="icon" xmlns="http://www.w3.org/2000/svg" width="70" height="70" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="1" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                        </svg>

                        <h3>Lorem Ipsum</h3>
                        <p>
                            Etiam luctus blandit vulputate. Quisque id vestibulum felis. In 
                            hac habitasse platea dictumst. Integer orci enim, volutpat a 
                            eleifend nec, fringilla eu neque. Suspendisse mollis erat id est 
                            tristique, sit amet consequat ante viverra.
                        </p>
                    </div>
                </div>

                <div class="col-4">
                    <div class="feature-box">
                        <div class="feature-text">
                            <h3>Lorem ipsum dolor.</h3>
                            <p>
                                Etiam luctus blandit vulputate. Quisque 
                                id vestibulum felis. In hac habitasse 
                                platea dictumst. Integer orci enim, 
                                volutpat a eleifend nec, fringilla eu neque.
                            </p>

                            <button class="button">Download Info Sheet</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>    
</template>

<style lang="scss" scoped>
    .assessments-header {
        background: url('~assets/assessment-bg.jpg');
        background-size: cover;
        padding: 70px 0;
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
    }
</style>
