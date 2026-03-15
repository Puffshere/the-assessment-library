<template>
    <section class="about-sub">
        <main-nav />
        <div class="container">
            <div class="content">
                <h1>Full Reports</h1>
                <p class="lead">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                    exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <p>
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                    fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde
                    omnis iste natus error sit voluptatem accusantium doloremque laudantium.
                </p>
                <p>
                    Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed
                    quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque
                    porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur.
                </p>
            </div>
        </div>
        <footer-fold />
    </section>
</template>

<script>
export default {
    name: 'AboutFullReports',
    components: {
        'main-nav': () => import('@/components/Nav'),
        'footer-fold': () => import('@/components/Footer')
    }
}
</script>

<style scoped lang="scss">
.about-sub {
    min-height: 100vh;
    background: #f9fafc;
}

.container {
    max-width: 760px;
    margin: 0 auto;
    padding: 120px 24px 64px;
}

.content {
    h1 {
        font-family: 'Merriweather', 'Georgia', serif;
        font-size: 36px;
        color: #12304d;
        margin-bottom: 24px;
    }

    .lead {
        font-size: 18px;
        line-height: 1.7;
        color: #333;
        margin-bottom: 20px;
    }

    p {
        font-size: 16px;
        line-height: 1.8;
        color: #555;
        margin-bottom: 16px;
    }
}
</style>
