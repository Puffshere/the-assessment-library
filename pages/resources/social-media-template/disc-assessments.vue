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
                    title: 'DISC Assessments: 4 Reasons to choose DISC over other available Assessments - LI-IG',
                    canvaLink: 'https://www.canva.com/design/DAFzoZu0gJ8/4CS_DcLTSn6N8USWoxvOmg/view?utm_content=DAFzoZu0gJ8&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink&mode=preview',
                    imageUrl: 'https://cdn.assessments24x7.com/file/assessments24x7-media/social-media-templates/1aTemplateImage.png',
                    templateSize: '1200 x 1200',
                    linkedPostAs: 'Video',
                    instaPostAs: 'Video',
                    ctaLink: 'http://www.assessments24x7.com/',
                    caption: 'There are lots of factors to consider when selecting an assessment for your organization. Here are four great ones for considering the DISC assessment! #disc #discassessment #coaching #hiring #humanresources',
                    postCategory: 'DISC: Assessments'
                },
                {
                    id: 2,
                    title: 'DISC Assessments: 4 Reasons to choose DISC over other available Assessments - IG',
                    canvaLink: 'https://www.canva.com/design/DAFs8e5O3ow/xrHJMh1V2e1PZRcVZnTX6Q/view?utm_content=DAFs8e5O3ow&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink&mode=preview',
                    imageUrl: 'https://cdn.assessments24x7.com/file/assessments24x7-media/social-media-templates/1bTemplateImage.png',
                    templateSize: '1080 x 1920',
                    linkedPostAs: '',
                    instaPostAs: 'Reel',
                    ctaLink: 'http://www.assessments24x7.com/',
                    caption: 'There are lots of factors to consider when selecting an assessment for your organization. Here are four great ones for considering the DISC assessment! #disc #discassessment #coaching #hiring #humanresources',
                    postCategory: 'DISC: Assessments'
                },
                {
                    id: 3,
                    title: 'Can you Adapt? - LI-IG',
                    canvaLink: 'https://www.canva.com/design/DAF1c0IX6-I/yEIKlkGveNRIr8032lka_w/view?utm_content=DAF1c0IX6-I&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink&mode=preview',
                    imageUrl: 'https://cdn.assessments24x7.com/file/assessments24x7-media/social-media-templates/8TemplateImage.png',
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
                    postCategory: 'DISC: Assessments'
                },
                {
                    id: 4,
                    title: 'Leveraging the Power of DISC for Coaching Success - LI or IG',
                    canvaLink: 'https://www.canva.com/design/DAF0JOaVsao/Mpu8aJmLAwII4N524qWlug/view?utm_content=DAF0JOaVsao&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink&mode=preview',
                    imageUrl: 'https://cdn.assessments24x7.com/file/assessments24x7-media/social-media-templates/9aTemplateImage.png',
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
                    postCategory: 'DISC: Assessments'
                },
                {
                    id: 5,
                    title: 'Leveraging the Power of DISC for Coaching Success - IG',
                    canvaLink: 'https://www.canva.com/design/DAFtyhMIM0o/84h-AOb63nf2F_ulWjXgOg/view?utm_content=DAFtyhMIM0o&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink&mode=preview',
                    imageUrl: 'https://cdn.assessments24x7.com/file/assessments24x7-media/social-media-templates/9bTemplateImage.png',
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
                    postCategory: 'DISC: Assessments'
                },
                {
                    id: 6,
                    title: 'Kids DISC Post - 1',
                    canvaLink: 'https://www.canva.com/design/DAF77qlAMnw/lFDlIlcaP4wXBRA3N1bckw/view?utm_content=DAF77qlAMnw&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink&mode=preview',
                    imageUrl: 'https://cdn.assessments24x7.com/file/assessments24x7-media/social-media-templates/57TemplateImage.png',
                    templateSize: '1200 x 1200',
                    linkedPostAs: 'Image',
                    instaPostAs: 'Image',
                    ctaLink: '',
                    caption: `Unleash children’s potential with our Kids DISC! 🚀
Explore their unique bird styles:
🦅 Eagle: Confident, decisive, and competitive.
🦜 Parrot: Energetic, sociable, and adventurous.
🕊️ Dove: Compassionate, nurturing, and empathetic.
🦉 Owl: Analytical, organized, and curious.

Empower your child’s growth with personalized insights!

Contact us now to discover how Kids DISC can ignite excellence amongst children today: https://www.assessments24x7.com/contact

#KidsDISC #UnlockPotential #ParentingTips #Teachers #Assessments #Assessmentsforkids #Assessments24x7`,
                    postCategory: 'DISC: Assessments'
                },
                {
                    id: 7,
                    title: '9 Proven Reason - 1. Hiring and Selection - LI - IG',
                    canvaLink: 'https://www.canva.com/design/DAF_Tv1JAI4/yrmTLGisVnj9tbp1FkyD6g/view?utm_content=DAF_Tv1JAI4&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink&mode=preview',
                    imageUrl: 'https://cdn.assessments24x7.com/file/assessments24x7-media/social-media-templates/59aTemplateImage.png',
                    templateSize: '1200 x 1200',
                    linkedPostAs: 'Video',
                    instaPostAs: 'Video',
                    ctaLink: '',
                    caption: `🚀 Ready to revolutionize your hiring process?

DISC assessments offer powerful insights into behavioral styles, guiding individuals towards roles that match their traits for success.

🔴 Dominance (D)
🟡 Influence (I)
🟢 Steadiness (S)
🔵 Conscientiousness (C)

Employers use DISC to evaluate team dynamics and candidate suitability, fostering growth and talent development. But before you go all in, it’s important to remember these key considerations:

🔍 Transparency: Inform candidates about the assessment's role and secure their consent.

🤝 Fair Hiring: Use DISC as one aspect of your evaluation process to avoid bias and decision-making solely based on it.

🌐 Accessibility: Ensure that both the assessment and hiring processes are inclusive and accessible to everyone.

🎓 Certified Expertise: Collaborate with certified professionals for accurate DISC interpretation.

🚀Reach out and learn more about how our Assessments can elevate your hiring game. https://www.assessments24x7.com/contact

#Hiring #Recruitment #Hiringprocess #recruiting #DISC #DISCAssessment #DISCCertification #ContinuedEducation #DataDrivenDecisions #Assessments24x7`,
                    postCategory: 'DISC: Assessments'
                },
                {
                    id: 8,
                    title: '9 Proven Reason - 2. Increase Sales - LI - IG',
                    canvaLink: 'https://www.canva.com/design/DAF_-GaS_wM/D42GmM1WldsqlPQt1peMSQ/view?utm_content=DAF_-GaS_wM&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink&mode=preview',
                    imageUrl: 'https://cdn.assessments24x7.com/file/assessments24x7-media/social-media-templates/59bTemplateImage.png',
                    templateSize: '1200 x 1200',
                    linkedPostAs: 'Video',
                    instaPostAs: 'Video',
                    ctaLink: '',
                    caption: `In Sales, self-awareness is without a doubt the first step in mastering effective communication, especially when navigating the diverse landscape of your prospect’s behavioral style. Here are 4 steps to use DISC to increase your sales:
🔍 Discover your own DISC behavioral style: Begin by understanding your own strengths, weaknesses, and communication preferences using the DISC assessment tool.
🎯 Identify the behavioral styles of your prospects: Develop a keen sense of observation to recognize subtle cues in written and body language that indicate your client’s DISC behavioral style. (Did you know... you often can tell a lot about one’s DISC style by their written LinkedIn Bio?)
✂️ Tailor your approach: Armed with self-awareness and an understanding of your client’s behavioral style, adapt your communication style to resonate with their preferences.
🌟 Incorporate Dr. Tony Alessandra PhD’s golden rule: “Treat people how THEY want to be treated.” Use your newfound understanding to communicate in a manner that speaks directly to your client’s preferred language, fostering trust and deepening connections.

Ready to take your sales game to the next level? Talk to a dedicated DISC expert today to learn how Assessments can skyrocket your sales success! https://www.assessments24x7.com/contact

& continue to follow along as we continue to share the 9 proven reasons to use Assessments!

#SalesSuccess #SelfAwareness #DISCProfile #EffectiveCommunication #SalesTraining #Selling #Assessments #Assessments24x7`,
                    postCategory: 'DISC: Assessments'
                },
                {
                    id: 9,
                    title: '9 Proven Reason - 3. Create World Class Leaders - LI - IG',
                    canvaLink: 'https://www.canva.com/design/DAGCHOaokXc/IKSBAJd_AXwZbcgCJw9T8w/view?utm_content=DAGCHOaokXc&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink&mode=preview',
                    imageUrl: 'https://cdn.assessments24x7.com/file/assessments24x7-media/social-media-templates/59cTemplateImage.png',
                    templateSize: '1200 x 1200',
                    linkedPostAs: 'Video',
                    instaPostAs: 'Video',
                    ctaLink: '',
                    caption: `9 Proven Reasons to Use Assessments - #3: Elevate Your Leadership Game 🚀

If you’re already leveraging DISC, consider amplifying your insights with our Leadership Effectiveness 360° Assessment. Gain invaluable perspective into how OTHERS perceive your leadership. Enhance performance across all levels by identifying strengths, areas for improvement, and crafting personalized development plans. Empower your leaders to maximize their potential and propel your organization toward success. Check the comments below to see a sample report and contact us today for more information.

#LeadershipDevelopment #SelfImprovement #UnlockYourPotential #Datadrivendecisions #HR #Traininganddevelopment #Assessments #DISC #Leadership #360 #Assessments24x7`,
                    postCategory: 'DISC: Assessments'
                },
                {
                    id: 10,
                    title: '9 Proven Reason - 4. Increase Productivity - LI - IG',
                    canvaLink: 'https://www.canva.com/design/DAGD4nJo8gs/t2uvr21zcn5e3nTIqth8yA/view?utm_content=DAGD4nJo8gs&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink&mode=preview',
                    imageUrl: 'https://cdn.assessments24x7.com/file/assessments24x7-media/social-media-templates/59dTemplateImage.png',
                    templateSize: '1200 x 1200',
                    linkedPostAs: 'Video',
                    instaPostAs: 'Video',
                    ctaLink: '',
                    caption: `The key to high productivity? Motivation 🗝️

Just as DISC reveals behavior, Motivators uncover the why behind actions, reflecting our values and shaping decisions. A motivated workforce is key to success.

Our DISC & Motivators Assessment empowers businesses to understand and optimize motivation. Prioritizing employee motivation boosts bottom lines.

Ready to harness this power? DM us to connect with a dedicated specialist today to learn more and see a sample report for yourself (available in 10 languages). Link in comments below!

#DISC #Motivators #Assessment #Certification#WorkforceOptimization #MotivatorsAssessment #Certification #DISCProfile #Productivity #Motivation #Assessments24x7`,
                    postCategory: 'DISC: Assessments'
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
            title: 'Social Media Templates - DISC Assessments | Assessments 24x7',
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