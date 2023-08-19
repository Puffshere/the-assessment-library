<template>
    <section>
        <main-nav />

        <section class="header">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <h1 class="section-title">PLATINUM RULE 52 WEEK EMAIL SERIES</h1>
                    </div>
                </div>
            </div>
        </section>

        <div class="container">
            <div class="row flex-center">
                <div class="col-6">
                    <ul class="resources">
                        <a v-for="(link, index) in displayedLinks" :key="index" :href="link.href">
                            <li class="resource marketing">{{ link.text }}</li>
                        </a>
                        <div class="buttons">
                            <button @click="currentPage = Math.max(currentPage - 1, 0)">Previous</button>
                            <span class="page">Page {{ currentPage + 1 }}</span>
                            <button @click="currentPage++">Next</button>
                        </div>
                    </ul>
                </div>
            </div>
        </div>
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
    data() {
        return {
            currentPage: 0,
            allLinks: [
                {
                    href: "https://www.assessmentdownloads.com/dashboard/backup/PR52docs/01%20THE%20FOUR%20BEHAVIORAL%20STYLES.doc",
                    text: "1 THE FOUR BEHAVIORAL STYLES.doc"
                },
                {
                    href: "https://www.assessmentdownloads.com/dashboard/backup/PR52docs/02%20Strengths%20and%20Weaknesses%20of%20Directors.doc",
                    text: "2 Strengths and Weaknesses of Directors.doc"
                },
                {
                    href: "https://www.assessmentdownloads.com/dashboard/backup/PR52docs/03%20Strengths%20and%20Weaknesses%20of%20Socializers.doc",
                    text: "3 Strengths and Weaknesses of Socializers.doc"
                },
                {
                    href: "https://www.assessmentdownloads.com/dashboard/backup/PR52docs/04%20Strengths%20and%20Weaknesses%20of%20Thinkers.doc",
                    text: "4 Strengths and Weaknesses of Thinkers.doc"
                },
                {
                    href: "https://www.assessmentdownloads.com/dashboard/backup/PR52docs/05%20Strengths%20and%20Weaknesses%20of%20Relaters.doc",
                    text: "5 Strengths and Weaknesses of Relaters.doc"
                },
                {
                    href: "https://www.assessmentdownloads.com/dashboard/backup/PR52docs/06%20Goals%20and%20Fears%20of%20Directors.doc",
                    text: "6 Goals and Fears of Directors.doc"
                },
                {
                    href: "https://www.assessmentdownloads.com/dashboard/backup/PR52docs/07%20Goals%20and%20Fears%20of%20Socializers.doc",
                    text: "7 Goals and Fears of Socializers.doc"
                },
                {
                    href: "https://www.assessmentdownloads.com/dashboard/backup/PR52docs/08%20Goals%20and%20Fears%20of%20Thinkers.doc",
                    text: "8 Goals and Fears of Thinkers.doc"
                },
                {
                    href: "https://www.assessmentdownloads.com/dashboard/backup/PR52docs/09%20Goals%20and%20Fears%20of%20Relaters.doc",
                    text: "9 Goals and Fears of Relaters.doc"
                },
                {
                    href: "https://www.assessmentdownloads.com/dashboard/backup/PR52docs/10%20Director%20Cultures.doc",
                    text: "10 Director Cultures.doc"
                },
                {
                    href: "https://www.assessmentdownloads.com/dashboard/backup/PR52docs/11%20Socializer%20Cultures.doc",
                    text: "11 Socializer Cultures.doc"
                },
                {
                    href: "https://www.assessmentdownloads.com/dashboard/backup/PR52docs/12%20Thinker%20Cultures.doc",
                    text: "12 Thinker Cultures.doc"
                },
                {
                    href: "https://www.assessmentdownloads.com/dashboard/backup/PR52docs/13%20Relater%20Cultures.doc",
                    text: "13 Relater Cultures.doc"
                },
                {
                    href: "https://www.assessmentdownloads.com/dashboard/backup/PR52docs/14%20Preferred%20Careers%20for%20Each%20Style.doc",
                    text: "14 Preferred Careers for Each Style.doc"
                },
                {
                    href: "https://www.assessmentdownloads.com/dashboard/backup/PR52docs/15%20The%20Chemistry%20of%20%20Likes%20vs.%20Opposites.doc",
                    text: "15 The Chemistry of Likes vs. Opposites.doc"
                },
                {
                    href: "https://www.assessmentdownloads.com/dashboard/backup/PR52docs/16%20SOCIAL%20COMPATIBILITY.doc",
                    text: "16 SOCIAL COMPATIBILITY.doc"
                },
                {
                    href: "https://www.assessmentdownloads.com/dashboard/backup/PR52docs/17%20TASK%20COMPATIBILITY.doc",
                    text: "17 TASK COMPATIBILITY.doc"
                },
                {
                    href: "https://www.assessmentdownloads.com/dashboard/backup/PR52docs/18%20Know%20a%20Director%20When%20You%20See%20One.doc",
                    text: "18 Know a Director When You See One.doc"
                },
                {
                    href: "https://www.assessmentdownloads.com/dashboard/backup/PR52docs/19%20Know%20a%20Socializer%20When%20You%20See%20One.doc",
                    text: "19 Know a Socializer When You See One.doc"
                },
                {
                    href: "https://www.assessmentdownloads.com/dashboard/backup/PR52docs/20%20Know%20a%20Thinker%20When%20You%20See%20One.doc",
                    text: "20 Know a Thinker When You See One.doc"
                },
                {
                    href: "https://www.assessmentdownloads.com/dashboard/backup/PR52docs/21%20Know%20a%20Relater%20When%20You%20See%20One.doc",
                    text: "21 Know a Relater When You See One.doc"
                },
                {
                    href: "https://www.assessmentdownloads.com/dashboard/backup/PR52docs/22%20Know%20a%20Director%20by%20Phone.doc",
                    text: "22 Know a Director by Phone.doc"
                },
                {
                    href: "https://www.assessmentdownloads.com/dashboard/backup/PR52docs/23%20Know%20a%20Socializer%20by%20Phone.doc",
                    text: "23 Know a Socializer by Phone.doc"
                },
                {
                    href: "https://www.assessmentdownloads.com/dashboard/backup/PR52docs/24%20Know%20a%20Thinker%20by%20Phone.doc",
                    text: "24 Know a Thinker by Phone.doc"
                },
                {
                    href: "https://www.assessmentdownloads.com/dashboard/backup/PR52docs/25%20Know%20a%20Relater%20by%20Phone.doc",
                    text: "25 Know a Relater by Phone.doc"
                },
                {
                    href: "https://www.assessmentdownloads.com/dashboard/backup/PR52docs/26%20Know%20a%20Director%20by%20Letter.doc",
                    text: "26 Know a Director by Letter.doc"
                },
                {
                    href: "https://www.assessmentdownloads.com/dashboard/backup/PR52docs/27%20Know%20a%20Socializer%20by%20Letter.doc",
                    text: "27 Know a Socializer by Letter.doc"
                },
                {
                    href: "https://www.assessmentdownloads.com/dashboard/backup/PR52docs/28%20Know%20a%20Thinker%20by%20Letter.doc",
                    text: "28 Know a Thinker by Letter.doc"
                },
                {
                    href: "https://www.assessmentdownloads.com/dashboard/backup/PR52docs/29%20Know%20a%20Relater%20by%20Letter.doc",
                    text: "29 Know a Relater by Letter.doc"
                },
                {
                    href: "https://www.assessmentdownloads.com/dashboard/backup/PR52docs/30%20The%20Director%20Leadership%20Style.doc",
                    text: "30 The Director Leadership Style.doc"
                },
                {
                    href: "https://www.assessmentdownloads.com/dashboard/backup/PR52docs/31%20The%20Socializer%20Leadership%20Style.doc",
                    text: "31 The Socializer Leadership Style.doc"
                },
                {
                    href: "https://www.assessmentdownloads.com/dashboard/backup/PR52docs/32%20The%20Thinker%20Leadership%20Style.doc",
                    text: "32 The Thinker Leadership Style.doc"
                },
                {
                    href: "https://www.assessmentdownloads.com/dashboard/backup/PR52docs/33%20The%20Relater%20Leadership%20Style.doc",
                    text: "33 The Relater Leadership Style.doc"
                },
                {
                    href: "https://www.assessmentdownloads.com/dashboard/backup/PR52docs/34%20How%20to%20Develop%20DIRECTORS.doc",
                    text: "34 How to Develop DIRECTORS.doc"
                },
                {
                    href: "https://www.assessmentdownloads.com/dashboard/backup/PR52docs/35%20How%20to%20Develop%20SOCIALIZERS.doc",
                    text: "35 How to Develop SOCIALIZERS.doc"
                },
                {
                    href: "https://www.assessmentdownloads.com/dashboard/backup/PR52docs/36%20How%20to%20Develop%20THINKERS.doc",
                    text: "36 How to Develop THINKERS.doc"
                },
                {
                    href: "https://www.assessmentdownloads.com/dashboard/backup/PR52docs/37%20How%20To%20Develop%20RELATERS.doc",
                    text: "37 How To Develop RELATERS.doc"
                },
                {
                    href: "https://www.assessmentdownloads.com/dashboard/backup/PR52docs/38%20Counseling%20by%20Style.doc",
                    text: "38 Counseling by Style.doc"
                },
                {
                    href: "https://www.assessmentdownloads.com/dashboard/backup/PR52docs/39%20Delegating%20by%20Style.doc",
                    text: "39 Delegating by Style.doc"
                },
                {
                    href: "https://www.assessmentdownloads.com/dashboard/backup/PR52docs/40%20Complimenting%20by%20Style.doc",
                    text: "40 Complimenting by Style.doc"
                },
                {
                    href: "https://www.assessmentdownloads.com/dashboard/backup/PR52docs/41%20Correcting%20by%20Style.doc",
                    text: "41 Correcting by Style.doc"
                },
                {
                    href: "https://www.assessmentdownloads.com/dashboard/backup/PR52docs/42%20Adapting%20To%20Directors.doc",
                    text: "42 Adapting To Directors.doc"
                },
                {
                    href: "https://www.assessmentdownloads.com/dashboard/backup/PR52docs/43%20Adapting%20To%20Socializers.doc",
                    text: "43 Adapting To Socializers.doc"
                },
                {
                    href: "https://www.assessmentdownloads.com/dashboard/backup/PR52docs/44%20Adapting%20To%20Thinkers.doc",
                    text: "44 Adapting To Thinkers.doc"
                },
                {
                    href: "https://www.assessmentdownloads.com/dashboard/backup/PR52docs/45%20Adapting%20To%20Relaters.doc",
                    text: "45 Adapting To Relaters.doc"
                },
                {
                    href: "https://www.assessmentdownloads.com/dashboard/backup/PR52docs/46%20How%20the%20Four%20Styles%20Communicate%20in%20Groups.doc",
                    text: "46 How the Four Styles Communicate in Groups.doc"
                },
                {
                    href: "https://www.assessmentdownloads.com/dashboard/backup/PR52docs/47%20How%20the%20Four%20Styles%20Set%20Goals%20in%20Groups.doc",
                    text: "47 How the Four Styles Set Goals in Groups.doc"
                },
                {
                    href: "https://www.assessmentdownloads.com/dashboard/backup/PR52docs/48%20How%20the%20Four%20Styles%20Use%20Influence%20in%20Groups.doc",
                    text: "48 How the Four Styles Use Influence in Groups.doc"
                },
                {
                    href: "https://www.assessmentdownloads.com/dashboard/backup/PR52docs/49%20How%20the%20Four%20Styles%20Involve%20Others%20in%20Groups.doc",
                    text: "49 How the Four Styles Involve Others in Groups.doc"
                },
                {
                    href: "https://www.assessmentdownloads.com/dashboard/backup/PR52docs/50%20How%20the%20Four%20Styles%20Make%20Decisions%20in%20Groups.doc",
                    text: "50 How the Four Styles Make Decisions in Groups.doc"
                },
                {
                    href: "https://www.assessmentdownloads.com/dashboard/backup/PR52docs/51%20Prescriptions%20for%20Flexibility.doc",
                    text: "51 Prescriptions for Flexibility.doc"
                },
                {
                    href: "https://www.assessmentdownloads.com/dashboard/backup/PR52docs/52%20Four%20Styles--%20just%20acting%20themselves.doc",
                    text: "52 Four Styles-- just acting themselves.doc"
                }
            ]
        }
    },
    head() {
        return {
            title: 'PLATINUM RULE 52 WEEK EMAIL SERIES | Assessments 24x7',
            meta: [
                {
                    hid: 'robots',
                    name: 'robots',
                    content: 'noindex'
                }
            ]
        }
    },
    computed: {
        displayedLinks() {
            const start = this.currentPage * 9;
            const end = start + 9;
            return this.allLinks.slice(start, end);
        }
    },
}
</script>

<style lang="scss" scoped>
.header {
    background: url('~assets/about.jpg');
    background-size: cover;
    color: #fff;
    text-align: center;
    padding: 70px 0;
    margin-bottom: 30px;

    .section-title {
        font-size: 30pt;
        margin-top: 0;
    }
}

h1 {
    font-size: 30pt;
    line-height: 34pt;
    margin-bottom: 0;
}

h2 {
    font-size: 20pt;
    line-height: 24pt;
}

.resources {
    padding-left: 0;
    list-style: none;
    margin-bottom: 60px;

    .page {
        margin: 0px 5px;
    }

    .buttons {
        float: right;
        padding: 0px 10px;
    }

    a {
        text-decoration: none;
    }

    .resource {
        padding: 10px;
        background: #f7f7f7;
        margin-bottom: 12px;
        border-radius: 10px;
        color: #fff;
        font-weight: 600;

        &.marketing {
            background: linear-gradient(268deg, #0999fe, #0249ec);
            
            &:hover {
                background: linear-gradient(268deg, #0789e6, #0140d1);
            }
            
            &:active {
                background: linear-gradient(268deg, #067dd1, #0133a7);
            }
        }
    }
}
</style>