<template>
    <section class="skeleton">
        <main-nav></main-nav>

        <section class="header">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <h1 class="section-title">Success Using Assessments</h1>
                        <p>
                            Tune in to discover the multiple ways that our clients are actively and successfully using assessments in their businesses. 
                            We’ve got a great line-up representing 3 very distinct industries, including Chad Q. Brown, Profile, LLC; Curtis E Johnson, 
                            Jr., The Cuvey Group; Gary Coulson, The Toro Company; and Assessments 24x7 moderator, Monica Saare.
                        </p>
                    </div>
                </div>
            </div>
        </section>

        <div class="container">
            <div class="row">
                <div class="col-12">
                    <h2 style="margin-bottom: 0px">Watch the Full Webinar:</h2>
                    <h4 style="float:left">Success Using Assessments (44 minutes)<br/>Uploaded June 25th, 2020</h4>
                    <iframe style="width:100%" height="515" src="https://www.youtube.com/embed/PRb27ciiNiE" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
            </div><br/>

            <div class="row">
                <div class="col-3">
                    <img class="image" src="https://ci6.googleusercontent.com/proxy/9Elk6d9QkJqxYxTu1DBf-U_PWG8mGHtZy50w9qlkS8UDOIVpYJkMbZaoXAzhL8JIvZ49TijtyvlS94lJADknOUkvOtLVrn5cIwBwaqe2mwNE0bZZDbfR-uOO=s0-d-e1-ft#https://rz189.files.keap.app/rz189/f7df928f-c421-4a05-9ec0-2a740b0ac5be">
                </div>

                <div class="col-9">
                    <h3>Chad Brown, <a href="https://profile.team/" class="hyperlink" target="_blank" rel="noopener">Profile, LLC</a></h3>
                    <p>
                        Chad is the president & CEO of Profile, LLC, a behavioral consulting firm with an expertise in the corporate and athletic arenas. 
                        Profile provides powerful strategic frameworks and distinct talent strategies led by proprietary assessment technology through its 
                        partnership with Assessments 24x7. Profile's efforts as behavioral strategists and team building architects teach and enable every 
                        client to make strategic hiring decisions, recruit, train and retain top talent, and optimize culture by enhancing vision, 
                        leadership, and inspiration.
                    </p>
                </div>
            </div>

            <div class="row">
                <div class="col-3">
                    <img class="image" src="https://ci4.googleusercontent.com/proxy/_4-8zs_YF369blzR_czDro50S6rUFjQvZaQ1EuFZ6cvn8wGMrViUVzmiLMp9NmCKN_Dh6R-mHN-qFTzSX66NpRSGie0ONOsUrWBL85A8FsnRI-Scy0hJXA1I=s0-d-e1-ft#https://rz189.files.keap.app/rz189/6b0974aa-c924-427e-b4f0-5e9ca2324a16">
                </div>

                <div class="col-9">
                    <h3>Gary Coulson, <a href="https://www.thetorocompany.com/" class="hyperlink" target="_blank" rel="noopener">The Toro Company</a></h3>
                    <p>
                        The Toro Company is a leading worldwide provider of innovative solutions for the outdoor environment including turf and landscape 
                        maintenance, snow and ice management, underground utility construction, rental and specialty construction, and irrigation and 
                        outdoor lighting solutions. Through a strong network of professional distributors, dealers, rental stores and retailers in more 
                        than 125 countries, we proudly offer a wide range of products across a family of global brands to help golf courses, professional 
                        contractors, underground construction professionals, groundskeepers, agricultural growers, rental companies, government and 
                        educational institutions, and homeowners – in addition to many leading sports venues and historic sites around the world.
                    </p>
                </div>
            </div>

            <div class="row">
                <div class="col-3">
                    <img class="image" src="https://ci6.googleusercontent.com/proxy/a0OT69MugNAw1KW8GW5WD42x2mGcnDEuxTUoVxJqYWkHJU8xwjtvfk9sHtQrH0HtAQh2762YpKIcoWc500yj4Zd9S3gzT0sgnmOnIJoYv1zCPM1TrehZcWpI=s0-d-e1-ft#https://rz189.files.keap.app/rz189/d5859c51-38aa-447f-9f4b-0cca9d1433cf">
                </div>

                <div class="col-9">
                    <h3>Curtis E Johnson, Jr, <a href="https://thecuveygroup.com/" class="hyperlink" target="_blank" rel="noopener">The CUVEY Group, LLC</a></h3>
                    <p>
                        As founder & CEO of the Cuvey Group, Curtis is utilizing assessments to help businesses, organizations, and people accelerate the 
                        performance of their human capital investment.
                    </p>
                </div>
            </div>
        </div><br/><br/>

        <section class="certification">
            <div class="container">
                <div class="row">
                    <div class="col-8">
                        <h5 class="title">Get DISC Certified and Master DISC</h5>
                        <p>
                            Become a DISC expert with our self-paced, internationally accredited certification training. Designed specifically for 
                            coaches and corporate trainers, our one-on-one instructor-led sessions will teach you how to use DISC completely online 
                            and at your own pace.</p>

                        <p> 
                            Our certifications also include many benefits such as exclusive access to our DISC Certified Trainer Materials, discounted 
                            SILVER LEVEL PRICING, and 10 complimentary DISC assessments when you begin.  
                        </p><br/>

                        <nuxt-link to="/certifications/assessment" class="button outline light">Get DISC Certified</nuxt-link>

                        <br/><br/><br/><br/><br/>

                    </div>

                    <div class="col-4">
                        <img class="image" src="~/assets/badges/new/disc-cert-badge-color.png" alt="placeholder">
                    </div>
                </div>
            </div>
        </section><br/><br/>

        <div class="container">
            <div class="row">
                <div class="col-8">
                    <h3>Want to learn more? Contact us using the form below: </h3>
                    
                    <contact-form redirect="/thank-you" acFormId="17" />
                </div>
            
                <div class="col-4">
                    <LazyHydrate when-visible><survey-sidebar></survey-sidebar></LazyHydrate>
                    <LazyHydrate when-visible><contact-sidebar></contact-sidebar></LazyHydrate>
                </div>
            </div>
        </div><br/><br/>

        <footer-fold></footer-fold>
    </section>
</template>

<script>
    import Nav from '@/components/Nav';
    import Overview360 from '@/components/Overview360';
    import Footer from '@/components/Footer';

    export default {
        components: {
            'main-nav': Nav,
            'overview-360': Overview360,
            'vt-product-sidebar': () => import('@/components/VTProductSidebar'),
            'survey-sidebar': () => import('@/components/SurveySidebar'),
            'contact-sidebar': () => import('@/components/ContactSidebar'),
            'contact-form': () => import('@/components/ContactForm'),
            'footer-fold': Footer
        },
        head() {
            return {
                title: 'Success Using Assessments | Assessments 24x7',
                meta: [
                    {
                        hid: 'description',
                        name: 'description',
                        content: 'Tune in to discover the multiple ways that our clients are actively and successfully using assessments in their businesses.  We’ve got a great line-up representing 3 very distinct industries...'
                    }
                ]
            }
        }
    }
</script>

<style lang="scss" scoped>
    .skeleton {
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

        .pdf-icon {
            width: 24px;
            margin-right: 5px;
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

        .image {
            border-radius: 10px;
            width: 100%;
            max-width: 300px;
            margin: 20px auto 0;
            display: block;
        }

        .contact-form {
            border-radius: 20px;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
            padding: 30px;
            margin-bottom: 10px !important;
        }

        .certification {
            background: rgb(0,51,197);
            background: url('~assets/artifacts/ribbon.png'), linear-gradient(218deg, #0999fe, #0249ec, #0999fe);
            background-size: cover;
            background-position: center;
            padding: 80px 0 0;

            .title {
                font-size: 24pt;
                margin: 20px 0 0;
                position: relative;
                color: #fff;
            }
            
            p {
                color: #fff;
            }

            p, .button {
                position: relative;
            }

            .image {
                width: 100%;
                margin-bottom: -8px;
            }
        }
    }
</style>