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
                <h1>DISC ASSESSMENTS</h1>
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
                                    <h4 class="templateTitle">{{ post.title }}</h4>
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
            topRowTemplates: [
                { name: 'DISC Assessments', url: '/resources/disc-assessments' },
                { name: 'DISC General Knowledge', url: '/resources/disc-general' },
                { name: 'Promotional', url: '/resources/promotional' },
            ],
            bottomRowTemplates: [
                { name: 'Holidays', url: '/resources/holidays' },
                { name: 'Educational', url: '/resources/educational' },
                { name: 'Humor', url: '/resources/humor' },
                { name: 'Inspirational', url: '/resources/inspirational' },
            ],
            posts: [
                {
                    id: 1,
                    title: 'DISC Assessments: 4 Reasons to choose DISC over other available Assessments - LI-IG',
                    imageUrl: '/templateImage.png',
                    templateSize: '1200 x 1200',
                    linkedPostAs: 'Document',
                    instaPostAs: 'Multiple Images',
                    ctaLink: 'http://www.assessments24x7.com/',
                    caption: 'There are lots of factors to consider when selecting an assessment for your organization. Here are four great ones for considering the DISC assessment! #disc #discassessment #coaching #hiring #humanresources',
                    postCategory: 'disc assessments'
                },
                {
                    id: 2,
                    title: 'DISC Assessments: 4 Reasons to choose DISC over other available Assessments - IG',
                    imageUrl: '/templateImage2.png',
                    templateSize: '1080 x 1920',
                    linkedPostAs: '',
                    instaPostAs: 'Reel',
                    ctaLink: 'http://www.assessments24x7.com/',
                    caption: 'There are lots of factors to consider when selecting an assessment for your organization. Here are four great ones for considering the DISC assessment! #disc #discassessment #coaching #hiring #humanresources',
                    postCategory: 'disc assessments'
                },
                {
                    id: 3,
                    title: 'Can you Adapt? - LI-IG',
                    imageUrl: '/templateImage.png',
                    templateSize: '1200 x 1200',
                    linkedPostAs: 'Image',
                    instaPostAs: 'Image',
                    ctaLink: '',
                    caption: `DISC is all about understanding behavioral styles so that you can more easily adapt to the styles of others. Here's an #exercise to get you to think about adapting physically. After you're done, give some thought to OTHER ways you might want to start adapting.

How well do you Adapt? 💭
Take 2 minutes to step out of your comfort zone:
Get a pen or pencil. ✏
Grab a piece of paper. 📃
Write your name with your dominant hand. ✍
Now, try it with your non-dominant hand.✍

Did it feel a bit unusual, but you still managed? The initial discomfort is natural, but remember, we all have the ability to adapt – especially when it comes to different DISC Behavioral Styles in various forms of communication (emails, texts, meetings, etc). 📝💪

Give some thought to a meeting, phone call, or email coming up in your to-do list ... How can you adapt your communication style to make it easier for the recipient to understand you? Give an example in the comment for extra points! 😉

#CommunicationFlexibility #disc #DISCstyles`,
                    postCategory: 'disc assessments'
                },
                {
                    id: 4,
                    title: 'Leveraging the Power of DISC for Coaching Success - LI or IG',
                    imageUrl: '/templateImage.png',
                    templateSize: '1200 x 1200',
                    linkedPostAs: 'Video',
                    instaPostAs: 'Video',
                    ctaLink: 'http://www.assessments24x7.com/',
                    caption: `As a coach, you may find yourself at a crossroads with the multitude of challenges your Clients can bring you. DISC is an indispensable tool that every coach should possess when navigating these complexities.

For 20+ years, we have provided Coaches with the tools to optimize their hiring processes and maximize performance. Learn more below about how you could be utilizing DISC for Coaching success.

🚀Enhance Communication: Utilize DISC to improve communication skills by understanding different styles, fostering better relationships, and enhancing collaboration.

🚀Develop Leadership: Employ DISC assessments to identify leaders’ strengths and growth areas, enabling coaches to create tailored development plans for executive success.

🚀Build Teams: Apply DISC to improve team dynamics by understanding members’ Behavioral styles and proactively addressing potential conflicts.

🚀Resolve Conflicts: Leverage DISC for effective resolution of corporate conflicts, mediating disputes, and promoting harmonious working relationships.

🚀Enhance Performance: Identify and address areas of struggle due to personality-job mismatches, improving performance and job satisfaction.

🚀Guide Career Decisions: Utilize DISC assessments to guide executives in making informed career decisions, aligning roles with their natural inclinations and preferences.

🚀Foster Personal Growth: Beyond business, DISC facilitates personal growth by helping clients understand strengths and areas for improvement, promoting self-awareness and self-improvement.

#businesssuccess #coachingexcellence #discstyles #growthmindset #Coaching #professionaldevelopment`,
                    postCategory: 'disc assessments'
                },
                {
                    id: 5,
                    title: 'Leveraging the Power of DISC for Coaching Success - IG',
                    imageUrl: '/templateImage2.png',
                    templateSize: '1080 x 1920',
                    linkedPostAs: '',
                    instaPostAs: 'Reel',
                    ctaLink: 'http://www.assessments24x7.com/',
                    caption: `As a coach, you may find yourself at a crossroads with the multitude of challenges your Clients can bring you. DISC is an indispensable tool that every coach should possess when navigating these complexities.

For 20+ years, we have provided Coaches with the tools to optimize their hiring processes and maximize performance. Learn more below about how you could be utilizing DISC for Coaching success.

🚀Enhance Communication: Utilize DISC to improve communication skills by understanding different styles, fostering better relationships, and enhancing collaboration.

🚀Develop Leadership: Employ DISC assessments to identify leaders’ strengths and growth areas, enabling coaches to create tailored development plans for executive success.

🚀Build Teams: Apply DISC to improve team dynamics by understanding members’ Behavioral styles and proactively addressing potential conflicts.

🚀Resolve Conflicts: Leverage DISC for effective resolution of corporate conflicts, mediating disputes, and promoting harmonious working relationships.

🚀Enhance Performance: Identify and address areas of struggle due to personality-job mismatches, improving performance and job satisfaction.

🚀Guide Career Decisions: Utilize DISC assessments to guide executives in making informed career decisions, aligning roles with their natural inclinations and preferences.

🚀Foster Personal Growth: Beyond business, DISC facilitates personal growth by helping clients understand strengths and areas for improvement, promoting self-awareness and self-improvement.

#businesssuccess #coachingexcellence #discstyles #growthmindset #Coaching #professionaldevelopment`,
                    postCategory: 'disc assessments'
                },
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
    display: flex;
    flex-direction: row;
}

.image-column {
    flex-basis: 20%;
    padding: 10px;
    height: 100%;
    text-align: center;
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

@media (max-width: 1155px) {}
</style>