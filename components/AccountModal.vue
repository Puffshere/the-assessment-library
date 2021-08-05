<template>
    <transition name="fade">
        <section v-if="isOpen" class="account-modal-window">
            <div class="container">
                <a href="#" title="Close" class="modal-close" @click="close">Close</a>
                <h1>📝 Don't Have An Account Yet?</h1>

                <strong>Your account will be available in 24 hours.</strong>

                <div class="row">
                    <div class="col-12">
                        <contact-form buttonText="Request an Account" redirect="/get-started-thankyou" :isShort="true" :isGetStarted="true" acFormId="2" />
                    </div>
                </div>
            </div>
        </section>
    </transition>
</template>

<script>
    export default {
        props: ['id'],
        components: {
            'contact-form': () => import('@/components/ContactForm')
        },
        data() {
            return {
                isOpen: false
            }
        },
        created() {
            setTimeout(() => {
                this.isOpen = true;
            }, 1000);
        },
        methods: {
            close() {
                this.isOpen = false;

                this.$nuxt.$on('openAccountModal', () => {
                    this.isOpen = true;
                });
            }
        }
    }
</script>

<style lang="scss" scoped>
    .account-modal-window {
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
            max-width: 800px;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            padding: 40px 20px;
            background: #fff;
            text-align: center;
            height: 100%;
            max-height: 700px;
            overflow-y: scroll;
            border-radius: 10px;

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

            .contact-form {
                text-align: left;
                display: flex;
            }
        }

        .validation {
            background: #fef0f0;;
            color: #f56c6c;
            padding: 12px 20px;
            border-radius: 4px;

            .title, .description {
                margin: 0;
                font-size: 10pt;
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