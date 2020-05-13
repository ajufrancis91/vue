<template>
  <div :class="{'nav-open': $sidebar.showSidebar}">
    <notifications></notifications>
    <router-view></router-view>
<span v-on:click="testing()">#####</span>
<span v-on:click="testingPost()">post</span>
  </div>
</template>

<script>

 // Make it available to other modules
import {userRef} from "./main.js"
export default {
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
      }
    }
};
</script>

<style lang="scss">
.vue-notifyjs.notifications {
  .alert {
    z-index: 10000;
  }
  .list-move {
    transition: transform 0.3s, opacity 0.4s;
  }
  .list-item {
    display: inline-block;
    margin-right: 10px;
  }
  .list-enter-active {
    transition: transform 0.2s ease-in, opacity 0.4s ease-in;
  }
  .list-leave-active {
    transition: transform 1s ease-out, opacity 0.4s ease-out;
  }

  .list-enter {
    opacity: 0;
    transform: scale(1.1);
  }
  .list-leave-to {
    opacity: 0;
    transform: scale(1.2, 0.7);
  }
}
</style>
