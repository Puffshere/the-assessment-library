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
                <h1>Promotional</h1>
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
                    title: 'Assessments Certification: Learn From The Top Assessment Experts In The Industry - LI-IG',
                    canvaLink: 'https://www.canva.com/design/DAF0WmnZxW0/DnP1y9rvNe30ZSekmQ3fQQ/view?utm_content=DAF0WmnZxW0&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink&mode=preview',
                    imageUrl: 'https://cdn.assessments24x7.com/file/assessments24x7-media/social-media-templates/6TemplateImage.png',
                    templateSize: '1200 x 1200',
                    linkedPostAs: 'Image',
                    instaPostAs: 'Image',
                    ctaLink: 'https://www.assessments24x7.com/certifications/assessment',
                    caption: `There are sooo many great reasons to get certified! Here are just a few.`,
                    postCategory: 'Promotional'
                },
                {
                    id: 2,
                    title: 'Bet on Yourself with DISC Certification - LI-IG',
                    canvaLink: 'https://www.canva.com/design/DAF0JBRApr8/TXhkJ9yXnNz8iL5AKj9yjQ/view?utm_content=DAF0JBRApr8&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink&mode=preview',
                    imageUrl: 'https://cdn.assessments24x7.com/file/assessments24x7-media/social-media-templates/12aTemplateImage.png',
                    templateSize: '1200 x 1200',
                    linkedPostAs: 'Video',
                    instaPostAs: 'Video',
                    ctaLink: 'https://www.assessments24x7.com/contact',
                    caption: `Ready to Take Your Shot? Bet on yourself with DISC Certification.
Don't miss out on this opportunity to supercharge your career and relationships. Get in touch with a Senior Account Executive today to get started.

➡️ https://lnkd.in/g2CAaRtc

#DISC #DISCprofile #DISCcertification #coaching #communication`,
                    postCategory: 'Promotional'
                },
                {
                    id: 3,
                    title: 'Bet on Yourself with DISC Certification - IG',
                    canvaLink: 'https://www.canva.com/design/DAFvw0acs84/D-lMmjcYzrqgTjZQEj4pmQ/view?utm_content=DAFvw0acs84&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink&mode=preview',
                    imageUrl: 'https://cdn.assessments24x7.com/file/assessments24x7-media/social-media-templates/12bTemplateImage.png',
                    templateSize: '1080 x 1920',
                    linkedPostAs: '',
                    instaPostAs: 'Reel',
                    ctaLink: 'https://www.assessments24x7.com/contact',
                    caption: `Ready to Take Your Shot? Bet on yourself with DISC Certification.
Don't miss out on this opportunity to supercharge your career and relationships. Get in touch with a Senior Account Executive today to get started.

➡️ https://lnkd.in/g2CAaRtc

#DISC #DISCprofile #DISCcertification #coaching #communication`,
                    postCategory: 'Promotional'
                },
                {
                    id: 4,
                    title: 'DISC Blocks - LI-IG',
                    canvaLink: 'https://www.canva.com/design/DAF0Kz-4Mkw/i9Hxb5d9Ne5v3TEMTcv8BQ/view?utm_content=DAF0Kz-4Mkw&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink&mode=preview',
                    imageUrl: 'https://cdn.assessments24x7.com/file/assessments24x7-media/social-media-templates/20aTemplateImage.png',
                    templateSize: '1200 x 1200',
                    linkedPostAs: 'Image',
                    instaPostAs: 'Image',
                    ctaLink: 'https://store.assessments24x7.com/products/disc-blocks',
                    caption: `No Caption - Have only posted the Christmas Version`,
                    postCategory: 'Promotional'
                },
                {
                    id: 5,
                    title: 'DISC Blocks - Christmas Version - LI-IG',
                    canvaLink: 'https://www.canva.com/design/DAF0K0gtAT8/x00SwJY4MQXsDC2I4moEsw/view?utm_content=DAF0K0gtAT8&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink&mode=preview',
                    imageUrl: 'https://cdn.assessments24x7.com/file/assessments24x7-media/social-media-templates/20bTemplateImage.png',
                    templateSize: '1200 x 1200',
                    linkedPostAs: 'Image',
                    instaPostAs: 'Image',
                    ctaLink: 'https://store.assessments24x7.com/products/disc-blocks',
                    caption: `🎁 Introducing our DISC Blocks - the perfect stocking stuffers that will help
your team connect, communicate, and collaborate more effectively.

🚀 Enhance Communication: Stack your DISC Blocks to display your style and supercharge interactions.

🤝 Boost Team Dynamics: Understanding DISC styles minimizes conflicts and fuels teamwork.

🧠 Personalized Learning: Visual aids for meetings and training, fostering better results.

🌈 Stress Relief: Squishy and calming - a must-have for busy workdays.

This holiday, go the extra mile and give the gift of improved communication and collaboration. Order now at the link below or in our story before the season rushes in! 🎄🎉

🔗 Order Now: https://store.assessments24x7.com/products/disc-blocks

#TeamDevelopment #DISCBlocks #EffectiveCommunication #DISC #DISCStyle #traininganddevelopment #leadershipdevelopment #coaching #hr #businessdevelopment`,
                    postCategory: 'Promotional'
                },
                {
                    id: 6,
                    title: 'Reach Limitless Opportunities - DISC Certification - LI-IG',
                    canvaLink: 'https://www.canva.com/design/DAF0EwjBAfk/p_N428Nea71gF63_Yffjpg/view?utm_content=DAF0EwjBAfk&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink&mode=preview',
                    imageUrl: 'https://cdn.assessments24x7.com/file/assessments24x7-media/social-media-templates/26TemplateImage.png',
                    templateSize: '1200 x 1200',
                    linkedPostAs: 'Video',
                    instaPostAs: 'Video',
                    ctaLink: '',
                    caption: `Elevate your career with a distinct advantage by earning a professional Certification in the assessment industry. 🚀 Our flexible Certification program fits seamlessly into your schedule, allowing you to learn at your own pace, day or night. Whether you're considering a career change, aiming for a promotion, or venturing into a new industry, our core assessments - DISC, Motivators, and Emotional Intelligence - are versatile and applicable across diverse roles. #SHRM #HRCI #ATD #ICF approved, our Certifications empower you to stand out. 

Certified already? 
Share in the comments how DISC, Motivators, or EIQ Certification has made a difference in your professional journey and personal growth. 👩‍🎓👨‍🎓 

#CareerAdvancement #ProfessionalDevelopment #CertificationSuccess #Continuingeducation #DISC #Motivators #EIQ #EmotionalIntelligence #Assessments24x7`,
                    postCategory: 'Promotional'
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
            title: 'Social Media Templates - Promotional | Assessments 24x7',
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