<template>
  <p class="font-weight-black red--text" v-if="invalid">email or password is incorrect!</p>
</template>

<script>
import store from "../store/store";
  export default {
  data () {
    return {
        invalid:false
    }
  }
  }
</script>
