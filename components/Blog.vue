<template>
    <section class="blog">
        <div class="wrapper">
            <div class="row center-xs">
                <div class="col-lg-4 no-gutter left">
                    <div class="about-content">
                        <h2>We are the driving force of the assessments industry.</h2>
                        <p>
                            We provide consultants with a comprehensive solution for their entire assessment business - completely custom branded to each member! Validated assessments, certification training, coaching materials, workshop materials, and marketing collateral are just the start.
                        </p>
                    </div>
                </div>

                <div class="col-lg-7 no-gutter right">
                    <div class="about-img">
                        <div class="about-text">
                            <span class="br"></span>
                            <h3>Learn what our network can do for you.</h3>
                            <p>Join the world’s most powerful online assessment provider.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
    @import '~assets/scss/app';

    .blog {
        margin-top: 0px;

        .about-content {
            padding: 40px 40px;
            color: #fff;
            background-image: -webkit-linear-gradient(40deg,$primary 0%,lighten($primary, 20) 100%);
        }

        .right {
            min-height: 570px;
            margin-top: 100px;
            text-align: left;
        }

        .left {
            margin-right: -100px;
            z-index: 1;
            text-align: left;
        }

        .about-img {
            background: url('https://images.unsplash.com/photo-1547280746-0e984cc4ca31?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1665&q=80');
            background-size: cover;
            height: 100%;
            position: relative;
            
            &:after {
                position: absolute;
                content:"";
                height:100%;
                width:100%;
                top:0;
                left:0;
                background: linear-gradient(to top, rgba(0,0,0,.5) 0%,rgba(0,0,0,0) 100%);
            }
        }

        .about-text {
            position: absolute;
            bottom: 40px;
            padding: 0 80px 0 50px;
            left: 0;
            color: #fff;
            z-index: 1;

            h3 {
                margin-bottom: -10px;
                font-weight: 600;
                font-size: 14pt;
            }

            .br {
                width: 50px;
                height: 5px;
                background: #fff;
                opacity: .50;
                margin-bottom: 25px;
                display: block;
            }
        }
    }
</style>
