<template>
    <section>
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <div class="col-7">
                        <h2 style="line-height: 54px;">
                            Unlock the Full Potential <br />
                            of Your <br />
                            Coaching <br />
                            with DISC Certification
                        </h2>
                        <h4>
                            Earn <span class="hyperlink" @click="scrollToSection" style="cursor: pointer;">ICF Credits</span> While
                            <img src="https://cdn.assessments24x7.com/file/assessments24x7-media/Coaches+DISC+Certification/blue-arrow.png" alt="hero image"
                                class="arrow">
                            <br />
                            Enhancing Your Coaching Efficacy
                        </h4>
                        <button class="light-blue" style="margin-top: 20px;" @click="scrollToSectionButton">
                            Get Started Today
                        </button>
                    </div>
                    <div class="col-5">
                        <img src="https://cdn.assessments24x7.com/file/assessments24x7-media/Coaches+DISC+Certification/man.png" alt="male business man"
                            class="manSmiling" />
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    methods: {
        scrollToSection(event) {
            const element = document.getElementById('icfSection');
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
            event.target.blur();
        },
        scrollToSectionButton(event) {
            const element = document.getElementById('cdcContactForm');
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
            event.target.blur();
        },
        handleIntersection(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-rise');
                } else {
                    entry.target.classList.remove('animate-rise');
                }
            });
        }
    },
    mounted() {
    if (typeof window !== 'undefined') {
        const observer = new IntersectionObserver(this.handleIntersection, {
            threshold: 0 // Adjust this as needed
        });

        // Select each child element to be observed
        const elements = document.querySelectorAll('.col-7 h2, .col-7 h4, .col-7 button');
        elements.forEach(element => {
            observer.observe(element);
        });
    }
}

}
</script>

<style scoped>
@import './CDC.scss';

.container {
    padding: 50px 0;
    padding-top: 30px;
    padding-bottom: 70px;
}

h4 {
    line-height: 38px;
}

.col-7 .arrow {
    width: 5%;
    margin-top: -40px;
}

.col-5 img {
    width: 100%;
    margin-top: 15px;
    opacity: 1 !important;
    transform: none !important;
}

@keyframes rise {
    from {
        transform: translateY(1in);
        opacity: 0;
    }
    to {
        transform: translateY(0);
        opacity: 1;
    }
}

.col-7 h2,
.col-7 h4,
.col-7 button {
    opacity: 0;
    transform: translateY(1in);
    transition: all 1.0s ease-out;
}

.animate-rise {
    animation: rise 1.0s ease-out forwards;
}
</style>
