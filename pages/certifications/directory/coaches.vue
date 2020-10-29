<template>
    <section class="coach-directory">
        <LazyHydrate when-visible><main-nav active="training"></main-nav></LazyHydrate>

        <section class="header">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <h1 class="section-title">International Directory of Certified Practitioners</h1>
                        <p>
                            Each of our Practitioners completes 10-15 hours of additional specialized training, per 
                            assessment certification. Our Advanced Certified Practitioners have completed the greatest 
                            training, and therefore possess the most comprehensive skillset.
                        </p>
                    </div>
                </div>
            </div>
        </section>

        <div class="container">
            <div class="row">
                <div class="col-12">
                    <h2>Directory of Certified Practitioners</h2>

                    <p>
                        The Assessments 24x7 team of experts has developed five robust assessment certification programs, designed 
                        specifically for coaches and corporate trainers alike. Uniquely, each of these five assessment certifications 
                        are self-paced and include 1-on-1 instructor led sessions (via Zoom or Skype). These aren’t cookie cutter 
                        online classes, but flexible training curriculums tailored to advance the assessment expertise of each 
                        individual coach or trainer. Our certified coaches receive indefinite “coach mentorship,” ensuring their 
                        learning never ends and no question goes unanswered.
                    </p>

                    <p>
                        Due to these certifications’ growing prestige and broad scope, they’ve been accredited internationally with 
                        SHRM, HRCI, ATD and ICF.
                    </p><br/>

                    <nuxt-link to="/certifications" class="button">Certification Programs</nuxt-link>
                </div>
            </div>

            <div class="row">
                <div class="col-12">
                    <h3>Advanced Certified Practitioners</h3>
                    <table style="width:100%">
                        <thead>
                            <tr>
                                <th>ACP Rank</th>
                                <th>Name</th>
                                <th>Nation</th>
                                <th>DISC</th>
                                <th>Motivators</th>
                                <th>Emotional Intelligence</th>
                                <th>Critical Thinking (HVP)</th>
                                <th>Learning Styles</th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr v-for="acpCoach in acpCoaches" :key="acpCoach.name">
                                <td data-label="ACP Rank" width="5%"><span v-if="acpCoach['ACP Rank'] != 9999">{{ acpCoach["ACP Rank"] }}</span><span v-else style="color:#cfcfcf;">N/A</span></td>
                                <td data-label="Name" width="20%" style="text-align: left">
                                    <a v-if="acpCoach.Website" class="hyperlink" :href="acpCoach.Website" target="_blank" rel="noopener">
                                        {{ acpCoach.Name }}
                                    </a>
                                    <span v-else>{{ acpCoach.Name }}</span>
                                </td>
                                <td data-label="Region" width="15%" style="text-align: left">{{ acpCoach.Country }}</td>
                                <td data-label="DISC" width="15%">
                                    <span v-if="acpCoach.DISC === 'certified'">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#ffffff" stroke="#0dab49" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon">
                                            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                                            <polyline points="22 4 12 14.01 9 11.01"></polyline>
                                        </svg>
                                    </span>

                                    <span v-else-if="acpCoach.DISC === 'in-process'">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#ffffff" stroke="#ffbd05" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon">
                                            <circle cx="12" cy="12" r="10"></circle>
                                            <polygon points="10 8 16 12 10 16 10 8"></polygon>
                                        </svg>
                                    </span>

                                    <span v-else>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#ffffff" stroke="#eaeaea" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon">
                                            <circle cx="12" cy="12" r="10"></circle>
                                            <line x1="15" y1="9" x2="9" y2="15"></line>
                                            <line x1="9" y1="9" x2="15" y2="15"></line>
                                        </svg>
                                    </span>
                                </td>
                                <td data-label="Motivators" width="15%">
                                    <span v-if="acpCoach.Motivators === 'certified'">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#ffffff" stroke="#0dab49" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon">
                                            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                                            <polyline points="22 4 12 14.01 9 11.01"></polyline>
                                        </svg>
                                    </span>

                                    <span v-else-if="acpCoach.Motivators === 'in-process'">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#ffffff" stroke="#ffbd05" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon">
                                            <circle cx="12" cy="12" r="10"></circle>
                                            <polygon points="10 8 16 12 10 16 10 8"></polygon>
                                        </svg>
                                    </span>

                                    <span v-else>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#ffffff" stroke="#eaeaea" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon">
                                            <circle cx="12" cy="12" r="10"></circle>
                                            <line x1="15" y1="9" x2="9" y2="15"></line>
                                            <line x1="9" y1="9" x2="15" y2="15"></line>
                                        </svg>
                                    </span>
                                </td>
                                <td data-label="Emotional Intelligence" width="15%">
                                    <span v-if="acpCoach.EIQ === 'certified'">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#ffffff" stroke="#0dab49" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon">
                                            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                                            <polyline points="22 4 12 14.01 9 11.01"></polyline>
                                        </svg>
                                    </span>

                                    <span v-else-if="acpCoach.EIQ === 'in-process'">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#ffffff" stroke="#ffbd05" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon">
                                            <circle cx="12" cy="12" r="10"></circle>
                                            <polygon points="10 8 16 12 10 16 10 8"></polygon>
                                        </svg>
                                    </span>

                                    <span v-else>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#ffffff" stroke="#eaeaea" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon">
                                            <circle cx="12" cy="12" r="10"></circle>
                                            <line x1="15" y1="9" x2="9" y2="15"></line>
                                            <line x1="9" y1="9" x2="15" y2="15"></line>
                                        </svg>
                                    </span>
                                </td>
                                <td data-label="Critical Thinking (HVP)" width="15%">
                                    <span v-if="acpCoach.Hartman === 'certified'">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#ffffff" stroke="#0dab49" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon">
                                            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                                            <polyline points="22 4 12 14.01 9 11.01"></polyline>
                                        </svg>
                                    </span>

                                    <span v-else-if="acpCoach.Hartman === 'in-process'">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#ffffff" stroke="#ffbd05" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon">
                                            <circle cx="12" cy="12" r="10"></circle>
                                            <polygon points="10 8 16 12 10 16 10 8"></polygon>
                                        </svg>
                                    </span>

                                    <span v-else>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#ffffff" stroke="#eaeaea" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon">
                                            <circle cx="12" cy="12" r="10"></circle>
                                            <line x1="15" y1="9" x2="9" y2="15"></line>
                                            <line x1="9" y1="9" x2="15" y2="15"></line>
                                        </svg>
                                    </span>
                                </td>
                                <td data-label="Learning Styles" width="15%">
                                    <span v-if="acpCoach['Learning Styles'] === 'certified'">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#ffffff" stroke="#0dab49" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon">
                                            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                                            <polyline points="22 4 12 14.01 9 11.01"></polyline>
                                        </svg>
                                    </span>

                                    <span v-else-if="acpCoach['Learning Styles'] === 'in-process'">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#ffffff" stroke="#ffbd05" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon">
                                            <circle cx="12" cy="12" r="10"></circle>
                                            <polygon points="10 8 16 12 10 16 10 8"></polygon>
                                        </svg>
                                    </span>

                                    <span v-else>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#ffffff" stroke="#eaeaea" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon">
                                            <circle cx="12" cy="12" r="10"></circle>
                                            <line x1="15" y1="9" x2="9" y2="15"></line>
                                            <line x1="9" y1="9" x2="15" y2="15"></line>
                                        </svg>
                                    </span>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            <div class="row" v-for="(item, index) in coaches" :key="index">
                <div class="col-12">
                    <h3>{{ index }}</h3>
                    <table style="width:100%">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Region</th>
                                <th>DISC</th>
                                <th>Motivators</th>
                                <th>Emotional Intelligence</th>
                                <th>Critical Thinking (HVP)</th>
                                <th>Learning Styles</th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr v-for="coach in item" :key="coach.Name">
                                <td data-label="Name" width="20%" style="text-align: left">
                                    <a v-if="coach.Website" class="hyperlink" :href="coach.Website" target="_blank" rel="noopener">
                                        {{ coach.Name }}
                                    </a>
                                    <span v-else>{{ coach.Name }}</span>
                                </td>
                                <td data-label="Region" width="15%" style="text-align: left">
                                    {{ coach.City | capitalize }}<span v-if="coach.City">, </span>{{ coach.State }}
                                </td>
                                <td data-label="DISC" width="15%">
                                    <span v-if="coach.DISC === 'certified' || coach.DISC === 'override'">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#ffffff" stroke="#0dab49" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon">
                                            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                                            <polyline points="22 4 12 14.01 9 11.01"></polyline>
                                        </svg>
                                    </span>

                                    <span v-else-if="coach.DISC === 'in-process'">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#ffffff" stroke="#ffbd05" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon">
                                            <circle cx="12" cy="12" r="10"></circle>
                                            <polygon points="10 8 16 12 10 16 10 8"></polygon>
                                        </svg>
                                    </span>

                                    <span v-else>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#ffffff" stroke="#eaeaea" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon">
                                            <circle cx="12" cy="12" r="10"></circle>
                                            <line x1="15" y1="9" x2="9" y2="15"></line>
                                            <line x1="9" y1="9" x2="15" y2="15"></line>
                                        </svg>
                                    </span>
                                </td>
                                <td data-label="Motivators" width="15%">
                                    <span v-if="coach.Motivators === 'certified'">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#ffffff" stroke="#0dab49" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon">
                                            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                                            <polyline points="22 4 12 14.01 9 11.01"></polyline>
                                        </svg>
                                    </span>

                                    <span v-else-if="coach.Motivators === 'in-process'">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#ffffff" stroke="#ffbd05" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon">
                                            <circle cx="12" cy="12" r="10"></circle>
                                            <polygon points="10 8 16 12 10 16 10 8"></polygon>
                                        </svg>
                                    </span>

                                    <span v-else>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#ffffff" stroke="#eaeaea" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon">
                                            <circle cx="12" cy="12" r="10"></circle>
                                            <line x1="15" y1="9" x2="9" y2="15"></line>
                                            <line x1="9" y1="9" x2="15" y2="15"></line>
                                        </svg>
                                    </span>
                                </td>
                                <td data-label="Emotional Intelligence" width="15%">
                                    <span v-if="coach.EIQ === 'certified'">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#ffffff" stroke="#0dab49" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon">
                                            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                                            <polyline points="22 4 12 14.01 9 11.01"></polyline>
                                        </svg>
                                    </span>

                                    <span v-else-if="coach.EIQ === 'in-process'">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#ffffff" stroke="#ffbd05" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon">
                                            <circle cx="12" cy="12" r="10"></circle>
                                            <polygon points="10 8 16 12 10 16 10 8"></polygon>
                                        </svg>
                                    </span>

                                    <span v-else>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#ffffff" stroke="#eaeaea" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon">
                                            <circle cx="12" cy="12" r="10"></circle>
                                            <line x1="15" y1="9" x2="9" y2="15"></line>
                                            <line x1="9" y1="9" x2="15" y2="15"></line>
                                        </svg>
                                    </span>
                                </td>
                                <td data-label="Critical Thinking (HVP)" width="15%">
                                    <span v-if="coach.Hartman === 'certified'">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#ffffff" stroke="#0dab49" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon">
                                            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                                            <polyline points="22 4 12 14.01 9 11.01"></polyline>
                                        </svg>
                                    </span>

                                    <span v-else-if="coach.Hartman === 'in-process'">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#ffffff" stroke="#ffbd05" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon">
                                            <circle cx="12" cy="12" r="10"></circle>
                                            <polygon points="10 8 16 12 10 16 10 8"></polygon>
                                        </svg>
                                    </span>

                                    <span v-else>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#ffffff" stroke="#eaeaea" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon">
                                            <circle cx="12" cy="12" r="10"></circle>
                                            <line x1="15" y1="9" x2="9" y2="15"></line>
                                            <line x1="9" y1="9" x2="15" y2="15"></line>
                                        </svg>
                                    </span>
                                </td>
                                <td data-label="Learning Styles" width="15%">
                                    <span v-if="coach['Learning Styles'] === 'certified'">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#ffffff" stroke="#0dab49" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon">
                                            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                                            <polyline points="22 4 12 14.01 9 11.01"></polyline>
                                        </svg>
                                    </span>

                                    <span v-else-if="coach['Learning Styles'] === 'in-process'">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#ffffff" stroke="#ffbd05" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon">
                                            <circle cx="12" cy="12" r="10"></circle>
                                            <polygon points="10 8 16 12 10 16 10 8"></polygon>
                                        </svg>
                                    </span>

                                    <span v-else>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#ffffff" stroke="#eaeaea" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon">
                                            <circle cx="12" cy="12" r="10"></circle>
                                            <line x1="15" y1="9" x2="9" y2="15"></line>
                                            <line x1="9" y1="9" x2="15" y2="15"></line>
                                        </svg>
                                    </span>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>

        <LazyHydrate when-visible><footer-fold></footer-fold></LazyHydrate>
    </section>
</template>

<script>
    import axios from 'axios';
    import LazyHydrate from 'vue-lazy-hydration';

    export default {
        components: {
            LazyHydrate,
            'main-nav': () => import('@/components/Nav'),
            'footer-fold': () => import('@/components/Footer')
        },
        head() {
            return {
                title: 'International Directory of Certified Practitioners | Assessments 24x7',
                meta: [
                    {
                        hid: 'description',
                        name: 'description',
                        content: 'Each of our Practitioners completes 10-15 hours of additional specialized training, per assessment certification. Our Advanced Certified Practitioners have completed the greatest training, and therefore possess the most comprehensive skillset.'
                    }
                ],
                __dangerouslyDisableSanitizers: ['script'],
                script: [
                    {
                        innerHTML: JSON.stringify(this.structuredDataBreadcrumbs),
                        type: 'application/ld+json'
                    },
                    {
                        innerHTML: JSON.stringify(this.structuredDataTable),
                        type: 'application/ld+json'
                    }
                ]
            }
        },
        data() {
            return {
                acpCoaches: [],
                coaches: [],
                structuredDataBreadcrumbs: {
                    "@context": "http://schema.org",
                    "@type": "BreadcrumbList",
                    "itemListElement": [
                        {
                            "@type": "ListItem",
                            "position": "1",
                            "item": {
                                "@id": "https://assessments24x7.com/certifications",
                                "name": "Certifications" 
                            } 
                        },
                        {
                            "@type": "ListItem",
                            "position": "2",
                            "item": {
                                "@id": "https://assessments24x7.com/certifications/directory/coaches",
                                "name": "Coach Directory" 
                            } 
                        }
                    ]
                },
                structuredDataTable: {
                    "@context": "https://schema.org",
                    "@type": "Table",
                    "about": "International Directory of Certified Practitioners"
                }
            }
        },
        filters: {
            capitalize: function (value) {
                if (!value) return '';

                value = value.toString().toLowerCase().split(' ');

                for (let i = 0; i < value.length; i++) {
                    value[i] = value[i].charAt(0).toUpperCase() + value[i].slice(1);
                }

                return value.join(' ');
            }
        },
        async created() {
            let response = await axios.get('/api/coaches/acp');
            this.acpCoaches = response.data.coaches;

            this.acpCoaches.sort(function (a, b) {
                const aRank = parseInt(a['ACP Rank']);
                const bRank = parseInt(b['ACP Rank']);

                return (aRank < bRank) ? -1 : (aRank > bRank) ? 1 : 0;
            });

            response = await axios.get('/api/coaches');

            let tmp = response.data.coaches.sort((a, b) => {
                let aScore = 0;
                let bScore = 0;

                // A Scores

                if (a.DISC === 'certified') {
                    aScore += 6;
                } else if (a.DISC === 'in-process') {
                    aScore += 1;
                } else if (a.DISC === 'override') {
                    aScore += 1337;
                }

                if (a.Motivators === 'certified') {
                    aScore += 6;
                } else if (a.Motivators === 'in-process') {
                    aScore += 1;
                } else if (a.Motivators === 'override') {
                    aScore += 1337;
                }

                if (a.EIQ === 'certified') {
                    aScore += 6;
                } else if (a.EIQ === 'in-process') {
                    aScore += 1;
                } else if (a.EIQ === 'override') {
                    aScore += 1337;
                }

                if (a.Hartman === 'certified') {
                    aScore += 6;
                } else if (a.Hartman === 'in-process') {
                    aScore += 1;
                } else if (a.Hartman === 'override') {
                    aScore += 1337;
                }

                if (a['Learning Styles'] === 'certified') {
                    aScore += 6;
                } else if (a['Learning Styles'] === 'in-process') {
                    aScore += 1;
                } else if (a['Learning Styles'] === 'override') {
                    aScore += 1337;
                }

                // B scores

                if (b.DISC === 'certified') {
                    bScore += 6;
                } else if (b.DISC === 'in-process') {
                    bScore += 1;
                } else if (b.DISC === 'override') {
                    bScore += 1337;
                }

                if (b.Motivators === 'certified') {
                    bScore += 6;
                } else if (b.Motivators === 'in-process') {
                    bScore += 1;
                } else if (b.Motivators === 'override') {
                    bScore += 1337;
                }

                if (b.EIQ === 'certified') {
                    bScore += 6;
                } else if (b.EIQ === 'in-process') {
                    bScore += 1;
                } else if (b.EIQ === 'override') {
                    bScore += 1337;
                }

                if (b.Hartman === 'certified') {
                    bScore += 6;
                } else if (b.Hartman === 'in-process') {
                    bScore += 1;
                } else if (b.Hartman === 'override') {
                    bScore += 1337;
                }

                if (b['Learning Styles'] === 'certified') {
                    bScore += 6;
                } else if (b['Learning Styles'] === 'in-process') {
                    bScore += 1;
                } else if (b['Learning Styles'] === 'override') {
                    bScore += 1337;
                }

                if (aScore < bScore) {
                    return 1;
                }

                if (aScore > bScore) {
                    return -1;
                }

                return 0;
            });

            let grouped = {};

            for (let i = 0; i < tmp.length; i++) {
                let p = tmp[i]['Country'];

                if (!grouped[p]) {
                    grouped[p] = [];
                }

                grouped[p].push(tmp[i]);
            }

            let front = grouped['United States'];
            delete grouped['United States'];
            this.coaches = {'United States': front, ...grouped};
        }
    }
</script>

<style lang="scss" scoped>
    .coach-directory {
        .header {
            background: url('~assets/about.jpg');
            background-size: cover;
            color: #fff;
            text-align: center;
            padding: 70px 0;

            .section-title {
                font-size: 30pt;
                margin-top: 0;
            }
        }

        h2, h3 {
            font-size: 20pt;
            line-height: 24pt;
            margin-bottom: -10px;
        }

        table {
            border-collapse: collapse;
            margin: 30px 0 60px;
            overflow-x: scroll;

            thead {
                background: #1e222d;
                color: #fff;

                th {
                    border: 1px solid #58617d;
                }
            }

            tbody {
                tr {
                    td {
                        border: 1px solid #ddd;
                        text-align: center;

                        a {
                            font-weight: 700;
                            color: #1e222d;
                        }
                    }

                    &:nth-child(even) {
                        background-color: #f5f5f5;
                    }
                }
            }

            td, th {
                padding: 8px;
            }
        }
    }

    @media screen and (max-width: 730px) {
        .coach-directory {
            thead {
                display: none;
            }

            table tr, table td {
                display: block;
                width: 100%;
            }

            table tr {
                margin-bottom: 20px;
            }

            table td {
                text-align: right !important;

                &::before {
                    content: attr(data-label);
                    font-weight: bold;
                    float: left;
                }
            }
        }
    }
</style>