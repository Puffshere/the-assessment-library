import Vue from 'vue';
import { MglMap, MglGeojsonLayer } from 'vue-mapbox';
import Mapbox from 'mapbox-gl'
import 'mapbox-gl/dist/mapbox-gl.css'

Vue.component('MglMap', MglMap);
Vue.component('MglGeojsonLayer', MglGeojsonLayer);

Vue.prototype.$mapbox = Mapbox;