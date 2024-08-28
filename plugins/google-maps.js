import Vue from 'vue';
import * as VueGoogleMaps from 'vue2-google-maps';

Vue.use(VueGoogleMaps, {
  load: {
    key: process.env.NUXT_ENV_GOOGLE_MAPS_SECRET_KEY,
    libraries: 'places', 
  },
});
