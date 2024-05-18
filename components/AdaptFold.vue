<template>
    <section class="adapt" id="adapt">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <h2>
                        Studies show that leaders who <span style="color: #00a8ff">adapt </span>their communication
                        style to individual preferences experience a <span style="color: #00a8ff">40% </span>increase in
                        team productivity and satisfaction.
                    </h2>
                </div>
            </div>
        </div>
    </section>
</template>


<style lang="scss" scoped>
.adapt {
    background-image: url("~assets/disc-leadership/skyline.png");
    min-height: 700px;
    display: flex;
    justify-content: center;
    align-items: center;

    .container {
        padding: 0 180px;
    }

    h2 {
        color: white;
        font-size: 36px;
        font-weight: 600;
        text-align: left;
        line-height: 48px;
    }
}

@media (max-width: 1100px) {
    .adapt {
        .container {
            padding: 0px 10px;
        }

        h2 {
            font-size: 34px;
            font-weight: 600;
            text-align: center;
            line-height: 48px;
        }
    }
}
</style>