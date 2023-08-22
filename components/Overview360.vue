<template>
    <section class="overview-360">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="white">
                        <path d="M12,6C6.3,6,2,8.15,2,11c0,2.45,3.19,4.38,7.71,4.88l-.42.41a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0l2-2a1,1,0,0,0,.21-.33,1,1,0,0,0,0-.76,1,1,0,0,0-.21-.33l-2-2a1,1,0,0,0-1.42,1.42l.12.11C6,13.34,4,12,4,11c0-1.22,3.12-3,8-3s8,1.78,8,3c0,.83-1.45,2-4.21,2.6A1,1,0,0,0,15,14.79a1,1,0,0,0,1.19.77C19.84,14.76,22,13.06,22,11,22,8.15,17.7,6,12,6Z"></path>
                    </svg>

                    <h6 class="title">Available 360&deg; Assessments</h6>
                </div>
            </div>

            <div class="row">
                <div class="col-4">
                    <div class="ass-img disc"></div>
                    <nuxt-link to="/assessments/360/disc" class="ass-name">DISC 360&deg;</nuxt-link>
                    <p class="ass-desc">
                        The DISC 360º allows individuals to enhance the traditional DISC self-assessment by using the same questionnaire with observers providing their perspective of your behavior and emotions. 
                        You can compare and contrast what you think you are doing and what they experience to determine what may support or hinder your effectiveness.
                    </p>
                    <nuxt-link to="/assessments/360/disc" class="hyperlink ass-link">Discover DISC 360&deg; &rarr;</nuxt-link>
                </div>
            
                <div class="col-4">
                    <div class="ass-img eiq"></div>
                    <nuxt-link to="/assessments/360/eiq" class="ass-name">EIQ 360&deg;</nuxt-link>
                    <p class="ass-desc">
                        The EIQ 360º reveals how one’s perceived emotional intelligence in four key areas compares to observer feedback. 
                        It highlights the ways we may think we recognize and manage emotions effectively, but fall short with others. 
                        With this insight, you will be able to examine if and how your EIQ matches what others perceive. 
                    </p>
                    <nuxt-link to="/assessments/360/eiq" class="hyperlink ass-link">Discover EIQ 360&deg; &rarr;</nuxt-link>
                </div>

                <div class="col-4">
                    <div class="ass-img leader"></div>
                    <nuxt-link to="/assessments/360/leadership-effectiveness" class="ass-name">Leadership Effectiveness</nuxt-link>
                    <p class="ass-desc">
                        The Leadership Effectiveness 360° measures current leadership strengths and areas of improvement in eight of the top competencies that distinguish exceptional leaders. 
                        Additionally, these competencies are examined not just through their own eyes, but also through the eyes of their peers, managers, and direct reports. 
                    </p>
                    <nuxt-link to="/assessments/360/leadership-effectiveness" class="hyperlink ass-link">Discover Leadership Effectiveness &rarr;</nuxt-link>
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
    .overview-360 {
        background: linear-gradient(90deg, #1e222d 0%, #303542 100%);
        background-size: cover;
        padding: 30px 0 50px;
        color: #fff;
        margin-top: 60px;

        svg {
            width: 100px;
            height: 100px;
            margin: 0 auto;
            display: block;
        }

        .title {
            font-size: 30pt;
            margin: -18px 0 0;
            text-align: center;
        }

        .ass-name {
            font-size: 14pt;
            font-weight: 600;
            margin-bottom: 7px;
            color: #fff;
            text-decoration: none;
            display: block;
            margin-top: 10px;
        }

        .ass-desc {
            margin-top: 0;
            margin-bottom: 10px;
            font-size: 11pt;
        }

        .ass-link {
            color: #fff;
            margin-bottom: 30px;
        }

        .ass-img {
            background-size: cover !important;
            background-position: center !important;
            border-radius: 20px;
            width: 100%;
            height: 200px;
            margin-top: 20px;

            &.disc { background: url('https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2550&q=80'); }
            &.eiq { background: url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&auto=format&fit=crop&w=2551&q=80'); }
            &.leader { background: url('https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80'); }
            &.comm { background: url('https://images.unsplash.com/photo-1556761175-b413da4baf72?ixlib=rb-1.2.1&auto=format&fit=crop&w=2167&q=80'); }
        }
    }
</style>