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
                <div class="row styles">
                    <select class="col-3 drop" v-model="adaptedStyle">
                        <option disabled value="">Adapted Style</option>
                        <option v-for="item in items" :key="item.id" :value="item.name">{{ item.name }}</option>
                    </select>

                    <select class="col-3 drop" v-model="naturalStyle">
                        <option disabled value="">Natural Style</option>
                        <option v-for="item in items" :key="item.id" :value="item.name">{{ item.name }}</option>
                    </select>
                </div>

                <p class="">Alter the email below to be written in the voice of a person keeping these two DISC assessment
                    types in
                    mind: Adapted Style as {{ adaptedStyle }} and Natural Style as {{ naturalStyle }}.</p>

                <input class="inputStyling" type="text" v-model="userInput" @keyup.enter="submitMessage"
                    placeholder="Paste email here to be altered..." />

                <div v-if="response">{{ response }}</div>

                <div type="textarea" class="col-12" v-for="message in alteredEmail" :key="message.id">
                    <div class="response">
                        <p v-if="message.fromUser">{{ message.text }}</p>
                        <p v-else>{{ message.text }}</p>
                    </div>
                </div>

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
        };
    },
    methods: {
        async submitMessage() {
            try {
                const endpoint = "http://localhost:3000/api/completions";

                const body = {
                    prompt: this.userInput,
                    max_tokens: 150
                };

                // Since you're only passing the body, you don't explicitly need headers
                const result = await axios.post(endpoint, body);

                if (result.data && result.data.choices && result.data.choices[0] && result.data.choices[0].text) {
                    this.response = result.data.choices[0].text.trim();
                }
            } catch (error) {
                console.error("Error fetching data from proxy server:", error);
            }
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

    h2 {
        font-size: 20pt;
        line-height: 24pt;
    }

    .body {
        .styles {
            margin-bottom: 20px;
        }

        .inputStyling {
            width: 100%;
            min-height: 400px;
            border-radius: 5px;
            font-size: 20px;
            padding-left: 20px;
            margin-bottom: 30px;
        }

        .drop {
            padding: 5px;
            border-radius: 5px;
        }

        .text {
            min-height: 400px;
            margin-bottom: 25px;
            width: 100%;
        }

        .generate {
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
        }

        .generate:hover {
            background: linear-gradient(268deg, #078ae7, #0240d1);
        }

        .generate:focus {
            background: linear-gradient(268deg, #0676c7, #0135ad);
        }

        .button-container {
            display: flex;
            justify-content: flex-end;
        }
    }
}
</style>