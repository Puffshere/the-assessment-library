<template>
    <section class="marketing-one-sheets">
        <main-nav />
        <div class="wrapper">
            <div class="container hero">
                <div class="row rowItems">
                    <div class="col-8">
                        <div>
                            <h1 class="pageTitle">MARKETING ONE-SHEETS</h1>
                            <p class="">
                                Distribute marketing one-sheets through email attachments, print collateral, or website
                                content. These serve as effective primers when introducing assessments and related concepts
                                to employees or trainees. Customize each one-sheet with your business name and contact
                                information, save them as PDFs, and organize in a dedicated folder for quick retrieval.
                            </p>
                        </div>
                    </div>
                    <div class="col-4">
                        <img class="image" src="~assets/marketing_one_sheets_logo.png" alt="template icons">
                    </div>
                </div>
            </div>
        </div>
        <br>
        <div class="container">
            <div class="row">
                <div class="content-box">
                    <div class="post">
                        <div class="post-inner">
                            <div class="image-column">
                                <img class="cardImage" src="~/assets/magnifying_glass.png">
                            </div>
                            <div class="text-column">
                                <div class="header">
                                    <p class="cardTitle">ANALYSIS SERIES</p>
                                </div>
                                <div>
                                    <span class="cardDescription">Critical primers and insights into the world of behavioral
                                        Assessments</span>
                                    <br>
                                    <br>
                                    <div class="row">
                                        <div class="cardBody">
                                            <div class="post" v-for="post in analysisPosts" :key="post.id">
                                                <a :href="post.url" class="link hyperlink" target="_blank" rel="noopener">
                                                    {{ post.title }} </a>
                                                <br>
                                                    <div class="gap">{{ post.caption }}</div>
                                                <br>
                                                <hr>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <br>
        <br>
        <br>
        <div class="container">
            <div class="row">
                <div class="content-box">
                    <div class="post">
                        <div class="post-inner">
                            <div class="image-column">
                                <img class="cardImage" src="~/assets/tools_image.png">
                            </div>
                            <div class="text-column">
                                <div class="header">
                                    <p class="cardTitle">TOOLS SERIES</p>
                                </div>
                                <div>
                                    <span class="cardDescription">Assessments & related instruments</span>
                                    <br>
                                    <br>
                                    <div class="row">
                                        <div class="cardBody">
                                            <div class="post" v-for="post in toolsPosts" :key="post.id">
                                                <a :href="post.url" class="link hyperlink" target="_blank" rel="noopener">
                                                    {{ post.title }} </a>
                                                <br>
                                                    <div class="gap">{{ post.caption }}</div>
                                                <br>
                                                <hr>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <br>
        <br>
        <br>
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
    name: 'MarketingOne-Sheets',
    data() {
        return {
            hover: false,
            activeTooltipId: null,
            activeTooltipId2: null,
            analysisPosts: [
                {
                    id: 1,
                    title: 'Hiring & Selection Data (download PDF)',
                    url: 'https://cdn.assessments24x7.com/file/assessments24x7-media/employee-docs/hiringselection.pdf',
                    caption: `This one-sheet highlights new data illustrating the growth and importance of this fast-growing segment to business consulting. For the first time, modern online assessments are making hiring & selection analytics both practical and affordable for businesses of all sizes.`,
                },
                {
                    id: 2,
                    title: 'Why Assessments? (download PDF)',
                    url: 'https://cdn.assessments24x7.com/file/assessments24x7-media/employee-docs/WhyAssessments.pdf',
                    caption: `This one-sheet easily introduces the reader to several of the most effective business applications and advantages that assessments provide 21st century organizations.`,
                }
            ],
            toolsPosts: [
                {
                    id: 1,
                    title: 'Core Assessments (download PDF)',
                    url: 'https://cdn.assessments24x7.com/file/assessments24x7-media/employee-docs/CoreAssessments.pdf',
                    caption: `This one-sheet provides a simple overview of our catalog's "foundational" assessments: DISC, Motivators and Emotional Intelligence. Each of these distinctly different assessments measure an important and unique aspect of human behavior and/or cognition.`,
                },
                {
                    id: 2,
                    title: 'DISC (download PDF)',
                    url: 'https://cdn.assessments24x7.com/file/assessments24x7-media/employee-docs/DISC.pdf',
                    caption: `This one-sheet offers a concise explanation of DISC and seven of its most popular business applications.`,
                },
                {
                    id: 3,
                    title: 'Motivators (download PDF)',
                    url: 'https://cdn.assessments24x7.com/file/assessments24x7-media/employee-docs/Motivators.pdf',
                    caption: `This one-sheet provides users an insightful introduction to the popular Motivators assessment. This one-sheet identifies Motivators excellent pairing with DISC, popular workplace applications and key report features. If you love DISC, then Motivators is a must!`,
                },
                {
                    id: 4,
                    title: 'Emotional Intelligence (download PDF)',
                    url: 'https://cdn.assessments24x7.com/file/assessments24x7-media/employee-docs/EIQ2.pdf',
                    caption: `This one-sheet equips coaches with a compelling visual primer for the Emotional Intelligence concept and our trending EIQ-2 report.`,
                },
                {
                    id: 5,
                    title: 'Sales IQ Plus (download PDF)',
                    url: 'https://cdn.assessments24x7.com/file/assessments24x7-media/employee-docs/SalesIQPlus.pdf',
                    caption: `This one-sheet details each of the 8 Primary Sales Competencies measured by this award-winning sales skills test (via Top Sales World magazine). The one-sheet also highlights several of the assessment's most notable features, like it's sales celebrity developers (Jeffrey Gitomer, etc) and rotating pool of questions -- allowing coaches to continually re-administer this instrument, while never giving the same test twice. This instrument's reputation is so strong, you could say it sells itself!`,
                },
                {
                    id: 6,
                    title: '360 Assessments (download PDF)',
                    url: 'https://cdn.assessments24x7.com/file/assessments24x7-media/employee-docs/360.pdf',
                    caption: `This one-sheet details our popular 360 assessments. Each 360 Assessment cracks the code of behavioral style misunderstandings in the workplace, offering business leaders and managers (even fellow colleagues) the ability to effectively process the collective perceptions of how others see them.`,
                },
                {
                    id: 7,
                    title: 'Kids DISC (download PDF)',
                    url: 'https://cdn.assessments24x7.com/file/assessments24x7-media/employee-docs/kidsDISC.pdf',
                    caption: `The Kids DISC assessment is an opportunity for children to learn more about themselves! Inside the report, kids, and the adults around them, will discover how special and unique they are. Each child s bird style is their superpower, and the Kids DISC assessment by Assessments 24x7 helps them be the best that they can be.`,
                },
                {
                    id: 8,
                    title: 'Organizational Development Assessment (download PDF)',
                    url: 'https://cdn.assessments24x7.com/file/assessments24x7-media/employee-docs/5DA-MM.pdf',
                    caption: `There are 5 Disciplines for Exponential Growth that every business must get correct. Learn how your executive team, your departments and your organization sees performance in each of the 5 Disciplines.`,
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
        showTooltip(postId) {
            this.activeTooltipId = postId;
        },
        showTooltip2(postId) {
            this.activeTooltipId2 = postId;
        },
        hideTooltip() {
            this.activeTooltipId = null;
        },
        hideTooltip2() {
            this.activeTooltipId2 = null;
        }
    },
    head() {
        return {
            title: 'Marketing One-Sheets | Assessments 24x7',
            meta: [
                {
                    hid: 'description',
                    name: 'description',
                    content: 'These are the Marketing One-Sheets!'
                }
            ]
        }
    },
}
</script>

<style lang="scss" scoped>
.content-box {
    display: flex;
    flex-direction: column;
    border: 2px solid #5a5959;
    border-radius: 7px;
    margin: 0 auto;
    max-width: 90%;
    box-shadow: 4px 6px 0px rgb(36, 35, 35);
}

.post {
    margin-bottom: 20px;
}

.post-inner {
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
    margin-left: -50px;
    margin-top: -60px;
}

.text-column {
    flex-basis: 100%;
    padding: 0px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-left: -100px;
}

.cardTitle {
    font-size: 28px;
    font-weight: 700;
    padding: 0px;
    padding-bottom: -10px;
}

.cardImage {
    position: relative;
    top: 20px;
    right: -10px;
    width: 110px;
}

.cardDescription {
    font-weight: 400;
    font-size: 20px;
}

.link {
    cursor: pointer;
}

.cardBody {
    margin-left: -20px;
    padding-right: 60px;
}

.gap {
    margin-bottom: -18px;
}

.custom-tooltip {
    position: absolute;
    background-color: rgb(223, 222, 222);
    color: rgb(17, 17, 17);
    padding: 10px 20px;
    border-radius: 5px;
    left: 40%;
    transform: translateX(50%);
    z-index: 10;
    display: inline-block;
    border: 1px solid black;
}

.header h4 {
    margin: 0;
    padding: 0;
}

.header p {
    margin: 0;
    padding: 0;
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

.pageTitle {
    font-size: 40px;
}

.image {
    position: relative;
    top: 50px;
    right: -50px;
    width: 150px;
}

@media (max-width: 745px) {
    .post-inner {
        max-height: none;
    }

    .text-column {
        margin-left: 10px;
    }

    .cardBody {
        margin-left: 10px;
        padding-right: 60px;
    }
}

@media (max-width: 750px) {

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