<template>
    <section class="unlockFold">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <div class="col-6">
                        <!-- Image element that will be dynamically updated based on OS -->
                        <img ref="unlockImage" class="unlock-image"
                            alt="Image of assessments and phone" style="width: 100%; margin-top: 50px;">
                    </div>
                    <div class="col-6">
                        <h2 style="color: #213C85;">
                            Unlock Behavioral Insights <br />
                            with Proven DISC Technology
                        </h2>
                        <p>
                            Assessments 24x7 offers cutting-edge, scientifically validated DISC assessment technology
                            that provides deep insight into behavior and communication. Our DISC tools are tailored for
                            diverse personal and professional needs, empowering coaches, HR professionals, and
                            organizations to improve teamwork, boost individual performance, and enhance leadership. Key
                            benefits include:
                        </p>
                        <ul>
                            <li>
                                An intuitive platform with customizable reports
                            </li>
                            <li>
                                Independent validation, ensuring accuracy and reliability
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
                <button @click="freeDiscButton" class="firstButton">
                    Take Free Assessment
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
        freeDiscButton(event) {
            window.location.href = 'https://assessments247.net/?R*t%28GQg%27==R';
            if (event) {
                event.target.blur();
            }
        },
        secondButtonLink(event) {
            window.location.href = 'https://www.assessments24x7.com/assessments/disc#tenKeyBenefits';
            if (event) {
                event.target.blur();
            }
        },
        detectOperatingSystem() {
            const userAgent = navigator.userAgent || navigator.vendor || window.opera;

            // Detect iOS devices
            if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
                return "iOS";
            }
            // Detect Android devices
            if (/android/i.test(userAgent)) {
                return "Android";
            }
            // Detect Windows devices
            if (/windows/i.test(userAgent)) {
                return "Windows";
            }
            // Default fallback
            return "other";
        },
        setUnlockImage() {
            const imgElement = this.$refs.unlockImage;
            if (imgElement) {
                const os = this.detectOperatingSystem();

                if (os === "iOS") {
                    // iOS devices may have trouble with WebP, so use PNG
                    console.log("iOS detected. Setting PNG fallback image source.");
                    imgElement.src = "https://cdn.assessments24x7.com/file/assessments24x7-media/Success+Magazine/DISC+Report+with+assessment.png";
                } else {
                    // For other systems, use WebP for better compression
                    console.log(`${os} detected. Setting WebP image source.`);
                    imgElement.src = "https://cdn.assessments24x7.com/file/assessments24x7-media/Success+Magazine/DISC+Report+and+phone+(1).webp";
                }
            } else {
                console.error("Image element not found.");
            }
        }
    },
    mounted() {
        // Call the method to set the correct image source based on OS detection
        this.setUnlockImage();
    }
}
</script>

<style lang="scss" scoped>
@import '~assets/scss/vars';

.container {
    padding-top: 30px;
    padding-bottom: 90px;
}

.unlockFold {
    background: url('https://cdn.assessments24x7.com/file/assessments24x7-media/Success+Magazine/skyline-background.png');
    background-size: cover;
    background-position: center;
}

p {
    font-family: $nunito-family;
    font-size: 10.5pt;
}

li {
    font-family: $nunito-family;
}

button {
    background: #0033C5;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    width: 184px;
    height: 41px;
    border-radius: 7px;
    text-align: center;
    font-family: Poppins;
    font-size: 10.5pt;
    font-weight: 700;
    text-decoration-line: underline;
    cursor: pointer;
}

.firstButton {
    color: white;
    border: none;
    margin-right: 30px;
}

.secondButton {
    border: 1px solid #E0AD2B;
    background: white;
    color: #0D3FCD;
}

@media (max-width: 768px) {
    .row {
        flex-direction: column;
        align-items: center;
    }

    .firstButton,
    .secondButton {
        margin-bottom: 15px;
        margin-left: auto;
        margin-right: auto;
        width: 80%;
        max-width: 300px;
    }
}
</style>
