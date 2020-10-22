<template>
    <div class="blog-post">
        <LazyHydrate when-visible><main-nav active="blog"></main-nav></LazyHydrate>

        <svg class="svg1" xmlns="http://www.w3.org/2000/svg" version="1.1" height="0">
            <filter id="blur-filter" width="110%" height="100%">
                <feColorMatrix type="saturate" in="SourceGraphic" values="3"/>
                <feGaussianBlur stdDeviation="20" result="blur" />
            </filter>
        </svg>

        <svg 
            class="svg2"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            :style="`
                width: 105%;
                height: 400px;
                margin-left: -30px;
                margin-top: -25px;
                z-index: -1;
                position: relative;
            `"> 
            <image x="0" class="bg-blur" width="100%" height="400px" xlink:href="@/assets/motivators-update-header.jpg"/>
        </svg>

        <img class="blog-header" src="@/assets/motivators-update-header.jpg">

        <div class="container">
            <div class="row">
                <div class="col-12">
                    <h1 class="title">Motivators Update - October 2020</h1>
                    <p class="date">Posted 10/22/2020</p>
                </div>
            </div>

            <div class="row">
                <div class="col-12">
                    <div class="body wp">
                        <br/>
                        <p>
                            At Assessments 24x7 we are always working to ensure that our information is current and relevant. To that end, we recently reviewed 
                            our Motivators population and reports to be sure you are getting the BEST products available! We are excited to announce a few 
                            updates to our Motivators report coming in the next week.<br/><br/>
                            What’s changing?
                        </p><br/>

                        <ol>
                            <li>
                                <strong>New Population-based Norms</strong><br/>
                                The most important update is new population norming! The last time we provided norm numbers, we had just over 30,000 
                                Assessments 24x7 users included in our pool. We now have over 749,000 users to create our data! You’ll notice in the reporting 
                                a shift in our median norm numbers for each dimension and a slight adjustment to our shaded boxes (both the grey box plot and 
                                the colored box). While the scores didn’t shift dramatically, even with a MUCH larger population, there are some changes that 
                                will impact the ways the graphs look.  
                            </li><br/>

                            <li>
                                <strong>Updated Word Matrix Page</strong><br/>
                                The Word Matrix has been modified to include some visual elements to make it more straightforward and user-friendly. You’ll 
                                notice the Dimension names have moved to the middle of the Word Matrix, a “0” and “100” score bubble located at the top and the 
                                bottom of the graphic to show low and high, and the median norm score for each dimension is noted with a shaded line and 
                                numeric score bubble showing where the norm score sits now based on the new population.<br/><br/>

                                As before, you can still see the word descriptor associated with your score highlighted by the white rectangle, but we’ve also 
                                added your graph to the bottom of the page, so you don’t have to look back to compare your scores and ranking!<br/><br/>

                                Be sure to take a moment to check out the Important Details at the bottom of the page to get clarity on these new pieces.<br/><br/>

                                <img style="margin:0 auto;display:block;width:100%;max-width:540px;" src="@/assets/motivators-update-10-20.png"><br/><br/>

                                While this is not a part of the newest update, we’d like to take a moment to remind you of the most recent adjustment to the 
                                Motivators rankings that was announced at the end of July 2020.<br/>

                                <blockquote>
                                    “We have updated the way we score the rankings in the Motivators assessment. Originally, we had the rankings as the 
                                    distance from the norm. After looking at the most common applications in practice for our clients, we believe that the 
                                    ranking is actually more helpful to examine in relation to the 50% score for most people, rather than the norm.<br/><br/>

                                    <strong>Why change it from the norm?</strong>
                                    When we were measuring from the norm, we were using that score as a basis of comparison to other people. This is still a 
                                    good way to look at it but can be accomplished with the shaded box and average score box plot in the graphs. For personal 
                                    awareness and development, we believe it is more accurate to go from what would be the balance point for each individual, 
                                    rather than basing it on comparison with others. That way, it expresses more precisely how each of us is driven as 
                                    individuals.”
                                </blockquote>
                            </li>
                        </ol><br/>

                        <p>
                            As a global leader in the field of assessment technology, we continually seek to improve upon every feature of our assessments. As 
                            always, should you have any questions or need any additional information or clarification, we are here to help. Please let us know 
                            how we can support you in your continued success.
                        </p>
                    </div>
                </div>
            </div>

            <div class="row">
                <div class="col-12">
                    <div id="disqus_thread"></div>
                </div>
            </div>
        </div>

        <LazyHydrate when-visible><footer-fold></footer-fold></LazyHydrate>
    </div>
</template>

<script>
    import LazyHydrate from 'vue-lazy-hydration';

    export default {
        components: {
            LazyHydrate,
            'main-nav': () => import('@/components/Nav'),
            'footer-fold': () => import('@/components/Footer')
        },
        async created() {            
            var disqus_config = function () {
                this.page.url = `https://www.assessments24x7.com${this.$route.path}`;
                this.page.identifier = this.post.slug;
            };
            
            (function() {
                var d = document, s = d.createElement('script');
                s.src = 'https://assessments-24x7.disqus.com/embed.js';
                s.setAttribute('data-timestamp', +new Date());
                (d.head || d.body).appendChild(s);
            })();
        }
    }
</script>

<style lang="scss" scoped>
    @import '~assets/scss/vars';

    .blog-post {
        .bg-blur {
            filter: url('#blur-filter');
            height: auto;
            opacity: .55;
            margin-top:-20px;
        }

        .blog-header {
            margin: -300px auto 0;
            display: block;
            box-shadow: 0 0 20px rgba(0,0,0,.4);
            border-radius: 20px;
            width: 100%;
            max-width: fit-content;
        }

        .date, .title {
            text-align: center;
        }

        .date {
            margin: -20px 0;
            color: #666;
        }

        .body {
            margin-bottom: 60px;
        }

        @media screen and (max-width: $breakpoint-med) {
            .svg1, .svg2 {
                display: none;
            }

            .blog-header {
                border-radius: 0;
            }
        }
    }
</style>