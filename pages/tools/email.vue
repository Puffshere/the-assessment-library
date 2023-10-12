<template>
    <section class="email">
        <tool-tips v-if="toolTips" @close="toolTips = false" />
        <!-- This is the template modal -->
        <div v-if="showModal" class="modal-backdrop">
            <div class="container col-12">
                <div class="modal-content">
                    <div class="row">
                        <p class="modalTitle">Avaliable Templates</p>
                        <hr>
                        <p class="templates" @click="helloTemplate">Hello Email</p>
                        <p class="templates" @click="surveyTemplate">Survey and Free Assessment</p>
                        <p class="templates" @click="followUpTemplate">Follow Up Email</p>
                        <div class="closeBtn">
                            <button @click="closeModal" class="modalCloseBtn modalBtn">Close</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div v-if="isLoading" class="modal-backdrop">
            <div class="container">
                <div class="">
                    <img src="./../../assets/Spinning-Wheel-Image.png" class="formatSpinning" alt="spinning wheel">
                </div>
            </div>
        </div>
        <main-nav />

        <section class="header">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <h1 class="section-title">DISC AI Email Generator</h1>
                    </div>
                </div>
            </div>
        </section>

        <div v-if="!userInput">
            <a href="https://www.assessments24x7.com/communication-coach" class="notSure">Not sure what style to use?</a>
        </div>

        <section class="body">
            <div class="container">
                <div v-if="!readyToFormatText" class=" bar col-12">
                    <div class="row">
                        <div class="col-3 first">
                            <div class="dropdown-trigger" :class="styleColor1" @click="toggleDropdown1">{{ adaptedStyle ||
                                'Recipient Adapted Style' }}
                                <svg :class="{ 'chevron-selected': dropdownActive1 }" xmlns="http://www.w3.org/2000/svg"
                                    fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                </svg>
                            </div>
                            <div class="dropdown"
                                :class="{ 'dropdown-active': dropdownActive1, 'dropdown-nonActive': !dropdownActive1 }">
                                <div class="dropdown__left-panel">
                                    <div :class="{ 'circle-grow': circleGrows1[0] }" class="circle circle-1"></div>
                                    <div :class="{ 'circle-grow': circleGrows1[1] }" class="circle circle-2"></div>
                                    <div :class="{ 'circle-grow': circleGrows1[2] }" class="circle circle-3"></div>
                                </div>
                                <div class="dropdown__right-panel">
                                    <div v-for="(item, index) in adaptedDropdownItems" :key="index"
                                        :class="{ 'dropdown__item-active': item.active }" class="dropdown__item"
                                        @click="selectItemAdapted(item)">
                                        <span>{{ item.value }}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-3">

                            <div class="dropdown-trigger" :class="styleColor2" @click="toggleDropdown2">{{ naturalStyle ||
                                'Recipient Natural Style' }}
                                <svg :class="{ 'chevron-selected': dropdownActive2 }" xmlns="http://www.w3.org/2000/svg"
                                    fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                </svg>
                            </div>

                            <div class="dropdown"
                                :class="{ 'dropdown-active': dropdownActive2, 'dropdown-nonActive': !dropdownActive2 }">
                                <div class="dropdown__left-panel">
                                    <div :class="{ 'circle-grow': circleGrows2[0] }" class="circle circle-1"></div>
                                    <div :class="{ 'circle-grow': circleGrows2[1] }" class="circle circle-2"></div>
                                    <div :class="{ 'circle-grow': circleGrows2[2] }" class="circle circle-3"></div>
                                </div>
                                <div class="dropdown__right-panel">
                                    <div v-for="(item, index) in naturalDropdownItems" :key="index"
                                        :class="{ 'dropdown__item-active': item.active }" class="dropdown__item"
                                        @click="selectItemNatural(item)">
                                        <span>{{ item.value }}</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- <select class="col-3 drop" v-model="language">
                            <option disabled :value="null">{{ language || 'English' }}</option>
                            <option v-for="language in languages" :key="language.id" :value="language.name">{{ language.name
                            }}</option>
                        </select> -->

                        <div class="col-3 dropLanguage" @click="toggleDropdown3">{{ language || 'Language' }}
                            <svg :class="{ 'chevron-selected': dropdownActive3 }" xmlns="http://www.w3.org/2000/svg"
                                fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                            </svg>
                        </div>

                        <div class="dropdown--language"
                            :class="{ 'dropdown-active': dropdownActive3, 'dropdown-nonActive': !dropdownActive3 }">
                            <div class="dropdown__language">
                                <div v-for="(languageItem, index) in languages" :key="index"
                                    :class="{ 'dropdown__item-activeLanguage': languageItem.active }"
                                    class="dropdown__itemLanguage" @click="selectItemLanguage(languageItem)">
                                    <span>{{ languageItem.value }}</span>
                                </div>
                            </div>
                        </div>

                        <img class="col-1 questionmark" @click="showTips" src="./../../assets/questionmark.png" />

                        <img :class="['col-1', 'speech_to_text', { 'activeSTT': recognitionActive }]"
                            src="./../../assets/SpeechToText.png" @click="toggleRecognition" />

                    </div>
                </div>

                <div v-else class="bar col-12">
                    <div class="row styles">

                        <div class="col-6">
                            <h2 class="formatBar">Would you like to format this text?</h2>
                        </div>

                        <div class="col-2">
                            <button @click="yesFormatText" class="formatBtnYes btn">YES</button>
                        </div>

                        <div class="col-2">
                            <button @click="noFormatText" class="formatBtnNo btn">NO</button>
                        </div>

                        <img src="./../../assets/fullCircle.png" class="col-1 formatGenerator" alt="generator">

                    </div>
                </div>

                <textarea class="inputStyling" v-model="userInput" @keydown="handleKeyDown"
                    placeholder="Paste email here to be altered...">
                </textarea>

                <div type='text' v-if="response" class="formatted-response">{{ response }}</div>

                <div class="container bar bar2">
                    <div class="row col-12 button-container">

                        <div class="col-4">
                            <button @click="translateText" class="btn translateBtn">Translate</button>
                        </div>

                        <div class="col-4 center-button">
                            <button v-if="response" @click="swapOutput" class="swap btn">Swap</button>
                            <button v-else @click="templateOptions" class="swap btn">Templates</button>
                        </div>

                        <div class="col-4">
                            <button type="submit" @click="submitMessage" class="generate btn">Submit</button>
                        </div>

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
import Questionmark from '@/components/Questionmark';
import axios from 'axios';


export default {
    components: {
        'main-nav': Nav,
        'footer-fold': Footer,
        'tool-tips': Questionmark
    },
    data() {
        return {
            adaptedStyle: "",
            naturalStyle: "",
            selectedStyle1: '',
            selectedStyle2: '',
            language: "English",
            languages: [
                { id: 1, name: 'English', value: 'English', active: false },
                { id: 2, name: 'Arabic', value: 'Arabic', active: false },
                { id: 3, name: 'Chinese (Simplified)', value: 'Chinese (Simplified)', active: false },
                { id: 4, name: 'Chinese (Traditional)', value: 'Chinese (Traditional)', active: false },
                { id: 5, name: 'Croatian', value: 'Croatian', active: false },
                { id: 6, name: 'Danish', value: 'Danish', active: false },
                { id: 7, name: 'Dutch (Standard)', value: 'Dutch (Standard)', active: false },
                { id: 8, name: 'English (Australia)', value: 'English (Australia)', active: false },
                { id: 9, name: 'English (United Kingdom)', value: 'English (United Kingdom)', active: false },
                { id: 10, name: 'Finnish', value: 'Finnish', active: false },
                { id: 11, name: 'French (Canada)', value: 'French (Canada)', active: false },
                { id: 12, name: 'French (France)', value: 'French (France)', active: false },
                { id: 13, name: 'German (Germany)', value: 'German (Germany)', active: false },
                { id: 14, name: 'Hungarian', value: 'Hungarian', active: false },
                { id: 15, name: 'Indonesian', value: 'Indonesian', active: false },
                { id: 16, name: 'Italian', value: 'Italian', active: false },
                { id: 17, name: 'Japanese', value: 'Japanese', active: false },
                { id: 18, name: 'Khmer (Cambodia)', value: 'Khmer (Cambodia)', active: false },
                { id: 19, name: 'Korean', value: 'Korean', active: false },
                { id: 20, name: 'Latvian', value: 'Latvian', active: false },
                { id: 21, name: 'Lithuanian', value: 'Lithuanian', active: false },
                { id: 22, name: 'Malay (Malaysia)', value: 'Malay (Malaysia)', active: false },
                { id: 23, name: 'Norwegian', value: 'Norwegian', active: false },
                { id: 24, name: 'Polish', value: 'Polish', active: false },
                { id: 25, name: 'Portuguese (Brazil)', value: 'Portuguese (Brazil)', active: false },
                { id: 26, name: 'Portuguese (Portugal)', value: 'Portuguese (Portugal)', active: false },
                { id: 27, name: 'Romanian', value: 'Romanian', active: false },
                { id: 28, name: 'Russian', value: 'Russian', active: false },
                { id: 29, name: 'Slovak', value: 'Slovak', active: false },
                { id: 30, name: 'Spanish', value: 'Spanish', active: false },
                { id: 31, name: 'Spanish (Latin Americana)', value: 'Spanish (Latin Americana)', active: false },
                { id: 32, name: 'Spanish (Spain)', value: 'Spanish (Spain)', active: false },
                { id: 33, name: 'Swedish', value: 'Swedish', active: false },
                { id: 34, name: 'Turkish', value: 'Turkish', active: false },
                { id: 35, name: 'Vietnamese', value: 'Vietnamese', active: false },
            ],
            userInput: '',
            response: '',
            alteredEmail: [],
            isLoading: false,
            recognition: null,
            recognitionActive: false,
            readyToFormatText: false,
            showModal: false,
            toolTips: false,
            dropdownActive1: false,
            dropdownActive2: false,
            dropdownActive3: false,
            circleGrows1: [false, false, false],
            circleGrows2: [false, false, false],
            adaptedDropdownItems: [
                { id: 1, name: 'D', value: 'D - Dominance', active: false },
                { id: 2, name: 'I', value: 'I - Influence', active: false },
                { id: 3, name: 'S', value: 'S - Steadiness', active: false },
                { id: 4, name: 'C', value: 'C - Conscientiousness', active: false }
            ],
            naturalDropdownItems: [
                { id: 1, name: 'D', value: 'D - Dominance', active: false },
                { id: 2, name: 'I', value: 'I - Influence', active: false },
                { id: 3, name: 'S', value: 'S - Steadiness', active: false },
                { id: 4, name: 'C', value: 'C - Conscientiousness', active: false }
            ]
        };
    },
    computed: {
        styleColor1() {
            return {
                'color-D': this.selectedStyle1 === 'D',
                'color-I': this.selectedStyle1 === 'I',
                'color-S': this.selectedStyle1 === 'S',
                'color-C': this.selectedStyle1 === 'C'
            };
        },
        styleColor2() {
            return {
                'color-D': this.selectedStyle2 === 'D',
                'color-I': this.selectedStyle2 === 'I',
                'color-S': this.selectedStyle2 === 'S',
                'color-C': this.selectedStyle2 === 'C'
            };
        },
        promptContext() {
            return `Rewrite the original email, emphasizing the DISC traits provided below.  Write the new email in ${this.language} with correct email formatting.

Adapted: ${this.adaptedStyle}
Natural: ${this.naturalStyle}

Incorporate these nuances:
If multiple DISC traits are provided, ensure the email is a balanced reflection of all specified traits.
Vocabulary: Use words that resonate with the specific DISC trait. E.g., action-oriented for D, enthusiastic for I, harmonious for S, and analytical for C.
Punctuation & Formatting: Adjust sentence lengths and punctuation to reflect the trait's characteristics. 
D might prefer brevity, I emotive punctuation, S connected sentences, and C precise detailing.
CTA (Call to Action): Tailor the conclusion or request based on the trait. D being directive, I collaborative, S supportive, and C instructive.
Structure & Flow: D should be direct and prioritize main points, I may start personally, S should maintain balance, and C needs clear, detailed flow.
Tone Modifiers: Reflect the tone associated with each trait—D as assertive, I as upbeat, S as calm, and C as methodical.

Here's the original email:`
        },
        promptTranslate() {
            return `Translate the following text into ${this.language}, here is the text to be translated:`
        },
        promptFormat() {
            return `Reformat the following raw text into proper and grammatically correct email format:`
        },
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
            this.showModal = false;
        },
        surveyTemplate() {
            this.userInput = this.surveyTemplateText;
            this.showModal = false;
        },
        followUpTemplate() {
            this.userInput = this.followUpTemplateText;
            this.showModal = false;
        },
        showTips() {
            this.toolTips = true;
            console.log("This is the questionmark button", this.toolTips);
        },
        toggleDropdown1() {
            this.dropdownActive1 = !this.dropdownActive1;

            this.circleGrows1.forEach((_, index) => {
                setTimeout(() => {
                    this.$set(this.circleGrows1, index, !this.circleGrows1[index]);
                }, index * 200);
            });

            this.adaptedDropdownItems.forEach((_, index) => {
                setTimeout(() => {
                    this.$set(this.adaptedDropdownItems, index, { ...this.adaptedDropdownItems[index], active: !this.adaptedDropdownItems[index].active });
                }, index * 200);
            });
        },
        toggleDropdown2() {
            this.dropdownActive2 = !this.dropdownActive2;

            this.circleGrows2.forEach((_, index) => {
                setTimeout(() => {
                    this.$set(this.circleGrows2, index, !this.circleGrows2[index]);
                }, index * 200);
            });

            this.naturalDropdownItems.forEach((_, index) => {
                setTimeout(() => {
                    this.$set(this.naturalDropdownItems, index, { ...this.naturalDropdownItems[index], active: !this.naturalDropdownItems[index].active });
                }, index * 200);
            });
        },
        toggleDropdown3() {
            this.dropdownActive3 = !this.dropdownActive3;

            this.languages.forEach((_, index) => {
                setTimeout(() => {
                    this.$set(this.languages, index, { ...this.languages[index], active: !this.languages[index].active });
                }, index * 0);
            });
        },
        selectItemAdapted(item) {
            this.adaptedStyle = item.value;
            this.dropdownActive1 = false;
            this.adaptedDropdownItems.forEach(i => i.active = i === item);
            this.circleGrows1 = this.circleGrows1.map(() => false);
            this.selectedStyle1 = item.name;
        },
        selectItemNatural(item) {
            this.naturalStyle = item.value;
            this.dropdownActive2 = false;
            this.naturalDropdownItems.forEach(i => i.active = i === item);
            this.circleGrows2 = this.circleGrows2.map(() => false);
            this.selectedStyle2 = item.name;
        },
        selectItemLanguage(languageItem) {
            this.language = languageItem.value;
            this.dropdownActive3 = false;
            this.languages.forEach(i => i.active = i === languageItem);
        },
        handleKeyDown(event) {
            if (event.key === 'Enter') {
                if (event.shiftKey) {
                    // If Shift + Enter is pressed, insert a newline
                    event.preventDefault();

                    const start = event.target.selectionStart;
                    const end = event.target.selectionEnd;

                    // Update the userInput model by inserting a newline character at the cursor position
                    this.userInput = this.userInput.substring(0, start) + '\n' + this.userInput.substring(end);

                    // Update the cursor position after Vue updates the DOM
                    this.$nextTick(() => {
                        event.target.selectionStart = event.target.selectionEnd = start + 1;
                    });
                } else {
                    // If only Enter is pressed, call the submitMessage method
                    this.submitMessage();
                }
            }
        },
        toggleRecognition() {
            if (!("webkitSpeechRecognition" in window)) {
                alert("Your browser does not support Speech Recognition.");
                return;
            }

            if (this.recognitionActive) {
                this.recognition.stop();
                this.recognitionActive = false;
                this.readyToFormatText = true;
                return;
            }

            this.recognition = new webkitSpeechRecognition();
            this.recognition.continuous = true;
            this.recognition.interimResults = true;

            this.recognition.onresult = (event) => {
                let interimTranscript = "";
                for (let i = event.resultIndex; i < event.results.length; i++) {
                    const transcript = event.results[i][0].transcript;
                    if (event.results[i].isFinal) {
                        this.userInput += transcript;
                    } else {
                        interimTranscript += transcript;
                    }
                }
            };

            this.recognition.onend = () => {
                this.recognitionActive = false;
                console.log("Speech Recognition has stopped.");
            };

            this.recognitionActive = true;
            this.recognition.start();
        },
        noFormatText() {
            this.readyToFormatText = false;
        },
        async yesFormatText() {
            this.isLoading = true;
            // Code needed for development
            // const endpoint = "http://localhost:3000/api/completions";
            const endpoint = "/api/completions";
            const combinedInput = this.promptFormat + '\n\n' + this.userInput;

            try {
                const result = await axios.post(endpoint, { input: combinedInput });

                if (result.data && result.data.choices && result.data.choices[0] && result.data.choices[0].message) {
                    this.userInput = result.data.choices[0].message.content;
                }

                this.isLoading = false;

            } catch (error) {
                this.isLoading = false;
                console.error("Error fetching data from proxy server:", error);
            }

            this.readyToFormatText = false;
        },
        async translateText() {
            if (this.userInput && this.userInput !== "Please add text to be translated!") {
                this.isLoading = true;
                // Code needed for development
                // const endpoint = "http://localhost:3000/api/completions";
                const endpoint = "/api/completions";
                const combinedInput = this.promptTranslate + '\n\n' + this.userInput;

                try {
                    const result = await axios.post(endpoint, { input: combinedInput });

                    if (result.data && result.data.choices && result.data.choices[0] && result.data.choices[0].message) {
                        this.response = result.data.choices[0].message.content;
                    }

                    this.isLoading = false;

                } catch (error) {
                    this.isLoading = false;
                    console.error("Error fetching data from proxy server:", error);
                }
            } else {
                this.userInput = "Please add text to be translated!"
            }
        },
        templateOptions() {
            const bodySection = this.$el.querySelector('.body');
            bodySection.classList.add('no-scroll');

            this.showModal = true;
        },
        closeModal() {
            const bodySection = this.$el.querySelector('.body');
            bodySection.classList.remove('no-scroll');

            this.showModal = false;
        },
        swapOutput() {
            this.userInput = this.response;
            this.response = "";
        },
        async submitMessage() {
            if (this.userInput && this.userInput !== "Please add an email to be altered!") {
                this.isLoading = true;
                // Code needed for development
                // const endpoint = "http://localhost:3000/api/completions";
                const endpoint = "/api/completions";
                const combinedInput = this.promptContext + '\n\n' + this.userInput;

                try {
                    const result = await axios.post(endpoint, { input: combinedInput });

                    if (result.data && result.data.choices && result.data.choices[0] && result.data.choices[0].message) {
                        this.response = result.data.choices[0].message.content;
                    }

                    this.isLoading = false;

                } catch (error) {
                    this.isLoading = false;
                    console.error("Error fetching data from proxy server:", error);
                }
            } else {
                this.userInput = "Please add an email to be altered!"
            }
        },
        head() {
            return {
                title: 'DISC AI Email Generator | Assessments 24x7',
                meta: [
                    {
                        hid: 'description',
                        name: 'description',
                        content: 'A tool to help users generate emails based on reciepients Adapted and Natural D.I.S.C. styles.'
                    }
                ]
            }
        },
    }
}
</script>

<style lang="scss" scoped>
@import '~assets/scss/vars';


$primary-color: #ced5d8;
$bg-color: #f8fafc;
$border-radius: 0.5rem;

.no-scroll {
    overflow: hidden;
}

.email {

    .first {
        margin-right: 70px;
        margin-left: 20px;
    }

    .color-D {
        background-color: #e93d2f !important;
        color: white !important;
    }

    .color-I {
        background-color: #1666ff !important;
        color: white !important;
    }

    .color-S {
        background-color: #0dab49 !important;
        color: white !important;
    }

    .color-C {
        background-color: yellow !important;
    }

    .dropdown--language {
        position: right;
        width: 17rem;
        background-color: #1e222d;
        border-radius: $border-radius;
        opacity: 0;
        margin-top: 10px;
        z-index: 1;
        margin-left: 60%;
        margin-top: 65px;

        .dropdown__right-panelLanguage {
            z-index: 1;

            .dropdown__item-activeLanguage {
                opacity: 1;
            }
        }

        .dropdown__language {
            overflow-y: auto;
            max-height: 500px;

            .dropdown__itemLanguage {
                gap: 1rem;
                padding: 1rem 0.25rem 1rem 2rem;
                cursor: pointer;
                font-weight: 400;
                line-height: 24px;
                opacity: 0;
                color: white;

                &:hover {
                    background-color: rgba(193, 195, 196, 0.781);
                }

                &:focus {
                    background-color: rgba(221, 223, 224, 0.781);
                }
            }

            .dropdown__item-activeLanguage {
                opacity: 1;
            }

        }
    }

    .dropdown-trigger {
        width: 19rem;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 8px 2rem;
        background-color: $primary-color;
        border-radius: $border-radius;
        cursor: pointer;
        margin-top: -5px;
        margin-bottom: 5px;
        box-shadow: 3px 3px 5px rgb(61, 61, 61);
        font-size: 18px;

        svg {
            width: 2rem;
            transition: transform 0.5s ease-in-out;
        }

        .chevron-selected {
            transform: rotate(180deg);
        }
    }

    .dropdown {
        width: 20rem;
        display: flex;
        background-color: #1e222d;
        border-radius: $border-radius;
        opacity: 0;
        transition: opacity 0.5s ease-in-out;
        margin-top: 10px;

        .dropdown__left-panel {
            width: 5rem;
            position: relative;
            background-color: #1666ff;
            border-radius: $border-radius 0 0 $border-radius;
            overflow: hidden;
            z-index: 10;

            @mixin circle {
                position: absolute;
                border-radius: 50%;
                opacity: 0;
                transform: scale(0.1);
                transition: transform 1s ease-in-out;
            }

            .circle-1 {
                @include circle;
                width: 1.5rem;
                height: 1.5rem;
                top: 0.5rem;
                right: 0.2rem;
                background-color: #0dab49;
            }

            .circle-2 {
                @include circle;
                width: 4rem;
                height: 4rem;
                top: 3rem;
                left: -2rem;
                background-color: #e93d2f;
            }

            .circle-3 {
                @include circle;
                width: 0.75rem;
                height: 0.75rem;
                bottom: 0.5rem;
                right: 1rem;
                background-color: yellow;
            }

            .circle-grow {
                opacity: 1;
                transform: scale(1);
            }
        }

        .dropdown__right-panel {
            display: flex;
            flex-direction: column;
            flex-grow: 2;
            z-index: 10px;

            .dropdown__item {
                display: flex;
                align-items: center;
                justify-content: space-between;
                gap: 1rem;
                padding: 1rem 0.25rem 1rem 2rem;
                cursor: pointer;
                transition: background-color 0.3s ease-in-out;
                font-weight: 400;
                line-height: 24px;
                opacity: 0;
                color: white;
                transform: translateY(0.5rem);
                transition: opacity, transform 0.5s ease-in-out;

                &:hover {
                    background-color: rgba(193, 195, 196, 0.781);
                }

                &:focus {
                    background-color: rgba(221, 223, 224, 0.781);
                }
            }

            .dropdown__item-active {
                opacity: 1;
                transform: translatey(0);
            }

        }
    }

    .dropdown-active {
        opacity: 1;
        position: absolute;
    }

    .dropdown-nonActive {
        display: none;
    }

    .header {
        background: url('~assets/about.jpg');
        background-size: cover;
        color: #fff;
        text-align: center;
        padding: 50px 0;
        margin-bottom: 15px;

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

    .notSure {
        cursor: pointer;
        font-size: large;
        position: absolute;
        left: 50%;
        bottom: 40%;
        transform: translateX(-50%);
        color: rgb(34, 98, 238);
    }

    .notSure:hover {
        font-size: 25px;
    }

    .body {

        font-family: "Roboto", sans-serif;
        display: flex;
        justify-content: center;
        align-items: center;

        .bar {
            width: 100%;
            background-color: rgba(128, 128, 128, 0.301);
            border-radius: 5px;
            box-shadow: 2px 5px 10px rgba(61, 61, 61, 0.507);
            border: 1px solid rgb(168, 169, 170);
            padding-top: 10px;
            margin-bottom: 20px;
        }

        .formatBar {
            margin-top: 0px;
            margin-bottom: -10px;
            display: flex;
            justify-content: center;
            padding-top: 3px;
            letter-spacing: 2px;
            color: rgb(51, 51, 51);
        }

        .bar2 {
            margin-bottom: 30px;
        }

        .questionmark {
            position: relative;
            cursor: pointer;
            width: 16px;
            margin-top: 11px;
            margin-left: 47px;
            margin-right: -78px;
        }

        .questionmark:hover {
            width: 18px;
        }

        .speech_to_text {
            position: relative;
            right: -8%;
            margin-top: 11px;
            max-width: 40px;
            cursor: pointer;
        }

        .activeSTT {
            background: linear-gradient(268deg, #9bfa9f, #90f883);
            box-shadow: 2px 2px 5px rgb(61, 61, 61);
            border-radius: 5px;
        }

        .speech_to_text:hover {
            background: linear-gradient(268deg, #d2d3d3, #b9b9b9);
            box-shadow: 2px 2px 5px rgb(61, 61, 61);
            border-radius: 5px;
        }

        .speech_to_text:active {
            background: linear-gradient(268deg, #c1c2c2, #a5a5a5);
            box-shadow: 1px 1px 5px rgb(61, 61, 61);
        }

        .styles {
            margin-bottom: 20px;
        }

        .inputStyling {
            cursor: pointer;
            width: 100%;
            min-height: 400px;
            border-radius: 5px;
            padding-left: 20px;
            padding-right: 15px;
            padding-top: 20px;
            margin-bottom: 15px;
            border: 4px solid rgb(61, 107, 204);
            box-shadow: 5px 5px 5px rgb(61, 61, 61);
            box-shadow: 5px 5px 10px rgb(61, 61, 61);
            font-size: 20px;
        }

        .drop {
            cursor: pointer;
            padding: 11px;
            border-radius: 5px;
            font-family: monospace;
            justify-content: space-between;
            font-weight: 500;
            font-size: 20px;
            margin-top: 3px;
            margin-left: 70px;
            background-color: #09e0fd;
            color: white;
            letter-spacing: 1px;
            text-shadow: .5px .5px .5px rgba(0, 0, 0, 0.404);
            box-shadow: 3px 3px 5px rgb(61, 61, 61);
            border: none;

            svg {
                width: 2rem;
                transition: transform 0.5s ease-in-out;
            }

            .chevron-selected {
                transform: rotate(180deg);
            }

            .style {
                min-width: 20px !important;
            }
        }

        .dropLanguage {
            display: flex;
            align-items: center;
            cursor: pointer;
            padding: 11px;
            border-radius: 5px;
            font-family: monospace;
            justify-content: space-between;
            font-weight: 500;
            font-size: 20px;
            margin-top: 3px;
            margin-left: 70px;
            max-height: 48px;
            background-color: #09e0fd;
            color: white;
            letter-spacing: 1px;
            text-shadow: .5px .5px .5px rgba(0, 0, 0, 0.404);
            box-shadow: 3px 3px 5px rgb(61, 61, 61);
            border: none;

            svg {
                width: 2rem;
                transition: transform 0.5s ease-in-out;
            }

            .chevron-selected {
                transform: rotate(180deg);
            }
        }

        .formatted-response {
            cursor: pointer;
            white-space: pre-line;
            padding: 20px;
            border-radius: 5px;
            overflow-x: auto;
            margin-bottom: 30px;
            border: 4px solid rgb(54, 147, 223);
            box-shadow: 5px 5px 5px rgb(61, 61, 61);
            box-shadow: 5px 5px 10px rgb(61, 61, 61);
            font-size: 20px;
            font-family: monospace;
        }

        .btn {
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

        .center-button {
            display: flex;
            justify-content: center;
            align-items: center;
        }

        .formatBtnYes {
            padding: 9px;
            margin-bottom: -10px;
            float: right;
            color: black;
            background: linear-gradient(268deg, #9cf88a, #22ff04);
        }

        .formatBtnYes:hover {
            background: linear-gradient(268deg, #92e981, #1eec03);
            box-shadow: 2px 2px 5px rgb(61, 61, 61);
        }

        .formatBtnYes:focus {
            background: linear-gradient(268deg, #9cf88a, #22ff04);
            background: linear-gradient(268deg, #82cf73, #1bd403);
            box-shadow: 1px 1px 5px rgb(61, 61, 61);
        }

        .formatBtnNo {
            padding: 9px;
            margin-bottom: -10px;
            background: linear-gradient(268deg, #fc4c4c, #fa0808);
        }

        .formatBtnNo:hover {
            background: linear-gradient(268deg, #e94545, #e70707);
            box-shadow: 2px 2px 5px rgb(61, 61, 61);
        }

        .formatBtnNo:focus {
            background: linear-gradient(268deg, #d63f3f, #d10606);
            box-shadow: 1px 1px 5px rgb(61, 61, 61);
        }

        .translateBtn {
            padding: 10px;
            background: linear-gradient(268deg, #0999fe, #0249ec);
        }

        .translateBtn:hover {
            background: linear-gradient(268deg, #078ae7, #0240d1);
            box-shadow: 2px 2px 5px rgb(61, 61, 61);
        }

        .translateBtn:focus {
            background: linear-gradient(268deg, #0676c7, #0135ad);
            box-shadow: 1px 1px 5px rgb(61, 61, 61);
        }

        .swap {
            align-items: center;
            background: linear-gradient(268deg, #09e1fe, #02d1ec);
            padding: 10px;
        }

        .swap:hover {
            background: linear-gradient(268deg, #07d0eb, #01bad3);
            box-shadow: 2px 2px 5px rgb(61, 61, 61);
        }

        .swap:focus {
            background: linear-gradient(268deg, #07c1da, #01abc2);
            box-shadow: 1px 1px 5px rgb(61, 61, 61);
        }

        .generate {
            background: linear-gradient(268deg, #0999fe, #0249ec);
            float: right;
            padding: 10px;
        }

        .generate:hover {
            background: linear-gradient(268deg, #078ae7, #0240d1);
            box-shadow: 2px 2px 5px rgb(61, 61, 61);
        }

        .generate:focus {
            background: linear-gradient(268deg, #0676c7, #0135ad);
            box-shadow: 1px 1px 5px rgb(61, 61, 61);
        }

        .button-container {
            display: flex;
            margin: 0 auto;
        }

        .generator {
            max-width: 40px;
            margin-left: 110px;
            margin-top: 14px;
            margin-bottom: -4px;
        }

        .formatGenerator {
            max-width: 37px;
            margin-left: 100px;
            margin-top: 10px;
            margin-bottom: -4px;
        }

        @keyframes spin {
            0% {
                transform: rotate(0deg);
            }

            100% {
                transform: rotate(360deg);
            }
        }
    }

    // This is the beginning of the template modal
    .modalCloseBtn {
        align-items: center;
        background: linear-gradient(268deg, #5ac3fc, #01a8ff);
        padding: 10px;
    }

    .modalCloseBtn:hover {
        background: linear-gradient(268deg, #51b4e9, #0097e9);
        box-shadow: 2px 2px 5px rgb(61, 61, 61);
    }

    .modalCloseBtn:focus {
        background: linear-gradient(268deg, #479fce, #0088d1);
        box-shadow: 1px 1px 5px rgb(61, 61, 61);
    }

    .modalBtn {
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

    .modal-backdrop {
        position: fixed;
        z-index: 1;
        width: 100vw;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.733);
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .modal-content {
        padding: 10px;
        background-color: #141414;
        border-radius: 10px;
    }

    .formatSpinning {
        max-width: 100px;
        margin: 45%;
        animation: spin 4s linear infinite;
    }

    .modalTitle {
        font-size: clamp(15px, 5vw, 40px);
        color: white;
        margin-bottom: 20px;
        text-align: center;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
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

    .futureTemplate {
        font-size: clamp(12px, 4vw, 20px);
        color: white;
        margin-bottom: 15px;
        text-align: center;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        opacity: .5;
    }

    .closeBtn {
        max-width: 100px;
        float: right;
        margin-right: 60px;
    }

    .centered-no-wrap {
        white-space: nowrap;
        text-align: center;
    }

    .no-wrap {
        white-space: nowrap;
    }

    // This is the end of the template modal
}


@media screen and (max-width: 500px) {

    .formatBtnYes {
        float: left !important;
    }

    .speech_to_text {
        float: left !important;
        margin-left: 40px !important;
    }
}

@media screen and (max-width: 300px) {

    .btn {
        min-width: none !important;
        max-width: 10% !important;
    }
}
</style>