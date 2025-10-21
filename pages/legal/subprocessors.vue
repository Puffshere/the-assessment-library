<template>
    <section class="subprocessors">

        <section class="header">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <h1 class="section-title">Subprocessors (3rd Parties)</h1>
                        <p>
                            Assessments 24x7 uses the following sub-processors to provide infrastructure and services to
                            assist
                            us in providing our Services to you.
                        </p>
                    </div>
                </div>
            </div>
        </section>

        <div class="container">
            <div class="row">
                <div class="col-12">
                    <h2>Subprocessors</h2>
                    <p>Last updated: <b>11/02/2020</b></p>

                    <table style="width:100%">
                        <thead>
                            <tr>
                                <th>Entity</th>
                                <th>Purpose</th>
                                <th>Location</th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr>
                                <td>PayPal</td>
                                <td>Used by Processor for payments and Invoicing.</td>
                                <td>United States</td>
                            </tr>
                            <tr>
                                <td>Facebook</td>
                                <td>Facebook is used by the Processor to provide chat based Support to customers, engagement
                                    and advertising using the Facebook tracking pixel.</td>
                                <td>United States</td>
                            </tr>
                            <tr>
                                <td>LinkedIn</td>
                                <td>LinkedIn is used by the Processor to provide advertising using the LinkedIn Insights
                                    tracking pixel.</td>
                                <td>United States</td>
                            </tr>
                            <tr>
                                <td>Reddit</td>
                                <td>Reddit is used by the Processor to provide advertising using the Reddit tracking pixel.
                                </td>
                                <td>United States</td>
                            </tr>
                            <tr>
                                <td>Google</td>
                                <td>Google provides email services and document management services used by the Processor to
                                    facilitate general business processes and communications with customers and third
                                    parties. Google also provides Analytics and Marketing Tools that are utilized.</td>
                                <td>United States</td>
                            </tr>
                            <tr>
                                <td>Authorize.net</td>
                                <td>Payments and Invoicing used by Processor.</td>
                                <td>United States</td>
                            </tr>
                            <tr>
                                <td>Infusionsoft</td>
                                <td>Infusionsoft is an Automation CRM used by the Processor to manage customer communication
                                    and management.</td>
                                <td>United States</td>
                            </tr>
                            <tr>
                                <td>AppointmentCore</td>
                                <td>AppointmentCore is a scheduling and appointment booking service to support our
                                    customers.</td>
                                <td>United States</td>
                            </tr>
                            <tr>
                                <td>Microsoft Azure</td>
                                <td>Cloud provider hosting Customer Data, Cloud Infrastructure, logging and reporting for
                                    our apps and services.</td>
                                <td>Global, primarily in the United States</td>
                            </tr>
                            <tr>
                                <td>PlusThis</td>
                                <td>PlusThis is an Infusionsoft add-on that adds additional features to Infusionsoft
                                    (Automation CRM used by the Processor to manage customer communications.)</td>
                                <td>United States</td>
                            </tr>
                            <tr>
                                <td>InstaPage</td>
                                <td>Website landing page and contact form builder used by Processor.</td>
                                <td>United States</td>
                            </tr>
                            <tr>
                                <td>Zoom</td>
                                <td>Zoom is a web conference service used by the Processor to provide support.</td>
                                <td>United States</td>
                            </tr>
                            <tr>
                                <td>Zapier</td>
                                <td>Workflow Automation used by Processor.</td>
                                <td>United States</td>
                            </tr>
                            <tr>
                                <td>YouTube</td>
                                <td>Video Hosting used by Processor.</td>
                                <td>United States</td>
                            </tr>
                            <tr>
                                <td>E-Junkie</td>
                                <td>Payments and Invoicing used by Processor.</td>
                                <td>India</td>
                            </tr>
                            <tr>
                                <td>WaveApps</td>
                                <td>Payments and Invoicing used by Processor.</td>
                                <td>Canada</td>
                            </tr>
                            <tr>
                                <td>Stripe</td>
                                <td>Payments and Invoicing used by Processor.</td>
                                <td>United States</td>
                            </tr>
                            <tr>
                                <td>RingCentral</td>
                                <td>Phone Systems and Software used by Processor.</td>
                                <td>United States</td>
                            </tr>
                            <tr>
                                <td>Bing</td>
                                <td>Advertising and Marketing platform used by Processor.</td>
                                <td>United States</td>
                            </tr>
                            <tr>
                                <td>LightSpeed VT</td>
                                <td>Virtual Training System for our clients.</td>
                                <td>United States</td>
                            </tr>
                            <tr>
                                <td>GoDaddy Operating Company, LLC.</td>
                                <td>GoDaddy Operating Company, LLC provides website hosting services for our website as well
                                    as marketing materials.</td>
                                <td>United States</td>
                            </tr>
                            <tr>
                                <td>Heroku</td>
                                <td>Heroku is a cloud based hosting infrastructure provider used by Processor for hosting
                                    select services.</td>
                                <td>United States</td>
                            </tr>
                            <tr>
                                <td>Microsoft Clarity</td>
                                <td>Web Analytics and traffic mapping used by Processor for internal product development
                                    purposes.</td>
                                <td>United States</td>
                            </tr>
                            <tr>
                                <td>Tawk.to</td>
                                <td>Live chat and customer support platform used by Processor.</td>
                                <td>United States</td>
                            </tr>
                            <tr>
                                <td>Cloudflare</td>
                                <td>Cloud based DNS services and security platform used by Processor.</td>
                                <td>United States</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>

        <footer-fold></footer-fold>
    </section>
</template>

<script>
import Footer from '@/components/Footer';

export default {
    components: {
        'footer-fold': Footer
    },
    data() {
        return {

        }
    },
    head() {
        return {
            title: 'Data Privacy and Security: Assessments 24x7 Subprocessors',
            meta: [
                {
                    hid: 'description',
                    name: 'description',
                    content: 'Discover the robust data privacy and security measures at Assessments 24x7 through our trusted subprocessors. Gain insights into our partnerships and how they ensure the utmost protection of your valuable data.'
                }
            ]
        }
    }
}
</script>

<style lang="scss" scoped>
.subprocessors {
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

    table {
        border-collapse: collapse;
        margin: 30px 0 60px;

        thead {
            background: #1e222d;
            color: #fff;

            th {
                border: 1px solid #58617d;
            }
        }

        tbody {
            tr {
                td {
                    border: 1px solid #ddd;

                    a {
                        font-weight: 700;
                        color: #1e222d;
                    }
                }

                &:nth-child(even) {
                    background-color: #f5f5f5;
                }
            }
        }

        td,
        th {
            padding: 8px;
        }
    }
}
</style>