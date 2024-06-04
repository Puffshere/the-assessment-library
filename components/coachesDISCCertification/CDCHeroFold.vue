<template>
    <section>
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <div class="col-7">
                        <h2>
                            Unlock the Full Potential <br />
                            of your <br />
                            Executive Coaching <br />
                            with DISC Certification
                        </h2>
                        <h4>
                            Earn <span class="hyperlink">ICF Credits</span> While
                            <img src="~/assets/coaches-disc-certification/blue-arrow.png" alt="hero image">
                            <br />
                            Enhancing Your Coaching Efficacy
                        </h4>
                        <button class="light-blue" @click="scrollToSection">
                            Get Started Today
                        </button>
                    </div>
                    <div class="col-5">
                        <img src="~/assets/coaches-disc-certification/man.png" alt="male business man" class="manSmiling" />
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
            const element = document.getElementById('cdcContactForm');
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
            event.target.blur();
        },
        handleIntersection(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    this.$el.classList.add('animate-rise');
                } else {
                    this.$el.classList.remove('animate-rise');
                }
            });
        }
    },
    mounted() {
        const observer = new IntersectionObserver(this.handleIntersection, {
            threshold: 0.1 // Adjust this as needed
        });
        observer.observe(this.$el);
    }
}
</script>

<style lang="scss" scoped>
@import './CDC.scss';

.container {
    padding: 50px 0;
}

.col-7 img {
    width: 5%;
}

.col-5 img {
    width: 100%;
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

.animate-rise {
    animation: rise 1s ease-out;
}
</style>
