<template>
    <section class="sample-reports">
        <LazyHydrate when-visible><main-nav></main-nav></LazyHydrate>

        <section class="header">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <h1 class="section-title">Sample Reports</h1>
                        <p>
                            Assessments work by measuring a variety of criteria: <b>intellectual ability, achievement motivation, skill proficiency, 
                            work styles, personality characteristics,</b> and <b>personal values</b>.
                        </p>
                    </div>
                </div>
            </div>
        </section>

        <div class="container">
            <div class="row">
                <div class="col-3">
                    <div class="language-selection form-group">
                        <label for="lang">Filter by Language:</label>
                        <select class="input" id="lang" v-model="lang">
                            <option value="ar">Arabic - 2</option>
                            <option value="zh">Chinese (Mandarin) - 12</option>
                            <option value="zh-t">Chinese (Traditional) - 12</option>
                            <option value="nl">Dutch - 5</option>
                            <option value="en-gb">English (UK) - 2</option>
                            <option value="en-us" selected>English (US) - 34</option>
                            <option value="fr">French - 9</option>
                            <option value="de">German - 3</option>
                            <option value="id">Indonesian - 1</option>
                            <option value="it">Italian - 2</option>
                            <option value="ja">Japanese - 4</option>
                            <option value="km">Khmer (Cambodian) - 1</option>
                            <option value="ko">Korean - 1</option>
                            <option value="ms">Malaysian - 1</option>
                            <option value="no">Norwegian - 1</option>
                            <option value="pl">Polish - 1</option>
                            <option value="pt">Portuguese - 6</option>
                            <option value="pt-br">Portuguese (Brazil) - 3</option>
                            <option value="ru">Russian - 6</option>
                            <option value="es">Spanish - 7</option>
                            <option value="sv">Swedish - 6</option>
                            <option value="tr">Turkish - 7</option>
                            <option value="vi">Vietnamese - 9</option>
                        </select>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-12">
                    <div class="section-hero disc">
                        <img class="globe-tex" src="~assets/globe-bg.png">

                        <h2>DISC Sample Reports</h2>

                        <p>
                            Our most popular assessment and the world’s #1 behavioral tool, DISC provides a highly-detailed analysis of each individual’s 
                            Natural and Adapted behavioral styles. DISC reveals how a person will most likely behave within a given environment, situation, or 
                            relationship. It offers prescriptive lessons designed to highlight and maximize self-awareness, intentionality, and interpersonal 
                            communication, personally and professionally.
                        </p>
                    </div>
                </div>
            </div>

            <div class="row">
                <div class="col-3">
                    <div class="samples-container">
                        <h3>DISC Self</h3>
                        <a v-if="lang === 'en-us'" href="https://cdn.assessments24x7.com/file/assessments24x7-media/reports/DISCSelfSampleReport.pdf" class="hyperlink" target="_blank" rel="noopener">DISC Self Report</a>
                        <a v-else-if="lang === 'ar'" class="hyperlink" href="https://cdn.assessments24x7.com/file/assessments24x7-media/reports/DISCArabic.pdf" target="_blank" rel="noopener">DISC Self Report</a>
                        <a v-else-if="lang === 'zh'" class="hyperlink" href="https://cdn.assessments24x7.com/file/assessments24x7-media/reports/DISCSelfChinese.pdf" target="_blank" rel="noopener">DISC Self Report</a>
                        <a v-else-if="lang === 'nl'" class="hyperlink" href="https://cdn.assessments24x7.com/file/assessments24x7-media/reports/DISCSelfDutch.pdf" target="_blank" rel="noopener">DISC Self Report</a>
                        <a v-else-if="lang === 'fr'" class="hyperlink" href="https://cdn.assessments24x7.com/file/assessments24x7-media/reports/DISCSelfFrench.pdf" target="_blank" rel="noopener">DISC Self Report</a>
                        <a v-else-if="lang === 'de'" class="hyperlink" href="https://cdn.assessments24x7.com/file/assessments24x7-media/reports/DISCSelfGerman.pdf" target="_blank" rel="noopener">DISC Self Report</a>
                        <a v-else-if="lang === 'id'" class="hyperlink" href="https://cdn.assessments24x7.com/file/assessments24x7-media/reports/DISCSelfIndonesian.pdf" target="_blank" rel="noopener">DISC Self Report</a>
                        <a v-else-if="lang === 'it'" class="hyperlink" href="https://cdn.assessments24x7.com/file/assessments24x7-media/reports/SampleDISCSelfItalian.pdf" target="_blank" rel="noopener">DISC Self Report</a>
                        <a v-else-if="lang === 'ja'" class="hyperlink" href="https://cdn.assessments24x7.com/file/assessments24x7-media/reports/DISCJapanese.pdf" target="_blank" rel="noopener">DISC Self Report</a>
                        <a v-else-if="lang === 'km'" class="hyperlink" href="https://cdn.assessments24x7.com/file/assessments24x7-media/reports/DISCKhmer.pdf" target="_blank" rel="noopener">DISC Self Report</a>
                        <a v-else-if="lang === 'ko'" class="hyperlink" href="https://cdn.assessments24x7.com/file/assessments24x7-media/reports/DISCSelfKorean.pdf" target="_blank" rel="noopener">DISC Self Report</a>
                        <a v-else-if="lang === 'ms'" class="hyperlink" href="https://cdn.assessments24x7.com/file/assessments24x7-media/reports/DISCSelfMalaysian.pdf" target="_blank" rel="noopener">DISC Self Report</a>
                        <a v-else-if="lang === 'no'" class="hyperlink" href="https://cdn.assessments24x7.com/file/assessments24x7-media/reports/DISCSelfNorwegian.pdf" target="_blank" rel="noopener">DISC Self Report</a>
                        <a v-else-if="lang === 'pt'" class="hyperlink" href="https://cdn.assessments24x7.com/file/assessments24x7-media/reports/DISCSelfPort.pdf" target="_blank" rel="noopener">DISC Self Report</a>
                        <a v-else-if="lang === 'pt-br'" class="hyperlink" href="https://cdn.assessments24x7.com/file/assessments24x7-media/reports/DISCSelfPortBrazil.pdf" target="_blank" rel="noopener">DISC Self Report</a>
                        <a v-else-if="lang === 'pl'" class="hyperlink" href="https://cdn.assessments24x7.com/file/assessments24x7-media/reports/DISCSelfPolish.pdf" target="_blank" rel="noopener">DISC Self Report</a>
                        <a v-else-if="lang === 'ru'" class="hyperlink" href="https://cdn.assessments24x7.com/file/assessments24x7-media/reports/SampleDISCRussian.pdf" target="_blank" rel="noopener">DISC Self Report</a>
                        <a v-else-if="lang === 'es'" class="hyperlink" href="https://cdn.assessments24x7.com/file/assessments24x7-media/reports/DISC_Espanol.pdf" target="_blank" rel="noopener">DISC Self Report</a>
                        <a v-else-if="lang === 'sv'" class="hyperlink" href="https://cdn.assessments24x7.com/file/assessments24x7-media/reports/DISCSwedish.pdf" target="_blank" rel="noopener">DISC Self Report</a>
                        <a v-else-if="lang === 'tr'" class="hyperlink" href="https://cdn.assessments24x7.com/file/assessments24x7-media/reports/DISCSelfTurkish.pdf" target="_blank" rel="noopener">DISC Self Report</a>
                        <a v-else-if="lang === 'en-gb'" class="hyperlink" href="https://cdn.assessments24x7.com/file/assessments24x7-media/reports/DISCSelfUK.pdf" target="_blank" rel="noopener">DISC Self Report</a>
                        <a v-else-if="lang === 'vi'" class="hyperlink" href="https://cdn.assessments24x7.com/file/assessments24x7-media/reports/DISCVietnamese.pdf" target="_blank" rel="noopener">DISC Self Report</a>
                        <a v-else class="hyperlink disabled">DISC Self Report</a>
                        <a class="language-button disc" @click="discSelfModal = true">22 languages</a>
                        <br/>

                        <a v-if="lang === 'en-us' || lang === 'zh' || lang === 'nl' || lang === 'fr' || lang === 'pt' || lang === 'sv' || lang === 'vi' || lang === 'tr' || lang === 'es'" @click="discTeamReportModal = true" class="hyperlink" target="_blank" rel="noopener">DISC Team Reports &rsaquo;</a>
                        <a v-else class="hyperlink disabled">DISC Team Reports</a><br/>

                        <a v-if="lang === 'en-us'" href="https://cdn.assessments24x7.com/file/assessments24x7-media/reports/DISCSummarySampleReport.pdf" class="hyperlink" target="_blank" rel="noopener">DISC Summary</a>
                        <a v-else-if="lang === 'nl'" href="https://cdn.assessments24x7.com/file/assessments24x7-media/reports/DISCSummaryDutchSampleReport.pdf" class="hyperlink" target="_blank" rel="noopener">DISC Summary</a>
                        <a v-else-if="lang === 'fr'" href="https://cdn.assessments24x7.com/file/assessments24x7-media/reports/DISCSummaryFrenchSampleReport.pdf" class="hyperlink" target="_blank" rel="noopener">DISC Summary</a>
                        <a v-else-if="lang === 'pt'" href="https://cdn.assessments24x7.com/file/assessments24x7-media/reports/DISCSummaryPortuguesePortugalSampleReport.pdf" class="hyperlink" target="_blank" rel="noopener">DISC Summary</a>
                        <a v-else-if="lang === 'es'" href="https://cdn.assessments24x7.com/file/assessments24x7-media/reports/DISCSummarySpanishSampleReport.pdf" class="hyperlink" target="_blank" rel="noopener">DISC Summary</a>
                        <a v-else-if="lang === 'sv'" href="https://cdn.assessments24x7.com/file/assessments24x7-media/reports/DISCSummarySwedishSampleReport.pdf" class="hyperlink" target="_blank" rel="noopener">DISC Summary</a>
                        <a v-else-if="lang === 'en-gb'" href="https://cdn.assessments24x7.com/file/assessments24x7-media/reports/DISCSummaryUKSampleReport.pdf" class="hyperlink" target="_blank" rel="noopener">DISC Summary</a>
                        <a v-else class="hyperlink disabled">DISC Summary</a>
                        <a class="language-button disc" @click="discSummaryReportModal = true">7 languages</a><br/>
                    </div>
                </div>

                <div class="col-3">
                    <div class="samples-container">
                        <div class="coming-soon">New!</div>

                        <h3>Kids DISC</h3>
                        <a v-if="lang === 'en-us'" href="https://cdn.assessments24x7.com/file/assessments24x7-media/reports/KidsDISC-Birds.pdf" class="hyperlink" target="_blank" rel="noopener">Kids DISC - Full Report</a>
                        <a v-else-if="lang === 'zh'" href="https://cdn.assessments24x7.com/file/assessments24x7-media/reports/KidsDISCChinese.pdf" class="hyperlink" target="_blank" rel="noopener">Kids DISC - Full Report (Simplified)</a>
                        <a v-else-if="lang === 'zh-t'" href="https://cdn.assessments24x7.com/file/assessments24x7-media/reports/Report_Sample_Kids_DISC_-_Chinese_(Traditional).pdf" class="hyperlink" target="_blank" rel="noopener">Kids DISC - Full Report (Traditional)</a>
                        <a v-else-if="lang === 'vi'" href="https://cdn.assessments24x7.com/file/assessments24x7-media/reports/Report_Sample_Kids_DISC_-_Vietnamese.pdf" class="hyperlink" target="_blank" rel="noopener">Kids DISC - Full Report</a>
                        <a v-else class="hyperlink disabled" target="_blank" rel="noopener">Kids DISC - Full Report</a><br/>
                        <a class="language-button disc" @click="kidsDISCReportModal = true">4 languages</a><br/>
                        
                        <a v-if="lang === 'en-us'" href="https://cdn.assessments24x7.com/file/assessments24x7-media/reports/KidsDISC-ChildOnly.pdf" class="hyperlink" target="_blank" rel="noopener">Kids DISC - Child Only</a>
                        <a v-else class="hyperlink disabled" target="_blank" rel="noopener">Kids DISC - Child Only</a><br/>

                        <a v-if="lang === 'en-us'" class="hyperlink" target="_blank" rel="noopener">Kids DISC - Questionnaire Only</a>
                        <a v-else class="hyperlink disabled" target="_blank" rel="noopener">Kids DISC - Questionnaire Only</a><br/>
                        <a class="language-button disc" @click="kidsDiscQuestionaireOnlyModal = true">9 languages</a><br/>

                        <a v-if="lang === 'en-us'" href="https://cdn.assessments24x7.com/file/assessments24x7-media/reports/DISCAdultBirds.pdf" class="hyperlink" target="_blank" rel="noopener">DISC Adult Birds</a>
                        <a v-else class="hyperlink disabled" target="_blank" rel="noopener">DISC Adult Birds</a><br/>
                    </div>
                </div>

                <div class="col-3">
                    <div class="samples-container">
                        <h3>DISC 360&deg;</h3>
                        <a v-if="lang === 'en-us'" href="https://cdn.assessments24x7.com/file/assessments24x7-media/reports/DISC360SampleReport.pdf" class="hyperlink" target="_blank" rel="noopener">DISC 360&deg; Report</a>
                        <a v-else-if="lang === 'ru'" href="https://cdn.assessments24x7.com/file/assessments24x7-media/reports/DISC360RussianSampleReport.pdf" class="hyperlink" target="_blank" rel="noopener">DISC 360&deg; Report</a>
                        <a v-else-if="lang === 'sv'" href="https://cdn.assessments24x7.com/file/assessments24x7-media/reports/DISC360SwedishSampleReport.pdf" class="hyperlink" target="_blank" rel="noopener">DISC 360&deg; Report</a>
                        <a v-else-if="lang === 'vi'" href="https://cdn.assessments24x7.com/file/assessments24x7-media/reports/DISC360VietnameseSampleReport.pdf" class="hyperlink" target="_blank" rel="noopener">DISC 360&deg; Report</a>
                        <a v-else-if="lang === 'zh'" href="https://cdn.assessments24x7.com/file/assessments24x7-media/reports/Report_Simplified_DISC_360_-_Chinese.pdf" class="hyperlink" target="_blank" rel="noopener">DISC 360&deg; Report</a>
                        <a v-else class="hyperlink disabled">DISC 360&deg; Report</a>
                        <a class="language-button disc" @click="disc360ReportModal = true">5 languages</a><br/>
                    </div>
                </div>

                <div class="col-3">
                    <div class="samples-container">
                        <h3>DISC Relationships</h3>
                        <a v-if="lang === 'en-us'" href="https://cdn.assessments24x7.com/file/assessments24x7-media/reports/DISCRelationships.pdf" class="hyperlink" target="_blank" rel="noopener">DISC Relationship Self</a>
                        <a v-else class="hyperlink disabled">DISC Relationship Self</a><br/>

                        <a v-if="lang === 'en-us'" href="https://cdn.assessments24x7.com/file/assessments24x7-media/reports/DISCRelationshipCouplesSampleReport.pdf" class="hyperlink" target="_blank" rel="noopener">DISC Relationship Couples</a>
                        <a v-else class="hyperlink disabled">DISC Relationship Couples</a><br/>
                    </div>
                </div>
            </div>

            <br/><br/><br/>

            <div class="row">
                <div class="col-12">
                    <div class="section-hero mot">
                        <img class="globe-tex" src="~assets/globe-bg.png">

                        <h2>Motivators Sample Reports</h2>

                        <p>
                            The perfect companion to DISC, Motivators measures seven Dimensions of Motivation that drive our behavior and decisions: Aesthetic, 
                            Economic, Individualistic, Power, Altruistic, Regulatory, and Theoretical. Just as DISC reveals how a person will likely behave, 
                            Motivators explores why we are driven to do what we do and what we value at our core.
                        </p>
                    </div>
                </div>
            </div>

            <div class="row">
                <div class="col-3">
                    <div class="samples-container">
                        <h3>Motivators Self</h3>
                        <a v-if="lang === 'en-us'" href="https://cdn.assessments24x7.com/file/assessments24x7-media/reports/valuessamplereport.pdf" class="hyperlink" target="_blank" rel="noopener">Motivators Self Report</a>
                        <a v-else-if="lang === 'ar'" class="hyperlink" href="https://cdn.assessments24x7.com/file/assessments24x7-media/reports/Motivators_Assessment_Arabic.pdf" target="_blank" rel="noopener">Motivators Self Report</a>
                        <a v-else-if="lang === 'zh'" class="hyperlink" href="https://cdn.assessments24x7.com/file/assessments24x7-media/reports/Motivators_Assessment_Chinese.pdf" target="_blank" rel="noopener">Motivators Self Report</a>
                        <a v-else-if="lang === 'nl'" class="hyperlink" href="https://cdn.assessments24x7.com/file/assessments24x7-media/reports/Motivators_Assessment_Dutch.pdf" target="_blank" rel="noopener">Motivators Self Report</a>
                        <a v-else-if="lang === 'fr'" class="hyperlink" href="https://cdn.assessments24x7.com/file/assessments24x7-media/reports/Motivators_Assessment_French.pdf" target="_blank" rel="noopener">Motivators Self Report</a>
                        <a v-else-if="lang === 'it'" class="hyperlink" href="https://cdn.assessments24x7.com/file/assessments24x7-media/reports/SampleMotivatorsItalian.pdf" target="_blank" rel="noopener">Motivators Self Report</a>
                        <a v-else-if="lang === 'ja'" class="hyperlink" href="https://cdn.assessments24x7.com/file/assessments24x7-media/reports/Motivators_Assessment_Japanese.pdf" target="_blank" rel="noopener">Motivators Self Report</a>
                        <a v-else-if="lang === 'de'" class="hyperlink" href="https://cdn.assessments24x7.com/file/assessments24x7-media/reports/Motivators_Assessment_German.pdf" target="_blank" rel="noopener">Motivators Self Report</a>
                        <a v-else-if="lang === 'pt'" class="hyperlink" href="https://cdn.assessments24x7.com/file/assessments24x7-media/reports/MotivatorsPortuguese.pdf" target="_blank" rel="noopener">Motivators Self Report</a>
                        <a v-else-if="lang === 'ru'" class="hyperlink" href="https://cdn.assessments24x7.com/file/assessments24x7-media/reports/SampleMotivatorsRussian.pdf" target="_blank" rel="noopener">Motivators Self Report</a>
                        <a v-else-if="lang === 'sv'" class="hyperlink" href="https://cdn.assessments24x7.com/file/assessments24x7-media/reports/Motivators_Assessment_Swedish.pdf" target="_blank" rel="noopener">Motivators Self Report</a>
                        <a v-else-if="lang === 'es'" class="hyperlink" href="https://cdn.assessments24x7.com/file/assessments24x7-media/reports/Motivators_Assessment_Espanol.pdf" target="_blank" rel="noopener">Motivators Self Report</a>
                        <a v-else-if="lang === 'tr'" class="hyperlink" href="https://cdn.assessments24x7.com/file/assessments24x7-media/reports/MotivatorsSampleTurkish.pdf" target="_blank" rel="noopener">Motivators Self Report</a>
                        <a v-else-if="lang === 'us-gb'" class="hyperlink" href="https://cdn.assessments24x7.com/file/assessments24x7-media/reports/MotivatorsSampleUK.pdf" target="_blank" rel="noopener">Motivators Self Report</a>
                        <a v-else-if="lang === 'vi'" class="hyperlink" href="https://cdn.assessments24x7.com/file/assessments24x7-media/reports/Motivators_Assessment_Vietnamese.pdf" target="_blank" rel="noopener">Motivators Self Report</a>
                        <a v-else class="hyperlink disabled">Motivators Self Report</a>
                        <a class="language-button mot" @click="motSelfReportModal = true">15 languages</a><br/>

                        <a v-if="lang === 'en-us' || lang === 'zh'" @click="motTeamReportsModal = true" class="hyperlink" target="_blank" rel="noopener">Motivators Team Reports &rsaquo;</a>
                        <a v-else class="hyperlink disabled">Motivators Team Reports</a><br/>
                        
                        <a v-if="lang === 'en-us'" href="https://cdn.assessments24x7.com/file/assessments24x7-media/reports/MotivatorsSummarySampleReport.pdf" class="hyperlink" target="_blank" rel="noopener">Motivators Summary</a>
                        <a v-else class="hyperlink disabled">Motivators Summary</a><br/>
                    </div>
                </div>

                <div class="col-3">
                    <div class="samples-container">
                        <h3>DISC + Motivators</h3>
                        <a v-if="lang === 'en-us'" href="https://cdn.assessments24x7.com/file/assessments24x7-media/reports/SampleDISCandMOT.pdf" class="hyperlink" target="_blank" rel="noopener">DISC + Motivators Report</a>
                        <a v-else-if="lang === 'fr'" class="hyperlink" href="https://cdn.assessments24x7.com/file/assessments24x7-media/reports/SampleDISCandMOTFrench.pdf" target="_blank" rel="noopener">DISC + Motivators Report</a>
                        <a v-else-if="lang === 'de'" class="hyperlink" href="https://cdn.assessments24x7.com/file/assessments24x7-media/reports/SampleDISCandMOTGerman.pdf" target="_blank" rel="noopener">DISC + Motivators Report</a>
                        <a v-else-if="lang === 'pt'" class="hyperlink" href="https://cdn.assessments24x7.com/file/assessments24x7-media/reports/SampleDISCandMOTPort.pdf" target="_blank" rel="noopener">DISC + Motivators Report</a>
                        <a v-else-if="lang === 'ru'" class="hyperlink" href="https://cdn.assessments24x7.com/file/assessments24x7-media/reports/DISCandMOTRussianSample.pdf" target="_blank" rel="noopener">DISC + Motivators Report</a>
                        <a v-else-if="lang === 'es'" class="hyperlink" href="https://cdn.assessments24x7.com/file/assessments24x7-media/reports/SampleDISCandMOTSP.pdf" target="_blank" rel="noopener">DISC + Motivators Report</a>
                        <a v-else-if="lang === 'zh'" class="hyperlink" href="https://cdn.assessments24x7.com/file/assessments24x7-media/reports/DISCandMotivatorsChineseSampleReport.pdf" target="_blank" rel="noopener">DISC + Motivators Report</a>
                        <a v-else-if="lang === 'nl'" class="hyperlink" href="https://cdn.assessments24x7.com/file/assessments24x7-media/reports/DISC_and_Motivators_-_DutchSampleReport.pdf" target="_blank" rel="noopener">DISC + Motivators Report</a>
                        <a v-else class="hyperlink disabled">DISC + Motivators Report</a>
                        <a class="language-button mot" @click="motDISCReportModal = true">8 languages</a><br/>

                        <a v-if="lang === 'en-us'" href="https://cdn.assessments24x7.com/file/assessments24x7-media/reports/SampleDISCandMOTLite.pdf" class="hyperlink" target="_blank" rel="noopener">DISC + Motivators Lite</a>
                        <a v-else class="hyperlink disabled">DISC + Motivators Lite</a><br/>
                    </div>
                </div>
            </div>

            <br/><br/><br/>

            <div class="row">
                <div class="col-12">
                    <div class="section-hero other">
                        <img class="globe-tex" src="~assets/globe-bg.png">

                        <h2>Specialty Assessments</h2>

                        <p>
                            Our library of specialized assessments was designed to address a wide range of issues experienced by both coaches and 
                            corporate trainers. We offer assessments to encourage positive outcomes in personal and professional life, including employee 
                            selection, leadership development, team-building, conflict resolution, succession planning, and more.
                        </p>
                    </div>
                </div>
            </div>

            <div class="row">
                <div class="col-3">
                    <div class="samples-container">
                        <h3>HireSense</h3>
                        <a v-if="lang === 'en-us'" href="https://cdn.assessments24x7.com/file/assessments24x7-media/reports/HireSenseSummarySample.pdf" class="hyperlink" target="_blank" rel="noopener">HireSense Summary</a>
                        <a v-else class="hyperlink disabled">HireSense Summary</a><br/>

                        <a v-if="lang === 'en-us'" href="https://cdn.assessments24x7.com/file/assessments24x7-media/reports/HireSenseSample.pdf" class="hyperlink" target="_blank" rel="noopener">HireSense Full Report</a>
                        <a v-else class="hyperlink disabled">HireSense Full Report</a><br/>
                    </div>
                </div>

                <div class="col-3">
                    <div class="samples-container">
                        <h3>Emotional Intelligence</h3>
                        <a v-if="lang === 'en-us'" href="https://cdn.assessments24x7.com/file/assessments24x7-media/reports/EIQSampleReport.pdf" class="hyperlink" target="_blank" rel="noopener">Emotional Intelligence Report</a>
                        <a v-else-if="lang === 'fr'" class="hyperlink" href="https://cdn.assessments24x7.com/file/assessments24x7-media/reports/EIQFrenchSampleReport.pdf" target="_blank" rel="noopener">Emotional Intelligence Report</a>
                        <a v-else-if="lang === 'ja'" class="hyperlink" href="https://cdn.assessments24x7.com/file/assessments24x7-media/reports/EIQJapeneseSampleReport.pdf" target="_blank" rel="noopener">Emotional Intelligence Report</a>
                        <a v-else-if="lang === 'pt-br'" class="hyperlink" href="https://cdn.assessments24x7.com/file/assessments24x7-media/reports/EIQPortSampleReport.pdf" target="_blank" rel="noopener">Emotional Intelligence Report</a>
                        <a v-else-if="lang === 'ru'" class="hyperlink" href="https://cdn.assessments24x7.com/file/assessments24x7-media/reports/EIQSampleReportRussian.pdf" target="_blank" rel="noopener">Emotional Intelligence Report</a>
                        <a v-else-if="lang === 'es'" class="hyperlink" href="https://cdn.assessments24x7.com/file/assessments24x7-media/reports/EIQSampleReportSpanish.pdf" target="_blank" rel="noopener">Emotional Intelligence Report</a>
                        <a v-else-if="lang === 'vi'" class="hyperlink" href="https://cdn.assessments24x7.com/file/assessments24x7-media/reports/EIQSampleReportVietnamese.pdf" target="_blank" rel="noopener">Emotional Intelligence Report</a>
                        <a v-else-if="lang === 'zh'" class="hyperlink" href="https://cdn.assessments24x7.com/file/assessments24x7-media/reports/EIQChineseSampleReport.pdf" target="_blank" rel="noopener">Emotional Intelligence Report</a>
                        <a v-else class="hyperlink disabled">Emotional Intelligence Report</a>
                        <a class="language-button other" @click="eiqReportModal = true">8 languages</a><br/>
                        
                        <a v-if="lang === 'en-us'" href="https://cdn.assessments24x7.com/file/assessments24x7-media/reports/DISCandEIQ.pdf" class="hyperlink" target="_blank" rel="noopener">DISC + Emotional Intelligence</a>
                        <a v-else-if="lang === 'zh'" href="https://cdn.assessments24x7.com/file/assessments24x7-media/reports/DiscPlusEiqChineseSampleReport.pdf" class="hyperlink" target="_blank" rel="noopener">DISC + Emotional Intelligence</a>
                        <a v-else class="hyperlink disabled">DISC + Emotional Intelligence</a><br/>
                        <a class="language-button other" @click="discPluseiqReportModal = true">2 languages</a><br/>
                    </div>
                </div>

                <div class="col-3">
                    <div class="samples-container">
                        <h3>Emotional Intelligence 360&deg;</h3>
                        <a v-if="lang === 'en-us'" href="https://cdn.assessments24x7.com/file/assessments24x7-media/reports/EIQ360SampleReport.pdf" class="hyperlink" target="_blank" rel="noopener">Emotional Intelligence 360&deg;</a>
                        <a v-else-if="lang === 'fr'" href="https://cdn.assessments24x7.com/file/assessments24x7-media/reports/EIQ360FrenchSampleReport.pdf" class="hyperlink" target="_blank" rel="noopener">Emotional Intelligence 360&deg;</a>
                        <a v-else-if="lang === 'ru'" href="https://cdn.assessments24x7.com/file/assessments24x7-media/reports/EIQ360RussianSampleReport.pdf" class="hyperlink" target="_blank" rel="noopener">Emotional Intelligence 360&deg;</a>
                        <a v-else-if="lang === 'es'" href="https://cdn.assessments24x7.com/file/assessments24x7-media/reports/EIQ360SpanishSampleReport.pdf" class="hyperlink" target="_blank" rel="noopener">Emotional Intelligence 360&deg;</a>
                        <a v-else class="hyperlink disabled">Emotional Intelligence 360&deg;</a>
                        <a class="language-button other" @click="eiq360ReportModal = true">4 languages</a><br/>
                    </div>
                </div>

                <div class="col-3">
                    <div class="samples-container">
                        <h3>Core Competency Index</h3>
                        <a v-if="lang === 'en-us'" href="https://cdn.assessments24x7.com/file/assessments24x7-media/reports/CCISample.pdf" class="hyperlink" target="_blank" rel="noopener">Core Competency Index Report</a>
                        <a v-else class="hyperlink disabled">Core Competency Index Report</a><br/>
                    </div>
                </div>
            </div>

            <div class="row">
                <div class="col-3">
                    <div class="samples-container">
                        <h3>Learning Styles</h3>
                        <a v-if="lang === 'en-us'" href="https://cdn.assessments24x7.com/file/assessments24x7-media/reports/LearningStylesSampleReport.pdf" class="hyperlink" target="_blank" rel="noopener">Learning Styles Report</a>
                        <a v-else-if="lang === 'zh'" class="hyperlink" href="https://cdn.assessments24x7.com/file/assessments24x7-media/reports/Report_Sample_Learning_Styles_-_Chinese.pdf" target="_blank" rel="noopener">Learning Styles Report</a>
                        <a v-else-if="lang === 'fr'" class="hyperlink" href="https://cdn.assessments24x7.com/file/assessments24x7-media/reports/LearningStylesFrench.pdf" target="_blank" rel="noopener">Learning Styles Report</a>
                        <a v-else-if="lang === 'ja'" class="hyperlink" href="https://cdn.assessments24x7.com/file/assessments24x7-media/reports/LearningStylesJapanese.pdf" target="_blank" rel="noopener">Learning Styles Report</a>
                        <a v-else-if="lang === 'pt-br'" class="hyperlink" href="https://cdn.assessments24x7.com/file/assessments24x7-media/reports/LearningStylesPortBrazil.pdf" target="_blank" rel="noopener">Learning Styles Report</a>
                        <a v-else-if="lang === 'vi'" class="hyperlink" href="https://cdn.assessments24x7.com/file/assessments24x7-media/reports/SampleLSVietnamese.pdf" target="_blank" rel="noopener">Learning Styles Report</a>
                        <a v-else class="hyperlink disabled">Learning Styles Report</a>
                        <a class="language-button other" @click="learningStylesReportModal = true">6 languages</a><br/>
                        
                        <a v-if="lang === 'en-us'" href="https://cdn.assessments24x7.com/file/assessments24x7-media/reports/SampleDISCandLS.pdf" class="hyperlink" target="_blank" rel="noopener">DISC + Learning Styles</a>
                        <a v-else class="hyperlink disabled">DISC + Learning Styles</a><br/>
                        <a class="language-button other" @click="discPlusLearningStylesReportModal = true">2 languages</a><br/>
                    </div>
                </div>

                <div class="col-3">
                    <div class="samples-container">
                        <h3>Sales IQ</h3>
                        <a v-if="lang === 'en-us'" href="https://cdn.assessments24x7.com/file/assessments24x7-media/reports/SalesIQPlus.pdf" class="hyperlink" target="_blank" rel="noopener">Sales IQ Report</a>
                        <a v-else-if="lang === 'zh'" class="hyperlink" href="https://cdn.assessments24x7.com/file/assessments24x7-media/reports/SalesIQPlusChinese.pdf" target="_blank" rel="noopener">Sales IQ Report</a>
                        <a v-else-if="lang === 'fr'" class="hyperlink" href="https://cdn.assessments24x7.com/file/assessments24x7-media/reports/SalesIQFrench.pdf" target="_blank" rel="noopener">Sales IQ Report</a>
                        <a v-else-if="lang === 'no'" class="hyperlink" href="https://cdn.assessments24x7.com/file/assessments24x7-media/reports/SalesIqPlus_NorwegianSampleReport.pdf" target="_blank" rel="noopener">Sales IQ Report</a>
                        <a v-else-if="lang === 'pt'" class="hyperlink" href="https://cdn.assessments24x7.com/file/assessments24x7-media/reports/SalesIQPlusPortuguese.pdf" target="_blank" rel="noopener">Sales IQ Report</a>
                        <a v-else-if="lang === 'sv'" class="hyperlink" href="https://cdn.assessments24x7.com/file/assessments24x7-media/reports/SalesIQSwedish.pdf" target="_blank" rel="noopener">Sales IQ Report</a>
                        <a v-else-if="lang === 'tr'" class="hyperlink" href="https://cdn.assessments24x7.com/file/assessments24x7-media/reports/SalesIQTurkish.pdf" target="_blank" rel="noopener">Sales IQ Report</a>
                        <a v-else-if="lang === 'vi'" class="hyperlink" href="https://cdn.assessments24x7.com/file/assessments24x7-media/reports/SalesIQPlusVietnamese.pdf" target="_blank" rel="noopener">Sales IQ Report</a>
                        <a v-else class="hyperlink disabled">Sales IQ Report</a>
                        <a class="language-button other" @click="salesIQReportModal = true">8 languages</a><br/>

                        <a v-if="lang === 'en-us'" href="https://cdn.assessments24x7.com/file/assessments24x7-media/reports/salesiqteamreport.pdf" class="hyperlink" target="_blank" rel="noopener">Sales IQ Team Report</a>
                        <a v-else-if="lang === 'fr'" class="hyperlink" href="https://cdn.assessments24x7.com/file/assessments24x7-media/reports/salesiqteamreportfrench.pdf" target="_blank" rel="noopener">Sales IQ Team Report</a>
                        <a v-else-if="lang === 'no'" class="hyperlink" href="https://cdn.assessments24x7.com/file/assessments24x7-media/reports/SalesIqPlus_NorwegianTeamReport.pdf" target="_blank" rel="noopener">Sales IQ Team Report</a>
                        <a v-else-if="lang === 'tr'" class="hyperlink" href="https://cdn.assessments24x7.com/file/assessments24x7-media/reports/salesiqteamreportturkish.pdf" target="_blank" rel="noopener">Sales IQ Team Report</a>
                        <a v-else-if="lang === 'vi'" class="hyperlink" href="https://cdn.assessments24x7.com/file/assessments24x7-media/reports/salesiqteamreportvietnamese.pdf" target="_blank" rel="noopener">Sales IQ Team Report</a>
                        <a v-else class="hyperlink disabled">Sales IQ Team Report</a>
                        <a class="language-button other" @click="salesIQTeamReportModal = true">5 languages</a><br/>
                    </div>
                </div>

                <div class="col-3">
                    <div class="samples-container">
                        <h3>Leadership Effectiveness 360&deg;</h3>
                        <a v-if="lang === 'en-us'" href="https://cdn.assessments24x7.com/file/assessments24x7-media/reports/SampleLE360.pdf" class="hyperlink" target="_blank" rel="noopener">Leadership Effectiveness 360&deg;</a>
                        <a v-else-if="lang === 'vi'" href="https://cdn.assessments24x7.com/file/assessments24x7-media/reports/LeadershipEffectiveness360VietnameseSampleReport.pdf" class="hyperlink" target="_blank" rel="noopener">Leadership Effectiveness 360&deg;</a>
                        <a v-else-if="lang === 'zh'" href="https://cdn.assessments24x7.com/file/assessments24x7-media/reports/LeadershipEffectiveness360ChineseSampleReport.pdf" class="hyperlink" target="_blank" rel="noopener">Leadership Effectiveness 360&deg;</a>

                        <a v-else class="hyperlink disabled">Leadership Effectiveness 360&deg;</a>
                        <a class="language-button other" @click="le360ReportModal = true">3 languages</a><br/>
                    </div>
                </div>

                <div class="col-3">
                    <div class="samples-container">
                        <h3>Organizational Development</h3>
                        <a v-if="lang === 'en-us'" href="https://cdn.assessments24x7.com/file/assessments24x7-media/reports/5DisciplinesSampleReport.pdf" class="hyperlink" target="_blank" rel="noopener">Organizational Development Report</a>
                        <a v-else class="hyperlink disabled">Organizational Development Report</a><br/>
                    </div>
                </div>
            </div>

            <br/><br/><br/>

            <!-- DISC SELF LANGUAGES MODAL -->
            <transition name="fade">
                <section v-if="discSelfModal" class="modal-window">
                    <div class="container">
                        <a title="Close" class="modal-close" @click="discSelfModal = false">Close</a>

                        <div class="row">
                            <div class="col-12">
                                <h1>DISC Self</h1>
                                <a href="https://cdn.assessments24x7.com/file/assessments24x7-media/reports/DISCSelfSampleReport.pdf" class="hyperlink" target="_blank" rel="noopener">English</a><br/>
                                <a class="hyperlink" href="https://cdn.assessments24x7.com/file/assessments24x7-media/reports/DISCArabic.pdf" target="_blank" rel="noopener">Arabic</a><br/>
                                <a class="hyperlink" href="https://cdn.assessments24x7.com/file/assessments24x7-media/reports/DISCSelfChinese.pdf" target="_blank" rel="noopener">Chinese</a><br/>
                                <a class="hyperlink" href="https://cdn.assessments24x7.com/file/assessments24x7-media/reports/DISCSelfDutch.pdf" target="_blank" rel="noopener">Dutch</a><br/>
                                <a class="hyperlink" href="https://cdn.assessments24x7.com/file/assessments24x7-media/reports/DISCSelfFrench.pdf" target="_blank" rel="noopener">French</a><br/>
                                <a class="hyperlink" href="https://cdn.assessments24x7.com/file/assessments24x7-media/reports/DISCSelfGerman.pdf" target="_blank" rel="noopener">German</a><br/>
                                <a class="hyperlink" href="https://cdn.assessments24x7.com/file/assessments24x7-media/reports/DISCSelfIndonesian.pdf" target="_blank" rel="noopener">Indonesian</a><br/>
                                <a class="hyperlink" href="https://cdn.assessments24x7.com/file/assessments24x7-media/reports/SampleDISCSelfItalian.pdf" target="_blank" rel="noopener">Italian</a><br/>
                                <a class="hyperlink" href="https://cdn.assessments24x7.com/file/assessments24x7-media/reports/DISCJapanese.pdf" target="_blank" rel="noopener">Japanese</a><br/>
                                <a class="hyperlink" href="https://cdn.assessments24x7.com/file/assessments24x7-media/reports/DISCKhmer.pdf" target="_blank" rel="noopener">Khmer</a><br/>
                                <a class="hyperlink" href="https://cdn.assessments24x7.com/file/assessments24x7-media/reports/DISCSelfKorean.pdf" target="_blank" rel="noopener">Korean</a><br/>
                                <a class="hyperlink" href="https://cdn.assessments24x7.com/file/assessments24x7-media/reports/DISCSelfMalaysian.pdf" target="_blank" rel="noopener">Malaysian</a><br/>
                                <a class="hyperlink" href="https://cdn.assessments24x7.com/file/assessments24x7-media/reports/DISCSelfNorwegian.pdf" target="_blank" rel="noopener">Norwegian</a><br/>
                                <a class="hyperlink" href="https://cdn.assessments24x7.com/file/assessments24x7-media/reports/DISCSelfPort.pdf" target="_blank" rel="noopener">Portuguese</a><br/>
                                <a class="hyperlink" href="https://cdn.assessments24x7.com/file/assessments24x7-media/reports/DISCSelfPortBrazil.pdf" target="_blank" rel="noopener">Portuguese (Brazil)</a><br/>
                                <a class="hyperlink" href="https://cdn.assessments24x7.com/file/assessments24x7-media/reports/DISCSelfPolish.pdf" target="_blank" rel="noopener">Polish</a><br/>
                                <a class="hyperlink" href="https://cdn.assessments24x7.com/file/assessments24x7-media/reports/SampleDISCRussian.pdf" target="_blank" rel="noopener">Russian</a><br/>
                                <a class="hyperlink" href="https://cdn.assessments24x7.com/file/assessments24x7-media/reports/DISC_Espanol.pdf" target="_blank" rel="noopener">Spanish</a><br/>
                                <a class="hyperlink" href="https://cdn.assessments24x7.com/file/assessments24x7-media/reports/DISCSwedish.pdf" target="_blank" rel="noopener">Swedish</a><br/>
                                <a class="hyperlink" href="https://cdn.assessments24x7.com/file/assessments24x7-media/reports/DISCSelfTurkish.pdf" target="_blank" rel="noopener">Turkish</a><br/>
                                <a class="hyperlink" href="https://cdn.assessments24x7.com/file/assessments24x7-media/reports/DISCSelfUK.pdf" target="_blank" rel="noopener">English (UK)</a><br/>
                                <a class="hyperlink" href="https://cdn.assessments24x7.com/file/assessments24x7-media/reports/DISCVietnamese.pdf" target="_blank" rel="noopener">Vietnamese</a>
                            </div>
                        </div>
                    </div>
                </section>
            </transition>

            <!-- DISC TEAM REPORTS MODAL -->
            <transition name="fade">
                <section v-if="discTeamReportModal" class="modal-window">
                    <div class="container">
                        <a title="Close" class="modal-close" @click="discTeamReportModal = false">Close</a>

                        <div class="row">
                            <div class="col-12">
                                <h1>DISC Team Reports</h1>

                                <a v-if="lang === 'en-us'" class="hyperlink" href="https://cdn.assessments24x7.com/file/assessments24x7-media/reports/TeamDynamicsGroupSampleReport.pdf" target="_blank" rel="noopener">DISC Team Dynamics Report</a>
                                <a v-else-if="lang === 'zh'" class="hyperlink" href="https://cdn.assessments24x7.com/file/assessments24x7-media/reports/DISCTeamDynamicsReportChinese.pdf" target="_blank" rel="noopener">DISC Team Dynamics Report</a>
                                <a v-else-if="lang === 'nl'" class="hyperlink" href="https://cdn.assessments24x7.com/file/assessments24x7-media/reports/SampleTeamReportDutch.pdf" target="_blank" rel="noopener">DISC Team Dynamics Report</a>
                                <a v-else-if="lang === 'fr'" class="hyperlink" href="https://cdn.assessments24x7.com/file/assessments24x7-media/reports/TeamDynamicsGroupFrenchSampleReport.pdf" target="_blank" rel="noopener">DISC Team Dynamics Report</a>
                                <a v-else-if="lang === 'no'" class="hyperlink" href="https://cdn.assessments24x7.com/file/assessments24x7-media/reports/Norwegian_DISC_Team_Dynamics_Sample_Report.pdf" target="_blank" rel="noopener">DISC Team Dynamics Report</a>
                                <a v-else-if="lang === 'pt'" class="hyperlink" href="https://cdn.assessments24x7.com/file/assessments24x7-media/reports/SampleTeamReportPort.pdf" target="_blank" rel="noopener">DISC Team Dynamics Report</a>
                                <a v-else-if="lang === 'sv'" class="hyperlink" href="https://cdn.assessments24x7.com/file/assessments24x7-media/reports/SampleTeamReportSwedish.pdf" target="_blank" rel="noopener">DISC Team Dynamics Report</a>
                                <a v-else-if="lang === 'vi'" class="hyperlink" href="https://cdn.assessments24x7.com/file/assessments24x7-media/reports/SampleTeamReportVietnamese.pdf" target="_blank" rel="noopener">DISC Team Dynamics Report</a>
                                <a v-else class="hyperlink disabled"></a>
                                <a class="language-button disc" @click="discTeamDynamicsReportModal = true">8 languages</a><br/>

                                <a v-if="lang === 'en-us'" class="hyperlink" href="https://cdn.assessments24x7.com/file/assessments24x7-media/reports/DISCTeamSummarySample.pdf" target="_blank" rel="noopener">DISC Team Summary Report</a>
                                <a v-else-if="lang === 'zh'" class="hyperlink" href="https://cdn.assessments24x7.com/file/assessments24x7-media/reports/DISCTeamSummaryReportChinese.pdf" target="_blank" rel="noopener">DISC Team Summary Report</a>
                                <a v-else-if="lang === 'es'" class="hyperlink" href="https://cdn.assessments24x7.com/file/assessments24x7-media/reports/DISCTeamSummarySpanishSampleReport.pdf" target="_blank" rel="noopener">DISC Team Summary Report</a>
                                <a v-else-if="lang === 'tr'" class="hyperlink" href="https://cdn.assessments24x7.com/file/assessments24x7-media/reports/DISCTeamSummaryTurkishSampleReport.pdf" target="_blank" rel="noopener">DISC Team Summary Report</a>
                                <a v-else class="hyperlink disabled">DISC Team Summary Report</a>
                                <a class="language-button disc" @click="discTeamSummaryReportModal = true">4 languages</a><br/>

                                <a v-if="lang === 'en-us'" class="hyperlink" href="https://cdn.assessments24x7.com/file/assessments24x7-media/reports/DISCTeamReportGraphs.pdf" target="_blank" rel="noopener">DISC Group Graphs</a>
                                <a v-else-if="lang === 'zh'" class="hyperlink" href="https://cdn.assessments24x7.com/file/assessments24x7-media/reports/DISCGroupGraphsChinese.pdf" target="_blank" rel="noopener">DISC Group Graphs</a>
                                <a v-else class="hyperlink disabled">DISC Group Graphs</a><br/>
                                <a class="language-button disc" @click="discGroupGraphsModal = true">2 languages</a><br/>

                                <a v-if="lang === 'en-us'" class="hyperlink" href="https://cdn.assessments24x7.com/file/assessments24x7-media/reports/DISCTeamReportBT.pdf" target="_blank" rel="noopener">DISC Behavioral Tendencies</a>
                                <a v-else-if="lang === 'zh'" class="hyperlink" href="https://cdn.assessments24x7.com/file/assessments24x7-media/reports/DISCBehavioralTendenciesChinese.pdf" target="_blank" rel="noopener">DISC Behavioral Tendencies</a>
                                <a v-else-if="lang === 'tr'" class="hyperlink" href="https://cdn.assessments24x7.com/file/assessments24x7-media/reports/DISCBehTendenciesTeamTurkishSampleReport.pdf" target="_blank" rel="noopener">DISC Behavioral Tendencies</a>
                                <a v-else class="hyperlink disabled">DISC Behavioral Tendencies</a>
                                <a class="language-button disc" @click="discBehavioralTendenciesReportModal = true">3 languages</a><br/>

                                <a v-if="lang === 'en-us'" class="hyperlink" href="https://cdn.assessments24x7.com/file/assessments24x7-media/reports/DISCTeamReportIntegratedBehaviors.pdf" target="_blank" rel="noopener">DISC Integrated Behaviors</a>
                                <a v-else class="hyperlink disabled">DISC Integrated Behaviors</a><br/>

                                <a v-if="lang === 'en-us'" class="hyperlink" href="https://cdn.assessments24x7.com/file/assessments24x7-media/reports/DISCTeamReportWheel.pdf" target="_blank" rel="noopener">DISC Team Wheel</a>
                                <a v-else-if="lang === 'zh'" class="hyperlink" href="https://cdn.assessments24x7.com/file/assessments24x7-media/reports/DISCTeamWheelChinese.pdf" target="_blank" rel="noopener">DISC Team Wheel</a>
                                <a v-else-if="lang === 'es'" class="hyperlink" href="https://cdn.assessments24x7.com/file/assessments24x7-media/reports/DISCTeamWheelSpanishSample.pdf" target="_blank" rel="noopener">DISC Team Wheel</a>
                                <a v-else-if="lang === 'tr'" class="hyperlink" href="https://cdn.assessments24x7.com/file/assessments24x7-media/reports/DISCTeamWheelTurkishSampleReport.pdf" target="_blank" rel="noopener">DISC Team Wheel</a>
                                <a v-else class="hyperlink disabled">DISC Team Wheel</a>
                                <a class="language-button disc" @click="discTeamWheelReportModal = true">4 languages</a><br/>
                                
                                <a v-if="lang === 'en-us'" class="hyperlink" href="https://cdn.assessments24x7.com/file/assessments24x7-media/reports/DISCMatching.pdf" target="_blank" rel="noopener">DISC Collaboration</a>
                                <a v-else-if="lang === 'zh'" class="hyperlink" href="https://cdn.assessments24x7.com/file/assessments24x7-media/reports/DISCCollaborationReportChinese.pdf" target="_blank" rel="noopener">DISC Collaboration</a>
                                <a v-else class="hyperlink disabled">DISC Collaboration</a><br/>
                                <a class="language-button disc" @click="discCollaborationModal = true">2 languages</a><br/>
                            </div>
                        </div>
                    </div>
                </section>
            </transition>

            <!-- DISC SUMMARY REPORTS MODAL -->
            <transition name="fade">
                <section v-if="discSummaryReportModal" class="modal-window">
                    <div class="container">
                        <a title="Close" class="modal-close" @click="discSummaryReportModal = false">Close</a>

                        <div class="row">
                            <div class="col-12">
                                <h1>DISC Summary Reports</h1>

                                <a href="https://cdn.assessments24x7.com/file/assessments24x7-media/reports/DISCSummarySampleReport.pdf" class="hyperlink" target="_blank" rel="noopener">English</a><br/>
                                <a href="https://cdn.assessments24x7.com/file/assessments24x7-media/reports/DISCSummaryDutchSampleReport.pdf" class="hyperlink" target="_blank" rel="noopener">Dutch</a><br/>
                                <a href="https://cdn.assessments24x7.com/file/assessments24x7-media/reports/DISCSummaryFrenchSampleReport.pdf" class="hyperlink" target="_blank" rel="noopener">French</a><br/>
                                <a href="https://cdn.assessments24x7.com/file/assessments24x7-media/reports/DISCSummaryPortuguesePortugalSampleReport.pdf" class="hyperlink" target="_blank" rel="noopener">Portuguese</a><br/>
                                <a href="https://cdn.assessments24x7.com/file/assessments24x7-media/reports/DISCSummarySpanishSampleReport.pdf" class="hyperlink" target="_blank" rel="noopener">Spanish</a><br/>
                                <a href="https://cdn.assessments24x7.com/file/assessments24x7-media/reports/DISCSummarySwedishSampleReport.pdf" class="hyperlink" target="_blank" rel="noopener">Swedish</a><br/>
                                <a href="https://cdn.assessments24x7.com/file/assessments24x7-media/reports/DISCSummaryUKSampleReport.pdf" class="hyperlink" target="_blank" rel="noopener">English (UK)</a>
                            </div>
                        </div>
                    </div>
                </section>
            </transition>

            <!-- KIDS DISC QUESTIONAIRE ONLY SUMMARY REPORTS MODAL -->
            <transition name="fade">
                <section v-if="kidsDiscQuestionaireOnlyModal" class="modal-window">
                    <div class="container">
                        <a title="Close" class="modal-close" @click="kidsDiscQuestionaireOnlyModal = false">Close</a>

                        <div class="row">
                            <div class="col-12">
                                <h1>Kids DISC - Questionnaire Only</h1><br />

                                <a class="hyperlink" target="_blank" rel="noopener">French</a><br/>
                                <a class="hyperlink" target="_blank" rel="noopener">German</a><br/>
                                <a class="hyperlink" target="_blank" rel="noopener">Italian</a><br/>
                                <a class="hyperlink" target="_blank" rel="noopener">Japanese</a><br/>
                                <a class="hyperlink" target="_blank" rel="noopener">Portuguese (Brazil)</a><br/>
                                <a class="hyperlink" target="_blank" rel="noopener">Portuguese (Portugal)</a><br/>
                                <a class="hyperlink" target="_blank" rel="noopener">Spanish</a><br/>
                                <a class="hyperlink" target="_blank" rel="noopener">Swedish</a><br/>
                                <a class="hyperlink" target="_blank" rel="noopener">Turkish</a><br/>
                            </div>
                        </div>
                    </div>
                </section>
            </transition>

            <!-- KIDS DISC FULL REPORT REPORT MODAL -->
            <transition name="fade">
                <section v-if="kidsDISCReportModal" class="modal-window">
                    <div class="container">
                        <a title="Close" class="modal-close" @click="kidsDISCReportModal = false">Close</a>

                        <div class="row">
                            <div class="col-12">
                                <h1>Kids DISC - Full Report</h1>

                                <a href="https://cdn.assessments24x7.com/file/assessments24x7-media/reports/KidsDISC-Birds.pdf" class="hyperlink" target="_blank" rel="noopener">English</a><br/>
                                <a href="https://cdn.assessments24x7.com/file/assessments24x7-media/reports/KidsDISCChinese.pdf" class="hyperlink" target="_blank" rel="noopener">Chinese (Simplified)</a><br/>
                                <a href="https://cdn.assessments24x7.com/file/assessments24x7-media/reports/Report_Sample_Kids_DISC_-_Chinese_(Traditional).pdf" class="hyperlink" target="_blank" rel="noopener">Chinese (Traditional)</a><br/>
                                <a href="https://cdn.assessments24x7.com/file/assessments24x7-media/reports/Report_Sample_Kids_DISC_-_Vietnamese.pdf" class="hyperlink" target="_blank" rel="noopener">Vietnamese</a><br/>
                            </div>
                        </div>
                    </div>
                </section>
            </transition>

            <!-- DISC 360 REPORTS MODAL -->
            <transition name="fade">
                <section v-if="disc360ReportModal" class="modal-window">
                    <div class="container">
                        <a title="Close" class="modal-close" @click="disc360ReportModal = false">Close</a>

                        <div class="row">
                            <div class="col-12">
                                <h1>DISC 360&deg; Reports</h1>

                                <a href="https://cdn.assessments24x7.com/file/assessments24x7-media/reports/Report_Simplified_DISC_360_-_Chinese.pdf" class="hyperlink" target="_blank" rel="noopener">Chinese (Simplified)</a><br/>
                                <a href="https://cdn.assessments24x7.com/file/assessments24x7-media/reports/DISC360SampleReport.pdf" class="hyperlink" target="_blank" rel="noopener">English</a><br/>
                                <a href="https://cdn.assessments24x7.com/file/assessments24x7-media/reports/DISC360RussianSampleReport.pdf" class="hyperlink" target="_blank" rel="noopener">Russian</a><br/>
                                <a href="https://cdn.assessments24x7.com/file/assessments24x7-media/reports/DISC360SwedishSampleReport.pdf" class="hyperlink" target="_blank" rel="noopener">Swedish</a><br/>
                                <a href="https://cdn.assessments24x7.com/file/assessments24x7-media/reports/DISC360VietnameseSampleReport.pdf" class="hyperlink" target="_blank" rel="noopener">Vietnamese</a>
                            </div>
                        </div>
                    </div>
                </section>
            </transition>

            <!-- DISC TEAM DYNAMICS REPORTS MODAL -->
            <transition name="fade">
                <section v-if="discTeamDynamicsReportModal" class="modal-window">
                    <div class="container">
                        <a title="Close" class="modal-close" @click="discTeamDynamicsReportModal = false">Close</a>

                        <div class="row">
                            <div class="col-12">
                                <h1>DISC Team Dynamics Reports</h1>
                                
                                <a class="hyperlink" href="https://cdn.assessments24x7.com/file/assessments24x7-media/reports/TeamDynamicsGroupSampleReport.pdf" target="_blank" rel="noopener">English</a><br/>
                                <a class="hyperlink" href="https://cdn.assessments24x7.com/file/assessments24x7-media/reports/DISCTeamDynamicsReportChinese.pdf" target="_blank" rel="noopener">Chinese</a><br/>
                                <a class="hyperlink" href="https://cdn.assessments24x7.com/file/assessments24x7-media/reports/SampleTeamReportDutch.pdf" target="_blank" rel="noopener">Dutch</a><br/>
                                <a class="hyperlink" href="https://cdn.assessments24x7.com/file/assessments24x7-media/reports/TeamDynamicsGroupFrenchSampleReport.pdf" target="_blank" rel="noopener">French</a><br/>
                                <a class="hyperlink" href="https://cdn.assessments24x7.com/file/assessments24x7-media/reports/Norwegian_DISC_Team_Dynamics_Sample_Report.pdf" target="_blank" rel="noopener">Norwegian</a><br/>
                                <a class="hyperlink" href="https://cdn.assessments24x7.com/file/assessments24x7-media/reports/SampleTeamReportPort.pdf" target="_blank" rel="noopener">Portuguese</a><br/>
                                <a class="hyperlink" href="https://cdn.assessments24x7.com/file/assessments24x7-media/reports/SampleTeamReportSwedish.pdf" target="_blank" rel="noopener">Swedish</a><br/>
                                <a class="hyperlink" href="https://cdn.assessments24x7.com/file/assessments24x7-media/reports/SampleTeamReportVietnamese.pdf" target="_blank" rel="noopener">Vietnamese</a>
                            </div>
                        </div>
                    </div>
                </section>
            </transition>

            <!-- DISC TEAM SUMMARY REPORTS MODAL -->
            <transition name="fade">
                <section v-if="discTeamSummaryReportModal" class="modal-window">
                    <div class="container">
                        <a title="Close" class="modal-close" @click="discTeamSummaryReportModal = false">Close</a>

                        <div class="row">
                            <div class="col-12">
                                <h1>DISC Team Summary Reports</h1>

                                <a class="hyperlink" href="https://cdn.assessments24x7.com/file/assessments24x7-media/reports/DISCTeamSummarySample.pdf" target="_blank" rel="noopener">English</a><br/>
                                <a class="hyperlink" href="https://cdn.assessments24x7.com/file/assessments24x7-media/reports/DISCTeamSummaryReportChinese.pdf" target="_blank" rel="noopener">Chinese</a><br/>
                                <a class="hyperlink" href="https://cdn.assessments24x7.com/file/assessments24x7-media/reports/DISCTeamSummarySpanishSampleReport.pdf" target="_blank" rel="noopener">Spanish</a><br/>
                                <a class="hyperlink" href="https://cdn.assessments24x7.com/file/assessments24x7-media/reports/DISCTeamSummaryTurkishSampleReport.pdf" target="_blank" rel="noopener">Turkish</a>
                            </div>
                        </div>
                    </div>
                </section>
            </transition>

            <!-- DISC GROUP GRAPHS REPORTS MODAL -->
            <transition name="fade">
                <section v-if="discGroupGraphsModal" class="modal-window">
                    <div class="container">
                        <a title="Close" class="modal-close" @click="discGroupGraphsModal = false">Close</a>

                        <div class="row">
                            <div class="col-12">
                                <h1>DISC Group Graphs</h1>

                                <a class="hyperlink" href="https://cdn.assessments24x7.com/file/assessments24x7-media/reports/DISCTeamReportGraphs.pdf" target="_blank" rel="noopener">English</a><br/>
                                <a class="hyperlink" href="https://cdn.assessments24x7.com/file/assessments24x7-media/reports/DISCGroupGraphsChinese.pdf" target="_blank" rel="noopener">Chinese</a><br/>
                            </div>
                        </div>
                    </div>
                </section>
            </transition>

            <!-- DISC COLLABORATION MODAL -->
            <transition name="fade">
                <section v-if="discCollaborationModal" class="modal-window">
                    <div class="container">
                        <a title="Close" class="modal-close" @click="discCollaborationModal = false">Close</a>

                        <div class="row">
                            <div class="col-12">
                                <h1>DISC Collaboration</h1>

                                <a class="hyperlink" href="https://cdn.assessments24x7.com/file/assessments24x7-media/reports/DISCMatching.pdf" target="_blank" rel="noopener">English</a><br/>
                                <a class="hyperlink" href="https://cdn.assessments24x7.com/file/assessments24x7-media/reports/DISCCollaborationReportChinese.pdf" target="_blank" rel="noopener">Chinese</a><br/>
                            </div>
                        </div>
                    </div>
                </section>
            </transition>

            <!-- DISC BEHAVIORAL TENDENCIES REPORTS MODAL -->
            <transition name="fade">
                <section v-if="discBehavioralTendenciesReportModal" class="modal-window">
                    <div class="container">
                        <a title="Close" class="modal-close" @click="discBehavioralTendenciesReportModal = false">Close</a>

                        <div class="row">
                            <div class="col-12">
                                <h1>DISC Behavioral Tendencies Reports</h1>

                                <a class="hyperlink" href="https://cdn.assessments24x7.com/file/assessments24x7-media/reports/DISCTeamReportBT.pdf" target="_blank" rel="noopener">English</a><br/>
                                <a class="hyperlink" href="https://cdn.assessments24x7.com/file/assessments24x7-media/reports/DISCBehavioralTendenciesChinese.pdf" target="_blank" rel="noopener">Chinese</a><br/>
                                <a class="hyperlink" href="https://cdn.assessments24x7.com/file/assessments24x7-media/reports/DISCBehTendenciesTeamTurkishSampleReport.pdf" target="_blank" rel="noopener">Turkish</a>
                            </div>
                        </div>
                    </div>
                </section>
            </transition>

            <!-- DISC TEAM WHEEL REPORTS MODAL -->
            <transition name="fade">
                <section v-if="discTeamWheelReportModal" class="modal-window">
                    <div class="container">
                        <a title="Close" class="modal-close" @click="discTeamWheelReportModal = false">Close</a>

                        <div class="row">
                            <div class="col-12">
                                <h1>DISC Team Wheel Reports</h1>

                                <a class="hyperlink" href="https://cdn.assessments24x7.com/file/assessments24x7-media/reports/DISCTeamReportWheel.pdf" target="_blank" rel="noopener">English</a><br/>
                                <a class="hyperlink" href="https://cdn.assessments24x7.com/file/assessments24x7-media/reports/DISCTeamWheelChinese.pdf" target="_blank" rel="noopener">Chinese</a><br/>
                                <a class="hyperlink" href="https://cdn.assessments24x7.com/file/assessments24x7-media/reports/DISCTeamWheelSpanishSample.pdf" target="_blank" rel="noopener">Spanish</a><br/>
                                <a class="hyperlink" href="https://cdn.assessments24x7.com/file/assessments24x7-media/reports/DISCTeamWheelTurkishSampleReport.pdf" target="_blank" rel="noopener">Turkish</a>
                            </div>
                        </div>
                    </div>
                </section>
            </transition>

            <!-- MOTIVATORS TEAM REPORTS MODAL -->
            <transition name="fade">
                <section v-if="motTeamReportsModal" class="modal-window">
                    <div class="container">
                        <a title="Close" class="modal-close" @click="motTeamReportsModal = false">Close</a>

                        <div class="row">
                            <div class="col-12">
                                <h1>Motivators Team Reports</h1>

                                <a v-if="lang === 'en-us'" class="hyperlink" href="https://cdn.assessments24x7.com/file/assessments24x7-media/reports/MotivatorsTeamReport.pdf" target="_blank" rel="noopener">Motivators Team Report</a>
                                <a v-else-if="lang === 'zh'" class="hyperlink" href="https://cdn.assessments24x7.com/file/assessments24x7-media/reports/MotivatorsTeamReportChinese.pdf" target="_blank" rel="noopener">Motivators Team Report</a>
                                <a v-else class="hyperlink disabled">Motivators Team Report</a><br/>
                                <a class="language-button mot" @click="motTeamReportModal = true">2 languages</a><br/>

                                <a v-if="lang === 'en-us'" class="hyperlink" href="https://cdn.assessments24x7.com/file/assessments24x7-media/reports/motgroupgraphs.pdf" target="_blank" rel="noopener">Motivators Group Graphs</a>
                                <a v-else class="hyperlink disabled">Motivators Group Graphs</a><br/>

                                <a v-if="lang === 'en-us'" class="hyperlink" href="https://cdn.assessments24x7.com/file/assessments24x7-media/reports/motteamwheel.pdf" target="_blank" rel="noopener">Motivators Team Wheel</a>
                                <a v-else class="hyperlink disabled">Motivators Team Wheel</a><br/>
                                <a class="language-button mot" @click="motTeamWheelReportModal = true">2 languages</a><br/>
                            </div>
                        </div>
                    </div>
                </section>
            </transition>

            <!-- MOT TEAM REPORTS MODAL -->
            <transition name="fade">
                <section v-if="motTeamReportModal" class="modal-window">
                    <div class="container">
                        <a title="Close" class="modal-close" @click="motTeamReportModal = false">Close</a>

                        <div class="row">
                            <div class="col-12">
                                <h1>Motivators Team Report</h1>

                                <a class="hyperlink" href="https://cdn.assessments24x7.com/file/assessments24x7-media/reports/MotivatorsTeamReport.pdf" target="_blank" rel="noopener">English</a><br/>
                                <a class="hyperlink" href="https://cdn.assessments24x7.com/file/assessments24x7-media/reports/MotivatorsTeamReportChinese.pdf" target="_blank" rel="noopener">Chinese</a><br/>
                            </div>
                        </div>
                    </div>
                </section>
            </transition>

            <!--MOT TEAM WHEEL MODAL-->
            <transition name="fade">
                <section v-if="motTeamWheelReportModal" class="modal-window">
                    <div class="container">
                        <a title="Close" class="modal-close" @click="motTeamWheelReportModal = false">Close</a>

                        <div class="row">
                            <div class="col-12">
                                <h1>Motivators Team Wheel</h1>

                                <a class="hyperlink" href="https://cdn.assessments24x7.com/file/assessments24x7-media/reports/motteamwheel.pdf" target="_blank" rel="noopener">English</a><br/>
                                <a class="hyperlink" href="https://cdn.assessments24x7.com/file/assessments24x7-media/reports/MotivatorsTeamWheel_Chinese.pdf" target="_blank" rel="noopener">Chinese</a><br/>
                            </div>
                        </div>
                    </div>
                </section>
            </transition>

            <!-- MOT SELF REPORTS MODAL -->
            <transition name="fade">
                <section v-if="motSelfReportModal" class="modal-window">
                    <div class="container">
                        <a title="Close" class="modal-close" @click="motSelfReportModal = false">Close</a>

                        <div class="row">
                            <div class="col-12">
                                <h1>Motivators Self Reports</h1>

                                <a href="https://cdn.assessments24x7.com/file/assessments24x7-media/reports/valuessamplereport.pdf" class="hyperlink" target="_blank" rel="noopener">English</a><br/>
                                <a class="hyperlink" href="https://cdn.assessments24x7.com/file/assessments24x7-media/reports/Motivators_Assessment_Arabic.pdf" target="_blank" rel="noopener">Arabic</a><br/>
                                <a class="hyperlink" href="https://cdn.assessments24x7.com/file/assessments24x7-media/reports/Motivators_Assessment_Chinese.pdf" target="_blank" rel="noopener">Chinese</a><br/>
                                <a class="hyperlink" href="https://cdn.assessments24x7.com/file/assessments24x7-media/reports/Motivators_Assessment_Dutch.pdf" target="_blank" rel="noopener">Dutch</a><br/>
                                <a class="hyperlink" href="https://cdn.assessments24x7.com/file/assessments24x7-media/reports/Motivators_Assessment_French.pdf" target="_blank" rel="noopener">French</a><br/>
                                <a class="hyperlink" href="https://cdn.assessments24x7.com/file/assessments24x7-media/reports/Motivators_Assessment_German.pdf" target="_blank" rel="noopener">German</a><br/>
                                <a class="hyperlink" href="https://cdn.assessments24x7.com/file/assessments24x7-media/reports/SampleMotivatorsItalian.pdf" target="_blank" rel="noopener">Italian</a><br/>
                                <a class="hyperlink" href="https://cdn.assessments24x7.com/file/assessments24x7-media/reports/Motivators_Assessment_Japanese.pdf" target="_blank" rel="noopener">Japanese</a><br/>
                                <a class="hyperlink" href="https://cdn.assessments24x7.com/file/assessments24x7-media/reports/MotivatorsPortuguese.pdf" target="_blank" rel="noopener">Portuguese</a><br/>
                                <a class="hyperlink" href="https://cdn.assessments24x7.com/file/assessments24x7-media/reports/SampleMotivatorsRussian.pdf" target="_blank" rel="noopener">Russian</a><br/>
                                <a class="hyperlink" href="https://cdn.assessments24x7.com/file/assessments24x7-media/reports/Motivators_Assessment_Espanol.pdf" target="_blank" rel="noopener">Spanish</a><br/>
                                <a class="hyperlink" href="https://cdn.assessments24x7.com/file/assessments24x7-media/reports/Motivators_Assessment_Swedish.pdf" target="_blank" rel="noopener">Swedish</a><br/>
                                <a class="hyperlink" href="https://cdn.assessments24x7.com/file/assessments24x7-media/reports/MotivatorsSampleTurkish.pdf" target="_blank" rel="noopener">Turkish</a><br/>
                                <a class="hyperlink" href="https://cdn.assessments24x7.com/file/assessments24x7-media/reports/MotivatorsSampleUK.pdf" target="_blank" rel="noopener">English (UK)</a><br/>
                                <a class="hyperlink" href="https://cdn.assessments24x7.com/file/assessments24x7-media/reports/Motivators_Assessment_Vietnamese.pdf" target="_blank" rel="noopener">Vietnamese</a>
                            </div>
                        </div>
                    </div>
                </section>
            </transition>

            <!-- MOT + DISC SELF REPORTS MODAL -->
            <transition name="fade">
                <section v-if="motDISCReportModal" class="modal-window">
                    <div class="container">
                        <a title="Close" class="modal-close" @click="motDISCReportModal = false">Close</a>

                        <div class="row">
                            <div class="col-12">
                                <h1>DISC + Motivators Reports</h1>

                                <a href="https://cdn.assessments24x7.com/file/assessments24x7-media/reports/SampleDISCandMOT.pdf" class="hyperlink" target="_blank" rel="noopener">English</a><br/>
                                <a class="hyperlink" href="https://cdn.assessments24x7.com/file/assessments24x7-media/reports/DISCandMotivatorsChineseSampleReport.pdf" target="_blank" rel="noopener">Chinese</a><br/>
                                <a class="hyperlink" href="https://cdn.assessments24x7.com/file/assessments24x7-media/reports/DISC_and_Motivators_-_DutchSampleReport.pdf" target="_blank" rel="noopener">Dutch</a><br/>
                                <a class="hyperlink" href="https://cdn.assessments24x7.com/file/assessments24x7-media/reports/SampleDISCandMOTFrench.pdf" target="_blank" rel="noopener">French</a><br/>
                                <a class="hyperlink" href="https://cdn.assessments24x7.com/file/assessments24x7-media/reports/SampleDISCandMOTGerman.pdf" target="_blank" rel="noopener">German</a><br/>
                                <a class="hyperlink" href="https://cdn.assessments24x7.com/file/assessments24x7-media/reports/SampleDISCandMOTPort.pdf" target="_blank" rel="noopener">Portuguese</a><br/>
                                <a class="hyperlink" href="https://cdn.assessments24x7.com/file/assessments24x7-media/reports/DISCandMOTRussianSample.pdf" target="_blank" rel="noopener">Russian</a><br/>
                                <a class="hyperlink" href="https://cdn.assessments24x7.com/file/assessments24x7-media/reports/SampleDISCandMOTSP.pdf" target="_blank" rel="noopener">Spanish</a><br/>
                            </div>
                        </div>
                    </div>
                </section>
            </transition>

            <!-- EIQ REPORTS MODAL -->
            <transition name="fade">
                <section v-if="eiqReportModal" class="modal-window">
                    <div class="container">
                        <a title="Close" class="modal-close" @click="eiqReportModal = false">Close</a>

                        <div class="row">
                            <div class="col-12">
                                <h1>Emotional Intelligence Reports</h1>

                                <a href="https://cdn.assessments24x7.com/file/assessments24x7-media/reports/EIQSampleReport.pdf" class="hyperlink" target="_blank" rel="noopener">English</a><br/>
                                <a class="hyperlink" href="https://cdn.assessments24x7.com/file/assessments24x7-media/reports/EIQChineseSampleReport.pdf" target="_blank" rel="noopener">Chinese</a><br/>
                                <a class="hyperlink" href="https://cdn.assessments24x7.com/file/assessments24x7-media/reports/EIQFrenchSampleReport.pdf" target="_blank" rel="noopener">French</a><br/>
                                <a class="hyperlink" href="https://cdn.assessments24x7.com/file/assessments24x7-media/reports/EIQJapeneseSampleReport.pdf" target="_blank" rel="noopener">Japanese</a><br/>
                                <a class="hyperlink" href="https://cdn.assessments24x7.com/file/assessments24x7-media/reports/EIQPortSampleReport.pdf" target="_blank" rel="noopener">Portuguese (Brazil)</a><br/>
                                <a class="hyperlink" href="https://cdn.assessments24x7.com/file/assessments24x7-media/reports/EIQSampleReportRussian.pdf" target="_blank" rel="noopener">Russian</a><br/>
                                <a class="hyperlink" href="https://cdn.assessments24x7.com/file/assessments24x7-media/reports/EIQSampleReportSpanish.pdf" target="_blank" rel="noopener">Spanish</a><br/>
                                <a class="hyperlink" href="https://cdn.assessments24x7.com/file/assessments24x7-media/reports/EIQSampleReportVietnamese.pdf" target="_blank" rel="noopener">Vietnamese</a>
                            </div>
                        </div>
                    </div>
                </section>
            </transition>

            <!-- DISC + EIQ REPORTS MODAL -->
            <transition name="fade">
                <section v-if="discPluseiqReportModal" class="modal-window">
                    <div class="container">
                        <a title="Close" class="modal-close" @click="discPluseiqReportModal = false">Close</a>

                        <div class="row">
                            <div class="col-12">
                                <h1>DISC + Emotional Intelligence</h1>

                                <a href="https://cdn.assessments24x7.com/file/assessments24x7-media/reports/DISCandEIQ.pdf" class="hyperlink" target="_blank" rel="noopener">English</a><br/>
                                <a class="hyperlink" href="https://cdn.assessments24x7.com/file/assessments24x7-media/reports/DiscPlusEiqChineseSampleReport.pdf" target="_blank" rel="noopener">Chinese (Simplified)</a><br/>
                            </div>
                        </div>
                    </div>
                </section>
            </transition>

            <!-- EIQ 360 REPORTS MODAL -->
            <transition name="fade">
                <section v-if="eiq360ReportModal" class="modal-window">
                    <div class="container">
                        <a title="Close" class="modal-close" @click="eiq360ReportModal = false">Close</a>

                        <div class="row">
                            <div class="col-12">
                                <h1>Emotional Intelligence 360&deg; Reports</h1>

                                <a href="https://cdn.assessments24x7.com/file/assessments24x7-media/reports/EIQ360SampleReport.pdf" class="hyperlink" target="_blank" rel="noopener">English</a><br/>
                                <a href="https://cdn.assessments24x7.com/file/assessments24x7-media/reports/EIQ360FrenchSampleReport.pdf" class="hyperlink" target="_blank" rel="noopener">French</a><br/>
                                <a href="https://cdn.assessments24x7.com/file/assessments24x7-media/reports/EIQ360RussianSampleReport.pdf" class="hyperlink" target="_blank" rel="noopener">Russian</a><br/>
                                <a href="https://cdn.assessments24x7.com/file/assessments24x7-media/reports/EIQ360SpanishSampleReport.pdf" class="hyperlink" target="_blank" rel="noopener">Spanish</a>
                            </div>
                        </div>
                    </div>
                </section>
            </transition>

            <!-- LEARNING STYLES REPORTS MODAL -->
            <transition name="fade">
                <section v-if="learningStylesReportModal" class="modal-window">
                    <div class="container">
                        <a title="Close" class="modal-close" @click="learningStylesReportModal = false">Close</a>

                        <div class="row">
                            <div class="col-12">
                                <h1>Learning Styles Reports</h1>

                                <a href="https://cdn.assessments24x7.com/file/assessments24x7-media/reports/LearningStylesSampleReport.pdf" class="hyperlink" target="_blank" rel="noopener">English</a><br/>
                                <a class="hyperlink" href="https://cdn.assessments24x7.com/file/assessments24x7-media/reports/Report_Sample_Learning_Styles_-_Chinese.pdf" target="_blank" rel="noopener">Chinese</a><br/>
                                <a class="hyperlink" href="https://cdn.assessments24x7.com/file/assessments24x7-media/reports/LearningStylesFrench.pdf" target="_blank" rel="noopener">French</a><br/>
                                <a class="hyperlink" href="https://cdn.assessments24x7.com/file/assessments24x7-media/reports/LearningStylesJapanese.pdf" target="_blank" rel="noopener">Japanese</a><br/>
                                <a class="hyperlink" href="https://cdn.assessments24x7.com/file/assessments24x7-media/reports/LearningStylesPortBrazil.pdf" target="_blank" rel="noopener">Portuguese (Brazil)</a><br/>
                                <a class="hyperlink" href="https://cdn.assessments24x7.com/file/assessments24x7-media/reports/SampleLSVietnamese.pdf" target="_blank" rel="noopener">Vietnamese</a>
                            </div>
                        </div>
                    </div>
                </section>
            </transition>

            <!-- DISC + LEARNING STYLES REPORTS MODAL -->
            <transition name="fade">
                <section v-if="discPlusLearningStylesReportModal" class="modal-window">
                    <div class="container">
                        <a title="Close" class="modal-close" @click="discPlusLearningStylesReportModal = false">Close</a>

                        <div class="row">
                            <div class="col-12">
                                <h1>DISC + Learning Styles</h1>

                                <a href="https://cdn.assessments24x7.com/file/assessments24x7-media/reports/SampleDISCandLS.pdf" class="hyperlink" target="_blank" rel="noopener">English</a><br/>
                                <a class="hyperlink" href="https://cdn.assessments24x7.com/file/assessments24x7-media/reports/Report_Sample_DISC_and_Learning_Styles_-_Chinese.pdf" target="_blank" rel="noopener">Chinese</a><br/>
                            </div>
                        </div>
                    </div>
                </section>
            </transition>

            <!-- SALES IQ REPORTS MODAL -->
            <transition name="fade">
                <section v-if="salesIQReportModal" class="modal-window">
                    <div class="container">
                        <a title="Close" class="modal-close" @click="salesIQReportModal = false">Close</a>

                        <div class="row">
                            <div class="col-12">
                                <h1>Sales IQ Reports</h1>

                                <a href="https://cdn.assessments24x7.com/file/assessments24x7-media/reports/SalesIQPlus.pdf" class="hyperlink" target="_blank" rel="noopener">English</a><br/>
                                <a href="https://cdn.assessments24x7.com/file/assessments24x7-media/reports/SalesIQPlusChinese.pdf" class="hyperlink" target="_blank" rel="noopener">Chinese</a><br/>
                                <a class="hyperlink" href="https://cdn.assessments24x7.com/file/assessments24x7-media/reports/SalesIQFrench.pdf" target="_blank" rel="noopener">French</a><br/>
                                <a class="hyperlink" href="https://cdn.assessments24x7.com/file/assessments24x7-media/reports/SalesIqPlus_NorwegianSampleReport.pdf" target="_blank" rel="noopener">Norwegian</a><br/>
                                <a class="hyperlink" href="https://cdn.assessments24x7.com/file/assessments24x7-media/reports/SalesIQPlusPortuguese.pdf" target="_blank" rel="noopener">Portuguese</a><br/>
                                <a class="hyperlink" href="https://cdn.assessments24x7.com/file/assessments24x7-media/reports/SalesIQSwedish.pdf" target="_blank" rel="noopener">Swedish</a><br/>
                                <a class="hyperlink" href="https://cdn.assessments24x7.com/file/assessments24x7-media/reports/SalesIQTurkish.pdf" target="_blank" rel="noopener">Turkish</a><br/>
                                <a class="hyperlink" href="https://cdn.assessments24x7.com/file/assessments24x7-media/reports/SalesIQPlusVietnamese.pdf" target="_blank" rel="noopener">Vietnamese</a>
                            </div>
                        </div>
                    </div>
                </section>
            </transition>

            <!-- SALES IQ TEAM REPORTS MODAL -->
            <transition name="fade">
                <section v-if="salesIQTeamReportModal" class="modal-window">
                    <div class="container">
                        <a title="Close" class="modal-close" @click="salesIQTeamReportModal = false">Close</a>

                        <div class="row">
                            <div class="col-12">
                                <h1>Sales IQ Team Reports</h1>

                                <a href="https://cdn.assessments24x7.com/file/assessments24x7-media/reports/salesiqteamreport.pdf" class="hyperlink" target="_blank" rel="noopener">English</a><br/>
                                <a class="hyperlink" href="https://cdn.assessments24x7.com/file/assessments24x7-media/reports/SalesIQPlusGroupReport_Chinese.pdf" target="_blank" rel="noopener">Chinese</a><br/>
                                <a class="hyperlink" href="https://cdn.assessments24x7.com/file/assessments24x7-media/reports/salesiqteamreportfrench.pdf" target="_blank" rel="noopener">French</a><br/>
                                <a class="hyperlink" href="https://cdn.assessments24x7.com/file/assessments24x7-media/reports/SalesIqPlus_NorwegianTeamReport.pdf" target="_blank" rel="noopener">Norwegian</a><br/>
                                <a class="hyperlink" href="https://cdn.assessments24x7.com/file/assessments24x7-media/reports/salesiqteamreportturkish.pdf" target="_blank" rel="noopener">Turkish</a><br/>
                                <a class="hyperlink" href="https://cdn.assessments24x7.com/file/assessments24x7-media/reports/salesiqteamreportvietnamese.pdf" target="_blank" rel="noopener">Vietnamese</a>
                            </div>
                        </div>
                    </div>
                </section>
            </transition>

            <!-- LE 360 TEAM REPORTS MODAL -->
            <transition name="fade">
                <section v-if="le360ReportModal" class="modal-window">
                    <div class="container">
                        <a title="Close" class="modal-close" @click="le360ReportModal = false">Close</a>

                        <div class="row">
                            <div class="col-12">
                                <h1>Leadership Effectiveness 360&deg; Reports</h1>

                                <a href="https://cdn.assessments24x7.com/file/assessments24x7-media/reports/SampleLE360.pdf" class="hyperlink" target="_blank" rel="noopener">English</a><br/>
                                <a href="https://cdn.assessments24x7.com/file/assessments24x7-media/reports/LeadershipEffectiveness360VietnameseSampleReport.pdf" class="hyperlink" target="_blank" rel="noopener">Vietnamese</a><br/>
                                <a href="https://cdn.assessments24x7.com/file/assessments24x7-media/reports/LeadershipEffectiveness360ChineseSampleReport.pdf" class="hyperlink" target="_blank" rel="noopener">Chinese</a>
                            </div>
                        </div>
                    </div>
                </section>
            </transition>
        </div>

        <LazyHydrate when-visible><footer-fold></footer-fold></LazyHydrate>
    </section>
</template>

<script>
    import LazyHydrate from 'vue-lazy-hydration';

    export default {
        components: {
            LazyHydrate,
            'main-nav': () => import('@/components/Nav'),
            'footer-fold': () => import('@/components/Footer')
        },
        data() {
            return {
                lang: 'en-us',
                discSelfModal: false,
                discTeamReportModal: false,
                discSummaryReportModal: false,
                kidsDiscQuestionaireOnlyModal: false,
                kidsDISCReportModal: false,
                discTeamDynamicsReportModal: false,
                discTeamSummaryReportModal: false,
                discBehavioralTendenciesReportModal: false,
                discTeamWheelReportModal: false,
                discGroupGraphsModal: false,
                discCollaborationModal: false,
                disc360ReportModal: false,
                motSelfReportModal: false,
                motTeamReportsModal: false,
                motTeamReportModal: false,
                motTeamWheelReportModal: false,
                motDISCReportModal: false,
                eiqReportModal: false,
                discPluseiqReportModal: false,
                eiq360ReportModal: false,
                learningStylesReportModal: false,
                discPlusLearningStylesReportModal: false,
                salesIQReportModal: false,
                salesIQTeamReportModal: false,
                le360ReportModal: false
            }
        },
        head() {
            return {
                title: 'Sample Assessment Reports | Assessments 24x7',
                meta: [
                    {
                        hid: 'description',
                        name: 'description',
                        content: 'Assessments work by measuring a variety of criteria: intellectual ability, achievement motivation, skill proficiency, work styles, personality characteristics, and personal values. Download any of our sample PDF assessment reports.'
                    }
                ]
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import '~assets/scss/vars';

    .sample-reports {
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

        .section-hero {
            background-size: 200% 200%;
            animation: GradientFade 10s ease infinite;
            z-index: 0;
            position: relative;
            border-radius: 20px;
            margin-bottom: 20px;

            @keyframes GradientFade { 
                0% { background-position: 88% 0%; }
                50% { background-position: 13% 100%; }
                100% { background-position: 88% 0%; }
            }

            color: #fff;
            padding: 30px 24px 20px 24px;

            .globe-tex {
                position: absolute;
                z-index: -1;
                top: 0px;
                right: -350px;
                opacity: .5;
            }

            &.disc {
                background: #0249ec;
                background: linear-gradient(218deg, #0999fe, #0249ec, #0999fe);
            }

            &.mot {
                background: #fc542a;
                background: linear-gradient(218deg, #ffa518, #fc542a, #ffa518);
            }

            &.other {
                background: #1e222d;
                background: linear-gradient(218deg, #303542, #1e222d, #303542);
            }
        }

        .samples-container {
            position: relative;
            background: #fff;
            border-radius: 20px;
            padding: 24px 16px;
            box-shadow: 0 10px 20px rgba(0, 0, 0, .1);
            min-height: 200px;

            .coming-soon {
                background: #e93d2f;
                border-radius: 50%;
                color: #fff;
                width: 50px;
                height: 50px;
                font-size: 9pt;
                font-weight: 700;
                line-height: 18px;
                text-align: center;
                padding-top: 16px;
                position: absolute;
                top: -10px;
                right: -10px;
            }
        }

        .language-button {
            display: block;
            text-decoration: none;
            font-size: 8pt;
            font-weight: 600;
            cursor: pointer;
            transition: color .3s linear;
            margin-top: -6px;
            margin-bottom: -13px;
            color: #000;

            &.disc {
                color: #0033c5;
            }

            &.mot {
                color: #fc542a;
            }

            &.other {
                color: #303542;
            }
        }

        .hyperlink {
            display: inline-block;
            margin-bottom: 12px;
            box-shadow: none;
            font-weight: 400;
            line-height: 13pt;
            cursor: pointer;

            &.disabled {
                opacity: .1;
                cursor: not-allowed;
            }
        }

        h1 {
            font-size: 30pt;
            line-height: 34pt;
            margin-bottom: 0;
        }

        h2 {
            font-size: 24pt;
            line-height: 24pt;
            margin-bottom: 8px;
            margin-top: 0;
        }

        h3 {
            font-size: 17pt;
            line-height: 18pt;
            margin-bottom: 12px;
            margin-top: 0;
        }

        .modal-window {
            position: fixed;
            background-color: rgba(0,0,0,.6);
            top: 0;
            right: 0;
            bottom: 0;
            left: 0;
            z-index: 999999;
            transition: all 0.25s;

            .container {
                width: 100%;
                max-width: 600px;
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                padding: 40px 20px;
                background: #fff;

                .modal-close {
                    color: #aaa;
                    line-height: 50px;
                    font-size: 12pt;
                    position: absolute;
                    right: 0;
                    text-align: center;
                    top: 0;
                    width: 70px;
                    text-decoration: none;
                    cursor: pointer;

                    &:hover {
                        color: #000;
                    }
                }

                h1 {
                    margin: 0;
                    font-size: 18pt;
                }
            }
        }

        .fade-enter-active, .fade-leave-active {
            transition: opacity .5s;
        }
        
        .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
            opacity: 0;
        }
    }
</style>