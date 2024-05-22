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
                <h1>Holidays</h1>
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
    middleware: 'auth',
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
                    title: 'Holiday: Description of dogs and their DISC Styles - LI or IG',
                    canvaLink: 'https://www.canva.com/design/DAF0WjgEmgU/rkcbcUTp0ljQAEJdpUgdJw/view?utm_content=DAF0WjgEmgU&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink&mode=preview',
                    imageUrl: 'https://cdn.assessments24x7.com/file/assessments24x7-media/social-media-templates/4aTemplateImage.png',
                    templateSize: '1200 x 1200',
                    linkedPostAs: 'Image',
                    instaPostAs: 'Image',
                    ctaLink: '',
                    caption: `We missed #nationaldogday by a few days, but still wanted to pay tribute to our 4 legged friends and their DISC styles! What do you think of our picks for representatives of each style?

Post a pic in the comments of your furry friend and what style you think they would be!`,
                    postCategory: 'Holidays'
                },
                {
                    id: 2,
                    title: 'Holiday: Description of dogs and their DISC Styes - IG',
                    canvaLink: 'https://www.canva.com/design/DAFtNtBCAgQ/33r1mMEr_FYZG3UCO64lyw/view?utm_content=DAFtNtBCAgQ&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink&mode=preview',
                    imageUrl: 'https://cdn.assessments24x7.com/file/assessments24x7-media/social-media-templates/4bTemplateImage.png',
                    templateSize: '1080 x 1920',
                    linkedPostAs: '',
                    instaPostAs: 'Reel',
                    ctaLink: '',
                    caption: `We missed #nationaldogday by a few days, but still wanted to pay tribute to our 4 legged friends and their DISC styles! What do you think of our picks for representatives of each style?

Post a pic in the comments of your furry friend and what style you think they would be!`,
                    postCategory: 'Holidays'
                },
                {
                    id: 3,
                    title: 'Holiday: Labor Day Post (1st Monday of September) - LI-IG',
                    canvaLink: 'https://www.canva.com/design/DAF0WrSo50c/tGxvzBgAoyi60dfuevx_SQ/view?utm_content=DAF0WrSo50c&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink&mode=preview',
                    imageUrl: 'https://cdn.assessments24x7.com/file/assessments24x7-media/social-media-templates/5TemplateImage.png',
                    templateSize: '1200 x 1200',
                    linkedPostAs: 'Image',
                    instaPostAs: 'Image',
                    ctaLink: '',
                    caption: `Happy Labor Day, everyone!`,
                    postCategory: 'Holidays'
                },
                {
                    id: 4,
                    title: 'World Tourism Day: DISC Foreign Country Analogy - LI-IG',
                    canvaLink: 'https://www.canva.com/design/DAF0JDckPrQ/gRxIcIDi1q3FyJoJX__KrA/view?utm_content=DAF0JDckPrQ&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink&mode=preview',
                    imageUrl: 'https://cdn.assessments24x7.com/file/assessments24x7-media/social-media-templates/11TemplateImage.png',
                    templateSize: '1200 x 1200',
                    linkedPostAs: 'Image',
                    instaPostAs: 'Image',
                    ctaLink: '',
                    caption: `Happy World Tourism Day! Let’s Think about DISC in the context of traveling internationally. ✈

We don't always have time to study a new language before a trip, but communication is much more than the spoken word. Think about how expressive I-styles are with body language or how a C-style might need a little more personal space. Pay attention to those nonverbal cues and adapt to mirror them. Even if you don't know the language, people will notice & appreciate the effort!

#ThePlatinumRule #DISCstyles
 #ThePlatinumRule  #DISCstyles"`,
                    postCategory: 'Holidays'
                },
                {
                    id: 5,
                    title: 'DISC Fears - Halloween post - LI-IG',
                    canvaLink: 'https://www.canva.com/design/DAFywgFxKZI/A7t4Yj39LtzUZVHH7QaieQ/view?utm_content=DAFywgFxKZI&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink&mode=preview',
                    imageUrl: 'https://cdn.assessments24x7.com/file/assessments24x7-media/social-media-templates/23TemplateImage.png',
                    templateSize: '1200 x 1200',
                    linkedPostAs: 'Document',
                    instaPostAs: 'Multiple Images',
                    ctaLink: '',
                    caption: `Discover the Fears of each DISC Behavioral Style! 👻🔮🕷️
Which one gives YOU the spooks? 🎃 #HappyHalloween!

#DISC #DISCBehaviors #Communication #Teams #LeadershipDevelopment #Businessdevelopment #HR`,
                    postCategory: 'Holidays'
                },
                {
                    id: 6,
                    title: 'Team Update - Halloween Costumes and DISC - LI-IG',
                    canvaLink: 'https://www.canva.com/design/DAF0PQA4GJY/TxB0biZioDFa6UbEW19nTA/view?utm_content=DAF0PQA4GJY&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink&mode=preview',
                    imageUrl: 'https://cdn.assessments24x7.com/file/assessments24x7-media/social-media-templates/24TemplateImage.png',
                    templateSize: '1200 x 1200',
                    linkedPostAs: 'Document',
                    instaPostAs: 'Multiple Images',
                    ctaLink: '',
                    caption: `🌟 Discover Your True Self with DISC! 🌟
(And meet some of our AWESOME Team!)
Are you a Taco, Squints, Moana, Clown, Skeleton, or a Disco Cowgirl?

We believe that understanding your unique Behavioral Style is the 🗝key to unlocking your full potential!

🌮 Do you exude confidence and love being the center of attention like our Taco friend?
🧢 Or are you the lovable, quirky character who adds charm to every situation like Squints from The Sandlot?
🌺 Does your adventurous spirit lead you on exciting journeys just like Moana?
🤡 Or are you the life of the party and always ready to make people smile like our Clown buddy?
💀Need to add a touch of spooky flair as a Skeleton?
🤠Or are you ready to line dance and bring some groovy charm as a Disco Cowgirl?

No matter which costume you relate to, DISC can help you:
✨Boost self-awareness
✨Enhance communication skills
✨Strengthen relationships
✨Excel in your personal and professional life

Ready to embrace your unique behavior style and take the first step towards personal growth and success? Tag a colleague who needs to DISCover their inner Taco, Clown, Moana, Disco Cowgirl, Skeleton, or Squints!
Or better yet... Take a DISC Assessment! 🔗https://discstyles.com/

Angie Warner, Jared Moore, Cristina Moore, Amy Lewis, Suzette Chaparro, Monica Saare

#DISCAssessments #DISCStyle #BehavioralStyle #SelfDiscovery #UnlockYourPotential #Happyhalloween`,
                    postCategory: 'Holidays'
                },
                {
                    id: 7,
                    title: 'Thanksgiving Motivators Post 2023 - LI-IG',
                    canvaLink: 'https://www.canva.com/design/DAF0bON0SNo/xOITH7B-SMSm11v3wPkUzQ/view?utm_content=DAF0bON0SNo&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink&mode=preview',
                    imageUrl: 'https://cdn.assessments24x7.com/file/assessments24x7-media/social-media-templates/29TemplateImage.png',
                    templateSize: '1200 x 1200',
                    linkedPostAs: 'Document',
                    instaPostAs: 'Multiple Images',
                    ctaLink: 'https://www.assessments24x7.com/contact',
                    caption: `What motivates you?

Unlock the 'why' behind actions this Thanksgiving with the Motivators Assessment! Just as DISC reveals 'how' we behave, Motivators dives into the 'why'. 🚀✨

Share and comment below which Motivator(s) resonate with you, and let's explore the unique drivers shaping our decisions and priorities.

Curious about exploring Assessments such as Motivators, DISC, EIQ, and beyond? Discover the possibilities of accessing, customizing, and white-labeling your assessments by reaching out to our sales team now for more information and opportunities

https://www.assessments24x7.com/contact

#Motivators #SelfAwareness #Assessments #DISC #EIQ #Assessments24x7`,
                    postCategory: 'Holidays'
                },
                {
                    id: 8,
                    title: 'Holidays: Gift Shopping WITH the Four DISC Styles - LI-IG',
                    canvaLink: 'https://www.canva.com/design/DAF2rZlTJMI/KTYoQojqkoCXQDdJJ_yi-A/view?utm_content=DAF2rZlTJMI&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink&mode=preview',
                    imageUrl: 'https://cdn.assessments24x7.com/file/assessments24x7-media/social-media-templates/33TemplateImage.png',
                    templateSize: '1200 x 1200',
                    linkedPostAs: 'Document',
                    instaPostAs: 'Multiple Images',
                    ctaLink: '',
                    caption: `How does your DISC Style affect your holiday shopping?
Are you an online shopping aficionado, or do you relish the in-store experience? Let us know in the comments below!

#DISC #DISCStyles #DISCAssessments #LeadershipDevelopment #Businessdevelopment #Coaching #DISCCertification #ContinuingEducation #Assessments24x7 #Selfawareness #emotionalintelligence #Communicationtips #Assessments`,
                    postCategory: 'Holidays'
                },
                {
                    id: 9,
                    title: 'SuperBowl Teaser Post - LI - IG',
                    canvaLink: 'https://www.canva.com/design/DAF8M6wJlE0/zxYM45bDJ7Z6NcFCu-NkEg/view?utm_content=DAF8M6wJlE0&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink&mode=preview',
                    imageUrl: 'https://cdn.assessments24x7.com/file/assessments24x7-media/social-media-templates/50TemplateImage.png',
                    templateSize: '1200 x 1200',
                    linkedPostAs: 'Image',
                    instaPostAs: 'Image',
                    ctaLink: '',
                    caption: `Curious about how each DISC Style could shine during your Super Bowl watch party? From the strategic ‘D’ to the social ‘I’ – we’ve got it all covered tomorrow! So STAY TUNED… Now, are you team Chiefs or 49ers? 🎉🔥

#DISCStyles #Superbowl #executivecoaching #DISCTraining #GameDayInsights #StayTuned #CommunicationStyles #DISCInsights #DISCAssessment #DISCStyle #DISCTips #Assessments24x7📣🏆`,
                    postCategory: 'Holidays'
                },
                {
                    id: 10,
                    title: 'Super Bowl Post - 2',
                    canvaLink: 'https://www.canva.com/design/DAF8QYqrnkg/7lTeTGxMxjAPZYvVuFZnYw/view?utm_content=DAF8QYqrnkg&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink&mode=preview',
                    imageUrl: 'https://cdn.assessments24x7.com/file/assessments24x7-media/social-media-templates/51TemplateImage.png',
                    templateSize: '1200 x 1200',
                    linkedPostAs: 'Video',
                    instaPostAs: 'Video',
                    ctaLink: '',
                    caption: `Joining a Superbowl watch party this weekend?! With over 100 million people planning to watch the big game, we're curious about how each DISC Style might steal the show. Ever noticed those few who'd jump into the TV if they could? Check out the video as we decode the behavioral playbook and consider how these styles might even show up on the field in different positions. Comment your DISC Style below! 🏈🎉 #SuperBowlStyle #DISCdecoded #PartyPlaybook #DISCStyles #Superbowl #executivecoaching #DISCTraining #GameDayInsights #CommunicationStyles #DISCInsights #DISCAssessment #DISCStyle #DISCTips #Assessments24x7`,
                    postCategory: 'Holidays'
                },
                {
                    id: 11,
                    title: 'Women\'s Day Post - LI-IG',
                    canvaLink: 'https://www.canva.com/design/DAF_KF8VsPg/y1Yfdfv4JFJEk20ARPQR_w/view?utm_content=DAF_KF8VsPg&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink&mode=preview',
                    imageUrl: 'https://cdn.assessments24x7.com/file/assessments24x7-media/social-media-templates/56TemplateImage.png',
                    templateSize: '1200 x 1200',
                    linkedPostAs: 'Image',
                    instaPostAs: 'Image',
                    ctaLink: '',
                    caption: `💫 Belated International Women’s Day Celebration!
At Assessments 24x7, we celebrate women every day, and we’re proud that 70% of our team consists of amazing women—12 inspiring females and 5 equally amazing males. If you’re part of our Assessments 24x7 family, you’ve likely had the privilege of working with some of them.

And the celebration doesn’t stop here! 🎉Over the next 2 months, join us as we dive deep into 9 proven reasons why DISC Assessments are game-changers, providing valuable insights and practical tips! 💡

Excited to learn more about DISC Assessments? Like this post! 👍

#WomenInBusiness #WomenLeaders #DiversityandInclusion
#Leadership #WorkplaceDiversity #DISCAssessments #Assessments #DISCCertifiction #Assessments24x7`,
                    postCategory: 'Holidays'
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
            return caption.length > 180 ? caption.substring(0, 180) + '...' : caption;
        },
        isCaptionTruncated(caption) {
            const maxLength = 180;
            return caption.length > maxLength;
        },
    },
    head() {
        return {
            title: 'Social Media Templates - Holidays | Assessments 24x7',
            meta: [
                {
                    hid: 'description',
                    name: 'description',
                    content: 'Enhance your social media presence using our branded templates on Canva. Customize these professionally crafted designs to incorporate your preferred language, logos, and more within your Canva Pro Account. Leverage the provided information exclusively for branding guidance, maintaining authenticity by avoiding verbatim copying. Establish credibility and captivate your audience with visually stunning content that resonates. Elevate your brand effortlessly!'
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