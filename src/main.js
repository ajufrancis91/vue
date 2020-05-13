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

import PaperDashboard from "./plugins/paperDashboard";
import "vue-notifyjs/themes/default.css";

Vue.use(PaperDashboard);
Vue.use(VueResource);


let config = {
  projectId: "buildin-f0275",
  databaseURL: "https://buildin-f0275.firebaseio.com"
};

firebase.initializeApp(config);
const db = firebase.database();

let userRef = db.ref('user')
let companyRef = db.ref('company')
let securityGroupsRef = db.ref('securityGroups')

export { userRef };
export { companyRef };
export { securityGroupsRef };
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
  render: h => h(App)
}).$mount("#app");
