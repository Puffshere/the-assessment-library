<template>
    <section class="accessibility">
        <main-nav/>

        <section class="header">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <h1 class="section-title">Accessibility Statement for Assessments 24x7</h1>
                        <p>
                            This is an accessibility statement from Assessments 24x7. 
                        </p>
                    </div>
                </div>
            </div>
        </section>

        <div class="container">
            <div class="row">
                <div class="col-12">
                    <p>
                        Nearly 2 million people complete our assessments to help improve personal relationships and working relationships. Within this group of people, we sometimes receive requests about Section 508 compliance regarding individuals with visual impairments. 
                    </p>

                    <p>
                        The United States government requires federal agencies to “make their electronic and information technology accessible to people with disabilities. Inaccessible technology interferes with an ability to obtain and use information quickly and easily. Section 508 was enacted to eliminate barriers in information technology, open new opportunities for people with disabilities, and encourage development of technologies that will help achieve these goals.” More details: https://www.section508.gov/manage/laws-and-policies
                    </p>

                    <p>
                        While Assessments 24x7 is not required to maintain compliance with Section 508, we do strive to make our platform and tools accessible to everyone. While taking one of our assessments, the webpages and questions can be magnified. Another common option that is used is to have a person read the questions and mark the answers on behalf of the individual. 
                    </p>

                    <p>
                        All our reports are completed and delivered in PDF format, which allows individuals with disabilities to utilize other 3rd party programs or screen-reading software. 
                    </p>

                    <p>
                        We also welcome feedback and suggestions on the experience and will continue to do our best to support the software.
                    </p>

                    <h3>Measures to Support Accessibility</h3>

                    <p>
                        Assessments 24x7 takes the following measures to ensure accessibility of Assessments 24x7: 
                    </p>

                    <ul>
                        <li>Include accessibility throughout our internal policies.</li>
                        <li>Appoint an accessibility officer and/or ombudsperson.</li>
                    </ul>

                    <h3>Conformance Status</h3>

                    <p>
                        The Web Content Accessibility Guidelines (WCAG) defines requirements for designers and developers to improve accessibility for people with disabilities. It defines three levels of conformance: Level A, Level AA, and Level AAA. Assessments 24x7 is nonconformant with WCAG 2.1 level AA. Nonconformant means that the content does not conform to the accessibility standard. 
                    </p>

                    <h3>Feedback</h3>

                    <p>
                        We welcome your feedback on the accessibility of Assessments 24x7. Please let us know if you encounter accessibility barriers on Assessments 24x7: 
                    </p>

                    <p>
                        Phone: 1 (206) 400-6647<br/>
                        E-mail: hello@assessments247.com<br/>
                        Visitor Address: 2840 Mikayla Lane, East Wenatchee, WA 98802<br/>
                        Postal Address: 2840 Mikayla Lane, East Wenatchee, WA 98802
                    </p>

                    <p>
                        We try to respond to feedback within 2 business days. 
                    </p>

                    <h3>Technical Specifications</h3>

                    <p>
                        Accessibility of Assessments 24x7 relies on the following technologies to work with the particular combination of web browser and any assistive technologies or plugins installed on your computer: 
                    </p>

                    <p>
                        HTML<br/>
                        CSS<br/>
                        JavaScript
                    </p>

                    <p>
                        These technologies are relied upon for conformance with the accessibility standards used.
                    </p>

                    <h3>Assessment Approach</h3>

                    <p>
                        Assessments 24x7 assessed the accessibility of Assessments 24x7 by the following approaches:<br/>Self-evaluation
                    </p>

                    <p>
                        Dated: 10/28/2022
                    </p>
                </div>
            </div>
        </div>

        <footer-fold/>
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

            }
        }
    }
</script>

<style lang="scss" scoped>
    .accessibility {
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
    }
</style>