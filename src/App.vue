<template>
<div :class="{'nav-open': $sidebar.showSidebar}">
    <notifications></notifications>
    <router-view></router-view>
  </div>
</template>

<script>

 // Make it available to other modules
import {userRef} from "./main.js"
import authenticated from "./main.js"
export default {
  name: 'App',
        data() {
            return {
                mockAccount: {
                    username: "leocj",
                    password: "1234567890"
                }
            }
        },
        mounted() {
            if(!this.authenticated) {
                this.$router.replace({ name: "login" });
            }
        },
  methods: {
      testing: function(){
        this.$http.get(userRef+".json").then(response => {

          // get body data
          console.log(response.body);

        }, response => {
          // error callback
        });
      },
      testingPost: function(){
        this.$http.post(userRef+".json",{"name":"leo"}).then(response => {
          // get body data
          console.log(response.body);
        }, response => {
          // error callback
        });
      },
       setAuthenticated(status) {
                this.authenticated = status;
            },
            logout() {
                this.authenticated = false;
            }
    }
};
</script>

