<template>
    <div class="confidenceMeter">
        <div class="container">
            <div class="row">
                <h4>
                    Confidence: 73%
                </h4>
                <div class="confidence-bar" role="img" :aria-label="`Confidence ${clampedValue}%`">
                    <div class="confidence-bar__fill" :style="{ width: clampedValue + '%' }">
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
export default {
    name: 'ConfidenceBar',
    props: {
        value: {
            type: Number,
            required: true
        }
    },
    computed: {
        clampedValue() {
            return Math.max(0, Math.min(100, Math.round(this.value)));
        }
    }
};
</script>

<style lang="scss">
@import '~assets/scss/vars';
@import '~assets/scss/new-styles';

.confidenceMeter {

    h4 {
        margin-top: 0px;
        margin-bottom: 0px;
        text-align: center;
        color: rgb(59, 59, 59);
        font-weight: 400;
    }

    /* Outer track */
    .confidence-bar {
        width: 100%;
        height: 30px;
        background: #f6f6f7;
        border-radius: 6px;
        overflow: hidden;
        border: 2px solid rgba(0, 0, 0, 0.068);
        box-shadow: 4px 4px 8px #12304d8c;
    }

    /* Filled portion */
    .confidence-bar__fill {
        height: 100%;
        width: 0;
        border-radius: 6px;

        /* Gradient progression */
        background: linear-gradient(90deg,
                #0ac70411 0%,
                /* #ffbc05be 35%,
            #0dab4ab7 65%, */
                #0ac704 100%);

        transition: width 600ms cubic-bezier(0.2, 0.85, 0.25, 1);
    }
}
</style>