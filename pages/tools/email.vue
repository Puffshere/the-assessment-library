<template>
    <section class="email">
        <main-nav />

        <section class="header">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <h1 class="section-title">Custom Email Generator</h1>
                    </div>
                </div>
            </div>
        </section>

        <section class="body">
            <div class="container">
                <div class="bar col-12">
                    <div class="row styles">

                        <select class="col-3 drop" v-model="adaptedStyle">
                            <option disabled value="">Adapted Style</option>
                            <option v-for="item in items" :key="item.id" :value="item.name">{{ item.name }}</option>
                        </select>

                        <select class="col-3 drop" v-model="naturalStyle">
                            <option disabled value="">Natural Style</option>
                            <option v-for="item in items" :key="item.id" :value="item.name">{{ item.name }}</option>
                        </select>

                        <select class="col-3 drop" v-model="language">
                            <option disabled :value="null">{{ language || 'English' }}</option>
                            <option v-for="language in languages" :key="language.id" :value="language.name">{{ language.name }}</option>
                        </select>

                        <img :class="['col-2', 'speech_to_text', { 'activeSTT': recognitionActive }]"
                            src="./../../assets/SpeechToText.png" @click="toggleRecognition" />

                        <img v-show="isLoading" src="./../../assets/Spinning-Wheel-Image.png" class="col-1 spinning" alt="spinning wheel">
                        <img v-show="!isLoading" src="./../../assets/Power-Generator-PNG-Image.png" class="col-1 generator" alt="generator">

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
import axios from 'axios';


export default {
    components: {
        'main-nav': Nav,
        'footer-fold': Footer
    },
    data() {
        return {
            adaptedStyle: "",
            naturalStyle: "",
            language: "English",
            languages: [
                { id: 1, name: 'English' },
                { id: 2, name: 'Arabic' },
                { id: 3, name: 'Chinese (Simplified)' },
                { id: 4, name: 'Chinese (Traditional)' },
                { id: 5, name: 'Croatian' },
                { id: 6, name: 'Danish' },
                { id: 7, name: 'Dutch (Standard)' },
                { id: 8, name: 'English (Australia)' },
                { id: 9, name: 'English (United Kingdom)' },
                { id: 10, name: 'Finnish' },
                { id: 11, name: 'French (Canada)' },
                { id: 12, name: 'French (France)' },
                { id: 13, name: 'German (Germany)' },
                { id: 14, name: 'Hungarian' },
                { id: 15, name: 'Indonesian' },
                { id: 16, name: 'Italian' },
                { id: 17, name: 'Japanese' },
                { id: 18, name: 'Khmer (Cambodia)' },
                { id: 19, name: 'Korean' },
                { id: 20, name: 'Latvian' },
                { id: 21, name: 'Lithuanian' },
                { id: 22, name: 'Malay (Malaysia)' },
                { id: 23, name: 'Norwegian' },
                { id: 24, name: 'Polish' },
                { id: 25, name: 'Portuguese (Brazil)' },
                { id: 26, name: 'Portuguese (Portugal)' },
                { id: 27, name: 'Romanian' },
                { id: 28, name: 'Russian' },
                { id: 29, name: 'Slovak' },
                { id: 30, name: 'Spanish' },
                { id: 31, name: 'Spanish (Latin Americana)' },
                { id: 32, name: 'Spanish (Spain)' },
                { id: 33, name: 'Swedish' },
                { id: 34, name: 'Turkish' },
                { id: 35, name: 'Vietnamese' },
            ],
            items: [
                { id: 1, name: 'Pure D' },
                { id: 2, name: 'Pure I' },
                { id: 3, name: 'Pure S' },
                { id: 4, name: 'Pure C' },

                { id: 5, name: 'DI' },
                { id: 6, name: 'DS' },
                { id: 7, name: 'DC' },

                { id: 8, name: 'ID' },
                { id: 9, name: 'IC' },
                { id: 10, name: 'IS' },

                { id: 11, name: 'SD' },
                { id: 12, name: 'SI' },
                { id: 13, name: 'SC' },

                { id: 14, name: 'CD' },
                { id: 15, name: 'CI' },
                { id: 16, name: 'CS' },

                { id: 17, name: 'DIS' },
                { id: 18, name: 'DSI' },
                { id: 19, name: 'DIC' },
                { id: 20, name: 'DCI' },
                { id: 21, name: 'DSC' },
                { id: 22, name: 'DCS' },

                { id: 23, name: 'ISD' },
                { id: 24, name: 'IDS' },
                { id: 25, name: 'ICS' },
                { id: 26, name: 'ISC' },
                { id: 27, name: 'ICD' },
                { id: 28, name: 'IDC' },

                { id: 29, name: 'SCI' },
                { id: 30, name: 'SIC' },
                { id: 31, name: 'SDC' },
                { id: 32, name: 'SCD' },
                { id: 33, name: 'SDI' },
                { id: 34, name: 'SID' },

                { id: 35, name: 'CSD' },
                { id: 36, name: 'CDS' },
                { id: 37, name: 'CDI' },
                { id: 38, name: 'CID' },
                { id: 39, name: 'CIS' },
                { id: 40, name: 'CSI' }
            ],
            userInput: '',
            response: '',
            alteredEmail: [],
            isLoading: false,
            recognition: null,
            recognitionActive: false
        };
    },
    computed: {
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
        }
    },
    methods: {
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

            this.recognition.start();
            this.recognitionActive = true;
        },
        async translateText() {
            this.isLoading = true;
            // Code needed for development
            const endpoint = "http://localhost:3000/api/completions";
            // const endpoint = "/api/completions";
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
        },
        swapOutput() {
            this.userInput = this.response;
            this.response = "";
        },
        async submitMessage() {
            this.isLoading = true;
            // Code needed for development
            const endpoint = "http://localhost:3000/api/completions";
            // const endpoint = "/api/completions";
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
        },
        head() {
            return {
                title: 'Emails | Assessments 24x7',
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
}
</script>

<style lang="scss" scoped>
@import '~assets/scss/vars';

.email {
    .header {
        background: url('~assets/about.jpg');
        background-size: cover;
        color: #fff;
        text-align: center;
        padding: 50px 0;
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

    .body {
        .bar {
            width: 100%;
            background-color: rgba(128, 128, 128, 0.301);
            border-radius: 5px;
            box-shadow: 2px 5px 10px rgba(61, 61, 61, 0.507);
            border: 1px solid rgb(168, 169, 170);
            padding-top: 10px;
            margin-bottom: 20px;
        }
        
        .bar2 {
            margin-bottom: 30px;
        }

        .speech_to_text {
            max-width: 40px;
            padding-top: 5px;
            margin-bottom: -5px;
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

        .generator {
            max-width: 40px;
            margin-left: 110px;
            margin-top: 14px;
            margin-bottom: -4px;
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
            padding-top: 20px;
            margin-bottom: 15px;
            border: 4px solid rgb(61, 107, 204);
            box-shadow: 5px 5px 5px rgb(61, 61, 61);
            box-shadow: 5px 5px 10px rgb(61, 61, 61);
            font-size: 20px;
        }

        .drop {
            cursor: pointer;
            padding: 5px;
            border-radius: 5px;
            border: 2px solid rgb(34, 98, 238);
            box-shadow: 3px 3px 5px rgb(61, 61, 61);
            font-family: monospace;
            font-weight: 500;
            font-size: 16px;
            letter-spacing: 1px;
            margin-bottom: 3px;
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
            padding: 10px;
            font-family: $font-family;
            margin-bottom: 12px;
            border-radius: 10px;
            color: #fff;
            letter-spacing: 2px;
            font-weight: 600;
            background: linear-gradient(268deg, #0999fe, #0249ec);
            border: none;
            box-shadow: 3px 3px 5px rgb(61, 61, 61);
            min-width: 100px;
        }

        .center-button {
            display: flex;
            justify-content: center;
            align-items: center;
        }

        .swap {
            align-items: center;
            background: linear-gradient(268deg, #09e1fe, #02d1ec);
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

        .spinning {
            &:not(.generator) {
                max-width: 30px;
                margin-left: 110px;
                animation: spin 2s linear infinite;
                margin-top: 14px;
                margin-bottom: -4px;
            }
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
}

@media screen and (max-width: 500px) {

    .speech_to_text {
        float: left !important;
        margin-left: 40px !important;
    }

    .generator {
        float: right !important;
        margin-right: 40px !important;
    }

    .spinning {
        float: right !important;
        margin-right: 40px !important;
    }
}

@media screen and (max-width: 300px) {

    .btn {
        min-width: none !important;
        max-width: 10% !important;
    }
}
</style>