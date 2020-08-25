<template>
    <section class="survey-sidebar">
        <img class="image" src="~/assets/disc-logo.png" alt="DISC Virtual Training">
        <h2>DISC Virtual Training + 83-Page DISC Platinum Rule eWorkbook</h2>

        <p class="price">
            <strike>$99.00</strike> $49.00
        </p>

        <p class="lead-in">
            Get this exciting offer from the webinar featuring DISC Virtual Training access + the 83-page DISC Platinum 
            Rule eWorkbook by Dr. Tony Alessandra for 50% off!
        </p>

        <a target="_blank" href="https://rz189.infusionsoft.app/app/orderForms/DISC-Virtual-Training--82-Page-DISC-Platinum-Rule-eWorkbook" class="button danger">Redeem Bonus Offer</a>
    </section>
</template>

<script>
    export default {}
</script>

<style lang="scss" scoped>
    .survey-sidebar {
        margin-bottom: 60px;

        .image {
            width: 100%;
            max-width: 200px;
            margin: 50px auto 0;
            display: block;
        }

        .price {
            font-weight: 600;
            font-size: 14pt;
            margin-top: -10px;

            strike {
                color: red;
                font-weight: 200 !important;
            }
        }

        .lead-in {
            font-size: 11pt;
            margin-bottom: 20px;
        }

        .contact-item {
            margin-top: -8px;
        }

        .contact-social {
            margin-right: 18px;
            margin-top: 22px;
            color: #000;
        }
    }
</style>