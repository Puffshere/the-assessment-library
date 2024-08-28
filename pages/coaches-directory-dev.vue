<template>
    <section class="coaches-directory">
        <LazyHydrate when-visible><main-nav></main-nav></LazyHydrate>
        <section class="header">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <h1 style="text-align: center;">
                            <span style="color: #00a8ff">INTERNATION DIRECTORY</span> <br />
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
        <section>
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <h1
                            style="text-align: center; color: #0033c5; text-shadow: #0033c566 2.12132px 2.12132px 0px; margin-bottom: -30px;">
                            Find an Assessment Practitioner
                        </h1>
                        <h2 style="text-align: center; font-weight: 400; margin-bottom: 0px;">
                            Want to be listed? <span style="color: #0033c5; text-decoration: underline;">Get
                                certified</span>
                        </h2>
                    </div>
                </div>
            </div>
        </section>
        <br />
        <search-bar></search-bar>
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
            <div class="cards-container">
                <div class="card">
                    <h4>Angie</h4>
                    <p>Seattle, Washington</p>
                    <p><a href="https://www.linkedin.com/feed/">https://www.linkedin.com/feed/</a></p>
                    <p><strong>Certifications:</strong></p>
                    <ul>
                        <li>Master Certified Practitioner</li>
                        <li>DISC</li>
                        <li>Motivators</li>
                    </ul>
                </div>
                <div class="card">
                    <h4>Monica</h4>
                    <p>Portland, Oregon</p>
                    <p><a href="https://www.linkedin.com/feed/">https://www.linkedin.com/feed/</a></p>
                    <p><strong>Certifications:</strong></p>
                    <ul>
                        <li>Advanced Certified Practitioner</li>
                        <li>DISC</li>
                        <li>Motivators</li>
                    </ul>
                </div>
                <div class="card">
                    <h4>Shawn</h4>
                    <p>San Francisco, California</p>
                    <p><a href="https://www.linkedin.com/feed/">https://www.linkedin.com/feed/</a></p>
                    <p><strong>Certifications:</strong></p>
                    <ul>
                        <li>Certified Practitioner</li>
                        <li>DISC</li>
                        <li>Motivators</li>
                    </ul>
                </div>
                <div class="card">
                    <h4>Jennifer</h4>
                    <p>Los Angeles, California</p>
                    <p><a href="https://www.linkedin.com/feed/">https://www.linkedin.com/feed/</a></p>
                    <p><strong>Certifications:</strong></p>
                    <ul>
                        <li>Master Certified Practitioner</li>
                        <li>DISC</li>
                        <li>Motivators</li>
                    </ul>
                </div>
            </div>
        </section>
        <LazyHydrate when-visible><footer-fold></footer-fold></LazyHydrate>
    </section>
</template>

<script>
import LazyHydrate from 'vue-lazy-hydration';
import SearchBar from '@/components/coachesDirectory/SearchBar';

export default {
    components: {
        LazyHydrate,
        'search-bar': SearchBar,
        'main-nav': () => import('@/components/Nav'),
        'footer-fold': () => import('@/components/Footer')
    },
    data() {
        return {
            center: { lat: 37.7749, lng: -122.4194 },
        };
    }
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

.card {
    border: 1px solid #e0e0e0;
    padding: 15px;
    border-radius: 8px;
    box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.1);
    margin-right: 15px;
}

.card h4 {
    margin-bottom: 5px;
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
</style>