<template>
    <section>
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <h2>
                        As a Coach, you strive to provide the <br />
                        best for your clients.
                    </h2>
                    <h5>
                        Our DISC Certification equips you with scientifically validated tools to offer deeper insights
                        into <br />
                        your clients’ strengths, weaknesses, and areas for development. This certification will help you
                        <br />
                        differentiate your services in a competitive market and attract high-profile executives.
                    </h5>
                    <button class="light-blue" @click="scrollToSection">
                        Get Started Today
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
        }
    }
}
</script>

<style lang="scss" scoped>
@import './CDC.scss';

.container {
    padding: 50px 0;
}

h2,
h5 {
    text-align: right;
}

button {
    float: right;
}
</style>
