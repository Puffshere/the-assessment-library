<template>
    <section class="simple-hero" :style='`background-image: url("${backgroundImage}")`'>
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <p>{{ subtitle }}</p>
                    <h1>{{ title }}</h1>
                </div>
            </div>
        </div>
    </section>    
</template>

<script>
    export default {
        props: ['title', 'subtitle', 'backgroundImage']
    }
</script>


<style lang="scss" scoped>
    @import '~assets/scss/vars';

    .simple-hero {
        background-size: cover !important;
        padding: 50px 0;
        color: #fff;
        text-align: center;
        margin-top: 79px;

        p {
            font-family: $font-alt;
            text-transform: uppercase;
            letter-spacing: 1px;
            font-size: 14pt;
            color: rgba(255,255,255,.5);
        }

        h1 {
            font-size: 30pt;
            line-height: 34pt;
            font-weight: 700;
            margin-top: 0;
        }
    }
</style>
