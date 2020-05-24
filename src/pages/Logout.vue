<template>
  <div class="text-center">
    <v-btn class="ma-2" outlined color="indigo" v-on:click.prevent="logout">Logout</v-btn>
  </div>
</template>
<script>
import store from "../store/store";
export default {
  data () {
    return {
    }
  },
 methods:{
    logout: function(){
          store.state.email='';
          // save login status in localstorage
          localStorage.setItem('login',false)
          // redirect to user page
          this.$router.push('/login')
    }
 }
}
</script>