<template>
    <section>
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <h1 class="title">Real Clients. Real Success.</h1>
                </div>
                <div class="col-4">
                    <img src="https://cdn.assessments24x7.com/file/assessments24x7-media/Coaches+DISC+Certification/emily-bass.png" alt="emily bass picture">
                    <p class="observe" style="padding-bottom: 5px">
                        Emily Bass <br />
                        Emily Bass Strategies, LLC
                    </p>
                    <p class="observe" style="color: #0033c5; font-weight: 800;">
                        “Partnering with Assessments 24x7 is ​what got my business off the ground. I ​credit Assessments
                        24x7 staff, products, ​and customer service, with my ​success.”
                    </p>
                    <button class="blue observe" @click="testimonialLink">
                        Read More
                    </button>
                </div>
                <div class="col-4">
                    <img src="https://cdn.assessments24x7.com/file/assessments24x7-media/Coaches+DISC+Certification/jaymini-mistry.png" alt="jaymini mistry picture">
                    <p class="observe" style="padding-bottom: 5px">
                        Jaymini Mistry <br />
                        Business Coaching Melbourne
                    </p>
                    <p class="observe" style="color: #0033c5; font-weight: 800;">
                        “From a coaching point of view this ​was a major breakthrough in his self-​awareness. It's given
                        me added ​credibility.”
                    </p>
                    <button class="blue observe" @click="testimonialLink">
                        Read More
                    </button>
                </div>
                <div class="col-4">
                    <img src="https://cdn.assessments24x7.com/file/assessments24x7-media/Coaches+DISC+Certification/donna-bell.png" alt="donna bell picture">
                    <p class="observe" style="padding-bottom: 5px">
                        Donna Bell <br />
                        Vitality Leadership
                    </p>
                    <p class="observe" style="color: #0033c5; font-weight: 800;">
                        “The "icing on the cake" is that I can ​fully personalize the reports with my ​business name and
                        logo. Thank you ​Assessments 24x7 for a great tool!”
                    </p>
                    <button class="blue observe" @click="testimonialLink">
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
        },
        handleIntersection(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting && !entry.target.classList.contains('animated')) {
                    entry.target.classList.add('animate-sideways');
                    entry.target.classList.add('animated'); // Mark the element as animated
                }
            });
        }
    },
    mounted() {
        const observer = new IntersectionObserver(this.handleIntersection, {
            threshold: 0.1 // Adjust this as needed
        });

        // Select each child element to be observed
        const elements = document.querySelectorAll('.observe');
        elements.forEach(element => {
            observer.observe(element);
        });
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

@keyframes rise {
    0% {
        transform: translateX(2in);
        opacity: 0;
    }

    50% {
        transform: translateX(-1in);
        opacity: 1;
    }

    100% {
        transform: translateX(0);
        opacity: 1;
    }
}

@keyframes sideways {
    from {
        transform: translateY(.5in);
        opacity: 0;
    }

    to {
        transform: translateY(0);
        opacity: 1;
    }
}

.observe {
    opacity: 0;
    transform: translateY(1in);
    transition: all 0.5s ease-out;
}

.animate-on-scroll {
    opacity: 0;
    transform: translateX(2in);
    transition: all 0.5s ease-out;
}

.animate-rise {
    animation: rise 2s ease-out forwards;
}

.animate-sideways {
    animation: sideways 1s ease-out forwards;
}
</style>
