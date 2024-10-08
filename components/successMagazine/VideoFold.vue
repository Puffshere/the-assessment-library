<template>
    <div class="section">
        <img src="https://cdn.assessments24x7.com/file/assessments24x7-media/Success+Magazine/fold2-graphic.png" alt="fold 2 graphic" style="position: absolute; right: 0px;">
        <div class="container">
            <div class="row">
                <h2>
                    With insights at your fingertips, <span style="color: #0C3ECC;">the world is yours.</span>
                </h2>
                <p style="margin-top: 5px; margin-bottom: 20px;">
                    Join the leaders who trust Assessments 24x7 for DISC and a full range of behavioral assessments.
                    With our powerful <br />
                    online platform and scientifically validated tools, you’re ready to bring out the
                    best in you and your team. Let the <br />
                    transformation begin.
                </p>
                <video autoplay muted loop id="myVideo">
                    <source
                        src="https://cdn.assessments24x7.com/file/assessments24x7-media/Success+Magazine/fold2-video.mp4"
                        type="video/mp4">
                    Your browser does not support HTML5 video.
                </video>
                <button @click="scrollToContactFormSection">
                    Book Demo
                </button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    methods: {
        scrollToContactFormSection(event) {
            const element = document.getElementById('contactFormSection');
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
            event.target.blur();
        }
    }
}
</script>


<style scoped>
.container {
    padding-top: 25px;
    padding-bottom: 80px;
    display: flex;
    justify-content: center;
}

.row {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
}

h2 {
    font-size: 18pt;
}

video {
    width: 80%;
    height: auto;
    flex-shrink: 0;
    border-radius: 12px;
    border: 1px solid #ADADAD;
    box-shadow: 4px 4px 4px 0px rgba(0, 0, 0, 0.25);
    margin-bottom: 20px;
}

button {
    margin-top: 20px;
    width: 125px;
    height: 36px;
    border-radius: 4px;
    background: #E0AD2B;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    color: white;
    cursor: pointer;
    border: none;
    text-decoration: underline;
    font-weight: 700;
    font-size: 8.25pt;
}
</style>
