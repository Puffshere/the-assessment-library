<template>
    <section class="partners">
        <main-nav />

        <transition name="fade">
            <section v-if="isOpen" class="account-modal-window">
                <div class="container">
                    <a href="#" title="Close" class="modal-close" @click="close">Close</a>
                    <span>
                        <img v-if="id === 'aus'" class="partner-logo" src="~/assets/partner-logos/australasia-logo.png"
                            alt="Australasia partners with Assessments 24x7">
                        <img v-if="id === 'neth_bel'" class="partner-logo"
                            src="~/assets/partner-logos/netherlands-belgium-logo.png"
                            alt="Netherlands Belgium partners with Assessments 24x7">
                        <img v-if="id === 'eur'" class="partner-logo" src="~/assets/partner-logos/europe-logo.png"
                            alt="Europe partners with Assessments 24x7">
                        <img v-if="id === 'viet'" class="partner-logo" src="~/assets/partner-logos/vietnam-logo.png"
                            alt="Vietnam partners with Assessments 24x7">
                        <h4 class="subText">For more information on this partner please fill out the form below:</h4>
                    </span>
                    <div class="row">
                        <div class="col-12">
                            <contact-form buttonText="Request an Account" redirect="/get-started-thankyou"
                                :isShort="true" :isGetStarted="true" acFormId="2" :getStartedId="id" />
                        </div>
                    </div>
                </div>
            </section>
        </transition>

        <section class="header">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <h1 class="section-title">Assessments 24x7 Partners</h1>
                        <p>
                            Our partnerships are one of the cornerstones of our company and we are pleased to feature a
                            few of them here. They've taken our
                            assessment customization to the next level in some very creative ways, and they all provide
                            the high quality assessment
                            products that you would expect from an Assessments 24x7 partner.
                        </p>
                    </div>
                </div>
            </div>
        </section>

        <div class="container">
            <div class="row">
                <div class="col-12">
                    <img class="report-spread-image" src="~/assets/partner-sample-report-spread.png"
                        alt="Assessments 24x7 Partners">
                </div>
            </div>
        </div>

        <section class="partner-list">
            <div class="container">
                <h2>Affiliate Partners</h2>
                <hr />
                <div class="row">
                    <div id="id" class="partner">
                        <div class="col-6">
                            <img class="logo" src="~/assets/partner-logos/australasia-logo.png"
                                alt="Australasia partners with Assessments 24x7">
                            <div class="countries">
                                <h4 class="countriesCovered">
                                    Countries Covered:
                                </h4>
                                <div style="display: flex; flex-direction: row;">
                                    <ul style="flex: 1;">
                                        <li>Australia</li>
                                        <li>New Zealand</li>
                                        <li>Papua New Guinea</li>
                                        <li>Solomon Islands</li>
                                        <li>Nauru</li>
                                        <li>Vanuatu</li>
                                        <li>New Caledonia</li>
                                    </ul>
                                    <ul style="flex: 1;">
                                        <li>Fiij</li>
                                        <li>Tonga</li>
                                        <li>Cook Islands</li>
                                        <li>Samoa</li>
                                        <li>Tuvalu</li>
                                        <li>Tokelau</li>
                                        <li>Tahiti</li>
                                        <li>Easter Island</li>
                                    </ul>
                                </div>
                            </div>
                            <br />
                            <a href="#" title="Open" class="modal-open hyperlink" @click="open('aus')">Learn more!</a>
                        </div>
                    </div>
                    <div class="partner">
                        <div class="col-6">
                            <img class="logo" src="~/assets/partner-logos/europe-logo.png"
                                alt="Europe partners with Assessments 24x7">
                            <div class="countries">
                                <h4 class="countriesCovered">
                                    Countries Covered:
                                </h4>
                                <div style="display: flex; flex-direction: row;">
                                    <ul style="flex: 1;">
                                        <li>Algeria</li>
                                        <li>Dahomey</li>
                                        <li>Enclaves of Forcados and Badjibo</li>
                                        <li>France</li>
                                        <li>French Sudan</li>
                                        <li>French Togoland</li>
                                        <li>Guinea</li>
                                        <li>Italy</li>
                                        <li>Ivory Coast/Senegal/Cameroon</li>
                                    </ul>
                                    <ul style="flex: 1;">
                                        <li>Mauritania</li>
                                        <li>Morocco</li>
                                        <li>Niger</li>
                                        <li>Senegal</li>
                                        <li>Switzerland</li>
                                        <li>Tunisia</li>
                                        <li>Upper Volta</li>
                                        <li>Germany</li>
                                        <li>Poland</li>
                                        <li>Portugal</li>
                                        <li>Spain</li>
                                    </ul>
                                </div>
                            </div>
                            <br />
                            <a href="#" title="Open" class="modal-open hyperlink" @click="open('eur')">Learn more!</a>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="partner">
                        <div class="col-6">
                            <img class="logo" src="~/assets/partner-logos/vietnam-logo.png"
                                alt="Vietnam partners with Assessments 24x7">
                            <div class="countries">
                                <h4 class="countriesCovered">
                                    Countries Covered:
                                </h4>
                                <div style="display: flex; flex-direction: row;">
                                    <ul style="flex: 1;">
                                        <li>Cambodia</li>
                                        <li>Indonesia</li>
                                        <li>Laos</li>
                                        <li>Malaysia</li>
                                    </ul>
                                    <ul style="flex: 1;">
                                        <li>Philippines</li>
                                        <li>Singapore</li>
                                        <li>Taiwan</li>
                                        <li>Thailand</li>
                                        <li>Vietnam</li>
                                    </ul>
                                </div>
                            </div>
                            <br />
                            <a href="#" title="Open" class="modal-open hyperlink" @click="open('viet')">Learn more!</a>
                        </div>
                    </div>

                    <div class="partner">
                        <div class="col-6">
                            <img class="logo" src="~/assets/partner-logos/netherlands-belgium-logo.png"
                                alt="Netherlands Belgium partners with Assessments 24x7">
                            <div class="countries">
                                <h4 class="countriesCovered">
                                    Countries Covered:
                                </h4>
                                <ul>
                                    <li>Netherlands</li>
                                    <li>Dutch-speaking Aruba</li>
                                    <li>Suriname</li>
                                    <li>Sint-Maarten</li>
                                    <li>Curaçao</li>
                                    <li>Bonaire</li>
                                    <li>Sint-Eustatius</li>
                                    <li>Saba</li>
                                    <li>Dutch-speaking Belgium including Brussels</li>
                                </ul>
                            </div>
                            <br />
                            <a href="#" title="Open" class="modal-open hyperlink" @click="open('neth_bel')">Learn
                                more!</a>
                        </div>
                    </div>
                </div>
                <br />
                <div class="row" id="technologyPartnersSection">
                    <h2>Technology Partners</h2>
                    <hr />
                    <br />
                    <br />
                    <div class="row aqSection">
                        <div class="partner">
                            <div :class="aqReadMoreModal ? 'col-12' : 'col-6'">
                                <img class="logo" src="~/assets/partner-logos/AQ - main website logo.png"
                                    alt="DISC Daily partners with Assessments 24x7">
                                <p class="bio">
                                    Answer Intelligence (AQ) presents a strategic framework for elevating business
                                    communication by addressing key challenges faced by organizations, including
                                    talent
                                    management, digital transformation, sustainability, economic uncertainty,
                                    cybersecurity, and supply chain resilience.
                                    <br />
                                    <span v-if="aqReadMoreModal === false" class="hyperlink" style="cursor: pointer"
                                        @click="aqReadMoreModal = !aqReadMoreModal">Read More!</span> 
                                    <span v-else class="hyperlink" style="cursor: pointer"
                                        @click="aqCloseReadMoreModal">Read Less!</span> 
                                </p>
                                <p v-if="aqReadMoreModal">
                                    It leverages a combination of six
                                    answer
                                    types—concept, theory, metaphor, story, procedure, action—mapped to important
                                    questions (why, what, how, when, where, who) to provide comprehensive and
                                    effective
                                    communication strategies. This innovative approach enhances problem-solving,
                                    boosts
                                    confidence, saves time and resources, and is versatile across various
                                    professional
                                    and personal settings.
                                </p>
                                <div v-if="aqReadMoreModal === true">
                                    <div class="row">
                                        <div class="col-12">
                                            <p>
                                                <span style="font-weight: bold;">Advantages of Integrating AQ with DISC
                                                    Assessment</span>
                                            </p>
                                            <p>
                                                Pairing AQ with the DISC assessment offers a holistic approach to
                                                understanding and
                                                improving interpersonal and organizational communication. DISC focuses
                                                on
                                                understanding personality behavior styles—Dominance, Influence,
                                                Steadiness,
                                                Compliance—providing insights into how individuals prefer to communicate
                                                and
                                                interact. In partnership, AQ and DISC can:
                                            </p>

                                            <ol>
                                                <li>
                                                    <span style="font-weight: bold;">Enhance Communication
                                                        Effectiveness:</span> DISC provides insights into
                                                    the
                                                    behavioral
                                                    styles of individuals, while AQ offers strategies to tailor
                                                    communication to these
                                                    styles, leading to more effective and impactful interactions.
                                                </li>
                                                <li>
                                                    <span style="font-weight: bold;">Improve Team Collaboration:</span>
                                                    Understanding the diverse
                                                    communication
                                                    needs and
                                                    preferences through DISC, combined with AQ's framework for answering
                                                    important
                                                    questions, can foster better teamwork and collaboration.
                                                </li>
                                                <li>
                                                    <span style="font-weight: bold;">Facilitate Leadership and
                                                        Management:</span> Leaders can leverage DISC
                                                    to
                                                    understand
                                                    their own leadership style and their team's behavioral tendencies,
                                                    and
                                                    use AQ to
                                                    communicate vision, expectations, and feedback more effectively.
                                                </li>
                                                <li>
                                                    <span style="font-weight: bold;">Boost Conflict Resolution:</span>
                                                    DISC helps identify potential sources
                                                    of
                                                    conflict
                                                    based on behavioral styles, and AQ offers the tools to navigate
                                                    these
                                                    conflicts
                                                    through tailored communication and problem-solving approaches.
                                                </li>
                                                <li>
                                                    <span style="font-weight: bold;">Enhance Training and
                                                        Development:</span> Integrating DISC insights into
                                                    AQ
                                                    training can
                                                    create more personalized and effective development programs,
                                                    catering to
                                                    the
                                                    specific communication and behavioral needs of individuals and
                                                    teams.
                                                </li>
                                            </ol>

                                            <p>
                                                <span style="font-weight: bold;">Ways AQ Can Complement the DISC
                                                    Customer Proposition</span>
                                            </p>

                                            <ol>
                                                <li>
                                                    <span style="font-weight: bold;">Personalized Communication
                                                        Strategies:</span> AQ can be used to develop
                                                    tailored
                                                    communication strategies that align with the behavioral styles
                                                    identified by DISC,
                                                    enhancing the clarity and impact of messages.
                                                </li>
                                                <li>
                                                    <span style="font-weight: bold;">Enhanced Sales and Negotiation
                                                        Techniques:</span> By understanding the
                                                    DISC
                                                    profiles of
                                                    clients or negotiation partners, AQ can guide sales professionals
                                                    and
                                                    negotiators in
                                                    choosing the most effective types of answers and communication
                                                    styles to
                                                    persuade
                                                    and influence.
                                                </li>
                                                <li>
                                                    <span style="font-weight: bold;">Improved Customer Service:</span>
                                                    Customer service teams can apply DISC
                                                    to
                                                    understand
                                                    customer behavior patterns and AQ to adapt their communication
                                                    approach,
                                                    leading to
                                                    increased customer satisfaction and loyalty.
                                                </li>
                                                <li>
                                                    <span style="font-weight: bold;">Leadership Development:</span>
                                                    Integrating AQ principles into leadership
                                                    programs based
                                                    on DISC assessments can equip leaders with advanced skills in
                                                    communicating
                                                    effectively with diverse teams, driving organizational alignment and
                                                    performance.
                                                </li>
                                                <li>
                                                    <span style="font-weight: bold;">Conflict Management
                                                        Workshops:</span> Workshops that combine DISC for
                                                    behavioral
                                                    understanding with AQ for communication strategies can empower
                                                    individuals and teams
                                                    to handle conflicts more constructively and collaboratively.
                                                </li>
                                            </ol>

                                            <p>
                                                By leveraging the strengths of both AQ and DISC, organizations can
                                                unlock new levels
                                                of communication excellence, enhancing interpersonal interactions,
                                                teamwork,
                                                leadership, and overall organizational effectiveness.
                                                <span class="hyperlink" style="cursor: pointer; margin-left: 5px;"
                                                    @click="aqCloseReadMoreModal">Read Less!</span>
                                            </p>
                                        </div>
                                    </div>
                                    <br />
                                </div>
                                <a class="sample-link"
                                    href="https://cdn.assessments24x7.com/file/assessments24x7-media/Partners+%26+Affiliates/AQ+1+pager.FINAL.pdf"
                                    target="_blank" rel="noopener">
                                    <div class="sampleAQ">
                                        <img src="~/assets/pdf-icon-light.svg"> DOWNLOAD PDF
                                        <svg version="1.1" xmlns="http://www.w3.org/2000/svg"
                                            xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                                            viewBox="0 0 185.343 185.343">
                                            <path
                                                d="M51.707,185.343c-2.741,0-5.493-1.044-7.593-3.149c-4.194-4.194-4.194-10.981,0-15.175
                                            l74.352-74.347L44.114,18.32c-4.194-4.194-4.194-10.987,0-15.175c4.194-4.194,10.987-4.194,15.18,0l81.934,81.934
                                            c4.194,4.194,4.194,10.987,0,15.175l-81.934,81.939C57.201,184.293,54.454,185.343,51.707,185.343z"
                                                style="fill:#05bbff;">
                                            </path>
                                        </svg>
                                    </div>
                                </a>
                                <a class="hyperlink" target="_blank" rel="noopener"
                                    href="https://www.raiseyouraq.com/">Visit
                                    Answer Intelligence (AQ) &rarr;</a>
                            </div>
                        </div>
                        <div v-if="aqReadMoreModal === false" class="partner">
                            <div class="col-6">
                                <img class="logo aqImage" src="~/assets/partner-logos/AQ_additional_image.png"
                                    alt="AQ Diagram">
                            </div>
                        </div>
                    </div>
                    <br />
                    <div class="partner">
                        <div class="col-6">
                            <img class="logo" src="~/assets/partner-logos/take-flight-learning.png"
                                alt="Take Flight Learning partners with Assessments 24x7">

                            <p class="bio">
                                Take Flight Learning has taken the DISC model and infused some bird wisdom. By
                                linking
                                the four styles, Eagles (D), Parrots
                                (I), Doves (S), and Owls (C), the styles are easy to remember and simple to apply.
                                In
                                addition to their Taking Flight with DISC
                                foundational session, they have four addition programs that allow people to apply
                                the
                                styles into a variety of aspects of their
                                work life. These include: Chameleon Leadership, Chameleon Selling, Innovating IDEAs,
                                and
                                ReDISCovering Conflict.
                            </p>

                            <p class="quote">
                                "Assessments 24x7 defines what it means to a partner. Their people are amazing.
                                Their
                                technology is simple to use and their
                                profiles provide the foundation for transformation. We see them as an extension of
                                our
                                organization.”
                            </p>

                            <div class="cite">Merrick Rosenberg, CEO, Take Flight Learning</div>

                            <a class="sample-link" href="/partner-sample-reports/TakingFlightSample.pdf" target="_blank"
                                rel="noopener">
                                <div class="sample">
                                    <img src="~/assets/pdf-icon-light.svg"> Taking Flight With DISC Sample Report

                                    <svg version="1.1" xmlns="http://www.w3.org/2000/svg"
                                        xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                                        viewBox="0 0 185.343 185.343">
                                        <path
                                            d="M51.707,185.343c-2.741,0-5.493-1.044-7.593-3.149c-4.194-4.194-4.194-10.981,0-15.175
                                            l74.352-74.347L44.114,18.32c-4.194-4.194-4.194-10.987,0-15.175c4.194-4.194,10.987-4.194,15.18,0l81.934,81.934
                                            c4.194,4.194,4.194,10.987,0,15.175l-81.934,81.939C57.201,184.293,54.454,185.343,51.707,185.343z"
                                            style="fill:#05bbff;">
                                        </path>
                                    </svg>
                                </div>
                            </a>

                            <a class="hyperlink" target="_blank" rel="noopener"
                                href="https://www.takeflightlearning.com/">Visit Take Flight Learning &rarr;</a>
                        </div>
                    </div>

                    <div class="partner">
                        <div class="col-6">
                            <img class="logo" src="~/assets/partner-logos/truecolors.jpg"
                                alt="True Colors partners with Assessments 24x7">

                            <p class="bio">
                                True Colors is a global training and consulting company with a proven model for
                                maximizing organizational performance
                                through better people performance. For more than 40 years, True Colors has helped
                                millions of people find greater personal
                                awareness and dramatically improve their inter-personal relationships. Our
                                user-friendly
                                programs help people of all ages
                                understand and learn to recognize the unique differences that lead to
                                miscommunication
                                and conflict.
                            </p>

                            <p class="quote">
                                True Colors has been happily partnered with Assessments 24x7 for over a decade. For
                                us-
                                its all about service. The team at
                                A 24x7 couldn’t possibly be more responsive to our dynamic needs- whether it be new
                                product development or standard service
                                we are always taken care of.
                            </p>

                            <div class="cite">Robert Cook, CEO, True Colors International</div>

                            <a class="sample-link" href="/partner-sample-reports/TrueColorsSample.pdf" target="_blank"
                                rel="noopener">
                                <div class="sample">
                                    <img src="~/assets/pdf-icon-light.svg"> True Colors Sample Report

                                    <svg version="1.1" xmlns="http://www.w3.org/2000/svg"
                                        xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                                        viewBox="0 0 185.343 185.343">
                                        <path
                                            d="M51.707,185.343c-2.741,0-5.493-1.044-7.593-3.149c-4.194-4.194-4.194-10.981,0-15.175
                                            l74.352-74.347L44.114,18.32c-4.194-4.194-4.194-10.987,0-15.175c4.194-4.194,10.987-4.194,15.18,0l81.934,81.934
                                            c4.194,4.194,4.194,10.987,0,15.175l-81.934,81.939C57.201,184.293,54.454,185.343,51.707,185.343z"
                                            style="fill:#05bbff;">
                                        </path>
                                    </svg>
                                </div>
                            </a>

                            <a class="hyperlink" target="_blank" rel="noopener" href="https://truecolorsintl.com/">Visit
                                True Colors &rarr;</a>
                        </div>
                    </div>
                </div>

                <div class="row">
                    <div class="partner">
                        <div class="col-6">
                            <img class="logo" src="~/assets/partner-logos/lead-like-jesus.png"
                                alt="Biblical DISC partners with Assessments 24x7">

                            <p class="bio">
                                We've expanded the world renowned Classic DISC model of human behavior to include a
                                biblical perspective on your behavioral
                                style. By blending the knowledge from Scripture and understanding your God-given
                                behavioral style you can become the person
                                God created you to be. Biblical DISC provides insights into learning how to love and
                                serve one another as Jesus did. Lead
                                like Jesus is a global, non-profit, faith-based organization that provides
                                leadership
                                training based on Biblical truths.
                            </p>

                            <p class="quote">
                                "Assessments 24x7 provided the Platform we needed to introduce the online Biblical
                                DISC®
                                Assessment into the ministry and
                                faith-based marketplace. Our experience working with Assessments 24x7 has been an
                                answer
                                to prayer. They provide innovative
                                solutions to on-going product development, excellent customer service, valid and
                                reliable assessments - always with
                                integrity and professionalism."
                            </p>

                            <div class="cite">Barbara Meiss, Director of Leadership Development, Lead Like Jesus
                            </div>

                            <a class="sample-link" href="/partner-sample-reports/LeadLikeJesusSample.pdf"
                                target="_blank" rel="noopener">
                                <div class="sample">
                                    <img src="~/assets/pdf-icon-light.svg"> Biblical DISC Assessment Sample Report

                                    <svg version="1.1" xmlns="http://www.w3.org/2000/svg"
                                        xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                                        viewBox="0 0 185.343 185.343">
                                        <path
                                            d="M51.707,185.343c-2.741,0-5.493-1.044-7.593-3.149c-4.194-4.194-4.194-10.981,0-15.175
                                            l74.352-74.347L44.114,18.32c-4.194-4.194-4.194-10.987,0-15.175c4.194-4.194,10.987-4.194,15.18,0l81.934,81.934
                                            c4.194,4.194,4.194,10.987,0,15.175l-81.934,81.939C57.201,184.293,54.454,185.343,51.707,185.343z"
                                            style="fill:#05bbff;">
                                        </path>
                                    </svg>
                                </div>
                            </a>

                            <a class="hyperlink" target="_blank" rel="noopener"
                                href="https://www.leadlikejesus.com/disc">Visit Lead Like Jesus &rarr;</a>
                        </div>
                    </div>

                    <div class="partner">
                        <div class="col-6">
                            <img class="logo" src="~/assets/partner-logos/athlete-assessments.png"
                                alt="Athlete Assessments partners with Assessments 24x7">

                            <p class="bio">
                                Sports are played by people, coached by people and managed by people, so it’s
                                imperative
                                to get the people side of sport
                                right. We are experts in the ‘people side’ of elite sports. We work with you,
                                strengthening what you’ve already established
                                to further develop the performance of your people. While we’re best known for our
                                AthleteDISC, CoachDISC and Sports
                                ManagerDISC Profiles, we do more than just assessments.
                            </p>

                            <p class="quote">
                                "Our relationship with Assessments 24x7 is our most valued business partnership.
                                With
                                over a decade of working together,
                                they have been consistent with their high level of service and reliability. Their
                                team
                                all have an incredible ‘can do’
                                approach to any opportunity or challenge, their professionalism is unmatched and
                                their
                                pursuit of excellence relentless.
                                Thank you Tony, Brandon, Steve and your phenomenal team."
                            </p>

                            <div class="cite">Liz Masen, CEO Athlete Assessments</div>

                            <a class="sample-link" href="/partner-sample-reports/AthleteAssessmentsSample.pdf"
                                target="_blank" rel="noopener">
                                <div class="sample">
                                    <img src="~/assets/pdf-icon-light.svg"> Athlete Assessment Sample Report

                                    <svg version="1.1" xmlns="http://www.w3.org/2000/svg"
                                        xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                                        viewBox="0 0 185.343 185.343">
                                        <path
                                            d="M51.707,185.343c-2.741,0-5.493-1.044-7.593-3.149c-4.194-4.194-4.194-10.981,0-15.175
                                            l74.352-74.347L44.114,18.32c-4.194-4.194-4.194-10.987,0-15.175c4.194-4.194,10.987-4.194,15.18,0l81.934,81.934
                                            c4.194,4.194,4.194,10.987,0,15.175l-81.934,81.939C57.201,184.293,54.454,185.343,51.707,185.343z"
                                            style="fill:#05bbff;">
                                        </path>
                                    </svg>
                                </div>
                            </a>

                            <a class="hyperlink" target="_blank" rel="noopener"
                                href="https://athleteassessments.com/">Visit
                                Athlete Assessments &rarr;</a>
                        </div>
                    </div>
                </div>

                <div class="row">
                    <div class="partner">
                        <div class="col-6">
                            <img class="logo" src="~/assets/partner-logos/five-four.png"
                                alt="FiveFour partners with Assessments 24x7">

                            <p class="bio">
                                FiveFour helps companies with disengaged employees and disgruntled customers ignite
                                a
                                culture of customer success. Our
                                process is ideal for businesses that have grown to the point where the founder or
                                leader
                                no longer has direct contact with
                                front-line employees. That disconnect leads to undefined expectations for the
                                customer
                                experience. We help them design a
                                world-class customer experience and define a culture of learning and development
                                that
                                gets them back on the path to growth.
                            </p>

                            <p class="quote">
                                The behavioral assessments from Assessments247 are an invaluable tool in our process
                                of
                                helping the leaders of the company
                                lead in a new way. The assessments provide a vital window for each person to see
                                themselves, how they interact with others
                                and how they perform as a team. Every leadership group we assess gains
                                self-awareness
                                and sees new opportunities for better
                                team alignment.
                            </p>

                            <div class="cite">Nathan Schock, Co-Founder and President, FiveFour</div>

                            <a class="hyperlink" target="_blank" rel="noopener"
                                href="https://fivefourtraining.com/">Visit
                                FiveFour &rarr;</a>
                        </div>
                    </div>

                    <div class="partner">
                        <div class="col-6">
                            <img class="logo" src="~/assets/partner-logos/hiring-steps.png"
                                alt="Hiring Steps partners with Assessments 24x7">

                            <p class="bio">
                                Employees are a company's most important asset. Yet, the hiring process is a time
                                consuming and often expensive fragmented
                                system consisting of various team members screening, emailing, calling, preparing
                                spreadsheets and printing resumes. But
                                the hard work and money spent often does not lead to the best results. At Hiring
                                Steps,
                                we have simplified that process.
                            </p>

                            <p class="quote">
                                "Partnering with Tony and Brandon at Assessments 24x7 has brought us closer to
                                achieving
                                our vision of becoming the
                                matchmaker of hiring.  We are truly excited about the work we are doing together to
                                revolutionize the industry!"
                            </p>

                            <div class="cite">Danny Ing, Co-Founder, Hiring Steps</div>

                            <a class="hyperlink" target="_blank" rel="noopener"
                                href="https://www.hiringsteps.com/">Visit
                                Hiring Steps &rarr;</a>
                        </div>
                    </div>
                </div>

                <div class="row">
                    <div class="partner">
                        <div class="col-6">
                            <img class="logo" src="~/assets/partner-logos/disc-daily.png"
                                alt="DISC Daily partners with Assessments 24x7">

                            <p class="bio">
                                DISC Daily emerged as a vital link between the DISC assessment and its application in
                                everyday life. Acknowledging it requires practice to master any new skill, DISC Daily
                                keeps
                                the practice front-of-mind! The comprehensive 38-page DISC report, while informative,
                                necessitates more than mere perusal for comprehension. So, a tool was created to anchor
                                learning in a clients’ routine. This automated, client-centric approach also empowers
                                coaches to gain and impart deeper understanding to their clients, resulting in tangible
                                progress in client's lives. With affordability as its hallmark, DISC Daily ensures
                                accessibility for all, fostering continuous growth and development. <span
                                    class="hyperlink"><a class="none" href="https://discdailycoach.com/">Visit the
                                        site</a></span> or <span class="hyperlink"><a class="none"
                                        href="https://calendly.com/emilybass/30min?month=2024-02">schedule a firsthand
                                        tour</a></span> of the platform to explore its transformative potential.
                            </p>

                            <p class="quote">
                                Partnering with Assessments 24x7 is what got my business off the ground. I can still
                                recall my first contact with the company.
                                Jennifer Larsen, VP of Instructional Design and Education, talked with me, heard me,
                                and
                                came up with just what I needed to move
                                my business to the next step.
                            </p>

                            <div class="cite">Emily Bass, President and CEO, Emily Bass Strategies/The DISC Daily
                            </div>

                            <a class="hyperlink" target="_blank" rel="noopener" href="https://discdailycoach.com/">Visit
                                DISC Daily &rarr;</a>
                        </div>
                    </div>

                    <div class="partner">
                        <div class="col-6">
                            <img class="logo" src="~/assets/partner-logos/crosscheck.png"
                                alt="Cross Check partners with Assessments 24x7">

                            <p class="bio">
                                At Cross Check, we are transformation architects for people in business – passionate
                                about unlocking human potential. Providing our clients with strategies for effective
                                talent selection, onboarding, employee development, behavioural change, conflict
                                resolution, creating world-class leaders, career progression, and creating
                                purposeful
                                teams built for performance and longevity is what we do best.
                            </p>

                            <p class="quote">
                                Thanks to Assessments 24x7 and their great range of quality assessment tools, we can
                                empower our clients to explore their unique human resources, conquer their
                                challenges,
                                achieve transformation and ultimately reach their true potential.
                            </p>

                            <div class="cite">Katrina Stephenson & Gillian Blackman, Co-Founders of Cross Check
                                Australasia</div>

                            <a class="hyperlink" target="_blank" rel="noopener"
                                href="https://www.crosscheck.com.au">Visit
                                Cross Check &rarr;</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <stats style="margin-bottom: 0" />
        <footer-fold />
    </section>
</template>

<script>
import Nav from '@/components/Nav';
import Stats from '@/components/Stats';
import Footer from '@/components/Footer';

export default {
    props: [
        'id',
        'getStartedId'
    ],
    components: {
        'main-nav': Nav,
        'stats': Stats,
        'contact-form': () => import('@/components/ContactForm'),
        'footer-fold': Footer
    },
    head() {
        return {
            title: 'Assessments 24x7 Partners | Assessments 24x7',
            meta: [
                {
                    hid: 'description',
                    name: 'description',
                    content: 'Our partnerships are one of the cornerstones of our company and we are pleased to feature a few of them here. They\'ve taken our assessment customization to the next level in some very creative ways, and they all provide the high quality assessment products.'
                }
            ]
        }
    },
    data() {
        return {
            isOpen: false,
            aqReadMoreModal: false
        }
    },
    methods: {
        open(id) {
            this.id = id;
            this.isOpen = true;
        },
        close() {
            this.isOpen = false;
        },
        aqCloseReadMoreModal() {
            this.$nextTick(() => {
                const section = document.getElementById('technologyPartnersSection');
                if (section) {
                    section.scrollIntoView({ behavior: 'smooth' });
                }
            });
            this.aqReadMoreModal = false;
        }
    }
}
</script>

<style lang="scss" scoped>
.none {
    text-decoration: none;
    color: rgb(36, 36, 36);
}

.partner-logo {
    width: 100%;
    max-width: 450px;
}

.subText {
    background: linear-gradient(to right, #f7f7f7, #efefef);
    box-shadow: -1px 3px 7px -5px black;
    letter-spacing: .25px;
}

.account-modal-window {
    position: fixed;
    background-color: rgba(0, 0, 0, .6);
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 999999;
    transition: all 0.25s;

    .container {
        width: 100%;
        max-width: 800px;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        padding: 40px 20px;
        background: #fff;
        text-align: center;
        height: 100%;
        max-height: 700px;
        overflow-y: scroll;
        border-radius: 10px;

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

            &:hover {
                color: #000;
            }
        }

        h1 {
            margin: 0;
            font-size: 18pt;
        }

        .contact-form {
            text-align: left;
            display: flex;
        }
    }

    .validation {
        background: #fef0f0;
        ;
        color: #f56c6c;
        padding: 12px 20px;
        border-radius: 4px;

        .title,
        .description {
            margin: 0;
            font-size: 10pt;
        }
    }
}

.fade-enter-active,
.fade-leave-active {
    transition: opacity .5s;
}

.fade-enter,
.fade-leave-to

/* .fade-leave-active below version 2.1.8 */
    {
    opacity: 0;
}

.partners {
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

    .countriesCovered {
        margin-bottom: -10px;
    }

    .countries {
        padding: 10px;
        background: #f9f9f9;
        padding-top: .5px;
        margin-top: 20px;
    }

    .report-spread-image {
        width: 100%;
        max-width: 620px;
        margin: -130px auto -20px;
        display: block;
    }

    .partner-list {
        margin: 30px 0 80px;

        .aqSection {
            background-color: #f9f9f9;
            border-left: 4px solid #e9e8e8;
            border-right: 4px solid #e9e8e8;
            padding: 20px;
            border-radius: 10px;
        }

        .partner {
            margin-bottom: 40px;

            .logo {
                width: 100%;
                display: block;
                margin: 0 auto 10px;
                max-width: 400px;
            }

            .aqImage {
                border-radius: 20px;
                margin-bottom: 20px;
            }

            .bio {
                margin-bottom: 20px;
                margin-top: 0;
            }

            .quote {
                border-left: 4px solid #0033c5;
                padding: 10px;
                background: #f9f9f9;
            }

            .cite {
                font-size: 10pt;
                font-weight: 600;
                color: #444;
                margin: -10px 0 20px 14px;

                &:before {
                    content: '- ';
                }
            }

            .sample-link {
                color: #000;
                text-decoration: none;
            }

            .sample {
                border: 2px solid #f1f1f1;
                padding: 10px;
                border-radius: 5px;
                margin-bottom: 10px;
                font-weight: 500;
                transition: background .3s ease;
                cursor: pointer;

                img {
                    width: 24px;
                    margin-right: 5px;
                }

                svg {
                    width: 17px;
                    float: right;
                    margin-top: 7px;
                }
            }

            .sampleAQ {
                border: 2px solid #c5c4c4;
                padding: 10px;
                border-radius: 5px;
                margin-bottom: 10px;
                font-weight: 500;
                transition: background .3s ease;
                cursor: pointer;

                img {
                    width: 24px;
                    margin-right: 5px;
                }

                svg {
                    width: 17px;
                    float: right;
                    margin-top: 7px;
                }
            }
        }
    }
}
</style>