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
                <h1>Humor</h1>
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
                    title: 'The Platinum Rule vs The Golden Rule - LI-IG',
                    canvaLink: 'https://www.canva.com/design/DAF0JPVVLkw/t4uqSYJhz_3BJ9L0xG6DGg/view?utm_content=DAF0JPVVLkw&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink&mode=preview',
                    imageUrl: 'https://cdn.assessments24x7.com/file/assessments24x7-media/social-media-templates/10TemplateImage.png',
                    templateSize: '1200 x 1200',
                    linkedPostAs: 'Image',
                    instaPostAs: 'Image',
                    ctaLink: '',
                    caption: `We've decided to implement "Casual Friday" on LinkedIn by lightening the mood a bit with some meme therapy! Have a great weekend!

#theplatinumrule #funnyfriday #CasualFridays"`,
                    postCategory: 'Humor'
                },
                {
                    id: 2,
                    title: `S's at sporting events - Li-IG`,
                    canvaLink: 'https://www.canva.com/design/DAF0JKbBegI/uiT53NmmCC2qrYTvz2xPKQ/view?utm_content=DAF0JKbBegI&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink&mode=preview',
                    imageUrl: 'https://cdn.assessments24x7.com/file/assessments24x7-media/social-media-templates/13TemplateImage.png',
                    templateSize: '1200 x 1200',
                    linkedPostAs: 'Image',
                    instaPostAs: 'Image',
                    ctaLink: '',
                    caption: `It's time for #casualfriday on LinkedIn! 😊 If you know someone who's an S Style, this should sound familiar. Tag your S Style friends and colleagues in the comments!`,
                    postCategory: 'Humor'
                },
                {
                    id: 3,
                    title: 'Best Boss - The Office - LI-IG',
                    canvaLink: 'https://www.canva.com/design/DAF0KkgmF4o/oze3l8REgdxPAaAaSRvuCQ/view?utm_content=DAF0KkgmF4o&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink&mode=preview',
                    imageUrl: 'https://cdn.assessments24x7.com/file/assessments24x7-media/social-media-templates/17TemplateImage.png',
                    templateSize: '1200 x 1200',
                    linkedPostAs: 'Image',
                    instaPostAs: 'Image',
                    ctaLink: '',
                    caption: `The Power of Frequent One-on-Ones in Leadership.

These one-on-ones are more than just a calendar appointment; they are an invaluable 
investment in your team's growth and success. Here's why:
Get Personal: Your team isn't just a bunch of worker bees; they're unique individuals. One-on-ones build personal connections, and that's your golden ticket to trust and camaraderie.
Development Central: One-on-ones give you the chance to chat about goals, performance, and growth. You're not just managing; you're guiding your team to be rock stars.
Chat It Out: These meetings create a safe space for your team to share thoughts and concerns. Listen up, offer support, and tackle challenges head-on.
Goals Aligned: You're not just managing people; you're leading a mission. Use one-on-ones to align personal objectives with your team and company goals.
High-Five Time: Recognize and appreciate your team's hard work. Regular high-fives create a positive and motivated workspace.
Problem-Solving Hub: Got issues? Use one-on-ones to collaborate and solve problems as a team.
Stay Agile: The world changes fast, and you need to keep up. One-on-ones help you stay adaptable and switch strategies as the game evolves.
In a nutshell, these meetings aren't just management; they're a commitment to your team's growth, happiness, and success. Be the leader who rocks the one-on-ones, and watch your team thrive.
#Leadership #OneonOnes #TeamSuccess`,
                    postCategory: 'Humor'
                },
                {
                    id: 4,
                    title: 'Funny Friday - Adaptability - LI/IG',
                    canvaLink: 'https://www.canva.com/design/DAF2Zy8Cd64/IBir0F4MKDkPM519gT1jwQ/view?utm_content=DAF2Zy8Cd64&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink&mode=preview',
                    imageUrl: 'https://cdn.assessments24x7.com/file/assessments24x7-media/social-media-templates/31TemplateImage.png',
                    templateSize: '1200 x 1200',
                    linkedPostAs: 'Image',
                    instaPostAs: 'Image',
                    ctaLink: '',
                    caption: `Happy Friday! 🎉 Let's dive into some DISC Adaptability with a touch of humor. (Did you know humor boosts brain function and productivity? It's true! 😊)

Discover the key to impactful communication by understanding your team's DISC styles. Adapting your DISC Style to match theirs will be the key to success. Here's a brief guide on how to adapt your communications with each DISC Style:

D - Dominant Style:
- Prioritize clarity and conciseness.
- Highlight task benefits and challenges.
I - Influence Style:
- Infuse friendliness and enthusiasm.
- Sprinkle in stories and humor to show personal interest.
S - Steadiness Style:
- Utilize a calm and gentle tone.
- Shower them with appreciation and empathy.
C - Conscientiousness Style:
- Emphasize accuracy and logic.
- Set clear expectations and guidelines.

Interested in seamlessly integrating DISC into your Organization or Client services? Assessments 24x7 has the knowledge and experience a business needs for integrating assessments into their organization. While DISC and Motivators are our recommended foundational assessments, we also have an extensive library of specialized assessments available via our industry-leading online platform to meet your needs from sales to coaching to leadership and much more. Contact us today to get started.`,
                    postCategory: 'Humor'
                },
                {
                    id: 5,
                    title: 'Funny Friday - D Adaptability and Mr. Rodgers - LI/IG',
                    canvaLink: 'https://www.canva.com/design/DAF3EOd2_Lw/K1YD0N51PWtHOLSRW0WXiQ/view?utm_content=DAF3EOd2_Lw&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink&mode=preview',
                    imageUrl: 'https://cdn.assessments24x7.com/file/assessments24x7-media/social-media-templates/35TemplateImage.png',
                    templateSize: '1200 x 1200',
                    linkedPostAs: 'Video',
                    instaPostAs: 'Video',
                    ctaLink: '',
                    caption: `Happy (Funny) Friday, folks! 🎉

Question......
What are you actively doing to make your emails STICK with the recipient? Whether you're emailing clients, prospects, colleagues, or friends, increase your messages' chances of standing out and making an impact by adjusting your DISC Style to align with theirs.

For S-style personalities, think inclusive, dependable, and sincere when emailing them:
- Start with a polite greeting and end warmly.
- Keep it friendly and personable.
- Show interest in their opinion.
- Be crystal clear about details and expectations.
- Don't push; invite questions and offer follow-up info.

Level up your professional relationships with DISC! Explore becoming a Certified Practitioner to seamlessly integrate DISC into your organization's communication model. Let's chat about it - reach out to our specialists today: https://www.assessments24x7.com/contact 👥

🚀 #DISCModel #TeamCommunication #Adaptability #FridayFun #DISC #Motivators #Communications #Assessments24x7 #ContinuedEducation #SHRM #ATD #HRCI #CCE Approved #DataDrivenDecisions #meme #Funny #businesscoaching`,
                    postCategory: 'Humor'
                },
                {
                    id: 6,
                    title: 'Team Dynamics and Problem Solving - Funny Friday - LI - IG',
                    canvaLink: 'https://www.canva.com/design/DAF5r9JBZiM/aQCm995H6BjfYcQqNy48XQ/view?utm_content=DAF5r9JBZiM&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink&mode=preview',
                    imageUrl: 'https://cdn.assessments24x7.com/file/assessments24x7-media/social-media-templates/43TemplateImage.png',
                    templateSize: '1200 x 1200',
                    linkedPostAs: 'Image',
                    instaPostAs: 'Image',
                    ctaLink: '',
                    caption: `Differences in DISC Style can bring a ZEST to problem-solving. The whole can be more than the sum of the parts. Bridging the gaps between style differences not only enhances collaboration but also injects a dynamic energy into team efforts that similar styles absolutely would not.

We have all collaborated with individuals with a contrasting Style to our own. While the initial adjustment period may be required to establish a cohesive working relationship, once the synergy is found, it opens the door to elevated levels of productivity and success.

If this resonates with your experiences, give it a thumbs up and share with a colleague!

#DISC #DISCAssessment #Teamdynamics #Effectivecommunication #Adaptability #Assessments24x7 #DISCCertification #Datadrivendecisions`,
                    postCategory: 'Humor'
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
            title: 'Social Media Templates - Humor | Assessments 24x7',
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