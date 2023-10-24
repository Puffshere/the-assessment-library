<template>
    <section class="email">

        <!-- This is the Tips Modal -->
        <tool-tips v-if="toolTips" @close="toolTips = false" />

        <!-- This is the Templates Modal -->
        <templates v-if="emailTemplates" @update-user-input="updateUserInput" @close="emailTemplates = false" />

        <!-- This is the loading Spinner -->
        <div v-if="isLoading" class="modal-backdrop">
            <div class="container">
                <div class="">
                    <img src="./../../assets/Spinning-Wheel-Image.png" class="formatSpinning" alt="spinning wheel">
                </div>
            </div>
        </div>

        <!-- This is the Link in the userInput -->
        <div v-if="!userInput">
            <a href="https://www.assessments24x7.com/communication-coach" class="notSureLinkStyling">Not sure what style to
                use?</a>
        </div>

        <!-- This is the Main Nav Bar -->
        <main-nav />

        <!-- This is the Header Section -->
        <section class="header">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <h1 class="section-title">DISC AI Email Generator</h1>
                    </div>
                </div>
            </div>
        </section>

        <!-- This is the Main Body of the page -->
        <section class="body">
            <div class="container">
                <div v-if="!readyToFormatText" class="bar1 col-12">
                    <div class="row">

                        <!-- If statement for type of Styles dropdown -->
                        <!-- This is the code if user checks box for multiple styles -->
                        <div v-if="isChecked">
                            <div class="col-3">
                                <div class="dropdown-trigger" :class="styleColor1" @click="toggleDropdown1">{{ adaptedStyle
                                    ||
                                    'Recipient Adapted Style' }}
                                    <svg :class="{ 'chevron-selected': dropdownActive1 }" xmlns="http://www.w3.org/2000/svg"
                                        fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round"
                                            d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                    </svg>
                                </div>
                                <div class="dropdown dropPlacement1"
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
                                <div class="dropdown-trigger" :class="styleColor2" @click="toggleDropdown2">{{ naturalStyle
                                    ||
                                    'Recipient Natural Style' }}
                                    <svg :class="{ 'chevron-selected': dropdownActive2 }" xmlns="http://www.w3.org/2000/svg"
                                        fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round"
                                            d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                    </svg>
                                </div>
                                <div class="dropdown dropPlacement2"
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
                        </div>

                        <!-- This is the code if the user has not checked box for multiple styles -->
                        <div v-else>
                            <div class="col-3">
                                <div class="dropdown-trigger" :class="styleColor1" @click="toggleDropdownDisc">{{ discStyle
                                    ||
                                    'DISC Style' }}
                                    <svg :class="{ 'chevron-selected': dropdownActive4 }" xmlns="http://www.w3.org/2000/svg"
                                        fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round"
                                            d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                    </svg>
                                </div>
                                <div class="dropdown dropPlacement1"
                                    :class="{ 'dropdown-active': dropdownActive4, 'dropdown-nonActive': !dropdownActive4 }">
                                    <div class="dropdown__left-panel">
                                        <div :class="{ 'circle-grow': circleGrows1[0] }" class="circle circle-1"></div>
                                        <div :class="{ 'circle-grow': circleGrows1[1] }" class="circle circle-2"></div>
                                        <div :class="{ 'circle-grow': circleGrows1[2] }" class="circle circle-3"></div>
                                    </div>
                                    <div class="dropdown__right-panel">
                                        <div v-for="(item, index) in discDropdownItems" :key="index"
                                            :class="{ 'dropdown__item-active': item.active }" class="dropdown__item"
                                            @click="selectItemDisc(item)">
                                            <span>{{ item.value }}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-3">
                                <div class="additionalStyles" @click="toggleStyles">Additional Style Options</div>
                            </div>
                        </div>

                        <div class="col-3">
                            <div class="dropdown-trigger dropLanguage" @click="toggleDropdown3">{{ language || 'Language' }}
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
                        </div>
                        <div :class="{ 'row': isMobileView, 'icons-row': true }">
                            <div class="col-1 mobile-icon">
                                <img class="questionmark" @click="showTips" src="./../../assets/questionmark.png" />
                            </div>

                            <div class="col-1 mobile-icon">
                                <img :class="['speech_to_text', { 'activeSTT': recognitionActive }]"
                                    src="./../../assets/SpeechToText.png" @click="toggleRecognition" />
                            </div>

                            <div class="col-1 mobile-icon">
                                <img class="clipboard" @click="copyText" src="./../../assets/clipboard.png" />
                            </div>
                        </div>
                    </div>
                </div>

                <div v-else class="bar1 col-12">
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

                        <div class="col-2">
                            <img src="./../../assets/fullCircle.png" class="fullCircle" alt="Full Circle">
                        </div>

                    </div>
                </div>

                <textarea class="inputStyling" v-model="userInput" @keydown="handleKeyDown"
                    placeholder="Paste email here to be altered...">
                </textarea>

                <div type='text' v-if="response" class="formatted-response">{{ response }}</div>

                <div class="container bar2">
                    <div class="row col-12 button-container">

                        <div class="col-4">
                            <button @click="translateText" class="btn translateBtn">Translate</button>
                        </div>

                        <div class="col-4 center-button">
                            <button v-if="response" @click="swapOutput" class="swap btn">Swap</button>
                            <button v-else @click="templateOptions" class="swap btn">Templates</button>
                        </div>

                        <div class="col-4">
                            <button type="submit" @click="submitMessage" class="submit btn">Submit</button>
                        </div>

                    </div>
                </div>

            </div>
        </section>

        <!-- This is the Footer -->
        <footer-fold />

    </section>
</template>


<script>
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import Questionmark from '@/components/emailGenerator/Questionmark';
import Templates from '@/components/emailGenerator/Templates';
import axios from 'axios';


export default {
    components: {
        'main-nav': Nav,
        'footer-fold': Footer,
        'tool-tips': Questionmark,
        'templates': Templates
    },
    data() {
        return {
            discStyle: "",
            adaptedStyle: "",
            naturalStyle: "",
            isChecked: false,
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
            toolTips: false,
            emailTemplates: false,
            dropdownActive1: false,
            dropdownActive2: false,
            dropdownActive3: false,
            dropdownActive4: false,
            circleGrows1: [false, false, false],
            circleGrows2: [false, false, false],
            discDropdownItems: [
                { id: 1, name: 'D', value: 'D - Dominance', active: false },
                { id: 2, name: 'I', value: 'I - Influence', active: false },
                { id: 3, name: 'S', value: 'S - Steadiness', active: false },
                { id: 4, name: 'C', value: 'C - Conscientiousness', active: false }
            ],
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
        isMobileView() {
            // Check if window is defined
            if (typeof window !== 'undefined') {
                return window.innerWidth <= 1220;
            }
            return false;
        },
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
        singleStylePromptContext() {
            return `Perfect Rewrite the original email, emphasizing the DISC trait provided below.  Write the new email in ${this.language} with correct email formatting.  Do not include a subject line.

DISC trait: ${this.discStyle}

Write the new email in the voice of someone emphasising these nuances:
Vocabulary: Use words that resonate with the specific DISC trait. E.g., action-oriented for D, enthusiastic for I, harmonious for S, and analytical for C.
Punctuation & Formatting: Adjust sentence lengths and punctuation to reflect the trait's characteristics. 
D might prefer brevity, I emotive punctuation, S connected sentences, and C precise detailing.
CTA (Call to Action): Tailor the conclusion or request based on the trait. D being directive, I collaborative, S supportive, and C instructive.
Structure & Flow: D should be direct and prioritize main points, I may start personally, S should maintain balance, and C needs clear, detailed flow.
Tone Modifiers: Reflect the tone associated with each trait—D as assertive, I as upbeat, S as calm, and C as methodical.

Here's the original email:`
        },
        promptContext() {
            return `Perfect Rewrite the original email, emphasizing the DISC traits provided below.  Write the new email in ${this.language} with correct email formatting.

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
            return `Perfect Translate the following text into ${this.language}, here is the text to be translated:`
        },
        promptFormat() {
            return `Perfect Reformat the following raw text into proper and grammatically correct email format:`
        }
    },
    mounted() {
        // Check if window is defined
        if (typeof window !== 'undefined') {
            window.addEventListener('resize', this.handleResize);
        }
    },
    destroyed() {
        // Check if window is defined
        if (typeof window !== 'undefined') {
            window.removeEventListener('resize', this.handleResize);
        }
    },
    methods: {
        handleResize() {
            this.$forceUpdate();
        },
        resetActiveStatus() {
            // Function to set active to false for each item in an array
            const deactivateItems = (items) => {
                items.forEach(item => {
                    item.active = false;
                });
            };

            // Applying the function to each of your arrays
            deactivateItems(this.discDropdownItems);
            deactivateItems(this.adaptedDropdownItems);
            deactivateItems(this.naturalDropdownItems);
        },
        toggleStyles() {
            this.isChecked = true;
            this.selectedStyle1 = "";
            this.selectedStyle2 = "";
            this.adaptedStyle = "";
            this.naturalStyle = "";
        },
        async copyText() {
            try {
                if (this.userInput != "") {
                    // Using the Clipboard API to copy the text
                    await navigator.clipboard.writeText(this.userInput);

                    // Show a message confirming the text has been copied
                    alert('Text copied to clipboard');
                } else {
                    alert('No text to copy to clipboard');
                }
            } catch (error) {
                console.error('Failed to copy text: ', error);
            }
        },
        showTips() {
            this.toolTips = true;
        },
        toggleDropdownDisc() {
            if (this.dropdownActive2) {
                this.toggleDropdown2();
            }
            if (this.dropdownActive3) {
                this.toggleDropdown3();
            }
            this.dropdownActive4 = !this.dropdownActive4;

            this.circleGrows1.forEach((_, index) => {
                setTimeout(() => {
                    this.$set(this.circleGrows1, index, !this.circleGrows1[index]);
                }, index * 200);
            });

            this.discDropdownItems.forEach((_, index) => {
                setTimeout(() => {
                    this.$set(this.discDropdownItems, index, { ...this.discDropdownItems[index], active: !this.discDropdownItems[index].active });
                }, index * 200);
            });
        },
        toggleDropdown1() {
            if (this.dropdownActive2) {
                this.toggleDropdown2();
            }
            if (this.dropdownActive3) {
                this.toggleDropdown3();
            }
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
            if (this.dropdownActive1) {
                this.toggleDropdown1();
            }
            if (this.dropdownActive3) {
                this.toggleDropdown3();
            }
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
            if (this.dropdownActive1) {
                this.toggleDropdown1();
            }
            if (this.dropdownActive2) {
                this.toggleDropdown2();
            }
            this.dropdownActive3 = !this.dropdownActive3;

            this.languages.forEach((_, index) => {
                setTimeout(() => {
                    this.$set(this.languages, index, { ...this.languages[index], active: !this.languages[index].active });
                }, index * 0);
            });
        },
        selectItemDisc(item) {
            this.discStyle = item.value;
            this.dropdownActive4 = false;
            this.discDropdownItems.forEach(i => i.active = i === item);
            this.circleGrows1 = this.circleGrows1.map(() => false);
            this.selectedStyle1 = item.name;
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
            this.emailTemplates = true;
        },
        updateUserInput(newUserData) {
            this.userInput = newUserData;
        },
        swapOutput() {
            this.userInput = this.response;
            this.response = "";
        },
        async submitMessage() {
            if (this.isChecked) {
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
                        this.isChecked = false;
                        this.selectedStyle1 = "";
                        this.discStyle = "";
                        this.dropdownActive4 = false;
                        this.resetActiveStatus()
                    } catch (error) {
                        this.isLoading = false;
                        console.error("Error fetching data from proxy server:", error);
                    }
                } else {
                    this.userInput = "Please add an email to be altered!"
                }
            } else {
                if (this.userInput && this.userInput !== "Please add an email to be altered!") {
                    this.isLoading = true;
                    // Code needed for development
                    // const endpoint = "http://localhost:3000/api/completions";
                    const endpoint = "/api/completions";

                    const combinedInput = this.singleStylePromptContext + '\n\n' + this.userInput;


                    try {
                        const result = await axios.post(endpoint, { input: combinedInput });

                        if (result.data && result.data.choices && result.data.choices[0] && result.data.choices[0].message) {
                            this.response = result.data.choices[0].message.content;
                        }

                        this.isLoading = false;
                        this.isChecked = false;
                        this.resetActiveStatus()
                    } catch (error) {
                        this.isLoading = false;
                        console.error("Error fetching data from proxy server:", error);
                    }
                } else {
                    this.userInput = "Please add an email to be altered!"
                }
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


.email {

    .header {
        background: url('~assets/about.jpg');
        background-size: cover;
        color: #fff;
        text-align: center;
        padding: 50px 10px;
        box-shadow: 5px 5px 5px rgb(61, 61, 61);
        box-shadow: 5px 5px 10px rgb(61, 61, 61);

        h1 {
            font-size: 30pt;
            line-height: 34pt;
            margin-bottom: 0;
        }

        .section-title {
            font-size: 30pt;
            margin-top: 0;
        }
    }

    .notSureLinkStyling {
        cursor: pointer;
        font-size: large;
        position: absolute;
        left: 50%;
        bottom: 40%;
        transform: translateX(-50%);
        color: rgb(34, 98, 238);
    }

    .notSureLinkStyling:hover {
        font-size: 25px;
    }

    .body {
        margin: 0 5px;

        .row>.col-3,
        .col-1 {
            display: flex;
            justify-content: right;
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

        .dropdown-trigger {
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 4.5px 10px;
            background-color: $primary-color;
            border-radius: $border-radius;
            cursor: pointer;
            box-shadow: 3px 3px 5px rgb(61, 61, 61);
            font-size: 15px;

            svg {
                width: 2rem;
                transition: transform 0.5s ease-in-out;
            }

            .chevron-selected {
                transform: rotate(180deg);
            }
        }


        .dropdown--language {
            background-color: #1e222d;
            border-radius: $border-radius;
            opacity: 0;
            color: white;
            z-index: 1;
            min-width: 280px;
            margin-top: 58px;
            margin-right: -25px;

            .dropdown__language {
                overflow-y: auto;
                max-height: 500px;

                .dropdown__itemLanguage {
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

        .dropPlacement1 {
            width: 20rem;
        }

        .dropPlacement2 {
            width: 20rem;
        }

        .dropdown {
            display: flex;
            background-color: #1e222d;
            border-radius: $border-radius;
            opacity: 0;
            transition: opacity 0.5s ease-in-out;
            margin-top: 17px;
            margin-left: -45px;
            z-index: 10;

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

        .additionalStyles {
            display: flex;
            justify-content: center;
            align-content: center;
            align-items: center;
            cursor: pointer;
            min-height: 41px;
            width: 100%;
            //padding: 4.5px 10px;
            background-color: $primary-color;
            border-radius: $border-radius;
            box-shadow: 3px 3px 5px rgb(61, 61, 61);
            font-size: 15px;
        }

        .bar1 {
            width: 100%;
            background-color: rgba(128, 128, 128, 0.301);
            border-radius: 5px;
            border: 1px solid rgb(168, 169, 170);
            padding: 5px 0;
            padding-left: 10px;
            margin-top: 30px;
            margin-bottom: 20px;
            box-shadow: 5px 5px 5px rgb(61, 61, 61);
            box-shadow: 5px 5px 10px rgb(61, 61, 61);

            .fullCircle {
                display: block;
                margin: auto;
                position: relative;
                left: -5px;
            }
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
            width: 100%;
            background-color: rgba(128, 128, 128, 0.301);
            border-radius: 5px;
            border: 1px solid rgb(168, 169, 170);
            padding: 5px 0;
            margin-top: 20px;
            margin-bottom: 30px;
            box-shadow: 5px 5px 5px rgb(61, 61, 61);
            box-shadow: 5px 5px 10px rgb(61, 61, 61);
        }

        .questionmark {
            padding-top: 4.5px;
            cursor: pointer;
            width: 16px;
        }

        .questionmark:hover {
            background: linear-gradient(268deg, #d2d3d3, #b9b9b9);
            box-shadow: 2px 2px 5px rgb(61, 61, 61);
            border-radius: 5px;
        }

        .clipboard {
            cursor: pointer;
            width: 40px;
            margin-right: 12px;
        }

        .clipboard:hover {
            background: linear-gradient(268deg, #d2d3d3, #b9b9b9);
            box-shadow: 2px 2px 5px rgb(61, 61, 61);
            border-radius: 5px;
        }

        .speech_to_text {
            padding-top: 4.5px;
            max-width: 41px;
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

        .inputStyling {
            cursor: pointer;
            width: 100%;
            min-height: 400px;
            border-radius: 5px;
            padding-left: 20px;
            padding-right: 15px;
            padding-top: 20px;
            margin-bottom: 0px;
            border: 4px solid rgb(61, 107, 204);
            box-shadow: 5px 5px 5px rgb(61, 61, 61);
            box-shadow: 5px 5px 10px rgb(61, 61, 61);
            font-size: 20px;
        }

        .dropLanguage {
            justify-content: space-between;
            font-weight: 500;
            font-size: 17px;
            background-color: #09e0fd;
            color: white;
            letter-spacing: 1px;
            text-shadow: .5px .5px .5px rgba(0, 0, 0, 0.404);
            box-shadow: 3px 3px 5px rgb(61, 61, 61);
            border: none;
        }

        .formatted-response {
            cursor: pointer;
            white-space: pre-line;
            padding: 20px;
            border-radius: 5px;
            overflow-x: auto;
            margin-top: 15px;
            border: 4px solid rgb(54, 147, 223);
            box-shadow: 5px 5px 5px rgb(61, 61, 61);
            box-shadow: 5px 5px 10px rgb(61, 61, 61);
            font-size: 20px;
            font-family: monospace;
        }

        .btn {
            cursor: pointer;
            font-family: $font-family;
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

        .submit {
            background: linear-gradient(268deg, #0999fe, #0249ec);
            float: right;
            padding: 10px;
        }

        .submit:hover {
            background: linear-gradient(268deg, #078ae7, #0240d1);
            box-shadow: 2px 2px 5px rgb(61, 61, 61);
        }

        .submit:focus {
            background: linear-gradient(268deg, #0676c7, #0135ad);
            box-shadow: 1px 1px 5px rgb(61, 61, 61);
        }

        .button-container {
            display: flex;
            margin: 0 auto;
        }

        .fullCircle {
            max-width: 40px;
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

    .modal-backdrop {
        position: fixed;
        z-index: 20;
        width: 100vw;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.733);
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .formatSpinning {
        max-width: 100px;
        display: block;
        margin: auto;
        animation: spin 4s linear infinite;
    }

}

@media only screen and (max-width: 1220px) {

    .notSureLinkStyling {
        bottom: 57% !important;
        font-size: 13px !important;
    }

    /* Override styles for the button's container */
    div[class*="col-"] {
        width: 100% !important;
        max-width: 100% !important;
        display: block !important;
        flex-direction: column !important;
    }

    /* Override styles for the buttons */
    button.btn {
        width: calc(100% - 15px) !important;
        max-width: 100% !important;
        margin-bottom: 10px !important;
        display: block !important;
        float: none !important;
        align-content: center !important;
    }

    .col-1 {
        text-align: center;
    }

    .bar1 {
        padding-left: 0px !important;
        //overflow: hidden;
    }

    .additionalStyles {
        width: 95% !important;
    }

    .clipboard {
        margin-right: 8px !important;
    }

    .icons-row {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }

    .icons-row .mobile-icon {
        flex-basis: 30%;
        max-width: 30%;
    }

    .dropdown-trigger {
        margin-left: 0px !important;
        margin-right: 80px !important;
        width: 95% !important;
    }

    .dropdown {
        min-width: 95%;
        margin-top: 10px !important;
        margin-left: 0px !important;
    }

    .dropdown--language {
        min-width: 95% !important;
        margin-top: 10px !important;
    }

    .fullCircle {
        display: block;
        margin: auto;
        position: relative;
        left: -5px;
        margin-bottom: 10px;
    }
}
</style>