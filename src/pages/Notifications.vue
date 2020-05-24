<template>
  <card title="Settings" sub-title="Custom settings for BuildIn">
    <div>
      <view-company-list></view-company-list>
    </div>
    <div>
      <view-project-list></view-project-list>
    </div>
    <div>
      <view-user-list></view-user-list>
    </div>
  </card>
</template>
<script>
import ViewCompanyList from "./UserProfile/ViewCompanyList.vue";
import ViewProjectList from "./UserProfile/ViewProjectList.vue";
import ViewUserList from "./UserProfile/ViewUserList.vue";

export default {
   components: {
    ViewCompanyList,
    ViewProjectList,
    ViewUserList
  },
  data() {
    return {
      type: ["", "info", "success", "warning", "danger"],
      notifications: {
        topCenter: false
      }
    };
  },
  methods: {
    notifyVue(verticalAlign, horizontalAlign) {
      const color = Math.floor(Math.random() * 4 + 1);
      this.$notify({
        icon: "ti-gift",
        horizontalAlign: horizontalAlign,
        verticalAlign: verticalAlign,
        type: this.type[color]
      });
    }
  }
};
</script>
<style>
</style>
