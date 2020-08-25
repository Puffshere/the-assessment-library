<template>
    <section class="contact-header">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <h1 class="section-title">The <span>latest</span> assessments news and resources.</h1>
                </div>
            </div>

            <div class="row flex-center">
                <div class="col-8">
                    <p class="body">
                        Articles, how-to guides, and industry news from the global leader in assessment technology.
                    </p>
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
    .contact-header {
        background: url('~assets/blog.jpg');
        background-size: cover;
        background-position-y: top;
        color: #fff;
        text-align: center;
        margin-bottom: 30px;
        padding: 70px 0;

        .section-title {
            font-size: 30pt;
            margin-top: 0;
            margin-bottom: 0;

            span {
                color: #ffbd07;
            }
        }

        .body {
            font-size: 18pt;
            font-weight: 600;
            margin-top: 0;
            margin-bottom: 0;
        }
    }
</style>
