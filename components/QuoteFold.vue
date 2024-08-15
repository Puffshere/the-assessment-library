<template>
    <section class="testimonial-section" id="testimonial">
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <div class="testimonial-container">
            <div class="quotation-marks-container">
                <img src="https://cdn.assessments24x7.com/file/assessments24x7-media/DISC/quotation-marks.png" alt="Quotation marks" class="quotation-marks">
            </div>
            <br />
            <br />
            <br />
            <p class="testimonial-text">
                <span class="highlight">I am happy to say that we use Assessments 24x7 as our global DISC
                    solution.</span><br /> We started to work with Assessments 24x7 because we were interested in the
                breadth of instruments that they offer. There are instruments for a large variety of cases and lots of
                different team dynamics. Since then, we have been really happy with the ease of using their platform. We
                have also been happy with the customer service that we have been provided. Every question that we have
                ever asked the team has been responded to really quickly and professionally. That gives Assessments 24x7
                our highest recommendation.
            </p>
            <div class="testimonial-footer">
                <img src="https://cdn.assessments24x7.com/file/assessments24x7-media/DISC/draft-kings-logo.png" alt="Draft Kings Logo" class="draft-kings-logo">
                <div class="author-and-role">
                    <p class="author-name">Will Mahon | Draft Kings</p>
                    <p class="author-role">Talent Development Manager</p>
                    <br />
                    <a href="#" class="video-testimonial-link hyperlink">Watch Full Video Testimonial</a>
                </div>
                <img src="https://cdn.assessments24x7.com/file/assessments24x7-media/DISC/will-mahon-headshot.png" alt="Will Mahon Headshot" class="author-headshot">
            </div>
        </div>
    </section>
</template>

<style>
.testimonial-section {
    background-color: #00A8FF;
    padding: 4em;
    font-family: Arial, sans-serif;
    min-height: 820px;
}

.testimonial-container {
    max-width: 840px;
    margin: 0 auto;
    background-color: #ffffff;
    padding: 2em;
    position: relative;
    text-align: left;
    border-radius: 10px;
}

.quotation-marks-container {
    position: absolute;
    top: -80px;
    left: 6%;
    transform: translateX(-50%);
}

.quotation-marks {
    width: 200px;
}

.testimonial-text {
    font-size: 18px;
    line-height: 1.5;
    margin-top: 1em;
    margin-bottom: 40px;
}

.highlight {
    font-weight: 800;
}

.testimonial-footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 1.5em;
}

.draft-kings-logo {
    position: absolute;
    left: 40px;
    bottom: 90px;
    width: 120px;
}

.author-and-role {
    flex: 1;
    margin-right: 10em;
    text-align: right;
}

.author-name {
    font-size: 36px;
    font-weight: 700;
    margin-top: -10px;
    margin-bottom: -8px;
}

.author-role {
    font-size: 18px;
    margin-bottom: 0.5em;
}

.video-testimonial-link {
    font-size: 18px;
    font-weight: bold;
    text-decoration: none;
}

.author-headshot {
    width: 240px;
    position: absolute;
    right: -60px;
    bottom: -60px;
}

@media (max-width: 768px) {
    .testimonial-section {
        padding: 0 4em;
        padding-bottom: 180px;
    }

    .quotation-marks-container {
        top: -20px;
    }

    .testimonial-footer {
        flex-direction: column;
        align-items: center;
    }

    .author-and-role {
        margin: 0;
        text-align: center;
    }

    .author-headshot {
        margin-top: 1em;
        width: 130px;
        right: -40px;
        bottom: -100px;
    }

    .quotation-marks {
        width: 130px;
    }

    .draft-kings-logo {
        left: 80px;
        bottom: -80px;
        width: 120px;
    }
}
</style>