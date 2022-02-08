<template>
    <section class="skeleton">
        <main-nav></main-nav>

        <section class="header">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <h1 class="section-title">Thank You!</h1>
                    </div>
                </div>
            </div>
        </section>

        <div class="container">
            <div class="row">
                <div class="col-12">
                    <h2 style="text-align:center">We Will Contact You Shortly</h2>

                    <p style="text-align:center">
                        Here is the link to download the <a class="hyperlink" href="https://cdn.assessments24x7.com/file/assessments24x7-media/ebooks/DISC+eWorkbook+INTERACTIVE.pdf">Platinum Rule eWorkbook</a>.<br/><br/>
                        You can also email us at <a class="hyperlink" href="mailto:support@assessments24x7.com">support@assessments24x7.com</a> 
                        or call us at <a class="hyperlink" href="tel:12064006647">+1 (206) 400-6647</a>
                    </p>
                </div>
            </div>
        </div><br/><br/><br/><br/>

        <footer-fold></footer-fold>
    </section>
</template>

<script>
    import Nav from '@/components/Nav';
    import Footer from '@/components/Footer';

    export default {
        components: {
            'main-nav': Nav,
            'footer-fold': Footer
        },
        data() {
            return {
                iframe: ''
            }
        },
        created() {
            if (process.browser) {
                this.$gtm.push({ event: 'Thank You' });
            }

            const monica = '<iframe src="https://www.appointmentcore.com/app/freeslots/fEjwvK?iframe-view=SlotsV2" width="640" height="660" style="border:none;" frameborder="0"></iframe>';
            const suzette = '<iframe src="https://www.appointmentcore.com/app/freeslots/SBgnWt?iframe-view=SlotsV2" style="width: 100%;height: 900px;border: 0px none;" frameborder="0"></iframe>';

            let agent = monica;
            let filter = this.$route.query.inf_option_Whichbestdescribesyourneedforassessments;
            let filter2 = this.$route.query.inf_option_Imlookingformoreinformationon;

            if (filter === '2387' || filter2 === '2778') {
                // Reseller
                agent = suzette;
            } else if (filter === '2389') {
                // Corporate
                agent = monica;
            } else if (filter === '2391') {
                // Other/not sure
                agent = monica;
            }

            this.iframe = agent;
        }
    }
</script>

<style lang="scss" scoped>
    .skeleton {
        .header {
            background: url('~assets/about.jpg');
            background-size: cover;
            color: #fff;
            text-align: center;
            padding: 70px 0;
            margin-bottom: 30px;

            .section-title {
                font-size: 30pt;
                margin-top: 0;
            }
        }

        h1 {
            font-size: 30pt;
            line-height: 34pt;
            margin-bottom: 0;
        }

        h2 {
            font-size: 20pt;
            line-height: 24pt;
        }
    }
</style>