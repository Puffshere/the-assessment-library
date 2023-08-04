<template>
    <section class="workshop-leaders">
        <LazyHydrate when-visible><main-nav active="training"></main-nav></LazyHydrate>

        <client-only>
            <div class="map">
                <MglMap :access-token="token" :map-style="style" :zoom="zoom" :center="center" v-if="leaders">
                    <MglGeojsonLayer sourceId="points" :source="geoJsonSource" layerId="leaders" :layer="geoJsonlayer" />
                </MglMap>
            </div>
        </client-only>

        <section class="container">
            <div class="row">
                <div class="col-12">
                    <h1 class="title">Network of DISC Workshop Leaders</h1>
                    <p>
                        These experienced trainers have been selected for their abilities to engage, teach, and wow learners
                        by challenging participants
                        to think differently, focus new ideas in a way that really works, and leave training sessions eager
                        to apply their new skills.
                    </p>

                    <nuxt-link to="/certifications/workshop-certification" class="button">Discover our Training
                        Program</nuxt-link>
                </div>
            </div>

            <div class="row">
                <div class="col-12">
                    <table style="width:100%">
                        <thead>
                            <tr>
                                <th>Trainer</th>
                                <th>
                                    <button class="location-button" @click="sortByLocation('city')">City</button>
                                    <span class="filter-icon" :class="{
                                        'arrow-up': sortBy === 'city' && sortDirection === 'asc',
                                        'arrow-down': sortBy === 'city' && sortDirection === 'desc',
                                        'arrow-side': sortDirection === 'side'
                                    }">
                                        <img src='~assets/artifacts/icons8-arrow-20.png'>
                                    </span>
                                </th>
                                <th>
                                    <button class="location-button" @click="sortByLocation('state')">State</button>
                                    <span class="filter-icon" :class="{
                                        'arrow-up': sortBy === 'state' && sortDirection === 'asc',
                                        'arrow-down': sortBy === 'state' && sortDirection === 'desc'
                                    }">
                                        <img src='~assets/artifacts/icons8-arrow-20.png'>
                                    </span>
                                </th>
                                <th>
                                    <button class="location-button" @click="sortByLocation('country')">Country</button>
                                    <span class="filter-icon" :class="{
                                        'arrow-up': sortBy === 'country' && sortDirection === 'asc',
                                        'arrow-down': sortBy === 'country' && sortDirection === 'desc'
                                    }">
                                        <img src='~assets/artifacts/icons8-arrow-20.png'>
                                    </span>
                                </th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr v-for="leader in leaders" :key="leader.stub">
                                <td>
                                    <nuxt-link class="hyperlink"
                                        :to="`/certifications/directory/workshop-leaders/${leader.stub}`">
                                        {{ leader.name }}
                                    </nuxt-link>
                                </td>
                                <td>{{ leader.city }}</td>
                                <td>{{ leader.state }}</td>
                                <td>{{ leader.country }}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </section>

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
            title: 'Network of DISC Workshop Leaders | Assessments 24x7',
            meta: [
                {
                    hid: 'description',
                    name: 'description',
                    content: 'Our Workshop Leaders are assessment certified practitioners, also qualified to deliver a variety of one-day, onsite training workshops (Self-Awareness & Communication, Transitioning from Peer to Leader, Trust-Based Leadership, Making Teams Work, Sales Optimization).'
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
            sortBy: null,
            sortDirection: 'asc',
            sideArrow: false,
            leaders: [],
            features: [],
            token: 'pk.eyJ1IjoiZHlsYW50bWFyc2giLCJhIjoiY2pndzl0N2w0MGszZjJxbDZ6aXBhYW03eCJ9.LENZtRDnKJLDeo7JqyFZWA',
            zoom: 2,
            center: [-78.5795, 45.8283],
            style: 'mapbox://styles/dylantmarsh/cjh0kzkku000u2rmo6ztzfq2z',
            geoJsonlayer: {
                "type": "symbol",
                'layout': {
                    'icon-image': ['concat', ['get', 'icon'], '-15'],
                    'text-field': ['get', 'title'],
                    'text-font': ['Open Sans Semibold', 'Arial Unicode MS Bold'],
                    'text-offset': [0, 0.5],
                    'text-anchor': 'top',
                    'text-ignore-placement': true,
                    'text-allow-overlap': true,
                    'text-size': 12
                }
            },
            geoJsonSource: {
                "type": "geojson",
                data: {
                    type: "FeatureCollection"
                }
            },
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
                            "@id": "https://assessments24x7.com/certifications/directory/workshop-leaders",
                            "name": "Workshop Leaders"
                        }
                    }
                ]
            },
            structuredDataTable: {
                "@context": "https://schema.org",
                "@type": "Table",
                "about": "Network of DISC Workshop Leaders"
            }
        }
    },
    async created() {
        const response = await axios.get('/api/workshop-leaders');
        this.leaders = response.data.leaders;

        this.leaders.forEach(leader => {
            this.features.push(leader.geo);
        });

        this.geoJsonSource.data.features = this.features;
    },
    methods: {
        async sortByLocation(property) {
            if (this.sortBy !== property || this.sortDirection === 'side') {
                this.sortDirection = 'asc';
            } else if (this.sortDirection === 'asc') {
                this.sortDirection = 'desc';
            } else {
                this.sortDirection = 'side';
                this.sortBy = null;
            }

            console.log('this is the sortDirection', this.sortDirection);

            this.sortBy = property;

            if (this.sortDirection === 'asc' || this.sortDirection === 'desc') {
                this.leaders.sort((a, b) => {
                    const valueA = a[property].toLowerCase();
                    const valueB = b[property].toLowerCase();

                    if (valueA < valueB) {
                        return this.sortDirection === 'asc' ? -1 : 1;
                    }
                    if (valueA > valueB) {
                        return this.sortDirection === 'asc' ? 1 : -1;
                    }
                    return 0;
                });
            } else {
                const response = await axios.get('http://localhost:3000/api/workshop-leaders');
                this.leaders = response.data.leaders;

                this.leaders.forEach(leader => {
                    this.features.push(leader.geo);
                });

                this.geoJsonSource.data.features = this.features;
            }
        }
    }
}
</script>

<style lang="scss" scoped>
.workshop-leaders {
    .map {
        width: 100%;
        height: 600px;
    }

    .title {
        font-size: 30pt;
        line-height: 34pt;
        margin: 30px 0 0 0;
    }

    table {
        border-collapse: collapse;
        margin: 30px 0 60px;

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

        td,
        th {
            padding: 8px;
            width: 100px;
        }
    }

    .location-button {
        background-color: transparent;
        border: none;
        cursor: pointer;
        padding: 0;
        font-weight: bold;
        color: #ffffff;
        text-decoration: none;
        font-size: 15px;
        font-family: "Poppins", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
        position: relative;
        padding-left: -5px;
    }
}

.filter-icon {
    color: white;
    position: absolute;
}

.arrow-up {
    position: absolute;
    margin-left: 5px;
    transform: rotate(90deg);
    transition: transform 0.3s;
}

.arrow-down {
    position: absolute;
    margin-left: 5px;
    transform: rotate(-90deg);
    transition: transform 0.3s;
}

.arrow-side {
    position: absolute;
    margin-left: 5px;
    transform: rotate(0deg);
    transition: transform 0.3s;
}
</style>