<template>
    <transition name="fade">
        <section v-if="isOpen" class="account-modal-window">
            <div class="container">
                <a href="#" title="Close" class="modal-close" @click="close">Close</a>
                <div class="row">
                    <div class="col-12">
                        <!-- Embed the iframe to load the external URL -->
                        <iframe src="https://a24x7profiles.com/register_acct.aspx" width="100%" height="600px"
                            style="border:none;" ref="accountIframe" title="Account Login"
                            @load="checkIframeForCompletion">
                        </iframe>
                    </div>
                </div>
            </div>
        </section>
    </transition>
</template>

<script>
export default {
    props: ['id'],
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

            this.$nuxt.$on('openAccountModalBT', () => {
                this.isOpen = true;
            });
        },
        // Check if the iframe has navigated to the thank you page
        checkIframeForCompletion() {
            const iframe = this.$refs.accountIframe;
            try {
                // Check the URL of the iframe (may be restricted by cross-origin policies)
                const iframeURL = iframe.contentWindow.location.href;
                if (iframeURL.includes('/get-started-thankyou')) {
                    // Redirect the main window to the thank you page
                    this.$router.push('/get-started-thankyou');
                }
            } catch (error) {
                // Cross-origin restrictions will prevent this, handle accordingly
                console.log('Cross-origin restriction on iframe access');
            }
        }
    }
}
</script>

<style lang="scss" scoped>
.account-modal-window {
    position: fixed;
    background-color: rgba(0, 0, 0, .6);
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 999999;
    transition: all 0.25s;

    .container {
        width: 100%;
        max-width: 1000px;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        padding: 40px 20px;
        background: #fff;
        text-align: center;
        height: 100%;
        max-height: 700px;
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
    }

    .fade-enter-active,
    .fade-leave-active {
        transition: opacity .5s;
    }

    .fade-enter,
    .fade-leave-to

    /* .fade-leave-active below version 2.1.8 */
        {
        opacity: 0;
    }
}
</style>
