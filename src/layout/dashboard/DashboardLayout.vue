<template>
  <div class="wrapper">
    <side-bar>
      <template slot="links">
        <sidebar-link to="/dashboard" name="Dashboard" icon="ti-panel"/>
        <sidebar-link to="/admin" name="Admin" icon="ti-user"/>
        <sidebar-link to="/table-list" name="View Drawings" icon="ti-view-list-alt"/>
        <sidebar-link to="/typography" name="Add Drawings" icon="ti-save"/>
        <sidebar-link to="/settings" name="Settings" icon="ti-settings"/>
      </template>
    </side-bar>
    <div class="main-panel">
      <top-navbar></top-navbar>

      <dashboard-content @click.native="toggleSidebar">

      </dashboard-content>

      <content-footer>
      </content-footer>
      
    </div>
  </div>
</template>
<style lang="scss">
</style>
<script>
import Logout from "../../pages/Logout.vue"
import TopNavbar from "./TopNavbar.vue";
import ContentFooter from "./ContentFooter.vue";
import DashboardContent from "./Content.vue";
import MobileMenu from "./MobileMenu";
export default {
  components: {
    TopNavbar,
    ContentFooter,
    DashboardContent,
    MobileMenu,
    Logout
  },
  methods: {
    toggleSidebar() {
      if (this.$sidebar.showSidebar) {
        this.$sidebar.displaySidebar(false);
      }
    }
  }
};
</script>
