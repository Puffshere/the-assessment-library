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
                    <nuxt-link to="/assessments" class="button">Online Assessment Solutions</nuxt-link>
                </div>

                <div class="col-4">
                    <p class="stat-number">7,039,810</p>
                    <p class="stat-label">Assessments completed through our technology platform.<br/><br/>
                    Real lives improved at work.<br/> Real companies changed.</p>
                    
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
            font-family: $font-alt;
            letter-spacing: 8px;
            font-size: 50pt;
            text-align: center;
            margin-bottom: 0;
        }

        .stat-description {
            margin-bottom: 20px;
        }

        .stat-label {
            font-family: $font-alt;
            letter-spacing: 1px;
            text-transform: uppercase;
            text-align: center;
            margin-top: 0;
        }

        #globe {
            width: 100%;
            height: 420px;
            
        }

        canvas {
            width: 100% !important;
            margin-top: -55px;
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
