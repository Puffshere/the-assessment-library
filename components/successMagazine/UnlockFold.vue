<template>
    <section class="unlockFold">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <div class="col-6">
                        <img src="https://cdn.assessments24x7.com/file/assessments24x7-media/Success+Magazine/assessments-phone-image.png"
                            alt="image of assessments and phone" style="width: 100%; margin-top: 50px;">
                    </div>
                    <div class="col-6">
                        <h2 style="color: #213C85;">
                            Unlock Behavioral Insights <br />
                            with Proven DISC Technology
                        </h2>
                        <p>
                            Assessments 24x7 offers cutting-edge, scientifically validated DISC assessment technology
                            that provides deep insights into behavior and communication. Our DISC tools are tailored for
                            diverse personal and professional needs, empowering coaches, HR professionals, and
                            organizations to improve teamwork, boost individual performance, and enhance leadership. Key
                            benefits include:
                        </p>
                        <ul>
                            <li>
                                An intuitive platform with customizable reports
                            </li>
                            <li>
                                Independent validation ensuring accuracy and reliability
                            </li>
                            <li>
                                Exceptional support and flexible pricing for a seamless experience
                            </li>
                        </ul>
                        <p>
                            Our DISC technology delivers the value you need to foster growth and success.
                        </p>
                    </div>
                </div>
            </div>
            <div class="row" style="display: flex; justify-content: center; margin-top: 20px;">
                <button @click="firstButtonLink" class="firstButton">
                    Take Your Free Assessment
                </button>
                <button @click="secondButtonLink" class="secondButton">
                    10 Key Benefits of DISC
                </button>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    methods: {
        firstButtonLink(event) {
            const element = document.getElementById('successMagazineContactForm');
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
            event.target.blur();
        },
        secondButtonLink(event) {
            window.location.href = 'https://www.assessments24x7.com/assessments/disc#tenKeyBenefits';
            event.target.blur();
        },
    }
}

</script>

<style scoped>
.container {
    padding-top: 30px;
    padding-bottom: 90px;
}

.unlockFold {
    background: url('https://cdn.assessments24x7.com/file/assessments24x7-media/Success+Magazine/skyline-background.png');
    background-size: cover;
    background-position: center;
}

button {
    width: 184px;
    height: 36px;
    border-radius: 4px;
    background: #E0AD2B;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    text-decoration: underline;
    cursor: pointer;
}

.firstButton {
    color: white;
    border: none;
    margin-right: 30px;
}

.secondButton {
    border: 1px solid #E0AD2B;
    background: rgba(12, 62, 204, 0.00);
    color: #0D3FCD;
}
</style>