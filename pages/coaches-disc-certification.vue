<template>
  <section>
    <LazyHydrate when-visible><main-nav class="nav"></main-nav></LazyHydrate>
    <section>
      <div class="container">
        <div class="row">
          <div class="col-12">
            <div class="col-7">
              <h2 style="line-height: 54px;">
                Unlock the Full Potential <br />
                of Your <br />
                Coaching <br />
                with DISC Certification
              </h2>
              <h4>
                Earn <span class="hyperlink" @click="scrollToSection" style="cursor: pointer;">ICF Credits</span> While
                <img
                  src="~assets/coaches-disc-certification/blue-arrow.png"
                  alt="hero image" class="arrow">
                <br />
                Enhancing Your Coaching Efficacy
              </h4>
              <button class="light-blue" style="margin-top: 20px;" @click="scrollToSectionButton">
                Get Started Today
              </button>
            </div>
            <div class="col-5">
              <img src='~assets/man.png'
                alt="male business man" class="manSmiling" />
            </div>
          </div>
        </div>
      </div>
    </section>
    <LazyHydrate when-visible><icf-credits></icf-credits></LazyHydrate>
    <LazyHydrate when-visible>
      <strive></strive>
    </LazyHydrate>
    <LazyHydrate when-visible><why-disc></why-disc></LazyHydrate>
    <LazyHydrate when-visible><client-success></client-success></LazyHydrate>
    <LazyHydrate when-visible>
      <foundation></foundation>
    </LazyHydrate>
    <LazyHydrate when-visible><what-you-recieve></what-you-recieve></LazyHydrate>
    <LazyHydrate when-visible><contact-form></contact-form></LazyHydrate>
    <LazyHydrate when-visible><footer-fold class="foot"></footer-fold></LazyHydrate>
  </section>
</template>

<script>
import LazyHydrate from 'vue-lazy-hydration';
import Nav from '@/components/Nav';
import ICFCredits from '@/components/coachesDISCCertification/CDCICFCreditsFold';
import Strive from '@/components/coachesDISCCertification/CDCStriveFold';
import WhyDISC from '@/components/coachesDISCCertification/CDCWhyDISCCertification';
import ClientSuccess from '@/components/coachesDISCCertification/CDCClientSuccess';
import Foundation from '@/components/coachesDISCCertification/CDCFoundation';
import WhatYouRecieve from '@/components/coachesDISCCertification/CDCWhatYouRecieve';
import ContactForm from '@/components/coachesDISCCertification/CDCContactFormFold';
import Footer from '@/components/Footer';

export default {
  components: {
    LazyHydrate,
    'main-nav': Nav,
    'icf-credits': ICFCredits,
    'strive': Strive,
    'why-disc': WhyDISC,
    'client-success': ClientSuccess,
    'foundation': Foundation,
    'what-you-recieve': WhatYouRecieve,
    'contact-form': ContactForm,
    'footer-fold': Footer
  },
  methods: {
    scrollToSection(event) {
      const element = document.getElementById('icfSection');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
      event.target.blur();
    },
    scrollToSectionButton(event) {
      const element = document.getElementById('cdcContactForm');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
      event.target.blur();
    },
    handleIntersection(entries) {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-rise');
        } else {
          entry.target.classList.remove('animate-rise');
        }
      });
    }
  },
  mounted() {
    const observer = new IntersectionObserver(this.handleIntersection, {
      threshold: 0 // Adjust this as needed
    });

    // Select each child element to be observed
    const elements = document.querySelectorAll('.col-7 h2, .col-7 h4, .col-7 button');
    elements.forEach(element => {
      observer.observe(element);
    });
  },
  head() {
    return {
      title: 'Coaches DISC Certification | Assessments 24x7',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: ''
        }
      ]
    }
  }
}
</script>

<style scoped>
@import 'components/coachesDISCCertification/CDC.scss';

.container {
  padding: 50px 0;
  padding-top: 30px;
  padding-bottom: 70px;
}

h4 {
  line-height: 38px;
}

.col-7 .arrow {
  width: 5%;
  margin-top: -40px;
}

.col-5 img {
  width: 100%;
  margin-top: 15px;
  opacity: 1 !important;
  transform: none !important;
}

@keyframes rise {
  from {
    transform: translateY(1in);
    opacity: 0;
  }

  to {
    transform: translateY(0);
    opacity: 1;
  }
}

.col-7 h2,
.col-7 h4,
.col-7 button {
  opacity: 0;
  transform: translateY(1in);
  transition: all 0.5s ease-out;
}

.animate-rise {
  animation: rise 1.25s ease-out forwards;
}
</style>