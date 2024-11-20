<template>
    <section class="skeleton">
        <main-nav />

        <section class="body hero">
            <div class="container">
                <div class="row">
                    <div class="col-7">
                        <h2 style="text-align: left; color: white; margin-top: 40px; margin-bottom: -40px;"
                            class="disc">DISC</h2>
                        <h2 style="text-align: left; color: #FFDE59; margin-bottom: 5px; font-weight: 400;">
                            <span v-if="certified">Certified
                                Trainer Materials</span>
                            <span v-else>Trainer Materials</span>
                        </h2>
                        <p style="text-align: left; margin-top: 0px; margin-bottom: 40px; color: white;"
                            class="heroText">
                            The Training Materials library is your comprehensive resource for coaching and debriefing
                            tools, providing additional insight and information on the assessment reports and models,
                            and giving quick access to class or workshop materials. Explore these at your leisure! There
                            are many useful and valuable resources to support your continued development, understanding,
                            and application!
                        </p>
                    </div>
                    <div class="col-5">
                        <img v-if="certified"
                            src="~/assets/coaches-directory/certified-trainer-materials-disc-hero-image.png"
                            alt="coaches directory hero image" class="heroImageCertified">
                        <img v-else src="~/assets/coaches-directory/non-certified-disc-trainer-materials-hero-image.png"
                            alt="coaches directory hero image" class="heroImage">
                    </div>
                </div>
            </div>
        </section>

        <div class="body" v-if="unlocked">
            <img src="https://cdn.assessments24x7.com/file/assessments24x7-media/trainer-materials/disc/2024+disc/Account+Levels+Graphics+(3)+14.png"
                alt="fold 4 graphic" style="position: absolute; right: -150px; bottom: 365px; width: 45%;" class="dots">
            <img src="https://cdn.assessments24x7.com/file/assessments24x7-media/trainer-materials/disc/2024+disc/Account+Levels+Graphics+(3)+18.png"
                alt="fold 4 graphic" style="position: absolute; left: 0px; margin-bottom: 900px;" class="dots">
            <div class="container">
                <br />
                <div class="input-container">
                    <div class="search-bar" style="width: 60%;">
                        <input type="text" placeholder="Search" class="input-search" v-model="searchQuery" />
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
                                <p>Foundations Of DISC & Advanced Development Resources</p>
                            </div>
                        </div>
                        <div v-if="toggleStates['fundamentals']" class="subcard">
                            <br />
                            <p class="subcard-title">Understanding Foundations of DISC</p>
                            <ul class="subcard-links">
                                <li v-for="link in filteredFoundations" :key="link.url">
                                    <a :href="link.url" target="_blank" rel="noopener">
                                        <img :src="`https://cdn.assessments24x7.com/file/assessments24x7-media/trainer-materials/disc/${link.icon}`"
                                            :alt="`${link.type.toLowerCase()} icon`" class="icons">
                                        {{ link.name }}
                                    </a>
                                </li>
                            </ul>
                            <br />
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
                            <br />
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
                            <br />
                            <p class="subcard-title">Advanced Development Resources</p>
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
                            <img src="https://cdn.assessments24x7.com/file/assessments24x7-media/trainer-materials/disc/2024+disc/%2B+Training+%26+Workshops.webp"
                                alt="icon" class="icon" />
                            <div>
                                <h4 data-category="t&w">
                                    {{ toggleStates['t&w'] ? '−' : '+' }} Training & Workshops
                                </h4>
                                <p>Training Presentations, Facilitator Guides, DISC Group Exercises, & Delivery
                                    Resources</p>
                            </div>
                        </div>

                        <div v-if="toggleStates['t&w']" class="subcard">
                            <br />
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
                            <br />
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
                            <br />
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
                            <br />
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
                            <br />
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
                            <br />
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
                            <img src="https://cdn.assessments24x7.com/file/assessments24x7-media/trainer-materials/disc/2024+disc/%2B+Implementation+%26+Application.webp"
                                alt="icon" class="icon" />
                            <div>
                                <h4 data-category="i&a">
                                    {{ toggleStates['i&a'] ? '−' : '+' }} Implementation & Application
                                </h4>
                                <p>DISC Email Series, Target Applications Tips, & Behavioral Style Interview Guide</p>
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
                            <br />
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
                            <br />
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
                            <img src="https://cdn.assessments24x7.com/file/assessments24x7-media/trainer-materials/disc/2024+disc/%2B+360+Resources.webp"
                                alt="icon" class="icon" />
                            <div>
                                <h4 data-category="360">
                                    {{ toggleStates['360'] ? '−' : '+' }} 360 Resources
                                </h4>
                                <p>Supporting Materials To Help You With 360 Assessments</p>
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
                            <img src="https://cdn.assessments24x7.com/file/assessments24x7-media/trainer-materials/disc/2024+disc/%2B+Additional+Support+Materials.webp"
                                alt="icon" class="icon" />
                            <div>
                                <h4 data-category="support">
                                    {{ toggleStates['support'] ? '−' : '+' }} Additional Support Materials
                                </h4>
                                <p>Supplementary Materials To Enhance Your Understanding & Application Of DISC</p>
                            </div>
                        </div>
                        <div v-if="toggleStates['support']" class="subcard">
                            <br />
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
                        <div class="card mediaCards">
                            <img src="https://cdn.assessments24x7.com/file/assessments24x7-media/trainer-materials/disc/2024+disc/%2B+Assessment+Report+Tools.webp"
                                alt="icon" class="icon" />
                            <div>
                                <h4 data-category="report&tools">
                                    {{ toggleStates['report&tools'] ? '−' : '+' }} Assessment Report Tools
                                </h4>
                                <p>Debriefing & Assessment Report Details</p>
                            </div>
                        </div>
                        <div v-if="toggleStates['report&tools']" class="subcard">
                            <br />
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
                            <br />
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
                            <img src="https://cdn.assessments24x7.com/file/assessments24x7-media/trainer-materials/disc/2024+disc/%2B+Coaching+with+DISC.webp"
                                alt="icon" class="icon" />
                            <div>
                                <h4 data-category="coaches">
                                    {{ toggleStates['coaches'] ? '−' : '+' }} Coaching with DISC
                                </h4>
                                <p>DISC Coaching Resources</p>
                            </div>
                        </div>
                        <div v-if="toggleStates['coaches']" class="subcard">
                            <br />
                            <p class="subcard-title" style="font-weight: 400;">Business Coaching Guide - COMING SOON</p>
                            <br />
                        </div>

                        <div class="card">
                            <img src="https://cdn.assessments24x7.com/file/assessments24x7-media/trainer-materials/disc/2024+disc/%2B+Marketing.webp"
                                alt="icon" class="icon" />
                            <div>
                                <h4 data-category="marketing">
                                    {{ toggleStates['marketing'] ? '−' : '+' }} Marketing
                                </h4>
                                <p>DISC Marketing Materials To Help You Support Your Business</p>
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
                            <br />
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
                            <img src="https://cdn.assessments24x7.com/file/assessments24x7-media/trainer-materials/disc/2024+disc/%2B+Product+Specific+Resources.webp"
                                alt="icon" class="icon" />
                            <div>
                                <h4 data-category="product">
                                    {{ toggleStates['product'] ? '−' : '+' }} Product Specific Resources
                                </h4>
                                <p>Infused & Non-infused</p>
                            </div>
                        </div>
                        <div v-if="toggleStates['product']" class="subcard">
                            <br />
                            <p class="subcard-title">Infused</p>
                            <p class="subcard-subTitle">DISC Workplace Insights</p>
                            <ul class="subcard-links">
                                <li v-for="link in filteredDiscWorkplaceInsights" :key="link.url">
                                    <span v-if="!link.url">
                                        <img :src="`https://cdn.assessments24x7.com/file/assessments24x7-media/trainer-materials/disc/${link.icon}`"
                                            :alt="`${link.type.toLowerCase()} icon`" class="icons">
                                        {{ link.name }}
                                    </span>
                                    <a v-else :href="link.url" target="_blank" rel="noopener">
                                        <img :src="`https://cdn.assessments24x7.com/file/assessments24x7-media/trainer-materials/disc/${link.icon}`"
                                            :alt="`${link.type.toLowerCase()} icon`" class="icons">
                                        {{ link.name }}
                                    </a>
                                </li>
                            </ul>
                            <p class="subcard-subTitle">DISC Executive Insights</p>
                            <ul class="subcard-links">
                                <li v-for="link in filteredDiscExecutiveInsights" :key="link.url">
                                    <span v-if="!link.url">
                                        <img :src="`https://cdn.assessments24x7.com/file/assessments24x7-media/trainer-materials/disc/${link.icon}`"
                                            :alt="`${link.type.toLowerCase()} icon`" class="icons">
                                        {{ link.name }}
                                    </span>
                                    <a v-else :href="link.url" target="_blank" rel="noopener">
                                        <img :src="`https://cdn.assessments24x7.com/file/assessments24x7-media/trainer-materials/disc/${link.icon}`"
                                            :alt="`${link.type.toLowerCase()} icon`" class="icons">
                                        {{ link.name }}
                                    </a>
                                </li>
                            </ul>
                            <p class="subcard-subTitle">DISC Leadership</p>
                            <ul class="subcard-links">
                                <li v-for="link in filteredDiscLeadership" :key="link.url">
                                    <span v-if="!link.url">
                                        <img :src="`https://cdn.assessments24x7.com/file/assessments24x7-media/trainer-materials/disc/${link.icon}`"
                                            :alt="`${link.type.toLowerCase()} icon`" class="icons">
                                        {{ link.name }}
                                    </span>
                                    <a v-else :href="link.url" target="_blank" rel="noopener">
                                        <img :src="`https://cdn.assessments24x7.com/file/assessments24x7-media/trainer-materials/disc/${link.icon}`"
                                            :alt="`${link.type.toLowerCase()} icon`" class="icons">
                                        {{ link.name }}
                                    </a>
                                </li>
                            </ul>
                            <p class="subcard-subTitle">DISC Awareness</p>
                            <ul class="subcard-links">
                                <li v-for="link in filteredDiscAwareness" :key="link.url">
                                    <span v-if="!link.url">
                                        <img :src="`https://cdn.assessments24x7.com/file/assessments24x7-media/trainer-materials/disc/${link.icon}`"
                                            :alt="`${link.type.toLowerCase()} icon`" class="icons">
                                        {{ link.name }}
                                    </span>
                                    <a v-else :href="link.url" target="_blank" rel="noopener">
                                        <img :src="`https://cdn.assessments24x7.com/file/assessments24x7-media/trainer-materials/disc/${link.icon}`"
                                            :alt="`${link.type.toLowerCase()} icon`" class="icons">
                                        {{ link.name }}
                                    </a>
                                </li>
                            </ul>
                            <br />
                            <p class="subcard-title" style="margin-bottom: 10px;">Non-Infused</p>
                            <ul class="subcard-links">
                                <li v-for="link in filterednonInfused" :key="link.url">
                                    <span v-if="!link.url">
                                        <img :src="`https://cdn.assessments24x7.com/file/assessments24x7-media/trainer-materials/disc/${link.icon}`"
                                            :alt="`${link.type.toLowerCase()} icon`" class="icons">
                                        {{ link.name }}
                                    </span>
                                    <a v-else :href="link.url" target="_blank" rel="noopener">
                                        <img :src="`https://cdn.assessments24x7.com/file/assessments24x7-media/trainer-materials/disc/${link.icon}`"
                                            :alt="`${link.type.toLowerCase()} icon`" class="icons">
                                        {{ link.name }}
                                    </a>
                                </li>
                            </ul>
                        </div>

                        <div class="card">
                            <img src="https://cdn.assessments24x7.com/file/assessments24x7-media/trainer-materials/disc/2024+disc/%2B+Quick+Links.webp"
                                alt="icon" class="icon" />
                            <div>
                                <h4 data-category="quick&links">
                                    {{ toggleStates['quick&links'] ? '−' : '+' }} Quick Links
                                </h4>
                                <p>Latest Updates, Store, FAQs, Support Info, & More</p>
                            </div>
                        </div>
                        <div v-if="toggleStates['quick&links']" class="subcard">
                            <br />
                            <p class="subcard-title">Latest Updates</p>
                            <ul class="subcard-links">
                                <li v-for="link in filteredLatestUpdates" :key="link.url">
                                    <a :href="link.url" target="_blank" rel="noopener">
                                        <img :src="`https://cdn.assessments24x7.com/file/assessments24x7-media/trainer-materials/disc/${link.icon}`"
                                            :alt="`${link.type.toLowerCase()} icon`" class="icons">
                                        {{ link.name }}
                                    </a>
                                </li>
                                <a class="icons" href="mailto:hello@assessments24x7.com">Request my Certification badge
                                    or certificate</a>
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
            searchQuery: '',
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
                    // { name: 'Over-Under Extensions and DISC Emotions', type: 'PDF', url: 'https://cdn.assessments24x7.com/file/assessments24x7-media/trainer-materials/disc/DISCOverUnderExtensions_Emotions.pdf', icon: 'PDF.png', certified: true },
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
                    // { name: 'Identifying the Styles', type: 'ZIP', url: 'https://cdn.assessments24x7.com/file/assessments24x7-media/trainer-materials/disc/Identifying+the+DISC+Styles.zip', icon: 'Zip.png' },
                    // { name: 'Songs for each Style', type: 'ZIP', url: 'https://cdn.assessments24x7.com/file/assessments24x7-media/trainer-materials/disc/songs_for_each_style.zip', icon: 'Zip.png' },
                    // { name: 'Leaving Voicemails for each Style', type: 'ZIP', url: 'https://cdn.assessments24x7.com/file/assessments24x7-media/trainer-materials/disc/Leaving+Voicemails+for+Each+Style.zip', icon: 'Zip.png' },
                    // { name: 'Complimenting each Style', type: 'ZIP', url: 'https://cdn.assessments24x7.com/file/assessments24x7-media/trainer-materials/disc/Complimenting+each+Style.zip', icon: 'Zip.png', certified: true },
                    // { name: 'Counseling each Style', type: 'ZIP', url: 'https://cdn.assessments24x7.com/file/assessments24x7-media/trainer-materials/disc/Counseling+each+Style.zip', icon: 'Zip.png', certified: true },
                    // { name: 'Delegating to each Style', type: 'ZIP', url: 'https://cdn.assessments24x7.com/file/assessments24x7-media/trainer-materials/disc/Delegating+to+each+Style.zip', icon: 'Zip.png', certified: true },
                    // { name: 'Motivating each Style', type: 'ZIP', url: 'https://cdn.assessments24x7.com/file/assessments24x7-media/trainer-materials/disc/Motivating+each+Style.zip', icon: 'Zip.png', certified: true },
                    // { name: 'Making contact with each Style', type: 'ZIP', url: 'https://cdn.assessments24x7.com/file/assessments24x7-media/trainer-materials/disc/Making+Contact+with+each+Style.zip', icon: 'Zip.png', certified: true },
                    // { name: 'Exploring with each Style', type: 'ZIP', url: 'https://cdn.assessments24x7.com/file/assessments24x7-media/trainer-materials/disc/Exploring+with+each+Style.zip', icon: 'Zip.png', certified: true },
                    // { name: 'Collaborating with each Style', type: 'ZIP', url: 'https://cdn.assessments24x7.com/file/assessments24x7-media/trainer-materials/disc/Collaborating+with+each+Style.zip', icon: 'Zip.png', certified: true },
                    // { name: 'Getting commitment from each Style', type: 'ZIP', url: 'https://cdn.assessments24x7.com/file/assessments24x7-media/trainer-materials/disc/Getting+Commitment+from+each+Style.zip', icon: 'Zip.png', certified: true },
                    // { name: 'Assuring Customer Satisfaction with each Style', type: 'ZIP', url: 'https://cdn.assessments24x7.com/file/assessments24x7-media/trainer-materials/disc/Assuring+Customer+Satisfaction+from+each+Style.zip', icon: 'Zip.png', certified: true },
                    { name: 'KnowDISC videos', type: 'ZIP', url: 'https://cdn.assessments24x7.com/file/assessments24x7-media/trainer-materials/disc/Know+DISC.zip', icon: 'Zip.png' }
                ]
            },
            implementationApplication: {
                implementationApplicationLinksWithoutTitle: [
                    // { name: '52 Week Email Series', type: 'PDF', url: 'https://cdn.assessments24x7.com/file/assessments24x7-media/trainer-materials/disc/52+Week+DISC+email+series+updated+12-2020.pdf', icon: 'PDF.png' },
                    { name: 'DISC Behavioral Style Interview Guide', type: 'PDF', url: 'https://cdn.assessments24x7.com/file/assessments24x7-media/trainer-materials/disc/DISCInterviewGuide.pdf', icon: 'PDF.png' }
                ],
                dISCActionSeries: [
                    { name: 'During Change', type: 'PDF', url: 'https://cdn.assessments24x7.com/file/assessments24x7-media/trainer-materials/disc/DISC+in+Action+-+During+Change.pdf', icon: 'PDF.png' },
                    { name: 'On the Phone', type: 'PDF', url: 'https://cdn.assessments24x7.com/file/assessments24x7-media/trainer-materials/disc/DISC+in+Action+-+On+the+Phone.pdf', icon: 'PDF.png' },
                    { name: 'Leading a Meeting', type: 'PDF', url: 'https://cdn.assessments24x7.com/file/assessments24x7-media/trainer-materials/disc/DISC+in+Action+-+Leading+a+Meeting.pdf', icon: 'PDF.png' },
                    { name: 'Workspaces', type: 'PDF', url: 'https://cdn.assessments24x7.com/file/assessments24x7-media/trainer-materials/disc/DISC+in+Action+-+Workspaces.pdf', icon: 'PDF.png' },
                    { name: 'Bosses', type: 'PDF', url: 'https://cdn.assessments24x7.com/file/assessments24x7-media/trainer-materials/disc/2024+disc/DISC+in+Action+-+Bosses.pdf', icon: 'PDF.png' },
                    { name: '52 Week Email Series', type: 'PDF', url: 'https://cdn.assessments24x7.com/file/assessments24x7-media/trainer-materials/disc/52+Week+DISC+email+series+updated+12-2020.pdf', icon: 'PDF.png' }

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
                    { name: 'People Smart in Business PDF ebook', type: 'PDF', url: 'https://drive.google.com/file/d/1OcrMRFfmitfCYt4tIXWe-d_TIBRLPWSy/view?usp=sharing', icon: 'PDF.png', certified: true },
                    { name: 'The Platinum Rule for DISC Sales Mastery', type: 'PDF', url: 'https://cdn.assessments24x7.com/file/assessments24x7-media/trainer-materials/disc/PlatinumRuleDISCSalesMasteryForewordDaveYoho.pdf', icon: 'PDF.png', certified: true },
                    { name: 'DISC Reliability Analysis', type: 'URL', url: '/about/validity', icon: 'URL.png' },
                    { name: 'DISC History Chart', type: 'PDF', url: 'https://cdn.assessments24x7.com/file/assessments24x7-media/trainer-materials/disc/HistoryChart.pdf', icon: 'PDF.png', certified: true },
                    { name: 'Are You Mad at Me? Article', type: 'PDF', url: 'https://cdn.assessments24x7.com/file/assessments24x7-media/trainer-materials/disc/AreYouMadatMe.pdf', icon: 'PDF.png', certified: true },
                    { name: 'DISC World Map', type: 'JPG', url: 'https://cdn.assessments24x7.com/file/assessments24x7-media/downloads/DISC+World+Map.jpg', icon: 'JPG.png' },
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
                    { name: 'DISC vs MBTI Article', type: 'PDF', url: 'https://cdn.assessments24x7.com/file/assessments24x7-media/trainer-materials/disc/DISCvsMBTI.pdf', icon: 'PDF.png' },
                    { name: 'DISC & Other Assessments Articles', type: 'URL', url: '/blog', icon: 'URL.png' },
                    { name: 'Comparing 4 quadrants and 5 factors Article', type: 'PDF', url: 'https://cdn.assessments24x7.com/file/assessments24x7-media/trainer-materials/disc/comparing.pdf', icon: 'PDF.png' },
                    { name: 'Assessment 24x7 Store', type: 'URL', url: 'https://store.assessments24x7.com/collections/products', icon: 'URL.png' },
                ]
            },
            productSpecificResources: {
                discWorkplaceInsights: [
                    { name: 'DISC Workplace Insights - Report Guide', type: 'PDF', url: 'https://cdn.assessments24x7.com/file/assessments24x7-media/trainer-materials/disc/DISC+Workplace+Insights_Vs1_6.18.2024.pdf', icon: 'PDF.png' },
                    { name: 'DISC Workplace Insights - Report Overview', type: 'URL', url: 'https://drive.google.com/file/d/1dW_3S00jyWZsPOcB_0E8k1AdKeEyGhMR/view?usp=drive_link', icon: 'URL.png' },
                    { name: 'DISC Workplace Insights - Introduction', type: 'PDF', url: 'https://cdn.assessments24x7.com/file/assessments24x7-media/trainer-materials/disc/DISC+Workplace+Insights+-+Marketing+One-Sheet.pdf', icon: 'PDF.png' }
                ],
                discExecutiveInsights: [
                    { name: 'DISC Executive Insights - Introduction', type: 'PDF', url: 'https://cdn.assessments24x7.com/file/assessments24x7-media/trainer-materials/disc/DISC+Executive+Insights+-+Marketing+One-Sheet_v2.pdf', icon: 'PDF.png' },
                    { name: 'DISC Executive Insights Report Guide', type: 'PDF', url: 'https://cdn.assessments24x7.com/file/assessments24x7-media/trainer-materials/disc/DISC+Executive+Insights+Report+Guide_8.12.24+Final.pdf', icon: 'PDF.png' },
                    { name: 'DISC Executive Insights - Report Overview', type: 'URL', url: 'https://youtu.be/ez5ClwGO7Po', icon: 'URL.png' }
                ],
                discLeadership: [
                    { name: 'DISC Leadership - Debrief Guide (Coming soon!)', type: 'PDF', url: '', icon: 'PDF.png' },
                    { name: 'DISC Leadership - Introduction', type: 'PDF', url: 'https://cdn.assessments24x7.com/file/assessments24x7-media/trainer-materials/disc/DISC+Leadership+-+Marketing+One-Sheet.pdf', icon: 'PDF.png' }
                ],
                discAwareness: [
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
        filterLinks(links) {
            if (!this.searchQuery) {
                // If the search query is empty, return all links
                return links;
            }
            // Return filtered links where the name includes the search query (case-insensitive)
            return links.filter(link => link.name.toLowerCase().includes(this.searchQuery.toLowerCase()));
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
            if (event.target.tagName === 'H4' || event.target.classList.contains('icon')) {
                const category = event.target.closest('.card').querySelector('h4').dataset.category;
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
            return this.filterLinks(this.filterByType(this.fundamentalsSections.foundations));
        },
        filteredDescriptionStyles() {
            return this.filterLinks(this.filterByType(this.fundamentalsSections.descriptionStyles));
        },
        filteredAdaptabilityStyles() {
            return this.filterLinks(this.filterByType(this.fundamentalsSections.adaptabilityStyles));
        },
        filteredUnderstandingFoundations() {
            return this.filterLinks(this.filterByType(this.fundamentalsSections.understandingFoundations));
        },
        filteredTrainingPresentationsFacilitatorGuides() {
            return this.filterLinks(this.filterByType(this.trainingWorkshopSections.trainingPresentationsFacilitatorGuides));
        },
        filteredDISCSpecificGroupExercises() {
            return this.filterLinks(this.filterByType(this.trainingWorkshopSections.dISCSpecificGroupExercises));
        },
        filteredGeneralGroupExercises() {
            return this.filterLinks(this.filterByType(this.trainingWorkshopSections.generalGroupExercises));
        },
        filteredDISCActivityResources() {
            return this.filterLinks(this.filterByType(this.trainingWorkshopSections.dISCActivityResources));
        },
        filteredEnhancingDeliveryResourcesTrainingPresentations() {
            return this.filterLinks(this.filterByType(this.trainingWorkshopSections.enhancingDeliveryResourcesTrainingPresentations));
        },
        filteredEnhancingDeliveryResourcesAudioVideoFiles() {
            return this.filterLinks(this.filterByType(this.trainingWorkshopSections.enhancingDeliveryResourcesAudioVideoFiles));
        },
        filteredImplementationApplicationLinksWithoutTitle() {
            return this.filterLinks(this.filterByType(this.implementationApplication.implementationApplicationLinksWithoutTitle));
        },
        filteredDISCActionSeries() {
            return this.filterLinks(this.filterByType(this.implementationApplication.dISCActionSeries));
        },
        filteredDISCTargetApplicationsTips() {
            return this.filterLinks(this.filterByType(this.implementationApplication.dISCTargetApplicationsTips));
        },
        filteredThreeSixtyResourcesWithoutTitle() {
            return this.filterLinks(this.filterByType(this.threeSixtyResources.threeSixtyResourcesWithoutTitle));
        },
        filteredOtherMaterials() {
            return this.filterLinks(this.filterByType(this.additionalSupportMaterials.otherMaterials));
        },
        filteredDebriefingAssessmentReportDetails() {
            return this.filterLinks(this.filterByType(this.assessmentReportTools.debriefingAssessmentReportDetails));
        },
        filteredVideoResources() {
            return this.filterLinks(this.filterByType(this.assessmentReportTools.videoResources));
        },
        filteredMarketingWithoutTitle() {
            return this.filterLinks(this.filterByType(this.marketing.marketingWithoutTitle));
        },
        filteredInformationSheets() {
            return this.filterLinks(this.filterByType(this.marketing.informationSheets));
        },
        filteredDiscWorkplaceInsights() {
            return this.filterLinks(this.filterByType(this.productSpecificResources.discWorkplaceInsights));
        },
        filteredDiscExecutiveInsights() {
            return this.filterLinks(this.filterByType(this.productSpecificResources.discExecutiveInsights));
        },
        filteredDiscLeadership() {
            return this.filterLinks(this.filterByType(this.productSpecificResources.discLeadership));
        },
        filteredDiscAwareness() {
            return this.filterLinks(this.filterByType(this.productSpecificResources.discAwareness));
        },
        filterednonInfused() {
            return this.filterLinks(this.filterByType(this.productSpecificResources.nonInfused));
        },
        filteredLatestUpdates() {
            return this.filterLinks(this.filterByType(this.quickLinks.latestUpdates));
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
@import '~assets/scss/vars';
@import '~assets/scss/new-styles';

.skeleton {
    .hero {
        background: linear-gradient(180deg, #0033C5 -2.43%, #077FF8 97.57%);
        padding: 20px 0 30px 0;
    }

    .container {
        max-width: 1200px;
        margin: 0 auto;
        padding: 0 15px;
    }

    .heroImage {
        width: 80%;
        margin-top: 0px;
    }

    .heroImageCertified {
        width: 80%;
        margin-top: -20px;
    }

    .input-container {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 40px 0;
        padding: 0 35px;
    }

    .toggle-all-button {
        cursor: pointer;
        height: 37px;
        width: 80px;
        border-radius: 6px;
        background-color: white;
        color: #213C85;
        border: 1px solid #D9D9D9;
        transition: background-color 0.3s ease, transform 0.2s ease;
        margin-top: 0px;
        box-shadow: 4px 4px 4px 0px rgba(0, 0, 0, 0.25);
        font-family: $nunito-family;
    }

    .toggle-all-button:hover {
        background-color: rgb(250, 250, 250);
        //transform: scale(1.03);
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
        width: 90px;
        margin-right: 0px;
        margin-left: -25px;
        vertical-align: middle;
        cursor: pointer;
    }

    .icons {
        width: 24px;
        margin-bottom: 5px;
        margin-right: 5px;
    }

    .card {
        background-color: white;
        color: #213C85;
        padding: 0px 30px;
        border-radius: 50px 7px 7px 50px;
        margin-bottom: 15px;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        text-align: left;
        width: 100%;
        position: relative;
        z-index: 1;
        height: 93px;
        filter: drop-shadow(4px 4px 4px rgba(0, 51, 197, 0.44));

        h4 {
            margin-top: -10px !important;
        }

        p {
            margin-top: -5px !important;
        }
    }


    .subcard {
        background-color: white;
        color: #213C85;
        padding: 15px 30px;
        margin-top: -15px;
        margin-bottom: 30px;
        margin-left: 40px;
        border-radius: 0 0 7px 7px;
        width: calc(100% - 40px);
        position: relative;
        z-index: 0;
        filter: drop-shadow(4px 4px 4px rgba(0, 51, 197, 0.44));
    }

    .subcard-title {
        font-weight: 700;
        font-size: 1em;
        margin-bottom: -10px;
        margin-top: -10px;
        text-align: left;
        margin-left: 15px;
        font-family: $nunito-family;
    }

    .subcard-subTitle {
        font-weight: 700;
        font-size: 1em;
        margin-bottom: -10px;
        margin-top: 20px;
        text-align: left;
        margin-left: 35px;
        font-family: $nunito-family;
    }

    .subcard-links {
        list-style-type: none;
        padding-left: 0;
        font-size: 1em;
        text-align: left;
        margin-left: 45px;
        font-family: $nunito-family;
    }

    .subcard-links li {
        margin-bottom: 5px;
    }

    .subcard-links a {
        color: #213C85;
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

        .input-container {
            display: flex;
            flex-direction: column;
            width: calc(100% - 20px);
            margin: 0 auto;
            padding: 0 10px;
            box-sizing: border-box;
        }

        .input-container>* {
            width: 100%;
            margin-bottom: 10px;
        }

        .search-bar {
            width: 100% !important;
            position: relative;
        }

        .toggle-all-button,
        .filter-dropdown {
            width: 100%;
        }

        .filter-select {
            width: 100%;
            box-sizing: border-box;
        }

        .search-icon {
            position: absolute;
            right: 10px;
            top: 50%;
            transform: translateY(-50%);
        }

        .dots {
            display: none;
        }

        .card {
            padding: 0px 5px 0px 20px;
        }

        .disc {
            margin-bottom: 10px !important;
        }

        .heroText {
            margin-top: 20px !important;
            font-size: 1em !important;
            line-height: 1.25em;
        }

        h2 {
            line-height: 32px;
        }

        h4 {
            font-size: 14px !important;
            line-height: 16px;
            margin-bottom: 10px !important;
        }

        p {
            font-size: 14px !important;
            line-height: 16px;
        }

        .mediaCards {
            margin-top: -35px;
        }

        .subcard {
            margin-left: 20px;
        }

        .subcard-title {
            margin-left: 0px;
            font-size: 1em !important;
        }

        .subcard-links {
            margin-left: 0px;
        }
    }

}
</style>