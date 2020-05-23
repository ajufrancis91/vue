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
import "vue-notifyjs/themes/default.css";

import FileUpload from 'v-file-upload';
import { store } from './store/store';
Vue.use(FileUpload)

Vue.use(PaperDashboard);
Vue.use(VueResource);


let config = {
  projectId: "buildin-f0275",
  databaseURL: "https://buildin-f0275.firebaseio.com",
  storageBucket:"gs://buildin-f0275.appspot.com"
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

export default{
  data() {
    return {
        authenticated: false
    }
}
}
/* eslint-disable no-new */
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
