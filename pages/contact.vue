<template>
    <div class="contact">
        <main-nav active="contact" />
        <LazyHydrate when-visible><contact-header></contact-header></LazyHydrate>

        <div class="container">
            <div class="row">
                <div class="col-8">
                    <contact-form />
                </div>
            
                <div class="col-4">
                    <LazyHydrate when-visible><contact-sidebar></contact-sidebar></LazyHydrate>
                    <LazyHydrate when-visible><blog-sidebar count="4"></blog-sidebar></LazyHydrate>
                </div>
            </div>
        </div>

        <LazyHydrate when-visible><reviews></reviews></LazyHydrate>
        <LazyHydrate when-visible><footer-fold></footer-fold></LazyHydrate>
    </div>
</template>

<script>
    import LazyHydrate from 'vue-lazy-hydration';

    export default {
        components: {
            LazyHydrate,
            'main-nav': () => import('@/components/Nav'),
            'footer-fold': () => import('@/components/Footer'),
            'contact-header': () => import('@/components/ContactHeader'),
            'reviews': () => import('@/components/Reviews'),
            'blog-sidebar': () => import('@/components/BlogSidebarLatest'),
            'contact-sidebar': () => import('@/components/ContactSidebar'),
            'contact-form': () => import('@/components/ContactForm')
        },
        data() {
            return {
                firstName: '',
                lastName: '',
                website: '',
                structuredDataBreadcrumbs: {
                    "@context": "http://schema.org",
                    "@type": "BreadcrumbList",
                    "itemListElement": [
                        {
                            "@type": "ListItem",
                            "position": "1",
                            "item": {
                                "@id": "https://assessments24x7.com/contact",
                                "name": "Contact Us" 
                            } 
                        }
                    ]
                }
            }
        },
        head() {
            return {
                __dangerouslyDisableSanitizers: ['script'],
                script: [
                    {
                        innerHTML: JSON.stringify(this.structuredDataBreadcrumbs),
                        type: 'application/ld+json'
                    }
                ],
                title: 'Contact Us | Assessments 24x7',
                meta: [
                    {
                        hid: 'description',
                        name: 'description',
                        content: 'We can\'t wait to solve your assessment needs. Call us at +1 (206) 400-6647 or send an email to sales@assessments24x7.com. For better assistance, use our contact form to get to the right representative.'
                    }
                ]
            }
        },
    }
</script>
