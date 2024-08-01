<template>
    <section class="social-media-templates">
        <main-nav />
        <div class="wrapper">
            <div class="container hero">
                <div class="row rowItems">
                    <div class="col-8">
                        <div>
                            <img class="titleImage" src="~assets/iconTitle.png" alt="template icons">
                            <p class="titleText">
                                Utilize these branded Social Media templates in Canva to customize within your Canva Pro
                                Accounts for sharing on social media. Please be aware that the additional information is
                                provided exclusively for branding and language guidance; refrain from copying it
                                verbatim.
                            </p>
                        </div>
                    </div>
                    <div class="col-4">
                        <img class="image" src="~assets/template-icons.png" alt="template icons">
                    </div>
                </div>
            </div>
        </div>
        <div class="template-library">
            <div class="templateBanner">
                <h1>Promotional</h1>
            </div>
        </div>
        <br>
        <br>
        <div class="container">
            <div class="row">
                <div class="social-media-posts">
                    <div class="post" v-for="post in posts" :key="post.id"
                        :class="{ 'gray-background': post.id % 2 !== 0 }">
                        <div class="post-inner">
                            <div class="image-column">
                                <img class="image-column" :src="post.imageUrl" :alt="post.title">
                            </div>
                            <div class="text-column">
                                <div class="header">
                                    <a :href="post.canvaLink" class="templateTitle"> {{ post.title }} </a>
                                </div>
                                <div>
                                    <span class="templateSize">Template size:</span> {{ post.templateSize }}
                                    <hr>
                                    <span v-if="post.linkedPostAs" class="linkedPostAs"><img class="linkedInIcon"
                                            src="~/assets/linkedInIcon.png" alt="LinkedIn Icon"> Post as:</span> {{
                                                post.linkedPostAs }}
                                    <br>
                                    <span v-if="post.instaPostAs" class="instaPostAs"><img class="instagramIcon"
                                            src="~/assets/instagramIcon.png" alt="Instagram Icon"> Post as:</span> {{
                                                post.instaPostAs }}
                                    <br>
                                    <span v-if="post.ctaLink" class="ctaLink">CTA Link:</span> <a :href="post.ctaLink"
                                        class="hyperlink"> {{
                                            post.ctaLink }} </a>
                                    <br>
                                    <span class="caption">A24x7 Caption:
                                        <br>
                                    </span>
                                    <span @mouseover="hover = true" @mouseleave="hover = false"
                                        :title="hover ? post.caption : ''">
                                        {{ truncatedCaption(post.caption) }}
                                    </span>
                                    <button v-if="isCaptionTruncated(post.caption)"
                                        @click="copyText(post.caption)">Copy</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <br>
        <nuxt-link to="/resources/social-media-templates">
            <img class="backIcon" src="~assets/backIcon.png" alt="template icons">
        </nuxt-link>
        <br>
        <br>
        <footer-fold />
    </section>
</template>

<script>
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';

export default {
    middleware: 'auth',
    components: {
        'main-nav': Nav,
        'footer-fold': Footer
    },
    name: 'TemplateLibrary',
    data() {
        return {
            hover: false,
            posts: [
                {
                    id: 1,
                    title: 'Assessments Certification: Learn From The Top Assessment Experts In The Industry - LI-IG',
                    canvaLink: 'https://www.canva.com/design/DAF0WmnZxW0/DnP1y9rvNe30ZSekmQ3fQQ/view?utm_content=DAF0WmnZxW0&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink&mode=preview',
                    imageUrl: 'https://cdn.assessments24x7.com/file/assessments24x7-media/social-media-templates/6TemplateImage.png',
                    templateSize: '1200 x 1200',
                    linkedPostAs: 'Image',
                    instaPostAs: 'Image',
                    ctaLink: 'https://www.assessments24x7.com/certifications/assessment',
                    caption: `There are sooo many great reasons to get certified! Here are just a few.`,
                    postCategory: 'Promotional'
                },
                {
                    id: 2,
                    title: 'Bet on Yourself with DISC Certification - LI-IG',
                    canvaLink: 'https://www.canva.com/design/DAF0JBRApr8/TXhkJ9yXnNz8iL5AKj9yjQ/view?utm_content=DAF0JBRApr8&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink&mode=preview',
                    imageUrl: 'https://cdn.assessments24x7.com/file/assessments24x7-media/social-media-templates/12aTemplateImage.png',
                    templateSize: '1200 x 1200',
                    linkedPostAs: 'Video',
                    instaPostAs: 'Video',
                    ctaLink: 'https://www.assessments24x7.com/contact',
                    caption: `Ready to Take Your Shot? Bet on yourself with DISC Certification.
Don't miss out on this opportunity to supercharge your career and relationships. Get in touch with a Senior Account Executive today to get started.

➡️ https://lnkd.in/g2CAaRtc

#DISC #DISCprofile #DISCcertification #coaching #communication`,
                    postCategory: 'Promotional'
                },
                {
                    id: 3,
                    title: 'Bet on Yourself with DISC Certification - IG',
                    canvaLink: 'https://www.canva.com/design/DAFvw0acs84/D-lMmjcYzrqgTjZQEj4pmQ/view?utm_content=DAFvw0acs84&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink&mode=preview',
                    imageUrl: 'https://cdn.assessments24x7.com/file/assessments24x7-media/social-media-templates/12bTemplateImage.png',
                    templateSize: '1080 x 1920',
                    linkedPostAs: '',
                    instaPostAs: 'Reel',
                    ctaLink: 'https://www.assessments24x7.com/contact',
                    caption: `Ready to Take Your Shot? Bet on yourself with DISC Certification.
Don't miss out on this opportunity to supercharge your career and relationships. Get in touch with a Senior Account Executive today to get started.

➡️ https://lnkd.in/g2CAaRtc

#DISC #DISCprofile #DISCcertification #coaching #communication`,
                    postCategory: 'Promotional'
                },
                {
                    id: 4,
                    title: 'DISC Blocks - LI-IG',
                    canvaLink: 'https://www.canva.com/design/DAF0Kz-4Mkw/i9Hxb5d9Ne5v3TEMTcv8BQ/view?utm_content=DAF0Kz-4Mkw&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink&mode=preview',
                    imageUrl: 'https://cdn.assessments24x7.com/file/assessments24x7-media/social-media-templates/20aTemplateImage.png',
                    templateSize: '1200 x 1200',
                    linkedPostAs: 'Image',
                    instaPostAs: 'Image',
                    ctaLink: 'https://store.assessments24x7.com/products/disc-blocks',
                    caption: `No Caption - Have only posted the Christmas Version`,
                    postCategory: 'Promotional'
                },
                {
                    id: 5,
                    title: 'DISC Blocks - Christmas Version - LI-IG',
                    canvaLink: 'https://www.canva.com/design/DAF0K0gtAT8/x00SwJY4MQXsDC2I4moEsw/view?utm_content=DAF0K0gtAT8&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink&mode=preview',
                    imageUrl: 'https://cdn.assessments24x7.com/file/assessments24x7-media/social-media-templates/20bTemplateImage.png',
                    templateSize: '1200 x 1200',
                    linkedPostAs: 'Image',
                    instaPostAs: 'Image',
                    ctaLink: 'https://store.assessments24x7.com/products/disc-blocks',
                    caption: `🎁 Introducing our DISC Blocks - the perfect stocking stuffers that will help
your team connect, communicate, and collaborate more effectively.

🚀 Enhance Communication: Stack your DISC Blocks to display your style and supercharge interactions.

🤝 Boost Team Dynamics: Understanding DISC styles minimizes conflicts and fuels teamwork.

🧠 Personalized Learning: Visual aids for meetings and training, fostering better results.

🌈 Stress Relief: Squishy and calming - a must-have for busy workdays.

This holiday, go the extra mile and give the gift of improved communication and collaboration. Order now at the link below or in our story before the season rushes in! 🎄🎉

🔗 Order Now: https://store.assessments24x7.com/products/disc-blocks

#TeamDevelopment #DISCBlocks #EffectiveCommunication #DISC #DISCStyle #traininganddevelopment #leadershipdevelopment #coaching #hr #businessdevelopment`,
                    postCategory: 'Promotional'
                },
                {
                    id: 6,
                    title: 'Reach Limitless Opportunities - DISC Certification - LI-IG',
                    canvaLink: 'https://www.canva.com/design/DAF0EwjBAfk/p_N428Nea71gF63_Yffjpg/view?utm_content=DAF0EwjBAfk&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink&mode=preview',
                    imageUrl: 'https://cdn.assessments24x7.com/file/assessments24x7-media/social-media-templates/26TemplateImage.png',
                    templateSize: '1200 x 1200',
                    linkedPostAs: 'Video',
                    instaPostAs: 'Video',
                    ctaLink: '',
                    caption: `Elevate your career with a distinct advantage by earning a professional Certification in the assessment industry. 🚀 Our flexible Certification program fits seamlessly into your schedule, allowing you to learn at your own pace, day or night. Whether you're considering a career change, aiming for a promotion, or venturing into a new industry, our core assessments - DISC, Motivators, and Emotional Intelligence - are versatile and applicable across diverse roles. #SHRM #HRCI #ATD #ICF approved, our Certifications empower you to stand out. 

Certified already? 
Share in the comments how DISC, Motivators, or EIQ Certification has made a difference in your professional journey and personal growth. 👩‍🎓👨‍🎓 

#CareerAdvancement #ProfessionalDevelopment #CertificationSuccess #Continuingeducation #DISC #Motivators #EIQ #EmotionalIntelligence #Assessments24x7`,
                    postCategory: 'Promotional'
                },
                {
                    id: 7,
                    title: 'Christmas Version DISC Blocks - LI-IG',
                    canvaLink: 'https://www.canva.com/design/DAF28p35FK4/cCRE2c3EP72UYNo56QUI6w/view?utm_content=DAF28p35FK4&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink&mode=preview',
                    imageUrl: 'https://cdn.assessments24x7.com/file/assessments24x7-media/social-media-templates/34aTemplateImage.png',
                    templateSize: '1200 x 1200',
                    linkedPostAs: 'Image',
                    instaPostAs: 'Image',
                    ctaLink: 'https://store.assessments24x7.com/products/disc-blocks',
                    caption: `The Holidays are HERE, and there’s no better time to enhance your Team’s communication and collaboration skills than now. Our DISC Blocks are the perfect stocking stuffers that will help your team connect, communicate, and collaborate more effectively.

🚀 Enhance Communication: Stack your DISC Blocks to display your style and supercharge interactions.
🤝 Boost Team Dynamics: Understanding DISC styles minimizes conflicts and fuels teamwork.
🧠 Personalized Learning: Visual aids for meetings and training, fostering better results.
🌈 Stress Relief: Squishy and calming - a must-have for busy workdays.

This holiday, go the extra mile and give the gift of improved communication and collaboration. Check our story or see below for a direct link to order before it’s too late.
🎄🎉 🔗 https://store.assessments24x7.com/products/disc-blocks

#TeamDevelopment #DISCBlocks #EffectiveCommunication #DISC #DISCStyle #traininganddevelopment #leadershipdevelopment #coaching #hr #businessdevelopment`,
                    postCategory: 'Promotional'
                },
                {
                    id: 8,
                    title: 'Christmas Version DISC Blocks - IG',
                    canvaLink: 'https://www.canva.com/design/DAF288Ame5g/TEjRNidoH3U0k7C0s5Ddug/view?utm_content=DAF288Ame5g&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink&mode=preview',
                    imageUrl: 'https://cdn.assessments24x7.com/file/assessments24x7-media/social-media-templates/34aTemplateImage.png',
                    templateSize: '1080 x 1920',
                    linkedPostAs: '',
                    instaPostAs: 'Reel',
                    ctaLink: 'https://store.assessments24x7.com/products/disc-blocks',
                    caption: `The Holidays are HERE, and there’s no better time to enhance your Team’s communication and collaboration skills than now. Our DISC Blocks are the perfect stocking stuffers that will help your team connect, communicate, and collaborate more effectively.

🚀 Enhance Communication: Stack your DISC Blocks to display your style and supercharge interactions.
🤝 Boost Team Dynamics: Understanding DISC styles minimizes conflicts and fuels teamwork.
🧠 Personalized Learning: Visual aids for meetings and training, fostering better results.
🌈 Stress Relief: Squishy and calming - a must-have for busy workdays.

This holiday, go the extra mile and give the gift of improved communication and collaboration. Check our story or see below for a direct link to order before it’s too late.
🎄🎉 🔗 https://store.assessments24x7.com/products/disc-blocks

#TeamDevelopment #DISCBlocks #EffectiveCommunication #DISC #DISCStyle #traininganddevelopment #leadershipdevelopment #coaching #hr #businessdevelopment`,
                    postCategory: 'Promotional'
                },
                {
                    id: 9,
                    title: 'Yearly reflections Post - 25 Million Assessments - LI-IG',
                    canvaLink: 'https://www.canva.com/design/DAF4MZNNAqs/unO3ejgm6qCfn_Veb3H8xg/view?utm_content=DAF4MZNNAqs&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink&mode=preview',
                    imageUrl: 'https://cdn.assessments24x7.com/file/assessments24x7-media/social-media-templates/39TemplateImage.png',
                    templateSize: '1200 x 1200',
                    linkedPostAs: 'Image',
                    instaPostAs: 'Image',
                    ctaLink: '',
                    caption: `💭 Did you know that Assessments 24x7 powers millions of assessments globally?

🚀 Our assessment technology is trusted by leading organizations and coaches to shape their strategies for hiring & selection, performance evaluations, skills training, team-building, conflict management, promotion & succession planning, organizational restructuring, employee retention, and leadership development.

💼 With over 20 years in business, a team of 21 dedicated employees, and 1,300+ Certified Practitioners, we've been a reliable partner for companies both big and small.

Message us today to explore how can we help position you for maximum success in 2024.

🚀 #Assessments24x7 #Reflections #ContinuingEducation #DISCCertification #EIQCertification #MotivatorsCertification #DISC #EIQ #Motivators #CommunicationSuccess #Businessdevelopment #HR #TrainingDevelopment`,
                    postCategory: 'Promotional'
                },
                {
                    id: 10,
                    title: 'Testimonial - Doug Bowersock - Part 1  - IG-LI',
                    canvaLink: 'https://www.canva.com/design/DAGFxBskPW4/UvxdgChoIk69oau9LFk6lg/view?utm_content=DAGFxBskPW4&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink&mode=preview',
                    imageUrl: 'https://cdn.assessments24x7.com/file/assessments24x7-media/social-media-templates/42TemplateImage.png',
                    templateSize: '1200 x 1200',
                    linkedPostAs: 'Image',
                    instaPostAs: 'Image',
                    ctaLink: '',
                    caption: `Client success stories like this are the heartbeat of our unwavering commitment. Take charge of your success in 2024 with the
Assessments 24x7 difference -
✨ White-Labeled Assessments: Tailored to your brand
🖥️ Effortless Dashboard Management
📚 Complimentary Access to Versatile Training Materials
Plus, elevate your expertise with our self-paced virtual certifications offering Continuing Education Credits with ICF, SHRM, HRCI, and ATD.

Let's explore how you can transform your impact with Assessments in 2024 and beyond. https://www.assessments24x7.com/contact

#HR #TrainingandDevelopment #LeadershipDevelopment #TeamTraining #Consulting #CertifiedExcellence #2024Goals #GrowthMindset #Assessments #Datadriven #DISCCommunication #DISCAssessment #Assessments24x7 #SHRM #ICF #HRCI #ATD Certified #DISCCertification`,
                    postCategory: 'Promotional'
                },
                {
                    id: 11,
                    title: 'Testimonial - Doug Bowersock - Part 2- IG-LI',
                    canvaLink: 'https://www.canva.com/design/DAF41gBN8FI/IninhDjoe10ZsbdAQJKJLQ/view?utm_content=DAF41gBN8FI&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink&mode=preview',
                    imageUrl: 'https://cdn.assessments24x7.com/file/assessments24x7-media/social-media-templates/48TemplateImage.png',
                    templateSize: '1200 x 1200',
                    linkedPostAs: 'Image',
                    instaPostAs: 'Image',
                    ctaLink: '',
                    caption: `We have partnered with thousands of coaches and consultants to power their businesses. Our white-labeled dashboard comes fully equipped to deliver 50+ assessments and reports, while also providing the tools to take a business to the next level. Members receive access to our entire suite of validated products and reports, including our most productive and foundational DISC Assessment.

Get in touch with a dedicated specialist today to discuss how we can support your 2024 objectives with our Assessment Technology today. https://www.assessments24x7.com/contact

#BusinessEmpowerment #AssessmentTechnology #StrategicPartnership #BusinessGrowth #CoachingCommunity #LeadershipDevelopment #DISCAssessment #ClientSuccess #StrategicConsulting #ProfessionalDevelopment #Behavioralassessments #ContinuedEducation #DISCCertification #Assessments24x7`,
                    postCategory: 'Promotional'
                },
                {
                    id: 12,
                    title: 'How to Start a private Labeled Assessment Company',
                    canvaLink: 'https://www.canva.com/design/DAF_36KTstg/cYKoonzTk2xtOd19XfCejQ/view?utm_content=DAF_36KTstg&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink&mode=preview',
                    imageUrl: 'https://cdn.assessments24x7.com/file/assessments24x7-media/social-media-templates/60TemplateImage.png',
                    templateSize: '1200 x 1200',
                    linkedPostAs: 'Image',
                    instaPostAs: 'Image',
                    ctaLink: '',
                    caption: `Starting a Private Labeled Assessment Business is this easy. ✨ Gain immediate access to our suite of assessments via a tailored online dashboard. Customize reports to stand out in your industry and infuse them with your unique content. With full control over design elements, including headers and footers, you’ll seamlessly integrate your branding. Experience unparalleled customization – it’s time to make your mark with Assessments 24x7. Send us a dm to take that next step. 💼🌟

#executivecoaching #salestraining #Assessments #Customization #Branding #UnlockPotential #DISCCertification #AssessmentExpert #CareerDevelopment #ProfessionalGrowth #InvestInYourself #ContinuedEducation #Assessments24x7`,
                    postCategory: 'Promotional'
                },
                {
                    id: 13,
                    title: 'Did you know - LI-IG',
                    canvaLink: 'https://www.canva.com/design/DAF_5MQz660/9GrlVoYtluU98hE1k2l6Ew/view?utm_content=DAF_5MQz660&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink&mode=preview',
                    imageUrl: 'https://cdn.assessments24x7.com/file/assessments24x7-media/social-media-templates/62TemplateImage.png',
                    templateSize: '1200 x 1200',
                    linkedPostAs: 'Image',
                    instaPostAs: 'Image',
                    ctaLink: '',
                    caption: `This just scratches the surface of our customization capability. Including your branding and mission statement on the cover not only enhances your professional image but also reinforces your identity and ownership over the assessments. This level of customization is invaluable for large corporations looking to maintain consistency across their branding and messaging, as well as for independent coaches who want to establish themselves as authoritative figures in their field by private labeling the assessments. How does this sound to you?

#Customization #Branding #UnlockPotential #DISCCertification #AssessmentExpert #CareerDevelopment #ProfessionalGrowth #InvestInYourself #ContinuedEducation #Assessments24x7`,
                    postCategory: 'Promotional'
                },
                {
                    id: 14,
                    title: 'Customizations - LI-IG',
                    canvaLink: 'https://www.canva.com/design/DAGEp1QKxnY/cQQJ-qs0i5HNBPQ2Jne0Hg/view?utm_content=DAGEp1QKxnY&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink&mode=preview',
                    imageUrl: 'https://cdn.assessments24x7.com/file/assessments24x7-media/social-media-templates/68TemplateImage.png',
                    templateSize: '1200 x 1200',
                    linkedPostAs: 'Image',
                    instaPostAs: 'Image',
                    ctaLink: '',
                    caption: `Did you know? At Assessments 24x7, we’re more than just Assessments and Certification; we’re your ultimate Assessment Technology customization partner. From API integration to personalized reports, user experience, and domain-specific customization, we empower you to tailor assessments to your exact needs. Let’s explore how we can elevate your business together! #UnlockPotential #Assessments #Assessemnttechnology #Customizations #AssessmentExpert #CareerDevelopment #ProfessionalGrowth #InvestInYourself #Businessdevelopment #Assessments24x7`,
                    postCategory: 'Promotional'
                },
                {
                    id: 15,
                    title: 'Meet DISC Awareness Post - LI-IG',
                    canvaLink: 'https://www.canva.com/design/DAGHwHrun74/TBVds6PruZDZVvH4Rn8jiA/view?utm_content=DAGHwHrun74&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink&mode=preview',
                    imageUrl: 'https://cdn.assessments24x7.com/file/assessments24x7-media/social-media-templates/71TemplateImage.jpg',
                    templateSize: '1200 x 1200',
                    linkedPostAs: 'Video',
                    instaPostAs: 'Video',
                    ctaLink: '',
                    caption: `Have you heard about our newest assessment? 🌟 Meet DISC Awareness!

This groundbreaking tool seamlessly combines the DISC assessment you know and love with modified Emotional Intelligence (EI) insights to give you a deeper, more holistic understanding of communication styles, observable behavior, and emotions! While DISC and Emotional Intelligence are powerful assessments on their own, together, they offer a deeper exploration of parts of your personality, as well as useful self-awareness resources and suggestions for building stronger interpersonal relationships and interactions.

Discover personalized insights to enhance self-recognition, self-management, social recognition, and social management based on your DISC style blend. Elevate your communication effectiveness with tailored, actionable strategies and tips for personal and professional growth and development!

Ready to experience the power of DISC and Emotional Intelligence (EI) in one integrated report? Download a Sample Report 🔗 https://cdn.assessments24x7.com/file/assessments24x7-media/reports/Report_Sample_DISC_Awareness_(EI).pdf.

Contact us today to open an account and tap into the power of assessment technology. https://www.assessments24x7.com/contact

#DISCAwareness #EmotionalIntelligence #IntegratedAssessment #CommunicationSkills #SelfAwareness #HolisticPersonality #DISC #DISCProfile #Assessment24x7`,
                    postCategory: 'Promotional'
                },
                {
                    id: 16,
                    title: '25+ Languages',
                    canvaLink: 'https://www.canva.com/design/DAGHxCcz3Fk/V_lrx6cTOkqUjmTG5cOYCw/view?utm_content=DAGHxCcz3Fk&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink&mode=preview',
                    imageUrl: 'https://cdn.assessments24x7.com/file/assessments24x7-media/social-media-templates/72TemplateImage.png',
                    templateSize: '1200 x 1200',
                    linkedPostAs: 'Video',
                    instaPostAs: 'Video',
                    ctaLink: '',
                    caption: `🌍 DISC Assessment in 25+ Languages! 🌍 We are proud to offer our hashtag#DISC assessment in over 25 languages, helping millions worldwide better understand their communication styles. Whether you're aiming to enhance team dynamics, improve leadership skills, or foster personal growth, our hashtag#multilingual DISC assessment is your gateway to success.
Ready to unleash the power of our Assessment Technology? Connect with us today to learn how you can open an account. Be sure to ask about our private labeling and hashtag#API capabilities. `,
                    postCategory: 'Promotional'
                },
                {
                    id: 17,
                    title: 'DISC Workplace Insights',
                    canvaLink: 'https://www.canva.com/design/DAGJDmBrDK8/6_Xg_qgA2JRg6IGiFfm6lQ/view?utm_content=DAGJDmBrDK8&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink&mode=preview',
                    imageUrl: 'https://cdn.assessments24x7.com/file/assessments24x7-media/social-media-templates/73TemplateImage.png',
                    templateSize: '1200 x 1200',
                    linkedPostAs: 'Video',
                    instaPostAs: 'Video',
                    ctaLink: '',
                    caption: `🌟 Transform Your HR Management with One of Our Newest Assessments! 🌟
Fresh from our showcase last week at hashtag#SHRM 2024, the hashtag#DISC Workplace Insights Report merges DISC with Critical Thinking (HVP) to redefine how you manage and develop your team. This innovative approach examines key factors like collaboration, stress response, and accountability, providing hashtag#HR professionals and hashtag#managers with essential insights to elevate your workforce. 🔄📈
Optimize your team configuration, enhance hashtag#recruitment precision, and design targeted development programs. It’s time to elevate your workplace dynamics and achieve operational excellence.
🔗 Discover the impact of the DISC Workplace Insights: https://lnkd.in/eMhdHEgz

hashtag#SHRM24 hashtag#HRInnovation hashtag#TeamDynamics hashtag#DISCProfile hashtag#DISCinsights hashtag#Criticalthinking hashtag#HireSmart hashtag#Assessments24x7`,
                    postCategory: 'Promotional'
                },
                {
                    id: 18,
                    title: 'DISC Executive Insights',
                    canvaLink: 'https://www.canva.com/design/DAGJinKmhjY/V2Tp5ujk1uh5jsn50pEcxg/view?utm_content=DAGJinKmhjY&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink&mode=preview',
                    imageUrl: 'https://cdn.assessments24x7.com/file/assessments24x7-media/social-media-templates/74TemplateImage.png',
                    templateSize: '1200 x 1200',
                    linkedPostAs: 'Video',
                    instaPostAs: 'Video',
                    ctaLink: '',
                    caption: `🌟 Discover Leadership Excellence with another recent Assessment Release! 🌟
Introducing the DISC Executive Insights Report, a comprehensive tool we featured at hashtag#SHRM 2024! This report merges hashtag#DISC, hashtag#Motivators, and Critical Thinking (HVP) to provide an in-depth analysis tailored for executives and leaders. 📊🤝

Gain greater insights into your self-awareness, enhance your communication skills, and develop strategic plans that align with your leadership approach. Elevate your organizational influence and reach for new levels of success. 
🔗 Explore how the DISC Executive Insights can enhance your leadership journey: 🔗 https://lnkd.in/eAchQvdd

hashtag#SHRM24 hashtag#LeadershipDevelopment hashtag#DISCInsights hashtag#DISCProfile hashtag#Assessments24x7`,
                    postCategory: 'Promotional'
                }
            ]
        };
    },
    created() {
        this.copyText = function (text) {
            if (navigator.clipboard) {
                navigator.clipboard.writeText(text)
                    .then(() => {
                        alert('Text copied to clipboard');
                    })
                    .catch(err => {
                        console.error('Error in copying text: ', err);
                    });
            } else {
                console.log('Clipboard feature not available');
            }
        };
    },
    methods: {
        truncatedCaption(caption) {
            return caption.length > 180 ? caption.substring(0, 180) + '...' : caption;
        },
        isCaptionTruncated(caption) {
            const maxLength = 180;
            return caption.length > maxLength;
        },
    },
    head() {
        return {
            title: 'Social Media Templates - Promotional | Assessments 24x7',
            meta: [
                {
                    hid: 'description',
                    name: 'description',
                    content: 'Enhance your social media presence using our branded templates on Canva. Customize these professionally crafted designs to incorporate your preferred language, logos, and more within your Canva Pro Account. Leverage the provided information exclusively for branding guidance, maintaining authenticity by avoiding verbatim copying. Establish credibility and captivate your audience with visually stunning content that resonates. Elevate your brand effortlessly!'
                }
            ]
        }
    },
}
</script>

<style lang="scss" scoped>
.social-media-posts {
    display: flex;
    flex-direction: column;
}

.post {
    margin-bottom: 20px;
}

.post-inner {
    max-height: 260px;
    display: flex;
    flex-direction: row;
    padding: 10px 0;
}

.image-column {
    flex-basis: 20%;
    padding: 10px;
    text-align: center;
    max-width: 80%;
    max-height: 100%;
}

.image-column img {
    display: block;
    margin-left: auto;
    margin-right: auto;
}

.text-column {
    flex-basis: 80%;
    padding: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

.templateTitle {
    color: #1666ff;
    text-decoration: underline;
}

.templateSize {
    font-weight: bold;
}

.linkedInIcon {
    max-width: 20px;
    margin-right: 5px;
}

.linkedPostAs {
    font-weight: bold;
}

.instagramIcon {
    max-width: 30px;
    margin-left: -5px;
}

.instaPostAs {
    font-weight: bold;
}

.ctaLink {
    font-weight: bold;
}

.caption {
    font-weight: bold;
}

.header h4 {
    margin: 0;
    padding: 0;
}

.gray-background {
    background-color: #f0f0f0;
}

.col-4 {
    display: flex;
    justify-content: center;
}

.col-4 img {
    display: block;
    margin-left: auto;
    margin-right: auto;
}

.col-8 {
    padding: 0 20px;
}

.hero {
    padding: 30px 20px;
    min-height: 300px;
}

.titleText {
    margin-left: 20px;
}

.titleImage {
    width: 100%;
    margin-left: -30px;
}

.image {
    padding: 20px 0;
}

.templateBanner {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    background-color: #1666ff;
    height: 60pt;
    color: white;
    font-size: 20pt;
}

.template-library {
    text-align: center;
}

.backIcon {
    display: flex;
    margin: 0 auto;
    cursor: pointer;
}

@media (max-width: 1200px) {
    .post-inner {
        max-height: none;
    }

    .backIcon {
        max-width: 60%;
    }
}

@media (max-width: 750px) {

    .templateBanner {
        font-size: medium;
    }

    .post-inner {
        flex-direction: column;
    }

    .image-column,
    .text-column {
        flex-basis: 100%;
        max-width: 100%;
    }

    .image-column img {
        display: block;
        margin-left: auto;
        margin-right: auto;
        width: 50%;
    }
}
</style>