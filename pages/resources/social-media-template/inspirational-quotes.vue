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
                                provided exclusively for branding and language guidance; refrain from copying it
                                verbatim.
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
                <h1>Inspirational Quotes</h1>
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
                    title: 'Quote: Ernest Hemingway - Listening - LI-IG',
                    canvaLink: 'https://www.canva.com/design/DAF1c3guqws/fSos6hgatebax-vIvamtEg/view?utm_content=DAF1c3guqws&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink&mode=preview',
                    imageUrl: 'https://cdn.assessments24x7.com/file/assessments24x7-media/social-media-templates/7TemplateImage.png',
                    templateSize: '1200 x 1200',
                    linkedPostAs: 'Image',
                    instaPostAs: 'Image',
                    ctaLink: '',
                    caption: `Do you listen to respond or to UNDERSTAND? They are very different ways of listening!

#theplatinumrule #DISC #listentounderstand`,
                    postCategory: 'Inspirational Quotes'
                },
                {
                    id: 2,
                    title: 'Quote: Dr. Tony Adapting Quote - LI-IG',
                    canvaLink: 'https://www.canva.com/design/DAF0JQhCwp8/owpMXAuPApBtR9_ReCJJLw/view?utm_content=DAF0JQhCwp8&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink&mode=preview',
                    imageUrl: 'https://cdn.assessments24x7.com/file/assessments24x7-media/social-media-templates/14TemplateImage.png',
                    templateSize: '1200 x 1200',
                    linkedPostAs: 'Image',
                    instaPostAs: 'Image',
                    ctaLink: '',
                    caption: `Embrace a new week with the right mindset! 💪✨

By shifting our attitudes, we unlock the power to thrive in any situation. 🚀



#MotivationMonday #Adaptability #PositiveAttitude #PersonalGrowth`,
                    postCategory: 'Inspirational Quotes'
                },
                {
                    id: 3,
                    title: 'Quote: Dr. Tony on Sales - LI-IG',
                    canvaLink: 'https://www.canva.com/design/DAF0KtiaA5U/Ms_m9fWY215EqDPWbJkatQ/view?utm_content=DAF0KtiaA5U&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink&mode=preview',
                    imageUrl: 'https://cdn.assessments24x7.com/file/assessments24x7-media/social-media-templates/18TemplateImage.png',
                    templateSize: '1200 x 1200',
                    linkedPostAs: 'Image',
                    instaPostAs: 'Image',
                    ctaLink: '',
                    caption: `Empathy is gold.  
 Understanding your customers isn't just about facts and figures; it's about connecting on an emotional level. When your customers feel truly understood, that's when the magic happens. 🛍️✨ #EmpathyInSales #CustomerConnection #DISCinSales #DISC #Communication`,
                    postCategory: 'Inspirational Quotes'
                },
                {
                    id: 4,
                    title: 'Quote: Teams - LI-IG',
                    canvaLink: 'https://www.canva.com/design/DAF0K6pIl-Q/SQHY1VAwUQb292ZqznLDZA/view?utm_content=DAF0K6pIl-Q&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink&mode=preview',
                    imageUrl: 'https://cdn.assessments24x7.com/file/assessments24x7-media/social-media-templates/22TemplateImage.png',
                    templateSize: '1200 x 1200',
                    linkedPostAs: 'Video',
                    instaPostAs: 'Video',
                    ctaLink: '',
                    caption: `Diversity of Styles on a Team = Enhanced Team Dynamics, Creativity, and Resilience!

#MondayMotivation #TeamDiversity #NewWeekMindset #DISC`,
                    postCategory: 'Inspirational Quotes'
                },
                {
                    id: 5,
                    title: 'Years of Struggle quote - LI - IG',
                    canvaLink: 'https://www.canva.com/design/DAF0s4ox7WI/9VKnFvPXH-DOp9yPgykCgw/view?utm_content=DAF0s4ox7WI&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink&mode=preview',
                    imageUrl: 'https://cdn.assessments24x7.com/file/assessments24x7-media/social-media-templates/28TemplateImage.png',
                    templateSize: '1200 x 1200',
                    linkedPostAs: 'Image',
                    instaPostAs: 'Image',
                    ctaLink: '',
                    caption: `Thanksgiving week sparks reflection. In the midst of challenges, there's a unique beauty. Gratitude transforms struggle into strength. What's a pivotal challenge you've conquered that shaped your path? Share your reflections below.

#Thanksgiving #ProfessionalGrowth #Growthminset #MotivationMonday #Assessments24x7`,
                    postCategory: 'Inspirational Quotes'
                },
                {
                    id: 6,
                    title: 'Stephen Covey Quote - LI - IG',
                    canvaLink: 'https://www.canva.com/design/DAF1X9_2EOU/XhgNpMj2W7nBKoE0NI-Zag/view?utm_content=DAF1X9_2EOU&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink&mode=preview',
                    imageUrl: 'https://cdn.assessments24x7.com/file/assessments24x7-media/social-media-templates/30TemplateImage.png',
                    templateSize: '1200 x 1200',
                    linkedPostAs: 'Image',
                    instaPostAs: 'Image',
                    ctaLink: '',
                    caption: `As we reflect on the past and plan for the future, remember it's never too late to make empowering choices. Here's to a year of growth, resilience, and continuous improvement! 🚀 What decisions will shape your path in 2023?

#YearEndReflections #EmpowerYourJourney #Continuingeducation #Assessments24x7 #Growthmindset #MotivationMonday`,
                    postCategory: 'Inspirational Quotes'
                },
                {
                    id: 7,
                    title: 'Quote on Authenticity - LI/IG',
                    canvaLink: 'https://www.canva.com/design/DAF2rkr3Bik/pSfkyKEHDdMXKmINZ5kMDg/view?utm_content=DAF2rkr3Bik&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink&mode=preview',
                    imageUrl: 'https://cdn.assessments24x7.com/file/assessments24x7-media/social-media-templates/32TemplateImage.png',
                    templateSize: '1200 x 1200',
                    linkedPostAs: 'Image',
                    instaPostAs: 'Image',
                    ctaLink: '',
                    caption: `Ever feel drowned in the business mainstream? It's like wading through a crowded marketplace where everything tends to blend...
But let's talk real strategy: You're NOT in the game to blend in; you're here to STAND OUT. Take a cue from the greats—successful brands aren't trying to mimic others. They're embracing their uniqueness, and that's the secret sauce. 🎇

Your authentic self is not just a differentiator; it's your path to unparalleled success. What will you be doing to differentiate yourself in #2024?

#DISCCertification #EIQCertification #MotivatorsCertification #ContinuingEducation #Businessdevelopment #Leadershipdevelopment
#Entreprenship #Authenticity #StandOut #ContinuingEducation #DISC #Assessments #Assessments24x7 #Coaching`,
                    postCategory: 'Inspirational Quotes'
                },
                {
                    id: 8,
                    title: 'Kindness Quote - LI - IG',
                    canvaLink: 'https://www.canva.com/design/DAF3VVs9JKQ/cm9dIrXVcLsF3FU-FXhLyg/view?utm_content=DAF3VVs9JKQ&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink&mode=preview',
                    imageUrl: 'https://cdn.assessments24x7.com/file/assessments24x7-media/social-media-templates/36TemplateImage.png',
                    templateSize: '1200 x 1200',
                    linkedPostAs: 'Image',
                    instaPostAs: 'Image',
                    ctaLink: '',
                    caption: `Kindness -
It’s the simplest yet most impactful thing you can do and it costs nothing.
- A smile
- A kind word
- A helping hand
All can make someone’s day.

#kindness #Selfgrowth #MotivationMonday #DISC #Respectfulcommunications #Leadership #Assessments24x7`,
                    postCategory: 'Inspirational Quotes'
                },
                {
                    id: 9,
                    title: 'Small Steps Quote - LI - IG',
                    canvaLink: 'https://www.canva.com/design/DAF4GsYcTJk/uJlDPiDfHgqENfahmEvS4Q/view?utm_content=DAF4GsYcTJk&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink&mode=preview',
                    imageUrl: 'https://cdn.assessments24x7.com/file/assessments24x7-media/social-media-templates/38TemplateImage.png',
                    templateSize: '1200 x 1200',
                    linkedPostAs: 'Image',
                    instaPostAs: 'Image',
                    ctaLink: '',
                    caption: `Monumental actions, while impressive, often lack sustainability. Embracing the power of small, consistent steps not only builds momentum and resilience but also allows for adaptability, ensuring lasting and meaningful change on the journey toward our goals. #SmallStepsBigImpact #SustainableSuccess #Assessments24x7 #Growthmindset #2024 #Moveforward
19w`,
                    postCategory: 'Inspirational Quotes'
                },
                {
                    id: 10,
                    title: 'Saying No to Others and Yes to Yourself - LI/IG',
                    canvaLink: 'https://www.canva.com/design/DAF41PDcrh4/CjCMhzBM8-B95sUYOIYnew/view?utm_content=DAF41PDcrh4&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink&mode=preview',
                    imageUrl: 'https://cdn.assessments24x7.com/file/assessments24x7-media/social-media-templates/40TemplateImage.png',
                    templateSize: '1200 x 1200',
                    linkedPostAs: 'Image',
                    instaPostAs: 'Image',
                    ctaLink: '',
                    caption: `Mastering the art of saying no can be a strategic act of self-care. Tune in to each request, discern your core values, and be ready for the potential discomfort that comes with staying true to yourself. Moving through these moments of disappointment requires resilience, but it's in these instances that your authenticity truly shines.

Propose alternatives with boldness, crafting offers that seamlessly align with your true self. Maintain an open line of communication, fostering understanding and collaboration. The journey of learning to prioritize your affirmations, even if it means declining requests from others, is a process that solidifies your individuality.

Embrace the concept of the positive no—an affirmation that not only strengthens your sense of self-worth but also cultivates authenticity within your professional and personal relationships.

Drop a 🌟 in the comments if you'll be saying "Yes" to yourself a little more often in 2024.

#Positivecommunications #DISC #Relationships #authenticity #Effectivecommunication #Assessments24x7`,
                    postCategory: 'Inspirational Quotes'
                },
                {
                    id: 11,
                    title: 'Quote: Dr. Tony on Communication - LI-IG',
                    canvaLink: 'https://www.canva.com/design/DAF5Sgxss_Y/77tCKEnWjR2DxRcbI2-OOg/view?utm_content=DAF5Sgxss_Y&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink&mode=preview',
                    imageUrl: 'https://cdn.assessments24x7.com/file/assessments24x7-media/social-media-templates/41TemplateImage.png',
                    templateSize: '1200 x 1200',
                    linkedPostAs: 'Image',
                    instaPostAs: 'Image',
                    ctaLink: '',
                    caption: `Elevating your skills = elevating your success.
💬🚀 #EffectiveCommunication #ProfessionalGrowth #Personalgrowth #ContinuedEducation #DISCCertifiation #DISCAssessment #Behavioralstyle #Assessments24x7`,
                    postCategory: 'Inspirational Quotes'
                },
                {
                    id: 12,
                    title: 'Collective Learning Quote - LI - IG',
                    canvaLink: 'https://www.canva.com/design/DAF6DDIV0Z8/aGjlVNSeMfjNQO61XdxVQQ/view?utm_content=DAF6DDIV0Z8&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink&mode=preview',
                    imageUrl: 'https://cdn.assessments24x7.com/file/assessments24x7-media/social-media-templates/44TemplateImage.png',
                    templateSize: '1200 x 1200',
                    linkedPostAs: 'Image',
                    instaPostAs: 'Image',
                    ctaLink: '',
                    caption: `Actively engage with individuals whose intelligence surpasses yours.

#DISC #Communications #CollectiveLearnning #ContinuedEducation #Assessments24x7`,
                    postCategory: 'Inspirational Quotes'
                },
                {
                    id: 13,
                    title: 'Talent Quote - LI - IG',
                    canvaLink: 'https://www.canva.com/design/DAF6m9qDlaY/REhRvzuzXxHnOXc9MZRErQ/view?utm_content=DAF6m9qDlaY&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink&mode=preview',
                    imageUrl: 'https://cdn.assessments24x7.com/file/assessments24x7-media/social-media-templates/46TemplateImage.png',
                    templateSize: '1200 x 1200',
                    linkedPostAs: 'Image',
                    instaPostAs: 'Image',
                    ctaLink: '',
                    caption: `Talent = Your multiplier 📈

#OrganizationalCulture #TeamSatisfaction #TalentAttraction #CorporateTraining #HRStrategies #EmployeeEngagement #LeadershipDevelopment #DISCModel #BusinessCulture #WorkplaceSuccess #TeamBuilding #CareerDevelopment s #Assessments24x7`,
                    postCategory: 'Inspirational Quotes'
                },
                {
                    id: 14,
                    title: 'Affirmation about adaptability and growth Quote - LI - IG',
                    canvaLink: 'https://www.canva.com/design/DAF7Rg7eDDk/oWBU-oESmrnzEprTDDIzOA/view?utm_content=DAF7Rg7eDDk&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink&mode=preview',
                    imageUrl: 'https://cdn.assessments24x7.com/file/assessments24x7-media/social-media-templates/47TemplateImage.png',
                    templateSize: '1200 x 1200',
                    linkedPostAs: 'Image',
                    instaPostAs: 'Image',
                    ctaLink: '',
                    caption: `New week, fresh mindset. 🚀 Happy Monday

#Motivationmonday #Adaptability #Growthmindset #Continuedlearning #SuccessTips #Assessments24x7`,
                    postCategory: 'Inspirational Quotes'
                },
                {
                    id: 15,
                    title: 'Start where you are quote - IG-LI',
                    canvaLink: 'https://www.canva.com/design/DAF77E-6SAw/NiaG4Ki-2mjoOY71cOyfBQ/view?utm_content=DAF77E-6SAw&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink&mode=preview',
                    imageUrl: 'https://cdn.assessments24x7.com/file/assessments24x7-media/social-media-templates/49TemplateImage.png',
                    templateSize: '1200 x 1200',
                    linkedPostAs: 'Video',
                    instaPostAs: 'Video',
                    ctaLink: '',
                    caption: `And just KEEP GOING 🚀

.

.

.

.

#BusinessDevelopment

#BusinessGrowth

#CareerDevelopment

#Continuedlearning`,
                    postCategory: 'Inspirational Quotes'
                },
                {
                    id: 16,
                    title: 'Dr. Tony - Adaptability Quote - LI - IG',
                    canvaLink: 'https://www.canva.com/design/DAF9a2-SxW8/xjHb4DK93rRcYSewAq3diQ/view?utm_content=DAF9a2-SxW8&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink&mode=preview',
                    imageUrl: 'https://cdn.assessments24x7.com/file/assessments24x7-media/social-media-templates/54TemplateImage.png',
                    templateSize: '1200 x 1200',
                    linkedPostAs: 'Image',
                    instaPostAs: 'Image',
                    ctaLink: '',
                    caption: `The bottom line.

#Communication #Management #Humanresources #deeplearning #minfdullness`,
                    postCategory: 'Inspirational Quotes'
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
            title: 'Social Media Templates - Inspirational Quotes | Assessments 24x7',
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