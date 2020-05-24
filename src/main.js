/*!

 =========================================================
 * Vue Paper Dashboard - v2.0.0
 =========================================================

 * Product Page: http://www.creative-tim.com/product/paper-dashboard
 * Copyright 2019 Creative Tim (http://www.creative-tim.com)
 * Licensed under MIT (https://github.com/creativetimofficial/paper-dashboard/blob/master/LICENSE.md)

 =========================================================

 * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

 */

import Vue from "vue";
import App from "./App";
import router from "./router/index";
import VueResource from 'vue-resource'
import * as firebase from "firebase";
import 'firebase/firestore'


import PaperDashboard from "./plugins/paperDashboard";
import Vuetify from "vuetify"
import "../node_modules/vuetify/dist/vuetify.min.css"

import FileUpload from 'v-file-upload';
import { store } from './store/store';
Vue.use(FileUpload)
Vue.use(Vuetify)
const opts = {
  theme: {
    dark: false
  }
};
Vue.use(PaperDashboard);
Vue.use(VueResource);


let config = {
  projectId: "buildin-f0275",
  databaseURL: "https://buildin-f0275.firebaseio.com",
  storageBucket: "gs://buildin-f0275.appspot.com"
};

firebase.initializeApp(config);
const db = firebase.database();

let userRef = db.ref('user')
let companyRef = db.ref('company')
let securityGroupsRef = db.ref('securityGroups')
let adddrawing = db.ref('drawing')
let addrfi = db.ref('rfi')
let clintDrawing = db.ref('clintDrawing')
let projectRef = db.ref('project')

export const dba = firebase.firestore();
export { userRef };
export { companyRef };
export { securityGroupsRef };
export { adddrawing };
export { addrfi };
export { projectRef };
export { clintDrawing };

export default {

  data() {
    return {

    }
  }
}
/* eslint-disable no-new */
new Vue({
  router,
  store,
  render: h => h(App),
  vuetify: new Vuetify(opts),
  created:function(){
    this.checkLogin();
  },
  methods:{
  	checkLogin(){
  		if(!localStorage.getItem('login')){
  			this.$router.push('/login');
        return;
      }
      // if user refresh the page, information stroed in vuex will lost. 
  // so we need to get user information again, based on the information stored in localstorage, 
  // in this application, I only stored a boolean value,
  // but I think in a real life applicaiton, this could be a token or id or somethig else that can be sent to server to identify a user 
  if(!this.$store.username && localStorage.getItem('login'))
  {
    // I am using a fake method.
    this.$store.dispatch('update_user_name','');    
    this.$router.push('/dashboard');
    return;
  }
  // if everything is fine, redirect
  if(this.$store.username && localStorage.getItem('login'))
  {
    this.$router.push('/dashboard');
    return;
  }
  	}
  }
}).$mount("#app");
