<template>
    <section class="group-exercises">
        <main-nav />
        <section class="header">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <h1 class="section-title">GROUP EXERCISES FOR TRAINERS</h1>
                    </div>
                </div>
            </div>
        </section>
        <div class="top">
            <div class="container">
                <div class="row">
                    <div class="col-6 links">
                        <img class="image lazyload" src="images/lost_on_the_moon.png" alt="Lost on the Moon Exercise">
                        <a target="_blank" class="pdfs" a
                            href="http://www.assessmentdownloads.com/dashboard/backup/media/LostOnTheMoonExercise.pdf">Lost
                            on
                            the Moon Exercise</a>
                    </div>
                    <div class="col-6 links">
                        <img class="image lazyload" src="images/40icebreakers.png" alt="40 Icebreakers for Small Groups">
                        <a target="_blank" class="pdfs" a
                            href="http://www.assessmentdownloads.com/dashboard/backup/media/40icebreakers.pdf">40
                            Icebreakers
                            for Small Groups</a>
                    </div>
                    <div class="col-6 links">
                        <img class="image lazyload" src="images/lostatseaexercise.png" alt="Lost at Sea Exercise">
                        <a target="_blank" class="pdfs" a
                            href="http://www.assessmentdownloads.com/dashboard/backup/media/LostatSeaExercise.pdf">Lost at
                            Sea
                            Exercise</a>
                    </div>
                    <div class="col-6 links">
                        <img class="image lazyload" src="images/papertowerexercise.png" alt="Paper Tower Exercisee">
                        <a target="_blank" class="pdfs" a
                            href="http://www.assessmentdownloads.com/dashboard/backup/media/PaperTowerExercise.pdf">Paper
                            Tower Exercisee</a>
                    </div>
                </div>
            </div>
        </div>
        <section class="assessment-content">
            <div class="container">
                <div class="row">
                    <div class="col-6">
                        <h5 class="section-title">
                            <h3>Educational Innovations</h3>
                        </h5>
                        <p>
                             is a wonderful place to find ideas for your team-building sessions
                            and workshops. This link points to just one of the categories, but you can look at all of them
                            on the sidebar.
                        </p><br />
                        <a href="http://www.teachersource.com/category/engineering" class="button">Visit Site</a>
                    </div>
                    <div class="col-6">
                        <img class="side-img lazyload" src="images/educational_innovations1.png"
                            alt="Educational Innovations">
                    </div>
                </div>
            </div>
        </section>
        <section class="puzzles">
            <div class="container">
                <div class="row">
                    <div class="col-6">
                        <img class="side-img-puzzles lazyload" src="images/puzzles_and_games.png" alt="puzzles and games">
                    </div>
                    <div class="col-6">
                        <p class="puzzles_paragraph">
                            Another wonderful place to find great team-building
                        </p>
                        <div class="inline-header">
                            <h5 class="section-title">
                                <h3>puzzles and games</h3>
                            </h5>
                            <p class="inline-period">.</p>
                        </div>
                        <br>
                        <a href="http://www.xump.com/science/PuzzlesGames.cfm" class="button">Visit Site</a>
                    </div>
                </div>
            </div>
        </section>
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
    head() {
        return {
            title: 'GROUP EXERCISES FOR TRAINERS | Assessments 24x7',
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
.top {
    background: url('~assets/artifacts/left-rings-flipped.png') no-repeat, linear-gradient(90deg, rgb(241, 241, 241) 0%, rgba(231, 230, 230, 0.89) 100%);
    background-position: right;
    width: 100%;
    margin-bottom: -60px;
    color: white;
    padding-top: 60px;
    padding-bottom: 60px;
}

.links {
    &:hover {
        transform: scale(1.01);
    }
}

.pdfs {
    font-size: 23px;
    font-weight: 700;
    text-decoration: none;
    color: rgb(59, 59, 59);
    text-shadow: 1px 1px rgb(236, 235, 235);
}

.inline-header {
    display: flex;
    align-items: baseline;
}

.inline-period {
    margin: 0;
}

.image {
    margin-right: 15px;
    margin: 20px;
    border-radius: 5px;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
    box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.39);
}

.assessment-content {

    .section-title {
        font-weight: 600;
        margin-top: 0;
    }
}

.group-exercises {
    .header {
        background: url('~assets/about.jpg');
        background-size: cover;
        color: #fff;
        text-align: center;
        padding: 70px 0 40px;

        .section-title {
            font-size: 30pt;
            margin-top: 0;
        }
    }
}

.assessment-content {
    background: url('~assets/artifacts/left-rings.png') no-repeat, linear-gradient(135deg, rgb(37, 128, 214) 0%, rgb(8, 86, 134) 100%);
    background-position: left;
    padding: 100px 0 90px;
    margin: 60px 0;
    color: #fff;

    .section-title {
        font-size: 30pt;
        line-height: 34pt;
        font-weight: 700;
        margin-top: 0;
        margin-bottom: 20px;
    }

    .side-img {
        width: 100%;
        border-radius: 20px;
        box-shadow: 0px 10px 20px rgba(34, 34, 34, 0.1);
    }
}

.puzzles {
    background-position: left;
    padding: 40px 0 30px;
    margin: 60px 0;
    color: #111111;

    .puzzles_paragraph {
        font-size: 20px;
    }

    .section-title {
        font-size: 30pt;
        line-height: 34pt;
        font-weight: 700;
        margin-top: 0;
        margin-bottom: 20px;
    }

    .side-img-puzzles {
        width: 100%;
        border-radius: 20px;
        box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.1);
    }
}

@media only screen and (max-width: 600px) {
    .pdfs {
        font-size: 15px;
        font-weight: 700;
        text-decoration: none;
        color: rgb(59, 59, 59);
        text-shadow: 1px 1px rgb(236, 235, 235);
    }

    .image {
        width: 15%;
    }
}
</style>