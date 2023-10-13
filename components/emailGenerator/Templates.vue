<template>
    <section class="templates">
        <div class="modal-backdrop">
            <div class="container col-12">
                <div class="modal-content">
                    <div class="row">
                        <p class="modalTitle">Avaliable Templates</p>
                        <hr>
                        <p class="templates" @click="helloTemplate">Hello Email</p>
                        <p class="templates" @click="surveyTemplate">Survey and Free Assessment</p>
                        <p class="templates" @click="followUpTemplate">Follow Up Email</p>
                        <div class="closeBtn">
                            <button @click="closeTemplatesModal" class="lightBlueButton">Close</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    data() {
        return {
            userInput: ''
        }
    },
    computed: {
        helloTemplateText() {
            return `Dear [Recipient],

We look forward to hearing from you and would just like to extend a hello!  If you have any questions feel free to reach out.

Sincerely,
[Author]`;
        },
        surveyTemplateText() {
            return `Dear [Recipient],

We hope this email finds you well. As your assessments and certifications provider, we would greatly value your feedback. Would you have 5 minutes to spare for a quick survey? Your feedback will play a crucial role in tailoring our services to meet your evolving needs.

Take the survey & receive a free DISC assessment

As a thank you for your time, we will send a complimentary DISC assessment link when you have completed the survey. Experience our updated DISC Report, paired with modernized training materials and resources. Enjoy dashboard upgrades, reports, and new assessment options -- now available to all DISCcert clients with no cost to upgrade! 

Schedule an introduction call with your Success Team below.

If you need any additional support, let's connect and see how we can best assist you.

Questions? Contact us!

Sincerely,
[Author]`;
        },
        followUpTemplateText() {
            return `Dear [Recipient],

Thank you for joining us at [Event/Meeting Name]. It was a pleasure to connect with you and we trust you found the experience to be insightful and valuable. 

[Optional: Insert a sentence or two about a key takeaway or highlight from the event/meeting.]

In our continuous effort to enhance our collaborations and events, we’d love to hear about your experiences and any thoughts you might have on how we can improve in the future.

[Optional: If applicable, insert a sentence or two about follow-up materials, such as presentation slides, documentation, or related resources. Example: "We have attached the presentation slides and additional resources for your reference and further exploration."]

If you have any questions or would like to discuss any specific aspects in more detail, please do not hesitate to reach out to us directly. Your insights and feedback are immensely valuable as we strive to continuously improve and better serve you.

Looking forward to our future interactions and once again, thank you for being a vital part of [Event/Meeting Name].

Warm regards,
[Author]
[Your Position]
[Your Contact Information]`;
        }
    },
    methods: {
        helloTemplate() {
            this.userInput = this.helloTemplateText;
            this.$emit('update-user-input', this.userInput);
            this.$emit('close');
        },
        surveyTemplate() {
            this.userInput = this.surveyTemplateText;
            this.$emit('update-user-input', this.userInput);
            this.$emit('close');
        },
        followUpTemplate() {
            this.userInput = this.followUpTemplateText;
            this.$emit('update-user-input', this.userInput);
            this.$emit('close');
        },
        closeTemplatesModal() {
            this.$emit('close');
        }
    },
}
</script>

<style lang="scss" scoped>
@import '~assets/scss/vars';

.templates {
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
        display: flex;
        flex-direction: column;
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

    .templates {
        cursor: pointer;
        font-size: clamp(12px, 4vw, 20px);
        color: white;
        margin-bottom: 15px;
        text-align: center;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }

    .templates:hover {
        text-shadow: 1px 1px 1px rgb(253, 251, 251);
    }

    .templates:focus {
        text-shadow: 1px 1px 1px rgb(182, 181, 181);
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
        @extend .btnBase;
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

    p {
        margin-bottom: 0;
    }

    .modalTitle,

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
