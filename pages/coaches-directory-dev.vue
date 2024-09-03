<template>
    <section class="coaches-directory">
        <LazyHydrate when-visible><main-nav></main-nav></LazyHydrate>
        <section class="header">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <h1 style="text-align: center;">
                            <span style="color: #00a8ff">INTERNATIONAL DIRECTORY</span> <br />
                            OF CERTIFIED PRACTITIONERS
                        </h1>
                        <h3 style="text-align: center; font-weight: 400; margin-top: -30px;">
                            Each of our Practitioners completes 10-15 hours of additional training per assessment
                            certification. <br />
                            Our Advanced Certified Practitioners have the most comprehensive skillset due to their
                            extensive training.
                        </h3>
                    </div>
                </div>
            </div>
        </section>
        <section style="margin-bottom: 50px;">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <h1
                            style="text-align: center; color: #0033c5; text-shadow: #0033c566 2.12132px 2.12132px 0px; margin-bottom: -30px;">
                            Find an Assessment Practitioner
                        </h1>
                        <h2 style="text-align: center; font-weight: 400; margin-bottom: 0px;">
                            Want to be listed? <a href="https://www.assessments24x7.com/contact"
                                style="color: #0033c5; text-decoration: underline; cursor: pointer;">Get
                                certified</a>
                        </h2>
                    </div>
                </div>
            </div>
        </section>
        <search-bar :coaches="coaches" v-model="selectedName" />
        <section>
            <div class="row directory-key-row">
                <h3 class="directory-key-title">Directory Key</h3>
                <div class="directory-key">
                    <div class="directory-item">
                        <img src="~assets/coaches-directory/mcp-seal.png" alt="MCP Seal">
                        <span>Master Certified Practitioner (MCP)</span>
                    </div>
                    <div class="directory-item">
                        <img src="~assets/coaches-directory/acp-seal.png" alt="ACP Seal">
                        <span>Advanced Certified Practitioner (ACP)</span>
                    </div>
                    <div class="directory-item">
                        <img src="~assets/coaches-directory/cp-seal.png" alt="CP Seal">
                        <span>Certified Practitioner (CP)</span>
                    </div>
                </div>
            </div>
        </section>
        <br />
        <section class="map-and-cards">
            <div class="map-container">
                <GmapMap :center="center" :zoom="12" class="map" />
            </div>
            <div class="cards-container" @scroll="onScroll">
                <div v-for="(coach) in filteredCoaches" :key="coach.Name" class="card">
                    <div class="card-header">
                        <h4 class="icons">
                            <img src="https://cdn.assessments24x7.com/file/assessments24x7-media/Coaches+Directory/Name+Icon.png"
                                alt="Name Icon" class="name-icon" />
                            {{ coach.Name }}
                        </h4>
                        <div class="card-buttons">
                            <button class="share-button">
                                Share <img
                                    src="https://f002.backblazeb2.com/file/assessments24x7-media/Coaches+Directory/Share+Icon.png"
                                    alt="Share Icon" class="share-icon" />
                            </button>
                        </div>
                    </div>
                    <p v-if="coach.City || coach.State" class="icons">
                        <img src="https://cdn.assessments24x7.com/file/assessments24x7-media/Coaches+Directory/Location+Icon.png"
                            alt="Location Icon" class="location-icon" />
                        {{ coach.City }}, {{ coach.State }}
                    </p>
                    <p v-if="coach.Website" class="icons">
                        <img src="https://cdn.assessments24x7.com/file/assessments24x7-media/Coaches+Directory/Globe-URL+Icon.png"
                            alt="Globe Icon" class="globe-icon" />
                        <a :href="coach.Website" target="_blank">{{ coach.Website }}</a>
                    </p>
                    <p class="icons" @click="toggleCertifications(coach)" style="cursor: pointer;"
                        v-if="certificationCount(coach) > 0">
                        <img src="https://cdn.assessments24x7.com/file/assessments24x7-media/Coaches+Directory/Certifications+Icon.png"
                            alt="Certifications Icon" class="certifications-icon" />
                        <span class="cert">Certifications ({{ certificationCount(coach) }})</span>
                    </p>
                    <p v-else class="icons">
                        <img src="https://cdn.assessments24x7.com/file/assessments24x7-media/Coaches+Directory/Certifications+Icon.png"
                            alt="Certifications Icon" class="certifications-icon" /><span
                            style="font-weight: 600;">Certifications Pending</span>
                    </p>
                    <ul v-if="coach.showCertifications" class="certifications-list">
                        <li v-if="coach.ACP === 'certified'" class="practitioner-level">
                            <img src="~assets/coaches-directory/acp-seal.png" alt="ACP Seal"
                                class="assessment-badge" />Advanced Certified Practitioner (ACP)
                        </li>
                        <li v-else-if="coach.MCP === 'certified'" class="practitioner-level">
                            <img src="~assets/coaches-directory/mcp-seal.png" alt="MCP Seal"
                                class="assessment-badge" />Certified Practitioner (CP)
                        </li>
                        <li v-else class="practitioner-level">
                            <img src="~assets/coaches-directory/cp-seal.png" alt="CP Seal"
                                class="assessment-badge" />Certified Practitioner (CP)
                        </li>
                        <li v-if="coach.DISC === 'certified'" class="assessment">
                            <img src="https://cdn.assessments24x7.com/file/assessments24x7-media/Coaches+Directory/Assessment+Badge+-+DISC.png"
                                alt="Assessment Badge" class="assessment-badge" />DISC
                        </li>
                        <li v-if="coach.Motivators === 'certified'" class="assessment">
                            <img src="https://cdn.assessments24x7.com/file/assessments24x7-media/Coaches+Directory/Assessment+Badge+-+Motivators+(1).png"
                                alt="Assessment Badge" class="assessment-badge" />Motivators
                        </li>
                        <li v-if="coach.EIQ === 'certified'" class="assessment">
                            <img src="https://cdn.assessments24x7.com/file/assessments24x7-media/Coaches+Directory/Assessment+Badge+-+EIQ.png"
                                alt="Assessment Badge" class="assessment-badge" />EIQ
                        </li>
                        <li v-if="coach.Hartman === 'certified'" class="assessment">
                            <img src="https://cdn.assessments24x7.com/file/assessments24x7-media/Coaches+Directory/hartman-cert-badge-color.png"
                                alt="Assessment Badge" class="assessment-badge" />Hartman
                        </li>
                        <li v-if="coach['Learning Styles'] === 'certified'" class="assessment">
                            <img src="https://cdn.assessments24x7.com/file/assessments24x7-media/Coaches+Directory/learning-cert-badge-color.png"
                                alt="Assessment Badge" class="assessment-badge" />Learning Styles
                        </li>
                    </ul>
                    <p v-if="coach['ACP Rank'] !== '9999'" class="icons">
                        <img src="https://cdn.assessments24x7.com/file/assessments24x7-media/Coaches+Directory/ACP+Rank+Icon.png"
                            alt="Rank Icon" class="assessment-badge" />
                        <span style="color: #0033c5; font-weight: 700;">ACP Rank: {{ coach['ACP Rank'] }}</span>
                    </p>
                </div>
            </div>
        </section>
        <LazyHydrate when-visible><footer-fold></footer-fold></LazyHydrate>
    </section>
</template>


<script>
import LazyHydrate from 'vue-lazy-hydration';
import SearchBar from '@/components/coachesDirectory/SearchBar';
import axios from 'axios';

export default {
    components: {
        LazyHydrate,
        'search-bar': SearchBar,
        'main-nav': () => import('@/components/Nav'),
        'footer-fold': () => import('@/components/Footer'),
    },
    data() {
        return {
            center: { lat: 32.7157, lng: -117.1611 }, // San Diego coordinates
            coaches: [],
            selectedName: '',
            currentPage: 1,
            itemsPerPage: 10,
            loadingMore: false,
        };
    },
    computed: {
        filteredCoaches() {
            let result = this.coaches;
            if (this.selectedName) {
                result = result.filter(coach => coach.Name === this.selectedName);
            }
            return result.slice(0, this.currentPage * this.itemsPerPage);
        },
    },
    methods: {
        certificationCount(coach) {
            let count = 0;
            if (coach.DISC === 'certified') count++;
            if (coach.Motivators === 'certified') count++;
            if (coach.EIQ === 'certified') count++;
            if (coach.Hartman === 'certified') count++;
            if (coach['Learning Styles'] === 'certified') count++;
            return count;
        },
        toggleCertifications(coach) {
            coach.showCertifications = !coach.showCertifications;
        },
        onScroll() {
            const scrollHeight = this.$el.querySelector('.cards-container').scrollHeight;
            const scrollTop = this.$el.querySelector('.cards-container').scrollTop;
            const clientHeight = this.$el.querySelector('.cards-container').clientHeight;

            if (scrollTop + clientHeight >= scrollHeight - 10) {
                this.loadMoreCoaches();
            }
        },
        loadMoreCoaches() {
            if (this.loadingMore) return;

            this.loadingMore = true;
            setTimeout(() => {
                if (this.currentPage * this.itemsPerPage < this.coaches.length) {
                    this.currentPage += 1;
                }
                this.loadingMore = false;
            }, 500);
        },
    },
    async created() {
        const response = await axios.get('http://localhost:3000/api/coaches/');
        this.coaches = response.data.coaches.map(coach => {
            coach.showCertifications = false;
            console.log('this is the coach info', coach);
            return coach;
        });
    },
}
</script>


<style scoped>
.header {
    background: url('~assets/coaches-directory/coaches-directory-header-image.png');
    background-size: cover;
    color: #fff;
    padding-top: 30px;
    padding-bottom: 90px;
}

h1 {
    font-size: 48px;
    line-height: 58px;
}

h2 {
    font-size: 32px;
    line-height: 38px;
}

h3 {
    font-size: 18px;
    line-height: 22px;
}

h4 {
    font-size: 16px;
    line-height: 24px;
}

h5 {
    font-size: 13.28px;
    line-height: 21.2px;
}

.directory-key-row {
    margin-left: 50px;
    padding-left: 0;
}

.directory-key-title {
    font-size: 20px;
    font-weight: 600;
    color: #000;
    display: inline-block;
    padding-bottom: 5px;
    margin-bottom: 10px;
}

.directory-key {
    display: flex;
    align-items: center;
    gap: 15px;
}

.directory-item {
    display: flex;
    align-items: center;
    gap: 5px;
}

.directory-item img {
    width: 24px;
    height: 24px;
}

.directory-item span {
    font-size: 16px;
    color: #000;
    font-weight: 400;
}

.map-and-cards {
    display: flex;
    gap: 20px;
    border-top: 1px solid #727272;
    padding-top: 0px;
}

.map-container {
    width: 60%;
    height: 100%;
}

.map {
    height: 100%;
    min-height: calc(100vh - 0px);
}

.cards-container {
    width: 40%;
    max-height: calc(100vh - 15px);
    overflow-y: auto;
    display: flex;
    flex-direction: column;
    gap: 15px;
    padding-bottom: 20px;
    margin-top: 15px;
}

.cards-container:hover {
    background: linear-gradient(to right, #e0e0e0, #ffffff);
}

.card {
    border: 1px solid #e0e0e0;
    border-radius: 8px;
    box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.1);
    margin-right: 15px;
    padding-left: 15px;
    padding-bottom: 20px;
}

.card-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.card-buttons {
    display: flex;
    gap: 8px;
}

.share-button {
    background-color: #0033c5;
    color: #fff;
    border: none;
    border-radius: 20px;
    padding: 5px 10px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    width: 100px;
    position: relative;
    text-align: center;
    margin-right: 15px;
}

.share-button:hover {
    background-color: #0022a3;
}

.share-icon {
    width: 18px;
    position: absolute;
    right: 3px;
}


.card h4 {
    margin-bottom: 5px;
    font-weight: 400;
}

.card p {
    margin: 5px 0;
}

.card ul {
    list-style-type: none;
    padding-left: 0;
}

.card li {
    margin-bottom: 5px;
}

.icons {
    display: flex;
    align-items: center;
    margin-bottom: 5px;
}

.name-icon,
.location-icon,
.globe-icon,
.certifications-icon {
    width: 22px;
    margin-right: 4px;
}

.badge {
    display: flex;
    align-items: center;
    margin-bottom: 5px;
}

.assessment-badge {
    width: 22px;
    margin-right: 4px;
}

.cert {
    color: #000;
    font-weight: 600;
    position: relative;
    text-decoration: none;
    z-index: 0;
    transition: background .2s linear;
    box-shadow: inset 0 -3px 0 0 rgba(0, 168, 255, .3);
}

.cert:hover {
    background: #ffc73e;
}

.practitioner-level {
    padding-left: 25px;
    font-weight: 600;
    margin-top: -10px;
}

.assessment {
    margin-top: -5px;
    padding-left: 50px;
}
</style>