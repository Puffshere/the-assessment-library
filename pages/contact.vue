<template>
    <div class="contact">
        <LazyHydrate when-visible><main-nav active="contact"></main-nav></LazyHydrate>
        <LazyHydrate when-visible><contact-header></contact-header></LazyHydrate>

        <div class="container">
            <div class="row">
                <div class="col-8">
                    <client-only>
                        <form accept-charset="UTF-8" :action="action" class="infusion-form" id="inf_form_15eb1d4945f8c9be32755e675097c33d" method="POST">
                            <input name="inf_form_xid" type="hidden" value="15eb1d4945f8c9be32755e675097c33d" />
                            <input name="inf_form_name" type="hidden" value="Contact Us Webform" />
                            <input name="infusionsoft_version" type="hidden" value="1.70.0.194774" />
                            <div class="infusion-field form-group">
                                <label for="inf_field_FirstName">First Name *</label>
                                <input class="infusion-field-input" id="inf_field_FirstName" name="inf_field_FirstName" placeholder="First Name *" type="text" v-model="firstName" />
                            </div>

                            <div class="infusion-field form-group">
                                <label for="inf_field_LastName">Last Name *</label>
                                <input class="infusion-field-input" id="inf_field_LastName" name="inf_field_LastName" placeholder="Last Name *" type="text" v-model="lastName" />
                            </div>
                            
                            <div class="infusion-field form-group">
                                <label for="inf_field_Email">Email *</label>
                                <input class="infusion-field-input" id="inf_field_Email" name="inf_field_Email" placeholder="Email *" type="text" />
                            </div>
                            
                            <div class="infusion-field form-group">
                                <label for="inf_field_Phone1">Phone *</label>
                                <input class="infusion-field-input" id="inf_field_Phone1" name="inf_field_Phone1" placeholder="Phone *" type="text" />
                            </div>
                            
                            <div class="infusion-field form-group">
                                <label for="inf_field_Company">Company/Organization *</label>
                                <input class="infusion-field-input" id="inf_field_Company" name="inf_field_Company" placeholder="Company/Organization *" type="text" />
                            </div>
                            
                            <div class="infusion-field form-group">
                                <label for="inf_custom_Howdidyouhearaboutus1">How did you hear about us? *</label>
                                <div class="infusion-field-input-container">
                                    <select id="inf_custom_Howdidyouhearaboutus1" name="inf_custom_Howdidyouhearaboutus1"><option value="">Please select one</option><option value="Search Engine">Search Engine</option><option value="Social Media">Social Media</option><option value="ICF">ICF</option><option value="Action Coach">Action Coach</option><option value="Email">Email</option><option value="Referral">Referral</option><option value="Online Ad">Online Ad</option><option value="Blog">Blog</option><option value="Tony Robbins">Tony Robbins</option><option value="Other (select and enter below)">Other (select and enter below)</option></select>
                                </div>
                            </div>
                            
                            <div class="infusion-field form-group">
                                <label for="inf_custom_WheredidyouhearaboutusOther">If &quot;other&quot; above, list here:</label>
                                <input class="infusion-field-input" id="inf_custom_WheredidyouhearaboutusOther" name="inf_custom_WheredidyouhearaboutusOther" placeholder="If &quot;other&quot; above, list here:" type="text" />
                            </div>

                            <div class="infusion-field form-group">
                                <label for="inf_custom_QuestionsComments0">Questions/Comments:</label>
                                <textarea cols="24" id="inf_custom_QuestionsComments0" name="inf_custom_QuestionsComments0" placeholder="Questions/Comments:" rows="5"></textarea>
                            </div>
                            
                            <div class="form-group">
                                <label>Which best describes your need for assessments?  *</label>
                        
                                <div class="form-check">
                                    <input class="form-check-input" id="inf_option_Whichbestdescribesyourneedforassessments_2387" name="inf_option_Whichbestdescribesyourneedforassessments" type="radio" value="2387" />
                                    <label class="form-check-label" for="inf_option_Whichbestdescribesyourneedforassessments_2387">I am an independent coach, trainer, or consultant who uses assessments with my clients</label>
                                </div>

                                <div class="form-check">
                                    <input class="form-check-input" id="inf_option_Whichbestdescribesyourneedforassessments_2389" name="inf_option_Whichbestdescribesyourneedforassessments" type="radio" value="2389" />
                                    <label class="form-check-label" for="inf_option_Whichbestdescribesyourneedforassessments_2389">I am part of an organization (corporation, association, etc.) that uses assessments internally with our team</label>
                                </div>
                            </div>
                            
                            <div class="form-group">
                                <label>Are you affiliated with one of the following organizations?</label>

                                <div class="infusion-field form-check">
                                    <input class="form-check-input" id="inf_option_ActionCOACH" name="inf_option_ActionCOACH" type="checkbox" value="2474" />
                                    <label class="form-check-label" for="inf_option_ActionCOACH">ActionCOACH</label>
                                </div>

                                <div class="infusion-field form-check">
                                    <input class="form-check-input" id="inf_option_ICF" name="inf_option_ICF" type="checkbox" value="2476" />
                                    <label class="form-check-label" for="inf_option_ICF">ICF</label>
                                </div>

                                <div class="infusion-field form-check">
                                    <input class="form-check-input" id="inf_option_RenaissanceExecutiveForum" name="inf_option_RenaissanceExecutiveForum" type="checkbox" value="2740" />
                                    <label class="form-check-label" for="inf_option_RenaissanceExecutiveForum">Renaissance Executive Forum</label>
                                </div>

                                <div class="infusion-field form-check">
                                    <input class="form-check-input" id="inf_option_CenterforCoachingCertification" name="inf_option_CenterforCoachingCertification" type="checkbox" value="2742" />
                                    <label class="form-check-label" for="inf_option_CenterforCoachingCertification">Center for Coaching Certification</label>
                                </div>

                                <div class="infusion-field form-check">
                                    <input class="form-check-input" id="inf_option_FocalPointCoaching" name="inf_option_FocalPointCoaching" type="checkbox" value="2744" />
                                    <label class="form-check-label" for="inf_option_FocalPointCoaching">Focal Point Coaching</label>
                                </div>
                            </div>
                            
                            <div class="infusion-field form-group">
                                <label for="inf_custom_Approximatelyhowmanyassessmentswillyouuse0">Approximate assessment usage?</label>
                                <div class="infusion-field-input-container">
                                    <select class="form-control" id="inf_custom_Approximatelyhowmanyassessmentswillyouuse0" name="inf_custom_Approximatelyhowmanyassessmentswillyouuse0"><option value="">Please select one</option><option value="Fewer than 60/year">Fewer than 60/year</option><option value="60 - 299/year">60 - 299/year</option><option value="300 - 1199/year">300 - 1199/year</option><option value="More than 1200/year">More than 1200/year</option><option value="We're not sure at this time">We're not sure at this time</option></select>
                                </div>
                            </div>
                            
                            <div class="infusion-field form-group">
                                <label for="inf_custom_Currentrelationshipwithanotherassessmentprovide">What is your current vendor relationship?</label>
                                <div class="infusion-field-input-container">
                                    <select class="form-control" id="inf_custom_Currentrelationshipwithanotherassessmentprovide" name="inf_custom_Currentrelationshipwithanotherassessmentprovide"><option value="">Please select one</option><option value="We don't have an assessment provider">We don't have an assessment provider</option><option value="We have one however the relationship is not as good as we'd hoped">We have one however the relationship is not as good as we'd hoped</option><option value="We have one- but they don't provide the type of assessments we currently need">We have one- but they don't provide the type of assessments we currently need</option><option value="We have one -but they don't provide white-labeling/custom branding">We have one -but they don't provide white-labeling/custom branding</option><option value="We have one- but they don't provide assessment/report customization">We have one- but they don't provide assessment/report customization</option></select>
                                </div>
                            </div>
                            
                            <div class="form-group">
                                <label data-mce-mark="1">Join our exclusive mailing list?</label>
                                
                                <div class="form-check">
                                    <input class="form-check-input" id="inf_option_Pleaseselect_1747" name="inf_option_Pleaseselect" type="radio" value="1747" checked/>
                                    <label class="form-check-label" for="inf_option_Pleaseselect_1747">Yes please!</label>
                                </div>

                                <div class="form-check">
                                    <input class="form-check-input" id="inf_option_Pleaseselect_1749" name="inf_option_Pleaseselect" type="radio" value="1749" />
                                    <label class="form-check-label" for="inf_option_Pleaseselect_1749">No, thank you</label>
                                </div>
                            </div>
                            
                            <div class="infusion-field form-group">
                                <span class="form-check">
                                    <input class="form-check-input" id="inf_option_IagreetothePrivacyPolicyandgivemyconsent" name="inf_option_IagreetothePrivacyPolicyandgivemyconsent" type="checkbox" value="2321" />
                                    <label class="form-check-label" for="inf_option_IagreetothePrivacyPolicyandgivemyconsent">
                                        I agree to the <nuxt-link to="/legal/privacy" class="hyperlink">Privacy Policy</nuxt-link> and <nuxt-link to="/legal/compliance" class="hyperlink">GDPR Policy</nuxt-link> and give my consent. *
                                    </label>
                                </span>
                            </div>
                            
                            <div class="infusion-submit">
                                <button class="button" type="submit">Submit</button>
                            </div>
                        </form>
                    </client-only>
                    
                    <script type="text/javascript" src="https://rz189.infusionsoft.app/app/webTracking/getTrackingCode"></script>
                    <script type="text/javascript" src="https://rz189.infusionsoft.com/app/timezone/timezoneInputJs?xid=15eb1d4945f8c9be32755e675097c33d"></script>
                </div>
            
                <div class="col-4">
                    <LazyHydrate when-visible><contact-sidebar></contact-sidebar></LazyHydrate>
                    <LazyHydrate when-visible><blog-sidebar count="4"></blog-sidebar></LazyHydrate>
                </div>
            </div>
        </div>

        <LazyHydrate when-visible><reviews></reviews></LazyHydrate>
        <LazyHydrate when-visible><footer-fold></footer-fold></LazyHydrate>
    </div>
</template>

<script>
    import axios from 'axios';
    import LazyHydrate from 'vue-lazy-hydration';

    export default {
        components: {
            LazyHydrate,
            'main-nav': () => import('@/components/Nav'),
            'footer-fold': () => import('@/components/Footer'),
            'contact-header': () => import('@/components/ContactHeader'),
            'reviews': () => import('@/components/Reviews'),
            'blog-sidebar': () => import('@/components/BlogSidebarLatest'),
            'contact-sidebar': () => import('@/components/ContactSidebar')
        },
        data() {
            return {
                firstName: '',
                lastName: '',
                website: '',
                structuredDataBreadcrumbs: {
                    "@context": "http://schema.org",
                    "@type": "BreadcrumbList",
                    "itemListElement": [
                        {
                            "@type": "ListItem",
                            "position": "1",
                            "item": {
                                "@id": "https://assessments24x7.com/contact",
                                "name": "Contact Us" 
                            } 
                        }
                    ]
                }
            }
        },
        computed: {
            action: function () {
                if (this.firstName === this.lastName) {
                    return '';
                } else {
                    return 'https://rz189.infusionsoft.com/app/form/process/15eb1d4945f8c9be32755e675097c33d';
                }
            }
        },
        head() {
            return {
                __dangerouslyDisableSanitizers: ['script'],
                script: [
                    {
                        innerHTML: JSON.stringify(this.structuredDataBreadcrumbs),
                        type: 'application/ld+json'
                    }
                ],
                title: 'Contact Us | Assessments 24x7',
                meta: [
                    {
                        hid: 'description',
                        name: 'description',
                        content: 'We can\'t wait to solve your assessment needs. Call us at +1 (206) 400-6647 or send an email to sales@assessments24x7.com. For better assistance, use our contact form to get to the right representative.'
                    }
                ]
            }
        },
    }
</script>

<style lang="scss" scoped>
    .contact {
        .contact-form {
            border-radius: 20px;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
            padding: 30px;
            margin-bottom: 10px !important;
        }

        .form-group.website {
            position: absolute;
            left: -91234px;
        }
    }
</style>