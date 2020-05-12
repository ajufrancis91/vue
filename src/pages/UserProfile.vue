<template>
    <div class="row">
       <div class="col-xl-4 col-lg-5 col-md-6">
        <user-card>

        </user-card>

      </div>
      <div class="col-xl-8 col-lg-7 col-md-6">

<!-- -->
      <div class="col-xl-8 col-lg-7 col-md-6" v-if="securityGroup === 'cheifArchitect'">
        <add-project>

        </add-project>

      </div>
 <!-- -->

 <!-- -->
      <div class="col-xl-8 col-lg-7 col-md-6"  v-if="securityGroup === 'admin'">
        <create-company>

        </create-company>

      </div>
 <!-- -->
 <!-- -->
      <div class="col-xl-8 col-lg-7 col-md-6"  v-if="securityGroup === 'cheifArchitect'">
        <premote-users>

        </premote-users>

      </div>
 <!-- -->
  <!-- -->
      <div class="col-xl-8 col-lg-7 col-md-6" v-if="securityGroup === 'cheifArchitect'">
        <add-users>

        </add-users>

      </div>
 <!-- -->


      </div>


    </div>



</template>
<script>
import EditProfileForm from "./UserProfile/EditProfileForm.vue";
import UserCard from "./UserProfile/UserCard.vue";
import MembersCard from "./UserProfile/MembersCard.vue";
import AddDrawing from "./UserProfile/AddDrawing.vue";
import CreateCompany from "./UserProfile/CreateCompany.vue";
import PremoteUsers from "./UserProfile/PremoteUsers.vue";
import AddUsers from "./UserProfile/AddUsers.vue";
import AddProject from "./UserProfile/AddProject.vue";

export default {
  components: {
    AddDrawing,
    EditProfileForm,
    AddUsers,
    CreateCompany,
    AddProject,
    UserCard,
    MembersCard,
    PremoteUsers
  }
};
</script>
<style>
</style>
