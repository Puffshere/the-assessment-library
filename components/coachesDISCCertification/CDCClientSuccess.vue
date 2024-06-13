<template>
    <section>
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <h1 class="title">Real Clients. Real Success.</h1>
                </div>
                <div class="col-4">
                    <img src="~/assets/coaches-disc-certification/emily-bass.png" alt="emily bass picture" class="">
                    <p style="padding-bottom: 5px">
                        Emily Bass <br />
                        Emily Bass Strategies, LLC
                    </p>
                    <p style="color: #0033c5; font-weight: 800;">
                        “Partnering with Assessments 24x7 is ​what got my business off the ground. I ​credit Assessments
                        24x7 staff, products, ​and customer service, with my ​success.”
                    </p>
                    <button class="blue" @click="testimonialLink">
                        Read More
                    </button>
                </div>
                <div class="col-4">
                    <img src="~/assets/coaches-disc-certification/jaymini-mistry.png" alt="emily bass picture" class="">
                    <p style="padding-bottom: 5px">
                        Jaymini Mistry <br />
                        Business Coaching Melbourne
                    </p>
                    <p style="color: #0033c5; font-weight: 800;">
                        “From a coaching point of view this ​was a major breakthrough in his self-​awareness. It's given
                        me added ​credibility.”
                    </p>
                    <button class="blue" @click="testimonialLink">
                        Read More
                    </button>
                </div>
                <div class="col-4">
                    <img src="~/assets/coaches-disc-certification/donna-bell.png" alt="emily bass picture" class="">
                    <p style="padding-bottom: 5px">
                        Donna Bell <br />
                        Vitality Leadership
                    </p>
                    <p style="color: #0033c5; font-weight: 800;">
                        “The "icing on the cake" is that I can ​fully personalize the reports with my ​business name and
                        logo. Thank you ​Assessments 24x7 for a great tool!”
                    </p>
                    <button class="blue" @click="testimonialLink">
                        Read More
                    </button>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    methods: {
        testimonialLink(event) {
            window.location.href = 'https://www.assessments24x7.com/about/testimonials';
            event.target.blur();
        }
    }
}
</script>

<style lang="scss" scoped>
@import './CDC.scss';

.container {
    padding-top: 50px;
    padding-bottom: 200px;
    display: flex;
}

p {
    line-height: 20px;
}

.blue {
    position: absolute;
    bottom: -60px;
}

h1 {
    color: #0033c5;
}

.title {
    text-align: center;
    margin: 0 0;
    margin-bottom: 80px;
}

img {
    width: 100%;
    border-radius: 20px;
}
</style>