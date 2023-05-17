<template>
    <section class="get-started">
        <main-nav/>
        <account-modal v-if="id !== 'ccc'" :id="id"/>

        <section class="header">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <img v-if="id === 'ccc'" src="~/assets/get-started/ccc.svg" alt="CCC" class="partner-logo">
                        <img v-else-if="id === 'actioncoach'" src="~/assets/get-started/actioncoach.png" alt="ActionCOACH" class="partner-logo">
                        <img v-else-if="id === 'tonyrobbins'" src="~/assets/get-started/tonyrobbins.png" alt="Tony Robbins" class="partner-logo">
                        <img v-else-if="id === 'engageandgrow'" src="~/assets/get-started/engage-and-grow.png" alt="Engage and Grow" class="partner-logo">
                        <img v-else-if="id === 'swc'" src="~/assets/get-started/southwestern-consulting.png" alt="Southwestern Consulting" class="partner-logo">
                        <img v-else-if="id === 'wcg'" src="~/assets/WCG-cropped.jpg" alt="Worldwide Coaching Group" class="partner-logo-wcg">
                        <img v-else-if="id === 'dc'" src="~/assets/Dale-Carnegie-logo.png" alt="Dale Carnegie" class="partner-logo-dc">
                        <img v-else-if="id === 'bni'" src="~/assets/BNI_logo.png" alt="BNI" class="partner-logo-bni">
                        <img v-else-if="id === 'aus'" src="~/assets/partner-logos/australasia-logo.png" alt="Australasia" class="partner-logo affiliate">
                        <img v-else-if="id === 'can'" src="~/assets/partner-logos/canada-logo.png" alt="Canada" class="partner-logo affiliate">
                        <img v-else-if="id === 'eur'" src="~/assets/partner-logos/europe-logo.png" alt="Europe" class="partner-logo affiliate">
                        <img v-else-if="id === 'viet'" src="~/assets/partner-logos/vietnam-logo.png" alt="Vietnam" class="partner-logo affiliate">
                        <h1 class="section-title">Get Started</h1>
                        <p>
                            Welcome to your personal coaching dashboard! We invite you to view any and all materials that look interesting to you, 
                            but if you’d like some guidance, follow our suggested steps below.
                        </p>
                    </div>
                </div>
            </div>
        </section>

        <div class="container">
            <div class="row">
                <div class="col-12">
                    <h2>Quick Start Guide</h2>

                    <p>
                        Welcome to your personal coaching dashboard! Be sure to have a look at the announcements on the left side of your dashboard. 
                        We invite you to view any and all materials that look interesting to you, but if you’d like some guidance, follow our 
                        suggested steps below.
                    </p>
                </div>
            </div>

            <div class="row">
                <div class="col-12">
                    <div class="step">
                        <div class="icon">1</div>
                        
                        <div class="body">
                            <h3 class="title">
                                Sign in to your account
                            </h3>

                            <p class="text">
                                Is this your first time logging in? You will need to update your password!
                                <span v-if="id !== 'ccc'">Don't have an account? <a href="#" class="hyperlink" @click="$nuxt.$emit('openAccountModal')">Click here</a></span>
                            </p>

                            <a class="link" :href="`https://${url}`" target="_blank" rel="noopener">https://{{url}}</a>
                        </div>
                    </div>
                </div>
            </div>

            <div class="row">
                <div class="col-12">
                    <div class="step">
                        <div class="icon">2</div>
                        
                        <div class="body">
                            <h3 class="title">
                                Watch the “Virtual Tour of Your Account” videos
                            </h3>

                            <p class="text">
                                These videos can also be found in the "Resource Center" on your account dashboard page.
                            </p><br/>

                            <div class="row">
                                <div class="col-6">
                                    <iframe style="width:100%" height="239" src="https://www.youtube.com/embed/b0ee18iEhkU" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                    <a class="hyperlink" href="https://www.youtube.com/watch?v=b0ee18iEhkU&feature=emb_logo"  rel="noopener">
                                        General Account Settings (2:00)
                                        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" height="14px" width="14px" fill="#000000" viewBox="0 0 100 100" version="1.1" x="0px" y="0px" data-v-738fae98="">
                                            <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" sketch:type="MSPage" data-v-738fae98="">
                                                <g sketch:type="MSLayerGroup" transform="translate(2.000000, 2.000000)" fill="#000000" data-v-738fae98="">
                                                    <path d="M73.7883228,16 L44.56401,45.2243128 C42.8484762,46.9398466 42.8459918,49.728257 44.5642987,51.4465639 C46.2791092,53.1613744 49.0684023,53.1650001 50.7865498,51.4468526 L80,22.2334024 L80,32.0031611 C80,34.2058797 81.790861,36 84,36 C86.2046438,36 88,34.2105543 88,32.0031611 L88,11.9968389 C88,10.8960049 87.5527117,9.89722307 86.8294627,9.17343595 C86.1051125,8.44841019 85.1063303,8 84.0031611,8 L63.9968389,8 C61.7941203,8 60,9.790861 60,12 C60,14.2046438 61.7894457,16 63.9968389,16 L73.7883228,16 L73.7883228,16 Z M88,56 L88,36.9851507 L88,78.0296986 C88,83.536144 84.0327876,88 79.1329365,88 L16.8670635,88 C11.9699196,88 8,83.5274312 8,78.0296986 L8,17.9703014 C8,12.463856 11.9672124,8 16.8670635,8 L59.5664682,8 L40,8 C42.209139,8 44,9.790861 44,12 C44,14.209139 42.209139,16 40,16 L18.2777939,16 C17.0052872,16 16,17.1947367 16,18.668519 L16,77.331481 C16,78.7786636 17.0198031,80 18.2777939,80 L77.7222061,80 C78.9947128,80 80,78.8052633 80,77.331481 L80,56 C80,53.790861 81.790861,52 84,52 C86.209139,52 88,53.790861 88,56 L88,56 Z" sketch:type="MSShapeGroup" data-v-738fae98=""></path>
                                                </g>
                                            </g>
                                        </svg>
                                    </a>
                                </div>

                                <div class="col-6">
                                    <iframe style="width:100%" height="239" src="https://www.youtube.com/embed/0XRVr4fc8sc" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                    <a class="hyperlink" href="https://www.youtube.com/watch?v=0XRVr4fc8sc&feature=emb_logo" target="_blank" rel="noopener">
                                        Features on Your Home Page (5:07)
                                        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" height="14px" width="14px" fill="#000000" viewBox="0 0 100 100" version="1.1" x="0px" y="0px" data-v-738fae98="">
                                            <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" sketch:type="MSPage" data-v-738fae98="">
                                                <g sketch:type="MSLayerGroup" transform="translate(2.000000, 2.000000)" fill="#000000" data-v-738fae98="">
                                                    <path d="M73.7883228,16 L44.56401,45.2243128 C42.8484762,46.9398466 42.8459918,49.728257 44.5642987,51.4465639 C46.2791092,53.1613744 49.0684023,53.1650001 50.7865498,51.4468526 L80,22.2334024 L80,32.0031611 C80,34.2058797 81.790861,36 84,36 C86.2046438,36 88,34.2105543 88,32.0031611 L88,11.9968389 C88,10.8960049 87.5527117,9.89722307 86.8294627,9.17343595 C86.1051125,8.44841019 85.1063303,8 84.0031611,8 L63.9968389,8 C61.7941203,8 60,9.790861 60,12 C60,14.2046438 61.7894457,16 63.9968389,16 L73.7883228,16 L73.7883228,16 Z M88,56 L88,36.9851507 L88,78.0296986 C88,83.536144 84.0327876,88 79.1329365,88 L16.8670635,88 C11.9699196,88 8,83.5274312 8,78.0296986 L8,17.9703014 C8,12.463856 11.9672124,8 16.8670635,8 L59.5664682,8 L40,8 C42.209139,8 44,9.790861 44,12 C44,14.209139 42.209139,16 40,16 L18.2777939,16 C17.0052872,16 16,17.1947367 16,18.668519 L16,77.331481 C16,78.7786636 17.0198031,80 18.2777939,80 L77.7222061,80 C78.9947128,80 80,78.8052633 80,77.331481 L80,56 C80,53.790861 81.790861,52 84,52 C86.209139,52 88,53.790861 88,56 L88,56 Z" sketch:type="MSShapeGroup" data-v-738fae98=""></path>
                                                </g>
                                            </g>
                                        </svg>    
                                    </a>
                                </div>

                                <div class="col-6">
                                    <iframe style="width:100%" height="239" src="https://www.youtube.com/embed/-wcs-p1FFps" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                    <a class="hyperlink" href="https://www.youtube.com/watch?v=-wcs-p1FFps&feature=emb_logo" target="_blank" rel="noopener">
                                        Setting Up Assessment Access Links (8:05)
                                        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" height="14px" width="14px" fill="#000000" viewBox="0 0 100 100" version="1.1" x="0px" y="0px" data-v-738fae98="">
                                            <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" sketch:type="MSPage" data-v-738fae98="">
                                                <g sketch:type="MSLayerGroup" transform="translate(2.000000, 2.000000)" fill="#000000" data-v-738fae98="">
                                                    <path d="M73.7883228,16 L44.56401,45.2243128 C42.8484762,46.9398466 42.8459918,49.728257 44.5642987,51.4465639 C46.2791092,53.1613744 49.0684023,53.1650001 50.7865498,51.4468526 L80,22.2334024 L80,32.0031611 C80,34.2058797 81.790861,36 84,36 C86.2046438,36 88,34.2105543 88,32.0031611 L88,11.9968389 C88,10.8960049 87.5527117,9.89722307 86.8294627,9.17343595 C86.1051125,8.44841019 85.1063303,8 84.0031611,8 L63.9968389,8 C61.7941203,8 60,9.790861 60,12 C60,14.2046438 61.7894457,16 63.9968389,16 L73.7883228,16 L73.7883228,16 Z M88,56 L88,36.9851507 L88,78.0296986 C88,83.536144 84.0327876,88 79.1329365,88 L16.8670635,88 C11.9699196,88 8,83.5274312 8,78.0296986 L8,17.9703014 C8,12.463856 11.9672124,8 16.8670635,8 L59.5664682,8 L40,8 C42.209139,8 44,9.790861 44,12 C44,14.209139 42.209139,16 40,16 L18.2777939,16 C17.0052872,16 16,17.1947367 16,18.668519 L16,77.331481 C16,78.7786636 17.0198031,80 18.2777939,80 L77.7222061,80 C78.9947128,80 80,78.8052633 80,77.331481 L80,56 C80,53.790861 81.790861,52 84,52 C86.209139,52 88,53.790861 88,56 L88,56 Z" sketch:type="MSShapeGroup" data-v-738fae98=""></path>
                                                </g>
                                            </g>
                                        </svg>
                                    </a>
                                </div>

                                <div class="col-6">
                                    <iframe style="width:100%" height="239" src="https://www.youtube.com/embed/outCzOuSXXg" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                    <a class="hyperlink" href="https://www.youtube.com/watch?v=outCzOuSXXg&feature=emb_logo" target="_blank" rel="noopener">
                                        Managing Assessment Users and Reports (5:02)
                                        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" height="14px" width="14px" fill="#000000" viewBox="0 0 100 100" version="1.1" x="0px" y="0px" data-v-738fae98="">
                                            <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" sketch:type="MSPage" data-v-738fae98="">
                                                <g sketch:type="MSLayerGroup" transform="translate(2.000000, 2.000000)" fill="#000000" data-v-738fae98="">
                                                    <path d="M73.7883228,16 L44.56401,45.2243128 C42.8484762,46.9398466 42.8459918,49.728257 44.5642987,51.4465639 C46.2791092,53.1613744 49.0684023,53.1650001 50.7865498,51.4468526 L80,22.2334024 L80,32.0031611 C80,34.2058797 81.790861,36 84,36 C86.2046438,36 88,34.2105543 88,32.0031611 L88,11.9968389 C88,10.8960049 87.5527117,9.89722307 86.8294627,9.17343595 C86.1051125,8.44841019 85.1063303,8 84.0031611,8 L63.9968389,8 C61.7941203,8 60,9.790861 60,12 C60,14.2046438 61.7894457,16 63.9968389,16 L73.7883228,16 L73.7883228,16 Z M88,56 L88,36.9851507 L88,78.0296986 C88,83.536144 84.0327876,88 79.1329365,88 L16.8670635,88 C11.9699196,88 8,83.5274312 8,78.0296986 L8,17.9703014 C8,12.463856 11.9672124,8 16.8670635,8 L59.5664682,8 L40,8 C42.209139,8 44,9.790861 44,12 C44,14.209139 42.209139,16 40,16 L18.2777939,16 C17.0052872,16 16,17.1947367 16,18.668519 L16,77.331481 C16,78.7786636 17.0198031,80 18.2777939,80 L77.7222061,80 C78.9947128,80 80,78.8052633 80,77.331481 L80,56 C80,53.790861 81.790861,52 84,52 C86.209139,52 88,53.790861 88,56 L88,56 Z" sketch:type="MSShapeGroup" data-v-738fae98=""></path>
                                                </g>
                                            </g>
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="row">
                <div class="col-12">
                    <div class="step">
                        <div class="icon">3</div>
                        
                        <div class="body">
                            <h3 class="title">
                                Download the Admin Quick Setup Steps
                            </h3>

                            <p class="text">
                                This Admin Quick Setup Steps PDF gives you 3 quick steps to get your admin dashboard configured.
                            </p>

                            <a class="link" href="https://drive.google.com/file/d/1oBrb95DWABjZH1LqSoKWOsJgpMuyy3Nr/view" target="_blank" rel="noopener">
                                <img style="width:30px;margin-right:6px" src="~/assets/pdf-icon.svg" alt="Download the Quick Start Guide PDF">Download the Quick Start Guide
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <div class="row">
                <div class="col-12">
                    <div class="step">
                        <div class="icon">4</div>
                        
                        <div class="body">
                            <h3 class="title">
                                Review Trainer Resources
                            </h3>

                            <p class="text">
                                In the Resource Center module, review the available training materials. These materials are for your education and can also be used as marketing 
                                and training materials for your clients. These educational materials are a great opportunity for you to run sessions for your clients.
                            </p>

                            <img style="width:100%;max-width:700px;margin:20px auto 0;display:block" src="~/assets/resource-center-ss.jpg">
                        </div>
                    </div>
                </div>
            </div>

            <div class="row">
                <div class="col-12">
                    <div class="step">
                        <div class="icon">5</div>
                        
                        <div class="body">
                            <h3 class="title">
                                Take Demo Assessment(s)
                            </h3>

                            <p class="text">
                                We recommend taking demo assessments to learn more about a particular assessment. You can do this by clicking on the DEMO ASSESSMENTS button in your 
                                resource center on the home page of your account.
                            </p>

                            <img style="width:100%;max-width:700px;margin:20px auto 0;display:block" src="~/assets/demo-assessments-ss.jpg">
                        </div>
                    </div>
                </div>
            </div>

            <div class="row">
                <div class="col-12">
                    <div class="step">
                        <div class="icon">6</div>
                        
                        <div class="body">
                            <h3 class="title">
                                Get Started
                            </h3>

                            <p class="text">
                                Identify at least one customer who you believe can benefit from one or more of your assessments and send them a sample link to take it.
                                Would you like a personalized dashboard tour? Contact us at <a href="mailto:support@assessments.ws" class="hyperlink">support@assessments.ws</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div class="row">
                <div class="col-12">
                    <div class="step">
                        <div class="icon">7</div>
                        
                        <div class="body">
                            <h3 class="title">
                                Schedule with your Assessment Advisor
                            </h3>

                            <p class="text">
                                Schedule your appointment with Angie at <a href="https://www.assessments24x7.com/angie" class="hyperlink">www.assessments24x7.com/angie</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div class="row">
                <div class="col-6">
                    <h2>Want even more resources to help get you started?</h2>
                    <p>
                        When used in business, quality assessments are flexible and capable of embracing optimization for a complete professional spectrum - customer 
                        service, vocational, technical, sales, management or executive needs. It's important for employees to have the necessary skills to demonstrate 
                        the attitudes and behaviors that would enable them to succeed within each company's unique environment.
                    </p><br/>
                    <a href="/about/why-use-assessments" class="button">Learn More About Assessments</a>
                </div>

                <div class="col-6">
                    <div class="sample-reports">
                        <h2>Additional Resources</h2>
                        <a href="https://www.assessments24x7.com/pdfs/DISC-eWorkbook-INTERACTIVE.pdf" target="_blank" rel="noopener">
                            <div class="sample">
                                <img src="~assets/pdf-icon.svg"> DISC eWorkbook
                                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 185.343 185.343">
                                    <path style="fill:#05bbff;" d="M51.707,185.343c-2.741,0-5.493-1.044-7.593-3.149c-4.194-4.194-4.194-10.981,0-15.175
                                        l74.352-74.347L44.114,18.32c-4.194-4.194-4.194-10.987,0-15.175c4.194-4.194,10.987-4.194,15.18,0l81.934,81.934
                                        c4.194,4.194,4.194,10.987,0,15.175l-81.934,81.939C57.201,184.293,54.454,185.343,51.707,185.343z"
                                    />
                                </svg>
                            </div>
                        </a>

                        <a href="https://www.assessments24x7.com/PSEBook.pdf" target="_blank" rel="noopener">
                            <div class="sample">
                                <img src="~assets/pdf-icon.svg"> People Smart in Business eBook
                                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 185.343 185.343">
                                    <path style="fill:#05bbff;" d="M51.707,185.343c-2.741,0-5.493-1.044-7.593-3.149c-4.194-4.194-4.194-10.981,0-15.175
                                        l74.352-74.347L44.114,18.32c-4.194-4.194-4.194-10.987,0-15.175c4.194-4.194,10.987-4.194,15.18,0l81.934,81.934
                                        c4.194,4.194,4.194,10.987,0,15.175l-81.934,81.939C57.201,184.293,54.454,185.343,51.707,185.343z"
                                    />
                                </svg>
                            </div>
                        </a>

                        <a href="https://www.assessments123.com/EndUserAdmin/RegisterMobile.aspx?mU%40e" target="_blank" rel="noopener">
                            <div class="sample">
                                <img src="~assets/internet-icon.svg"> DISC Virtual Training
                                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 185.343 185.343">
                                    <path style="fill:#05bbff;" d="M51.707,185.343c-2.741,0-5.493-1.044-7.593-3.149c-4.194-4.194-4.194-10.981,0-15.175
                                        l74.352-74.347L44.114,18.32c-4.194-4.194-4.194-10.987,0-15.175c4.194-4.194,10.987-4.194,15.18,0l81.934,81.934
                                        c4.194,4.194,4.194,10.987,0,15.175l-81.934,81.939C57.201,184.293,54.454,185.343,51.707,185.343z"
                                    />
                                </svg>
                            </div>
                        </a>

                        <a href="https://youtu.be/wqXCukZr9LI" target="_blank" rel="noopener">
                            <div class="sample">
                                <img src="~assets/youtube-icon.svg"> Dr. Tony Alessandra's DISC Speech
                                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 185.343 185.343">
                                    <path style="fill:#05bbff;" d="M51.707,185.343c-2.741,0-5.493-1.044-7.593-3.149c-4.194-4.194-4.194-10.981,0-15.175
                                        l74.352-74.347L44.114,18.32c-4.194-4.194-4.194-10.987,0-15.175c4.194-4.194,10.987-4.194,15.18,0l81.934,81.934
                                        c4.194,4.194,4.194,10.987,0,15.175l-81.934,81.939C57.201,184.293,54.454,185.343,51.707,185.343z"
                                    />
                                </svg>
                            </div>
                        </a>

                        <a v-if="noframe" href="/resources/relationship-strategies-audio-program?noframe=1" target="_blank" rel="noopener">
                            <div class="sample">
                                <img src="~assets/internet-icon.svg"> DISC Relationship Strategies Audio Program
                                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 185.343 185.343">
                                    <path style="fill:#05bbff;" d="M51.707,185.343c-2.741,0-5.493-1.044-7.593-3.149c-4.194-4.194-4.194-10.981,0-15.175
                                        l74.352-74.347L44.114,18.32c-4.194-4.194-4.194-10.987,0-15.175c4.194-4.194,10.987-4.194,15.18,0l81.934,81.934
                                        c4.194,4.194,4.194,10.987,0,15.175l-81.934,81.939C57.201,184.293,54.454,185.343,51.707,185.343z"
                                    />
                                </svg>
                            </div>
                        </a>
                        <a v-else href="/resources/relationship-strategies-audio-program" target="_blank" rel="noopener">
                            <div class="sample">
                                <img src="~assets/internet-icon.svg"> DISC Relationship Strategies Audio Program
                                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 185.343 185.343">
                                    <path style="fill:#05bbff;" d="M51.707,185.343c-2.741,0-5.493-1.044-7.593-3.149c-4.194-4.194-4.194-10.981,0-15.175
                                        l74.352-74.347L44.114,18.32c-4.194-4.194-4.194-10.987,0-15.175c4.194-4.194,10.987-4.194,15.18,0l81.934,81.934
                                        c4.194,4.194,4.194,10.987,0,15.175l-81.934,81.939C57.201,184.293,54.454,185.343,51.707,185.343z"
                                    />
                                </svg>
                            </div>
                        </a>
                    </div>
                </div>
            </div>

            <section class="certifications">
                <div class="row">
                    <div class="col-12">
                        <div class="images">
                            <img class="image" src="~/assets/badges/new/disc-cert-badge-color-label.png" alt="">
                            <img class="image" src="~/assets/badges/new/mot-cert-badge-color-label.png" alt="">
                            <img class="image" src="~/assets/badges/new/eiq-cert-badge-color-label.png" alt="">
                            <img v-if="id !== 'wcg' || id !== 'dc'" class="image" src="~/assets/badges/new/hartman-cert-badge-color-label.png" alt="">
                            <img v-if="id !== 'wcg' || id !== 'dc'" class="image" src="~/assets/badges/new/learning-cert-badge-color-label.png" alt="">
                        </div>

                        <h2>Assessment Certifications &amp; Training</h2>

                        <p>
                            Assessments 24x7 developed a variety of robust assessment certification programs, designed specifically for coaches, 
                            consultants and trainers to take their businesses to the next level. Each of our certification programs are blended 
                            learning modalities, including self-paced learning for your convenience and 1-on-1 instructor-led sessions (via Zoom 
                            or Skype). These are not cookie-cutter online classes, but flexible training curriculums tailored to your specific 
                            needs and goals.
                        </p><br/>

                        <nuxt-link to="/certifications/assessment" class="button">Assessment Certification</nuxt-link>
                        <nuxt-link to="/contact" class="button outline">Get Assessment Certified</nuxt-link>
                    </div>
                </div>
            </section>
        </div>

        <br/><br/><br/><footer-fold></footer-fold>
    </section>
</template>

<script>
    import Nav from '@/components/Nav';
    import AccountModal from '@/components/AccountModal';
    import Footer from '@/components/Footer';

    export default {
        components: {
            'main-nav': Nav,
            'account-modal': AccountModal,
            'footer-fold': Footer
        },
        data() {
            return {
                url: 'a24x7.us',
                id: 'a24x7',
                noframe: false,
                cert: true
            }
        },
        created() {
            if (this.$route.query.id === 'ccc') {
                this.url = 'cccassessments.com';
                this.id = 'ccc';
            } else if (this.$route.query.id === 'actioncoach') {
                this.url = 'actioncoachassessments.com';
                this.id = 'actioncoach';
            } else if (this.$route.query.id === 'tonyrobbins') {
                this.url = 'assessment.tonyrobbins.com';
                this.id = 'tonyrobbins';
            } else if (this.$route.query.id === 'engageandgrow') {
                this.url = 'assessments123.com';
                this.id = 'engageandgrow';
            } else if (this.$route.query.id === 'swc') {
                this.url = 'navigate.southwesternconsulting.com';
                this.id = 'swc';
            } else if (this.$route.query.id === 'wcg') {
                this.url = 'wcginsights.worldwidecoachinggroup.com/';
                this.id = 'wcg';
            } else if (this.$route.query.id === 'aus') {
                this.id = 'aus';
            } else if (this.$route.query.id === 'can') {
                this.id = 'can';
            } else if (this.$route.query.id === 'eur') {
                this.id = 'eur';
            } else if (this.$route.query.id === 'viet') {
                this.url = 'assessments24x7.asia';
                this.id = 'viet';
            } else if (this.$route.query.id === 'dc') {
                this.url = 'dalecarnegiesurveys.com';
                this.id = 'dc';
            } else if (this.$route.query.id === 'bni') {
                this.url = 'bniassessments.com/';
                this.id = 'bni';
            }

            if (this.$route.query.noframe) {
                this.noframe = true;
            }

            if (this.$route.query.cert === '0') {
                this.cert = false;
            }
        },
        head() {
            return {
                title: 'Get Started | Assessments 24x7',
                meta: [
                    {
                        hid: 'description',
                        name: 'description',
                        content: 'Welcome to your personal coaching dashboard! We invite you to view any and all materials that look interesting to you, but if you’d like some guidance, follow our suggested steps below.'
                    }
                ]
            }
        }
    }
</script>

<style lang="scss" scoped>
    .get-started {
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

            .partner-logo {
                width: 100%;
                max-width: 300px;
            }

            .partner-logo-wcg {
                width: 100%;
                max-width: 95%;
                box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
                margin-bottom: 35px;
            }
            .partner-logo-dc {
                max-width: 300px;
                box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
                margin-bottom: 35px;
            }
            .partner-logo-bni {
                max-width: 300px;
                margin-bottom: 35px;
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
            margin-bottom: 0;
        }

        .affiliate {
            background-color: white;
            border-radius: 5px;
            padding: 20px;
            margin-bottom: 20px;
        }

        .step {
            background: #f5f7f9;
            padding: 20px;
            border-radius: 10px;
            position: relative;
            margin: 10px 0 20px;

            .icon {
                position: absolute;
                left: -16px;
                top: -16px;
                background: #0033c5;
                border-radius: 50%;
                color: #fff;
                text-align: center;
                width: 40px;
                height: 40px;
                line-height: 40px;
                font-size: 16pt;
                font-weight: 600;
            }
            
            .title {
                font-weight: 600;
                font-size: 16pt;
                margin: 0;
            }

            .text {
                font-size: 12pt;
                margin: 0;
            }

            .link {
                display: block;
                background: #1e222d;
                border-radius: 10px;
                font-weight: 600;
                padding: 10px;
                color: #fff;
                margin-top: 10px;
            }
        }

        .sample-reports {
            background: #1f222d;
            border-radius: 10px;
            box-shadow: 0 0 10px rgba(0,0,0,.1);
            width: 100%;
            padding: 20px;
            margin-bottom: 20px;
            color: #fff;

            h2 {
                font-size: 18pt;
                margin: 5px 0 16px 0;
            }

            a {
                color: #fff;
                text-decoration: none;
            }

            .sample {
                border: 2px solid #2d3040;
                padding: 10px;
                border-radius: 5px;
                margin-bottom: 10px;
                font-weight: 500;
                transition: background .3s ease;
                cursor: pointer;

                &:hover {
                    background: #2d3040;
                }

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

        .certifications {
            .images {
                text-align: center;
                margin-top: 30px;

                .image {
                    width: 100%;
                    max-width: 160px;
                    margin: 0 8px;
                }
            }
        }
    }
</style>