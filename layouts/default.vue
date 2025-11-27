<template>
    <div>
        <nuxt />
    </div>
</template>

<script>
export default {
    head() {
        return {
            link: [
                {
                    rel: 'canonical',
                    href: 'https://www.theassessmentlibrary.com' + this.$route.path
                }
            ]
        }
    }
}
</script>

<style lang="scss">
@import '~assets/scss/app';

*,
::after,
::before {
    box-sizing: border-box;
}

body {
    font-family: $font-family;
    margin: 0;
    padding: 0px;
    overflow-x: hidden;
    z-index: 0;
    position: relative;
}

img {
    vertical-align: middle;
    border-style: none;
}

.body.wp {
    .dropcap {
        float: left;
        font-size: 45px;
        line-height: 1;
        font-weight: 800;
        margin-right: 9px;
        text-shadow: #ffbd06 .05em .05em;
    }

    blockquote {
        background: #f9f9f9;
        margin: 36px 0;
        padding: 10px 35px;
        color: #4c4c4c;
        border-left: 8px solid #02bbff;
    }

    .wp-caption.alignleft {
        float: left;
    }

    .wp-caption-text {
        text-align: center;
        font-size: 10pt;
        color: #666;
    }

    hr {
        margin: 40px 0;
    }

    a {
        color: #000;
        font-weight: 600;
        position: relative;
        text-decoration: none;
        z-index: 0;
        transition: background .2s linear;

        &::after {
            content: '';
            position: absolute;
            left: 0;
            display: inline-block;
            height: 1em;
            width: 100%;
            border-bottom: 3px solid rgba(0, 168, 255, .3);
            margin-top: 7px;
            z-index: -1;
        }

        &:hover {
            background: #ffc73e;
        }
    }

    .wp-caption a {
        &:hover {
            background: transparent;
        }
    }
}
</style>
