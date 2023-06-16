<template>
    <section class="account-setup">
        <main-nav/>

        <section class="header">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <h1 class="section-title">Account Setup</h1>
                    </div>
                </div>
            </div>
        </section>

        <div class="container">
            <div class="row flex-center">
                <div class="col-7">
                    <form class="form">
                        <ValidationObserver ref="form">
                            <loading :active="loading" :is-full-page="false" />

                            <div class="row">
                                <div class="col-6">
                                    <div class="form-group">
                                        <ValidationProvider v-slot="v" rules="required">
                                            <label for="firstName">First Name *</label>
                                            <input id="firstName" type="text" v-model="form.firstName" tabindex="1" />
                                            <span class="error">{{ v.errors[0] }}</span>
                                        </ValidationProvider>
                                    </div>
                                </div>

                                <div class="col-6">
                                    <div class="form-group">
                                        <ValidationProvider v-slot="v" rules="required">
                                            <label for="lastName">Last Name *</label>
                                            <input id="lastName" type="text" v-model="form.lastName" tabindex="2" />
                                            <span class="error">{{ v.errors[0] }}</span>
                                        </ValidationProvider>
                                    </div>
                                </div>
                            </div>

                            <div class="row">
                                <div class="col-12" style="margin-top:0">
                                    <div class="form-group">
                                        <ValidationProvider v-slot="v" rules="required">
                                            <label for="company">Company Name *</label>
                                            <input id="company" type="text" v-model="form.company" tabindex="3" />
                                            <span class="error">{{ v.errors[0] }}</span>
                                        </ValidationProvider>
                                    </div>
                                </div>
                            </div>

                            <div class="row">
                                <div class="col-6" style="margin-top:0">
                                    <div class="form-group">
                                        <ValidationProvider v-slot="v" rules="required">
                                            <label for="email">Email Address *</label>
                                            <input id="email" type="text" v-model="form.email" tabindex="4" :readonly="$route.query.email" :disabled="$route.query.email" />
                                            <span class="error">{{ v.errors[0] }}</span>
                                        </ValidationProvider>
                                    </div>
                                </div>

                                <div class="col-6" style="margin-top:0">
                                    <div class="form-group">
                                        <ValidationProvider v-slot="v" rules="required">
                                            <label for="phone">Phone Number *</label>
                                            <input id="phone" type="text" v-model="form.phone" tabindex="5" />
                                            <span class="error">{{ v.errors[0] }}</span>
                                        </ValidationProvider>
                                    </div>
                                </div>
                            </div>

                            <div class="row">
                                <div class="col-6" style="margin-top:0">
                                    <div class="form-group">
                                        <ValidationProvider v-slot="v" rules="required">
                                            <label for="address">Street Address *</label>
                                            <input id="address" type="text" v-model="form.address" tabindex="6" />
                                            <span class="error">{{ v.errors[0] }}</span>
                                        </ValidationProvider>
                                    </div>
                                </div>

                                <div class="col-6" style="margin-top:0">
                                    <div class="form-group">
                                        <ValidationProvider v-slot="v" rules="required">
                                            <label for="country">Country *</label>
                                            <country-select v-model="form.country" :country="form.country" topCountry="US" tabindex="7" />
                                            <span class="error">{{ v.errors[0] }}</span>
                                        </ValidationProvider>
                                    </div>
                                </div>
                            </div>

                            <div class="row">
                                <div class="col-4" style="margin-top:0">
                                    <div class="form-group">
                                        <ValidationProvider v-slot="v" rules="required">
                                            <label for="city">City *</label>
                                            <input id="city" type="text" v-model="form.city" tabindex="8" />
                                            <span class="error">{{ v.errors[0] }}</span>
                                        </ValidationProvider>
                                    </div>
                                </div>

                                <div class="col-4" style="margin-top:0">
                                    <div class="form-group">
                                        <ValidationProvider v-slot="v" rules="required">
                                            <label for="state">State *</label>
                                            <region-select v-model="form.state" :country="form.country" :region="form.state" tabindex="9" />
                                            <span class="error">{{ v.errors[0] }}</span>
                                        </ValidationProvider>
                                    </div>
                                </div>

                                <div class="col-4" style="margin-top:0">
                                    <div class="form-group">
                                        <ValidationProvider v-slot="v" rules="required">
                                            <label for="postalCode">Postal Code *</label>
                                            <input id="postalCode" type="text" v-model="form.postalCode" tabindex="10" />
                                            <span class="error">{{ v.errors[0] }}</span>
                                        </ValidationProvider>
                                    </div>
                                </div>
                            </div>

                            <div class="row">
                                <div class="col-12" style="margin-top:0">
                                    <div class="form-group">
                                        <ValidationProvider v-slot="v">
                                            <label for="website">Website</label>
                                            <input id="website" type="text" v-model="form.website" tabindex="11" />
                                            <span class="error">{{ v.errors[0] }}</span>
                                        </ValidationProvider>
                                    </div>

                                    <div class="form-group">
                                        <label for="website">Account Logo</label>
                                        <vue-file-agent
                                            ref="fileUploader"
                                            :multiple="false"
                                            :accept="'.jpg,.png'"
                                            :averageColor="false"
                                            theme="list"
                                            @select="selectLogo($event)"
                                            v-model="logoToBeUploaded"
                                            tabindex="12">
                                        </vue-file-agent>
                                        <small>For best results, please upload a high resolution image where the longest side is at least 800 pixels.</small>
                                    </div>
                                </div>
                            </div>

                            <div class="col-12">
                                <button class="button" type="button" @click="process" tabindex="13">Submit Account Information</button><br/><br/>
                            </div>
                        </ValidationObserver>
                    </form>
                </div>
            </div>
        </div>

        <footer-fold/>
    </section>
</template>

<script>
    import axios from 'axios';
    import Loading from 'vue-loading-overlay';
    import 'vue-loading-overlay/dist/vue-loading.css';
    import { ValidationProvider, ValidationObserver, extend } from 'vee-validate';
    import * as rules from 'vee-validate/dist/rules';
    import { messages } from 'vee-validate/dist/locale/en.json';

    Object.keys(rules).forEach(rule => {
        extend(rule, {
            ...rules[rule],
            message: messages[rule]
        });
    });

    import Nav from '@/components/Nav';
    import Footer from '@/components/Footer';

    export default {
        components: {
            'main-nav': Nav,
            'footer-fold': Footer,
            Loading,
            ValidationProvider,
            ValidationObserver
        },
        head() {
            return {
                title: 'Account Setup | Assessments 24x7',
                meta: [
                    {
                        hid: 'robots',
                        name: 'robots',
                        content: 'noindex'
                    }
                ]
            }
        },
        data() {
            return {
                loading: false,
                form: {
                    contact: '',
                    company: '',
                    email: '',
                    phone: '',
                    address: '',
                    country: 'US',
                    postalCode: '',
                    city: '',
                    state: '',
                    website: '',
                    logo: ''
                },
                logoToBeUploaded: '',
                isLogoValid: true
            }
        },
        async created() {
            if (this.$route.query.email) {
                this.form.email = this.$route.query.email;
            }

            const response = await axios.get('/api/contact/custom-fields');
            console.log(response.data);
        },
        methods: {
            selectLogo(file) {
                if (file[0].error) {
                    this.isLogoValid = false;
                }
            },
            async process() {
                if (this.logoToBeUploaded && this.isLogoValid) {
                    const response = await this.$refs.fileUploader.upload('/api/upload', { 'X-Test-Header': 'vue-file-agent' }, [this.logoToBeUploaded]);
                    this.form.logo = `https://f002.backblazeb2.com/file/a24x7-client-logos/${response[0].data.fileName}`;
                }

                const validated = await this.$refs.form.validate();

                if (validated) {
                    this.loading = true;

                    try {
                        const { data } = await axios.post('/api/contact', {
                            contact: {
                                email: this.form.email,
                                firstName: this.form.firstName,
                                lastName: this.form.lastName,
                                phone: this.form.phone,
                                fieldValues: [
                                    {
                                        field: '65', // Company Address
                                        value: this.form.address
                                    },
                                    {
                                        field: '66', // Company City
                                        value: this.form.city
                                    },
                                    {
                                        field: '67', // Company State
                                        value: this.form.state
                                    },
                                    {
                                        field: '68', // Company Postal Code
                                        value: this.form.postalCode
                                    },
                                    {
                                        field: '69', // Company Country
                                        value: this.form.country
                                    },
                                    {
                                        field: '70', // Company Website
                                        value: this.form.website
                                    },
                                    {
                                        field: '77', // Logo
                                        value: this.form.logo
                                    }
                                ]
                            }
                        });

                        // TODO: there will probably be some sort of tag that needs automatically added here
                        await axios.post(`/api/contact/${data.contact.id}/tag/826`);

                        // Create an account and associate the contact to it
                        await axios.post(`/api/contact/${data.contact.id}/account`, {
                            company: this.form.company
                        });

                        this.loading = false;

                        this.$toast.open({
                            message: 'Your information has been successfully submitted!',
                            position: 'top',
                            duration: 8000,
                            type: 'success'
                        });

                        this.$router.push('/account-setup-thank-you');
                        
                    } catch(err) {
                        this.loading = false;
                        this.$toast.open({
                            message: 'An unexpected error has occured. Please try again later.',
                            position: 'top',
                            duration: 8000,
                            type: 'error'
                        });
                    }
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
    .account-setup {
        .header {
            background: url('~assets/about.jpg');
            background-size: cover;
            color: #fff;
            text-align: center;
            padding: 70px 0;
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

        .form {
            display: flex;
            border-radius: 20px;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
            padding: 20px;
            margin-bottom: 50px !important;

            label:not(.form-check-label) {
                font-weight: 600;
                font-size: 11pt;
            }
        }
    }
</style>