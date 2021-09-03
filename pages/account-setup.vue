<template>
    <section class="account-setup">
        <main-nav/>

        <section class="header">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <h1 class="section-title">Account Setup</h1>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet ducimus suscipit necessitatibus eligendi inventore dolorem hic 
                            molestias debitis provident nam voluptatibus corrupti ea, tempora non distinctio illum aut reprehenderit velit?
                        </p>
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
                                <div class="col-12">
                                    <div class="form-group">
                                        <ValidationProvider v-slot="v" rules="required">
                                            <label for="contact">Main Contact Name *</label>
                                            <input id="contact" type="text" v-model="form.contact" tabindex="1" />
                                            <span class="error">{{ v.errors[0] }}</span>
                                        </ValidationProvider>
                                    </div>

                                    <div class="form-group">
                                        <ValidationProvider v-slot="v" rules="required">
                                            <label for="company">Company Name *</label>
                                            <input id="company" type="text" v-model="form.company" tabindex="1" />
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
                                            <input id="email" type="text" v-model="form.email" tabindex="1" />
                                            <span class="error">{{ v.errors[0] }}</span>
                                        </ValidationProvider>
                                    </div>
                                </div>

                                <div class="col-6" style="margin-top:0">
                                    <div class="form-group">
                                        <ValidationProvider v-slot="v" rules="required">
                                            <label for="phone">Phone Number *</label>
                                            <input id="phone" type="text" v-model="form.phone" tabindex="1" />
                                            <span class="error">{{ v.errors[0] }}</span>
                                        </ValidationProvider>
                                    </div>
                                </div>
                            </div>

                            <div class="row">
                                <div class="col-12" style="margin-top:0">
                                    <div class="form-group">
                                        <ValidationProvider v-slot="v" rules="required">
                                            <label for="address">Street Address *</label>
                                            <input id="address" type="text" v-model="form.address" tabindex="1" />
                                            <span class="error">{{ v.errors[0] }}</span>
                                        </ValidationProvider>
                                    </div>
                                </div>
                            </div>

                            <div class="row">
                                <div class="col-4" style="margin-top:0">
                                    <div class="form-group">
                                        <ValidationProvider v-slot="v" rules="required">
                                            <label for="country">Country *</label>
                                            <country-select v-model="form.country" :country="form.country" topCountry="US" />
                                            <span class="error">{{ v.errors[0] }}</span>
                                        </ValidationProvider>
                                    </div>
                                </div>

                                <div class="col-4" style="margin-top:0">
                                    <div class="form-group">
                                        <ValidationProvider v-slot="v" rules="required">
                                            <label for="city">City *</label>
                                            <input id="city" type="text" v-model="form.city" tabindex="1" />
                                            <span class="error">{{ v.errors[0] }}</span>
                                        </ValidationProvider>
                                    </div>
                                </div>

                                <div class="col-4" style="margin-top:0">
                                    <div class="form-group">
                                        <ValidationProvider v-slot="v" rules="required">
                                            <label for="state">State *</label>
                                            <region-select v-model="form.state" :country="form.country" :region="form.state" />
                                            <span class="error">{{ v.errors[0] }}</span>
                                        </ValidationProvider>
                                    </div>
                                </div>
                            </div>

                            <div class="row">
                                <div class="col-12" style="margin-top:0">
                                    <div class="form-group">
                                        <ValidationProvider v-slot="v" rules="required">
                                            <label for="website">Website</label>
                                            <input id="website" type="text" v-model="form.website" tabindex="1" />
                                            <span class="error">{{ v.errors[0] }}</span>
                                        </ValidationProvider>
                                    </div>

                                    <div class="form-group">
                                        <label for="website">Account Logo</label>
                                        <vue-file-agent
                                            ref="fileUploader"
                                            :multiple="false"
                                            :accept="'image/jpg,image/png'"
                                            :averageColor="false"
                                            theme="list"
                                            @select="selectLogo($event)"
                                            v-model="form.logo">
                                        </vue-file-agent>
                                    </div>
                                </div>
                            </div>

                            <div class="col-12">
                                <button class="button" type="button" @click="process" tabindex="15">Submit Account Information</button><br/><br/>
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
                    city: '',
                    state: '',
                    website: '',
                    logo: ''
                },
                isLogoValid: true
            }
        },
        methods: {
            selectLogo(file) {
                if (file[0].error) {
                    this.isLogoValid = false;
                }
            },
            process() {
                if (this.form.logo) {

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