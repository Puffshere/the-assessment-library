<template>
    <section class="about-header">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <h1 class="section-title">We are the global leader in assessment technology, built on family values.</h1>
                </div>
            </div>

            <div class="row">
                <div class="col-3">
                    <span class="stat">20+</span>
                    <p class="stat-label">Years in Business</p>
                </div>

                <div class="col-3">
                    <span class="stat">172</span>
                    <p class="stat-label">Certified Practitioners</p>
                </div>

                <div class="col-3">
                    <span class="stat">13</span>
                    <p class="stat-label">Employees</p>
                </div>

                <div class="col-3">
                    <span class="stat">7+ MM</span>
                    <p class="stat-label">Assessments Given</p>
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
    .about-header {
        background: url('~assets/about.jpg');
        background-size: cover;
        color: #fff;
        text-align: center;
        padding: 70px 0;

        .section-title {
            font-size: 30pt;
            margin-top: 0;
        }

        .stat {
            font-size: 40pt;
            font-weight: 600;
            color: #ffbd07;
        }

        .stat-label {
            margin: 0;
            font-weight: 600;
            margin-top: -15px;
        }
    }
</style>
