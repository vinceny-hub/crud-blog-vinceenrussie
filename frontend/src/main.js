import Vue from 'vue';               // import of diverses libraries needed and base configuration of vuejs
import App from './App.vue';
// import router from './router';
import Embed from 'v-video-embed'
import VueSimpleAlert from "vue-simple-alert";
import VueCoreVideoPlayer from 'vue-core-video-player'
import Media from '@dongido/vue-viaudio'
import VideoPlayer from 'vue-videojs7'



import TextareaAutosize from 'vue-textarea-autosize'
import { router } from './router';
import store from './store';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import VeeValidate from 'vee-validate';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import {
  faHome,
  faUser,
  faUserPlus,
  faSignInAlt,
  faSignOutAlt
} from '@fortawesome/free-solid-svg-icons';

library.add(faHome, faUser, faUserPlus, faSignInAlt, faSignOutAlt);

Vue.config.productionTip = false;
Vue.use(VideoPlayer)
Vue.use(Media)
Vue.use(VueCoreVideoPlayer)
Vue.use(VeeValidate);
Vue.component('font-awesome-icon', FontAwesomeIcon);
Vue.use(TextareaAutosize)
Vue.use(VueSimpleAlert);
Vue.use(Embed)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
