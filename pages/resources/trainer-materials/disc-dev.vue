<template>
    <section class="skeleton">
        <main-nav />

        <section class="body">
            <div class="container">
                <div class="row">
                    <div class="col-7">
                        <h1 style="text-align: left; color: #0033c5; margin-top: 40px; margin-bottom: 0px;">DISC</h1>
                        <h3 style="text-align: left; color: #0033c5; margin-top: 0px; margin-bottom: 5px;">Trainer
                            Materials</h3>
                        <p style="text-align: left; margin-top: 0px; margin-bottom: 40px;">
                            The Training Materials library is your comprehensive resource for coaching and debriefing
                            tools,
                            additional insight & information on the assessment,
                            reports and models, and gives quick access to class/workshop materials you may need. Explore
                            these at your leisure - you will find there are many
                            useful and valuable resources to support your continued development, understanding and
                            application!
                        </p>
                    </div>
                    <div class="col-5">
                        <img src="~/assets/coaches-directory/trainer-materials-header-image.png"
                            alt="coaches directory hero image" class="heroImage">
                    </div>
                </div>
            </div>
        </section>

        <div class="body" v-if="unlocked">
            <div class="container">
                <br />
                <div class="input-container">
                    <div class="search-bar" style="width: 60%;">
                        <input type="text" placeholder="Search" class="input-search" />
                        <i class="search-icon">&#x1F50D;</i>
                    </div>
                    <button @click="toggleAllCards" class="toggle-all-button">
                        {{ areAllCardsOpen ? 'Close All' : 'Open All' }}
                    </button>

                    <div class="filter-dropdown">
                        <select class="filter-select" v-model="selectedFileType">
                            <option value="All">Filter by file type</option>
                            <option value="PDF">PDF</option>
                            <option value="DOC">DOC</option>
                            <option value="PPT">PPT</option>
                            <option value="MP3">MP3</option>
                            <option value="MP4">MP4</option>
                            <option value="ZIP">ZIP</option>
                            <option value="URL">URL</option>
                        </select>
                        <i class="dropdown-icon">&#x25BC;</i>
                    </div>
                </div>

                <div class="row" @click="handleClick">
                    <div class="col-6">
                        <div class="card">
                            <img src="https://cdn.assessments24x7.com/file/assessments24x7-media/trainer-materials/disc/2024+disc/%2B+The+Fundamentals_+DISC.png"
                                alt="icon" class="icon" />
                            <div>
                                <h4 data-category="fundamentals">
                                    {{ toggleStates['fundamentals'] ? '−' : '+' }} The Fundamentals: DISC
                                </h4>
                                <p>Foundations of DISC & advanced development resources.</p>
                            </div>
                        </div>
                        <div v-if="toggleStates['fundamentals']" class="subcard">
                            <p class="subcard-title">Understanding foundations of DISC</p>
                            <ul class="subcard-links">
                                <li v-for="link in filteredFoundations" :key="link.url">
                                    <a :href="link.url" target="_blank" rel="noopener">
                                        <img :src="`https://cdn.assessments24x7.com/file/assessments24x7-media/trainer-materials/disc/${link.icon}`"
                                            :alt="`${link.type.toLowerCase()} icon`" class="icons">
                                        {{ link.name }}
                                    </a>
                                </li>
                            </ul>
                            <p class="subcard-title">Description - All 4 Styles</p>
                            <ul class="subcard-links">
                                <li v-for="link in filteredDescriptionStyles" :key="link.url">
                                    <a :href="link.url" target="_blank" rel="noopener">
                                        <img :src="`https://cdn.assessments24x7.com/file/assessments24x7-media/trainer-materials/disc/${link.icon}`"
                                            :alt="`${link.type.toLowerCase()} icon`" class="icons">
                                        {{ link.name }}
                                    </a>
                                </li>
                            </ul>
                            <p class="subcard-title">Adaptability - All 4 Styles</p>
                            <ul class="subcard-links">
                                <li v-for="link in filteredAdaptabilityStyles" :key="link.url">
                                    <a :href="link.url" target="_blank" rel="noopener">
                                        <img :src="`https://cdn.assessments24x7.com/file/assessments24x7-media/trainer-materials/disc/${link.icon}`"
                                            :alt="`${link.type.toLowerCase()} icon`" class="icons">
                                        {{ link.name }}
                                    </a>
                                </li>
                            </ul>
                            <p class="subcard-title">Understanding foundations of DISC</p>
                            <ul class="subcard-links">
                                <li v-for="link in filteredUnderstandingFoundations" :key="link.url">
                                    <a :href="link.url" target="_blank" rel="noopener">
                                        <img :src="`https://cdn.assessments24x7.com/file/assessments24x7-media/trainer-materials/disc/${link.icon}`"
                                            :alt="`${link.type.toLowerCase()} icon`" class="icons">
                                        {{ link.name }}
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div class="card">
                            <img src="https://cdn.assessments24x7.com/file/assessments24x7-media/trainer-materials/disc/2024+disc/%2B+Training+%26+Workshops.png"
                                alt="icon" class="icon" />
                            <div>
                                <h4 data-category="t&w">
                                    {{ toggleStates['t&w'] ? '−' : '+' }} Training & Workshops
                                </h4>
                                <p>Training presentations, Facilitator guides, DISC group exercises, & delivery
                                    resources.</p>
                            </div>
                        </div>
                        <div v-if="toggleStates['t&w']" class="subcard">
                            <p class="subcard-title">Training Presentations & Facilitator Guides</p>
                            <ul class="subcard-links">
                                <li v-for="link in filteredTrainingPresentationsFacilitatorGuides" :key="link.url">
                                    <a :href="link.url" target="_blank" rel="noopener">
                                        <img :src="`https://cdn.assessments24x7.com/file/assessments24x7-media/trainer-materials/disc/${link.icon}`"
                                            :alt="`${link.type.toLowerCase()} icon`" class="icons">
                                        {{ link.name }}
                                    </a>
                                </li>
                            </ul>
                            <p class="subcard-title">DISC Specific Group Exercises</p>
                            <ul class="subcard-links">
                                <li v-for="link in filteredDISCSpecificGroupExercises" :key="link.url">
                                    <a :href="link.url" target="_blank" rel="noopener">
                                        <img :src="`https://cdn.assessments24x7.com/file/assessments24x7-media/trainer-materials/disc/${link.icon}`"
                                            :alt="`${link.type.toLowerCase()} icon`" class="icons">
                                        {{ link.name }}
                                    </a>
                                </li>
                            </ul>
                            <p class="subcard-title">General Group Exercises</p>
                            <ul class="subcard-links">
                                <li v-for="link in filteredGeneralGroupExercises" :key="link.url">
                                    <a :href="link.url" target="_blank" rel="noopener">
                                        <img :src="`https://cdn.assessments24x7.com/file/assessments24x7-media/trainer-materials/disc/${link.icon}`"
                                            :alt="`${link.type.toLowerCase()} icon`" class="icons">
                                        {{ link.name }}
                                    </a>
                                </li>
                            </ul>
                            <p class="subcard-title">DISC Activity Resources</p>
                            <ul class="subcard-links">
                                <li v-for="link in filteredDISCActivityResources" :key="link.url">
                                    <a :href="link.url" target="_blank" rel="noopener">
                                        <img :src="`https://cdn.assessments24x7.com/file/assessments24x7-media/trainer-materials/disc/${link.icon}`"
                                            :alt="`${link.type.toLowerCase()} icon`" class="icons">
                                        {{ link.name }}
                                    </a>
                                </li>
                            </ul>
                            <p class="subcard-title">Enhancing Delivery Resources - Training & Presentations</p>
                            <ul class="subcard-links">
                                <li v-for="link in filteredEnhancingDeliveryResourcesTrainingPresentations"
                                    :key="link.url">
                                    <a :href="link.url" target="_blank" rel="noopener">
                                        <img :src="`https://cdn.assessments24x7.com/file/assessments24x7-media/trainer-materials/disc/${link.icon}`"
                                            :alt="`${link.type.toLowerCase()} icon`" class="icons">
                                        {{ link.name }}
                                    </a>
                                </li>
                            </ul>
                            <p class="subcard-title">Enhancing Delivery Resources - Audio and video files</p>
                            <ul class="subcard-links">
                                <li v-for="link in filteredEnhancingDeliveryResourcesAudioVideoFiles" :key="link.url">
                                    <a :href="link.url" target="_blank" rel="noopener">
                                        <img :src="`https://cdn.assessments24x7.com/file/assessments24x7-media/trainer-materials/disc/${link.icon}`"
                                            :alt="`${link.type.toLowerCase()} icon`" class="icons">
                                        {{ link.name }}
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div class="card">
                            <img src="https://cdn.assessments24x7.com/file/assessments24x7-media/trainer-materials/disc/2024+disc/%2B+Implementation+%26+Application.png"
                                alt="icon" class="icon" />
                            <div>
                                <h4 data-category="i&a">
                                    {{ toggleStates['i&a'] ? '−' : '+' }} Implementation & Application
                                </h4>
                                <p>DISC Email Series, Target Applications Tips, & Behavioral Style Interview Guide.</p>
                            </div>
                        </div>

                        <div v-if="toggleStates['i&a']" class="subcard">
                            <ul class="subcard-links">
                                <li v-for="link in filteredImplementationApplicationLinksWithoutTitle" :key="link.url">
                                    <a :href="link.url" target="_blank" rel="noopener">
                                        <img :src="`https://cdn.assessments24x7.com/file/assessments24x7-media/trainer-materials/disc/${link.icon}`"
                                            :alt="`${link.type.toLowerCase()} icon`" class="icons">
                                        {{ link.name }}
                                    </a>
                                </li>
                            </ul>
                            <p class="subcard-title">DISC in Action Series</p>
                            <ul class="subcard-links">
                                <li v-for="link in filteredDISCActionSeries" :key="link.url">
                                    <a :href="link.url" target="_blank" rel="noopener">
                                        <img :src="`https://cdn.assessments24x7.com/file/assessments24x7-media/trainer-materials/disc/${link.icon}`"
                                            :alt="`${link.type.toLowerCase()} icon`" class="icons">
                                        {{ link.name }}
                                    </a>
                                </li>
                            </ul>
                            <p class="subcard-title">DISC Target Applications Tips</p>
                            <ul class="subcard-links">
                                <li v-for="link in filteredDISCTargetApplicationsTips" :key="link.url">
                                    <a :href="link.url" target="_blank" rel="noopener">
                                        <img :src="`https://cdn.assessments24x7.com/file/assessments24x7-media/trainer-materials/disc/${link.icon}`"
                                            :alt="`${link.type.toLowerCase()} icon`" class="icons">
                                        {{ link.name }}
                                    </a>
                                </li>
                            </ul>
                        </div>

                        <div class="card">
                            <img src="https://cdn.assessments24x7.com/file/assessments24x7-media/trainer-materials/disc/2024+disc/%2B+360+Resources.png"
                                alt="icon" class="icon" />
                            <div>
                                <h4 data-category="360">
                                    {{ toggleStates['360'] ? '−' : '+' }} 360 Resources
                                </h4>
                                <p>Supporting materials to help you with 360 Assessments.</p>
                            </div>
                        </div>

                        <div v-if="toggleStates['360']" class="subcard">
                            <ul class="subcard-links">
                                <li v-for="link in filteredThreeSixtyResourcesWithoutTitle" :key="link.url">
                                    <a :href="link.url" target="_blank" rel="noopener">
                                        <img :src="`https://cdn.assessments24x7.com/file/assessments24x7-media/trainer-materials/disc/${link.icon}`"
                                            :alt="`${link.type.toLowerCase()} icon`" class="icons">
                                        {{ link.name }}
                                    </a>
                                </li>
                            </ul>
                        </div>

                        <div class="card">
                            <img src="https://cdn.assessments24x7.com/file/assessments24x7-media/trainer-materials/disc/2024+disc/%2B+Additional+Support+Materials.png"
                                alt="icon" class="icon" />
                            <div>
                                <h4 data-category="support">
                                    {{ toggleStates['support'] ? '−' : '+' }} Additional Support Materials
                                </h4>
                                <p>Supplementary materials to enhance your understanding & application of DISC.</p>
                            </div>
                        </div>

                        <div v-if="toggleStates['support']" class="subcard">
                            <p class="subcard-title">Other Materials</p>
                            <ul class="subcard-links">
                                <li v-for="link in filteredOtherMaterials" :key="link.url">
                                    <a :href="link.url" target="_blank" rel="noopener">
                                        <img :src="`https://cdn.assessments24x7.com/file/assessments24x7-media/trainer-materials/disc/${link.icon}`"
                                            :alt="`${link.type.toLowerCase()} icon`" class="icons">
                                        {{ link.name }}
                                    </a>
                                </li>
                            </ul>
                        </div>

                    </div>
                    <div class="col-6">
                        <div class="card">
                            <img src="https://cdn.assessments24x7.com/file/assessments24x7-media/trainer-materials/disc/2024+disc/%2B+Assessment+Report+Tools.png"
                                alt="icon" class="icon" />
                            <div>
                                <h4 data-category="report&tools">
                                    {{ toggleStates['report&tools'] ? '−' : '+' }} Assessment Report Tools
                                </h4>
                                <p>Debriefing & Assessment Report Details.</p>
                            </div>
                        </div>

                        <div v-if="toggleStates['report&tools']" class="subcard">
                            <p class="subcard-title">Debriefing and Assessment Report Details</p>
                            <ul class="subcard-links">
                                <li v-for="link in filteredDebriefingAssessmentReportDetails" :key="link.url">
                                    <a :href="link.url" target="_blank" rel="noopener">
                                        <img :src="`https://cdn.assessments24x7.com/file/assessments24x7-media/trainer-materials/disc/${link.icon}`"
                                            :alt="`${link.type.toLowerCase()} icon`" class="icons">
                                        {{ link.name }}
                                    </a>
                                </li>
                            </ul>
                            <p class="subcard-title">Video Resources</p>
                            <ul class="subcard-links">
                                <li v-for="link in filteredVideoResources" :key="link.url">
                                    <a :href="link.url" target="_blank" rel="noopener">
                                        <img :src="`https://cdn.assessments24x7.com/file/assessments24x7-media/trainer-materials/disc/${link.icon}`"
                                            :alt="`${link.type.toLowerCase()} icon`" class="icons">
                                        {{ link.name }}
                                    </a>
                                </li>
                            </ul>
                        </div>

                        <div class="card">
                            <img src="https://cdn.assessments24x7.com/file/assessments24x7-media/trainer-materials/disc/2024+disc/%2B+Coaching+with+DISC.png"
                                alt="icon" class="icon" />
                            <div>
                                <h4 data-category="coaches">
                                    {{ toggleStates['coaches'] ? '−' : '+' }} Coaching with DISC
                                </h4>
                                <p>DISC Coaching resources.</p>
                            </div>
                        </div>

                        <div v-if="toggleStates['coaches']" class="subcard">
                            <p class="subcard-title">Coaching Guide for DISC</p>
                        </div>

                        <div class="card">
                            <img src="https://cdn.assessments24x7.com/file/assessments24x7-media/trainer-materials/disc/2024+disc/%2B+Marketing.png"
                                alt="icon" class="icon" />
                            <div>
                                <h4 data-category="marketing">
                                    {{ toggleStates['marketing'] ? '−' : '+' }} Marketing
                                </h4>
                                <p>DISC marketing materials to help you support your business.</p>
                            </div>
                        </div>

                        <div v-if="toggleStates['marketing']" class="subcard">
                            <ul class="subcard-links">
                                <li v-for="link in filteredMarketingWithoutTitle" :key="link.url">
                                    <a :href="link.url" target="_blank" rel="noopener">
                                        <img :src="`https://cdn.assessments24x7.com/file/assessments24x7-media/trainer-materials/disc/${link.icon}`"
                                            :alt="`${link.type.toLowerCase()} icon`" class="icons">
                                        {{ link.name }}
                                    </a>
                                </li>
                            </ul>
                            <p class="subcard-title">Information Sheets</p>
                            <ul class="subcard-links">
                                <li v-for="link in filteredInformationSheets" :key="link.url">
                                    <a :href="link.url" target="_blank" rel="noopener">
                                        <img :src="`https://cdn.assessments24x7.com/file/assessments24x7-media/trainer-materials/disc/${link.icon}`"
                                            :alt="`${link.type.toLowerCase()} icon`" class="icons">
                                        {{ link.name }}
                                    </a>
                                </li>
                            </ul>
                        </div>

                        <div class="card">
                            <img src="https://cdn.assessments24x7.com/file/assessments24x7-media/trainer-materials/disc/2024+disc/%2B+Product+Specific+Resources.png"
                                alt="icon" class="icon" />
                            <div>
                                <h4 data-category="product">
                                    {{ toggleStates['product'] ? '−' : '+' }} Product Specific Resources
                                </h4>
                                <p>Infused & Non-infused.</p>
                            </div>
                        </div>

                        <div v-if="toggleStates['product']" class="subcard">
                            <p class="subcard-title">Infused</p>
                            <ul class="subcard-links">
                                <li v-for="link in filteredInfused" :key="link.url">
                                    <a :href="link.url" target="_blank" rel="noopener">
                                        <img :src="`https://cdn.assessments24x7.com/file/assessments24x7-media/trainer-materials/disc/${link.icon}`"
                                            :alt="`${link.type.toLowerCase()} icon`" class="icons">
                                        {{ link.name }}
                                    </a>
                                </li>
                            </ul>
                            <p class="subcard-title">Non-Infused</p>
                            <ul class="subcard-links">
                                <li v-for="link in filterednonInfused" :key="link.url">
                                    <a :href="link.url" target="_blank" rel="noopener">
                                        <img :src="`https://cdn.assessments24x7.com/file/assessments24x7-media/trainer-materials/disc/${link.icon}`"
                                            :alt="`${link.type.toLowerCase()} icon`" class="icons">
                                        {{ link.name }}
                                    </a>
                                </li>
                            </ul>
                        </div>

                        <div class="card">
                            <img src="https://cdn.assessments24x7.com/file/assessments24x7-media/trainer-materials/disc/2024+disc/%2B+Quick+Links.png"
                                alt="icon" class="icon" />
                            <div>
                                <h4 data-category="quick&links">
                                    {{ toggleStates['quick&links'] ? '−' : '+' }} Quick Links
                                </h4>
                                <p>Latest updates, Store, FAQs, Support info, & more.</p>
                            </div>
                        </div>

                        <div v-if="toggleStates['quick&links']" class="subcard">
                            <p class="subcard-title">Latest Updates</p>
                            <ul class="subcard-links">
                                <li v-for="link in filteredLatestUpdates" :key="link.url">
                                    <a :href="link.url" target="_blank" rel="noopener">
                                        <img :src="`https://cdn.assessments24x7.com/file/assessments24x7-media/trainer-materials/disc/${link.icon}`"
                                            :alt="`${link.type.toLowerCase()} icon`" class="icons">
                                        {{ link.name }}
                                    </a>
                                </li>
                            </ul>
                        </div>

                    </div>
                </div>
            </div>
            <br />
        </div>

        <section v-else class="skeleton" style="background-color: white;">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <div class="password-prompt">
                            <div class="info">
                                <h3>This resource is password protected</h3>
                                <p>
                                    These trainer material resources are only available for Assessments 24x7 account
                                    holders.
                                    Please use the password provided to you in your Resource Center.
                                </p>
                            </div>

                            <div v-if="validationError" class="error">
                                <p>
                                    The password you have entered is invalid. Please try again.
                                </p>
                            </div>

                            <div class="form-group">
                                <label for="password">Password</label>
                                <input type="password" class="form-control" id="password" v-model="password"
                                    v-on:keyup.enter="unlock">
                            </div>

                            <p style="margin-top:-10px;font-size:10pt;margin-bottom:30px">
                                Having trouble? <a class="hyperlink" href="mailto:support@assessments24x7.com">Contact
                                    our
                                    support team &rarr;</a>
                            </p>

                            <button class="button" style="width:100%" @click="unlock">Access the Trainer
                                Materials</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <footer-fold></footer-fold>
    </section>
</template>

<script>
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';

export default {
    components: {
        'main-nav': Nav,
        'footer-fold': Footer
    },

    data() {
        return {
            unlocked: false,
            password: '',
            certified: false,
            validationError: false,
            toggleStates: {
                fundamentals: false,
                't&w': false,
                'i&a': false,
                '360': false,
                support: false,
                'report&tools': false,
                coaches: false,
                marketing: false,
                product: false,
                'quick&links': false,
            },
            selectedFileType: 'All',
            fundamentalsSections: {
                foundations: [
                    { name: 'DISC Assessment History', type: 'PDF', url: 'https://cdn.assessments24x7.com/file/assessments24x7-media/trainer-materials/disc/DISCAssessmentHistory.pdf', icon: 'PDF.png', certified: true },
                    { name: 'DISC Direct/Indirect', type: 'PDF', url: 'https://cdn.assessments24x7.com/file/assessments24x7-media/trainer-materials/disc/DISCDirectandIndirect.pdf', icon: 'PDF.png' },
                    { name: 'DISC Open/Guarded', type: 'PDF', url: 'https://cdn.assessments24x7.com/file/assessments24x7-media/trainer-materials/disc/DISCOpenandGuarded.pdf', icon: 'PDF.png' }
                ],
                descriptionStyles: [
                    { name: 'Description - High D', type: 'MP4', url: 'https://cdn.assessments24x7.com/file/assessments24x7-media/trainer-materials/disc/HighD.mp4', icon: 'MP4.png' },
                    { name: 'Description - High I', type: 'MP4', url: 'https://cdn.assessments24x7.com/file/assessments24x7-media/trainer-materials/disc/HighI.mp4', icon: 'MP4.png' },
                    { name: 'Description - High S', type: 'MP4', url: 'https://cdn.assessments24x7.com/file/assessments24x7-media/trainer-materials/disc/HighS.mp4', icon: 'MP4.png' },
                    { name: 'Description - High C', type: 'MP4', url: 'https://cdn.assessments24x7.com/file/assessments24x7-media/trainer-materials/disc/HighC.mp4', icon: 'MP4.png' }
                ],
                adaptabilityStyles: [
                    { name: 'Adaptability - High D', type: 'MP4', url: 'https://cdn.assessments24x7.com/file/assessments24x7-media/trainer-materials/disc/How to Adapt_Dominance_1.25.24.mp4', icon: 'MP4.png' },
                    { name: 'Adaptability - High I', type: 'MP4', url: 'https://cdn.assessments24x7.com/file/assessments24x7-media/trainer-materials/disc/I_Influence_Adaptive_2.29.24.mp4', icon: 'MP4.png' },
                    { name: 'Adaptability - High S', type: 'MP4', url: 'https://cdn.assessments24x7.com/file/assessments24x7-media/trainer-materials/disc/S_Steadiness_Adaptive_2.29.24.mp4', icon: 'MP4.png' },
                    { name: 'Adaptability - High C', type: 'MP4', url: 'https://cdn.assessments24x7.com/file/assessments24x7-media/trainer-materials/disc/High_C_Adaptive.mp4', icon: 'MP4.png' }
                ],
                understandingFoundations: [
                    { name: 'Over-Under Extensions and DISC Emotions', type: 'PDF', url: 'https://cdn.assessments24x7.com/file/assessments24x7-media/trainer-materials/disc/DISCOverUnderExtensions_Emotions.pdf', icon: 'PDF.png', certified: true },
                    { name: 'Extensions', type: 'PDF', url: 'https://cdn.assessments24x7.com/file/assessments24x7-media/trainer-materials/disc/Extensions.pdf', icon: 'PDF.png', certified: true },
                    { name: '15 Classical DISC Style Behavioral Patterns', type: 'PPT', url: 'https://cdn.assessments24x7.com/file/assessments24x7-media/trainer-materials/disc/15ClassicStylePatternsComplete.pptx', icon: 'PPT.png', certified: true },
                    { name: '15 Classical DISC Style Behavioral Patterns', type: 'PDF', url: 'https://cdn.assessments24x7.com/file/assessments24x7-media/trainer-materials/disc/15DISCstyleBehavioralPatterns.pdf', icon: 'PDF.png', isElse: true },
                    { name: '15 Classic DISC Styles Summary Overview', type: 'PDF', url: 'https://cdn.assessments24x7.com/file/assessments24x7-media/trainer-materials/disc/15ClassicalStylesSummaryReportFinal_10.25.23.pdf', icon: 'PDF.png', certified: true },
                    { name: '15 Classical DISC Styles: Wheel Plotting', type: 'PDF', url: 'https://cdn.assessments24x7.com/file/assessments24x7-media/trainer-materials/disc/15ClassicStylesPatternMap1.24.pdf', icon: 'PDF.png', certified: true },
                    { name: '15 Classical DISC Styles: Wheel Plotting', type: 'PPT', url: 'https://cdn.assessments24x7.com/file/assessments24x7-media/trainer-materials/disc/15ClassicStylesPatternMap1.24.pptx', icon: 'PPT.png' },
                    { name: 'Tensions between the Same DISC styles', type: 'PDF', url: 'https://cdn.assessments24x7.com/file/assessments24x7-media/trainer-materials/disc/Tensions-Between-Same-Styles-vs2.pdf', icon: 'PDF.png', certified: true }
                ],
            },
            trainingWorkshopSections: {
                trainingPresentationsFacilitatorGuides: [
                    { name: 'DISC 2-hour Facilitator Guide', type: 'PDF', url: 'https://cdn.assessments24x7.com/file/assessments24x7-media/trainer-materials/disc/DISC2HourFacilitatorGuide.pdf', icon: 'PDF.png', certified: true },
                    { name: 'DISC 2-hour Training Presentation', type: 'PPT', url: 'https://cdn.assessments24x7.com/file/assessments24x7-media/trainer-materials/disc/DISC2hourTrainingPresentation.ppt', icon: 'PPT.png' },
                    { name: 'DISC 4-hour Facilitator Guide', type: 'PDF', url: 'https://cdn.assessments24x7.com/file/assessments24x7-media/trainer-materials/disc/DISC4HourFacilitatorGuide.pdf', icon: 'PDF.png', certified: true },
                    { name: 'DISC 4-hour Training Presentation', type: 'PPT', url: 'https://cdn.assessments24x7.com/file/assessments24x7-media/trainer-materials/disc/DISC4hourTrainingPresentation.ppt', icon: 'PPT.png', certified: true },
                    { name: 'Mini-DISC Presentation', type: 'PPT', url: 'https://cdn.assessments24x7.com/file/assessments24x7-media/trainer-materials/disc/Mini_DISCPresentation.pptx', icon: 'PPT.png' },
                    { name: 'Team Dynamics PPT', type: 'PPT', url: 'https://cdn.assessments24x7.com/file/assessments24x7-media/trainer-materials/disc/TeamDynamics.pptm', icon: 'PPT.png', certified: true },
                    { name: 'Riddles and Team Practice PPT', type: 'PPT', url: 'https://cdn.assessments24x7.com/file/assessments24x7-media/trainer-materials/disc/TeamDynamicsActivities.pptm', icon: 'PPT.png', certified: true }
                ],
                dISCSpecificGroupExercises: [
                    { name: 'Planning a Vacation', type: 'PDF', url: 'https://cdn.assessments24x7.com/file/assessments24x7-media/trainer-materials/disc/Vacation.pdf', icon: 'PDF.png', certified: true },
                    { name: 'Making a Movie', type: 'PDF', url: 'https://cdn.assessments24x7.com/file/assessments24x7-media/trainer-materials/disc/MakingAMovie.pdf', icon: 'PDF.png', certified: true },
                    { name: 'Game Show', type: 'PPT', url: 'https://cdn.assessments24x7.com/file/assessments24x7-media/trainer-materials/disc/GameShow.pptx', icon: 'PPT.png', certified: true },
                    { name: 'Mazes & Labyrinths', type: 'PDF', url: 'https://cdn.assessments24x7.com/file/assessments24x7-media/trainer-materials/disc/MazeLabyrinthDISCActivity.pdf', icon: 'PDF.png', certified: true },
                    { name: 'Jigsaw Puzzles', type: 'PDF', url: 'https://cdn.assessments24x7.com/file/assessments24x7-media/trainer-materials/disc/Jigsaw.pdf', icon: 'PDF.png', certified: true },
                    { name: 'DISC Adaptability Scenario Practice', type: 'PDF', url: 'https://cdn.assessments24x7.com/file/assessments24x7-media/trainer-materials/disc/DISC Adaptability Scenario Practice.pdf', icon: 'PDF.png', certified: true },
                    { name: 'DISC Style Situations', type: 'PDF', url: 'https://cdn.assessments24x7.com/file/assessments24x7-media/trainer-materials/disc/DISC Style Situations.pdf', icon: 'PDF.png', certified: true },
                    { name: 'Coffee Break', type: 'PPT', url: 'https://cdn.assessments24x7.com/file/assessments24x7-media/trainer-materials/disc/Coffee+Break+Activity.pptx', icon: 'PPT.png', certified: true }
                ],
                generalGroupExercises: [
                    { name: '40 Ice breakers for Small Groups', type: 'PDF', url: 'https://cdn.assessments24x7.com/file/assessments24x7-media/trainer-materials/group-exercises/40icebreakers.pdf', icon: 'PDF.png' },
                    { name: 'Lost on the Moon Exercise', type: 'PDF', url: 'https://cdn.assessments24x7.com/file/assessments24x7-media/trainer-materials/group-exercises/LostOnTheMoonExercise.pdf', icon: 'PDF.png' },
                    { name: 'Lost at Sea Exercise', type: 'PDF', url: 'https://cdn.assessments24x7.com/file/assessments24x7-media/trainer-materials/group-exercises/LostatSeaExercise.pdf', icon: 'PDF.png' },
                    { name: 'Paper Tower Exercise', type: 'PDF', url: 'https://cdn.assessments24x7.com/file/assessments24x7-media/trainer-materials/group-exercises/PaperTowerExercise.pdf', icon: 'PDF.png' }
                ],
                dISCActivityResources: [
                    { name: 'DISC Word Sketches (blank)', type: 'PDF', url: 'https://cdn.assessments24x7.com/file/assessments24x7-media/trainer-materials/disc/DISCWordSketch.pdf', icon: 'PDF.png', certified: true },
                    { name: 'Behavior Pattern View (blank wheel)', type: 'JPG', url: 'https://cdn.assessments24x7.com/file/assessments24x7-media/trainer-materials/disc/WheelGraphJPG.jpeg', icon: 'JPG.png', certified: true },
                    { name: 'Contract for Change (blank)', type: 'DOC', url: 'https://cdn.assessments24x7.com/file/assessments24x7-media/trainer-materials/disc/ContractChange.docx', icon: 'Doc.png', certified: true },
                    { name: 'DISC Summary Editable Document', type: 'PDF', url: 'https://cdn.assessments24x7.com/file/assessments24x7-media/trainer-materials/disc/DISCSummaryPage.pdf', icon: 'PDF.png' },
                    { name: 'Adapting to DISC Styles (blank)', type: 'PDF', url: 'https://cdn.assessments24x7.com/file/assessments24x7-media/trainer-materials/disc/AdaptingDISCStyles.pdf', icon: 'PDF.png', certified: true },
                    { name: 'Creating Better Relationships (blank)', type: 'PDF', url: 'https://cdn.assessments24x7.com/file/assessments24x7-media/trainer-materials/disc/CreatingBetterRelationships.pdf', icon: 'PDF.png', certified: true },
                    { name: 'Tensions Worksheet (blank)', type: 'DOC', url: 'https://cdn.assessments24x7.com/file/assessments24x7-media/trainer-materials/disc/Tensions.doc', icon: 'Doc.png' },
                    { name: 'DISC Blocks – Benefits & Applications', type: 'URL', url: 'https://www.assessments24x7.com/disc-blocks', icon: 'URL.png' }
                ],
                enhancingDeliveryResourcesTrainingPresentations: [
                    { name: 'DISC Platinum Rule Participant eWorkbook (84 pages)', type: 'PDF', url: 'https://cdn.assessments24x7.com/file/assessments24x7-media/trainer-materials/disc/DISC+eWorkbook+INTERACTIVE.pdf', icon: 'PDF.png', certified: true },
                    { name: 'Peer Feedback Form', type: 'PDF', url: 'https://cdn.assessments24x7.com/file/assessments24x7-media/trainer-materials/disc/PeerFeedbackForm.pdf', icon: 'PDF.png' },
                    { name: 'Facilitator Feedback Guide', type: 'PDF', url: 'https://cdn.assessments24x7.com/file/assessments24x7-media/trainer-materials/disc/FacilitationFeedbackGuide.pdf', icon: 'PDF.png' },
                    { name: 'Self-Feedback Form', type: 'PDF', url: 'https://cdn.assessments24x7.com/file/assessments24x7-media/trainer-materials/disc/SelfFeedbackForm.pdf', icon: 'PDF.png' },
                    { name: 'Development Plan Sample', type: 'DOC', url: 'https://cdn.assessments24x7.com/file/assessments24x7-media/trainer-materials/disc/DevelopmentPlan.docx', icon: 'Doc.png' },
                    { name: 'Coaching Guide Questions', type: 'PDF', url: 'https://cdn.assessments24x7.com/file/assessments24x7-media/trainer-materials/disc/CoachingGuideQuestions.pdf', icon: 'PDF.png' }
                ],
                enhancingDeliveryResourcesAudioVideoFiles: [
                    { name: 'Identifying the Styles', type: 'ZIP', url: 'https://cdn.assessments24x7.com/file/assessments24x7-media/trainer-materials/disc/Identifying+the+DISC+Styles.zip', icon: 'Zip.png' },
                    { name: 'Songs for each Style', type: 'ZIP', url: 'https://cdn.assessments24x7.com/file/assessments24x7-media/trainer-materials/disc/songs_for_each_style.zip', icon: 'Zip.png' },
                    { name: 'Leaving Voicemails for each Style', type: 'ZIP', url: 'https://cdn.assessments24x7.com/file/assessments24x7-media/trainer-materials/disc/Leaving+Voicemails+for+Each+Style.zip', icon: 'Zip.png' },
                    { name: 'Complimenting each Style', type: 'ZIP', url: 'https://cdn.assessments24x7.com/file/assessments24x7-media/trainer-materials/disc/Complimenting+each+Style.zip', icon: 'Zip.png', certified: true },
                    { name: 'Counseling each Style', type: 'ZIP', url: 'https://cdn.assessments24x7.com/file/assessments24x7-media/trainer-materials/disc/Counseling+each+Style.zip', icon: 'Zip.png', certified: true },
                    { name: 'Delegating to each Style', type: 'ZIP', url: 'https://cdn.assessments24x7.com/file/assessments24x7-media/trainer-materials/disc/Delegating+to+each+Style.zip', icon: 'Zip.png', certified: true },
                    { name: 'Motivating each Style', type: 'ZIP', url: 'https://cdn.assessments24x7.com/file/assessments24x7-media/trainer-materials/disc/Motivating+each+Style.zip', icon: 'Zip.png', certified: true },
                    { name: 'Making contact with each Style', type: 'ZIP', url: 'https://cdn.assessments24x7.com/file/assessments24x7-media/trainer-materials/disc/Making+Contact+with+each+Style.zip', icon: 'Zip.png', certified: true },
                    { name: 'Exploring with each Style', type: 'ZIP', url: 'https://cdn.assessments24x7.com/file/assessments24x7-media/trainer-materials/disc/Exploring+with+each+Style.zip', icon: 'Zip.png', certified: true },
                    { name: 'Collaborating with each Style', type: 'ZIP', url: 'https://cdn.assessments24x7.com/file/assessments24x7-media/trainer-materials/disc/Collaborating+with+each+Style.zip', icon: 'Zip.png', certified: true },
                    { name: 'Getting commitment from each Style', type: 'ZIP', url: 'https://cdn.assessments24x7.com/file/assessments24x7-media/trainer-materials/disc/Getting+Commitment+from+each+Style.zip', icon: 'Zip.png', certified: true },
                    { name: 'Assuring Customer Satisfaction with each Style', type: 'ZIP', url: 'https://cdn.assessments24x7.com/file/assessments24x7-media/trainer-materials/disc/Assuring+Customer+Satisfaction+from+each+Style.zip', icon: 'Zip.png', certified: true },
                    { name: 'KnowDISC', type: 'ZIP', url: 'https://cdn.assessments24x7.com/file/assessments24x7-media/trainer-materials/disc/Know+DISC.zip', icon: 'Zip.png' }
                ]
            },
            implementationApplication: {
                implementationApplicationLinksWithoutTitle: [
                    { name: '52 Week Email Series', type: 'PDF', url: 'https://cdn.assessments24x7.com/file/assessments24x7-media/trainer-materials/disc/52+Week+DISC+email+series+updated+12-2020.pdf', icon: 'PDF.png' },
                    { name: 'DISC Behavioral Style Interview Guide', type: 'PDF', url: 'https://cdn.assessments24x7.com/file/assessments24x7-media/trainer-materials/disc/DISCInterviewGuide.pdf', icon: 'PDF.png' }
                ],
                dISCActionSeries: [
                    { name: 'During Change', type: 'PDF', url: 'https://cdn.assessments24x7.com/file/assessments24x7-media/trainer-materials/disc/DISC+in+Action+-+During+Change.pdf', icon: 'PDF.png' },
                    { name: 'On the Phone', type: 'PDF', url: 'https://cdn.assessments24x7.com/file/assessments24x7-media/trainer-materials/disc/DISC+in+Action+-+On+the+Phone.pdf', icon: 'PDF.png' },
                    { name: 'Leading a Meeting', type: 'PDF', url: 'https://cdn.assessments24x7.com/file/assessments24x7-media/trainer-materials/disc/DISC+in+Action+-+Leading+a+Meeting.pdf', icon: 'PDF.png' },
                    { name: 'Workspaces', type: 'PDF', url: 'https://cdn.assessments24x7.com/file/assessments24x7-media/trainer-materials/disc/DISC+in+Action+-+Workspaces.pdf', icon: 'PDF.png' }
                ],
                dISCTargetApplicationsTips: [
                    { name: 'Coaching Tips', type: 'PDF', url: 'https://cdn.assessments24x7.com/file/assessments24x7-media/trainer-materials/disc/DISCCoachingTargetApplication.pdf', icon: 'PDF.png' },
                    { name: 'Leadership Tips', type: 'PDF', url: 'https://cdn.assessments24x7.com/file/assessments24x7-media/trainer-materials/disc/DISCLeadershipTargetApplication.pdf', icon: 'PDF.png' },
                    { name: 'Sales Tips', type: 'PDF', url: 'https://cdn.assessments24x7.com/file/assessments24x7-media/trainer-materials/disc/DISCSalesTargetApplication.pdf', icon: 'PDF.png' },
                    { name: 'Service Tips', type: 'PDF', url: 'https://cdn.assessments24x7.com/file/assessments24x7-media/trainer-materials/disc/DISCServiceTargetApplication.pdf', icon: 'PDF.png' }
                ]
            },
            threeSixtyResources: {
                threeSixtyResourcesWithoutTitle: [
                    { name: 'Debrief Guide', type: 'PDF', url: 'https://cdn.assessments24x7.com/file/assessments24x7-media/trainer-materials/disc/DISC360 Debrief Guide.pdf', icon: 'PDF.png' },
                    { name: 'Setting up a 360 Assessment Link in Dashboard', type: 'URL', url: 'https://www.youtube.com/watch?v=IFEiJmud3WI', icon: 'URL.png' },
                    { name: 'Setting up a 360 Assessment Link in Dashboard', type: 'PDF', url: 'https://cdn.assessments24x7.com/file/assessments24x7-media/trainer-materials/disc/360Instructions2022.pdf', icon: 'PDF.png' }
                ]
            },
            additionalSupportMaterials: {
                otherMaterials: [
                    { name: 'The 12 Integrated DISC Style Relationships-Advanced (Retired)', type: 'PDF', url: 'https://cdn.assessments24x7.com/file/assessments24x7-media/trainer-materials/disc/12IntegratedDISCStyleRelationshipsAdvanced.pdf', icon: 'PDF.png', certified: true },
                    { name: 'People Smart in Business PDF ebook', type: 'PDF', url: 'https://cdn.assessments24x7.com/file/assessments24x7-media/trainer-materials/disc/DISCeWorkbook.pdf', icon: 'PDF.png', certified: true },
                    { name: 'The Platinum Rule for DISC Sales Mastery', type: 'PDF', url: 'https://cdn.assessments24x7.com/file/assessments24x7-media/trainer-materials/disc/PlatinumRuleDISCSalesMasteryForewordDaveYoho.pdf', icon: 'PDF.png', certified: true },
                    { name: 'DISC Reliability Analysis', type: 'URL', url: '/about/validity', icon: 'URL.png' },
                    { name: 'DISC History Chart', type: 'PDF', url: 'https://cdn.assessments24x7.com/file/assessments24x7-media/trainer-materials/disc/HistoryChart.pdf', icon: 'PDF.png', certified: true },
                    { name: 'Are You Mad at Me? Article', type: 'PDF', url: 'https://cdn.assessments24x7.com/file/assessments24x7-media/trainer-materials/disc/AreYouMadatMe.pdf', icon: 'PDF.png', certified: true },
                    { name: 'DISC World Map', type: 'JPG', url: 'https://cdn.assessments24x7.com/file/assessments24x7-media/trainer-materials/disc/DISC+World+Map.jpg', icon: 'JPG.png' },
                    { name: 'DISC Careers', type: 'PDF', url: 'https://cdn.assessments24x7.com/file/assessments24x7-media/trainer-materials/disc/DISC+Careers.pdf', icon: 'PDF.png' },
                ]
            },
            assessmentReportTools: {
                debriefingAssessmentReportDetails: [
                    { name: 'DISC Debrief Guide', type: 'PDF', url: 'https://cdn.assessments24x7.com/file/assessments24x7-media/trainer-materials/disc/DISC+Report+Certified+Debrief+Guide_vs8_8.2024.pdf', icon: 'PDF.png', certified: true },
                    { name: 'DISC Debrief Guide', type: 'PDF', url: 'https://cdn.assessments24x7.com/file/assessments24x7-media/trainer-materials/disc/DISC+Report+Debrief+Guide_nc_vs8_8.2024.pdf', icon: 'PDF.png', isElse: true },
                    { name: 'DISC Report Highlights', type: 'PDF', url: 'https://cdn.assessments24x7.com/file/assessments24x7-media/trainer-materials/disc/DISCReportHighlights3.pdf', icon: 'PDF.png', certified: true },
                    { name: 'Natural & Adapted Graphs', type: 'PPT', url: 'https://cdn.assessments24x7.com/file/assessments24x7-media/trainer-materials/disc/NaturalandAdaptedGraphs.pptx', icon: 'PPT.png' },
                    { name: 'Design & Explanation of the DISC Behavioral Diamond', type: 'PDF', url: 'https://cdn.assessments24x7.com/file/assessments24x7-media/trainer-materials/disc/DISC+Wheel+Debrief+Guide_4.22.pdf', icon: 'PDF.png' },
                    { name: '12 Behavioral Tendencies Definitions & Explanations', type: 'PDF', url: 'https://cdn.assessments24x7.com/file/assessments24x7-media/trainer-materials/disc/BTDescriptions.pdf', icon: 'PDF.png' },
                    { name: 'Behavior Needs Under Stress', type: 'PDF', url: 'https://cdn.assessments24x7.com/file/assessments24x7-media/trainer-materials/disc/DISCeWorkbookPgs3536.pdf', icon: 'PDF.png', certified: true },
                    { name: 'Typical Behaviors in Conflict', type: 'PDF', url: 'https://cdn.assessments24x7.com/file/assessments24x7-media/trainer-materials/disc/DISC-in-conflict-typical-behaviors_vs2.pdf', icon: 'PDF.png', certified: true }
                ],
                videoResources: [
                    { name: 'Practice Videos for Debriefing Graphs', type: 'URL', url: 'https://www.youtube.com/playlist?list=PLTNKuyfaKqLaNM956tOMqirauvqe885Qc', icon: 'URL.png', certified: true },
                    { name: 'Understanding Your DISC Report (for your clients)', type: 'URL', url: 'https://www.youtube.com/playlist?list=PLTNKuyfaKqLbO8-2-hhuZ4-XZJJJME0sp', icon: 'URL.png', certified: true },
                    { name: 'Communicating with all 4 Styles (DISC)', type: 'URL', url: 'https://youtu.be/Y65akO9eoMo', icon: 'URL.png', certified: true },
                    { name: 'Communicating with all 4 Styles (with Birds)', type: 'URL', url: 'https://www.youtube.com/watch?v=j0KbAvu4uq0', icon: 'URL.png', certified: true }
                ]
            },
            marketing: {
                marketingWithoutTitle: [
                    { name: 'Mini DISC Presentation', type: 'PPT', url: 'https://cdn.assessments24x7.com/file/assessments24x7-media/trainer-materials/disc/Mini_DISCPresentation.pptx', icon: 'PPT.png' }
                ],
                informationSheets: [
                    { name: '52 Week Email Series', type: 'PDF', url: 'https://cdn.assessments24x7.com/file/assessments24x7-media/trainer-materials/disc/52+Week+DISC+email+series+updated+12-2020.pdf', icon: 'PDF.png' },
                    { name: 'DISC vs MBTI Article', type: 'PDF', url: 'https://cdn.assessments24x7.com/file/assessments24x7-media/trainer-materials/disc/DISCvsMBTI.pdf', icon: 'PDF.png' },
                    { name: 'DISC & Other Assessments Articles', type: 'URL', url: '/blog', icon: 'URL.png' },
                    { name: 'Comparing 4 quadrants and 5 factors Article', type: 'PDF', url: 'https://cdn.assessments24x7.com/file/assessments24x7-media/trainer-materials/disc/comparing.pdf', icon: 'PDF.png' },
                    { name: 'Assessment 24x7 Store', type: 'URL', url: 'https://store.assessments24x7.com/collections/products', icon: 'URL.png' },
                ]
            },
            productSpecificResources: {
                infused: [
                    { name: 'DISC Workplace Insights - Report Guide', type: 'PDF', url: 'https://cdn.assessments24x7.com/file/assessments24x7-media/trainer-materials/disc/DISC+Workplace+Insights_Vs1_6.18.2024.pdf', icon: 'PDF.png' },
                    { name: 'DISC Workplace Insights - Report Overview', type: 'URL', url: 'https://drive.google.com/file/d/1dW_3S00jyWZsPOcB_0E8k1AdKeEyGhMR/view?usp=drive_link', icon: 'URL.png' },
                    { name: 'DISC Workplace Insights - Introduction', type: 'PDF', url: 'https://cdn.assessments24x7.com/file/assessments24x7-media/trainer-materials/disc/DISC+Workplace+Insights+-+Marketing+One-Sheet.pdf', icon: 'PDF.png' },
                    { name: 'DISC Executive Insights - Introduction', type: 'PDF', url: 'https://cdn.assessments24x7.com/file/assessments24x7-media/trainer-materials/disc/DISC+Executive+Insights+-+Marketing+One-Sheet_v2.pdf', icon: 'PDF.png' },
                    { name: 'DISC Executive Insights Report Guide', type: 'PDF', url: 'https://cdn.assessments24x7.com/file/assessments24x7-media/trainer-materials/disc/DISC+Executive+Insights+Report+Guide_8.12.24+Final.pdf', icon: 'PDF.png' },
                    { name: 'DISC Leadership - Debrief Guide (Coming soon!)', type: 'PDF', url: '', icon: 'PDF.png' },
                    { name: 'DISC Leadership - Introduction', type: 'PDF', url: 'https://cdn.assessments24x7.com/file/assessments24x7-media/trainer-materials/disc/DISC+Leadership+-+Marketing+One-Sheet.pdf', icon: 'PDF.png' },
                    { name: 'DISC Awareness - Debrief guide', type: 'PDF', url: 'https://cdn.assessments24x7.com/file/assessments24x7-media/trainer-materials/disc/DISC+Awareness+Debrief+Guide_vs3_5.24_Final.pdf', icon: 'PDF.png' },
                    { name: 'DISC Awareness - Introduction', type: 'PDF', url: 'https://cdn.assessments24x7.com/file/assessments24x7-media/trainer-materials/disc/DISC+Awareness+-+Marketing+One-Sheet.pdf', icon: 'PDF.png' }
                ],
                nonInfused: [
                    { name: 'DISC & Motivators (Coming soon!)', type: 'PDF', url: '', icon: 'PDF.png' },
                    { name: 'DISC & EIQ (Coming soon!)', type: 'PDF', url: '', icon: 'PDF.png' }
                ]
            },
            quickLinks: {
                latestUpdates: [
                    { name: 'Assessment 24x7 Store', type: 'URL', url: 'https://store.assessments24x7.com/collections/products', icon: 'URL.png' },
                    { name: 'DISC FAQ', type: 'PDF', url: 'https://cdn.assessments24x7.com/file/assessments24x7-media/trainer-materials/disc/DISCfaq.pdf', icon: 'PDF.png' },
                    { name: 'Support', type: 'URL', url: 'https://www.assessments24x7.com/contact', icon: 'URL.png' },
                    { name: 'FAQ', type: 'URL', url: 'https://www.assessments24x7.com/about/faq', icon: 'URL.png' }
                ]
            }
        }
    },
    methods: {
        unlock() {
            if (this.password === 'disc2024a24x7') {
                this.unlocked = true;
                this.validationError = false;
            } else if (this.password === 'certified') {
                this.unlocked = true;
                this.certified = true;
                this.validationError = false;
            } else {
                this.validationError = true;
                this.password = '';
            }
        },
        toggleAllCards() {
            // Determine the new state: if all cards are open, set to false; otherwise, set to true
            const newState = !this.areAllCardsOpen;

            // Use Vue's `this.$set` to ensure reactivity when updating toggleStates
            Object.keys(this.toggleStates).forEach((key) => {
                this.$set(this.toggleStates, key, newState);
            });
        },
        handleClick(event) {
            if (event.target.tagName === 'H4') {
                const category = event.target.dataset.category;
                // Toggle the state of the clicked category
                this.$set(this.toggleStates, category, !this.toggleStates[category]);
            }
        },
        filterByType(sectionFiles) {
            // Filter by file type if it's not 'All'
            let filteredFiles = sectionFiles;
            if (this.selectedFileType !== 'All') {
                filteredFiles = filteredFiles.filter(file => file.type === this.selectedFileType);
            }

            // Handle certification logic
            if (this.certified) {
                // Show all links but exclude non-certified duplicates marked with `isElse: true`
                return filteredFiles.filter(file => !file.isElse);
            } else {
                // Show only non-certified links (including `isElse` duplicates)
                return filteredFiles.filter(file => !file.certified || file.isElse);
            }
        }
    },
    computed: {
        filteredFoundations() {
            return this.filterByType(this.fundamentalsSections.foundations);
        },
        filteredDescriptionStyles() {
            return this.filterByType(this.fundamentalsSections.descriptionStyles);
        },
        filteredAdaptabilityStyles() {
            return this.filterByType(this.fundamentalsSections.adaptabilityStyles);
        },
        filteredUnderstandingFoundations() {
            return this.filterByType(this.fundamentalsSections.understandingFoundations);
        },
        filteredTrainingPresentationsFacilitatorGuides() {
            return this.filterByType(this.trainingWorkshopSections.trainingPresentationsFacilitatorGuides);
        },
        filteredDISCSpecificGroupExercises() {
            return this.filterByType(this.trainingWorkshopSections.dISCSpecificGroupExercises);
        },
        filteredGeneralGroupExercises() {
            return this.filterByType(this.trainingWorkshopSections.generalGroupExercises);
        },
        filteredDISCActivityResources() {
            return this.filterByType(this.trainingWorkshopSections.dISCActivityResources);
        },
        filteredEnhancingDeliveryResourcesTrainingPresentations() {
            return this.filterByType(this.trainingWorkshopSections.enhancingDeliveryResourcesTrainingPresentations);
        },
        filteredEnhancingDeliveryResourcesAudioVideoFiles() {
            return this.filterByType(this.trainingWorkshopSections.enhancingDeliveryResourcesAudioVideoFiles);
        },
        filteredImplementationApplicationLinksWithoutTitle() {
            return this.filterByType(this.implementationApplication.implementationApplicationLinksWithoutTitle);
        },
        filteredDISCActionSeries() {
            return this.filterByType(this.implementationApplication.dISCActionSeries);
        },
        filteredDISCTargetApplicationsTips() {
            return this.filterByType(this.implementationApplication.dISCTargetApplicationsTips);
        },
        filteredThreeSixtyResourcesWithoutTitle() {
            return this.filterByType(this.threeSixtyResources.threeSixtyResourcesWithoutTitle);
        },
        filteredOtherMaterials() {
            return this.filterByType(this.additionalSupportMaterials.otherMaterials);
        },
        filteredDebriefingAssessmentReportDetails() {
            return this.filterByType(this.assessmentReportTools.debriefingAssessmentReportDetails);
        },
        filteredVideoResources() {
            return this.filterByType(this.assessmentReportTools.videoResources);
        },
        filteredMarketingWithoutTitle() {
            return this.filterByType(this.marketing.marketingWithoutTitle);
        },
        filteredInformationSheets() {
            return this.filterByType(this.marketing.informationSheets);
        },
        filteredInfused() {
            return this.filterByType(this.productSpecificResources.infused);
        },
        filterednonInfused() {
            return this.filterByType(this.productSpecificResources.nonInfused);
        },
        filteredLatestUpdates() {
            return this.filterByType(this.quickLinks.latestUpdates);
        },
        areAllCardsOpen() {
            // Check if every toggle state is true
            return Object.values(this.toggleStates).every((state) => state);
        }
    },
    head() {
        return {
            title: 'DISC Trainer Materials | Assessments 24x7',
            meta: [
                {
                    hid: 'description',
                    name: 'description',
                    content: 'The DISC Training Materials library is your comprehensive resource for coaching and debriefing tools, additional insight & information on the assessment, reports and models, and gives quick access to class/workshop materials you may need.'
                }
            ]
        }
    }
}
</script>

<style lang="scss" scoped>
.skeleton {
    background-color: #00a8ff;

    .body {
        background-color: white;
        text-align: center;
        margin: 20px;
        border-radius: 20px;
    }

    .container {
        max-width: 1200px;
        margin: 0 auto;
        padding: 0 15px;
    }

    .heroImage {
        width: 100%;
        margin-top: 40px;
    }

    h1 {
        font-size: 90.6665px;
        line-height: 100px;
        font-weight: 700;
    }

    h3 {
        font-size: 37.334px;
        line-height: 52px;
    }

    .input-container {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 20px 0;
        padding: 0 35px;
    }

    .toggle-all-button {
        cursor: pointer;
        height: 37px;
        width: 80px;
        border-radius: 5px;
        background-color: #00a8ff;
        color: white;
        border: none;
        transition: background-color 0.3s ease, transform 0.2s ease;
        margin-top: 0px;
    }

    .toggle-all-button:hover {
        background-color: #0086cc;
        transform: scale(1.03);
    }

    .toggle-all-button:active {
        transform: scale(.9);
    }

    .search-bar {
        position: relative;
        width: 68%;
    }

    .input-search {
        width: 100%;
        padding: 10px;
        padding-left: 40px;
        border: 1px solid #ccc;
        border-radius: 5px;
        font-size: 14px;
    }

    .search-icon {
        position: absolute;
        left: 10px;
        top: 50%;
        transform: translateY(-50%);
        font-size: 18px;
        color: #888;
    }

    .filter-dropdown {
        position: relative;
        width: 30%;
    }

    .filter-select {
        width: 100%;
        padding: 10px;
        padding-right: 40px;
        border: 1px solid #ccc;
        border-radius: 5px;
        font-size: 14px;
        appearance: none;
    }

    .dropdown-icon {
        position: absolute;
        right: 10px;
        top: 50%;
        transform: translateY(-50%);
        font-size: 18px;
        color: #888;
    }

    .icon {
        width: 80px;
        margin-right: 20px;
        margin-left: -25px;
        vertical-align: middle;
    }

    .icons {
        width: 24px;
        margin-bottom: 5px;
        margin-right: 5px;
    }

    .card {
        background-color: #00a8ff;
        color: white;
        padding: 0px 30px;
        border-radius: 50px 0 0 50px;
        margin-bottom: 15px;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        text-align: left;
        width: 100%;
        position: relative;
        z-index: 1;
        height: 90px;
    }

    .subcard {
        background-color: #00a8ff;
        color: white;
        padding: 15px 30px;
        margin-top: -15px;
        margin-bottom: 30px;
        margin-left: 40px;
        border-radius: 0 0 7px 7px;
        width: calc(100% - 40px);
        position: relative;
        z-index: 0;
    }

    .subcard-title {
        font-weight: 700;
        font-size: 16px;
        margin-bottom: -10px;
        margin-top: -10px;
        text-align: left;
        margin-left: 35px;
    }

    .subcard-links {
        list-style-type: none;
        padding-left: 0;
        font-size: 14.6667px;
        text-align: left;
        margin-left: 35px;
    }

    .subcard-links li {
        margin-bottom: 5px;
    }

    .subcard-links a {
        color: white;
        text-decoration: underline;
        font-weight: 500;
    }

    .subcard-links a:hover {
        text-decoration: none;
    }

    .card h4 {
        font-size: 21.333px;
        text-decoration: underline;
        margin: 0;
        cursor: pointer;
    }

    .card p {
        font-size: 14.666px;
        margin: 0;
    }

    .row {
        display: flex;
        flex-wrap: nowrap;
    }

    .col-6 {
        width: 50%;
        padding: 10px;
        box-sizing: border-box;
    }

    .password-prompt {
        width: 100%;
        max-width: 500px;
        padding: 20px;
        margin: 60px auto;
        display: block;

        .info {
            background: rgba(255, 189, 7, .2);
            padding: 20px;
            border-radius: 10px;
            border: 1px solid rgba(255, 189, 7, .3);
            margin-bottom: 18px;

            h3 {
                margin: 0 0 5px;
            }

            p {
                margin: 0;
                font-size: 11pt;
            }
        }

        .error {
            background: rgba(255, 0, 0, .2);
            padding: 20px;
            border-radius: 10px;
            border: 1px solid rgba(255, 0, 0, .3);
            margin-bottom: 18px;

            p {
                margin: 0;
                font-size: 11pt;
            }
        }
    }

    @media (max-width: 768px) {
        .row {
            flex-wrap: wrap;
        }

        .col-6 {
            width: 100%;
        }
    }
}
</style>