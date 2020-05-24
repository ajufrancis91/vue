<template>
  <div class="text-center">
    <v-btn class="ma-2" outlined color="indigo" v-on:click.prevent="logout">Logout</v-btn>
  </div>
</template>
<script>
export default {
  data () {
    return {
    }
  },
 methods:{
    logout: function(){
          this.$store.dispatch('update_user_name','');
          
          // save login status in localstorage
          localStorage.removeItem('login')
          
          // redirect to user page
          this.$router.push('/login')
    }
 }
}
</script>