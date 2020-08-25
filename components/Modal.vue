<template>
    <transition name="fade">
        <section v-if="isOpen" class="modal-window">
            <div class="container">
                <a href="#" title="Close" class="modal-close" @click="close">Close</a>
                <h1>⏰ Group Certification Special $795</h1>

                <div class="row">
                    <div class="col-3 col-3-sm">
                        <div class="timer-section">
                            {{days}}
                            <span class="label">Days</span>
                        </div>
                    </div>

                    <div class="col-3 col-3-sm">
                        <div class="timer-section">
                            {{hours}}
                            <span class="label">Hours</span>
                        </div>
                    </div>

                    <div class="col-3 col-3-sm">
                        <div class="timer-section">
                            {{minutes}}
                            <span class="label">Minutes</span>
                        </div>
                    </div>

                    <div class="col-3 col-3-sm">
                        <div class="timer-section">
                            {{seconds}}
                            <span class="label">Seconds</span>
                        </div>
                    </div>
                </div>

                <strong>Deadline for EIQ-2 Group Certification Registration</strong>

                <p>
                    You have the ability to come out of this crisis on a great trajectory if you make the best possible use of your time NOW.
                </p>
                <a href="/resources/group-certification" class="button danger">Get Certified</a>
            </div>
        </section>
    </transition>
</template>

<script>
    import moment from 'moment';

    export default {
        data() {
            return {
                isOpen: false,
                actualTime: moment().utcOffset(120).format('X'),
				days: 0,
				hours: 0,
				minutes: 0,
				seconds: 0
            }
        },
        created() {
            if (process.browser) {
                setTimeout(() => {
                    if (!localStorage.getItem('promo:shown2')) {
                        this.isOpen = true;
                        this.seen();
                    }
                }, 2000);
            }

            this.compute();
		    this.addOneSecondToActualTimeEverySecond();
        },
        watch: {
		    actualTime(val, oldVal) {
		        this.compute();
		    }
		},
        methods: {
            seen() {
                if (process.browser) {
                    localStorage.setItem('promo:shown2', true);
                }
            },
            close() {
                this.isOpen = false;
            },
            addOneSecondToActualTimeEverySecond() {
                this.actualTime = moment().utcOffset(120).format('X');
                setTimeout(() => {
                    this.addOneSecondToActualTimeEverySecond();
                }, 1000);
            },
            getDiffInSeconds() {
                return moment("2020-05-13 24:00:00").utcOffset(120).format('X') - this.actualTime;
            },
            compute() {
                let duration = moment.duration(this.getDiffInSeconds(), "seconds");
                this.days = duration.days() > 0 ? duration.days() : 0;
                this.hours = duration.hours() > 0 ? duration.hours() : 0;
                this.minutes = duration.minutes() > 0 ? duration.minutes() : 0;
                this.seconds = duration.seconds() > 0 ? duration.seconds() : 0;
		    }
        }
    }
</script>

<style lang="scss" scoped>
    .modal-window {
        position: fixed;
        background-color: rgba(0,0,0,.6);
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        z-index: 999999;
        transition: all 0.25s;

        .container {
            width: 100%;
            max-width: 600px;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            padding: 40px 20px;
            background: #fff;
            text-align: center;

            .modal-close {
                color: #aaa;
                line-height: 50px;
                font-size: 12pt;
                position: absolute;
                right: 0;
                text-align: center;
                top: 0;
                width: 70px;
                text-decoration: none;

                &:hover {
                    color: #000;
                }
            }

            h1 {
                margin: 0;
                font-size: 18pt;
            }

            .timer-section {
                background: #1e222d;
                color: #fff;
                font-size: 32pt;
                border-radius: 10px;
                padding: 9px 0 18px;
                margin-top: 10px;

                span {
                    font-size: 9pt;
                    display: block;
                    margin-top: -10px;
                    text-transform: uppercase;
                    letter-spacing: 3px;
                    font-weight: 600;
                    opacity: .5;
                }
            }

            p {
                font-size: 13pt;
            }

            .button {
                display: block;
                margin-top: 30px;
                margin-right: 0;
            }
        }
    }

    .fade-enter-active, .fade-leave-active {
        transition: opacity .5s;
    }
    
    .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
        opacity: 0;
    }
</style>