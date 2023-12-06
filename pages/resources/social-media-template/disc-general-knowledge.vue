<template>
    <section class="social-media-templates">
        <main-nav />
        <div class="wrapper">
            <div class="container hero">
                <div class="row rowItems">
                    <div class="col-8">
                        <div>
                            <img class="titleImage" src="~assets/iconTitle.png" alt="template icons">
                            <p class="titleText">
                                Utilize these branded Social Media templates in Canva to customize within your Canva Pro
                                Accounts for sharing on social media. Please be aware that the additional information is
                                provided exclusively for branding and language guidance; refrain from copying it verbatim.
                            </p>
                        </div>
                    </div>
                    <div class="col-4">
                        <img class="image" src="~assets/template-icons.png" alt="template icons">
                    </div>
                </div>
            </div>
        </div>
        <div class="template-library">
            <div class="templateBanner">
                <h1>DISC General Knowledge</h1>
            </div>
        </div>
        <br>
        <br>
        <div class="container">
            <div class="row">
                <div class="social-media-posts">
                    <div class="post" v-for="post in posts" :key="post.id"
                        :class="{ 'gray-background': post.id % 2 !== 0 }">
                        <div class="post-inner">
                            <div class="image-column">
                                <img class="image-column" :src="post.imageUrl" :alt="post.title">
                            </div>
                            <div class="text-column">
                                <div class="header">
                                    <a :href="post.canvaLink" class="templateTitle"> {{ post.title }} </a>
                                </div>
                                <div>
                                    <span class="templateSize">Template size:</span> {{ post.templateSize }}
                                    <hr>
                                    <span v-if="post.linkedPostAs" class="linkedPostAs"><img class="linkedInIcon"
                                            src="~/assets/linkedInIcon.png" alt="LinkedIn Icon"> Post as:</span> {{
                                                post.linkedPostAs }}
                                    <br>
                                    <span v-if="post.instaPostAs" class="instaPostAs"><img class="instagramIcon"
                                            src="~/assets/instagramIcon.png" alt="Instagram Icon"> Post as:</span> {{
                                                post.instaPostAs }}
                                    <br>
                                    <span v-if="post.ctaLink" class="ctaLink">CTA Link:</span> <a :href="post.ctaLink"
                                        class="hyperlink"> {{
                                            post.ctaLink }} </a>
                                    <br>
                                    <span class="caption">A24x7 Caption:
                                        <br>
                                    </span>
                                    <span @mouseover="hover = true" @mouseleave="hover = false"
                                        :title="hover ? post.caption : ''">
                                        {{ truncatedCaption(post.caption) }}
                                    </span>
                                    <button v-if="isCaptionTruncated(post.caption)"
                                        @click="copyText(post.caption)">Copy</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <br>
        <nuxt-link to="/resources/social-media-templates">
            <img class="backIcon" src="~assets/backIcon.png" alt="template icons">
        </nuxt-link>
        <br>
        <br>
        <footer-fold />
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
    name: 'TemplateLibrary',
    data() {
        return {
            hover: false,
            posts: [
                {
                    id: 1,
                    title: 'DISC Styles: Overview of each DISC Style - D - LI-IG',
                    canvaLink: 'https://www.canva.com/design/DAFzroM1LfI/8ozLumk37NX1EcEu9MbAcw/view?utm_content=DAFzroM1LfI&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink&mode=preview',
                    imageUrl: '/2aTemplateImage.png',
                    templateSize: '1200 x 1200',
                    linkedPostAs: 'Document',
                    instaPostAs: 'Multiple Images',
                    ctaLink: 'http://www.assessments24x7.com/',
                    caption: `It's sometimes easier to explain DISC styles to people by using well-known personalities. Do you agree with our examples? Who do you tend to think of as a representative of each style?

#DISCstyles #disc #michaeljordan #dollyparton #nelsonmandela #billgates`,
                    postCategory: 'DISC: General Knowledge'
                },
                {
                    id: 2,
                    title: 'DISC Styles: Overview of each DISC Style - I - LI-IG',
                    canvaLink: 'https://www.canva.com/design/DAFzr6gqbpk/58GomeF954Fqw42BxxASLg/view?utm_content=DAFzr6gqbpk&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink&mode=preview',
                    imageUrl: '/2bTemplateImage.png',
                    templateSize: '1200 x 1200',
                    linkedPostAs: 'Document',
                    instaPostAs: 'Multiple Images',
                    ctaLink: 'http://www.assessments24x7.com/',
                    caption: `The I, Influence DISC Style is about connection and fun. We all need a High I in our lives, no matter our DISC Style!

Comment below if you're a high I Style, or tag a friend or colleague who may not realize they're a high I Style! 
To learn more, visit: https://lnkd.in/gS5YPtqq


#Coaching #DISC # #SelfAwareness #TeamDynamics #DISCProfile #CommunicationSkills`,
                    postCategory: 'DISC: General Knowledge'
                },
                {
                    id: 3,
                    title: 'DISC Styles: Overview of each DISC Style - S - LI-IG',
                    canvaLink: 'https://www.canva.com/design/DAF1c0IX6-I/yEIKlkGveNRIr8032lka_w/view?utm_content=DAF1c0IX6-I&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink&mode=preview',
                    imageUrl: '/2cTemplateImage.png',
                    templateSize: '1200 x 1200',
                    linkedPostAs: 'Document',
                    instaPostAs: 'Multiple Images',
                    ctaLink: 'http://www.assessments24x7.com/',
                    caption: `The S, Steadiness DISC Style.
They're the harmonizers, patient listeners, and the glue that holds teams together. Tag someone you know with a strong 'S' style, and let's celebrate their invaluable contributions.  🚀 To learn more, visit: http://www.assessments24x7.com/ . . . . #LeadershipDevelopment #Coaching #DISC #TeamBuilding #LeadershipSkills #SelfAwareness #ProfessionalDevelopment #LeadershipCoaching #TeamDynamics #PersonalGrowth #LeadershipTraining #DISCProfile #CommunicationSkills #TeamWorkshop #LeadershipMatters`,
                    postCategory: 'DISC: General Knowledge'
                },
                {
                    id: 4,
                    title: 'DISC Styles: Overview of each DISC Style - C - LI-IG',
                    canvaLink: 'https://www.canva.com/design/DAF0JOaVsao/Mpu8aJmLAwII4N524qWlug/view?utm_content=DAF0JOaVsao&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink&mode=preview',
                    imageUrl: '/2dTemplateImage.png',
                    templateSize: '1200 x 1200',
                    linkedPostAs: 'Document',
                    instaPostAs: 'Multiple Images',
                    ctaLink: 'http://www.assessments24x7.com/',
                    caption: `The C, Conscientiousness DISC Style 📊
These analytical thinkers thrive on precision, meticulous planning, and attention to detail. Tag someone you know who is a 'C' style, and let's recognize their dedication to quality and problem-solving prowess! 🚀 To learn more, visit: http://www.assessments24x7.com/ . . . . #LeadershipDevelopment #Coaching #DISC #TeamBuilding #LeadershipSkills #SelfAwareness #ProfessionalDevelopment #LeadershipCoaching #TeamDynamics #PersonalGrowth #LeadershipTraining #DISCProfile #CommunicationSkills #TeamWorkshop #LeadershipMatters`,
                    postCategory: 'DISC: General Knowledge'
                },
                {
                    id: 5,
                    title: '3 DISC Misconceptions - Combined Post - LI-IG',
                    canvaLink: 'https://www.canva.com/design/DAF0JRBAuhw/Kve8qbRkjCXDsWf2E6mS6g/view?utm_content=DAF0JRBAuhw&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink&mode=preview',
                    imageUrl: '/15aTemplateImage.png',
                    templateSize: '1200 x 1200',
                    linkedPostAs: 'Document',
                    instaPostAs: 'Multiple Images',
                    ctaLink: '',
                    caption: `No Caption - Have only posted this as 3 separate posts. See following 3 captions.`,
                    postCategory: 'DISC: General Knowledge'
                },
                {
                    id: 6,
                    title: '1 of 3: DISC Myths: 3 DISC Misconceptions - LI-IG',
                    canvaLink: 'https://www.canva.com/design/DAFuwrT6JsE/qRHdcIWFD2Eb9QkzJdlA4A/view?utm_content=DAFuwrT6JsE&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink&mode=preview',
                    imageUrl: '/15bTemplateImage.png',
                    templateSize: '1200 x 1200',
                    linkedPostAs: 'Image',
                    instaPostAs: 'Image',
                    ctaLink: '',
                    caption: `DISC Misconceptions 🔎
Over the next 2 weeks, be on the lookout as we unravel some common misconceptions about DISC.🚀
Let's separate fact from fiction, gain deeper insights, and harness the full potential of DISC in our personal and professional lives. 🌟

💭 Misconception #1 “The DISC assessment is a personality test.”
Two things about this are untrue. First, DISC is not a test. A test implies right and wrong answers, and there is no such definitive judgment in DISC styles. Every style has unique strengths and significance, and every style has challenges and disadvantages. Second, this is not a measure of personality. DISC measures observable behaviors and emotions, and communication tendencies, which make up a part of your personal characteristics, but not your personality as a whole. Personality encompasses far more than just behavior, emotion, and communication style.

#DISC #Misconceptions #BehavioralScience #PersonalDevelopment #ProfessionalGrowth`,
                    postCategory: 'DISC: General Knowledge'
                },
                {
                    id: 7,
                    title: '2 of 3: DISC Myths: 3 DISC Misconceptions - LI-IG',
                    canvaLink: 'https://www.canva.com/design/DAF0JXP0b8s/jIzrh3IeLS7O7-fFJhYdHQ/view?utm_content=DAF0JXP0b8s&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink&mode=preview',
                    imageUrl: '/15cTemplateImage.png',
                    templateSize: '1200 x 1200',
                    linkedPostAs: 'Image',
                    instaPostAs: 'Image',
                    ctaLink: '',
                    caption: `#2 “DISC puts people in a box – once a D, always a D.” DISC is an invaluable tool because it provides useful insight from two perspectives of our interactions as a baseline for understanding a part of what makes us tick: The Natural style and the Adapted style.  The Natural style is the “real, instinctual you” or how you would behave without any outside influence. It tends to stay more consistent, though it is subject to seasons of life and big emotional events like marriage or loss of a loved one. 
 The Adapted style is a reflection of how you respond to the environment, situation, or relationships around you and can change very rapidly, depending on what is going on around you. As a result, it is important to be consistently aware and identify style in each interaction so you are as effective as possible in your communication with others.`,
                    postCategory: 'DISC: General Knowledge'
                },
                {
                    id: 8,
                    title: '3 of 3: DISC Myths: 3 DISC Misconceptions - LI-IG',
                    canvaLink: 'https://www.canva.com/design/DAF0JQADlEY/Kf4oy33OUhK_zLkIhGHcPA/view?utm_content=DAF0JQADlEY&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink&mode=preview',
                    imageUrl: '/15dTemplateImage.png',
                    templateSize: '1200 x 1200',
                    linkedPostAs: 'Image',
                    instaPostAs: 'Image',
                    ctaLink: '',
                    caption: `#3 “DISC Styles change over time”

While DISC is a very well-established and validated communication model that has been around for a very long time, (in many iterations), it does not lose its potency and is a very important and valuable tool. (Even for those who have used it before.) Humans are complex, and to fully understand and comprehend behaviors and emotions is a life-long pursuit. We all have areas of opportunity and growth potential, especially in communication, the foundation of mutually-beneficial relationships! Encourage continued engagement with the model - practice and integration are keys to creating greater understanding, longevity with the DISC language, and greater personal and professional growth.`,
                    postCategory: 'DISC: General Knowledge'
                },
                {
                    id: 9,
                    title: 'Listen up - D - Dominance - LI-IG',
                    canvaLink: 'https://www.canva.com/design/DAFzr0GK9yE/Xj8bHJpuFIizMdUUWTMqMQ/view?utm_content=DAFzr0GK9yE&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink&mode=preview',
                    imageUrl: '/26aTemplateImage.png',
                    templateSize: '1080 x 1350',
                    linkedPostAs: 'Document',
                    instaPostAs: 'Multiple Images',
                    ctaLink: 'http://www.assessments24x7.com/',
                    caption: `Mastering the Art of Listening to the Different DISC Styles 🎯

Why? Because every interaction is an opportunity to connect, influence, and build stronger relationships. 🤝 Ready to elevate your communication game? Let's dive in!


Listening to the D - Dominance Style

1. Listen to what they want to accomplish, how they are motivated, and what they want to change.

2. Convey openness and acceptance toward them.

3. Read between the lines for what isn't being said and clarify succinctly.

4. Maintain eye contact and avoid interrupting.

5. Summarize their achievements and accomplishments.



Let us know if you will be using any of these specifically during your next interaction with a D in the comments. (And keep an EYE out for the I Style next week 😉)



#DISCStyles #CommunicationTips #ActiveListening #Softskills #Assessments24x7 #DISC`,
                    postCategory: 'DISC: General Knowledge'
                },
                {
                    id: 10,
                    title: 'Listen up - I - Influence - LI-IG',
                    canvaLink: 'https://www.canva.com/design/DAF0DkJsLzU/geHjP2AvA70-1zPHeKEhhw/view?utm_content=DAF0DkJsLzU&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink&mode=preview',
                    imageUrl: '/26bTemplateImage.png',
                    templateSize: '1080 x 1350',
                    linkedPostAs: 'Document',
                    instaPostAs: 'Multiple Images',
                    ctaLink: 'http://www.assessments24x7.com/',
                    caption: `Round Two of Listening to the Four DISC Styles 🚀

I - Influence Style:
1. Show interest in them, let them talk, and be enthusiastic.
2. Match their energy, tone, and pace.
3. Pay attention to their personal feelings and experiences.
4. Maintain eye contact when listening to them; engage with them.
5. Provide positive feedback; compliment them when appropriate

Like, comment, or tag someone in the comments who may find this helpful 😉

Missed the D - Dominance Style? Hit rewind to last week's post and catch up! 🔄👀

#DISCStyles #CommunicationTips #ActiveListening #Softskills #Assessments24x7 #DISC`,
                    postCategory: 'DISC: General Knowledge'
                },
                {
                    id: 11,
                    title: 'Listen up - S - Influence - LI-IG',
                    canvaLink: 'https://www.canva.com/design/DAF1i6Pp7xQ/HGRgub8QRPXALQuvNGauLw/view?utm_content=DAF1i6Pp7xQ&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink&mode=preview',
                    imageUrl: '/26cTemplateImage.png',
                    templateSize: '1080 x 1350',
                    linkedPostAs: 'Document',
                    instaPostAs: 'Multiple Images',
                    ctaLink: 'http://www.assessments24x7.com/',
                    caption: `No caption`,
                    postCategory: 'DISC: General Knowledge'
                }
            ]
        };
    },
    created() {
        this.copyText = function (text) {
            if (navigator.clipboard) {
                navigator.clipboard.writeText(text)
                    .then(() => {
                        alert('Text copied to clipboard');
                    })
                    .catch(err => {
                        console.error('Error in copying text: ', err);
                    });
            } else {
                console.log('Clipboard feature not available');
            }
        };
    },
    methods: {
        truncatedCaption(caption) {
            return caption.length > 210 ? caption.substring(0, 210) + '...' : caption;
        },
        isCaptionTruncated(caption) {
            const maxLength = 210;
            return caption.length > maxLength;
        },
    },
    head() {
        return {
            title: 'Social Media Templates | Assessments 24x7',
            meta: [
                {
                    hid: 'robots',
                    name: 'robots',
                    content: 'noindex'
                }
            ]
        }
    },
}
</script>

<style lang="scss" scoped>
.social-media-posts {
    display: flex;
    flex-direction: column;
}

.post {
    margin-bottom: 20px;
}

.post-inner {
    max-height: 260px;
    display: flex;
    flex-direction: row;
    padding: 10px 0;
}

.image-column {
    flex-basis: 20%;
    padding: 10px;
    text-align: center;
    max-width: 80%;
    max-height: 100%;
}

.image-column img {
    display: block;
    margin-left: auto;
    margin-right: auto;
}

.text-column {
    flex-basis: 80%;
    padding: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

.templateTitle {
    color: #1666ff;
    text-decoration: underline;
}

.templateSize {
    font-weight: bold;
}

.linkedInIcon {
    max-width: 20px;
    margin-right: 5px;
}

.linkedPostAs {
    font-weight: bold;
}

.instagramIcon {
    max-width: 30px;
    margin-left: -5px;
}

.instaPostAs {
    font-weight: bold;
}

.ctaLink {
    font-weight: bold;
}

.caption {
    font-weight: bold;
}

.header h4 {
    margin: 0;
    padding: 0;
}

.gray-background {
    background-color: #f0f0f0;
}

.col-4 {
    display: flex;
    justify-content: center;
}

.col-4 img {
    display: block;
    margin-left: auto;
    margin-right: auto;
}

.col-8 {
    padding: 0 20px;
}

.hero {
    padding: 30px 20px;
    min-height: 300px;
}

.titleText {
    margin-left: 20px;
}

.titleImage {
    width: 100%;
    margin-left: -30px;
}

.image {
    padding: 20px 0;
}

.templateBanner {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    background-color: #1666ff;
    height: 60pt;
    color: white;
    font-size: 20pt;
}

.template-library {
    text-align: center;
}

.backIcon {
    display: flex;
    margin: 0 auto;
    cursor: pointer;
}

@media (max-width: 1200px) {
    .post-inner {
        max-height: none;
    }

    .backIcon {
        max-width: 60%;
    }
}

@media (max-width: 750px) {

    .templateBanner {
        font-size: medium;
    }

    .post-inner {
        flex-direction: column;
    }

    .image-column,
    .text-column {
        flex-basis: 100%;
        max-width: 100%;
    }

    .image-column img {
        display: block;
        margin-left: auto;
        margin-right: auto;
        width: 50%;
    }
}
</style>