<template>
    <section>
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <h2>
                        As a Coach, you strive to provide the <br />
                        best for your clients.
                    </h2>
                    <h5 style="margin-top: 50px;">
                        Our DISC Certification equips you with scientifically validated tools to offer deeper insights
                        into <br />
                        your clients’ strengths, weaknesses, and areas for development. This certification will help you
                        <br />
                        differentiate your services in a competitive market and attract high-profile executives.
                    </h5>
                    <button class="light-blue" @click="scrollToSection" style="margin-bottom: 50px;">
                        <span class="button-text">Get Started Today</span>
                    </button>
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
                    entry.target.classList.add('animate-rise');
                    if (entry.target.querySelector('.button-text')) {
                        setTimeout(() => {
                            entry.target.querySelector('.button-text').classList.add('animate-rise');
                        }, 500);
                    }
                } else {
                    entry.target.classList.remove('animate-rise');
                    if (entry.target.querySelector('.button-text')) {
                        entry.target.querySelector('.button-text').classList.remove('animate-rise');
                    }
                }
            });
        }
    },
    mounted() {
        const observer = new IntersectionObserver(this.handleIntersection, {
            threshold: 0.1 // Adjust this as needed
        });

        // Select each child element to be observed
        const elements = document.querySelectorAll('.col-12 > h2, .col-12 > h5, .col-12 > button, .col-12 > button .button-text');
        elements.forEach(element => {
            observer.observe(element);
        });
    }
}
</script>

<style lang="scss" scoped>
@import './CDC.scss';

@keyframes rise {
    from {
        opacity: 0;
        transform: translateY(.5in);
    }

    to {
        opacity: 1;
        transform: translateY(0);
    }
}

.container {
    padding: 80px 0;
}

h2,
h5 {
    text-align: right;
    opacity: 0;
    transform: translateY(1in);
    transition: all 2s ease-out;
}

button {
    float: right;
    opacity: 0;
    transform: translateY(1in);
    transition: all 2s ease-out;
}

.button-text {
    display: inline-block;
    opacity: 0;
    transform: translateY(1in);
    transition: all 2s ease-out;
}

.animate-rise {
    animation: rise 1s forwards;
}
</style>
