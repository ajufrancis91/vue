<template>
<div :class="{'nav-open': $sidebar.showSidebar}">
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
                
            }
        },
        mounted() {

        },
  methods: {

    }
};
</script>

