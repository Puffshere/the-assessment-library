<template>
    <section class="body">
        <div class="hero">
            <div class="container">
                <h1 style="font-style: italic; font-weight: 500;">HireSense</h1>
                <p>Employers spend an enormous amount on hiring—an average of $4,129 per job in the United States,
                    according to
                    Society for Human Resource Management estimates, and many times that amount for managerial roles—and
                    the
                    United
                    States fills a staggering 66 million jobs a year. Most of the $20 billion that companies spend on
                    human
                    resources vendors goes to hiring.
                </p>
                <h3 style="font-weight: 600;">What is HireSense?</h3>
                <p>A subscription based hiring process saving time and money, while elevating the quality of hire
                    Instead of per-test fees, a subscription gives unlimited use of the features of HireSense. <br />
                    This is better because of: <br />
                <ul style="padding-bottom: 30px;">
                    <li>
                        Predictable costs: total cost is known before you get started.
                    </li>
                    <li>Lower total costs: The effectiveness of HireSense delivering accurate data reduces time to make
                        a
                        decision
                        and reduces the cost of multiple interviews.
                    </li>
                    <li>
                        Reduced time spent on hiring process: Instead of a screening interview for all applicants the
                        final
                        decision
                        making interview it reserved for the best fit applicants, the ones at the top of the "hiring
                        funnel."
                    </li>
                </ul>
                </p>
            </div>
        </div>
        <div class="calculator">
            <div class="container">
                <div class="col-12" style="width: 100%;">
                    <h1
                        style="background-color: #fe6702; padding: 10px; font-style: italic; width: 100%; text-align: center; border-radius: 10px; color: #1d1d1d;">
                        HireSense app Subscription Requires Certification Training
                    </h1>
                </div>
                <div class="row">
                    <div class="col-6" style="text-align: center;">
                        <h2 style="text-align: left; margin-left: 50px;">Company Information</h2>
                        <div class="input-group">
                            <div class="label-input-pair">
                                <h3>Employees</h3>
                                <input type="text">
                            </div>
                            <div class="label-input-pair">
                                <h3>Average Salary</h3>
                                <input type="text">
                            </div>
                            <div class="label-input-pair">
                                <h3>Average Attrition</h3>
                                <input type="text">
                            </div>
                            <div class="label-input-pair">
                                <h3>Monthly Applicants</h3>
                                <input type="text">
                            </div>
                        </div>
                    </div>
                    <div class="col-6" style="text-align: center;">
                        <h2 style="text-align: left; margin-left: 50px;">Results with HireSense</h2>
                        <div class="col-6">
                            <h3>Attrition rate <br />
                                change</h3>
                            <input type="text" style="background-color: #d9eafd; min-height: 50px; text-align: center;">
                        </div>
                        <div class="col-6">
                            <h3>Reduction in <br />
                                Annual Hiring Cost</h3>
                            <input type="text" style="background-color: #d9eafd; min-height: 50px; text-align: center;">
                        </div>
                    </div>
                </div>
                <hr style="height: 5px; border: none; background-color: #1d1d1d;">
                <div class="row">
                    <div class="col-6">
                        <h2 style="margin-left: 50px;">What Turnover costs currently</h2>
                    </div>
                    <div class="col-6">
                        <h2 style="text-align: center;">What you get</h2>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>


<script>
export default {
    components: {

    },
    head() {
        return {
            title: 'HIRESENSE CALCULATOR | Assessments 24x7',
            meta: [
                {
                    hid: 'description',
                    name: 'description',
                    content: 'A tool to estimate the cost of adding new employees.'
                }
            ]
        }
    }
}
</script>


<style scoped>
.body {
    padding-bottom: 100px;
}

h1 {
    font-size: 32px;
    line-height: 38.4px;
}

h2 {
    font-size: 24px;
    line-height: 31.2px;
}

h3 {
    font-size: 18.72px;
    line-height: 26.2px;
}

h4 {
    font-size: 16px;
    line-height: 24px;
}

h5 {
    font-size: 13.28px;
    line-height: 21.2px;
}

.hero {
    background-color: #027bfe;
    color: white;
    padding: 20px 20px;
}

.input-group {
    display: flex;
    flex-direction: column;
    align-items: right;
}

.label-input-pair {
    display: flex;
    align-items: center;
}

.label-input-pair h3 {
    margin-right: 10px;
    width: 100%;
    text-align: center;
}

.label-input-pair input {
    background-color: #d9eafd;
    flex: 1;
    padding: 5px;
    font-size: 1em;
    text-align: right;
}

/* colors
#027bfe blue
#7e02fe purple
#fe6702 orange 
*/
</style>