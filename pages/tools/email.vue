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

                        <div class="col-3"></div>
                        <img v-if="isLoading" src="./../../assets/Spinning-Wheel-Image.png" class="col-3 spinning">
                        <img v-else src="./../../assets/Power-Generator-PNG-Image.png" class="col-3 generator">

                    </div>
                </div>

                <textarea class="inputStyling" type="text" v-model="userInput" @keyup.enter="submitMessage"
                    placeholder="Paste email here to be altered..." />

                <div type='text' v-if="response" class="formatted-response">{{ response }}</div>

                <div class="button-container">
                    <button type="submit" @click="submitMessage" style="width: 100px" class="generate">Submit</button>
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
            isLoading: false
        };
    },
    computed: {
        promptContext() {
            return `Rewrite the following email, emphasizing the DISC traits:

                    Adapted: ${this.adaptedStyle}
                    Natural: ${this.naturalStyle}

                    Incorporate these nuances:
                    If multiple DISC traits are provided, ensure the email is a balanced reflection of all specified traits.
                    Vocabulary: Use words that resonate with the specific DISC trait. E.g., action-oriented for D, enthusiastic for I, harmonious for S, and analytical for C.
                    Punctuation & Formatting: Adjust sentence lengths and punctuation to reflect the trait's characteristics. D might prefer brevity, I emotive punctuation, S connected sentences, and C precise detailing.
                    CTA (Call to Action): Tailor the conclusion or request based on the trait. D being directive, I collaborative, S supportive, and C instructive.
                    Structure & Flow: D should be direct and prioritize main points, I may start personally, S should maintain balance, and C needs clear, detailed flow.
                    Tone Modifiers: Reflect the tone associated with each trait—D as assertive, I as upbeat, S as calm, and C as methodical.

                    Here's the original email:`
        }
    },
    methods: {
        async submitMessage() {
            this.isLoading = true;
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

        .generator {
            max-width: 40px;
            margin-left: 190px;
        }

        .spinning {
            max-width: 30px;
            margin-left: 190px;
            animation: spin 2s linear infinite;
        }

        @keyframes spin {
            0% {
                transform: rotate(0deg);
            }

            100% {
                transform: rotate(360deg);
            }
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
            margin-bottom: 30px;
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

        .generate {
            cursor: pointer;
            margin-bottom: 40px;
            margin-right: 25px;
            padding: 10px;
            font-family: $font-family;
            margin-bottom: 30px;
            border-radius: 10px;
            color: #fff;
            letter-spacing: 2px;
            font-weight: 600;
            background: linear-gradient(268deg, #0999fe, #0249ec);
            border: none;
            box-shadow: 3px 3px 5px rgb(61, 61, 61);
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
            justify-content: flex-end;
        }

    }
}

@media screen and (max-width: 500px) {
    .generator {
        display: none;
    }

    .spinning {
        display: none;
    }
}
</style>