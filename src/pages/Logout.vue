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
          this.$store.state.email='';
          this.$store.state.username='';
          this.$store.state.companyCode='';
          this.$store.state.userKey='';
          // save login status in localstorage
          localStorage.setItem('login',false)
          // redirect to user page
          this.$router.push('/login')
    }
 }
}
</script>