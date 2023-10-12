<template>
    <section class="toolTips">
        <div class="modal-backdrop">
            <div class="container col-12">
                <div class="modal-content">
                    <div class="modal-body">
                        <p class="modalTitle">Usage Tips</p>
                        <hr>
                        <br>
                        <br>
                        <div class="row toolRow">
                            <div class="col-3">
                                <div class="toolImages">
                                    <button class="translateBtn btn">Translate</button>
                                </div>
                            </div>
                            <div class="col-9">
                                <p class="tips">
                                    The Translate button will translate the text in the UserInput box to any language
                                    specified in the language dropdown. This button will not apply any formatting.
                                </p>
                            </div>
                        </div>
                        <div class="row toolRow">
                            <div class="col-3">
                                <div class="toolImages">
                                    <button class="swap btn">Templates</button>
                                </div>
                            </div>
                            <div class="col-9">
                                <p class="tips">
                                    Click the Template button to bring up a list of pre loaded email templates.
                                </p>
                            </div>
                        </div>
                        <div class="row toolRow">
                            <div class="col-3">
                                <div class="toolImages">
                                    <button class="swap btn">Swap</button>
                                </div>
                            </div>
                            <div class="col-9">
                                <p class="tips">
                                    The Swap button is used to move the AI response up to the UserInput box for further
                                    modifications.
                                </p>
                            </div>
                        </div>
                        <div class="row toolRow">
                            <div class="col-3">
                                <div class="toolImages">
                                    <img class="microphoneImage" src="../assets/microphone.png">
                                </div>
                            </div>
                            <div class="col-9">
                                <p class="tips">
                                    Click the microphone image to enable voice dictation. The first time you click it a pop
                                    up should show up asking you to allow your microphone to turn on when dictation is
                                    enabled. <span class="bold">&nbsp;Not all browsers are supported.&nbsp;</span> When
                                    dictation is
                                    turned off you will be
                                    asked if you would like to format the recorded text into email format. Click Yes to do
                                    so or No to leave recorded text in raw format. </p>
                            </div>
                        </div>
                    </div>
                    <div class="closeBtn">
                        <button @click="closeToolTips" class="lightBlueButton">Close</button>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    methods: {
        openModal() {
            document.body.classList.add('body-no-scroll');
            // Additional code to open the modal
        },
        closeModal() {
            document.body.classList.remove('body-no-scroll');
            // Additional code to close the modal
        },
        closeToolTips() {
            this.$emit('close');
            console.log("This is the close button");
        }
    },
    beforeDestroy() {
        // Ensure that the class is removed from body when this component is destroyed
        this.closeModal();
    }
}
</script>

<style lang="scss" scoped>
@import '~assets/scss/vars';

.toolTips {
    .modal-backdrop {
        position: fixed;
        z-index: 10;
        width: 100vw;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.733);
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .modal-content {
        display: flex; // Utilizing Flexbox
        flex-direction: column; // Arranging children (modal-body and closeBtn) vertically
        padding: 10px;
        background-color: #141414;
        border-radius: 10px;
    }

    .modal-body {
        flex-grow: 1; 
    }

    .modalTitle {
        font-size: clamp(15px, 5vw, 40px);
        color: white;
        margin-bottom: 20px;
        text-align: center;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        padding: 20px;
        letter-spacing: 2px;
    }

    .tips {
        color: white;
    }

    .closeBtn {
        margin: 20px;
        display: flex;
        justify-content: flex-end;
    }

    .btnBase {
        cursor: pointer;
        font-family: $font-family;
        margin-bottom: 12px;
        border-radius: 10px;
        color: #fff;
        letter-spacing: 2px;
        font-weight: 600;
        border: none;
        box-shadow: 3px 3px 5px rgb(61, 61, 61);
        min-width: 100px;
    }

    .lightBlueButton {
        @extend .btnBase; // Use shared button styles
        background: linear-gradient(268deg, #5ac3fc, #01a8ff);
        padding: 10px;

        &:hover {
            background: linear-gradient(268deg, #51b4e9, #0097e9);
            box-shadow: 2px 2px 5px rgb(61, 61, 61);
        }

        &:focus {
            background: linear-gradient(268deg, #479fce, #0088d1);
            box-shadow: 1px 1px 5px rgb(61, 61, 61);
        }
    }

    .swap {
        @extend .btnBase; // Use shared button styles
        background: linear-gradient(268deg, #09e1fe, #02d1ec);
        padding: 10px;
    }

    .translateBtn {
        @extend .btnBase; // Use shared button styles
        background: linear-gradient(268deg, #0999fe, #0249ec);
        padding: 10px;
    }

    .toolRow {
        align-items: center;
        margin-bottom: 20px;
    }

    .microphoneImage {
        border-radius: 10px;
    }

    .bold {
        font-weight: bold;
        color: red;
    }

    p {
        margin-bottom: 0;
    }

    .modalTitle,
    .tips {
        margin-top: 0;
    }

    .row>.col-3 {
        display: flex;
        align-items: center;
        justify-content: center;
    }
}

@media (max-width: 768px) {

    .modal-content {
        max-height: 80vh;
        overflow-y: auto;
    }
    
}
</style>
