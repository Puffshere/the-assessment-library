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
                <h1>Educational</h1>
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
                    title: `Tony's Podcast: First 50 Seconds of Tony's Podcast - LI-IG`,
                    canvaLink: 'https://www.canva.com/design/DAFzrtc_3Uo/OWXX_S0COus4y62U5vCcHw/view?utm_content=DAFzrtc_3Uo&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink&mode=preview',
                    imageUrl: '/3TemplateImage.png',
                    templateSize: '1200 x 1200',
                    linkedPostAs: 'Video',
                    instaPostAs: 'Video',
                    ctaLink: 'https://www.youtube.com/watch?v=zpXJ4d6r34g',
                    caption: `Tony Alessandra PhD recently sat down for a conversation with Michael Maximoff for his podcast. Catch the whole convo at the link below!`,
                    postCategory: 'Educational'
                },
                {
                    id: 2,
                    title: '10 Tips for Effective listening',
                    canvaLink: 'https://www.canva.com/design/DAF0Krif9zo/yjTO2BC06_hGo6w1ruxX-A/view?utm_content=DAF0Krif9zo&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink&mode=preview',
                    imageUrl: '/16TemplateImage.png',
                    templateSize: '1200 x 1200',
                    linkedPostAs: 'Image',
                    instaPostAs: 'Image',
                    ctaLink: '',
                    caption: `👂 Listen actively. 🗣️ Speak wisely!
🤝 Improve your communication skills with these ten tips from Tony Alessandra PhD.

You'll listen better and be listened to if you practice these TIPS:

1. Let others tell their own stories first. By letting them speak first, you save time. When their interests are revealed, you can tailor your discussion to their needs, goals, and objectives and stop wasting time volleying sentences that take much longer to hear. You'll get your turn.

2. It is impossible to listen and talk at the same time. Not interrupting allows the other person to keep their train of thought. Why not wait until the speaker's point is made? Then you will have your chance.

3. Listen for the main ideas. Specific facts are only important as they pertain to the main theme. Relate stated facts to the speaker.
Ask yourself: "What is the speaker getting at?" Or "What is his point?" Then get feedback. If you guess correctly, your understanding is enhanced, and your attention is increased. If you are incorrect, you learn from your mistake.

4. Fight off distractions. Train yourself to listen carefully to your customer's words despite external distractions (ringing telephone, passersby, or other office noise). Focus your attention on the words, ideas, feelings, and underlying intent. Improve your power of concentration to block out external and internal distractions and attend totally to the speaker.

5. React to the message, not the person. Don't allow your mental impression of the speaker to influence your interpretation of the message. Good thoughts, concepts, and arguments can come from some of your least favorite people.

6. Use feedback. Constantly try to check your understanding of what you hear. Do not only hear what you want to hear.

7. Try not to be critical, either mentally or verbally, of the other person's point of view. Allow the speaker plenty of time to fully finish their train of thought. You might find that what you were initially going to disagree with wasn't a bad idea after all. Keep an open mind.

8. Listen attentively. Face the speaker with uncrossed arms and legs; lean slightly forward. Establish eye contact. Use affirmative head nods and appropriate facial expressions when called for, but don't overdo it.

9. Create a positive listening environment. Shoot for a private atmosphere away from sources of distraction.

10. Ask questions. Ask open-ended questions to allow the speaker to express his feelings and thoughts. More than a simple yes or no is required. "How can I help you?" "Where do we go from here?" Clarifying questions seek information by restating the speaker's remarks. The effective use of questions also allows you to contribute to the conversation.

#EffectiveListening #Communication #RespectfulCommunications`,
                    postCategory: 'Educational'
                },
                {
                    id: 3,
                    title: 'High Trust Selling Blog - LI-IG',
                    canvaLink: 'https://www.canva.com/design/DAF0KryDvk0/HHQm265OUsGOptw1LLcNqA/view?utm_content=DAF0KryDvk0&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink&mode=preview',
                    imageUrl: '/19TemplateImage.png',
                    templateSize: '1200 x 1200',
                    linkedPostAs: 'Image',
                    instaPostAs: 'Image',
                    ctaLink: 'https://www.assessments24x7.com/blog/high-trust-selling/',
                    caption: `Uncover the Evolution of Sales: From Low Trust to High Trust 🤝

Did you know there's a world of difference between low trust and high trust selling? The sales landscape has seen a remarkable transformation over the years. While low trust selling once had its place, its outdated and manipulative techniques are making way for the non-manipulative and thoughtful approach of high trust selling.
Check out our blog on Platinum Rules for Success, as Dr. Tony Alessandra dives into the intriguing history of these two competing sales methods.  http://assessments24x7.com/blog/high-trust-selling/

🚀 #SalesEvolution #HighTrustSelling #SalesStrategies #Communication`,
                    postCategory: 'Educational'
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