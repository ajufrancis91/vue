<template>
  <footer class="footer">
    <div class="container-fluid d-flex flex-wrap justify-content-between">
      <nav>
        <ul>
          <li>
            <router-link :to="{path:'/dashboard'}">Dashboard</router-link>
          </li>
        
        </ul>
      </nav>
        <li>
            <Logout></Logout>
            </li>
    </div>
  </footer>
</template>
<script>
import Logout from "../../pages/Logout.vue"
export default {
components: {
    Logout
  }
};
</script>
<style>
</style>
